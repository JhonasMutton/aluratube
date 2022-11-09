import styled from "styled-components";
// TODO arrumar

export const StyledFavorites = styled.section`
    overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

  img {
    width: 110px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  span {
    text-align: center;
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
  }
`;