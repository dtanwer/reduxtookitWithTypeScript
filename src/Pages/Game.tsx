import {useState} from 'react'

const  Game=()=> {
    let flag=false;
    const [matrix,setMatrix]=useState([["","",""],["","",""],["","",""]])
    const handelClick=(e:React.MouseEvent<HTMLInputElement>,x:number,y:number)=>{
        (e.target as HTMLInputElement).value = flag?'X':'O';
        flag=!flag;
       
    }
  return (
    <div className='game'>
        <h1>Game</h1>
        <div className="window">
            <input type="text"  onClick={(e)=>handelClick(e,0,0)} className='btn' />
            <input type="text" className='btn' onClick={(e)=>handelClick(e,0,1)}/>
            <input type="text" className='btn' onClick={(e)=>handelClick(e,0,2)}/>
            <input type="text" className='btn'onClick={(e)=>handelClick(e,1,0)} />
            <input type="text" className='btn' onClick={(e)=>handelClick(e,1,1)}/>
            <input type="text" className='btn' onClick={(e)=>handelClick(e,1,2)}/>
            <input type="text" className='btn' onClick={(e)=>handelClick(e,2,0)}/>
            <input type="text" className='btn' onClick={(e)=>handelClick(e,2,1)}/>
            <input type="text" className='btn' onClick={(e)=>handelClick(e,2,2)}/>
        </div>
    </div>
  )
}

export default Game