import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "./components/Container";
import { Title } from "./components/Title";
import { CreateNote } from "./pages/CreateNote";
import { NoteList } from "./pages/NoteList";
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <div className="App">
      <Container>
        <Title />
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateNote />}>
            <Route path=":paramsId" element={<CreateNote />} />
            {/* 중첩된 절대 하위 경로는 모든 상위 경로의 결합된 경로로 시작 */}
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
