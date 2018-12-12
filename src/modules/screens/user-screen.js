import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State } from '../../state';

import { loadUsers, GetUserById ,loadMoreUsers} from "../../state/users/action-creator";

import Users from "../components/users"

class UsersContainer extends Component {
    props: {
        allUsers: any,
        loadUsers: () => void,
        GetUserById: (userId: Number) => void,
    };


    static mapStateToProps(state: State) {
        return {
            allUsers: state.users.loadedUsers
        };
    }

    static mapDispatchToProps(dispatch: Dispatch) {
        return bindActionCreators(
            { loadUsers, GetUserById,loadMoreUsers },
            dispatch
        );
    }

    componentWillMount() {
        debugger;
        this.props.loadUsers();
    }
    render() {
        console.log(this.props.allUsers)
        return (
            <Users allUsers={this.props.allUsers} GetUserById={this.props.GetUserById} loadMoreUsers={this.props.loadMoreUsers} />
        );
    }

}
const UsersScreen = connect(
    UsersContainer.mapStateToProps,
    UsersContainer.mapDispatchToProps
)(UsersContainer);

export default UsersScreen;