import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ArticleStructuredData } from "@/components/structured-data";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = constructMetadata({
  title: "Folk Dance in India MCQs | Top 10 Questions with Solution ",
  description: "Practice 50 important MCQs about major folk dances in India. Comprehensive questions with detailed explanations for SSC, Railway, Banking, and other competitive exams. Learn about Bhangra, Kathak, Odissi, and more.",
  keywords: [
    "folk dance in india mcq",
    "indian folk dance questions",
    "ssc gk folk dance",
    "bhangra dance mcq",
    "kathak dance mcq",
    "odissi dance mcq",
    "competitive exam folk dance",
    "ssc cgl folk dance",
    "railway exam folk dance",
    "banking exam gk",
    "ssc chsl folk dance"
  ],
  path: "/blogs/general-knowledge/folk-dance-in-india-mcq"
});

export default function FolkDanceInIndiaMCQPage() {
const questions = [
  {
    "question_no": 1,
    "question": "Which of the following Union Territories is famous for its 'Garadi' folk dance, which has mythological origins related to the epic Ramayana?",
    "options": ["A) Andaman and Nicobar Islands", "B) Lakshadweep", "C) Puducherry", "D) Delhi"],
    "answer": "C",
    "explanation": "The 'Garadi' dance is the most popular folk dance in the Union Territory of Puducherry. It is performed during festivals and is linked to the Hindu epic Ramayana. Dancers often use sticks and perform intricate footwork symbolizing a battle scene."
  },
  {
    "question_no": 2,
    "question": "'Charkula' dance is native of which Indian state?",
    "options": ["A) Rajasthan", "B) Madhya Pradesh", "C) Uttar Pradesh", "D) Haryana"],
    "answer": "C",
    "explanation": "Charkula is a unique and visually striking folk dance from the Braj region of Uttar Pradesh, often performed to celebrate the birth of Radha or Krishna. The key feature is balancing a heavy structure with up to 108 oil lamps."
  },
  {
    "question_no": 3,
    "question": "The 'Gotipua' dance is a traditional dance form native to which state?",
    "options": ["A) West Bengal", "B) Andhra Pradesh", "C) Odisha", "D) Tamil Nadu"],
    "answer": "C",
    "explanation": "Gotipua is a traditional folk dance form from Odisha, performed by young boys dressed as girls. It is an important precursor to the classical Odissi dance style and involves acrobatic movements and storytelling."
  },
  {
    "question_no": 4,
    "question": "'Raut Nacha' is a folk dance primarily associated with which state?",
    "options": ["A) Bihar", "B) Jharkhand", "C) Chhattisgarh", "D) Assam"],
    "answer": "C",
    "explanation": "Raut Nacha is a prominent folk dance of the Yadava community in Chhattisgarh. It is a traditional dance performed during the Diwali festival, symbolizing the ancient battle between the mythological King Kansha and the Yadavas."
  },
  {
    "question_no": 5,
    "question": "Which folk dance of Gujarat involves women performing in a circular formation, often using small wooden sticks as props, especially during the festival of Navratri?",
    "options": ["A) Ghoomar", "B) Kalbeliya", "C) Bhangra", "D) Dandiya Raas"],
    "answer": "D",
    "explanation": "Dandiya Raas is a traditional folk dance of Gujarat, performed with decorated bamboo sticks (dandiyas) by both men and women. It is a central part of the Navratri festival celebrations."
  },
  {
    "question_no": 6,
    "question": "The 'Cheraw dance', is a major traditional dance form of which northeastern state of India?",
    "options": ["A) Nagaland", "B) Manipur", "C) Mizoram", "D) Tripura"],
    "answer": "C",
    "explanation": "Cheraw Dance, popularly known as the 'Bamboo Dance' is a famous and visually complex folk dance of Mizoram. Dancers move in and out of a formation of horizontal bamboo staves held by other participants, synchronized to the rhythmic clapping of the bamboos."
  },
  {
    "question_no": 7,
    "question": "'Padayani' is a traditional folk dance and ritual art from which state of India?",
    "options": ["A) Karnataka", "B) Kerala", "C) Tamil Nadu", "D) Andhra Pradesh"],
    "answer": "B",
    "explanation": "Padayani, also known as Patayani, is a traditional folk dance and a ritual art form originating from Kerala, performed in Bhadrakali temples as a part of temple festivals."
  },
  {
    "question_no": 8,
    "question": "Which dance form, native to the state of Assam, is associated with the harvest festival of 'Bihu'?",
    "options": ["A) Sattriya", "B) Bagurumba", "C) Jhumur", "D) Bihu"],
    "answer": "D",
    "explanation": "The Bihu dance is synonymous with the Bihu festival, the most important cultural event in Assam. It is performed with great energy by young men and women during the Rongali Bihu festival, marking the Assamese New Year and harvest season."
  },
  {
    "question_no": 9,
    "question": "'Dumhal' is a famous folk dance performed during the rainy season by the Wattal tribe in the Kashmir Valley region of the Union Territory of Jammu & Kashmir. Which state/UT is it associated with?",
    "options": ["A) Himachal Pradesh", "B) Ladakh", "C) Punjab", "D) Jammu & Kashmir"],
    "answer": "D",
    "explanation": "Dumhal is a traditional folk dance of the Wattal tribe in the Kashmir region of Jammu & Kashmir. Only men perform this dance, wearing long, colorful robes and conical caps."
  },
  {
    "question_no": 10,
    "question": "The 'Matki' dance, a pot dance, is a well-known folk dance developed by the nomadic tribes of which Indian state, mainly performed in the Malwa region?",
    "options": ["A) Gujarat", "B) Rajasthan", "C) Madhya Pradesh", "D) Maharashtra"],
    "answer": "C",
    "explanation": "The Matki dance is a popular folk dance originating from the Malwa region of Madhya Pradesh. Women perform this dance balancing an earthen pot (matki) on their heads, often at weddings and other festive occasions."
  }
]

    

  return (
    <div className="mx-auto max-w-3xl space-y-8 md:px-4 px-2 py-8">
        <ArticleStructuredData
        title="Top 10 MCQs on Dams in India"
        description="Test your knowledge about major folk dances in India with these important MCQs frequently asked in various competitive examinations."
        datePublished="2025-11-06T00:00:00+00:00"
        dateModified="2025-11-06T00:00:00+00:00"
        path="/blogs/general-knowledge/folk-dance-in-india-mcq"
        category="General Knowledge"
      />
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Top 10 MCQs on Folk Dances in India</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Last Updated: November 6, 2025 08:10 AM</span>
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
          This blog post presents 10 important multiple-choice questions (MCQs) about major folk dances in India. Dance is one of the most expressive and captivating forms of art — a universal language that transcends words. In India, dance is deeply rooted in tradition, spirituality, and storytelling, making it an integral part of our rich cultural heritage. From classical styles like Bharatanatyam and Kathak to vibrant folk dances such as Bhangra and Garba, each form carries a unique story of its origin, regional influence, and symbolic gestures.
<br/>
For aspirants preparing for competitive exams or cultural studies, understanding the history, origin, and characteristics of Indian dance forms can provide a strong edge
        </p>
        <Image
          src="/blog-images/top-10-important-folk-dances.webp"
          alt="Folk Dances in India"
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
                  {(q.options as string[]).map((option: string, optIndex: number) => (
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
                Folk dances in India are an integral part of the country's rich cultural heritage. Each region has its own unique folk dance forms that reflect the traditions, customs, and lifestyles of the local communities. Some of the most popular folk dances include Bhangra from Punjab, Garba from Gujarat, Kathakali from Kerala, and Odissi from Odisha. These dances are often performed during festivals, weddings, and other social gatherings, showcasing vibrant costumes, energetic movements, and rhythmic music.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Folk Dance of India</h3>
                <div className="text-sm">
                    <ul className="grid sm:grid-cols-2 gap-2 leading-relaxed">
                        <li><span className="font-semibold">Andhra Pradesh:</span> Kuchipudi, Vilasini Natyam, Dappu, Lambadi</li>
                        <li><span className="font-semibold">Arunachal Pradesh:</span> Buiya, Bardo Chham, Wancho</li>
                        <li><span className="font-semibold">Assam:</span> Bihu, Bagurumba, Khel Gopal</li>
                        <li><span className="font-semibold">Bihar:</span> Jata-Jatin, Bidesia, Bakho-Bakhain</li>
                        <li><span className="font-semibold">Chhattisgarh:</span> Raut Nacha, Gaur Maria, Panthi</li>
                        <li><span className="font-semibold">Goa:</span> Dekhni, Tarangamel, Fugdi</li>
                        <li><span className="font-semibold">Gujarat:</span> Garba, Dandiya Ras, Tippani</li>
                        <li><span className="font-semibold">Haryana:</span> Jhumar, Dhamal, Khoria</li>
                        <li><span className="font-semibold">Himachal Pradesh:</span> Nati, Jhora, Dhaman</li>
                        <li><span className="font-semibold">Jammu & Kashmir:</span> Rauf, Hikat, Dumhal</li>
                        <li><span className="font-semibold">Jharkhand:</span> Karma, Paika, Agni</li>
                        <li><span className="font-semibold">Karnataka:</span> Dollu Kunitha, Yakshagana, Karga</li>
                        <li><span className="font-semibold">Kerala:</span> Kathakali, Mohiniyattam, Kaikottikali</li>
                        <li><span className="font-semibold">Madhya Pradesh:</span> Maanch, Jawara, Matki</li>
                        <li><span className="font-semibold">Maharashtra:</span> Lavani, Koli, Lezim</li>
                        <li><span className="font-semibold">Manipur:</span> Manipuri, Dol Cholom, Thang Ta</li>
                        <li><span className="font-semibold">Meghalaya:</span> Laho, Ka Shad Suk Mynsiem, Nongkrem</li>
                        <li><span className="font-semibold">Mizoram:</span> Cheraw, Chailam, Khuallam</li>
                        <li><span className="font-semibold">Nagaland:</span> Chang-Lo, Rangma, Zeliang</li>
                        <li><span className="font-semibold">Odisha:</span> Odissi, Chhau, Ghumura</li>
                        <li><span className="font-semibold">Punjab:</span> Bhangra, Giddha, Daff</li>
                        <li><span className="font-semibold">Rajasthan:</span> Ghoomar, Kalbelia, Chakri</li>
                        <li><span className="font-semibold">Sikkim:</span> Singhi Chaam, Yak Chaam, Chu Faat</li>
                        <li><span className="font-semibold">Tamil Nadu:</span> Bharatanatyam, Kummi, Kolattam</li>
                        <li><span className="font-semibold">Tripura:</span> Hojagiri</li>
                        <li><span className="font-semibold">Uttar Pradesh:</span> Kathak, Nautanki, Raslila</li>
                        <li><span className="font-semibold">Uttarakhand:</span> Choliya, Garhwali, Kumaoni</li>
                        <li><span className="font-semibold">West Bengal:</span> Chhau, Jatra, Kathi</li>
                    </ul>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      <footer className="border-t pt-6">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="font-bold">Related Topics:</span>
            <Link href="/blogs/history/delhi-sultanate-mcq" className="hover:text-blue-600">Delhi Sultanate MCQ</Link>
            <Link href="/blogs/reasoning/chsl-reasoning-mcq" className="hover:text-blue-600">CHSL Reasoning MCQ</Link>
            <Link href="/blogs/general-knowledge/dams-in-india-mcq" className="hover:text-blue-600">Dams In India MCQ</Link>
          </div>
        </footer>
    </div>
  );
}
