const LocationTypeItems = (props) => {
  const datas = props.data.location_type || [];
  return (
    <>
      {datas.map((val, index) => {
        if (val.type == "ROAD") {
          return (
            <option key={val.id} value={val.id} selected={true}>
              {val.type}
            </option>
          );
        } else {
          return (
            <option key={val.id} value={val.id}>
              {val.type}
            </option>
          );
        }
      })}
    </>
  );
};
export default LocationTypeItems;
