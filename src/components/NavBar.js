import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Nutrient Log</Link>
                    <div className="navbar-nav text-right">
                        <div className="nav-item">
                            <Link to="/add" className="btn btn-secondary btn-sm">Add Log</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
