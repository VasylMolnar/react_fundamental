import  {React,useState}from 'react'
import Square from './components/2/Square'
import Input from './components/2/Input'

function App() {
  const [color, setColor] = useState("")
  const [isDarkText, setIsDarkText] = useState(true)

  const randomColor = () => {  
    setIsDarkText(color !== "black" ? true : false);
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }

  return (
    <div className="App" style={{ backgroundColor: color}}>
      <Square color={color} isDarkText={isDarkText}/>

      <Input 
        color={color} 
        setColor={setColor} 
        isDarkText={isDarkText}

        onClick={() => setIsDarkText(!isDarkText)}
        //onClick={randomColor} 
        disabled={ color === "black" ? false : true }
        
        randomColor={randomColor}
      />
    </div>
  );
}

export default App;

