// import Navbar from './Navbar'
import Signin from '../Signin'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import './App.css'

function App() {


  return (
    <>
      {/* <Navbar /> */}
     <BrowserRouter>
     <Routes>
    <Route path='/' element={<Signin/>}></Route>
    <Route path='/Home' element={ <Home/>}></Route>


     </Routes>
     </BrowserRouter>




     
      
    </>
  )
}

export default App
