import dotenv from 'dotenv'
import { GoogleGenAI } from '@google/genai'
import { text } from 'express'
dotenv.config()

const ai= new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY})
if(!process.env.GEMINI_API_KEY){
    console.error('FATAL ERROR:GEMINI_API_KEY isnot set in the environment variables ')
    process.exit(1)
}

export const generateFlashcards= async(text,count=10)=>{
    const prompt= `Generate exactly ${count} educational flashcards from the following text.
    Format each flashcard as :
    Q:[Clear, specific question]
    A:[Concise, accurate answer]
    D:[Difficulty level :easy,medium ,or hard ]
    
    Separate each flashcard with "---"
    
    Text:${text.substring(0,15000)}`;
    try {
        const response= await ai.models.generateContent({
            model:"gemini-3-flash-preview",
            contents:prompt
        })

        const generatedText= response.text
        console.log(response)

        //parse response 
        const flashcards=[]
        const cards= generatedText.split('---').filter(c=>c.trim())

        for(const card of cards){
            const lines= card.trim().split('\n')
            let question='',
                answer='', 
                difficulty='medium';

            for(const line of lines){
                if(line.startsWith('Q:')){
                    question=line.substring(2).trim()
                }else if(line.startsWith('A:')){
                    answer:line.substring(2).trim()
                }else if(line.startsWith('D:')){
                    const diff= line.substring(2).trim().toLowerCase()
                    if(['easy','medium','hard'].includes(diff)){
                        difficulty=diff 
                    }
                }
            }
            if(question && answer){
                flashcards.push({question,answer,difficulty})
            }
        }
        return flashcards.slice(0,count)

    } catch (error) {
        console.error('Gemini API error:',error)
        throw new Error('Failed to generate flashcards')
    }
}

export const generateQuiz= async(text,numQuestions=5)=>{
    const prompt=`Generate exactly ${numQuestions} multiple choice questions from the following text
    format each question as:
    Q:[Question]
    01:[Option 1]
    02:[Option 2]
    03:[Option 3]
    04:[Option 4]
    C:[Correct option-exactly as written above]
    E:[Brief Explanation]
    D:[Difficulty:easy,medium, or hard]

    Separate questions with "---"

    Text:${text.substring(0,15000)}
    `
    try {
         const response= await ai.models.generateContent({
            model:"gemini-3-flash-preview",
            contents:prompt
        })

        const generatedText=response.text
        const questions=[]
        const questionBlocks=generatedText.split('---').filter(q=>q.trim())

        for(const block of questionBlocks){
            const lines=block.trim().split('\n')
            let question='',options=[],correctAnswer='',explanation='',difficulty='medium'
            for(const line of lines){
                const trimmed=line.trim()
                if(trimmed.startsWith('Q:')){
                    question=trimmed.substring(2).trim()
                }else if(trimmed.match(/^0\d:/)){
                    options.push(trimmed.substring(3).trim())
                }else if(trimmed.startsWith('C:')){
                    correctAnswer=trimmed.substring(2).trim()
                }else if(trimmed.startsWith('E:')){
                    explanation=trimmed.substring(2).trim()
                }else if(trimmed.startsWith('D:')){
                    const diff= trimmed.substring(2).trim().toLowerCase()
                    if(['easy','medium','hard'].includes(diff)){
                        difficulty=diff
                    }
                }
            }

            if(question && options.length===4 && correctAnswer){
                questions.push({
                    question,
                    options,
                    correctAnswer,
                    explanation,
                    difficulty

                })
            }
        }
        return questions.slice(0,numQuestions)

    } catch (error) {
        console.error('Gemini APi Error',error)
        throw new Error('Failed to generate quiz')
    }
}

export const generateSummary= async(text)=>{
    const prompt=`Provide a concise summary of the following text,highlighting the key concepts,main ideas and important points
    keep the summary clear and structured
    Text:${text.substring(0,20000)} `
    try {
        const response= await ai.models.generateContent({
            model:"gemini-3-flash-preview",
            contents:prompt
        })
        const generatedText=response.text
        return generatedText
    } catch (error) {
        console.error('Gemini Api error',error)
        throw new Error('Failed to generate summary')
    }
}

