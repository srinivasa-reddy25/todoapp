import './index.css'



function Todolistitem({ todolistDetails, onDeletingTask, editingthetotolists ,editingtheTask}) {


    const onclickingDeleteButton = () => {
        onDeletingTask(todolistDetails.id)
    }

    const OnclickingRadio = () => {
        editingthetotolists(todolistDetails.id)
    }
    const onclickingEditbutton=()=>{
        editingtheTask(todolistDetails.id)
    }

    return (    
        <div className='todolistitemcontainer'>
            <div className='leftPart'>
                <input type="checkbox" className='checkUncheckradio' onChange={OnclickingRadio}  checked={todolistDetails.isCompleted}/>
                <p 
                    style={
                        {
                            textDecoration:todolistDetails.isCompleted ? "line-through":'none'
                        }
                    }
                >
                    {todolistDetails.activity}
                </p>
            </div>
            <div className='rightPart'>
                {!todolistDetails.isCompleted &&  <button className='todolistEditButton' onClick={onclickingEditbutton}>Edit</button>}
                <button className='todolistDeleteButton' onClick={onclickingDeleteButton}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Todolistitem