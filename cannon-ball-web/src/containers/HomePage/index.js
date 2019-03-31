import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';

import Navbar from '../../components/Navbar';
import FileChooser from '../../components/FileChooser';

class HomePage extends Component {
  render() {
    return (
      <Pane>
        <Navbar />
        <FileChooser />
      </Pane>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
