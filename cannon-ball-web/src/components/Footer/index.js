import React from 'react';
import { Pane, Text, Icon } from 'evergreen-ui';

const Footer = () => (
  <Pane width="100%" display="flex" justifyContent="center" padding={16} background="#007489">
    <Text color="white">Made with <Icon icon="heart" size={10} /> in Rochester, NY.</Text>
  </Pane>
);

export default Footer;
