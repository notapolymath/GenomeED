import { Dna, Video, FlaskConical, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ScienceCorner = () => {
  const videos = [
    {
      id: 1,
      title: "What is DNA?",
      description: "Learn the basics of DNA structure and how it stores genetic information.",
      duration: "8:45",
      level: "Beginner"
    },
    {
      id: 2,
      title: "How Does CRISPR Work?",
      description: "Discover the revolutionary gene-editing technology that's changing biology.",
      duration: "12:30",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Genetics and Inheritance",
      description: "Understand how traits are passed from parents to offspring.",
      duration: "10:15",
      level: "Beginner"
    },
    {
      id: 4,
      title: "The Future of Gene Therapy",
      description: "Explore how genetic medicine could cure diseases in the coming decades.",
      duration: "15:20",
      level: "Advanced"
    }
  ]

  const activities = [
    {
      id: 1,
      title: "Build a DNA Model",
      description: "Use household items like candy, toothpicks, or straws to create a 3D model of DNA's double helix structure.",
      materials: "Candy, toothpicks, paper",
      time: "30-45 minutes"
    },
    {
      id: 2,
      title: "Extract DNA from Fruit",
      description: "Perform a simple kitchen experiment to extract real DNA from strawberries or bananas.",
      materials: "Strawberries, dish soap, salt, rubbing alcohol",
      time: "20-30 minutes"
    },
    {
      id: 3,
      title: "Family Trait Survey",
      description: "Survey your family members to track inherited traits like eye color, hair texture, or tongue rolling ability.",
      materials: "Paper, pencil, family members",
      time: "15-20 minutes"
    },
    {
      id: 4,
      title: "CRISPR Simulation Game",
      description: "Play an online simulation to understand how scientists use CRISPR to edit genes.",
      materials: "Computer or tablet",
      time: "25-35 minutes"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-black animate-in fade-in slide-in-from-top duration-500">
            Science Corner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your understanding of genetics and biotechnology through engaging videos and 
            hands-on activities. Science is the foundation for informed bioethics discussions.
          </p>
        </div>

        {/* Video Lessons Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Video className="text-red-500 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-black">DNA Lesson Videos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                {/* Video Thumbnail Placeholder */}
                <div className="bg-gradient-to-br from-red-500 to-red-700 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Dna className="text-white opacity-50" size={64} />
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      video.level === 'Beginner' ? 'bg-green-500' :
                      video.level === 'Intermediate' ? 'bg-yellow-500' :
                      'bg-orange-500'
                    } text-white`}>
                      {video.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black group-hover:text-red-500 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {video.description}
                  </p>
                  <Button className="w-full bg-black hover:bg-red-500 text-white transition-colors duration-300">
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* At-Home Activities Section */}
        <section>
          <div className="flex items-center mb-8">
            <FlaskConical className="text-red-500 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-black">At-Home Activities</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-red-500"
              >
                <h3 className="text-xl font-bold mb-3 text-black flex items-center">
                  <BookOpen className="mr-2 text-red-500" size={24} />
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>
                    <strong className="text-black">Materials:</strong> {activity.materials}
                  </p>
                  <p>
                    <strong className="text-black">Time:</strong> {activity.time}
                  </p>
                </div>
                <Button className="w-full mt-4 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                  View Instructions
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Tips */}
        <div className="bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-lg p-8 mt-12 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Dna className="mr-3" size={28} />
            Learning Tips
          </h2>
          <div className="space-y-3">
            <p className="flex items-start">
              <span className="font-bold mr-3">•</span>
              <span>Start with beginner videos to build a strong foundation before moving to advanced topics.</span>
            </p>
            <p className="flex items-start">
              <span className="font-bold mr-3">•</span>
              <span>Take notes while watching videos and review them before participating in debates.</span>
            </p>
            <p className="flex items-start">
              <span className="font-bold mr-3">•</span>
              <span>Try the hands-on activities to reinforce what you've learned through direct experience.</span>
            </p>
            <p className="flex items-start">
              <span className="font-bold mr-3">•</span>
              <span>Share your experiments and findings with family and friends to deepen your understanding.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScienceCorner

