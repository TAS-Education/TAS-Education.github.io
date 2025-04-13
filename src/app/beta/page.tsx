import { CheckCircle, Clock, Gift, HelpCircle, Mail, MessageSquare, Star } from 'lucide-react'

export default function Beta() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/beta_testing.png)' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Join Our Beta Programme
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-white">
            Be among the first to experience the future of education
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Beta Programme Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Early Access</h3>
              <p className="text-gray-600">
                Be among the first to use our innovative AI-powered educational tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Gift className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Special Pricing</h3>
              <p className="text-gray-600">
                Enjoy exclusive beta tester discounts and benefits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MessageSquare className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direct Input</h3>
              <p className="text-gray-600">
                Help shape the future of Ample with your feedback and suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Beta Programme</h2>
          <form 
            action="https://formspree.io/f/mldjzvdy" 
            method="POST"
            className="space-y-6 bg-white p-8 rounded-xl shadow-sm"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your role</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Why are you interested in joining our beta programme?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us why you'd like to join our beta programme"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Join Beta Programme
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">How long does the beta programme last?</h3>
                  <p className="text-gray-600">
                    The beta programme is expected to run for 6 months, with the possibility of extension based on feedback and development needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">What happens after I sign up?</h3>
                  <p className="text-gray-600">
                    You&apos;ll receive a welcome email with instructions on how to access the beta version and get started with Ample.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Is there technical support available?</h3>
                  <p className="text-gray-600">
                    Yes, beta testers have access to dedicated support channels and regular training sessions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">How can I provide feedback?</h3>
                  <p className="text-gray-600">
                    Feedback can be submitted through the platform, via email, or during scheduled feedback sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 