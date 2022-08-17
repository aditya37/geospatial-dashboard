import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import { Button, Form, FormSelect,Tab, Tabs } from "react-bootstrap";
import { MapContainer, TileLayer } from "react-leaflet";

const SearchLocation = () => {
  return (
    <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
      <Header page="Search Location" />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div
              className="row"
              style={{
                marginTop: "10px",
              }}
            >
              <MapContainer
                center={[-6.2140576, 106.8141081]}
                zoom={6}
                scrollWheelZoom={false}
                style={{
                  height: "86vh",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <div
                  className="card leaflet-right"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    padding: "10px",
                    zIndex: 400,
                  }}
                >
                  <div className="card-header">
                    <h6>Search Nearby Location</h6>
                  </div>
                  <Form onSubmit={(e) => console.log("submited")}>
                    <div
                      className="card-body"
                      style={{
                        overflowY: "scroll",
                        height: "262px",
                      }}
                    >
                      <div className="form-group col">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="number" placeholder="0.0111" />
                      </div>
                      <div className="form-group col">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="number" placeholder="0.0111" />
                      </div>
                      <div className="form-group col">
                        <Form.Label>Location Type</Form.Label>
                        <FormSelect>
                          <option key="1">Market</option>
                          <option key="2">Road</option>
                        </FormSelect>
                      </div>
                      <div className="form-group col">
                        <Form.Label>Radius (M)</Form.Label>
                        <FormSelect>
                          <option key="5">5</option>
                          <option key="10">10</option>
                          <option key="15">15</option>
                        </FormSelect>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="row">
                        <Button
                          onClick={(e) => {
                            console.log("run");
                          }}
                          type="submit"
                          className="col col-md-12"
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </MapContainer>
            </div>
          </div>
        </section>
      </div>
      <Sidebar path="search-location" />
    </div>
  );
};
export default SearchLocation;
