import JsonToForm from "json-reactform";

function Form ({ model, onSubmit }) {
  return (
    <div className="form_wrapper">
      <JsonToForm 
        model={model} 
        onSubmit={onSubmit} 
      />
    </div>
  )
}

export default Form;