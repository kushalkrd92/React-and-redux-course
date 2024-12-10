import styles from './Names.module.css'

let Names = ({dragons}) => {
    
    // let dragons = props // props.dragons ` 

    return <li className={`${styles['k-list']} list-group-item`}>{dragons}</li>
}

export default Names;