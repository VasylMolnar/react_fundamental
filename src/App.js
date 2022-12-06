import  {React ,useState}from 'react'
import Com from './components/Com'

function App() {
  const [counter, setCounter] = useState(0);

  const incremented = () => {
     //тут setCounter асинхроне додавання тому ящо ми викличемо 2 раз неспрацює
    //setCounter(counter+1);  //setCounter(counter+1);
   
    //тут спрацює 2 раз 
    setCounter(prev => prev + 1)
    //setCounter(prev => prev + 1)
  }

  const decremented = () => {
    setCounter(prev => prev - 1)
  }

  const decremented2 = (n) => {
    console.log(n)
    setCounter(prev => prev - 1)
  }

  return (
    <div className="App">
      <Com incremented={incremented} decremented={decremented} counter={counter} setCounter={setCounter}/>
      
      <p>Couter in App:{counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
      <button onClick={decremented}>-</button>

      <button onClick={() => decremented2("hello")}>-n</button>


    </div>
  );
}

export default App;

