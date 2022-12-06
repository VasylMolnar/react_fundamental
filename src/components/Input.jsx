
const Input = ({setColor,color,setIsDarkText,isDarkText,randomColor, ...props}) => {
    return (
       <div className="input">
        <label>Add Color Name
            <br/>
            <input 
                onChange={(e) => setColor(e.target.value)} 
                type="text"  autoFocus
                placeholder="Add color name:"
                required
                value={color}
            />
        </label>

        <button type="button" onClick={randomColor}>Random Color</button>

        <button
                type="button"
                //onClick={() => setIsDarkText(!isDarkText)} 
                //disabled={ color === "black" ? false : true }
                {...props}
            >
                Toggle Text Color
        </button>

       </div>
    )
}

export default Input
