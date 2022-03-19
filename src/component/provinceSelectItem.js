const ProvinceSelectItem = (props) => {
  const datas = props.data || [];
  return (
    <>
      {datas.map((val, index) => {
        return (
          <option key={val.id} value={val.id}>
            {val.nama}
          </option>
        );
      })}
    </>
  );
};
export default ProvinceSelectItem;
