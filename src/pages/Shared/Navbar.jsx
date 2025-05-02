import { Link } from "react-router"

const Navbar = () => {

const links = [
  {name: "Home", path: "/"},
  {name: "about", path: "/about"},
  {name: "pricing", path: "/pricing"},
  {name: "consulting", path: "/consulting"},
  {name: "ai coach", path: "/ai-coach"},
]

  return (
    <nav className="flex justify-between items-center container mx-auto bg-transparent py-[10px]">
      <div className="flex items-center gap-[74px]">
        <div>
          <h2>SalesRank.AI</h2>
          </div>
          <div>
            <ul className="flex items-center gap-10 capitalize">
              {links.map((link, idx)=><li key={idx}><Link to={link.path}>{link.name}</Link></li>)}
            </ul>
          </div>
      </div>
      <div>
        <button className="btn">Get Started</button>
      </div>
    </nav>
  )
}

export default Navbar