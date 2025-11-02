import { Users, Settings, ClipboardList, Video, MessageSquare, BookOpen, GraduationCap, Shield } from "lucide-react";

function RoleBlock({ id, title, description, items, accent }) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <span className={`inline-flex items-center rounded-full ${accent.bg} ${accent.text} px-3 py-1 text-xs font-medium ring-1 ring-inset ${accent.ring}`}>
              {title} Suite
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{description}</h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div key={idx} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className={`${accent.iconWrap} mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg`}>{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RoleSections() {
  return (
    <section id="roles" aria-labelledby="roles-heading" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="features" className="sr-only">Features anchor</div>
      </div>

      <RoleBlock
        id="admin"
        title="Admin"
        description="Central control for users, courses, grades, and curriculum."
        accent={{ bg: "bg-indigo-50", text: "text-indigo-700", ring: "ring-indigo-200", iconWrap: "bg-indigo-100 text-indigo-700" }}
        items={[
          { title: "User Management", text: "Create, update, deactivate, and assign roles with fine-grained permissions.", icon: <Users className="h-5 w-5" /> },
          { title: "Course Management", text: "Create, edit, and categorize courses with prerequisites and mappings.", icon: <BookOpen className="h-5 w-5" /> },
          { title: "Grades & Sections", text: "Define grades, sections, and cross-grade visibility.", icon: <GraduationCap className="h-5 w-5" /> },
          { title: "Curriculum Builder", text: "Organize subjects → chapters → concepts with materials and criteria.", icon: <ClipboardList className="h-5 w-5" /> },
          { title: "RBAC Security", text: "Role-based access with secure, auditable controls.", icon: <Shield className="h-5 w-5" /> },
          { title: "Mappings", text: "Align courses with grades and assign teachers to cohorts.", icon: <Settings className="h-5 w-5" /> },
        ]}
      />

      <RoleBlock
        id="teacher"
        title="Teacher"
        description="Manage classes, build assessments, and run live sessions."
        accent={{ bg: "bg-emerald-50", text: "text-emerald-700", ring: "ring-emerald-200", iconWrap: "bg-emerald-100 text-emerald-700" }}
        items={[
          { title: "Course Dashboard", text: "Track enrollment, progress, and completion rates by section.", icon: <BookOpen className="h-5 w-5" /> },
          { title: "Assignments & Quizzes", text: "Timed assessments, random banks, auto grading, and feedback.", icon: <ClipboardList className="h-5 w-5" /> },
          { title: "AV Rooms", text: "Live video, screen share, chat, and recordings for later access.", icon: <Video className="h-5 w-5" /> },
          { title: "Student Analytics", text: "Identify struggling learners and attendance trends.", icon: <Settings className="h-5 w-5" /> },
        ]}
      />

      <RoleBlock
        id="parent"
        title="Parent"
        description="Stay informed with progress, results, and proactive insights."
        accent={{ bg: "bg-amber-50", text: "text-amber-800", ring: "ring-amber-200", iconWrap: "bg-amber-100 text-amber-800" }}
        items={[
          { title: "Student Overview", text: "See courses, grades, attendance, and activity at a glance.", icon: <Users className="h-5 w-5" /> },
          { title: "Performance Analytics", text: "Visualize trends with progress summaries and reports.", icon: <Settings className="h-5 w-5" /> },
          { title: "Communication", text: "Direct messaging with teachers and important notifications.", icon: <MessageSquare className="h-5 w-5" /> },
          { title: "Improvement Insights", text: "AI-driven tips and recommended materials.", icon: <ClipboardList className="h-5 w-5" /> },
        ]}
      />

      <RoleBlock
        id="student"
        title="Student"
        description="Engage with content, track progress, and earn achievements."
        accent={{ bg: "bg-sky-50", text: "text-sky-700", ring: "ring-sky-200", iconWrap: "bg-sky-100 text-sky-700" }}
        items={[
          { title: "Course Access", text: "Browse lessons, watch videos, and submit assignments.", icon: <BookOpen className="h-5 w-5" /> },
          { title: "Progress Tracking", text: "Monitor grades, completion, and feedback in real time.", icon: <ClipboardList className="h-5 w-5" /> },
          { title: "Interactive Learning", text: "Join discussions, forums, and live sessions.", icon: <MessageSquare className="h-5 w-5" /> },
          { title: "Achievements", text: "Badges and milestones for motivation.", icon: <GraduationCap className="h-5 w-5" /> },
        ]}
      />
    </section>
  );
}
