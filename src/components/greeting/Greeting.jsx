import './Greeting.css';

/* eslint-disable react/prop-types */
function Greeting(props) {
  const { name, age } = props;

  return (
    <div className="card">
      <h1>Hello, {name}! Hoy cumples {age} años</h1>
      <img src="https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif" alt="birthday" />
    </div>
  )
}

export default Greeting;
