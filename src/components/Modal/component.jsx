import { createPortal } from 'react-dom';
import { Button } from '../Button/component';
import styles from './styles.module.scss';


export const Modal = ({children, title, isOpen, setIsModalOpened}) => {
  return (
    <div>
      <Button onClick={() => setIsModalOpened(true)} text="Open form" size="md"/>
      {isOpen && createPortal(
        <div className={styles.modal}>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{children}</div>
        </div>,
        document.body
      )}
    </div>
  );
}
