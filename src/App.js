import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Header from './components/Header'
import Login from './components/Login'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Header />
        <AppBody>
          <Sidebar>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/chat" element={<Chat />} />
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
