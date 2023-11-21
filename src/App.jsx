import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Banner/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          {/* <Home /> */}
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
