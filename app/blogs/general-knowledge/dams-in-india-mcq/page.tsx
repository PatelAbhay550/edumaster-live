import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ArticleStructuredData } from "@/components/structured-data";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = constructMetadata({
  title: "Top 10 Important SSC CHSL MCQs on Dams in India",
  description: "Practice 50 important MCQs about major dams in India. Comprehensive questions with detailed explanations for SSC, Railway, Banking, and other competitive exams. Learn about Tehri Dam, Bhakra Dam, Hirakud Dam, and more.",
  keywords: [
    "dams in india mcq",
    "indian dams questions",
    "ssc gk dams",
    "tehri dam",
    "bhakra dam",
    "hirakud dam",
    "competitive exam preparation",
    "india geography mcq",
    "ssc exam preparation",
    "railway exam gk"
  ],
  path: "/blogs/general-knowledge/dams-in-india-mcq"
});

export default function DamsInIndiaMCQPage() {
    const questions = [
    {
        question_no: 1,
      question: "Which is the highest dam in India?",
      options: [
        "Tehri Dam",
        "Bhakra Dam",
        "Hirakud Dam",
        "Sardar Sarovar Dam"
      ],
      answer: "Tehri Dam",
      explanation: "Tehri Dam is the highest dam in India with a height of 260.5 meters (855 ft). It is on the Bhagirathi River in New Tehri, Uttarakhand. Its construction began in 1978 and was completed in 2006. Tehri Dam is a multi-purpose rock and earth-fill dam."
    },
    {
        question_no: 2,
      question: "Sardar Sarovar dam is on which river?",
      options: [
        "Ganga River",
        "Narmada River",
        "Yamuna River",
        "Godavari River"
      ],
      answer: "Narmada River",
      explanation: "Sardar Sarovar Dam is built on the Narmada River, providing water and power to Gujarat, Madhya Pradesh, Maharashtra, and Rajasthan. The Statue of Unity - the world’s tallest statue, dedicated to Sardar Vallabhbhai Patel, is near the dam."
    },
    {
        question_no: 3,
        question: "Which is the longest dam in India?",
        options: [
            "Hirakud Dam",
            "Bhakra Dam",
            "Mettur Dam",
            "Nagarjuna Sagar Dam"
        ],
        answer: "Hirakud Dam",
        explanation: "Hirakud Dam, located in Odisha, is the longest dam in India, stretching over 25.79 kilometers. Its construction began in 1948 and was completed in 1957. Its is a type of Earthen, concrete, and masonry dam."
    },
    {
        question_no: 4,
        question: "Mettur Dam is on which river?",
        options: [
            "Cauvery River",
            "Krishna River",
            "Godavari River",
            "Tungabhadra River"
        ],
        answer: "Cauvery River",
        explanation: "Mettur Dam is built on the Cauvery (Kaveri) river in Mettur, Salem district, Tamil Nadu. Mettur Dam is also known as the Stanley Reservoir (named after Sir George Stanley, the then Governor of Madras)."
    },
    {
        question_no: 5,
        question: "Hirakud Dam is located in which of the following states?",
        options: [
            "West Bengal",
            "Odisha",
            "Chhattisgarh",
            "Jharkhand"
        ],
        answer: "Odisha",
        explanation: "Hirakud Dam is built across the Mahanadi River, it is located in the state of Odisha. The total length of Hirakud Dam is 25.79 km (including the main dam and dykes), making it the largest dam in India."
    },
    {
        question_no: 6,
        question:"Krishna raja sagar Dam is built on which river?",
        options: [
            "Cauvery River",
            "Krishna River",
            "Godavari River",
            "Tungabhadra River"
        ],
        answer: "Cauvery River",
        explanation: "Krishna raja sagar Dam is built on the Cauvery River in Karnataka. Its construction began in 1911 and was completed in 1932, with the dam officially opened in 1932. Krishna raja sagar Dam was named after the then Maharaja of Mysore, Krishnaraja Wadiyar IV."
    },
    {
        question_no: 7,
        question:"Bhakra Nangal dam is on border of which states?",
        options: [
            "Punjab and Himachal Pradesh",
            "Haryana and Punjab",
            "Himachal Pradesh and Uttarakhand",
            "Punjab and Jammu & Kashmir"
        ],
        answer: "Punjab and Himachal Pradesh",
        explanation: "Bhakra Nangal Dam is located on the border of Punjab and Himachal Pradesh. It is the highest gravity dam in India. It stands as a major achievement of early independent India and is often referred to as the \"Temple of Modern India\", a phrase coined by Pandit Jawaharlal Nehru."
    },
    {
        question_no: 8,
        question:"Srisailam Dam is built on which river?",
        options: [
            "Cauvery River",
            "Krishna River",
            "Godavari River",
            "Tungabhadra River"
        ],
        answer: "Krishna River",
        explanation: "Srisailam Dam is built on the Krishna River in the Indian states of Andhra Pradesh and Telangana. It is located near the famous Srisailam Mallikarjuna Jyotirlinga Temple, making it both an engineering marvel and a major pilgrimage destination."
    },
    {
        question_no: 9,
        question:"Bisalpur Dam is located in which state?",
        options: [
            "Rajasthan",
            "Uttarakhand",
            "Chhattisgarh",
            "Madhya Pradesh"
        ],
        answer: "Rajasthan",
        explanation: "Bisalpur Dam is located in the Tonka village, near Deoli, Ajmer district, Rajasthan. Its construction was completed in 1999. It is built on the Banas River, a tributary of the Chambal River, and is primarily used for irrigation and drinking water supply."
    },
    {
        question_no: 10,
        question:"Pong (Maharana Pratap Sagar) Dam is built on which river?",
        options: [
            "Beas River",
            "Sutlej River",
            "Yamuna River",
            "Chenab River"
        ],
        answer: "Beas River",
        explanation: "The Pong Dam, officially known as the Maharana Pratap Sagar, is a major earth-fill embankment dam constructed on the Beas River in Himachal Pradesh, India. It was also designated as a Ramsar Wetland Site in 2002, renowned for attracting migratory birds and promoting eco-tourism in Himachal Pradesh."
    }
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 md:px-4 px-2 py-8">
        <ArticleStructuredData
        title="Top 10 MCQs on Dams in India"
        description="Test your knowledge about major dams in India with these important MCQs frequently asked in various competitive examinations."
        datePublished="2025-11-05T00:00:00+00:00"
        dateModified="2025-11-05T00:00:00+00:00"
        path="/blogs/general-knowledge/dams-in-india-mcq"
        category="General Knowledge"
      />
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Top 10 Important SSC CHSL MCQs on Dams in India</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Last Updated: November 5, 2025 12:10 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>Category: General Knowledge</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>For: SSC Exams</span>
          </div>
        </div>
      </header>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <p className="lead">
          This blog post presents 10 important multiple-choice questions (MCQs) about major dams in India. These questions are frequently asked in various competitive examinations such as SSC, Railway, and Banking exams. Each question is followed by four options, the correct answer, and a detailed explanation to help you understand the topic better.
        </p>
        <Image 
          src="/blog-images/top-10-important-dams.webp"
          alt="Dams in India"
          width={1200}
          height={1200}
          className="rounded-lg mt-3"
          priority={true}
        />
        
      </section>

       <div className="space-y-8">
          {questions.map((q, index) => (
            <div key={index} className="rounded-lg border md:p-6 p-3 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 flex-shrink-0 mt-1">
                    {q.question_no}
                  </span>
                  <h3 className="font-medium text-lg">{q.question}</h3>
                </div>
                <div className="grid gap-3 pl-9">
                  {q.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center gap-2">
                      <span className="font-medium">{String.fromCharCode(97 + optIndex)})</span>
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:pl-9">
                <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/50">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Answer:</span>
                    <span>{q.answer}</span>
                  </div>
                  <p className="mt-2 text-sm">{q.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
 <section className="rounded-lg bg-slate-50 md:p-6 p-3 dark:bg-slate-900">
          <h2 className="text-xl font-semibold mb-4">Study Notes</h2>
          <div className="space-y-4">
            <p>
                Dams play a crucial role in India's water management, irrigation, and hydroelectric power generation. Some of the major dams in India include Tehri Dam, Bhakra Dam, Hirakud Dam, Sardar Sarovar Dam, Mettur Dam, Krishna Raja Sagar Dam, Bhakra Nangal Dam, Srisailam Dam, Bisalpur Dam, and Pong Dam. Each dam has its unique features and significance in terms of location, purpose, and engineering marvels.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Key Dam Timeline</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Tehri Dam (2006)</li>
                  <li>• Bhakra Dam (1963)</li>
                  <li>• Hirakud Dam (1957)</li>
                  <li>• Sardar Sarovar Dam (2006)</li>
                  <li>• Mettur Dam (1934)</li>
                  <li>• Krishna Raja Sagar Dam (1932)</li>
                </ul>
              </div>
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Important Dams and Their Rivers</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Tehri Dam - Bhagirathi River</li>
                  <li>• Bhakra Dam - Sutlej River</li>
                  <li>• Hirakud Dam - Mahanadi River</li>
                  <li>• Sardar Sarovar Dam - Narmada River</li>
                  <li>• Mettur Dam - Kaveri River</li>
                  <li>• Krishna Raja Sagar Dam - Kaveri River</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      <footer className="border-t pt-6">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="font-bold">Related Topics:</span>
            <Link href="/blogs/history/delhi-sultanate-mcq" className="hover:text-blue-600">Delhi Sultanate MCQ</Link>
            <Link href="/blogs/reasoning/chsl-reasoning-mcq" className="hover:text-blue-600">CHSL Reasoning MCQ</Link>
            <Link href="/blogs/english/active-passive-voice-mcq" className="hover:text-blue-600">Active Passive Voice MCQ</Link>
          </div>
        </footer>
    </div>
  );
}