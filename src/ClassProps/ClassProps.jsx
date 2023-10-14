import { Component } from "react"

class ClassProps extends Component { 
    render() {
        return (
            <div>
                <h2>
                    my name of courses are {this.props.courses[0]} and {this.props.courses[1]} 
                </h2>
                {this.props.children}
            </div>
        )
    }
}
export default ClassProps;