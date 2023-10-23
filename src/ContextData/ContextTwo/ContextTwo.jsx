import React, { Component } from 'react'

import ContextThree from '../ContextThree/ContextThree';

class ContextTwo extends Component {
    render() {
        return (
            <div>
                <h2>
                    Compounant Two
                </h2>
                <ContextThree/>
            </div>
        )
    }
}
export default ContextTwo;