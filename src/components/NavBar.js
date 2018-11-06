import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Nutrient Log</Link>
                <div class="navbar-nav">
                    <div class="nav-item">
                        <Link to="/add" className="nav-link">Add Log</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
