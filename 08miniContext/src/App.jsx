import UserContextProvider from './context/userContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Helloe Everyone</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
