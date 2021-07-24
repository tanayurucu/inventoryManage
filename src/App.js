
import './App.css';
import Info from "./Info.js";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import {useState} from "react";
import ItemsDisplay from "./ItemsDisplay"

function App() {
  const [filters, setFilters]=useState({});
  const [data, setData] = useState({items : []});
  
  const updateFilters= (searchParams) => {
    setFilters(searchParams);
  };
  const addItemToData= (item) => {
    let items =data["items"];
    item.id = items.length;
    items.push(item);
    setData({items: items});
    console.log(data);

  };

  return (
    <div className="App">
      <Searcbar updateSearchParams={updateFilters} />
      <p>Name:{"name" in data ? data["name"] : "no data"}</p>
      <p>Max Price:{"price"  in data ? data["name"] : "no data"}</p>
      <p>Type:{"type"  in data ? data["type"] : "no data"}</p>
      <p>Brand:{"brand"  in data ? data["brand"] : "no data"}</p>
    </div>
  );
}


export default App;
