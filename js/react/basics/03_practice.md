# React Practice

`Atomic Design` - na bazie małych elementów tworzymy większe i większe

`Styled Components` - biblioteka umozliwiająca pisanie stylów w `js`

## Styled Components

```jsx
import styled from "styled-components";

const MyButton = styled.button`
  border: 2px solid blue;
  padding: 50px;
`;

const App = () => <MyButton>This is my button</MyButton>;
```

## Importy Absolutne

`jsconfig.json` - zmienne środowiskowe

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

## Propsy w Styled Components

`Propsy` - są boolienami, więc zwracają tylko `true` or `false`

```jsx
import styled from "styled-components";

const Button = styled.button`
  padding: 0;
  background-color: ${({ secondary }) => (secondary ? "#E6E6E6" : "#FFD82B")};
  width: ${({ secondary }) => (secondary ? "105px" : "220px")};
  height: ${({ secondary }) => (secondary ? "30px" : "47px")};
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: ${({ secondary }) => (secondary ? "10px" : "16px")};
  text-transform: uppercase;
`;

export default Button;
```

### Better Idea

```jsx
import styled, { css } from 'styled-components';

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}

export default Button;
```

```jsx
<>
  <Button>Close / Save</Button>
  <Button secondary>Remove</Button>
</>
```

## Global Style

```jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
`;

export default GlobalStyle;
```

### Happy rems

```scss
html {
  font-size: 62.5%; // 1 rem === 10px
}

body {
  font-size: 1.6rem; // tutaj chcemy bazowego fonta 16px
  font-family: "Montserrat", sans-serif;
}
```

### Antyaliasing

```scss
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## [Storybook](https://storybook.js.org/docs/react/get-started/introduction)

```
npx sb init
```

Zalecany update plików `.storybook/main.js` & `/preview.js` aby szukanie plików odbywało się w folderze `components`

```js
module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
```

### Simple Button Stories

```jsx
import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Components/atoms/Button",
};

export const Primary = () => <Button>Hello stee</Button>;
export const Secondary = () => <Button secondary>Remove</Button>;
```

## Atomic Design

```
src/
  components/
    atoms/
    molecules/
    organisms/
  templates/
  views/
```

`Theme Provider` - działa jak `Context API` tworzy teleport i przenosi nasze style do każdego miejsca aplikacji

```jsx
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "black",
};

<ThemeProvider theme={theme}>
  <>
    <h1>hello world</h1>
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </>
</ThemeProvider>;
```

### Global Variables

```
src/
  theme/
    GlobalStyle.js
    mainTheme.js
```

```js
export const theme = {
  note: "hsl(49, 100%, 58%)",
  twitter: "hsl(196, 83%, 75%)",
  article: "hsl(106, 47%, 64%)",
  grey100: "hsl(0, 0%, 96%)",
  grey200: "hsl(0, 0%, 90%)",
  grey300: "hsl(0, 0%, 70%)",
  black: "hsl(0, 0%, 0%)",
  light: 300,
  bold: 600,
  fontSize: {
    xxs: "1rem",
    xs: "1.2rem",
    s: "1.6rem",
    m: "2.1rem",
    l: "2.4rem",
    xl: "4rem",
  },
};
```

```
components/
  atoms/
    Button.js
```

```scss
background-color: ${({ theme }) => theme.primary};
```

### Add theme styles to Storybook

```
.storybook/
  preview.js
```

```js
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/mainTheme";

export const decorators = [
  (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
];
```

`Wczytanie ikony jako background-image`, ponieważ `input` nie ma `contentu` przez co nie możemy użyć `::before`

```jsx
background-image: url(${magnifierIcon});
background-size: 15px;
background-position: 15px 50%;
background-repeat: no-repeat;
```

### Rozszerzanie `styled` o nowe style oraz połączenie `grid` & `flex`

Nie ma on odpowiednich wymiarów, ponieważ będzie renderowany w `gridzie`

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import LinkIcon from "assets/icons/link.svg";

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "white"};
  :first-of-type {
    z-index: 9999;
  }
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

class Card extends Component {
  state: {
    redirect: false,
  };

  render() {
    const { id, cardType, title, created, twitterName, articleUrl, content } =
      this.props;

    return (
      <StyledWrapper>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === "twitters" && (
            <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
          )}
          {cardType === "articles" && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary>REMOVE</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(["note", "twitter", "article"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: "note",
  twitterName: null,
  articleUrl: null,
};

export default Card;
```
