import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full h-[70px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/"><h2 className="font-[serif]">COMPILEIT</h2></Link>
      <ul className="flex gap-2">
        <li className="border-zinc-600">
          <Link to="/compiler"><Button variant="outline" > Start Coding </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
