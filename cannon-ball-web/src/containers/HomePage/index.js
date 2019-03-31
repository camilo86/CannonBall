import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';

import Navbar from '../../components/Navbar';
import FileChooser from '../../components/FileChooser';
import HowItWorks from '../../components/HowItWorks';

class HomePage extends Component {
  render() {
    return (
      <Pane>
        <Navbar />
        <FileChooser />
        <HowItWorks />
      </Pane>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
