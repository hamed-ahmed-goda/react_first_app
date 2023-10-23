import React, { Component } from 'react'
import { UserConsumer } from '../ContextData';

import ContextFour from '../ContextFour/ContextFour';

class ContextThree extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (value) => {
                            return (
                                <h3>Compounant Five { value}</h3>
                            )
                        }
                    }
                </UserConsumer>  
                <ContextFour/>
            </div>
        )
    }
}
export default ContextThree;