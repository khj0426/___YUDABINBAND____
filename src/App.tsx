import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import {
  Button,
  Frame,
  MenuList,
  MenuListItem,
  Monitor,
  Separator,
  styleReset,
  Toolbar,
  WindowContent,
  WindowHeader,
} from 'react95';
// pick a theme of your choice
import original from 'react95/dist/themes/original';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <MenuList>
        <MenuListItem>🎤 Sing</MenuListItem>
        <MenuListItem>💃🏻 Dance</MenuListItem>
        <Separator />
        <MenuListItem disabled>😴 Sleep</MenuListItem>
        <Monitor backgroundStyles={{ background: 'blue' }} />;
      </MenuList>
      76{' '}
      <WindowHeader className="window-title">
        77 <span>react95.exe</span>
        78{' '}
        <Button>
          79 <span className="close-icon" />
          80{' '}
        </Button>
        81{' '}
      </WindowHeader>
      82{' '}
      <Toolbar>
        83{' '}
        <Button variant="menu" size="sm">
          84 File 85{' '}
        </Button>
        86{' '}
        <Button variant="menu" size="sm">
          87 Edit 88{' '}
        </Button>
        89{' '}
        <Button variant="menu" size="sm" disabled>
          90 Save 91{' '}
        </Button>
        92{' '}
      </Toolbar>
      s 93{' '}
      <WindowContent>
        94{' '}
        <p>
          95 When you set &quot;resizable&quot; prop, there will be drag handle
          96 in the bottom right corner (but resizing itself must be handled by
          97 you tho!) 98{' '}
        </p>
        99{' '}
      </WindowContent>
      100{' '}
      <Frame variant="well" className="footer">
        101 Put some useful information here 102{' '}
      </Frame>
      103 104 105 106{' '}
      <WindowHeader active={false} className="window-title">
        107 <span>not-active.exe</span>
        108{' '}
        <Button>
          109 <span className="close-icon" />
          110{' '}
        </Button>
        111{' '}
      </WindowHeader>
      112 <WindowContent>I am not active</WindowContent>
      113{' '}
    </ThemeProvider>
  </div>
);

export default App;
