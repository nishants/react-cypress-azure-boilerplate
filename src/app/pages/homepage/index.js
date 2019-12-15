import { connect } from 'react-redux';

import HomePage from './homepage';

const mapStateToProps = ({ home: { searchAndFilter } }) => ({
  searchAndFilter
});

export default connect(mapStateToProps)(HomePage);
