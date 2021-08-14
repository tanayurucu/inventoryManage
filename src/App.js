
import './App.css';
import Info from "./Info.js";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import {useState, useEffect} from "react";
import ItemsDisplay from "./ItemsDisplay"
import Test from "./Class"

function App() {
  const [filters, setFilters]=useState({});
  const [data, setData] = useState({items : []});
  //const [data, setData] = useState({});

  // useEffect(()=>{
  //   console.log("use eefeect");
  //   return ()=> {
  //     console.log("cleaning");
  //   };
  // },[data,filters]);

  const updateFilters= (searchParams) => {
    setFilters(searchParams);
  };
  const deleteItem=(item) => {
    const items=data["items"];
    const requestOptions={
      method:"DELETE"
    }
    fetch(`http://localhost:3000/items/${item.id}`,requestOptions).then(
      (response)=> {
        if (response.ok){
          const idx = items.indexOf(item);
          items.splice(idx,1);
          setData({items: items});
        }
      }
    );
  };

  // const updateData= (searchParams) => {
  //   setData(searchParams);
  // };

  const addItemToData= (item) => {
    let items =data["items"];
    //item.id = items.length;
    const requestOptions= {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(item)
    };
    fetch("http://localhost:3000/items",requestOptions)
    .then((response) => response.json())
    .then((data)=> {
      items.push(data);
      setData({items:items});
    }); };

  const filterData = (data) => {
    const filteredData=[];
if (!filters.name){
  return data;
}
    
    for(const item of data){
        if(item.name!== filters.name && item.name===filters.name){
          continue;
        }
        if(item.price!== filters.name && item.price>filters.price){
          continue;
        }
        if(item.type!== filters.type && item.type===filters.type){
          continue;
        }
        if(item.brand!== filters.brand && item.brand===filters.brand){
          continue;
        }
        filteredData.push(item);

    }
    return filteredData;
  }

  return (
    <div className="container">
      <div className="row mt-3">
      <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row" style={{color:"red"}}>
      <AddItem addItem={addItemToData} />
      </div>
      <div className="row">
      <ItemsDisplay deleteItem={deleteItem} items={filterData(data["items"])}></ItemsDisplay>
      </div>
      {/* <p>Name:{"name" in data ? data["name"] : "no data"}</p>
      <p>Max Price:{"price"  in data ? data["name"] : "no data"}</p>
      <p>Type:{"type"  in data ? data["type"] : "no data"}</p>
      <p>Brand:{"brand"  in data ? data["brand"] : "no data"}</p> */}
      <Test />
    </div>
    
  );
}


export default App;
