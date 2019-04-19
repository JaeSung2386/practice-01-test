import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">더존비즈人</div>
            </Link>
        );
    }
}

export default Logo;
