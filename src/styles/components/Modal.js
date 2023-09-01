import { styled } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #00000040;
  backdrop-filter: blur(12px);
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.section`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 6px;
  color: #fff;
  background: #ffffff30;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  & form {
    display: flex;
    flex-direction: column;
    & input,
    select {
      font-size: 1rem;
      height: 2rem;
      padding: 0 0.5rem;
      border: none;
      border-radius: 4px;
      &:focus {
        outline: none;
      }
    }
    & label {
      margin-top: 0.5rem;
      &:first-of-type {
        margin-top: 0;
      }
    }
  }
  & section.items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.15rem;
    margin-bottom: 0.3rem;
  }
  & section.buttons {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
    margin-top: 0.5rem;
    & input[type="submit"] {
      height: unset;
      width: 6rem;
      font-size: 1rem;
      padding: 0.5rem 0;
      background: linear-gradient(
        194deg,
        rgb(92 175 235) 0%,
        rgb(23 68 144) 180%
      );
      color: #fff;
      font-family: "Poppins", sans-serif;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      &:hover {
        filter: brightness(1.05);
      }
    }
  }
`;

export const Title = styled.h4`
  font-size: 1.3rem;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  background: #fff;
  color: #111;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  font-size: 1rem;
  width: 6rem;
  padding: 0.5rem 0;
  color: #fff;
  font-family: "Poppins", sans-serif;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(1.05);
  }
  &.cancel {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.3);
    &:hover {
      background: #ffffff08;
    }
  }
`;
