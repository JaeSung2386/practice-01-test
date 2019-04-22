import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ServiceMenu from './ServiceMenu';

class Navigation extends Component {
  render() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">  
          <Logo />
          
          {/* 구분선  */}
          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
              <span className="nav-link">Menu</span>
          </li>

          <hr className="sidebar-divider" />
          
          <div className="sidebar-heading">
            Commute
          </div>

          <li className="nav-item">
            <a 
              className="nav-link collapsed" 
              data-toggle="collapse" 
              data-target="#collapseTwo"
              aria-expanded="true" 
              aria-controls="collapseTwo"
              href="" >
              <i className="fas fa-fw fa-folder"></i>
              <span>출퇴근 관리</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="list">출퇴근 조회</Link>
                <Link className="collapse-item" to="setting">출퇴근 설정</Link>
                <Link className="collapse-item" to="checkin">출근 신청</Link>
                <Link className="collapse-item" to="checkout">퇴근 신청</Link>
                <Link className="collapse-item" to="time">현재 근무 시간 조회</Link>
              </div>
            </div>
          </li>
        
          <hr className="sidebar-divider" />

          <div className="sidebar-heading">
            Working attitude
          </div>

          <li className="nav-item">
            <a 
              className="nav-link collapsed" 
              href="#" 
              data-toggle="collapse" 
              data-target="#collapseUtilities" 
              aria-expanded="true" 
              aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-folder"></i>
              <span>근태 관리</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <a className="collapse-item" href="#">근태 조회</a>
                <a className="collapse-item" href="#">근태 조정</a>
                <a className="collapse-item" href="#">근태 조회</a>
              </div>
            </div>
          </li>

          <hr className="sidebar-divider" />
          
          <div className="sidebar-heading">Activity</div>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <i className="fas fa-fw fa-table"></i>
              <span>활동 기록</span></a>
            </li>

                <hr className="sidebar-divider" />
          <ServiceMenu />
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
  }
}

export default Navigation;
