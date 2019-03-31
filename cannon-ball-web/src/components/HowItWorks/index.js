import React from 'react';
import { Pane, Heading, Text } from 'evergreen-ui';

import uploadImage from '../../static/upload.svg';
import shareImage from '../../static/share.svg';
import magicImage from '../../static/magic.svg';

const Section = ({ icon, title, description }) => (
  <Pane width={250} display="flex" flexDirection="column" alignItems="center" padding={16}>
    <img alt="Upload icon" src={icon} style={{ width: 80, display: 'block' }} />
    <Heading size={600} marginTop={8} marginBottom={8} color="#007489">{title}</Heading>
    <Text wordWrap="break-word" lineHeight="normal" textAlign="center">{description}</Text>
  </Pane>
);

const HowItWorks = () => (
  <Pane display="flex" flexDirection="column" width="100%" padding={32} alignItems="center">
    <Heading size={800} marginBottom={32} color="#007489">How does it work?</Heading>
    <Pane display="flex" width="100%" justifyContent="space-evenly">
      <Section
        icon={uploadImage}
        title="Choose your files"
        description="Simply drag and drop your files above or use the file chooser to select the files to share."
      />
      <Section
        icon={shareImage}
        title="Share the link"
        description="We will provide you with a one time link that you can give to somebody else to download."
      />
      <Section
        icon={magicImage}
        title="Let the magic work"
        description="When the person clicks on your link, we will send your files directly to them. No middleman."
      />
    </Pane>
  </Pane>
);

export default HowItWorks;
