import { BookOpen, ExternalLink, FileText, Users, Shield, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Resources = () => {
  const guides = [
    {
      id: 1,
      title: "Beginner's Guide to Bioethics",
      description: "A comprehensive introduction to bioethical principles, key concepts, and how to think through ethical dilemmas.",
      icon: BookOpen,
      type: "PDF Guide"
    },
    {
      id: 2,
      title: "How to Participate in Debates",
      description: "Learn effective argumentation strategies, how to structure your thoughts, and engage respectfully with others.",
      icon: Users,
      type: "Interactive Guide"
    },
    {
      id: 3,
      title: "Understanding Genetic Privacy",
      description: "Explore the complex issues surrounding genetic data, privacy rights, and informed consent.",
      icon: Shield,
      type: "Article Series"
    },
    {
      id: 4,
      title: "Critical Thinking Framework",
      description: "Develop your analytical skills with this step-by-step framework for evaluating bioethical arguments.",
      icon: Lightbulb,
      type: "Worksheet"
    }
  ]

  const externalLinks = [
    {
      id: 1,
      title: "National Human Genome Research Institute",
      url: "https://www.genome.gov",
      description: "Official resource for genetics education and research from the NIH."
    },
    {
      id: 2,
      title: "Khan Academy: Biology & Genetics",
      url: "https://www.khanacademy.org/science/biology",
      description: "Free video lessons and practice exercises on genetics and molecular biology."
    },
    {
      id: 3,
      title: "The Hastings Center",
      url: "https://www.thehastingscenter.org",
      description: "Leading bioethics research institute with articles and case studies."
    },
    {
      id: 4,
      title: "yourgenome by Wellcome",
      url: "https://www.yourgenome.org",
      description: "Interactive genetics education platform with animations and activities."
    },
    {
      id: 5,
      title: "CRISPR Therapeutics Educational Resources",
      url: "https://www.crisprtx.com",
      description: "Learn about real-world applications of gene editing technology."
    }
  ]

  const discussionRules = [
    {
      title: "Respect and Civility",
      description: "Treat all participants with dignity. Personal attacks, harassment, or discriminatory language will not be tolerated."
    },
    {
      title: "Evidence-Based Arguments",
      description: "Support your claims with credible sources, scientific evidence, or logical reasoning. Avoid spreading misinformation."
    },
    {
      title: "Stay On Topic",
      description: "Keep discussions focused on the bioethics question at hand. Off-topic comments may be removed."
    },
    {
      title: "Embrace Diverse Perspectives",
      description: "Bioethics involves multiple viewpoints. Be open to learning from others, even when you disagree."
    },
    {
      title: "No Spam or Self-Promotion",
      description: "This is a learning community, not a marketplace. Commercial content and spam are prohibited."
    },
    {
      title: "Privacy and Safety",
      description: "Do not share personal information about yourself or others. Protect your privacy and that of your peers."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-black animate-in fade-in slide-in-from-top duration-500">
            Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access curated guides, helpful links, and community guidelines to support your bioethics 
            learning journey. Everything you need to become an informed participant in genetic discourse.
          </p>
        </div>

        {/* Educational Guides */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FileText className="text-red-500 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-black">Educational Guides</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => {
              const Icon = guide.icon
              return (
                <div
                  key={guide.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-red-500 group"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-100 p-3 rounded-lg mr-4 group-hover:bg-red-500 transition-colors duration-300">
                      <Icon className="text-red-500 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {guide.type}
                      </span>
                      <h3 className="text-xl font-bold text-black mt-1 group-hover:text-red-500 transition-colors duration-300">
                        {guide.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <Button className="w-full bg-black hover:bg-red-500 text-white transition-colors duration-300">
                    Download Guide
                  </Button>
                </div>
              )
            })}
          </div>
        </section>

        {/* External Links */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <ExternalLink className="text-red-500 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-black">Helpful Links</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {externalLinks.map((link, index) => (
              <div
                key={link.id}
                className={`p-6 hover:bg-gray-50 transition-colors duration-300 ${
                  index !== externalLinks.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black mb-2 flex items-center">
                      {link.title}
                      <ExternalLink className="ml-2 text-red-500" size={18} />
                    </h3>
                    <p className="text-gray-600 mb-2">{link.description}</p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-300"
                    >
                      {link.url}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discussion Rules */}
        <section>
          <div className="flex items-center mb-8">
            <Shield className="text-red-500 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-black">Community Guidelines & Discussion Rules</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              GenomED is committed to fostering a safe, respectful, and intellectually stimulating 
              environment for all participants. Please review and follow these guidelines when engaging 
              in discussions on our platform.
            </p>
            
            <div className="space-y-6">
              {discussionRules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">{rule.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-700">
                <strong className="text-black">Violations:</strong> Participants who violate these 
                guidelines may have their comments removed or be temporarily suspended from the platform. 
                We believe in second chances and will work with users to understand and correct problematic behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Support */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-lg shadow-lg p-8 mt-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="mb-6">
            If you have questions about bioethics, need clarification on a topic, or want to suggest 
            new resources, we're here to help. Our community thrives on curiosity and collaboration.
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Resources

