import './index.css'

import { useState } from 'react'



function Editcomponent({ todolistDetails, editTheActivity }) {

    const [activity, setActivity] = useState(todolistDetails.activity)
    const onchangeingsaveinput = (e) => {
        setActivity(e.target.value)
    }

    const OnsubmittingSave=(e)=>{
        e.preventDefault()
        editTheActivity(todolistDetails.id,activity)
        setActivity("")
    }

    return (
        <div className='todolisteditcontainercontainer'>
            <form action="" onSubmit={OnsubmittingSave} className='savaeditform'>
                <input type="text" value={activity} className='editingInput' onChange={onchangeingsaveinput}/>
                <button className='savabutton' type='submit'>Save</button>
            </form>
        </div>
    )
}

export default Editcomponent