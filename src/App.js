import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "./components/Container";
import { Title } from "./components/Title";
import { CreateNote } from "./screens/CreateNote";
import { NoteList } from "./screens/NoteList";

function App() {
  return (
    <div className="App">
      <Container>
        <Title />
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/create" element={<CreateNote />}>
            <Route path=":paramsId" element={<CreateNote />} />
            {/* 중첩된 절대 하위 경로는 모든 상위 경로의 결합된 경로로 시작 */}
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
