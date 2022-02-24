import JsonToForm from "json-reactform";
import Header from "components/Header";
import Wrapper from "components/Wrapper";

function Form ({ model, onSubmit }) {
  return (
    <>
      <Header />
      <div className="form_wrapper">
        <JsonToForm 
          model={model} 
          onSubmit={onSubmit} 
        />
      </div>
    </>
  )
}

export default Form;