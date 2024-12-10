import styles from './Items.module.css'

const Names = ({foodItems}) => {
    
    const handleButtonClicked = (foodItems, event) => {
        // console.log(event)
        console.log(`${foodItems} being bought.`)
    }

    return <li className={`${styles['k-list']} list-group-item`}>{foodItems}
    <button className={styles.button} onClick={(event) => handleButtonClicked(foodItems, event)}>
        Buy
    </button>
    </li>
}

export default Names;

// ````