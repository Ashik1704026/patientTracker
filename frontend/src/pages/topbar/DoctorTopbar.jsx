import React from "react";
import "./topbar.css";
import { useNavigate} from "react-router-dom";

export default function DoctorTopbar() {
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/');
        
    }
  return (
    <div className="fixed-top">
    <nav class="navbar navbar-expand-lg bg-light opacity-75">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Patient Tracker
        </a>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          {!localStorage.getItem('token')?
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>:<ul class="navbar-nav ms-auto mb-2 mb-lg-0"><li className="nav-item"><button onClick={handleLogout} className="btn btn-primary">Logout</button></li></ul>}
        </div>
      </div>
    </nav>
  </div>
  )
}
