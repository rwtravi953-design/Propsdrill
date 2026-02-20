import{useState}from 'react'
import Child from './Child'
function Props({fr,second,third})
{
    const[count,setCount]=useState(fr);
     const[counter,setCounter]=useState(second);
      const[counts,setCounts]=useState(third);
     return(
         <>
          <div>
            <button onClick={()=>setCount(prev => prev === "JAVA" ? "PYTHON" : "JAVA")}>{count}</button>
              <button onClick={()=>setCounter(prev => prev === "DSA" ? "C++" : "DSA")}>{counter}</button>
                <button onClick={()=>setCounts(prev => prev === "MORE" ? "OTHER" : "MORE")}>{counts}</button>
                <Child name={count}
                name2={counter}
                name3={counts}
                />
            </div>
         </>
);
    }

export default Props;