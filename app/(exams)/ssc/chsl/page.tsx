export default function CHSLPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">SSC CHSL Exam Guide</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Combined Higher Secondary Level Examination - Complete Preparation Guide
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Exam Pattern</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-md bg-slate-50 p-3 dark:bg-slate-900">
              <h3 className="font-medium">Tier I (Computer Based)</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• General Intelligence (25 Questions)</li>
                <li>• Quantitative Aptitude (25 Questions)</li>
                <li>• English Language (25 Questions)</li>
                <li>• General Awareness (25 Questions)</li>
              </ul>
            </div>
            <div className="rounded-md bg-slate-50 p-3 dark:bg-slate-900">
              <h3 className="font-medium">Tier II (Descriptive Paper)</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Essay Writing</li>
                <li>• Letter/Application Writing</li>
                <li>• Time: 60 Minutes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Important Topics</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">General Intelligence</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Analogies & Classifications</li>
                <li>• Coding-Decoding</li>
                <li>• Pattern Series</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Quantitative Aptitude</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Basic Mathematics</li>
                <li>• Data Interpretation</li>
                <li>• Numerical Ability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Study Resources</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Practice Material</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Subject-wise Tests</li>
              <li>• Mock Test Series</li>
              <li>• Previous Papers</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Study Notes</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Topic-wise Notes</li>
              <li>• Important Formulas</li>
              <li>• Quick References</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Skill Development</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Typing Practice</li>
              <li>• Writing Skills</li>
              <li>• Interview Prep</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Success Strategy</h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">1</div>
            </div>
            <div>
              <h3 className="font-medium">Basic Preparation</h3>
              <p className="text-sm text-muted-foreground">Focus on NCERT books and fundamental concepts</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">2</div>
            </div>
            <div>
              <h3 className="font-medium">Practice Phase</h3>
              <p className="text-sm text-muted-foreground">Regular mock tests and problem solving</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">3</div>
            </div>
            <div>
              <h3 className="font-medium">Final Revision</h3>
              <p className="text-sm text-muted-foreground">Quick revision and last-minute tips</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}