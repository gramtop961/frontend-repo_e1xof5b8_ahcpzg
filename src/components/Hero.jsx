import { Rocket, Shield, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">Learning Management System</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              A modern LMS for admins, teachers, parents and students
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Orchestrate curricula, run virtual classrooms, and track progress with role-based access,
              rich analytics, and engaging learning experiences — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#roles" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-indigo-500">
                <Rocket className="h-4 w-4" /> Explore Roles
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 font-medium hover:bg-gray-50">
                Learn More
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-indigo-600" /> RBAC Security
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-indigo-600" /> Achievement System
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-indigo-600" /> Scalable & Modular
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-100 via-white to-indigo-50 ring-1 ring-inset ring-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-sm font-medium text-indigo-700">Snapshot</p>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900">Courses • Analytics • Virtual Classrooms</h3>
                  <p className="mt-2 text-gray-600">Designed for real-world schools and academies</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-left text-sm">
                    <div className="rounded-lg bg-white p-3 ring-1 ring-gray-200 shadow-sm">
                      <p className="font-semibold text-gray-900">Admin</p>
                      <p className="text-gray-600">Users, courses, grades</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 ring-1 ring-gray-200 shadow-sm">
                      <p className="font-semibold text-gray-900">Teacher</p>
                      <p className="text-gray-600">Quizzes, AV rooms</p>
                    </div>
                    <div className="rounded-lg bg-white p-3 ring-1 ring-gray-200 shadow-sm">
                      <p className="font-semibold text-gray-900">Parent</p>
                      <p className="text-gray-600">Progress & alerts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
