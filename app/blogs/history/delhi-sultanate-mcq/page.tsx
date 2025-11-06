import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ArticleStructuredData } from "@/components/structured-data";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Top 15 MCQs on Delhi Sultanate | SSC & UPSC History Questions",
  description: "Practice important questions on Delhi Sultanate period with detailed explanations. Perfect for SSC, Railway, Banking, and UPSC exam preparation. Learn about Lodhi Dynasty, Khilji Dynasty, and more.",
  keywords: [
    "delhi sultanate mcq",
    "medieval india questions",
    "lodhi dynasty",
    "khilji dynasty",
    "tughlaq dynasty",
    "indian history mcq",
    "ssc history questions",
    "upsc delhi sultanate",
    "amir khusrau",
    "alauddin khilji"
  ],
  path: "/blogs/history/delhi-sultanate-mcq"
});

export default function DelhiSultanateMCQPage() {
  const questions = [
    {
      question_no: 1,
      question: "By whom was the Lodi dynasty founded?",
      options: [
        "Ibrahim Lodi",
        "Sikandar Lodi",
        "Bahlol Lodi",
        "Khizr Khan",
        "None of the above"
      ],
      answer: "Bahlol Lodi",
      solution: "The correct answer is Bahlol Lodi. Key Points: Bahlul Lodhi was the founder of the Lodhi dynasty. He was the chief of the Pashtun Lodhi Tribe. He became sultan in 1451. He was the first Afghani King. He introduced new copper coins called Bahloli Coins. He conquered Gwalior, Santhal, Sakit, and Mewat. He ruled over Delhi till 1489."
    },
    {
      question_no: 2,
      question: "Which of the following is not correctly matched?",
      options: [
        "Deva Raya II : Abdur Razzak",
        "Mohd. bin Tughlaq : Ibn Batuta",
        "Balban : Marco Polo",
        "More than one of the above",
        "None of the above"
      ],
      answer: "Balban : Marco Polo",
      solution: "The correct answer is Balban : Marco Polo. There is no recorded historical evidence of Marco Polo visiting India during Balban's reign. Marco Polo primarily traveled to regions like China, Southeast Asia, and Persia. Correct matching includes Deva Raya II with Abdur Razzak and Mohammad bin Tughlaq with Ibn Batuta."
    },
    {
      question_no: 3,
      question: "To whom Balban had nominated as his successor before his death?",
      options: [
        "Muhammad",
        "Kaiqubad",
        "Bughra Khan",
        "More than one of the above",
        "None of the above"
      ],
      answer: "Kaiqubad",
      solution: "The correct answer is Kaiqubad. Ghiyas-ud-din Balban nominated his grandson Kaiqubad as his successor before his death in 1287 CE. Kaiqubad was the son of Bughra Khan, Balban's second son, who was the governor of Bengal at the time. This decision was made despite the internal challenges and growing instability within the Sultanate."
    },
    {
      question_no: 4,
      question: "Which of the following traveller visited India during the reign of Muhammad Bin Tughlaq?",
      options: [
        "Al-Beruni",
        "Ibn Battuta",
        "Barbosa",
        "More than one of the above",
        "None of the above"
      ],
      answer: "Ibn Battuta",
      solution: "Ibn Battuta visited India during the reign of Muhammad Bin Tughlaq. He was a Moroccan scholar and traveller who travelled widely in the medieval world. He wrote the book named Rihla under the title 'A Gift to Those Who Contemplate the Wonders of Cities and the Marvels of Traveling'."
    },
    {
      question_no: 5,
      question: "Who among the following abolished the Iqta system?",
      options: [
        "Iltutmish",
        "Alauddin Khilji",
        "Qutbuddin Aibak",
        "More than one of the above",
        "None of the above"
      ],
      answer: "Alauddin Khilji",
      solution: "Alauddin Khilji abolished the Iqta system. The Iqta system was a unique type of land distribution and administrative system introduced during the reign of Iltutmish. Major changes were seen during the reign of Alauddin Khalji (1296-1316), including unlimited expansion of boundaries and imposition of full rent on the peasantry."
    },
    {
      question_no: 6,
      question: "Which of the following rulers issued copper coins named as Jittal?",
      options: [
        "Mohammad bin Tughlaq",
        "Firoz Shah Tughlaq",
        "Iltutmish",
        "Quli Qutub Shah"
      ],
      answer: "Iltutmish",
      solution: "Iltutmish (1211-1236) introduced the silver coin (tanka) and copper coin (jittal). He succeeded Qutub-ud-din-Aibak and was the third ruler of the Delhi Sultanate, belonging to the Mamluk dynasty. He constituted corp of forty loyal slave Amirs known as Turkan-i-Chihalgani."
    },
    {
      question_no: 7,
      question: "Which dynasty of Delhi Sultanate ruled for the shortest time?",
      options: [
        "Khilji",
        "Tughlaq",
        "Sayyid",
        "Lodi"
      ],
      answer: "Khilji",
      solution: "The Khilji Dynasty ruled for the shortest period (30 years) from 1290-1320. For comparison: Slave Dynasty (1206-1290, 84 years), Tughlaq Dynasty (1320-1414, 94 years), Sayyid Dynasty (1414-1450, 36 years), and Lodhi dynasty (1451-1526, 75 years)."
    },
    {
      question_no: 8,
      question: "Amir Khusrau was a famous poet in the court of",
      options: [
        "Akbar",
        "Shahjahan",
        "Ibrahim Lodhi",
        "Alauddin Khilji"
      ],
      answer: "Alauddin Khilji",
      solution: "Amir Khusrau was a prolific classical poet in Alauddin Khilji's court. He was a Sufi musician, poet and scholar known as the 'father of qawwali'. He created the musical genres of 'Tarana' and 'Kaul' and was given the title 'Amir' by Alauddin Khilji."
    },
    {
      question_no: 9,
      question: "Ghiyas-ud-din Tughlaq was the governor of ______ during the reign of Ala-ud-din Khilji.",
      options: [
        "Bengal",
        "Rajasthan",
        "Kashmir",
        "Punjab"
      ],
      answer: "Punjab",
      solution: "Ghiyas-ud-din Tughlaq was the governor of Punjab during Ala-ud-din Khilji's reign. He later established the Tughlaq dynasty and improved the postal system and encouraged agriculture during his era."
    },
    {
      question_no: 10,
      question: "Diwan-I-Ariz was related to which department in the Delhi Sultanate?",
      options: [
        "Foreign affairs",
        "Royal correspondence",
        "Department of Military",
        "Finance Department"
      ],
      answer: "Department of Military",
      solution: "Diwan-i-Ariz was related to the Department of Military. It was firstly introduced by Balban and headed by Ariz-i-Mumalik. This department was responsible for military administration and organization."
    },
    {
      question_no: 11,
      question: "Which of the following rulers built the mosque called 'Adhai-din-ka-Jhopra'?",
      options: [
        "Balban",
        "Abraham Lodi",
        "Iltutmish",
        "Qutub-ud-Din-Aibak"
      ],
      answer: "Qutub-ud-Din-Aibak",
      solution: "Qutub-ud-din Aibak built the famous 'Adhai Din Ka Jhonpra' mosque in Ajmer, Rajasthan. He was the founder of the Slave dynasty and ruled from 1206 to 1210. He was known as Lakh Baksha Sultan and also initiated the construction of Qutub Minar."
    },
    {
      question_no: 12,
      question: "_________ was the founder of the Lodi Dynasty.",
      options: [
        "Sultan Ibrahim",
        "Ala-ud-din Lodi",
        "Ibranhim Lodi",
        "Bahlul Lodi"
      ],
      answer: "Bahlul Lodi",
      solution: "The Lodi dynasty was founded by Bahlul Khan Lodi. It was an Afghan dynasty and the last dynasty of the Delhi Sultanate, ruling from 1451 to 1526. Sikandar Lodi was the son of Bahlul and founded Agra in 1504."
    },
    {
      question_no: 13,
      question: "Which of the following combinations of 'Ruler – Predecessor' is correct with respect to the Delhi Sultanate?",
      options: [
        "Alaudddin Khalji – Jalaluddin Khalji",
        "Iltutumish – Balban",
        "Muhammad Tughluq – Firuz Shah Tughluq",
        "Ghiyasuddin Tughluq – Muhammad Tughluq"
      ],
      answer: "Alaudddin Khalji – Jalaluddin Khalji",
      solution: "Alauddin Khilji was preceded by Jalaluddin Khilji. Alauddin Khilji was a nephew and son-in-law of Jalaluddin Khilji. He killed Jalaluddin Khilji and succeeded the throne in 1296."
    },
    {
      question_no: 14,
      question: "In the Battle of Khatoli (1517) Rana Sanga of Mewar defeated Sultan of Delhi, ______ Lodhi and imprisoned him and then released him after collecting ransom.",
      options: [
        "Bahlul Khan",
        "Qutb-ud-din",
        "Ibrahim",
        "Sikandar"
      ],
      answer: "Ibrahim",
      solution: "In the Battle of Khatoli (1517), Rana Sanga of Mewar defeated Ibrahim Lodhi, imprisoned him, and released him after collecting ransom. Ibrahim Lodhi was the last king of the Lodhi dynasty and was later defeated by Babur in the First Battle of Panipat in 1526."
    },
    {
        question_no: 15,
        question: "Which of the following Delhi Sultanate rulers shifted his capital to Daulatabad (Deogiri)?",
        options: [
          "Alauddin Khilji",
            "Muhammad bin Tughlaq",
            "Firuz Shah Tughlaq",
            "Iltutmish"
        ],
        answer: "Muhammad bin Tughlaq",
        solution: "Muhammad bin Tughlaq shifted his capital from Delhi to Daulatabad (Deogiri) in 1327. This move was part of his ambitious plans to establish a more centralized and efficient administration."
    }
  ];

  return (
    <>
      <ArticleStructuredData
        title="Top 15 MCQs on Delhi Sultanate"
        description="Practice important questions on Delhi Sultanate period with detailed explanations. Perfect for competitive exam preparation."
        datePublished="2025-11-05T00:00:00+00:00"
        dateModified="2025-11-05T00:00:00+00:00"
        path="/blogs/history/delhi-sultanate-mcq"
        category="History"
      />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Top 15 MCQs on Delhi Sultanate</h1>
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
            <span>Category: History</span>
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
            Master your knowledge of the Delhi Sultanate period with these carefully selected MCQs. 
            Perfect for competitive exam preparation, each question comes with detailed explanations.
          </p>
        </section>

        <div className="space-y-8">
          {questions.map((q, index) => (
            <div key={index} className="rounded-lg border p-6 space-y-4">
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
              <div className="pl-9">
                <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/50">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Answer:</span>
                    <span>{q.answer}</span>
                  </div>
                  <p className="mt-2 text-sm">{q.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
          <h2 className="text-xl font-semibold mb-4">Study Notes</h2>
          <div className="space-y-4">
            <p>
              The Delhi Sultanate (1206-1526) was a period of Muslim rule in India 
              that saw five dynasties: Slave (Mamluk), Khilji, Tughlaq, Sayyid, and 
              Lodi. Each dynasty contributed significantly to India's administrative, 
              cultural, and architectural development.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Key Dynasty Timeline</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Slave Dynasty (1206-1290)</li>
                  <li>• Khilji Dynasty (1290-1320)</li>
                  <li>• Tughlaq Dynasty (1320-1414)</li>
                  <li>• Sayyid Dynasty (1414-1451)</li>
                  <li>• Lodi Dynasty (1451-1526)</li>
                </ul>
              </div>
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Important Rulers</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Qutub-ud-din Aibak</li>
                  <li>• Iltutmish</li>
                  <li>• Balban</li>
                  <li>• Alauddin Khilji</li>
                  <li>• Muhammad bin Tughlaq</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t pt-6">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="font-bold">Related Topics:</span>
            <Link href="/blogs/general-knowledge/dams-in-india-mcq" className="hover:text-blue-600">Dams in India MCQ</Link>
            <Link href="/blogs/reasoning/chsl-reasoning-mcq" className="hover:text-blue-600">CHSL Reasoning MCQ</Link>
            <Link href="/blogs/english/active-passive-voice-mcq" className="hover:text-blue-600">Active Passive Voice MCQ</Link>
          </div>
        </footer>
      </div>
    </>
  );
}