import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
    console.log(to)
    console.log(children)
  return (
      <StyledLink to={to}>

      {children}
    </StyledLink>
  );
};
BackLink.propTypes = {
  to: PropTypes.object.isRequired,

children: PropTypes.array.isRequired
};