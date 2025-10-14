import { useState } from 'react'
import { HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import DebateHub from './components/DebateHub.jsx'
import ScienceCorner from './components/ScienceCorner.jsx'
import Resources from './components/Resources.jsx'
import SubmitQuestionForm from './components/SubmitQuestionForm.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isFormOpen, setIsFormOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'debate':
        return <DebateHub />
      case 'science':
        return <ScienceCorner />
      case 'resources':
        return <Resources />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Floating Action Button - Submit Question */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-40 group"
        aria-label="Submit Your Question"
      >
        <HelpCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Submit Your Question
        </span>
      </button>

      {/* Submit Question Form Modal */}
      <SubmitQuestionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-red-500">Genom</span>ED
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Democratizing bioethics education for middle and high school students. 
                Join us in exploring the ethical frontiers of genetics and biotechnology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('debate')}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    Debate Hub
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('science')}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    Science Corner
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('resources')}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    Resources
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Get Involved</h4>
              <p className="text-gray-400 mb-4">
                Have questions or want to contribute? We'd love to hear from you.
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300"
              >
                Submit a Question
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GenomED. All rights reserved. Educating our future about our genetic future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

