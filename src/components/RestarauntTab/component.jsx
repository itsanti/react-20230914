
import { Button } from '../Button/component';

export const RestarauntTab = ({ onClick, isActive, text, className }) => {
  return (
    <Button
        text={text}
        isActive={isActive}
        size="lg"
        onClick={onClick}
        className={className}
    />
  );
};





