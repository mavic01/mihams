import { Link } from "react-router-dom";
const navLogo = "./dashboardLogo.png";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/*Navbar */}
      <nav className="flex items-center justify-between p-6 bg-white z-50 shadow-xs">
        <Link to="/">
          <img className="h-10" src={navLogo} alt="Dashboard Logo" />
        </Link>

        <Link
          to="/register"
          className="rounded-lg bg-[#2ada53] px-5 py-2.5 text-sm font-sf font-bold text-white transition hover:bg-[#12a534]"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 mt-10 text-center">
        <div className="mb-6 rounded-full border border-[#2ada53] bg-emerald-50 px-4 py-2 text-sm font-medium font-sf text-emerald-700">
          Employee & Business Management Platform
        </div>

        <h2 className="max-w-4xl text-2xl font-bold font-sf leading-tight text-slate-900 md:text-4xl">
          Manage Employees, Transactions & Business Operations
          <span className="text-[#2ada53]"> From One Dashboard</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg font-sf text-slate-600">
          Simplify employee management, monitor transactions in real-time, and
          control your business settings with a clean and intuitive admin
          dashboard.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/register"
            className="rounded-xl bg-[#2ada53] px-8 py-4 font-bold font-sf text-white transition hover:bg-[#12a534]"
          >
            Create Account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
