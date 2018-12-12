import React from 'react';

import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Wuilt Task</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to="/home">Home|</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about">about|</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/index">Users</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>


        )
    }
}

