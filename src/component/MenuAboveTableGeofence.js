import { FormSelect, Button, Modal } from "react-bootstrap";
const MenuAboveTable = (props) => {
  const { onChange, onClick } = props;
  const data = props.datas || [];
  return (
    <div className="form-inline border-bottom  border-dark">
      <div className="input-group mb-2 mr-sm-2">
        <Button
          className="btn btn-success"
          type="submit"
          style={{
            marginRight: "30px",
          }}
          onClick={onClick}
        >
          Add Geofence Area
        </Button>
      </div>
      <div className="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Geofence Type</div>
        </div>
        {/* geofence type */}
        <FormSelect onChange={onChange}>
          {data.map((v, i) => {
            return (
              <option key={v.id} value={v.type_name}>
                {v.type_name}
              </option>
            );
          })}
        </FormSelect>
      </div>
    </div>
  );
};
export default MenuAboveTable;
