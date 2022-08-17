import { Tab, Tabs } from "react-bootstrap";
import TabItemBasicInfoLocation from "../component/tabItemBasicinfoLocation";
import TabItemNearbyLocation from "../component/tabItemNearbyLocation";
import Map from "../component/map"
const TabLocationDetail = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Tabs className="mb-3">
            <Tab eventKey="basic_info" title="Basic Info">
              <TabItemBasicInfoLocation />
            </Tab>
            <Tab eventKey="map" title="Map">
              <Map height="40vh" />
            </Tab>
            <Tab eventKey="nearby_location" title="Nearby Location">
              <TabItemNearbyLocation />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default TabLocationDetail;
