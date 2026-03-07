import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { ChevronLeft,ChevronRight,CheckCircle } from 'lucide-react'
import quizService from '../../services/quizService.js'
import PageHeader from '../common/PageHeader.jsx'
import Spinner from '../common/Spinner.jsx'
import toast from 'react-hot-toast'
import Button from '../common/Button.jsx'

const QuizTakePage = () => {
    const{quizId}=useParams()
    const navigate=useNavigate()
    const[quiz,setQuiz]=useState(null)
    const[loading,setLoading]=useState(true)
    const[currentQuestionIndex,setCurrentQuestionIndex]=useState(0)
    const[selectedAnswers,setSelectedAnswers]=useState({})
    const[submitting,setSubmitting]=useState(false)

    useEffect(()=>{
       const fetchQuiz=async()=>{
        try {
            const response= await quizService.getQuizById(quizId)
            setQuiz(response.data)

        } catch (error) {
            toast.error('Failed to fetch quiz')
            console.error(error)      
        }finally{
            setLoading(false)
        }
       }
       fetchQuiz()
    },[quizId])

    const handleOptionChange=(questionId,optionIndex)=>{
        setSelectedAnswers((prev)=>({
            ...prev,
            [questionId]:optionIndex
        }))
    }

    const handleNextQuestion=()=>{
      if(currentQuestionIndex<quiz.questions.length-1){
        setCurrentQuestionIndex((prev)=>prev+1)
      }
    }

    const handlePreviousQuestion=()=>{
        if(currentQuestionIndex>0){
            setCurrentQuestionIndex((prev)=>prev-1)
        }

    }

    const handleSubmitQuiz=async()=>{

    }

    if(loading){
        return(
            <div className='flex items-center justify-center min-h-[60vh]'>
                <Spinner/>
            </div>
        )
    }

    if(!quiz || quiz.questions.length===0){
        return(
            <div className='flex items-center justify-center min-h-[60vh]'>
                <div className='text-center'>
                    <p className='text-slate-600 text-lg'>Quiz not found or has no questions</p>
                </div>
            </div>
        )
    }

    const currentQuestion= quiz.questions[currentQuestionIndex]
    const isAnswered=selectedAnswers.hasOwnProperty(currentQuestion._id)
    const answeredCount=Object.keys(selectedAnswers).length


  return (
    <div className=''>
     
    </div>
  )
}

export default QuizTakePage
