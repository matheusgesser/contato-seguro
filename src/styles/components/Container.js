import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
  &.home {
    gap: 0.75rem;
  }
  & section.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 800px) {
    padding: 2rem 1rem;
  }
`;
