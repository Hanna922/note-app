import { Button, ButtonDiv } from "../components/Button";
import { SearchDiv, SearchInput } from "../components/SearchInput";
import color from "../style/color";
import { useNavigate } from 'react-router-dom';
import { NoteContent } from "../components/Note";

const NoteList = function () {
  const navigate = useNavigate();
  return (
    <>
      <SearchDiv>
        <SearchInput type="text" placeholder="Search.." />
      </SearchDiv>
      <NoteContent>

      </NoteContent>
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
