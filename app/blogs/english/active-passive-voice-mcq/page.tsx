import { ArticleStructuredData } from "@/components/structured-data"
import { type Metadata } from "next"
import { constructMetadata } from "@/lib/metadata";
import Link from "next/link";


export const metadata: Metadata = constructMetadata({
  title: "Top 10 MCQs on Active Passive Voice",
  description: "Practice important questions on Active and Passive Voice with detailed explanations. Perfect for competitive exam preparation.",
  keywords: [
    "active passive voice mcq",
    "english grammar questions",
    "voice change",
    "active voice",
    "passive voice",
    "grammar mcq",
  ],
  path: "/blogs/english/active-passive-voice-mcq"
});


export default function ActivePassiveVoiceMCQ() {
  const questions = [
    {
      question_no: 1,
      question: "The situation could hardly have been altered by the interference of the police force.",
      options: [
        "a) The interference of the police force can hardly alter the situation.",
        "b) The interference of the police force could hardly have altered the situation.",
        "c) The interference of the police force had hardly altered the situation.",
        "d) The interference of the police force would hardly have altered the situation."
      ],
      answer: "b) The interference of the police force could hardly have altered the situation.",
      solution: "The original sentence is in passive voice with a perfect modal (could have been). When converting to active voice, we maintain the same tense and modality. The subject 'interference of the police force' becomes the doer, and we use the same modal 'could' with 'have' to maintain the perfect aspect."
    },
    {
      question_no: 2,
      question: "It is said that there are living beings on Jupiter.",
      options: [
        "a) People say that there are living beings on Jupiter.",
        "b) They say that there are living beings on Jupiter.",
        "c) We say that there are living beings on Jupiter.",
        "d) Nobody says that there are living beings on Jupiter."
      ],
      answer: "b) They say that there are living beings on Jupiter.",
      solution: "The sentence 'It is said' is an impersonal passive construction. When converting to active voice, we typically use 'They say' as the most appropriate generic subject. This maintains the general, non-specific nature of the original statement while converting it to active voice."
    },
    {
      question_no: 3,
      question: "Do not spit in public places.",
      options: [
        "a) Spitting is prohibited in public places.",
        "b) You are advised not to spit in public places.",
        "c) Let not spitting be done in public places.",
        "d) You should not be spitting in public places."
      ],
      answer: "b) You are advised not to spit in public places.",
      solution: "The original sentence is an imperative (command) in active voice. When converting to passive voice, we need to maintain the instructional nature of the sentence. 'You are advised not to' is the most appropriate passive form that maintains the formal, instructional tone of the original command."
    },
    {
      question_no: 4,
      question: "The news of the scandal has been widely spread by the media.",
      options: [
        "a) The media has widely spread the news of the scandal.",
        "b) The media widely spread the news of the scandal.",
        "c) The media spread the news of the scandal widely.",
        "d) The media have widely spread the news of the scandal."
      ],
      answer: "a) The media has widely spread the news of the scandal.",
      solution: "The original sentence is in present perfect passive voice ('has been spread'). When converting to active voice, we maintain the present perfect tense. 'The media' is treated as a singular collective noun, so we use 'has' rather than 'have'."
    },
    {
      question_no: 5,
      question: "The students' project is to be completed by the end of the month.",
      options: [
        "a) The students must complete the project by the end of the month.",
        "b) The students have to complete the project by the end of the month.",
        "c) The students should complete the project by the end of the month.",
        "d) The students will complete the project by the end of the month."
      ],
      answer: "b) The students have to complete the project by the end of the month.",
      solution: "The passive construction 'is to be completed' indicates obligation or necessity. When converting to active voice, 'have to' is the most appropriate modal verb to express this obligation while maintaining the same meaning and level of necessity as the original."
    },
    {
      question_no: 6,
      question: "They were laughed at by everyone for their foolish antics.",
      options: [
        "a) Everyone was laughing at them for their foolish antics.",
        "b) Everyone laughed at them for their foolish antics.",
        "c) Everyone is laughing at them for their foolish antics.",
        "d) They were being laughed at for their foolish antics."
      ],
      answer: "b) Everyone laughed at them for their foolish antics.",
      solution: "The original sentence is in simple past passive voice. When converting to active voice, we maintain the simple past tense. The subject 'everyone' becomes the doer of the action, and 'they' becomes the object of the verb 'laughed at'."
    },
    {
      question_no: 7,
      question: "Who has broken the precious antique vase?",
      options: [
        "a) The precious antique vase has been broken by whom?",
        "b) By whom has the precious antique vase been broken?",
        "c) By whom the precious antique vase has been broken?",
        "d) Who the precious antique vase has broken?"
      ],
      answer: "b) By whom has the precious antique vase been broken?",
      solution: "When converting an interrogative sentence from active to passive voice, we maintain the question form and tense (present perfect). The correct word order in passive voice interrogative is 'By whom + auxiliary verb + subject + past participle'."
    },
    {
      question_no: 8,
      question: "We must not let the opportunity slip away.",
      options: [
        "a) The opportunity must not be let slip away by us.",
        "b) The opportunity must not be slipped away by us.",
        "c) Let the opportunity not slip away by us.",
        "d) The opportunity shouldn't be let to slip away by us."
      ],
      answer: "a) The opportunity must not be let slip away by us.",
      solution: "With the modal verb 'must' in a negative sentence, the passive form maintains both the modal and the negative. The construction 'be let slip' is the correct passive form of 'let slip', preserving the infinitive without 'to'."
    },
    {
      question_no: 9,
      question: "He needs to be told the truth immediately.",
      options: [
        "a) Someone needs to tell him the truth immediately.",
        "b) The truth needs to be told to him immediately.",
        "c) They need to be telling him the truth immediately.",
        "d) We need to tell him the truth immediately."
      ],
      answer: "a) Someone needs to tell him the truth immediately.",
      solution: "The original sentence is in passive voice with 'needs to be'. When converting to active voice, we need a subject to perform the action. 'Someone' is the most appropriate indefinite pronoun to serve as the subject in this context."
    },
    {
      question_no: 10,
      question: "Did she offer you a cup of tea?",
      options: [
        "a) Was a cup of tea offered to you by her?",
        "b) Were you offered a cup of tea by her?",
        "c) Had you been offered a cup of tea by her?",
        "d) Is a cup of tea offered to you by her?"
      ],
      answer: "b) Were you offered a cup of tea by her?",
      solution: "When converting a simple past interrogative from active to passive voice, the tense remains the same. Since 'you' is the indirect object in the active voice, it becomes the subject of the passive voice sentence, hence 'Were you offered' is correct."
    }
  ]

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8">
        <ArticleStructuredData
                title="Top 10 MCQs on Active Passive Voice"
                description="Practice important questions on Active and Passive Voice with detailed explanations. Perfect for competitive exam preparation."
                datePublished="2025-11-05T00:00:00+00:00"
                dateModified="2025-11-05T00:00:00+00:00"
                path="/blogs/english/active-passive-voice-mcq"
                category="English"
              />
       <header className="space-y-4">
          <h1 className="text-3xl font-bold">Top 10 MCQs on Active Passive Voice</h1>
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
            <span>Category: English</span>
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
                    Master your knowledge of Active and Passive Voice with these carefully selected MCQs. 
                    Perfect for competitive exam preparation, each question comes with detailed explanations.
          </p>
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
                  <p className="mt-2 text-sm">{q.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer className="border-t pt-6">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="font-bold">Related Topics:</span>
                    <Link href="/blogs/history/delhi-sultanate-mcq" className="hover:text-blue-600">Delhi Sultanate MCQ</Link>
                    <Link href="/blogs/reasoning/chsl-reasoning-mcq" className="hover:text-blue-600">CHSL Reasoning MCQ</Link>
                    <Link href="/blogs/general-knowledge/dams-in-india-mcq" className="hover:text-blue-600">Dams in India MCQ</Link>
                  </div>
                </footer>
    </main>
  )
}