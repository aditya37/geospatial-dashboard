const CitySelectItem = (props) => {
  const datas = props.data || [];
  return (
    <>
      {datas.map((val, index) => {
        if (val.nama == "Kabupaten Simeulue") {
          return (
            <option key={val.id} value={val.id} selected={true}>
              {val.nama}
            </option>
          );
        } else {
          return (
            <option key={val.id} value={val.id}>
              {val.nama}
            </option>
          );
        }
      })}
    </>
  );
};
export default CitySelectItem;
