export default function BankingPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">Banking Exam Preparation</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your complete guide to Bank PO and Clerk examinations
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Latest Updates</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">IBPS PO XII Notification</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">SBI Clerk Results</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">RBI Grade B 2025</span>
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
            <h3 className="font-semibold">IBPS PO</h3>
            <p className="mt-2 text-sm text-muted-foreground">Probationary Officer</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Prelims & Mains</li>
              <li>• Interview Preparation</li>
              <li>• Previous Year Papers</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">SBI PO</h3>
            <p className="mt-2 text-sm text-muted-foreground">State Bank PO</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Complete Course</li>
              <li>• Mock Interviews</li>
              <li>• GD Practice</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Bank Clerk</h3>
            <p className="mt-2 text-sm text-muted-foreground">IBPS & SBI Clerk</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Subject-wise Study</li>
              <li>• Speed Tests</li>
              <li>• Expert Guidance</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}