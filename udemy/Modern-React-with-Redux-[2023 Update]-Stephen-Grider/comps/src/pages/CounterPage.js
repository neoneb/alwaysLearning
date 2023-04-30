import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === 'change-value-to-add') {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  return state;
};

function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: 'increment',
    });
  };

  const decrement = () => {
    //  setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: 'change-value-to-add',
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  setCount(count + valueToAdd);
    //  setValueToAdd(0);
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
