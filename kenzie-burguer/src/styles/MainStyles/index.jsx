import styled from "styled-components";

export const MainStyles = styled.main`
  width: 100%;
  font-family: "Inter", sans-serif;

  margin-top: 40px;

  display: flex;
  justify-content: center;

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    section {
      width: 100%;
      height: 400px;
      overflow-y: none;
      overflow-x: auto;

      ul {
        display: flex;
        margin-left: 20px;
        margin-top: 20px;
        align-self: center;
        gap: 20px;
      }
    }
    section::-webkit-scrollbar {
      background-color: transparent;
    }
  }
`;
