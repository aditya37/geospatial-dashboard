const LocationTypeItems = (props) => {
  const datas = props.data.location_type || [];
  return (
    <>
      {datas.map((val, index) => {
        return (
          <option key={val.id} value={val.id}>
            {val.type}
          </option>
        );
      })}
    </>
  );
};
export default LocationTypeItems;

