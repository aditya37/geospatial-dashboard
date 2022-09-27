const SelectItemLocation = (props) => {
  const datas = props.data || [];
  return (
    <>
      {datas.map((val, i) => {
        return (
          <option key={val.id} value={val.id}>
            {val.location_name}
          </option>
        );
      })}
    </>
  );
};
export default SelectItemLocation;
