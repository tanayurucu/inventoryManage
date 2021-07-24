

export default function Info(props){
    const value=props.text;
    return( <div>
      <h1>first system</h1>
      <p>falan filan</p>
      <label for="text-form">write smt:</label>
      <input type="text" value={value} id="text-form"></input>
    </div>)
  }