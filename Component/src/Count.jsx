import React from "react";
import { useState } from "react";
function Count(){
    const [count, setcount] = useState(0);
    
     function count1(){
        function increment(){
          setcount(count+1)
        }
        function decrement(){
              setcount(count-1)
        }
        return (
            <div>
                <button onClick={increment}>+</button>
                <span>{count}</span>
                <button onClick={decrement}>-</button>
                
            </div>
        )
    }
    return count1();
}
export default Count;