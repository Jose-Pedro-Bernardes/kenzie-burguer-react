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
    max-width: 100%;

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

        outline: none;
      }

      div {
        width: 5.25rem;
        height: 3.875rem;

        background-color: rgba(255, 255, 255, 1);

        border: 2px solid rgba(224, 224, 224, 1);
        border-left: none;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
      }

      button {
        position: absolute;
        top: 13px;
        right: 10px;
      }

      button:hover {
        background-color: var(--brand-hover);
      }
    }
  }
  @media (min-width: 700px) {
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      gap: 13.9px;
      height: 100%;
      width: 90%;
      max-width: 100%;

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

          outline: none;
        }

        div {
          width: 5.25rem;
          height: 3.875rem;

          background-color: rgba(255, 255, 255, 1);

          border: 2px solid rgba(224, 224, 224, 1);
          border-left: none;
          border-bottom-right-radius: 8px;
          border-top-right-radius: 8px;
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

        button:hover {
          background-color: var(--brand-hover);
        }
      }
    }
  }
`;
