import { Outlet} from 'react-router-dom';
import { Suspense } from 'react';
import {Navigation, NavigationLink, Container} from './SharedLayout.styled'


const SharedLayout = () => {
  return (
    <Container>
      <header>
<Navigation >
          <NavigationLink  to="/" end>
            Home
          </NavigationLink>
          <NavigationLink  to="/movies">Movies</NavigationLink>
        </Navigation>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;