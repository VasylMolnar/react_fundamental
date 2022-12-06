import React from 'react'

const Square = ({color,isDarkText}) => {
  return (
    <>
      <div className="square"style={{
                backgroundColor: color || 'white',
                color: isDarkText ? "#000" : "#FFF",
                borderColor: isDarkText ? "#000" : "#FFF"
            }}>
        <p>"Empty Value"</p>
      </div>
    </>
  )
}

export default Square
