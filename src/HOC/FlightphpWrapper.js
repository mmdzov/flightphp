const FlightphpWrapper = (Wrapper) => (props) => {
  return (
    <div className='container col-md-10 Flightphp col-lg-11 col-sm-11 col-12'>
      <Wrapper />
    </div>
  );
};

export default FlightphpWrapper;
