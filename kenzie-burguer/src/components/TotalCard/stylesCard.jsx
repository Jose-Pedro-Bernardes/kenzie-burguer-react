import styled from "styled-components";

export const TotalCardStyles = styled.div`
  width: 90%;

  margin-bottom: 30px;
  padding: 25px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #acacac;
  border-radius: 0 0 5px 5px;

  background-color: #ebebeb;

  .text-align {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;

    h3 {
      font-size: 14px;
      font-weight: 700;
    }
    p {
      font-size: 14px;
      font-weight: 400;

      color: var(--grey-2);
    }
  }

  button {
    width: 60%;
    background-color: #aaaaaa;
    color: #e1e1e1;
    font-weight: 700;
  }

  @media (min-width: 627px) {
    width: 35.25rem;
  }

  @media (min-width: 1000px) {
    button:hover {
      background-color: #b2b1b1;
    }
  }
`;
