import { Component } from "react"
import './style.css';
class ProdQuatity extends Component { 
    constructor() {
        super();
        this.state = {
            counter: 1,
        };
    }
    increment = () => {
        this.setState(
            { counter: this.state.counter + 1 }
        );
    }
    decrement = () => {
        this.state.counter > 1 &&
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.counter}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default ProdQuatity;