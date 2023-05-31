import "./loading.css";

const Loading = () => {
  return (
    <div className="container" style={{ paddingTop: 200}}>
      <div className="row justify-content-center">
        {/* <div className="loader">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <span>Loading...</span>
        </div> */}
        <div class="loader"></div>
      </div>
    </div>
  );
};

export default Loading;
