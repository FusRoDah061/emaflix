import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => (paddingAll !== undefined && paddingAll !== null) && css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />

      <Main paddingAll={paddingAll}>
        { children }
      </Main>

      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: [],
  paddingAll: null,
};

PageDefault.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any),
  paddingAll: PropTypes.number,
};

export default PageDefault;
