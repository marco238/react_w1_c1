import Greeting from '../greeting/Greeting';
import './GreetingList.css';

function GreetingList() {
  const users = [
    { name: 'Jorge', age: 25 },
    { name: 'Luis', age: 30 },
    { name: 'María', age: 20 },
  ]; 

  const hendleClick = (word) => {
    console.log(word);
  }

  return (
    <div className="list">
      {users.map((user) => (
        <Greeting name={user.name} age={user.age} cb={hendleClick} key={user.name} />
      ))}
    </div>
  );
}

export default GreetingList;
