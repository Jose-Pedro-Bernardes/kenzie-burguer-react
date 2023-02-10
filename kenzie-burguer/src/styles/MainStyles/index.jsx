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
        margin-left: 25px;
        margin-top: 20px;
        align-self: center;
        gap: 20px;

        li {
          min-width: 300px;
          height: 346px;

          display: flex;
          flex-direction: column;
          gap: 22px;

          border: 2px solid rgba(224, 224, 224, 1);
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
        }
      }
    }
  }

  @media (min-width: 900px) {
    li {
      transition: 0.5s;
    }
    li:hover {
      transform: scale(1.05);
    }

    button:hover {
      background-color: var(--brand-hover);
    }
  }
`;
