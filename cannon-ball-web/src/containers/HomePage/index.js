import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';

import Navbar from '../../components/Navbar';
import FileChooser from '../../components/FileChooser';
import HowItWorks from '../../components/HowItWorks';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';

class HomePage extends Component {
  render() {
    return (
      <Pane>
        <Navbar />
        <FileChooser />
        <HowItWorks />
        <Faq />
        <Footer />
      </Pane>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
