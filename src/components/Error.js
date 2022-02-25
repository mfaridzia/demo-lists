function Error ({ message }) {
  return (
    <div className="error_wrapper">
      <h2 className="error_message"> 
        Ooops {message} 
      </h2>
    </div>
  )
}

export default Error;