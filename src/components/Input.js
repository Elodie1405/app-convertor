function Input(props) {

    function handleChange(e) {
        props.onWeightChange(e.target.value)
    }
    //
return (
<div>
<label> Enter weight in {props.unit} </label>
<input onChange ={ handleChange } value={props.weight} type='text' placeholder={`Enter a weight in ${props.unit} ` } />
</div>
)
}
export default Input