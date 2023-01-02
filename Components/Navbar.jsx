import Image from "next/image";
import Link from "next/link";
import { RxPerson } from 'react-icons/rx'
import logo from '../images/logo.png'
import { getSession, useSession, signOut } from "next-auth/react"
const Navbar = () => {
  const handleSingOut = () => {
    signOut()
  }
  const { data: session } = useSession()

  return (
    <div>
      <div>
        <div>
          <div className="navbar md:px-9 px-4 py-2 max-w-7xl mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="btn btn-ghost text-white lg:hidden "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#fff] rounded-box w-52 text-black "
                >
                  <li className="hover:text-[#2095AE]">
                    <Link href="/">Home</Link>
                  </li>

                  <li className="hover:text-[#2095AE]">
                    <Link href="/destinations">Destinations</Link>
                  </li>
                  <li className="hover:text-[#2095AE]">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="hover:text-[#2095AE]">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="hover:text-[#2095AE]">
                    <Link href="/blog">Blog</Link>
                  </li>
                  {/* <li className="hover:text-[#2095AE]">
                    <button className="btn btn-primary" onClick={handleSingOut}>Sing Out</button>
                  </li> */}
                </ul>
              </div>
              <Link
                href="/"
                className="cursor-pointer normal-case text-white text-xl"
              >
                <Image src={logo} width={110} />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex text-black font-semibold navbar-end">
              <ul className="menu menu-horizontal px-1">
                <li className="text-white ">
                  <Link href="/">Home</Link>
                </li>

                <li className="text-white">
                  <Link href="/destinations">Destinations</Link>
                </li>
                <li className="text-white">
                  <Link href="/about">About</Link>
                </li>
                <li className="text-white">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="text-white">
                  <Link href="/blog">Blog</Link>
                </li>

              </ul>
            </div>
            {/*  profile section */}
            <div className="navbar-end text-white">
              {session ? <div className="dropdown dropdown-hover dropdown-left">
                <label tabIndex={0} className=""><RxPerson className="font-bold" /></label>
                <ul tabIndex={0} className="dropdown-content  menu p-2 shadow text-secondary rounded-box w-52 bg-white">

                  <li><a>My Tour</a></li>
                  <li><a>Profile</a></li>
                  <li><button className="btn btn-primary" onClick={handleSingOut}>Sing Out</button></li>
                </ul>
              </div> :
                <Link href='/user/login'>
                  <RxPerson className="font-bold" />
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;