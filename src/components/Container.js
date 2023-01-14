import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 48px);
  max-width: 448px;
  max-width: 420px;
  height: calc(100% - 25%);
  padding: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffdf6;
  backdrop-filter: blur(10px);
  border-radius: 24px;
  transition: background-color 0.3s;
  box-shadow: 2px 2px 2px 2px gray;
`;
