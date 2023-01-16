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
  &:last-child {
    margin-bottom: 0;
  }
  .noteTitle {
    margin-bottom: 0px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
  .noteContent {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    font-weight: 100;
    /* color: ${(props) => {
      return props.theme.subTextColor;
    }}; */
  }
`;

const NoteContent = (props) => {
  const navigate = useNavigate();
  const noteList = props.noteList;
  if (localStorage.getItem("noteList") !== null) {
    return noteList.map((val, index) => {
      return (
        <Note>
          {/* onClick={() => {navigate("/detail/" + noteList[index].id)}} */}
          <h3 className="noteTitle">{noteList[index].title}</h3>
          <h4 className="noteContent">Content</h4>
        </Note>
      );
    });
  }
};

export { NoteContent };
