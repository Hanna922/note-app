import moment from "moment/moment";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonDiv } from "../components/Button";
import color from "./../style/color";

const NoteTitle = styled.input`
  width: 92%;
  height: 32px;
  padding: 0 16px;
  margin-bottom: 8px;
  background-color: ${(props) => props.back_color || "white"};
  color: ${(props) => props.title_color || "black"};
  font-size: 15px;
  border: 1px solid gray;
  border-radius: 8px;
  outline: none;
`;

const NoteText = styled.textarea`
  width: 92%;
  height: calc(100% - 210px);
  padding: 16px;
  background-color: ${(props) => props.back_color || "white"};
  color: ${(props) => props.text_color || "black"};
  font-size: 15px;
  border-radius: 8px;
  outline: none;
`;

const CreateNote = () => {
  const navigate = useNavigate();
  // const id = moment().format("YYYY-MM-DD, hh:mm:ss");
  let getNoteList = localStorage.getItem("noteList");
  if (getNoteList === null) {
    getNoteList = [];
  } else {
    getNoteList = JSON.parse(getNoteList);
  }
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const getTitle = (title) => {
    const input = title.target.value;
    setNoteTitle(input);
    console.log(noteTitle);
  };

  const getContent = (content) => {
    const input = content.target.value;
    setNoteContent(input);
  };

  const createNote = () => {
    getNoteList.push({
      id: Date.now(),
      title: noteTitle,
      body: noteContent,
    });
    localStorage.setItem("noteList", JSON.stringify(getNoteList));
    navigate("/");
  };

  return (
    <>
      <NoteTitle
        type="text"
        placeholder="Create Note Title"
        onChange={getTitle}
      />
      <NoteText
        type="text"
        placeholder="Create Note Content"
        onChange={getContent}
      />
      <ButtonDiv style={{ marginTop: "8px" }}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          color={color.tomato}
          letter={color.tomato_letter}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            createNote();
          }}
          color={color.aliceblue}
          letter={color.aliceblue_letter}
        >
          Create
        </Button>
      </ButtonDiv>
    </>
  );
};

export { CreateNote };
