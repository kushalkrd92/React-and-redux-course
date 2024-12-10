import styles from './Items.module.css'

const Items = ({foodItems, handleButtonClicked}) => {

    return <li className={`${styles['k-list']} list-group-item`}>{foodItems}
    <button className={styles.button} onClick={handleButtonClicked}>
        Buy
    </button>
    </li>
}

export default Items;

// ````