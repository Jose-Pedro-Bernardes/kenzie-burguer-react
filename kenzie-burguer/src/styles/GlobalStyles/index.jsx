import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --brand-color: rgba(39, 174, 96, 1);
    --brand-hover: #38c673;
    
    --grey-1: rgba(51, 51, 51, 1);
    --grey-2: rgba(130, 130, 130, 1);
    --grey-3: rgba(189, 189, 189, 1);
    --grey-4: rgba(224, 224, 224, 1);

    --heading-3: 1.125rem;
    --heading-4: 0.875rem;
    --headline: 1rem;
    --body: 0.875rem;
    --caption: 0.75rem;


  }

  body {
    background: rgba(245, 245, 245, 1);
    font-family: 'Inter', sans-serif;
    width: 100vw;
  }

  
`;
