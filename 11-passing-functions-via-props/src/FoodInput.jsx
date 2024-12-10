import styles from './FoodInput.module.css'

const FoodInput = ({handleOnChange}) => {
    
    return <input type="text" placeholder='Enter food here' className={styles.text} onChange={handleOnChange}
    />
}

export default FoodInput;