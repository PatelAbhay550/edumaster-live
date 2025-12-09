"use client"

const ShowCHSLResult = ({data}) => {

  const displayData = data || [];

  if (!displayData) return null;

  const sections = ['General Intelligence and Reasoning', 'General Intelligence', 'Quantitative Aptitude', 'English Comprehension'];

  return (
    <div className="mt-8 space-y-6">
      {/* Header Card */}
      <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center md:flex-row flex-col justify-between mb-4">
          <h3 className="text-2xl text-center font-semibold text-gray-800">{displayData.name}</h3>
          <span className="md:px-2 px-5 py-1 bg-white rounded-lg text-sm font-medium text-gray-600 shadow-sm">
            Roll No: {displayData.rollnumber}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{displayData.shift}</span>
        </div>
      </div>

      {/* Overall Performance Card */}
      <div className="bg-white rounded-xl p-6 px-3 border border-gray-200 shadow-sm">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Overall Performance</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-lg p-4">
            <div className="text-sm text-emerald-700 mb-1">Total Score</div>
            <div className="text-2xl font-bold text-emerald-900">{displayData.total}</div>
          </div>
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-4">
            <div className="text-sm text-blue-700 mb-1">Accuracy</div>
            <div className="text-2xl font-bold text-blue-900">{displayData.accuracy}</div>
          </div>
          <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-lg p-4">
            <div className="text-sm text-purple-700 mb-1">Percentile</div>
            <div className="text-2xl font-bold text-purple-900">{displayData.percentile}%</div>
          </div>
          <div className="bg-linear-to-br from-amber-50 to-amber-100 rounded-lg p-4">
            <div className="text-sm text-amber-700 mb-1">Est. Rank</div>
            <div className="text-xl font-bold text-amber-900">{displayData.rank?.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="text-center p-3 px-2 bg-gray-50 rounded-lg border overflow-hidden border-gray-200">
            <div className="text-sm md:text-md text-gray-700 mb-1">Attempted</div>
            <div className="text-lg font-semibold text-gray-900">{displayData.A}</div>
          </div>
          <div className="text-center p-3 px-2 bg-green-50 rounded-lg border border-green-200">
            <div className="text-sm md:text-md text-green-700 mb-1">Correct</div>
            <div className="text-lg font-semibold text-green-900">{displayData.C}</div>
          </div>
          <div className="text-center p-3 px-2 bg-red-50 rounded-lg border border-red-200">
            <div className="text-sm md:text-md text-red-700 mb-1">Wrong</div>
            <div className="text-lg font-semibold text-red-900">{displayData.W}</div>
          </div>
          
        </div>
      </div>

      {/* Sectional Analysis */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Sectional Analysis</h4>
        <div className="space-y-4">
          {displayData.sectionaldata?.map((section, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-medium text-xl text-gray-800">{sections[index]}</h5>
                <span className={`px-3 py-1 rounded-full text-md font-medium ${
                  section.overallperformance === 'Strong' 
                    ? 'bg-green-100 text-green-700' 
                    : section.overallperformance === 'Average'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {section.overallperformance}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                <div>
                  <div className="text-gray-500 text-md mb-1">Score</div>
                  <div className="font-semibold text-md text-gray-900">{section.total}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-md mb-1">Accuracy</div>
                  <div className="font-semibold text-md text-gray-900">{section.accuracy}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-md mb-1">Correct</div>
                  <div className="font-semibold text-md text-green-700">{section.A}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-md mb-1">Percentile</div>
                  <div className="font-semibold text-md text-purple-700">{section.livepercentile}%</div>
                </div>
                <div>
                  <div className="text-gray-500 text-md mb-1">Rank</div>
                  <div className="font-semibold text-md text-amber-700">{section.liverank?.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shift Statistics */}
      <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Shift Statistics</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Shift Rank</div>
            <div className="text-xl font-bold text-gray-900">{displayData.shiftliverank}/{displayData.shiftnumcandidates}</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Shift Percentile</div>
            <div className="text-xl font-bold text-gray-900">{displayData.shiftlivepercentile}%</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Total Candidates</div>
            <div className="text-xl font-bold text-gray-900">{displayData.shiftnumcandidates}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowCHSLResult