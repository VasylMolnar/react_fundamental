import  {React,useState}from 'react'
import Square from './components/Square'
import Input from './components/Input'

function App() {
  const [color, setColor] = useState("")
  const [isDarkText, setIsDarkText] = useState(true)

  const randomColor = () => {  
    setIsDarkText(color !== "black" ? true : false);
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }

  return (
    <div className="App" style={{ backgroundColor: 'greenyellow'}}>
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

