let ErrorMessage = ({dragons}) => {

    return <>
        {dragons.length === 0 && <h3>I am still hungry.</h3> }
    </>
}

export default ErrorMessage;