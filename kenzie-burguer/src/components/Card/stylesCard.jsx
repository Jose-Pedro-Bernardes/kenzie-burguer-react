import styled from "styled-components";

export const CardStyles = styled.li`
  min-width: 250px;
  height: 346px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 22px;

  border: 2px solid #c8c8c8;
  border-radius: 5px;

  figure {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;

    object-fit: cover;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  div {
    margin-left: 8px;
    width: 200px;

    h2 {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 12px;
      color: var(--grey-2);
    }

    h3 {
      font-size: 14px;
      color: var(--brand-color);
    }
  }
  button {
    margin-left: 15px;
  }

  @media (min-width: 1000px) {
    transition: 0.5s;

    :hover {
      transform: scale(1.05);
    }

    button:hover {
      background-color: var(--brand-hover);
    }
  }
`;
