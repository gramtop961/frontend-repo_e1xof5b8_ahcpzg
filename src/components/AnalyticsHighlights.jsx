import { Activity, BarChart3, Calendar, Bell } from "lucide-react";

const Highlight = ({ icon, label, value, sub }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
      {icon}
    </div>
    <p className="text-sm text-gray-600">{label}</p>
    <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
    {sub && <p className="mt-1 text-xs text-gray-500">{sub}</p>}
  </div>
);

export default function AnalyticsHighlights() {
  return (
    <section id="analytics" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              Analytics & Reports
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Actionable insights across the whole platform
            </h2>
            <p className="mt-2 text-gray-600">
              Track engagement, completion, teacher activity, and outcomes to drive improvement.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Highlight icon={<Activity className="h-5 w-5" />} label="Student Engagement" value="87%" sub="Avg. weekly active learners" />
          <Highlight icon={<BarChart3 className="h-5 w-5" />} label="Course Completion" value="72%" sub="Across all active cohorts" />
          <Highlight icon={<Calendar className="h-5 w-5" />} label="Attendance" value="94%" sub="Past 30 days" />
          <Highlight icon={<Bell className="h-5 w-5" />} label="Alerts Resolved" value="1.2k" sub="Last month" />
        </div>
      </div>
    </section>
  );
}
