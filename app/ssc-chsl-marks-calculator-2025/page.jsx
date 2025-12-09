import ChslForm from '@/components/chsl-form'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'SSC CHSL Marks Calculator 2025 | Check Your Expected Score',
  description: 'Calculate your expected marks for SSC CHSL 2025 exam with our free marks calculator. Enter your answer key link and get instant results with detailed analysis, percentile, and rank predictions.',
  keywords: 'SSC CHSL 2025, CHSL marks calculator, SSC exam calculator, CHSL answer key, SSC CHSL score, CHSL result predictor',
  openGraph: {
    title: 'SSC CHSL Marks Calculator 2025 - Edumaster',
    description: 'Calculate your SSC CHSL 2025 marks instantly with detailed analysis',
    type: 'website',
  },
}

const MarksCalculatorCHSL = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-6 pt-4">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Link href="/" className="underline underline-offset-2">
            Go to Home
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            SSC CHSL Marks Calculator - Edumaster
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 mt-1 sm:mt-2">
              2025
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Calculate your expected marks for SSC CHSL 2025 with our easy-to-use marks calculator. 
            Get instant results with detailed analysis, percentile predictions, and rank estimation.
          </p>
        </div>

       

        {/* Calculator Form */}
        <ChslForm />
 {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">Get your marks calculated instantly with real-time data analysis</p>
          </div>

          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Detailed Analysis</h3>
            <p className="text-gray-600 text-sm">Comprehensive breakdown of your performance across all sections</p>
          </div>

          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Accurate Predictions</h3>
            <p className="text-gray-600 text-sm">Reliable percentile and rank predictions based on live data</p>
          </div>
        </div>
        {/* How to Use Section */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">How to Use</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 shadow-lg">1</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Get Your Answer Key Link</h3>
              <p className="text-gray-600 text-sm px-2">Access your SSC CHSL answer key from the official portal</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 shadow-lg">2</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Paste the Link</h3>
              <p className="text-gray-600 text-sm px-2">Enter your answer key URL in the calculator above</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 shadow-lg">3</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">View Results</h3>
              <p className="text-gray-600 text-sm px-2">Get instant detailed analysis with percentile and rank</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MarksCalculatorCHSL