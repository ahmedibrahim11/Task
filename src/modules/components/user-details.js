import React from "react";
import * as _ from "lodash";

class UserDetails extends React.Component {

    props: {
        currentUser: any
    };
    render() {
        return (
            <div class="card" style={{ width: '18rem', marginLeft: 250, marginTop: 55 }}>
                <img class="card-img-top" src={this.props.currentUser.avatar_url} alt="" />
                <div class="card-body">
                    <p class="card-text">Name:{this.props.currentUser.name}</p>
                    <p class="card-text">Email:{this.props.currentUser.email}</p>
                    <p class="card-text">Date:{this.props.currentUser.created_at}</p>
                </div>
            </div>
        );
    }
}
export default UserDetails;