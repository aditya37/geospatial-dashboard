import { Link} from "react-router-dom";
const sidebar = () => {
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
              <a href="#" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            {/* Location page start*/}
            <li class="nav-item">
              {/* toggle menu */}
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-globe"></i>
                <p>
                  Location
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to="/location/add" class="nav-link">
                    <i class="far fa-building nav-icon"></i>
                    <p>Add Location</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <a href="pages/layout/top-nav.html" class="nav-link">
                    <i class="far fa-building nav-icon"></i>
                    <p>Get Location</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/layout/top-nav.html" class="nav-link">
                    <i class="fas fa-map-marker-alt nav-icon"></i>
                    <p>Nearby Location</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/layout/top-nav.html" class="nav-link">
                    <i class="fas fa-location-arrow nav-icon"></i>
                    <p>Direction or Route</p>
                  </a>
                </li>
              </ul>
            </li>
            {/* Location page end*/}
          </ul>
        </nav>
      </aside>
    </>
  );
};
export default sidebar;
