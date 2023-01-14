import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import { Title } from "./components/Title";
import { NoteList } from "./screens/NoteList";

function App() {
  return (
    <div className="App">
      <Container>
        <Title />
        <Routes>
          <Route path="/" element={<NoteList />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
