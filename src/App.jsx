import { BrowserRouter,Routes,Route} from 'react-router-dom'
import TestPage from './routes/TestPage'
import ResultPage from './routes/ResultPage'
import MainPage from './routes/MainPage'
import { useState } from 'react';

function App() {
  const [EI,setEI]=useState(0);
  const [SN,setSN]=useState(0);
  const [TF,setTF]=useState(0);
  const [JP,setJP]=useState(0);
  const [MBTI,setMBTI]=useState('');

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainPage 
            setEI={setEI}
            setJP={setJP}
            setSN={setSN}          
            setTF={setTF}
            />}/>
          <Route path='/testpage' element={<TestPage
          setEI={setEI}
          setJP={setJP}
          setSN={setSN}          
          setTF={setTF}
          />}/>
          <Route path='/resultpage' element={<ResultPage
          EI={EI}
          JP={JP}
          SN={SN}          
          TF={TF}
          setMBTI={setMBTI}
          MBTI={MBTI}
          />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
