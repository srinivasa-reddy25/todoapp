import './index.css'

function Statscontainer({todolistDetails}) {

    const total=todolistDetails.length;
    const Completed=(todolistDetails.filter((eachitem)=>{
        return eachitem.isCompleted===true
    })).length;
    const Remaining=total-Completed;

  return (
    <div className='Statscontainer'>
        <h1 className='statsheading'>Stats</h1>
        <div className='stats'>
            <p>Total: {total}</p>
            <p>Completed: {Completed}</p>
            <p>Remaining: {Remaining}</p>
        </div>
    </div>
  )
}

export default Statscontainer