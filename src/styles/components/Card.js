import { styled } from "styled-components";

export const Card = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  max-width: 22rem;
  padding: 0.75rem 1rem;
  border: 1px solid #ffffff60;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  & div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  & b {
    font-size: clamp(1rem, 0.429rem + 1.524vw, 1.8rem);
  }
  & p {
    font-size: clamp(0.7rem, 0.486rem + 0.571vw, 1rem);
    color: #ffffffdd;
  }
  & svg {
    width: clamp(2rem, 0.571rem + 3.81vw, 4rem);
    height: clamp(2rem, 0.571rem + 3.81vw, 4rem);
    background: #ffffff50;
    border-radius: 50%;
  }
  &:hover {
    background: #ffffff20;
  }
`