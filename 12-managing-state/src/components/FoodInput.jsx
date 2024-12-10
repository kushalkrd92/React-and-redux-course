import styles from './FoodInput.module.css'

const FoodInput = ({handleOnKeyDown, handleOnChange}) => {
    
    return <input type="text" placeholder='Enter food here' className={styles.text} 
    onKeyDown={handleOnKeyDown} onChange={handleOnChange}
    />
}

export default FoodInput;