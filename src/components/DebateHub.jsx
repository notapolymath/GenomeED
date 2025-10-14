import { useState } from 'react'
import { MessageCircle, ThumbsUp, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import CommentSection from './CommentSection.jsx'

const DebateHub = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const debateTopics = [
    {
      id: 1,
      title: "Should We Edit Human Embryos?",
      description: "CRISPR technology now allows us to edit genes in human embryos. Should we use this power to eliminate genetic diseases, or does this cross an ethical line?",
      date: "Week of October 7, 2025",
      category: "Gene Editing",
      likes: 42
    },
    {
      id: 2,
      title: "Designer Babies: Where Do We Draw the Line?",
      description: "If we can edit genes to prevent disease, should we also be allowed to choose traits like intelligence, athletic ability, or appearance?",
      date: "Week of October 14, 2025",
      category: "Genetic Enhancement",
      likes: 38
    },
    {
      id: 3,
      title: "Who Owns Your Genetic Data?",
      description: "Companies like 23andMe collect genetic information. Who should control this data, and how should it be protected?",
      date: "Week of October 21, 2025",
      category: "Privacy & Data",
      likes: 35
    },
    {
      id: 4,
      title: "Gene Therapy: Only for the Rich?",
      description: "Advanced genetic treatments are expensive. How do we ensure equal access to life-saving genetic technologies?",
      date: "Week of October 28, 2025",
      category: "Healthcare Equity",
      likes: 29
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-black animate-in fade-in slide-in-from-top duration-500">
            Debate Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engage with weekly bioethics questions and share your perspectives. This is your space 
            to explore complex ethical dilemmas, challenge your thinking, and learn from diverse viewpoints.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {debateTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedTopic(topic.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {topic.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {topic.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-red-500 transition-colors duration-300">
                  {topic.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {topic.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <ThumbsUp size={18} className="mr-2" />
                    <span className="text-sm">{topic.likes} interested</span>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedTopic(topic.id)
                    }}
                    className="bg-black hover:bg-red-500 text-white transition-colors duration-300"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Join Discussion
                  </Button>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="h-1 bg-gray-200">
                <div className="h-full bg-red-500 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Section */}
        {selectedTopic && (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <CommentSection 
              topicId={selectedTopic} 
              topicTitle={debateTopics.find(t => t.id === selectedTopic)?.title}
            />
          </div>
        )}

        {/* Guidelines */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4 text-black flex items-center">
            <MessageCircle className="mr-3 text-red-500" size={28} />
            Discussion Guidelines
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-start">
              <span className="text-red-500 font-bold mr-3">•</span>
              <span><strong>Be Respectful:</strong> Treat all participants with dignity and respect, even when you disagree.</span>
            </p>
            <p className="flex items-start">
              <span className="text-red-500 font-bold mr-3">•</span>
              <span><strong>Think Critically:</strong> Support your arguments with evidence and reasoning.</span>
            </p>
            <p className="flex items-start">
              <span className="text-red-500 font-bold mr-3">•</span>
              <span><strong>Stay On Topic:</strong> Keep discussions focused on the bioethics question at hand.</span>
            </p>
            <p className="flex items-start">
              <span className="text-red-500 font-bold mr-3">•</span>
              <span><strong>Learn from Others:</strong> Be open to different perspectives and willing to change your mind.</span>
            </p>
            <p className="flex items-start">
              <span className="text-red-500 font-bold mr-3">•</span>
              <span><strong>Ask Questions:</strong> If you don't understand something, ask for clarification.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DebateHub

