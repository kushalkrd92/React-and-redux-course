import Items from "./Items"
import styles from "./FoodItems.module.css"

let FoodItems = ({foodItems, handleButtonClicked}) => {

    return <>
        <ul className={`${styles['k-list-group']} list-group`}>
        {foodItems.map((foodItems) => (
        <Items key={foodItems} foodItems={foodItems} handleButtonClicked={handleButtonClicked}></Items>
        ))}
      </ul>
    </>
}

export default FoodItems;