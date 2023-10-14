import { Component } from "react";
class Login extends Component {
    constructor() {
        super();
        this.state = {
            isloggedIn: false,
            subscription: "Guest",
        };
    }

    changeState = (parmatars)=> {
        this.setState({
            isloggedIn: true,
            subscription: "You now have a subscription",
        });
    }
    render() {
        return (
            <div>
                {this.setState ? <h3>{this.state.subscription}</h3> : <h3>{this.state.subscription}</h3>}
                <button onClick={this.changeState}>Login</button>
            </div>
        )
    }
}

export default Login;
