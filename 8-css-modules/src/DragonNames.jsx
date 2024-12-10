import Names from "./Names"
import styles from "./DragonNames.module.css"

let DragonNames = ({dragons}) => {

    return <>
        <ul className={`${styles['k-list-group']} list-group`}>
        {dragons.map((dragons) => (
          <Names key={dragons} dragons={dragons}></Names>
        ))}
      </ul>
    </>
}

export default DragonNames;