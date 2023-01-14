import { css } from "styled-components";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const flexCenterEvenly = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export { flexCenter, flexColumnCenter, flexCenterEvenly };
