import { styled } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-size: clamp(1.3rem, 0.231rem + 3.077vw, 2rem);
  `

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-size: clamp(0.9rem, 0.708rem + 0.769vw, 1.4rem);
  `

export const Description = styled.p`
  font-size: 1.1rem;
  font-size: clamp(0.8rem, 0.646rem + 0.615vw, 1.2rem);
  color: #ffffffee;
`