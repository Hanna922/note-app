import styled from "styled-components";

const TitTxt = styled.h1`
  font-weight: 500;
  margin-top: 0%;
  margin-block-end: 0%;
  font-family: "Jua", sans-serif;
`;

const SubTitTxt = styled.h2`
  font-weight: 400;
  font-size: 15px;
  font-family: "Jua", sans-serif;
`;

const Title = function () {
  return (
    <div style={{ margin: "10px 0 20px 0" }}>
      <TitTxt>note</TitTxt>
      <SubTitTxt>youth and romance, every moment.</SubTitTxt>
    </div>
  );
};

export { Title };
