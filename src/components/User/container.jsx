import {useSelector} from 'react-redux';
import { User } from './component';
import {selectUserById} from '../../redux/entities/user/selectors';

export const UserContainer = ({id}) => {
    const user = useSelector((state) => selectUserById(state, id));

    return <User userId={user}/>;
};