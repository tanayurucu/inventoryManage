function ItemDisplay(props){
    return(
        <div>
        {props.items.map((item)=>{
            return (
                <div>
                    <p>Id: {item.id}</p>
                    <p>name: {item.name}</p>
                    <p>price: {item.price}</p>
                    <p>type: {item.type}</p>
                    <p>brand: {item.brand}</p>
                </div>
            );
        })}
        
    </div>

    );
    
    
}
export default ItemsDisplay;
