import { Brain, CheckCircle, FileText, GraduationCap, LineChart, MessageSquare } from 'lucide-react'
import Image from 'next/image'

export default function Product() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[64vh] py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/essay_analysis.png)',
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
                Meet Ample
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                Your AI-powered educational assistant for personalised learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is Ample?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ample is an innovative AI-powered educational tool that provides instant, detailed feedback on student work. Using advanced natural language processing and machine learning algorithms, Ample analyses essays and assignments to offer personalised insights and recommendations.
              </p>
              <p className="text-lg text-gray-600">
                Our platform helps educators save time while providing students with immediate, constructive feedback that promotes learning and improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="relative h-[300px] w-full mb-6">
                <Image
                  src="/essay_analysis.png"
                  alt="Ample essay analysis interface"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Instant feedback on student work</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Personalised learning recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Support for all major exam boards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Comprehensive assessment coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced algorithms provide detailed feedback on structure, content, and style.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MessageSquare className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Constructive Feedback</h3>
              <p className="text-gray-600">
                Clear, actionable suggestions to help students improve their work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <LineChart className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor student improvement over time with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Boards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Supported Exam Boards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">A-Level</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AQA</li>
                <li>• Edexcel</li>
                <li>• OCR</li>
                <li>• WJEC/Eduqas</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileText className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">GCSE</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AQA</li>
                <li>• Edexcel</li>
                <li>• OCR</li>
                <li>• WJEC/Eduqas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Teaching?</h2>
          <p className="text-xl mb-8">
            Join our beta program and be among the first to experience Ample
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Join Beta Program
          </button>
        </div>
      </section>
    </div>
  )
} 