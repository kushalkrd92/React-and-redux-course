import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    dispatch({type: 'ADDITION', payload: {
        num: inputElement.current.value
    }})
    inputElement.current.value = ''
  }

  const handleSubtraction = () => {
    dispatch({type: 'SUBTRACTION', payload: {
        num: inputElement.current.value
    }})
    inputElement.current.value = ''
  }

  const handlePrivacy = () => {
    dispatch({type: 'PRIVACY_TOGGLE'})
  }

  return ( <>
    <div className="gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary controls"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleDecrement}
      >
        -1
      </button>
      <button type="button" class="btn btn-warning controls" onClick={handlePrivacy}>Privacy Toggle</button>
    </div>
    <div className="gap-2 d-sm-flex justify-content-sm-center">
        <input type="text" placeholder="Enter number" className="input" ref={inputElement}
        />
        <button type="button" className="btn btn-info controls" onClick={handleAddition}>
          Add
        </button>
        <button type="button" className="btn btn-danger controls" onClick={handleSubtraction}>
          Subtract
        </button>
    </div>
    </>
  );
};

export default Controls;
