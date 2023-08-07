import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className=" ">
      <BrowserRouter>
      <Navbar/>
      <div className='max-w-[1440px] p-5 my-0 mx-auto'>
        <Routes> 
          <Route path="/" element={<Home/>}/>
        </Routes>

      </div>

      </BrowserRouter>
    </div>
  )
}

export default App
