import styled from "styled-components";

export const SearchStyles = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;

  input {
    width: 29rem;
    max-width: 100%;
    height: 3.75rem;
    padding-left: 10px;
    position: relative;

    align-self: flex-start;

    background-color: rgba(255, 255, 255, 1);

    border: 2px solid rgba(224, 224, 224, 1);

    border-radius: 5px;
    outline-color: black;
  }

  button {
    position: absolute;
    top: 13px;
    right: 10px;
  }

  @media (min-width: 700px) {
    div {
      max-width: 80%;
      position: relative;
      display: flex;

      input {
        width: 18rem;
        max-width: 100%;
        height: 3.75rem;
        padding-left: 10px;

        background-color: rgba(255, 255, 255, 1);

        border: 2px solid rgba(224, 224, 224, 1);
        border-right: none;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
      }

      button {
        position: absolute;
        top: 13px;
        right: 10px;

        width: 6.688rem;
        height: 2.5rem;

        background-color: var(--brand-color);
        color: rgba(255, 255, 255, 1);

        border: none;
        border-radius: 8px;

        font-size: var(--body);
        font-weight: 500;

        cursor: pointer;
      }
    }
  }

  @media (min-width: 700px) {
    width: 20rem;
  }

  @media (min-width: 1000px) {
    button:hover {
      background-color: var(--brand-hover);
    }
  }
`;
