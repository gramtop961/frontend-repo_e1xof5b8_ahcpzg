import { BookOpen, BarChart3, Users, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">NovaLMS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
              <Settings className="h-4 w-4" /> Features
            </a>
            <a href="#roles" className="hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
              <Users className="h-4 w-4" /> Roles
            </a>
            <a href="#analytics" className="hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Analytics
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#demo" className="hidden sm:inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">View Demo</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}
