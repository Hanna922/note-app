import { Button, ButtonDiv } from "../components/Button";
import { SearchDiv, SearchInput } from "../components/SearchInput";
import color from "../style/color";

const NoteList = function () {
  return (
    <>
      <SearchDiv>
        <SearchInput type="text" placeholder="Search.." />
      </SearchDiv>
      <ButtonDiv>
        <Button color={color.aliceblue} letter={color.aliceblue_letter}>
          Create
        </Button>
      </ButtonDiv>
    </> // JSX expressions must have one parent element.
  );
};

export { NoteList };
