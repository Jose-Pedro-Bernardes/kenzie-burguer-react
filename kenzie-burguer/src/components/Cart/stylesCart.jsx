import styled from "styled-components";

export const CartStyles = styled.aside`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 35.25rem;
    height: 4.063rem;
    max-width: 90%;

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
    max-width: 90%;

    margin-bottom: 30px;

    border-radius: 0px 0px 5px 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #e5e5e5;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;

      gap: 10px;

      h2 {
        font-size: 1.125rem;
        font-weight: 600;
        max-width: 100%;
      }
      p {
        font-size: 0.875rem;
        font-weight: 400;

        color: var(--grey-2);
        max-width: 100%;
      }
    }
  }

  .productList {
    width: 100%;
    width: 35.25rem;
    max-width: 90%;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;

    gap: 28px;
    padding: 25px 0;

    border-radius: 5px 5px 0px 0px;

    background-color: #ebebeb;
  }
`;
