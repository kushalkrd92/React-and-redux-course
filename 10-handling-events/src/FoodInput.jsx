import styles from './FoodInput.module.css'

const FoodInput = () => {

    const handleOnChange = (event) => {
        console.log(event.target.value)
    }
    
    return <input type="text" placeholder='Enter food here' className={styles.text} onChange={handleOnChange}
    />
}

export default FoodInput;