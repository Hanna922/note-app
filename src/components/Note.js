import styled from "styled-components";
import { flexColumnCenter } from "../style/flex";
import { useNavigate } from "react-router-dom";

const Note = styled.div`
  ${flexColumnCenter}
  height: 60px;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => props.color || "#DAE9FF"};
  color: ${(props) => props.text_color || "black"};
  /* border: 1px solid gray; */
  border-radius: 8px;
  /* &:last-child {
    margin-bottom: 0;
  } */
  .noteTitle {
    margin-bottom: 0%;
    font-size: 20px;
    font-weight: 500;
    font-family: "Jua", sans-serif;
  }
  .noteContent {
    margin-top: 0%;
    font-size: 15px;
    font-weight: 100;
    font-family: "Jua", sans-serif;
  }
`;

const NoteContent = (props) => {
  const navigate = useNavigate();
  const noteList = props.noteList;
  if (localStorage.getItem("noteList") !== null) {
    return noteList.map((val, index) => {
      return (
        <Note
          onClick={() => {
            navigate("/create/" + noteList[index].id);
          }}
          key={index}
        >
          <h3 className="noteTitle">{noteList[index].title}</h3>
          <h4 className="noteContent">
            {noteList[index].body.length > 56
              ? `${noteList[index].body.slice(0, 56)}...`
              : noteList[index].body}
          </h4>
        </Note>
      );
    });
  }
};

export { NoteContent };
