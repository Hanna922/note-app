import styled from "styled-components";

const TitTxt = styled.h1`
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 0%;
  margin-block-end: 0%;
`;

const SubTitTxt = styled.h2`
  font-weight: 400;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
