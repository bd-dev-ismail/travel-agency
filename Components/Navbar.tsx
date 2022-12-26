

const Navbar = () => {
    return (
      <div>
        <div>
          <div>
            <div className="navbar bg-primary md:px-9 px-4 py-2 ">
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
                      <a href="/">Home</a>
                    </li>
                    <li className="hover:text-[#2095AE]">
                      <a href="/about">About</a>
                    </li>
                    <li className="hover:text-[#2095AE]">
                      <a href="/tour">Tour</a>
                    </li>
                    <li className="hover:text-[#2095AE]">
                      <a href="/destinations">Destinations</a>
                    </li>
                    <li className="hover:text-[#2095AE]">
                      <a href="/blog">Blog</a>
                    </li>
                    <li className="hover:text-[#2095AE]">
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <a
                  href="/"
                  className="btn btn-ghost normal-case text-white text-xl"
                >
                  Travel Next
                </a>
              </div>
              <div className="navbar-center hidden lg:flex text-black font-semibold navbar-end">
                <ul className="menu menu-horizontal px-1">
                  <li className="text-white ">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-white">
                    <a href="/about">About</a>
                  </li>
                  <li className="text-white">
                    <a href="/tour">Tour</a>
                  </li>
                  <li className="text-white">
                    <a href="/destinations">Destinations</a>
                  </li>
                  <li className="text-white">
                    <a href="/blog">Blog</a>
                  </li>
                  <li className="text-white">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;