export default function CGLPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">SSC CGL Exam Guide</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Combined Graduate Level Examination - Complete Preparation Guide
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Exam Pattern</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-md bg-slate-50 p-3 dark:bg-slate-900">
              <h3 className="font-medium">Tier I (Computer Based)</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Quantitative Aptitude (25 Questions)</li>
                <li>• English Language (25 Questions)</li>
                <li>• General Intelligence (25 Questions)</li>
                <li>• General Awareness (25 Questions)</li>
              </ul>
            </div>
            <div className="rounded-md bg-slate-50 p-3 dark:bg-slate-900">
              <h3 className="font-medium">Tier II (Computer Based)</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Paper I: Quantitative Abilities</li>
                <li>• Paper II: English Language</li>
                <li>• Paper III: Statistics</li>
                <li>• Paper IV: General Studies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Important Topics</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Quantitative Aptitude</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Algebra & Number System</li>
                <li>• Data Interpretation</li>
                <li>• Geometry & Mensuration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">English Language</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Reading Comprehension</li>
                <li>• Grammar & Vocabulary</li>
                <li>• Verbal Ability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Study Resources</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Practice Tests</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Topic-wise Tests</li>
              <li>• Full Length Mocks</li>
              <li>• Previous Year Papers</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Video Lectures</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Concept Explanations</li>
              <li>• Problem Solving</li>
              <li>• Tips & Tricks</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Study Notes</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• PDF Study Material</li>
              <li>• Important Formulas</li>
              <li>• Quick Revision Notes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Preparation Timeline</h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">1</div>
            </div>
            <div>
              <h3 className="font-medium">Months 1-2</h3>
              <p className="text-sm text-muted-foreground">Basic concepts and fundamentals</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">2</div>
            </div>
            <div>
              <h3 className="font-medium">Months 3-4</h3>
              <p className="text-sm text-muted-foreground">Advanced topics and practice</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">3</div>
            </div>
            <div>
              <h3 className="font-medium">Months 5-6</h3>
              <p className="text-sm text-muted-foreground">Mock tests and revision</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}