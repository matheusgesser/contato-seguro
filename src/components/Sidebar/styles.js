import { styled } from "styled-components";

export const Wrapper = styled.aside`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  user-select: none;
  text-align: center;
  & small {
    margin-top: auto;
    font-size: 0.7rem;
    & a {
      padding: 0;
      text-decoration: underline;
    }
  }
  @media (max-width: 800px) {
    position: absolute;
    inset: 0;
    z-index: 99;
    width: 80%;
    transform: translateX(-100%);
    border: none;
    border-right: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 0 10px 10px 0;
    transition: transform 300ms ease-out;
    &.active {
      transform: translateX(0);
    }
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 100;
  border: none;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  background-image: linear-gradient(
    194deg,
    rgb(18 129 209) 0%,
    rgb(0 31 105 / 79%) 100%
  );
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: opacity 200ms;
  & svg {
    font-size: 1.8rem;
    & path {
      fill: #fff;
    }
  }
  &.active {
    opacity: 0;
    pointer-events: none;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 100%;
  @media (max-width: 800px) {
    width: 70%;
  }
  filter: brightness(10);
`;

export const Links = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: none;
  & > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    &:last-of-type {
      border-bottom: none;
    }
    & svg {
      font-size: 1.2rem;
    }
    &:hover {
      background: #ffffff09;
    }
    &.active {
      font-weight: 600;
      background: #ffffff20;
    }
  }
`;
