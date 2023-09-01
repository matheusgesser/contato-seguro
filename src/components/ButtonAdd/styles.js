import { styled } from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: clamp(1rem, 0.808rem + 0.769vw, 1.5rem);
  padding: 0.4rem 2rem;
  color: #ffffffee;
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(
    194deg,
    rgb(92 175 235) 0%,
    rgb(23 68 144) 180%
  );
  border-radius: 6px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: none;
  cursor: pointer;
  & svg {
    color: #fff;
    font-size: 1rem;
  }
  &:hover {
    color: #fff;
    filter: brightness(1.03);
  }
`;
