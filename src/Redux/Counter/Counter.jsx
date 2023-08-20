// counter.Js 
import { connect } from "react-redux";
import { decrement, increment } from "./action";

function Counter({ count, increment, decrement }) {
    return (
        <div>
            <h3> {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

const mapStateToProps =(state) => {
    return {
        count: state.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
