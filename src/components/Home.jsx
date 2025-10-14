import { Dna, Users, BookOpen, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Welcome to <span className="text-black">Genom</span>ED
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Educating Our Future About Our Genetic Future
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            Democratizing bioethics education for middle and high school students
          </p>
          <Button
            onClick={() => setCurrentPage('debate')}
            className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-bottom duration-700 delay-450"
          >
            Join the Discussion
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-black">
            Why Bioethics Matters
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <p className="text-lg mb-4">
              Bioethics matters now more than ever as we are at the cusp of a genetic revolution. 
              As gene editing and biotechnology is democratized, the morality and the limits of such 
              technologies will challenge what is considered natural and our definition of humanity. 
              In the face of such challenges, we need to ensure that everyone are educated members of 
              these discussion and GenomED seeks to facilitate these educational debates.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Explore GenomED
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                 onClick={() => setCurrentPage('home')}>
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Home</h3>
              <p className="text-gray-600">
                Discover our mission, vision, and the importance of bioethics education in today's 
                rapidly evolving genetic landscape.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                 onClick={() => setCurrentPage('debate')}>
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
                <MessageSquare className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Debate Hub</h3>
              <p className="text-gray-600">
                Engage with weekly bioethics questions, share your perspectives, and participate in 
                thoughtful discussions with peers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                 onClick={() => setCurrentPage('science')}>
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
                <Dna className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Science Corner</h3>
              <p className="text-gray-600">
                Learn the fundamentals of genetics through engaging videos, interactive lessons, and 
                hands-on at-home activities.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                 onClick={() => setCurrentPage('resources')}>
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Resources</h3>
              <p className="text-gray-600">
                Access curated guides, helpful links, discussion rules, and additional materials to 
                deepen your understanding of bioethics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Join our community of young thinkers exploring the ethical frontiers of genetics and biotechnology.
          </p>
          <Button
            onClick={() => setCurrentPage('debate')}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

