import { ArrowRight, BookOpen, Brain, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[64vh] py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/ai_classroom.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center">
          <div className="grid grid-cols-1 gap-12 items-center w-full">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Transforming Education with AI
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                Empowering students and educators with intelligent tools for better learning outcomes
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                Join Beta Program <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced AI algorithms provide detailed feedback on student work
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
              <p className="text-gray-600">
                Coverage for all major exam boards and assessment objectives
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <Sparkles className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalised Learning</h3>
              <p className="text-gray-600">
                Tailored feedback and recommendations for each student
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Teaching?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our beta programme and be among the first to experience the future of education
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Sign Up for Beta Access
          </button>
        </div>
      </section>
    </div>
  )
}
