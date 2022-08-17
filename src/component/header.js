const header = (props) => {
  
  return (
    <>
      <nav
        className="main-header navbar navbar-expand"
        style={{
          backgroundColor: "#F7F8FC",
        }}
      >
        <h4
          className="navbar-brand"
          style={{
            marginLeft: "5px",
          }}
        >
          {props.page}
        </h4>
      </nav>
    </>
  );
};
export default header;
