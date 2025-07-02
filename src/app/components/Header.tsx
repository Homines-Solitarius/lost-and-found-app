import { FaLock } from "react-icons/fa6"
import "../globals.css"
import Link from "next/link"

const Header = () => {
  return (
      <div className="header">
        <div style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "10px" }}>
          <FaLock/>
          <span style={{color: 'white', fontWeight: "600"}}>Fpe Recover</span>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/report_item">Report Lost Item</Link>
          <Link href="/">Contact</Link>
        </nav>
    </div>
  )
}

export default Header