"use client"

import { useState } from "react"
import ShowCHSLResult from "./ShowCHSLResult"


const ChslForm = () => {
    const [answerkey, setAnswerKey] = useState("")
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = async (e) => {

        e.preventDefault()
        setLoading(true)
        if (answerkey) {
            const res = await fetch(`https://courses.oliveboard.in/cgi/chslrank/get.cgi?url=${answerkey}`)
            const data = await res.json()
            setData(data)
            setLoading(false)
        }
    }
    
    return (
        <div className="w-full max-w-full md:max-w-5xl mx-auto p-4 px-3 md:p-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">CHSL Answer Key Checker</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="chsl-input" className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Answer Key Link
                        </label>
                        <input 
                            type="text" 
                            id="chsl-input" 
                            name="chsl-input" 
                            value={answerkey} 
                            onChange={(e) => setAnswerKey(e.target.value)}
                            placeholder="Paste your answer key URL here..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                        {loading ? 'Calculating...' : 'Calculate Marks'}
                    </button>
                </form>
                {data &&
                <>
                    <hr className="my-6 border-gray-300" />
                    <ShowCHSLResult data={data}/>
                </>
                }
            </div>
        </div>
    )
}

export default ChslForm