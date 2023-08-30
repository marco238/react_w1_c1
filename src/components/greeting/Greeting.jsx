import './Greeting.css';

/* eslint-disable react/prop-types */
function Greeting(props) {
  const { age, cb, name } = props;

  return (
    <div className="card">
      <h1>Hello, {name}! Hoy cumples {age} años</h1>
      <img src="https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif" alt="birthday" />
      <button type="button" onClick={() => cb(`Hola desde el componente hijo: ${name}`)}>Click me!</button>
    </div>
  )
}

export default Greeting;
