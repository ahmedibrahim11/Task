import React from "react";
import * as _ from "lodash";

class UserDetails extends React.Component {
    
    props: {
        currentUser: any
    };
    render() {
        return (
            <div class="card">
                <img class="card-img-top" style={{ width: 300, height: 300, marginLeft: 150 }} src={this.props.currentUser.avatar_url} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">{this.props.currentUser.id}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{this.props.currentUser.name}</li>
                    <li class="list-group-item">{this.props.currentUser.email}</li>
                    <li class="list-group-item">{this.props.currentUser.created_at}</li>
                </ul>
            </div>
        );
    }
}
export default UserDetails;