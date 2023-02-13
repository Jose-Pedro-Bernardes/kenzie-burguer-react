import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --brand-color: rgba(39, 174, 96, 1);
    --brand-hover: #38c673;
    
    --grey-1: rgba(51, 51, 51, 1);
    --grey-2: rgba(130, 130, 130, 1);
    --grey-3: #c6c6c6a9;
    --grey-4: #f4f4f4;

    --heading-3: 1.125rem;
    --heading-4: 0.875rem;
    --headline: 1rem;
    --body: 0.875rem;
    --caption: 0.75rem;


  }

  body {
    background: rgba(245, 245, 245, 1);
    font-family: 'Inter', sans-serif;
    
  }

  
`;
