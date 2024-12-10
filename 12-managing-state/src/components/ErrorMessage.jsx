import styles from './ErrorMessage.module.css'

let ErrorMessage = ({foodItems}) => {

    return <>
        {foodItems.length === 0 && <h3 className={styles['k-error']}>I am still hungry.</h3> }
    </>
}

export default ErrorMessage;
