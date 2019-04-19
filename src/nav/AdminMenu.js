import React, { Component } from 'react';

class AdminMenu extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-heading">
                    Service
                </div>
                
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>서비스 설정</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <a className="collapse-item" href="#">근무시간 설정</a>
                            <a className="collapse-item" href="#">휴게시간 설정</a>
                            <a className="collapse-item" href="#">휴일 설정</a>
                            <a className="collapse-item" href="#">404 Page</a>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default AdminMenu;