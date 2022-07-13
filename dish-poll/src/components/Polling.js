import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Data from "../../database/db.json";
import axios from "axios";

import './Polling.css'


 function Polling() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [rank1, setRank1] = useState(null);
  const [rank2, setRank2] = useState(null);
  const [rank3, setRank3] = useState(null);
  const duplicates = data;


  var datas = data;

  const onSearchhandler = (e) => {
    let filtered = data.filter((item) =>
      item.name.includes(e.currentTarget.value)
    );
    setData(filtered);
  };

  useEffect(()=>{
    const data =JSON.parse(localStorage.getItem("polldataa"));
    setData(data);
  },[])

  
  const rankone = (e) => {
    if (e !== rank2 && e !== rank3) {
      
      // localStorage.setItem("rank1", e);
      setRank1(e);
    }
  };
  
  const ranktwo = (e) => {
    if (e !== rank1 && e !== rank3) {
      // localStorage.setItem("rank2", e);
      setRank2(e);
    }
  };

  const rankthree = (e) => {
    if (e !== rank2 && e !== rank1) {
      // localStorage.setItem("rank3", e);
      setRank3(e);
    }
  };

  const pollhandler = () => {

    console.log(rank1,rank2,rank3);

    let first = data.filter((data)=> data.id===rank1);
    let second = data.filter((data)=> data.id===rank2);
    let third = data.filter((data)=> data.id===rank3);


    // first.point = 300;
      // data[first]= {...data[first],}

    const updatedPoll =(ele,val)=>{
      if(data[ele]?.point){
        data[ele].point = data[ele].point+val;
        console.log("this dine")
      }else{
        data[ele] = {...data[ele],point:val};
        console.log("thisdonneee")
      }
      // data[ele]= {...data[ele]}
    }
   

   updatedPoll(rank1,30);
     updatedPoll(rank2,20);
     updatedPoll(rank3,10);

    // const updatedPollData = data.[first]

  console.log(first,second,third);
  console.log(data)

    navigate("/result");

  };

  return (
    <div className="view-container">
    
      {rank1 !== null && rank2 !== null && rank3 !== null ? (
        <div>
        <button  className ="smt-btn" onClick={pollhandler}>Submit Poll</button>
        </div>
      ) : " "}


      <div className="dish">
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index} className="itemCard">
                <div className="buttonWrapper">
                  <button
                    className="rank"
                    style={{
                      background:
                        item.id === rank1 ? "red" : "rgba(47, 244, 89, 0.75)",
                    }}
                    onClick={() => rankone(item.id)}
                  >
                    1
                  </button>
                  <button
                    className="rank"
                    style={{
                      background:
                        item.id === rank2 ? "red" : "rgba(47, 244, 89, 0.75)",
                    }}
                    onClick={() => ranktwo(item.id)}
                  >
                    2
                  </button>
                  <button
                    className="rank"
                    style={{
                      background:
                        item.id === rank3 ? "red" : "rgba(47, 244, 89, 0.75)",
                    }}
                    onClick={() => rankthree(item.id)}
                  >
                    3
                  </button>
                </div>
                <img src={item.image} alt="image" />
                <h2>{item.dishName}</h2>
                <p>{item.description}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}


export default Polling;