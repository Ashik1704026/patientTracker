import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import logimg from "../../assets/book.jpg";
import "./doctorLogin.css";

export default function Doctorlogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  //for redirect
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5001/api/auth/doctor/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.token);
      history("/doctor", { state: { data: json } });
      // document.location.reload();
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Topbar />
      <body className="bg_img_log opacity-75">
        <div className="container doclogform">
          <div
            class="card card-log"
            style={{
              width: "50rem",
              height: "350px",
              // width: "10%",
              backgroundColor: "rgba(245, 245, 245, 0.4)",
            }}
          >
            <div class="card-body">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="card-img">
                    <img
                      src={logimg}
                      className=" img-fluid"
                      style={{ height: "315px" }}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-md-6  col-lg-6 ">
                  <div className="container mt-5">
                  <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          value={credentials.email}
                          onChange={onChange}
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          value={credentials.password}
                          onChange={onChange}
                          name="password"
                          type="password"
                          className="form-control"
                          id="password"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary btn-block">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container  doclogform" style={{ marginTop: "10%" }}>
          <div
            className="carddoc2 card d-flex"
            style={{
              height: "350px",
              // width: "10%",
              backgroundColor: "rgba(245, 245, 245, 0.4)", 
              border: "1px solid #555",
              boxShadow: "2px 2px 2px 2px black",
            }}
          >
            <div className="row row1">
              <div className="col-md-6 d-none d-lg-block">
                <img
                  src={logimg}
                  className=" img-fluid card-img d-none d-lg-block "
                  style={{
                    height: "350px",
                   
                  }}
                  alt="..."
                />
              </div>
              <div className="col-md-6  ">
                <div className="container doclogform">
                <form className="my-5" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      value={credentials.email}
                      onChange={onChange}
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      value={credentials.password}
                      onChange={onChange}
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Footer />
      </body>
    </div>
  );
}
