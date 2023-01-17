import moment from "moment/moment";
import { useEffect, useState } from "react";
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
  const { paramsId } = useParams();
  // const id = moment().format("YYYY-MM-DD, hh:mm:ss");
  let getNoteList = localStorage.getItem("noteList");
  if (getNoteList === null) {
    getNoteList = [];
  } else {
    getNoteList = JSON.parse(getNoteList);
  }
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const currentNote = getNoteList.find((value) => value.id == paramsId);
  // value.id === paramsId 로 두면 undefined
  const index = getNoteList.findIndex((value) => value.id == paramsId);

  const getTitle = (title) => {
    const input = title.target.value;
    setNoteTitle(input);
  };

  const getContent = (content) => {
    const input = content.target.value;
    setNoteContent(input);
  };

  useEffect(() => {
    if (paramsId === undefined) {
      //undefined를 먼저 check 해야 create button click 시 정상 작동
      setNoteTitle("");
      setNoteContent("");
    } else {
      setNoteTitle(currentNote.title);
      setNoteContent(currentNote.body);
    }
  }, []);

  const createNote = () => {
    getNoteList.push({
      id: Date.now(),
      title: noteTitle,
      body: noteContent,
    });
    localStorage.setItem("noteList", JSON.stringify(getNoteList));
    navigate("/");
  };

  const editNote = () => {
    const inputTitle = document.querySelector("#note-title");
    const inputContent = document.querySelector("#note-content");
    getNoteList[index].title = inputTitle.value;
    getNoteList[index].body = inputContent.value;
    localStorage.setItem("noteList", JSON.stringify(getNoteList));
    navigate("/");
  };

  const deleteNote = () => {
    getNoteList.splice(index, 1);
    localStorage.setItem("noteList", JSON.stringify(getNoteList));
    navigate("/");
  };

  return (
    <>
      <NoteTitle
        id="note-title"
        type="text"
        placeholder="Create Note Title"
        onChange={getTitle}
        value={noteTitle}
      />
      <NoteText
        id="note-content"
        type="text"
        placeholder="Create Note Content"
        onChange={getContent}
        value={noteContent}
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
            deleteNote();
          }}
          style={{ marginLeft: "48%" }}
          color={color.tomato}
          letter={color.tomato_letter}
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            if (paramsId === undefined) {
              createNote();
            } else {
              editNote();
            }
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
