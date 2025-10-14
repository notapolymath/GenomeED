import { useState } from 'react'
import { Send, CheckCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const SubmitQuestionForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    category: 'gene-editing'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        question: '',
        category: 'gene-editing'
      })
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-t-lg relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-300"
          >
            <X size={24} />
          </button>
          <h2 className="text-3xl font-bold mb-2">Submit Your Question</h2>
          <p className="text-red-100">
            Have a bioethics question you'd like to see discussed? Share it with our community!
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                />
                <p className="text-xs text-gray-500 mt-1">
                  We'll only use this to follow up on your question if needed
                </p>
              </div>

              {/* Category Field */}
              <div className="mb-6">
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                  Question Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 bg-white"
                >
                  <option value="gene-editing">Gene Editing</option>
                  <option value="genetic-enhancement">Genetic Enhancement</option>
                  <option value="privacy-data">Privacy & Data</option>
                  <option value="healthcare-equity">Healthcare Equity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Question Field */}
              <div className="mb-6">
                <label htmlFor="question" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Question <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="What bioethics question would you like the community to discuss? Be as specific as possible..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum 50 characters
                </p>
              </div>

              {/* Guidelines */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-black mb-2 text-sm">Submission Guidelines:</h3>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Questions should be relevant to bioethics and genetics</li>
                  <li>• Be respectful and avoid controversial political topics</li>
                  <li>• Questions will be reviewed before being posted</li>
                  <li>• We may edit for clarity or combine similar questions</li>
                </ul>
              </div>

              {/* Submit Button */}
              <div className="flex space-x-3">
                <Button
                  type="submit"
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 transition-colors duration-300"
                  disabled={formData.question.length < 50}
                >
                  <Send size={18} className="mr-2" />
                  Submit Question
                </Button>
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 py-3"
                >
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            // Success Message
            <div className="text-center py-12 animate-in zoom-in duration-500">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-500" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Question Submitted!</h3>
              <p className="text-gray-600 mb-2">
                Thank you for your contribution to our community.
              </p>
              <p className="text-gray-600">
                We'll review your question and may feature it in an upcoming debate.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SubmitQuestionForm

