import React, {useState, useRef} from "react";
import ErrorModel from "./ErrorModel";
import "./UserInput.css";

export default function UserInput(props) {

  const usernameRef = useRef()
  const ageRef = useRef()

  const [error, setError] = useState('')

  const submitHandle = (event) =>{
    event.preventDefault();

    const enterName = usernameRef.current.value;
    const enterUserAge = ageRef.current.value;


    if(enterName.trim().length === 0 || enterUserAge.trim().length === 0){
      setError({
        title:"Invalid input",
        message:"please enter a valid name and age"
      })
    }
    if(+enterUserAge < 5 ){
      setError({
        title:"Invalid input",
        message:"please enter a valid age"
      })
    }

    props.onAddUser(enterName, enterUserAge);
    usernameRef.current.value = "";
    ageRef.current.value = "";
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
          <input type="text" ref={usernameRef} />
        </div>
        <div className="user-input__control">
          <label>Age:</label>
          <input type="number" ref={ageRef} />
        </div>
        <div className="action__control">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
}
