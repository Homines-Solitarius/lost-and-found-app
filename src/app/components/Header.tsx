import { FaLock } from "react-icons/fa6"
import "../globals.css"
import Link from "next/link"

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Report Lost Item', href: '/report_item' },
    { name: 'Contact Us', href: '#' },
  ]
  return (
    <div className="flex px-20 items-center justify-between bg-blue-700">
      <div className="flex flex-row items-center gap-2 ">
        <FaLock color="white" />
        <span className="text-xl font-bold text-white">Fpe Recover</span>
      </div>
      <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 p-4">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="text-white rounded-lg hover:bg-white hover:text-blue-700 font-bold text-md p-2 transition-all duration-500 ease-out">
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Header