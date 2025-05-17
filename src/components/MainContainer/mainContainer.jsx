import './index.css'
import { useContext } from 'react'

import Todolistcontainer from '../TodoListContainer/todolistcontainer'


import Statscontainer from '../StatsContainer/statscontainer'
import BuildContext from '../../BuildContext'



function MainContainer() {
    const {todolist}=useContext(BuildContext)

    return (
        <div className='MainContainer'>
            <h1 className='HomepageHeading'>
                TODO Dashboard
            </h1>
            <div className='mainContent'>
                <Todolistcontainer/>
                <Statscontainer todolistDetails={todolist} />
            </div>

        </div>
    )
}

export default MainContainer