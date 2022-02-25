import { Spinner } from "react-bootstrap";

function SpinnerLoading () {
  return (
    <div className="spinner_loading">  
      <Spinner animation="grow" variant="success" />
    </div>
  )
}

export default SpinnerLoading;