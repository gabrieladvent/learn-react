import { useId } from 'react'

function Input (props) {
  const { id = "input" } = props;
  const inputId = useId();


  return (
    <>
      <label htmlFor="">
        <span htmlFor={ inputId }> { id } </span>
        <input type="text" name="" id={ `${ inputId }-${ id }` } />
      </label>
      <p aria-details={ `${ inputId }-${ id }` }> 
        Name should contain at least one character
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <Input id="firstName" />
      <Input />
      <Input />
    </>
  )
}

export default App
