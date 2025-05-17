import { useContext } from "react"
import './index.css'
import BuildContext from "../../BuildContext"


function NavBar() {
    
    const {name}=useContext(BuildContext);
  return (
    <div className="NavBarContainer">
        <p className="Username">{name}</p>
    </div>
  )
}

export default NavBar