import { Link, NavLink } from "react-router-dom";

type NavItem = {
  id: number;
  name: string;
  path: string;
};

const Navbar = () => {
  const navItems: NavItem[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Features", path: "/features" },
    { id: 3, name: "How It Works", path: "/works" },
    { id: 4, name: "Benefits", path: "/benefits" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
         
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-blue-600"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>

            <span className="text-xl font-semibold text-slate-900">
              AI Spend Audit Pro
            </span>
          </Link>

 
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-blue-600"
                        : "text-slate-700 hover:text-blue-600 transition"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

         
            <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700">
              Get Started
            </button>

         
            <div className="cursor-pointer text-2xl md:hidden">
              ⁞⁞⁞
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;