import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pane } from 'evergreen-ui';
import { encodeFileshareId } from '../../actions/fileshare';

import Navbar from '../../components/Navbar';
import FileChooser from '../../components/FileChooser';
import HowItWorks from '../../components/HowItWorks';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';

class HomePage extends Component {
  componentDidMount() {
    const { id } = this.props.application;

    this.props.encodeFileshareId(id);
  }

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

HomePage.propTypes = {
  application: PropTypes.object.isRequired,
  encodeFileshareId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  encodeFileshareId: id => dispatch(encodeFileshareId(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
