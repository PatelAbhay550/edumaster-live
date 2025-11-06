import Link from "next/link";
import { Book, GraduationCap, Train, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Your Complete Guide to
          <br />
          Government Exam Preparation
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Access comprehensive study materials, practice tests, and expert guidance for SSC, Railway, and Banking examinations.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/ssc"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-foreground"
        >
          <div className="flex h-[180px] flex-col justify-between">
            <GraduationCap className="h-12 w-12 text-neutral-600" />
            <div className="space-y-2">
              <h3 className="font-bold">SSC Exams</h3>
              <p className="text-sm text-muted-foreground">
                Prepare for CGL, CHSL, MTS and other Staff Selection Commission examinations
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/railway"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-foreground"
        >
          <div className="flex h-[180px] flex-col justify-between">
            <Train className="h-12 w-12 text-neutral-600" />
            <div className="space-y-2">
              <h3 className="font-bold">Railway Exams</h3>
              <p className="text-sm text-muted-foreground">
                Study for RRB NTPC, Group D, ALP and other railway recruitment tests
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/banking"
          className="group relative overflow-hidden rounded-lg border p-6 hover:border-foreground"
        >
          <div className="flex h-[180px] flex-col justify-between">
            <Building2 className="h-12 w-12 text-neutral-600" />
            <div className="space-y-2">
              <h3 className="font-bold">Banking Exams</h3>
              <p className="text-sm text-muted-foreground">
                Get ready for IBPS PO, SBI PO, Clerk and other banking sector opportunities
              </p>
            </div>
          </div>
        </Link>
      </section>

      <section className="my-8 rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
        <h2 className="mb-4 text-2xl font-bold">Latest Updates</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-4">
            <p className="text-sm text-muted-foreground">November 5, 2025</p>
            <h3 className="mb-2 font-semibold">SSC CHSL 10+2 Tier-I Exam City Slip Out 2025</h3>
            <p className="text-sm text-muted-foreground">
              Staff Selection Commission has released the Exam City Details of Combined Higher Secondary Level CHSL Exam 2025.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="text-sm text-muted-foreground">November 6, 2025</p>
            <h3 className="mb-2 font-semibold">RRB NTPC Inter Level 2025</h3>
            <p className="text-sm text-muted-foreground">
              The Staff Selection Commission has published the official notification for the Non-Technical Popular Categories (NTPC) — Inter Level recruitment, announcing 3,058 vacancies. Applications opened on 28 October 2025 and will close on 27 November 2025.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="text-sm text-muted-foreground">November 1, 2025</p>
            <h3 className="mb-2 font-semibold">UP Police Home guard Online Form 2025 (45000 Posts)</h3>
            <p className="text-sm text-muted-foreground">
             As per the reports from media sources, the Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB) will release the detailed notification for UP Police Home Guard Recruitment 2025 very soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

