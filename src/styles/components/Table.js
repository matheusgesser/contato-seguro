import { styled } from "styled-components";

export const Table = styled.table`
  border-radius: 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  & thead {
    user-select: none;
    cursor: pointer;
  }

  & thead tr th {
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    text-align: start;
    text-transform: uppercase;
    &:last-child,
    &:nth-last-child(2) {
      width: 10%;
      text-align: center;
    }
  }

  & tbody tr {
    &:first-of-type {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
    &:nth-child(even) {
      background: #ffffff06;
    }

    &:hover {
      background: #ffffff25;
    }
  }

  & tbody tr td {
    text-wrap: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    position: relative;
    padding: 0.5rem;
    &:nth-last-child(2) {
      text-align: center;
    }
  }

  & tbody tr td:last-child {
    display: flex;
    align-items: center;
    overflow-y: hidden;
    justify-content: center;
    gap: 0.5rem;
    user-select: none;
    & button {
      background: none;
      border: none;
      padding: 0.25rem;
      cursor: pointer;
      & svg {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 1500px) {
    backdrop-filter: blur(0);
    & thead {
      background: none;
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    & tbody {
      background: none;
    }

    & tbody tr {
      padding: 0.5rem 0;
      border-radius: 10px;
      background: #ffffff10;
      display: block;
      margin-bottom: 0.5rem;
      &:nth-child(even) {
        background: #ffffff20;
      }
      &:hover {
        background: #ffffff30;
      }
      &:first-of-type {
        border: none;
      }
    }

    & tbody tr td {
      padding: 0.1rem 1rem;
      display: block;
      text-align: right;
      &:last-child {
        padding: 0;
        height: 2rem;
        margin-top: 0.5rem;
        & button {
          padding: 0.5rem;
        }
      }
      &:nth-last-child(2),
      &:nth-last-child(3) {
        text-align: right;
      }
      &:nth-child(even) {
        background: #ffffff08;
      }
    }

    & tbody tr td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
