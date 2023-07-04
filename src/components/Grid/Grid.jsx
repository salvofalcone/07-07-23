import "./index.scss";

const Grid = () => {
  return (
    <div className="Grid">
      <div className="row">
        <div className="firstBck col-1 col-xs-2 col-sm-2"> - </div>
        <div className="firstBck col-5 col-xs-10 col-sm-10"> - </div>
        <div className="firstBck col-6 col-xs-12 col-sm-12"> - </div>
      </div>

      <br />

      <div className="row">
        <div className="secondBck col-3 col-xs-12 col-sm-6"> - </div>
        <div className="secondBck col-3 col-xs-12 col-sm-6"> - </div>
        <div className="secondBck col-3 col-xs-12 col-sm-6"> - </div>
        <div className="secondBck col-3 col-xs-12 col-sm-6"> - </div>
      </div>

      <br />

      <div className="row">
        <div className="thirdBck col-2 col-sm-4 col-xs-8"> - </div>
        <div className="thirdBck col-3 col-sm-2 col-xs-4"> - </div>
        <div className="thirdBck col-5 col-sm-5 col-xs-3"> - </div>
        <div className="thirdBck col-2 col-sm-1 col-xs-9"> - </div>
      </div>
    </div>
  );
};

export default Grid;
