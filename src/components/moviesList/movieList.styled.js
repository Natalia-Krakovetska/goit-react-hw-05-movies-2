import styled from 'styled-components';
export const MovieContainer = styled.main`
display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 16px;

`
export const MovieImg = styled.img`
display: block;
    height: auto;
    max-width: 100%;
`
export const CardWrapper = styled.div`
 box-shadow: 0 4px 2px -2px gray;
`