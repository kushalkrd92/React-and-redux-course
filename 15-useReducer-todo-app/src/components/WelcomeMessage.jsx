import { useContext } from 'react';
import styles from './WelcomeMessage.module.css'
import { TodoItemContext } from '../store/TodoItemContext';

const WelcomeMessage = () => {
    const {items} = useContext(TodoItemContext);
    return items.length === 0 && <h3 className={styles.message}>Enjoy your day.</h3>
}

export default WelcomeMessage;