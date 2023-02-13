import styled from "styled-components";

export const MainStyles = styled.main`
  width: 100%;
  font-family: "Inter", sans-serif;

  margin-top: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  .searchResultHeader {
    width: 100%;
    display: flex;
    flex-direction: row;

    h1 {
      display: flex;
      align-self: center;
      font-size: 1.1rem;
      font-weight: 700;
      margin-left: 20px;
      max-width: 100%;

      span {
        max-width: 100%;
        display: flex;
        align-self: end;
        font-size: 1rem;
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
  div {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .sectionShowCards {
      width: 100%;
      min-height: 400px;

      ul {
        display: flex;
        margin-left: 20px;
        margin-top: 20px;
        align-self: center;
        gap: 20px;
      }

      @media (max-width: 999px) {
        width: 100%;
        overflow-y: none;
        overflow-x: auto;
      }
    }
  }

  @media (min-width: 1000px) {
    .searchResultHeader {
      width: 800px;
      justify-content: space-evenly;
      align-self: flex-start;
      margin-bottom: 20px;
      h1 {
        margin-left: 0;
      }
    }
    .alignMain {
      width: 1350px;
      max-width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .sectionShowCards {
        overflow: none;
        width: 700px;
        margin-bottom: 50px;

        ul {
          margin: 0;
          width: 70%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          gap: 35px;
          max-width: 100%;
        }
      }
    }
  }

  @media (min-width: 1300px) {
    .alignMain {
      .sectionShowCards {
        width: 800px;

        min-width: 1px;

        ul {
          margin: 0;
          width: 80%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 20px;
          max-width: 100%;
        }
      }
    }
  }
`;
