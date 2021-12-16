import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Header from './components/Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Header />
        <AppBody>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Sidebar>
        </AppBody>
      

    </Router>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

export default App;
