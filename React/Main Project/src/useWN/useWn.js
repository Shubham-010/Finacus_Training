import React from "react";

export default class useWn extends React.Component{
constructor(){
    super();
    this.state={
        show:true
    }
}

render(){

    return(
        <div>
        {
            this.state.show ? <hi>Test Hide annd Show</hi>:null
        }
            
            <button onClick={()=>{this.setState({show:!this.state.show})}}>Click Me!!</button>
        </div>
    )
}
}