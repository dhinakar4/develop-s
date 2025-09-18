import React from "react";

class Methods extends React.Component {
    render (){
        return (
            <div>
                <h4>Hello ,I am {this.props.name}</h4>
                <h4>I was {this.props.age} Years old!</h4>
                <h4 style={{color:'red'}}>I am coming from {this.props.city}</h4>
                <br /><br />
            </div>
        )
    }
} export default Methods