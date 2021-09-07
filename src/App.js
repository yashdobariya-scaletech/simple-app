import './App.css';
import UserDetailList from './components/UserDetailList';
import UserInput from './components/UserInput';
import React, {useState} from 'react';

function App() {
  
  const [userDetailList, setuserDetailList] = useState([])

  const addUserHandle = (userName, userAge) => {
    setuserDetailList((prevUserList) => {
      return [...prevUserList, { name:userName, age:userAge,}]
    });
  }; 

  return (
    <div className="container">
      <UserInput onAddUser={addUserHandle} />
      <UserDetailList users={userDetailList} />
    </div>
  );
}

export default App;
