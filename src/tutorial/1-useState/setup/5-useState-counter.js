import React, { useState } from 'react';
let cond=0;
const UseStateCounter = () => {
  // const [number,setNumber]=useState(0);
  const [number2,setNumber2]=useState(0);
  const [a,setA]=useState(0);
  const [state,setState]=useState("");
  
  // const startTimer = () =>{
      
  //     console.log(a);
  // }
  
  const reset =()=>{setState("");
                  setNumber2(0);
                  console.log(a);
                  clearTimeout(a);
                  cond=0;
                 }
  const plusComplex=()=>{
      // startTimer();
      if(cond===0){
      let z= setTimeout(()=>{setState("disabled");
      console.log('succes');},1000);
      setA(z);
      cond=1;}
    // setTimeout(()=>{
      setNumber2(number2+1);
    //   setNumber2((prevState)=>{return prevState+1;});
    // },2000);
    // setState("disabled");
    
  }


  return <>
  {/* <section style={{margin:'4rem 0'}}>

    <h2>Simple Counter:</h2>
    <h1>{number}</h1>
    <button className='btn' onClick={()=>setNumber(number+1)}>Increase</button>
    <button className='btn' onClick={()=>setNumber(0)}>Reset</button>
    <button className='btn' onClick={()=>setNumber(number-1)}>Decrease</button>

  </section> */}
  <section style={{margin:'4rem 0'}}>

    <h2>Complex Counter:</h2>
    <h1>{number2}</h1>
    <button className='btn' disabled={state} onClick={plusComplex}>Increase</button>
    <button className='btn' onClick={reset}>Reset</button>


  </section>
  
  </>;
};

export default UseStateCounter;
