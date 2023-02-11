import styled from "styled-components";

export const HeaderStyles = styled.header`
  width: 100%;
  height: 139px;

  box-shadow: -1px 12px 18px -4px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: -1px 12px 18px -4px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: -1px 12px 18px -4px rgba(0, 0, 0, 0.09);

  display: flex;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 13.9px;
    height: 100%;
    max-width: 90%;
  }
  @media (min-width: 700px) {
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      gap: 13.9px;
      height: 100%;
      width: 1350px;
      max-width: 90%;
    }
  }
`;
