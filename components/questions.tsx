"use client"

import * as React from "react"
import { useState } from "react"
import { Check, X } from "lucide-react"

interface Question {
  question_no: number
  question: string
  options: string[]
  answer: string
  solution: string
}

interface QuestionsProps {
  questions: Question[]
}

export function Questions({ questions }: QuestionsProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>(
    {}
  )
  const [showSolutions, setShowSolutions] = useState<{ [key: number]: boolean }>(
    {}
  )

  const handleAnswerSelect = (questionNo: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionNo]: answer,
    }))
  }

  const toggleSolution = (questionNo: number) => {
    setShowSolutions((prev) => ({
      ...prev,
      [questionNo]: !prev[questionNo],
    }))
  }

  const isCorrect = (questionNo: number, selectedAnswer: string) => {
    const question = questions.find((q) => q.question_no === questionNo)
    return question?.answer === selectedAnswer
  }

  return (
    <div className="space-y-8">
      {questions.map((question) => (
        <div
          key={question.question_no}
          className="rounded-lg border border-gray-200 p-6"
        >
          <div className="mb-4">
            <h3 className="text-lg font-medium">
              {question.question_no}. {question.question}
            </h3>
          </div>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(question.question_no, option)}
                className={`w-full rounded-md px-4 py-2 text-left transition-colors ${
                  selectedAnswers[question.question_no] === option
                    ? isCorrect(question.question_no, option)
                      ? "bg-green-100 text-green-900"
                      : "bg-red-100 text-red-900"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {selectedAnswers[question.question_no] === option && (
                    isCorrect(question.question_no, option) ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <X className="h-5 w-5 text-red-600" />
                    )
                  )}
                </div>
              </button>
            ))}
          </div>
          {selectedAnswers[question.question_no] && (
            <div className="mt-4">
              <button
                onClick={() => toggleSolution(question.question_no)}
                className="text-blue-600 hover:text-blue-800"
              >
                {showSolutions[question.question_no]
                  ? "Hide Solution"
                  : "Show Solution"}
              </button>
              {showSolutions[question.question_no] && (
                <div className="mt-2 rounded-md bg-blue-50 p-4 text-blue-900">
                  <p className="text-sm">{question.solution}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}