import React, { Component } from 'react';
import { Switch, Route, withRouter, } from 'react-router-dom';

import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { State } from './state';

import { Home } from './modules/screens/home'

class RoutingContainer extends Component {

    static mapStateToProps(state: State) {
        return {
        }
    }

    static mapDispatchToProps(distpatch: Dispatch) {
        return bindActionCreators({
        }, distpatch)
    }

    props: {
    }

    render() {
        return (
            <Switch>
                <Route path='/index' component={Home} />
            </Switch>
        )
    }
}

export const Routing = withRouter(connect(RoutingContainer.mapStateToProps, RoutingContainer.mapDispatchToProps)(RoutingContainer));