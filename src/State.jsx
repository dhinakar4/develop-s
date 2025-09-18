import React from "react";

class Methods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }

    increment = () => {
        this.setState ({count : this.state.count + 1});
    };
     
    decrement = () => {
        this.setState ({count : this.state.count - 1});
    };


    render (){
        return (
            <div>
                <br/>
                <h6>Count :{this.state.count}</h6>
                <button onClick={this.increment}>Add</button>
                <button onClick={this.decrement}>Sub</button>
                <br /><br /><br />
            </div>
        );
    }
}
export default Methods;
