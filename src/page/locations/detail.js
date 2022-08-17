import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import LocationWidget from "../../component/locationWidget";
import TabLocationDetail from "../../component/tabLocationDetail"
import { useParams } from "react-router-dom";
const LocationDetail = () => {
  let { id } = useParams();
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header page="Location Detail" />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div
                className="row"
                style={{
                  marginTop: 10,
                }}
              >
                <div className="col-md-4">
                  <LocationWidget />
                </div>
                <div className="col-md-8">
                  <TabLocationDetail/>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Sidebar path="location" />
      </div>
    </>
  );
};
export default LocationDetail;
