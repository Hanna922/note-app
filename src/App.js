import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "./components/Container";
import { Title } from "./components/Title";
import { CreateNote } from "./screens/CreateNote";
import { NoteList } from "./screens/NoteList";
import { Button } from "./components/Button";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Container>
        <Title />
        <Routes>
          <Route path="/" element={<NoteList />}></Route>
          <Route path="/create" element={<CreateNote />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
