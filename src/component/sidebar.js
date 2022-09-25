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
              {props.path == "location-type" ? (
                <Link to="/location/type/" class="nav-link active">
                  <i class="nav-icon fas fa-globe"></i>
                  <p>Location Type</p>
                </Link>
              ) : (
                <Link to="/location/type/" class="nav-link">
                  <i class="nav-icon fas fa-globe"></i>
                  <p>Location Type</p>
                </Link>
              )}
            </li>
            <li class="nav-item">
              {props.path == "search-location" ? (
                <Link to="/location/search/" class="nav-link active">
                  <i class="fas fa-map-marker-alt nav-icon"></i>
                  <p>Search Location</p>
                </Link>
              ) : (
                <Link to="/location/search/" class="nav-link">
                  <i class="fas fa-map-marker-alt nav-icon"></i>
                  <p>Search Location</p>
                </Link>
              )}
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
            <li className="nav-item">
              <a href="#" class="nav-link">
                <i className="nav-icon fas fa-globe"></i>
                <p>Geofencing</p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" class="nav-link">
                    <i class="fas fa-regular fa-ruler nav-icon"></i>
                    <p>Area</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" class="nav-link">
                    <i class="fas fa-regular fa-ruler nav-icon"></i>
                    <p>Realtime Chart</p>
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/geofence/type" class="nav-link">
                    <i class="fas fa-regular fa-ruler nav-icon"></i>
                    <p>Add Type</p>
                  </Link>
                </li>
                <li className="nav-item">
                  {props.path == "monitoring" ? (
                    <Link to="/geofence/monitoring" class="nav-link active">
                      <i class="fas fa-regular fa-chart-area nav-icon"></i>
                      <p>Monitoring</p>
                    </Link>
                  ) : (
                    <Link to="/geofence/monitoring" class="nav-link">
                      <i class="fas fa-regular fa-chart-area nav-icon"></i>
                      <p>Monitoring</p>
                    </Link>
                  )}
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-globe"></i>
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
