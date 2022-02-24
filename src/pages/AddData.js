import Form from "components/Form";
import addSchema from "schema/add"; 
import useSize from "hooks/useSize";
import useArea from "hooks/useArea";

function AddData () {
  const { data: size, isLoading: isLoadingSize } = useSize();
  const { data: area, isLoading: isLoadingArea } = useArea();

  if (isLoadingSize && isLoadingArea) return "Loading....";

  return (
    <div className="form_wrapper">
      {/* <Form 
        model={addSchema()}
      /> */}
    </div>
  )
}

export default AddData;