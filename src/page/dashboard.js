import Header from "../component/header.js";
import Sidebar from "../component/sidebar.js";
import Map from "../component/map.js";
import LocationItem from "../component/locationItem.js";
import dumyJson from "../dumy_json.js";

const Dashboard = (props) => {
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              {/* row counter start */}
              <div
                className="row"
                style={{
                  marginTop: 10,
                }}
              >
                <div class="col-md-4">
                  <div class="small-box bg-info">
                    <div class="inner">
                      <h3>150</h3>
                      <p>Tracking Active</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="small-box bg-success">
                    <div class="inner">
                      <h3>150</h3>
                      <p>Geofence Area</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="small-box bg-warning">
                    <div class="inner">
                      <h3>150</h3>
                      <p>Total Area (M)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* row counter end */}

              {/* row for registered location start*/}
              <div
                className="row"
                style={{
                  marginTop: 10,
                }}
              >
                <div className="col-md-8">
                  {/* card Location Polygon*/}
                  <div className="card">
                    {/* card header start*/}
                    <div className="card-header">
                      <h5>Location Polygon</h5>
                    </div>
                    {/* card header stop*/}
                    {/* card body start */}
                    <div className="card-body">
                      {/* custom map component */}
                      <Map height="40vh"/>
                    </div>
                    {/* card body stop */}
                  </div>
                </div>
                {/* registered location item start */}
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <h5>Location Item</h5>
                    </div>
                    <div className="card-body">
                      <LocationItem items={dumyJson} />
                    </div>
                  </div>
                </div>
                {/* registered location item end */}
              </div>
              {/* row for Location Polygon end*/}
            </div>
          </section>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;
