import styled from "styled-components";

export const MainStyles = styled.main`
  width: 100%;
  font-family: "Inter", sans-serif;

  margin-top: 40px;

  display: flex;
  justify-content: center;

  div {
    max-width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .searchResultHeader {
      width: 100%;

      display: flex;
      flex-direction: row;

      h1 {
        display: flex;
        align-self: center;
        font-size: 1rem;
        font-weight: 700;
        margin-left: 20px;
        max-width: 100%;

        span {
          max-width: 100%;
          display: flex;
          align-self: end;
          font-size: 0.9rem;
          font-weight: 400;

          margin-left: 5px;

          color: var(--grey-2);
        }
      }

      .allProductsBtn {
        margin-left: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: cover;
      }
    }
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
