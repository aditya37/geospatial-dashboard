const ProvinceSelectItem = (props) => {
  const datas = props.data || [];
  return (
    <>
      {datas.map((val, index) => {
        if (val.nama == "Aceh") {
          return (
            <option key={val.id} value={val.id} defaultValue>
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
export default ProvinceSelectItem;
