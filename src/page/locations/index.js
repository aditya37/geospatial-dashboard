import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const GetLocations = () => {
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header page="Location" />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              {/* Row start */}
              <div
                className="row"
                style={{
                  marginTop: 10,
                }}
              >
                <div className="col-md-12">
                  <div className="card">
                    {/* card header start */}
                    <div className="card-header">
                      <div className="d-flex justify-content-between">
                        <h3
                          className="card-title"
                          style={{
                            marginTop: 10,
                          }}
                        >
                          Registered Location
                        </h3>
                        <Link className="btn btn-primary" to="/location/add">
                          Add Location
                        </Link>
                      </div>
                    </div>
                    {/* card header stop */}
                    <div className="card-body">
                      <Table className="table ">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Location Name</th>
                            <th>Province Name</th>
                            <th>City Name</th>
                            <th>Type</th>
                            <th>With Goefencing</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.</td>
                            <td>Pasar Dander</td>
                            <td>Jawa Timur</td>
                            <td>Bojonegoro</td>
                            <td>Market</td>
                            <td>True</td>
                            <td className="text-right py-0 align-middle">
                              <div className="btn-group btn-group-md">
                                <Link
                                  to="/location/1/lat/124.00/long/-122.222"
                                  className="btn btn-primary"
                                  style={{
                                    marginRight: "10px",
                                  }}
                                >
                                  <i class="fas fa-eye"></i>
                                </Link>
                                <Link to="/location/edit/1" className="btn btn-info">
                                  <i className="fas fa-edit"></i>
                                </Link>
                                <Link
                                  to="/"
                                  className="btn btn-danger"
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i class="fas fa-trash"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>1.</td>
                            <td>Pasar Dander</td>
                            <td>Jawa Timur</td>
                            <td>Bojonegoro</td>
                            <td>Market</td>
                            <td>True</td>
                            <td className="text-right py-0 align-middle">
                              <div className="btn-group btn-group-md">
                                <Link
                                  to="/location/1/lat/124.00/long/-122.222"
                                  className="btn btn-primary"
                                  style={{
                                    marginRight: "10px",
                                  }}
                                >
                                  <i class="fas fa-eye"></i>
                                </Link>
                                <Link to="/" className="btn btn-info">
                                  <i className="fas fa-edit"></i>
                                </Link>
                                <Link
                                  to="/"
                                  className="btn btn-danger"
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i class="fas fa-trash"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row end */}
            </div>
          </section>
          <Sidebar path="location" />
        </div>
      </div>
    </>
  );
};
export default GetLocations;
