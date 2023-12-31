import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            MiNi URL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/list">
                  List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
