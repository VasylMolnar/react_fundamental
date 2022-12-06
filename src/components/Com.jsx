import React from 'react'

const Com = ({counter,setCounter,decremented,incremented}) => {

  return (
    <div >
        <p>Couter in component:{counter}</p>

        <div>
            <button style={{ marginRight: '10px'}} onClick={() => setCounter(prev => prev + 1)}>+</button>
            <button onClick={() => setCounter(prev => prev - 1)}>-</button>                   
        </div>
           
        <div style={{ marginTop:"10px"}}>
            <button style={{ marginRight: '10px'}} onClick={incremented}>+</button>
            <button onClick={decremented}>-</button>
        </div>
       
     

    
    </div>
  )
}

export default Com
