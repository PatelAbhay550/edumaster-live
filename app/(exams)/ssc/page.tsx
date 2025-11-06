export default function SSCPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">SSC Exam Preparation</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your complete guide to Staff Selection Commission examinations
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Latest Updates</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">SSC CGL 2025 Notification Released</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">CHSL 2024 Results Announced</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">MTS 2024 Application Process Started</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Important Resources</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <span>📚</span>
              <span className="text-sm">Study Material</span>
            </li>
            <li className="flex items-center gap-2">
              <span>✍️</span>
              <span className="text-sm">Practice Tests</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📅</span>
              <span className="text-sm">Exam Calendar</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Popular Courses</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">SSC CGL</h3>
            <p className="mt-2 text-sm text-muted-foreground">Combined Graduate Level</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Tier I & II Preparation</li>
              <li>• Mock Tests</li>
              <li>• Previous Year Papers</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">SSC CHSL</h3>
            <p className="mt-2 text-sm text-muted-foreground">Combined Higher Secondary Level</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Complete Study Material</li>
              <li>• Topic-wise Tests</li>
              <li>• Solved Papers</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">SSC MTS</h3>
            <p className="mt-2 text-sm text-muted-foreground">Multi Tasking Staff</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Comprehensive Coverage</li>
              <li>• Daily Practice Sets</li>
              <li>• Expert Guidance</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}