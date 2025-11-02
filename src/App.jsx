import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoleSections from "./components/RoleSections";
import AnalyticsHighlights from "./components/AnalyticsHighlights";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <RoleSections />
        <AnalyticsHighlights />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} NovaLMS — Built for modern schools and academies.
          </p>
          <div className="flex items-center gap-6">
            <a href="#roles" className="hover:text-indigo-600">Roles</a>
            <a href="#analytics" className="hover:text-indigo-600">Analytics</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
