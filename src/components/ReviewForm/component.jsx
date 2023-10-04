import { useReducer, useContext } from "react";
import { UserContext } from "../../contexts/User";
import styles from './styles.module.scss';
import { Button } from '../Button/component';

const DEFAULT_VALUE = {
  user: "Anonymous",
  text: "Input review...",
  rating: 0,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const ReviewForm = ({type, onCancel, onSave}) => {
  const { user } = useContext(UserContext);
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  DEFAULT_VALUE['user'] = user;

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <strong>Name:</strong>
        <input value={formValue.user.name} onChange={(event) => {
            dispatch({ type: "setUser", payload: event.target.value });
        }} />
      </div>
      <div className={styles.row}>
        <strong>Text:</strong>
        <textarea
          rows='8'
          placeholder={formValue.text}
          onChange={(event) => {
            dispatch({ type: "setText", payload: event.target.value });
          }}
        />
      </div>
      <div className={styles.row}>
        <strong>Rating:</strong>
        <input
          type="number"
          value={formValue.rating}
          min="0" max="5" step="1"
          onChange={(event) => {
            dispatch({ type: "setRating", payload: event.target.value });
          }}
        />
      </div>
      <div className={type === 'in-modal' && styles['in-modal']}>
        <Button onClick={() => onCancel(false)} text="Cancel" size="md"/>
        <Button onClick={() => onSave(false)} text="Save" size="md"/>
      </div>
    </div>
  );
};