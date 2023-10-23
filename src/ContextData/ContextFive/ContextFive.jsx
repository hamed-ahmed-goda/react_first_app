import React, { Component } from 'react'

import { UserConsumer } from '../ContextData';

class ContextFive extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (value) => {
                            return (
                                <h5>Compounant Five { value}</h5>
                            )
                        }
                    }

                </UserConsumer>  
            </div>
        )
    }
}
export default ContextFive;