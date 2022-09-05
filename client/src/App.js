
import './App.css';
import React from 'react';

function App() {

  const [data, setData] = React.useState([]);
  React.useEffect(() =>{
    fetch("/api")
    .then((res) => res.json())
    .then( (data) => {
      setData(data.people);
    });
  },[]);
  //once to do
  return (
    <div>
      {data.map((people,index)=>{
        return(
          <div key={index}>
             <h2>name: {people.name}</h2>
            <h2>age: {people.age}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default App;

