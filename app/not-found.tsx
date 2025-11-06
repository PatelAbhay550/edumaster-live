import Link from "next/link"
import { Ghost, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      {/* Ghost Icon with Animation */}
      <div className="mb-8 animate-float">
        <Ghost className="h-24 w-24 text-gray-400" />
      </div>

      {/* 404 Text */}
      <h1 className="text-6xl font-bold text-gray-900 mb-4 font-mono">404</h1>
      
      {/* Message */}
      <h2 className="text-2xl text-gray-600 mb-8 text-center max-w-md">
        This page has wandered off into the digital void
      </h2>

      {/* Home Button */}
      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        <Home className="h-5 w-5" />
        <span>Return Home</span>
      </Link>

      {/* Additional Text */}
      <p className="mt-8 text-gray-500 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved to a new location.
      </p>
    </div>
  )
}