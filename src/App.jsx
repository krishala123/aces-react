import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Edit from './pages/components/Edit';
import Blog from './pages/Blog';
import LearningUseState  from './Pages/components/Learningusestate';
import Single from './pages/components/Single';
import Editage from './pages/components/Editage';
import Form from './Pages/components/Form';


function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home/>}/>
      <Route path="!" element={<Blog />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path="@" element={<Create />} />
      <Route path='/create' element={<Create/>}/>
      <Route path="#" element={<Edit />} />
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