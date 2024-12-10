import Names from "./Items"
import styles from "./FoodItems.module.css"

let DragonNames = ({foodItems}) => {

    return <>
        <ul className={`${styles['k-list-group']} list-group`}>
        {foodItems.map((foodItems) => (
          <Names key={foodItems} foodItems={foodItems}></Names>
        ))}
      </ul>
    </>
}

export default DragonNames;