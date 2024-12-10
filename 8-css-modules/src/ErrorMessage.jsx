import styles from './ErrorMessage.module.css'

let ErrorMessage = ({dragons}) => {

    return <>
        {dragons.length === 0 && <h3 className={styles['k-error']}>I don't remember any of the names.</h3> }
    </>
}

export default ErrorMessage;