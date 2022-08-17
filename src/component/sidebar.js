import { Link } from "react-router-dom";
const sidebar = (props) => {
  return (
    <>
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex" />
        <nav className="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item active">
              {props.path == "overview" ? (
                <Link to="/" class="nav-link active">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>Overview</p>
                </Link>
              ) : (
                <Link to="/" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>Overview</p>
                </Link>
              )}
            </li>
            <li class="nav-item">
              {props.path == "location" ? (
                <Link to="/location/" class="nav-link active">
                  <i class="nav-icon fas fa-globe"></i>
                  <p>Location</p>
                </Link>
              ) : (
                <Link to="/location/" class="nav-link">
                  <i class="nav-icon fas fa-globe"></i>
                  <p>Location</p>
                </Link>
              )}
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-globe"></i>
                <p>Location Type</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-map-marker-alt nav-icon"></i>
                <p>Search Location</p>
              </a>
            </li>
            <div
              className="border-bottom"
              style={{
                color: "#363740",
              }}
            />
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-microchip nav-icon"></i>
                <p>Devices</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-regular fa-clipboard nav-icon"></i>
                <p>Device Log</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-regular fa-wave-pulse nav-icon"></i>
                <p>Device Monitoring</p>
              </a>
            </li>
            <div
              className="border-bottom"
              style={{
                color: "#363740",
              }}
            />
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-globe"></i>
                <p>Geofencing</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-globe"></i>
                <p>Geo Tracking</p>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
export default sidebar;
