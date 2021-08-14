function ItemsDisplay({items,deleteItem}){
    const showItem= (item) =>{
        return(
            <tr key={item.id}>
                <th scope="row"> {item.id}</th>
                    <td>name: {item.name}</td>
                    <td>price: {item.price}</td>
                    <td>type: {item.type}</td>
                    <td>brand: {item.brand}</td>
                    <td><button className="btn btn-danger" onClick={()=> deleteItem(item)}>delete</button></td>
            </tr>
        );
    };
    return(
        <div className="container"> <div className="row"><h2>Item List</h2></div> 
            <div className="row">
                <table className="table table-striped">
                    <thead><tr>
                    <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">Price</th>
                        <th scope="col">type</th>
                        <th scope="col">brand</th>
                        <th scope="col">delete</th>
                        
                        </tr></thead>
                    <tbody>{items.map(showItem)}</tbody>
                   
                </table>
            </div>
        </div>


    );
    
    
}
export default ItemsDisplay;
