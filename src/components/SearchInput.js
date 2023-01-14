import styled from "styled-components";
import { flexCenter } from "../style/flex";

const SearchDiv = styled.div`
  ${flexCenter}
`;

const SearchInput = styled.input`
  width: calc(100% - 60px);
  height: 32px;
  padding: 0 16px;
  color: black;
  background-color: white;
  border-radius: 8px;
  border: 1px solid gray;
  outline: none;
`;

export { SearchDiv, SearchInput };
