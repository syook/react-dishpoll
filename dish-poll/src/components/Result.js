import React from 'react'

function Result() {
  const data =JSON.parse(localStorage.getItem("polldataa"));
  console.log(data);
  return (
    <div>Result</div>
  )
}

export default Result