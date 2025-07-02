import Image from "next/image"
import logo from "/public/padlock.png"
import "../globals.css"
import Link from "next/link"

const Header = () => {
  return (
      <div className="header">
          <div style={{display: "flex", alignItems:"center", flexDirection: "row", gap: "10px"}}>
              <Image alt="brand logo" src={logo} width={30} className="image"></Image>
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