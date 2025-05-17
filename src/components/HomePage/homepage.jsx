import './index.css'

import NavBar from '../NavBar/navbar'
import MainContainer from '../MainContainer/mainContainer'


function Homepage() {
    return (
        <div className="HomepageContainer">
            <NavBar />
            <MainContainer/>
        </div>
    )
}

export default Homepage