import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Exam Preparation MCQs & Study Material | SSC, Railway & Banking",
  description: "Access comprehensive MCQ collections and study material for SSC, Railway, and Banking exams. Practice questions with detailed solutions for General Knowledge, Reasoning, Mathematics, and English.",
  keywords: [
    "exam preparation",
    "ssc practice questions",
    "railway exam mcq",
    "banking exam preparation",
    "competitive exam study material",
    "general knowledge mcq",
    "reasoning practice",
    "mathematics questions",
    "english comprehension",
    "government exam preparation"
  ],
  path: "/blogs"
});

const blogs = [
  {
    title: "Top 50 MCQs on Dams in India",
    excerpt: "Test your knowledge about major dams in India with these important MCQs frequently asked in various competitive examinations.",
    category: "General Knowledge",
    date: "Nov 5, 2025",
    slug: "/blogs/general-knowledge/dams-in-india-mcq",
    examType: "All Exams",
    questionCount: 50,
  },
  {
    title: "Top 20 Reasoning MCQs for SSC CHSL",
    excerpt: "Practice these important reasoning questions commonly asked in SSC CHSL examinations. Covers analogy, series, coding-decoding, and logical reasoning.",
    category: "Reasoning",
    date: "Nov 5, 2025",
    slug: "/blogs/reasoning/chsl-reasoning-mcq",
    examType: "SSC CHSL",
    questionCount: 20,
  },
  {
    title: "Important Folk Dances of India - MCQs",
    excerpt: "Enhance your knowledge of India's rich cultural heritage with these MCQs on traditional folk dances from various states.",
    category: "General Knowledge",
    date: "Nov 6, 2025",
    slug: "/blogs/general-knowledge/folk-dance-in-india-mcq",
    examType: "All Exams",
    questionCount: 10,
  }
];

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Practice Questions & Study Material</h1>
        <p className="text-lg text-muted-foreground">
          Explore our collection of MCQs and study material for various competitive exams
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.slug}
            className="group rounded-lg border p-6 transition-colors hover:border-foreground"
          >
            <article className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  {blog.category}
                </span>
                <span className="text-sm text-muted-foreground">{blog.date}</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-blue-600">
                {blog.title}
              </h2>
              <p className="text-muted-foreground">{blog.excerpt}</p>
              <div className="flex items-center justify-between text-sm">
                <span>For: {blog.examType}</span>
                <span>{blog.questionCount} Questions</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold">Browse by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/blogs/general-knowledge"
            className="rounded-lg border p-4 text-center hover:border-foreground"
          >
            <h3 className="font-semibold">General Knowledge</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Geography, History, Science & more
            </p>
          </Link>
          <Link
            href="/blogs/reasoning"
            className="rounded-lg border p-4 text-center hover:border-foreground"
          >
            <h3 className="font-semibold">Reasoning</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Logical, Verbal & Non-verbal
            </p>
          </Link>
          <Link
            href="/blogs/mathematics"
            className="rounded-lg border p-4 text-center hover:border-foreground"
          >
            <h3 className="font-semibold">Mathematics</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Arithmetic, Algebra & more
            </p>
          </Link>
          <Link
            href="/blogs/english"
            className="rounded-lg border p-4 text-center hover:border-foreground"
          >
            <h3 className="font-semibold">English</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Grammar, Vocabulary & Comprehension
            </p>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold">Browse by Exam</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/ssc/cgl/practice"
            className="rounded-lg border p-4 hover:border-foreground"
          >
            <h3 className="font-semibold">SSC CGL</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Practice questions for Combined Graduate Level exam
            </p>
          </Link>
          <Link
            href="/ssc/chsl/practice"
            className="rounded-lg border p-4 hover:border-foreground"
          >
            <h3 className="font-semibold">SSC CHSL</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              MCQs for Combined Higher Secondary Level
            </p>
          </Link>
          <Link
            href="/railway/practice"
            className="rounded-lg border p-4 hover:border-foreground"
          >
            <h3 className="font-semibold">Railway Exams</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Questions for RRB NTPC, Group D & ALP
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
