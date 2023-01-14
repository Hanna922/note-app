import styled from "styled-components";
import { flexCenter, flexCenterEvenly } from "../style/flex";

const ButtonDiv = styled.div`
  ${flexCenterEvenly}
`;

const Button = styled.button`
  ${flexCenter}
  height: 32px;
  padding: 0 16px;
  background-color: ${(props) => props.color || "gray"};
  // 이상하게 background-color는 props.background라 명시할 시 작동X
  color: ${(props) => props.letter || "black"};
  border-radius: 8px;
  cursor: pointer;
  border: none;
`;

export { Button, ButtonDiv };
