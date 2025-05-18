import './index.css'
import { useContext } from 'react'
import BuildContext from '../../BuildContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Loginpage() {
    
    const {name,setName,userName,setUserName,password,setPassword,isLogedIn,setIsLoggedIn}=useContext(BuildContext);

    useEffect(() => {
        const islogin = JSON.parse(localStorage.getItem("isLoggedin"));
        if (islogin) {
            alert('Already Logged In');
            navigate('/', { replace: true });
        }
    }, []);

    const Url='https://apis.ccbp.in/login';
    const navigate=useNavigate();
    const Options={
        method:'POST',
    }

    const onChangeName=(e)=>{
        setName(e.target.value);
        console.log(name);
    }
    const onChangeUserName=(e)=>{
        setUserName(e.target.value);
        console.log(userName);
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value);
        console.log(password);
    }

    const onClickingLogin = (e)=>{
        e.preventDefault();
        if(userName==='Rahul' && password==='Rahul@123'){
            alert('Login Successful');
            navigate('/', { replace: true });
            setIsLoggedIn(true);
        }
        else{
            alert('Login Failed');
        }
        // const userData=await fetch(Url,Options);
        // const data=await userData.json();
        // console.log(data);
    }


    return (
        <div className="LoginPageContainer">
            <div className="LoginPage">
                <h1 className="loginPageHeading">Login</h1>
                <form action="" className="LoginForm" onSubmit={onClickingLogin}>
                    <div className="NameInputContainer">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Name" id="Name" className='Nameinput' onChange={onChangeName}/>
                    </div>
                    <div className="UserNameContainer">
                        <label htmlFor="UserName">UserName</label>
                        <input type="text" placeholder="UserName" id="UserName" className='UserNameInput' onChange={onChangeUserName}/>
                    </div>
                    <div className="PasswordContainer">
                        <label htmlFor="Password">Password</label>
                        <input type="password" placeholder="password" id="Password" className='PasswordInput' onChange={onChangePassword}/>
                    </div>
                    <button className="LoginButton" type="submit">
                        Log in
                    </button>
                </form>
                <div className='HintContainer'>
                    <h1>Hint</h1>
                    <p>UserName: Rahul</p>
                    <p>Password: Rahul@123</p>
                </div>
            </div>
        </div>
    )
}


export default Loginpage