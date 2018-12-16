import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State } from '../../state';

import { GetUserById } from "../../state/users/action-creator";

import UserDetails from "../components/user-details"

class UsersDetailsContainer extends Component {
    props: {
        currentUser: any,
        GetUserById: (userId: Number) => void
    };


    static mapStateToProps(state: State) {
        return {
            currentUser: state.users.currentUser
        };
    }

    static mapDispatchToProps(dispatch: Dispatch) {
        return bindActionCreators(
            { GetUserById },
            dispatch
        );
    }
    render() {
        return (
            <UserDetails currentUser={this.props.currentUser} />
        );
    }

}
const UsersDetailsScreen = connect(
    UsersDetailsContainer.mapStateToProps,
    UsersDetailsContainer.mapDispatchToProps
)(UsersDetailsContainer);

export default UsersDetailsScreen;