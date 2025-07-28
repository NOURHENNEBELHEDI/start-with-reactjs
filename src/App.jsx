import { useEffect, useState } from "react";

function App() {
  //React Hooks : useState / useEffect
  const [counter, setCounter] = useState(0); //var counter = 0
  useEffect(() => {
    alert("from useEffect");
    console.log("log from useEffect");
  }, [counter]); // work when change state of counter
  //}, []); // work when load page 

  // function Increment(){  hiya setCounter fn bch tbadel state ta3 lvariable
  //   counter ++
  //   console.log(counter)
  // }

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <br />
      {counter}
    </div>
  );
}

export default App;
