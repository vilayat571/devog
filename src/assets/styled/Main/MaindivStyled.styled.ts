import styled from "styled-components";

export const MaindivStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RecomendedLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlogDiv = styled.div`
  font-size: 2.25rem;
  letter-spacing: 0.3px;
  @media (max-width: 1024px) {
    font-size: 1.85rem;
  }
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media (max-width: 300px) {
    font-size: 1.75rem;
  }
`;

export const BlogDivMain=styled.div`

`;

/* xl:mt-0 sm:mt-4 md:mt-4 lg:mt-0 flex xl:w-1/5 md:w-full
          sm:w-full lg:w-1/5 */
