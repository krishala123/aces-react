import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Edit from './pages/components/Edit';
import Blog from './pages/Blog';
import LearningUseState  from './pages/components/LearningUseState';
import Single from './pages/components/Single';
import Editage from './pages/components/Editage';
import Form from './pages/components/Form';


function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      {/* <Route path='/create' element={<Create/>}/> */}
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/Single/:id' element={<Single/>}/>
      <Route path='/editage/:id' element={<Editage/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/LearningUseState' element={<LearningUseState/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;