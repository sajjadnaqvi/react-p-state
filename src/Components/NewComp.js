import React,{Component} from 'react'

export class NewComp extends Component{
    // initialize the state object in the constructor
    constructor(props){
        super(props)

        this.state={
            message:"Subscribe to my channel",
            sub: "Subscribe"
        };
        }
    
    styles ={
        fontStyle:"italic",
        color: "purple"
      };
      Buttonchange =()=>{
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        });
    }
    render(){
        return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
            </div>
        )
    }
}

export default NewComp