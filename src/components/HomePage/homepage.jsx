import './index.css'

import NavBar from '../NavBar/navbar'
import MainContainer from '../MainContainer/mainContainer'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function Homepage() {

    const navigate = useNavigate();
    
    useEffect(() => {
        const islogin = JSON.parse(localStorage.getItem("isLoggedin"));
        if (!islogin) {
            alert('Please Login First');
            navigate('/login', { replace: true });
        }
    }, []);
    

    // const { isLogedIn } = useContext(BuildContext);
    // if (!islogin) {
    //     alert('Please Login First');
    //     navigate('/login', { replace: true });
    // }


    return (
        <div className="HomepageContainer">
            <NavBar />
            <MainContainer />
        </div>
    )
}

export default Homepage