import styled from "styled-components";
import { flexCenter, flexCenterBetween } from "../style/flex";

const ButtonDiv = styled.div`
  ${flexCenterBetween}
`;

const Button = styled.button`
  ${flexCenter}
  height: 28px;
  padding: 0 16px;
  background-color: ${(props) => props.color || "gray"};
  // 이상하게 background-color는 props.background라 명시할 시 작동X
  color: ${(props) => props.letter || "black"};
  border-radius: 8px;
  cursor: pointer;
  border: none;
`;

export { Button, ButtonDiv };
