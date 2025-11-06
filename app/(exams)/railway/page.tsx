export default function RailwayPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">Railway Exam Preparation</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your complete guide to Railway Recruitment Board examinations
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Latest Updates</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">RRB NTPC CBT-2 Admit Card</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">Group D Results Declared</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">ALP Recruitment 2025</span>
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
            <h3 className="font-semibold">RRB NTPC</h3>
            <p className="mt-2 text-sm text-muted-foreground">Non-Technical Popular Categories</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• CBT 1 & 2 Preparation</li>
              <li>• Typing Test Guide</li>
              <li>• Previous Year Papers</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">RRB Group D</h3>
            <p className="mt-2 text-sm text-muted-foreground">Level 1 Posts</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Complete Study Plan</li>
              <li>• Practice Questions</li>
              <li>• Physical Test Guide</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">RRB ALP</h3>
            <p className="mt-2 text-sm text-muted-foreground">Assistant Loco Pilot</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Technical Knowledge</li>
              <li>• Daily Mock Tests</li>
              <li>• Expert Support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}