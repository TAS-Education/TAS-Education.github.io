import { BookOpen, Lightbulb, Target, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[64vh] py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/founders.png)',
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
                About TAS Education
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                Transforming education through innovative AI technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At TAS Education, we believe that every student deserves access to high-quality, personalised feedback. Our mission is to empower educators and students with AI-powered tools that enhance the learning experience and improve educational outcomes.
              </p>
              <p className="text-lg text-gray-600">
                We&apos;re committed to making advanced educational technology accessible to all, helping to bridge the gap between traditional teaching methods and modern learning needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-600">To revolutionise education through AI-powered personalised learning experiences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                    <p className="text-gray-600">Innovation, accessibility, and excellence in education.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
                    <p className="text-gray-600">Combining cutting-edge AI with proven educational methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <Image
                    src="/simon_profile.jpg"
                    alt="Simon Balderson"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Simon Balderson</h3>
                <p className="text-blue-600 font-medium mb-4">Co-Founder</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in education technology, Simon leads TAS Education with a vision to transform how students learn and teachers teach.
                </p>
                <Link 
                  href="https://www.linkedin.com/in/simon-balderson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn Profile
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <Image
                    src="/tabatha_profile.jpeg"
                    alt="Tabatha Sheehan"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Tabatha Sheehan</h3>
                <p className="text-blue-600 font-medium mb-4">Co-Founder</p>
                <p className="text-gray-600 mb-4">
                  Tabatha brings extensive expertise in AI and machine learning, driving the technical innovation behind our educational tools.
                </p>
                <Link 
                  href="https://www.linkedin.com/in/tabatha-sheehan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education Experts</h3>
              <p className="text-gray-600">
                Our team includes experienced educators and curriculum specialists.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Researchers</h3>
              <p className="text-gray-600">
                Leading experts in artificial intelligence and machine learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product Team</h3>
              <p className="text-gray-600">
                Dedicated professionals focused on creating exceptional educational tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 