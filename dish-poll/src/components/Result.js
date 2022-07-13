import React ,{useState,useEffect} from 'react'
import './Result.css'


function Result() {
  const [data,setData] = useState([]);





useEffect(()=>{

  const loadData= async()=>{
    const res = await  JSON.parse(localStorage.getItem("pollData"));
    setData(res);
  }

  loadData();

},[])

let ans = data.map(ele=>{
  if(ele?.point){
    return  ele;
  }else{
    const temp = {...ele,point:0};
    return temp;

  }
})

 ans = ans.sort((a,b)=> b.point - a.point)


  return (
    <div className='tables'>
    <table>
    <thead>
    <tr>
    <td>RAnk</td>
    <td>name</td>
    <td>point</td>
    </tr>
    </thead>
    <tbody>
    {
      ans.map((data,index)=>{

          return(
            <tr key ={index}>
            <td>{index+1}</td>
            <td>{data.dishName}</td>
            <td>{data.point}</td>
            </tr>
          )
        
      })
    }
    </tbody>
   
    </table>
    </div>
  )
}

export default Result