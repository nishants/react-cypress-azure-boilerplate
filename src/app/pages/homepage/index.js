import React from 'react';
import { connect } from 'react-redux';

import { searchForKey } from './actions';

class HomePage extends React.Component {
  search = searchString => this.props.dispatch(searchForKey(searchString));

  render() {
    return <article id="homepage">Homepage</article>;
  }
}

const mapStateToProps = ({ home: { searchAndFilter } }) => ({
  searchAndFilter
});

export default connect(mapStateToProps)(HomePage);
