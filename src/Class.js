import React from "react";

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    componentDidMount(){
        console.log("mounted!")
    }
    componentDidUpdate(){
        console.log("updated!");
    }
    componentWillMount(){
        console.log("cleanup");
    }

    clickedButton(){
        this.setState({count: this.state.count +1})
        console.log("clicked");
    }
    render(){
        return(
        <div>
            <button className="btn btn-primary" onClick={()=> this.clickedButton()}>
                click here
            </button>
        </div>
        );
    }

}