import './App.css'
import Loginpage from './components/LoginPage/loginpage'
import Home from './components/HomePage/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState,useEffect, use } from 'react'
import BuildContext from './BuildContext'
import { v4 as uuid } from 'uuid'


if (!localStorage.getItem("todolistItems")) {
  localStorage.setItem("todolistItems", JSON.stringify([]))
}
if (!localStorage.getItem("username")){
  localStorage.setItem('username',JSON.stringify(""))
}

function App() {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(
    ()=>{
    const Name=localStorage.getItem("username");
    return (Name? JSON.parse(Name):"")
  }
  );
  useEffect(() => {
    localStorage.setItem("isLoggedin", JSON.stringify(name))
  }, [isLogedIn])

  const [todolist, settodolist] = useState(() => {
    const saved = localStorage.getItem("todolistItems")
    return (JSON.parse(saved))
  });
  const [activity, setactivity] = useState("");

  useEffect(() => {
    localStorage.setItem("todolistItems", JSON.stringify(todolist))
  }, [todolist])


  const onChangingThelist = (e) => {
    setactivity(e.target.value)
  }

  const onAddingTask = (e) => {
    e.preventDefault();
    if (activity) {
      const obj = {
        id: uuid(),
        activity: activity,
        isCompleted: false,
        isEditing: false
      }
      settodolist((prev) => ([...prev, obj]));
      setactivity("")
    }

  }

  const onDeletingTask = (id) => {
    const filteredlist = todolist.filter((each) => (each.id !== id));
    settodolist(filteredlist);

  }

  const editingthetotolists = (id) => {
    const filteredlist = todolist.map((eachItem) => {
      if (eachItem.id === id) {
        return {
          ...eachItem,
          isCompleted: !eachItem.isCompleted
        }
      }
      return eachItem

    })
    settodolist(filteredlist);

  }

  
  const editingtheTask = (id) => {
    const filteredlist = todolist.map((eachItem) => {
      if (eachItem.id === id) {
        return {
          ...eachItem,
          isEditing: !eachItem.isEditing
        }
      }
      return eachItem

    })
    settodolist(filteredlist);
  }

  const editTheActivity = (id, activity) => {
    const filteredlist = todolist.map((eachItem) => {
      if (eachItem.id === id) {
        return {
          ...eachItem,
          activity: activity,
          isEditing: false
        }
      }
      return eachItem

    })
    settodolist(filteredlist);
  }



  return (
    <BuildContext.Provider value={{
      isLogedIn,
      setIsLoggedIn,
      userName,
      setUserName,
      password,
      setPassword,
      name,
      setName,
      todolist,
      settodolist,
      activity,
      setactivity,
      onChangingThelist,
      onAddingTask,
      onDeletingTask,
      editingthetotolists,
      editingtheTask,
      editTheActivity
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </BuildContext.Provider >

  )
}


export default App