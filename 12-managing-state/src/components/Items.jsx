import styles from './Items.module.css'

const Items = ({foodItems, handleButtonClicked, bought}) => {

    return <li className={`${styles['k-list']} list-group-item ${bought && 'active'}`}>{foodItems}
    <button className={styles.button} onClick={handleButtonClicked}>
        Buy
    </button>
    </li>
}

export default Items;

// ````