import UserList from '../UserList/UserList';
import './App.css'

function App() {
  const userList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  return (
    <>
      <UserList users={userList}/>
    </>
  )
}

export default App
