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

const flexCenterBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // space-between vs space-evenly
`;

export { flexCenter, flexColumnCenter, flexCenterBetween };
