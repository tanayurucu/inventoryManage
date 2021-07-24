import {useState} from "react";



export default function SearchBar(props){
    const [name,setName]= useState("");
    const [price,setPrice]= useState(0);
    const [type,setType]= useState("");
    const [brand,setBrand]= useState("");
    const searchButtonPressed= () => {
        console.log(name);
        console.log(price);
        console.log(type);
        console.log(brand);
    };
    
    return(
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label htmlfor="name-field">Name:</label>
                <input 
                id="name-field" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                />
                <label htmlfor="price-field">Name:</label>
                <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <label htmlfor="type-field">Name:</label>
                <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value)}/>
                <label htmlfor="brand-field">Name:</label>
                <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                <button type="button" onClick={searchButtonPressed} >Search</button>
        
            </form>
        </div>
    );
}

