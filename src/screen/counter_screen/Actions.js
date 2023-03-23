
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/action/counter/CounterAction';

const dispatch = useDispatch();

const incrementHandler = () => {
    dispatch(increment())
}

export { incrementHandler }