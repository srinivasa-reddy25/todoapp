import './index.css'
import Todolistitem from '../TodoListItem/todolistitem'
import Editcomponent from '../EditComponent/editcomponent'
import BuildContext from '../../BuildContext'
import { useContext } from 'react'

function Todolistcontainer() {

    const {todolist,activity,onChangingThelist,onAddingTask,onDeletingTask,editingthetotolists,editingtheTask,editTheActivity}=useContext(BuildContext)


    return (
        <div className='TodoListContainer'>
            <h1 className='todolistheading'>Todo List</h1>
            <form action="" className='TodoListForm' onSubmit={onAddingTask}>
                <input type="text" value={activity} placeholder='Add a new task' id='Task' className='InputTask' onChange={onChangingThelist} />
                <button type="submit" className='AddButton'>Add</button>
            </form>
            <hr className='todolistLine' />
            <div className='TodoLists'>
                {todolist.map((eachItem) => {
                    if (!eachItem.isEditing) {
                        return <Todolistitem todolistDetails={eachItem} key={eachItem.id} onDeletingTask={onDeletingTask} editingthetotolists={editingthetotolists} editingtheTask={editingtheTask} />
                    }
                    return <Editcomponent todolistDetails={eachItem} key={eachItem.id} editTheActivity={editTheActivity} />
                })}
            </div>
        </div>
    )
}

export default Todolistcontainer