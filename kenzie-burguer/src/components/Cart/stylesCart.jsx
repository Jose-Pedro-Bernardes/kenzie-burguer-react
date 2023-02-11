import styled from "styled-components";

export const CartStyles = styled.aside`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 35.25rem;
    height: 4.063rem;
    max-width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.125rem;
    font-weight: 700;

    color: var(--grey-4);
    background-color: var(--brand-color);

    border-radius: 5px 5px 0px 0px;
  }

  .emptyList {
    width: 35.25rem;
    height: 9.875rem;
    max-width: 80%;

    margin-bottom: 50px;

    border-radius: 0px 0px 5px 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #e5e5e5;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;

      h2 {
        font-size: 1.125rem;
        font-weight: 600;
      }
      p {
        font-size: 0.875rem;
        font-weight: 400;

        color: var(--grey-2);
      }
    }
  }
`;
