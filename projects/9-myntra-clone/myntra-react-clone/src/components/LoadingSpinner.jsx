const LoadingSpinner = () => {
  return <div className="text-center spinner">
  <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
}

export default LoadingSpinner;