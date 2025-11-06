export default function MTSPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">SSC MTS Exam Guide</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Multi Tasking Staff Examination - Complete Preparation Guide
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Exam Pattern</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-md bg-slate-50 p-3 dark:bg-slate-900">
              <h3 className="font-medium">Paper I (Computer Based)</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• General Intelligence & Reasoning (25 Questions)</li>
                <li>• Numerical Aptitude (25 Questions)</li>
                <li>• General English (25 Questions)</li>
                <li>• General Awareness (25 Questions)</li>
              </ul>
            </div>
            <div className="rounded-md bg-slate-50 p-3 dark:bg-slate-900">
              <h3 className="font-medium">Paper II (Descriptive)</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Short Essay/Letter</li>
                <li>• Time: 30 Minutes</li>
                <li>• Written in English/Hindi</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Key Focus Areas</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Reasoning</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Logical Reasoning</li>
                <li>• Visual Memory</li>
                <li>• Basic Problem Solving</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Numerical Ability</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Basic Mathematics</li>
                <li>• Simple Calculations</li>
                <li>• Number Series</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Preparation Resources</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Study Material</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Basic NCERT Books</li>
              <li>• Practice Workbooks</li>
              <li>• Online Resources</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Test Series</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Chapter-wise Tests</li>
              <li>• Full Length Mocks</li>
              <li>• Previous Year Papers</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Language Skills</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Basic Grammar</li>
              <li>• Vocabulary Building</li>
              <li>• Writing Practice</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Preparation Tips</h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">1</div>
            </div>
            <div>
              <h3 className="font-medium">Start with Basics</h3>
              <p className="text-sm text-muted-foreground">Focus on fundamental concepts and NCERT books</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">2</div>
            </div>
            <div>
              <h3 className="font-medium">Regular Practice</h3>
              <p className="text-sm text-muted-foreground">Solve previous year questions and take mock tests</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">3</div>
            </div>
            <div>
              <h3 className="font-medium">Time Management</h3>
              <p className="text-sm text-muted-foreground">Practice solving questions within time limits</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">4</div>
            </div>
            <div>
              <h3 className="font-medium">Current Affairs</h3>
              <p className="text-sm text-muted-foreground">Stay updated with daily news and events</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}