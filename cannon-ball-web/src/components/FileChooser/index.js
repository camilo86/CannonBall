import React from 'react';
import { Pane, Heading, Text, Icon, FilePicker, majorScale } from 'evergreen-ui';

const FileChooser = () => (
  <Pane display="flex" flexDirection="column" width="100%" padding={majorScale(10)} alignItems="center" justifyContent="center" background="#F1FBFC">
    <Icon icon="document" size={majorScale(10)} marginBottom="30px" color="#14B5D0" />
    <Heading size={900} color="#14B5D0">Drop your files here.</Heading>
    <Text marginTop="5px" marginBottom="15px">or select below</Text>
    <FilePicker />
  </Pane>
);

export default FileChooser;
