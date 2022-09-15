import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 18px;
  border-bottom: 1px solid #888888;

  span {
    color: #1d1d1b;
    font-weight: 700;
    font-size: 18px;
  }

  h2 {
    color: #888888;
    font-weight: 400;
    font-size: 18px;
  }

  @media (min-width: 1120px) {
    padding-top: 5px;
    border-bottom: none;
  }
`;
