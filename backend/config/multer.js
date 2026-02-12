import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url' //Needed in ES Modules to get current file path

const __filename= fileURLToPath(import.meta.url)
const __dirname =path.dirname(__filename)

const uploadDir= path.join(__dirname,'../uploads/documents')

if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir,{recursive:true})
}

//configure storage

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadDir)
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix= Date.now() + '_' + Math.round(Math.random()*1E9) 
        cb(null,`${uniqueSuffix}-${file.originalname}`)
    }
})

//file filter -only PDFs

const fileFilter= (req,file,cb)=>{
    if(file.mimetype==='application/pdf'){
        cb(null,true)
    }else{
        cb(new Error('Only PDF files are allowed !'),false)
    }
}

const upload= multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:parseInt(process.env.MAX_FILE_SIZE) || 10485760
    }
})

export default upload

    
