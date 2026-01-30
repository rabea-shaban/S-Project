import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import logo from "/Logo.png";
import Container from "./ui/Container";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Courses", href: "/courses", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/auth/login");
  };
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-gray-800 dark:bg-gray-800/50 backdrop-blur dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
    >
      <Container>
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <img alt="TOTC" src={logo} className="h-8 w-auto" />
          </div>

          {/* Links - Desktop */}
          <div className="hidden sm:block">
            <div className="flex space-x-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white dark:bg-gray-950/50"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium transition",
                  )}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-2 text-sm font-medium transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-4 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white dark:bg-gray-950/50"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white block rounded-md px-3 py-2 text-base font-medium w-full text-left"
          >
            Logout
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
