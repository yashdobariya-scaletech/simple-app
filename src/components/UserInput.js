import React, {useState} from "react";
import ErrorModel from "./ErrorModel";
import "./UserInput.css";

export default function UserInput(props) {
  const [enterUsername, setenterUsername] = useState('')
  const [enterAge, setenterAge] = useState('')
  const [error, setError] = useState('')

  const submitHandle = (event) =>{
    event.preventDefault();
    if(enterUsername.trim().length === 0 || enterAge.trim().length === 0){
      setError({
        title:"Invalid input",
        message:"please enter a valid name and age"
      })
    }
    if(+enterAge < 5 ){
      setError({
        title:"Invalid input",
        message:"please enter a valid age"
      })
    }
    props.onAddUser(enterUsername, enterAge);

    setenterUsername('');
    setenterAge('');
  }

  const usernameChangeHandle = (event) => {
    setenterUsername(event.target.value);
  }

  const ageChangeHandle = (event) => {
    setenterAge(event.target.value);
  }
  
  const errorChangeHandle = () => {
    setError(null)
  }


  return (
    <div className="user">
      { error && <ErrorModel title={error.title} onConfirm={errorChangeHandle} message={error.message} /> }
      <form onSubmit={submitHandle}>
        <div className="user-input__control">
          <label>Name:</label>
          <input type="text" value={enterUsername} onChange={usernameChangeHandle}/>
        </div>
        <div className="user-input__control">
          <label>Age:</label>
          <input type="number" value={enterAge} onChange={ageChangeHandle}/>
        </div>
        <div className="action__control">
          <button type="submit"> Add User</button>
        </div>
      </form>
    </div>
  );
}
