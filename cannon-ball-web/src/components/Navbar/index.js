import React from 'react';
import GitHubButton from 'react-github-btn';
import { Pane, Heading } from 'evergreen-ui';

const Navbar = () => (
  <Pane display="flex" paddingTop={16} paddingBottom={16} paddingLeft={120} paddingRight={120} background="#14B5D0" borderRadius={3}>
    <Pane flex={1} alignItems="center" display="flex">
      <Heading size={600} color="white">
        <span role="img" aria-label="Bomb emoji" style={{ marginRight: '5px' }}>💣</span>
        Cannon Ball
      </Heading>
    </Pane>
    <Pane>
      <GitHubButton href="https://github.com/camilo86/CannonBall" data-size="large" aria-label="Star camilo86/CannonBall on GitHub">Star</GitHubButton>
    </Pane>
  </Pane>
);

export default Navbar;
