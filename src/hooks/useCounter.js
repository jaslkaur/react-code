import {useState,useEffect} from 'react';

const useCounter = (operation=true) => {
    const [counter,setCounter] = useState(0);

    useEffect(() => {
     const interval = setInterval(()=>{
         if(operation){
            setCounter((prevConter)=> prevConter+1);
         }else{
            setCounter((prevConter)=> prevConter-1);
         }
     },1000)

     return ()=>clearInterval(interval)
    },[]);
  
    return counter;
}

export default useCounter;