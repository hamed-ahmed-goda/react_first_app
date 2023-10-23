import React, { Component } from 'react'

import ContextTwo from '../ContextTwo/ContextTwo';

class ContextOne extends Component {
    render(){
        return (
            <div>
                <h1>Compounant One</h1>
                <ContextTwo/>
            </div>
        )
    }
}
export default ContextOne;