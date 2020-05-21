import React from "react";
import'./MyInfo.scss'
import Radium from 'radium'

const MyInfo = props =>{
export default props => (
<div style={{
    boxShadow: '8px 8px 8px 0 rgba(0, 0, 0, 0.14)',
    borderRadius: '5px',
    display: 'inline-block',
    width: '30%',
    marginRight: '25px',
    border: '2px solid #ccc',
    height: '512px'
}}>
export default props => {
  const inputClasses = ['input']
    if(props.name !== ''){
  inputClasses.push('green')
    }else {
  inputClasses.push('red')
}
return(
  const style = {
    border: '2px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)'
':hover':{
    border: '3px solid #aaa',
    boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)', cursor: 'pointer'
}
}
  <div className='MyInfo' style={style}>
     <h1>Name: <strong>{props.name}</strong></h1>
     <p>Year born:{props.year}</p>
     <p>Specialization: {props.specialization}</p>
     <input type="text" onChange={props.onChangeName} value={props.name} className={inputClasses.join(' ')}
/>
     <button onClick={props.onChangeTitle}>Click</button>
   </div>
)
}
}
export default Radium(MyInfo)