// counter.Js 

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./action";

function HookSelector() {

    const count = useSelector((state)=>state.count.value);

    const dispatch = useDispatch();

    function incrementValue(value){

    dispatch(increment(value))
    }

    function decrementValue(value){

        dispatch(decrement(value))
        }
    return (
       <div>
        <h2>HookSelector_Dynamic_Value</h2>
            <h3> {count}</h3>
            <button onClick={()=>incrementValue(5)}>Increment</button>
            <button onClick={()=>decrementValue(2)}>Decrement</button>
        </div>
    );
}

// const mapStateToProps =(state) => {
//     return {
//         count: state.value,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: (value) => dispatch(increment(value)),
//         decrement: (value) => dispatch(decrement(value)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default HookSelector ; 
