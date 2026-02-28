import React, { useState, useEffect } from 'react'
import { Plus, Upload, Trash2, FileText, X } from 'lucide-react'
import toast from 'react-hot-toast'
import documentService from '../../services/documentService.js'
import Spinner from '../../components/common/Spinner.jsx'
import Button from '../../components/common/Button.jsx'

const DocumentListPage = () => {
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)
  //state for upload model

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [uploadFile, setUploadFile] = useState(null)
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploading, setUploading] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [selectedDoc, setSelectedDoc] = useState(null)

  const fetchDocuments = async () => {
    try {
      const data = await documentService.getDocuments()
      setDocuments(data)
    } catch (error) {
      toast.error('Failed to fetch document')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDocuments()
  }, [])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadFile(file)
      setUploadTitle(file.name.replace(/\.[^/.]+$/, ''))
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!uploadFile || !uploadTitle) {
      toast.error('please provide a title and select a file')
      return
    }

    setUploading(true)
    const formData = new FormData()
    formData.append('file', uploadFile)
    formData.append('title', uploadTitle)

    try {
      await documentService.uploadDocument(formData)
      toast.success('Document upload successful')
      setIsUploadModalOpen(false)
      setUploadFile(null)
      setUploadTitle('')
      setLoading(true)
      fetchDocuments()
    } catch (error) {
      toast.error(error.message || "upload failed")
    } finally {
      setUploading(false)
    }
  }

  const handleDeleteRequest = (doc) => {
    setSelectedDoc(doc)
    setIsDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!selectedDoc) return
    setDeleting(true)
    try {
      await documentService.deleteDocument(selectedDoc._id)
      toast.success(`'${selectedDoc.title}' deleted`)
      setIsDeleteModalOpen(false)
      setSelectedDoc(null)
      setDocuments(documents.filter((d) => d._id !== selectedDoc._id))
    } catch (error) {
      toast.error(error.message || 'failed to delete document')
    } finally {
      setDeleting(false)
    }
  }

  const renderContent = () => {
    return <div>renderContent</div>
  }
  return (
    <div className='min-h-screen'>
      {/* Subtle Background */}
      <div className='absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 pointer-events-none' />
      <div className='relative max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex items-center justify-between mb-10'>
          <div>
            <h1 className='text-2xl font-medium text-slate-900 tracking-tight mb-2'>
              My documents
            </h1>
            <p className='text-slate-500 text-sm'>
              Manage abd optimize your learning materials
            </p>
          </div>
          {documents.length > 0 && (
            <Button onClick={() => setIsUploadModalOpen(true)}>
              <Plus className='w-4 h-4' strokeWidth={2.5} />
              Upload Document
            </Button>
          )}
        </div>
        {renderContent()}
      </div>
    </div>
  )
}

export default DocumentListPage
