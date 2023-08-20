// counter.Js 

import { useSelector, useDispatch } from "react-redux";

import { decrement, increment } from "./Daction";

function DynamicCounter() {

    const count = useSelector((state)=>state.dynamicValue.value);

    const dispatch = useDispatch();

    function incrementValue(value){

    dispatch(increment(value))
    }

    function decrementValue(value){

        dispatch(decrement(value))
        }
    return (
       <div>
        <h2>Dynamic_Value</h2>
            <h3> {count}</h3>
            <button onClick={()=>incrementValue(34)}>Increment</button>
            <button onClick={()=>decrementValue(4)}>Decrement</button>
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

export default DynamicCounter ; 
