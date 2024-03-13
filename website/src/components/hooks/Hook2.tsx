 import { useEffect, useState } from "react"

// export const Hook2:React.FC<{}>=()=>{
//     let [value,setValue]=useState()
//     useEffect
//     return<>
//     </>
// }
 export const Hook2:React.FC<{}>= () => {
    let [value, setValue] = useState(0);
  
    
    useEffect(() => {
      document.title = `count: ${value}`;
    }, [value]); 
  
    return (
      <div>
        <h2>Hello, React!</h2>
        <p>Count: {value}</p>
        <button onClick={() => setValue(value + 1)}>Increment</button>
      </div>
    );
  }
  export{}

  