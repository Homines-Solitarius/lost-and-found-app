import { FaLock } from "react-icons/fa6"
import "../globals.css"
import Link from "next/link"

const Header = () => {
  return (
      <div className="flex p-8 items-center justify-between bg-sky-500">
        <div className="flex flex-row items-center gap-2">
          <FaLock color="white" />
          <span className="text-xl font-bold text-white">Fpe Recover</span>
        </div>
        <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 p-4 bg-white shadow-md">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium text-base">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium text-base">
            About
          </Link>
        </nav>
    </div>
  )
}

export default Header