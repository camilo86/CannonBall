import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text, Button } from 'evergreen-ui';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundPage = ({ history }) => (
  <Container>
    <Heading size={900}>404 - Page not found</Heading>
    <Text>Lets take you back to to a safe place.</Text>
    <Button style={{ marginTop: '15px' }} onClick={() => history.push('/')}>Go back home</Button>
  </Container>
);

NotFoundPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NotFoundPage;
