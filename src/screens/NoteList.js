import { Button, ButtonDiv } from "../components/Button";
import { SearchDiv, SearchInput } from "../components/SearchInput";
import color from "../style/color";
import { useNavigate } from "react-router-dom";
import { NoteContent } from "../components/Note";
import { useState } from "react";
import styled from "styled-components";

const NoteScroll = styled.div`
  height: calc(100% - 180px);
  overflow-y: scroll;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NoteList = () => {
  const navigate = useNavigate();
  let getNoteList = localStorage.getItem("noteList");
  if (getNoteList === null) {
    getNoteList = [];
  } else {
    getNoteList = JSON.parse(getNoteList);
  }
  const [noteList, setNoteList] = useState(getNoteList);

  return (
    <>
      <SearchDiv>
        <SearchInput type="text" placeholder="Search.." />
      </SearchDiv>
      <NoteScroll>
        <NoteContent
          noteList={noteList}
        />
      </NoteScroll>
      <ButtonDiv>
        <Button
          onClick={() => {
            navigate("/create");
          }}
          color={color.aliceblue}
          letter={color.aliceblue_letter}
        >
          Create
        </Button>
      </ButtonDiv>
    </> // JSX expressions must have one parent element.
  );
};

export { NoteList };
