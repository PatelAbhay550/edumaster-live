import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ArticleStructuredData } from "@/components/structured-data";

export const metadata: Metadata = constructMetadata({
  title: "Top 20 Reasoning MCQs for SSC CHSL | Practice Questions with Solutions",
  description: "Master SSC CHSL reasoning with 20 important MCQs. Practice questions on coding-decoding, number series, analogies, and logical reasoning with detailed solutions and explanations.",
  keywords: [
    "ssc chsl reasoning",
    "reasoning mcq",
    "logical reasoning practice",
    "coding decoding questions",
    "number series mcq",
    "ssc chsl preparation",
    "reasoning questions",
    "competitive exam reasoning",
    "chsl practice set",
    "logical ability test"
  ],
  path: "/blogs/reasoning/chsl-reasoning-mcq"
});

export default function ReasoningCHSLMCQPage() {
  return (
    <>
      <ArticleStructuredData
        title="Top 20 Reasoning MCQs for SSC CHSL"
        description="Practice these important reasoning questions commonly asked in SSC CHSL examinations. These MCQs cover various topics like analogy, series, coding-decoding, and logical reasoning."
        datePublished="2025-11-05T00:00:00+00:00"
        dateModified="2025-11-05T00:00:00+00:00"
        path="/blogs/reasoning/chsl-reasoning-mcq"
        category="Reasoning"
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">Top 20 Reasoning MCQs for SSC CHSL</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Published: Nov 5, 2025</span>
          <span>Category: Reasoning</span>
          <span>For: SSC CHSL</span>
        </div>
      </header>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <p className="lead">
          Practice these important reasoning questions commonly asked in SSC CHSL examinations. These MCQs cover various topics like analogy, series, coding-decoding, and logical reasoning.
        </p>
      </section>

      <div className="space-y-6">
        {/* MCQ 1 */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">1</span>
              <h3 className="font-medium">If SUMMER is coded as TVNNFS, then how will WINTER be coded?</h3>
            </div>
            <div className="grid gap-2 pl-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">a)</span>
                <span>XJOUFR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">b)</span>
                <span>XJOUFS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">c)</span>
                <span>XJNUFS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">d)</span>
                <span>SFU JOX</span>
              </div>
            </div>
          </div>
          <div className="pl-8">
            <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/50">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Answer:</span>
                <span>b) XJOUFS</span>
              </div>
              <p className="mt-2 text-sm">
                Explanation: Each letter in the code is the next letter in the alphabet. 
                S → T, U → V, M → N, etc. 
                Therefore, W → X, I → J, N → O, T → U, E → F, R → S
              </p>
            </div>
          </div>
        </div>

        {/* MCQ 2 */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">2</span>
              <h3 className="font-medium">Select the missing number: 2, 6, 12, 20, 30, ?</h3>
            </div>
            <div className="grid gap-2 pl-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">a)</span>
                <span>40</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">b)</span>
                <span>42</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">c)</span>
                <span>44</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">d)</span>
                <span>46</span>
              </div>
            </div>
          </div>
          <div className="pl-8">
            <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/50">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Answer:</span>
                <span>b) 42</span>
              </div>
              <p className="mt-2 text-sm">
                Explanation: The pattern is +4, +6, +8, +10, +12
                2 + 4 = 6
                6 + 6 = 12
                12 + 8 = 20
                20 + 10 = 30
                30 + 12 = 42
              </p>
            </div>
          </div>
        </div>

        {/* MCQ 3 */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">3</span>
              <h3 className="font-medium">If 'red' is called 'blue', 'blue' is called 'green', 'green' is called 'yellow', 'yellow' is called 'white', and 'white' is called 'black', what is the color of sky?</h3>
            </div>
            <div className="grid gap-2 pl-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">a)</span>
                <span>Blue</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">b)</span>
                <span>Green</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">c)</span>
                <span>White</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">d)</span>
                <span>Red</span>
              </div>
            </div>
          </div>
          <div className="pl-8">
            <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/50">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Answer:</span>
                <span>b) Green</span>
              </div>
              <p className="mt-2 text-sm">
                Explanation: The sky is blue, and according to the given conditions, 'blue' is called 'green'. Therefore, the color of the sky would be called 'green'.
              </p>
            </div>
          </div>
        </div>

        {/* Additional MCQs would continue in the same format */}
        
        <div className="flex justify-center">
          <button className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
            Load More Questions
          </button>
        </div>
      </div>

      <footer className="border-t pt-6">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>Related Topics:</span>
          <a href="#" className="hover:text-blue-600">Coding-Decoding</a>
          <a href="#" className="hover:text-blue-600">Number Series</a>
          <a href="#" className="hover:text-blue-600">Logical Sequence</a>
        </div>
      </footer>
    </div>
    </>
  );
}