export default function Header() {
    return (
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Left side - Navigation links */}
          <nav className="flex space-x-8 text-lg">
            <a href="/" className="text-red-500 hover:text-red-400 font-semibold">Home</a>
            <a href="/store" className="hover:text-gray-300">Store</a>
            <a href="/collections" className="hover:text-gray-300">Collections</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </nav>
  
          {/* Center - Logo */}
          <div className="text-center">
            <h1 className="text-2xl font-extrabold tracking-wide uppercase">
              <span className="text-red-500 text-3xl">邪成</span> <span className="text-gray-200">Evilgrow</span>
            </h1>
          </div>
  
          {/* Right side - Currency dropdown, user icon, and cart */}
          <div className="flex items-center space-x-6">
            {/* Currency dropdown */}
            <div className="relative">
              <select
                className="bg-black border border-gray-700 text-white rounded px-3 py-1 focus:outline-none hover:border-red-500"
                defaultValue="EUR"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">Euro (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
  
            {/* User icon */}
            <button className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 21v-2a4 4 0 00-8 0v2m8-10a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
  
            {/* Cart icon */}
            <div className="relative">
              <button className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6m12-6l2 6m-6-6v6"
                  />
                </svg>
              </button>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
  