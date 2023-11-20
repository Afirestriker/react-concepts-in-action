import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome Kate</div>

        // return this.state.isLoggedIn ? (<div>Welcome Kate</div>) : (<div>Welcome Guest</div>)

        // let message = '';
        // if (this.state.isLoggedIn) message = <div>Welcome Kate</div>;
        // else message = <div>Welcome Guest</div>;
        // return(<>{message}</>)

        // if (this.state.isLoggedIn) {
        //     return(<> Welcome Kate </>)
        // } else {
        //     return(<> Welcome Guest </>)
        // }
    }
}

export default UserGreeting;
