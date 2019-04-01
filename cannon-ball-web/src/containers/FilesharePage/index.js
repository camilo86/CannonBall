import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decodeFileshareId } from '../../actions/fileshare';

class FilesharePage extends Component {
  componentDidMount() {
    const { fileshareId } = this.props.match.params;

    this.props.decodeFileshareId(fileshareId);
  }

  render() {
    const { remoteId } = this.props.application;

    return (
      <h1>{remoteId}</h1>
    );
  }
}

FilesharePage.propTypes = {
  application: PropTypes.object.isRequired,
  decodeFileshareId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  decodeFileshareId: id => dispatch(decodeFileshareId(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilesharePage);
