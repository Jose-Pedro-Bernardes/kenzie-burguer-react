import styled from "styled-components";

export const CardCartStyles = styled.li`
  width: 100%;
  height: 5rem;
  position: relative;

  display: flex;

  figure {
    width: 80px;
    height: 100%;
    margin-left: 10px;

    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div {
    width: 100px;
    align-self: center;
    margin-left: 20px;
    h2 {
      font-size: 0.7rem;
      font-weight: 700;
      line-height: 15px;
    }
    p {
      font-size: 0.6rem;
      font-weight: 400;
    }
  }

  button {
    background-color: transparent;
    border: none;

    color: var(--grey-2);
    font-size: 0.8rem;

    position: absolute;

    top: 30px;
    right: 10px;

    cursor: pointer;
  }

  @media (min-width: 370px) {
    div {
      width: 150px;
      h2 {
        font-size: 1rem;
        font-weight: 700;
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 500px) {
    div {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 1rem;
        font-weight: 700;
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
  }
`;
