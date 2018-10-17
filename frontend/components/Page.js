import { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

const StyledPage = styled.div`
  background: ${({ theme }) => theme.offwhite};
  color: ${({ theme }) => theme.black};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
@font-face {
  font-family: 'Poppins, sans-serif';
  src: url('../static/Poppins/Poppins-Regular.ttf');
  font-weight: normal;
  font-style: normal;
}

html{
  box-sizing: border-box;
  font-size: 10px;
}
*,*:before,*:after{
  box-sizing: inherit;
}
body{
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  line-height: 2;
  font-family: 'Poppins';
}
a{
  text-decoration: none;
  color: ${theme.black};
}
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <p>Page Component</p>
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
