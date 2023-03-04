import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

export const Navigation = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
   align-items: center;
  min-height: 64px;
   padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 2px -2px gray;

`;
export const NavigationLink = styled(NavLink)`
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: grey;
  }
`
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;