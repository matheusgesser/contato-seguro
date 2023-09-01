import { styled } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
  font-size: 1.1rem;
  font-size: clamp(0.8rem, 0.685rem + 0.462vw, 1.1rem);
  color: #ffffffcc;
  & > * {
    height: 120%;
    font-size: 1.2rem;
    font-size: clamp(1rem, 0.923rem + 0.308vw, 1.2rem);
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: unset;
    align-items: start;
  }
`;

export const Search = styled.input`
  max-width: 100%;
  padding: 0 0.5rem;
  flex-grow: 9;
  color: #fff;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid #ffffff90;
  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
  &:focus {
    border-bottom: 1px solid #fff;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding-bottom: 0.1rem;
  }
`;

export const Select = styled.select`
  padding: 0 0.25rem;
  flex-grow: 1;
  color: #ffffffee;
  border-radius: 5px;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: "Poppins", sans-serif;
  user-select: all;
  &:hover {
    color: #fff;
    background: #ffffff10;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
    width: 50%;
  }
`;

export const Option = styled.option`
  height: 2rem;
  color: #111;
  &:checked {
    font-weight: 600;
  }
`;
