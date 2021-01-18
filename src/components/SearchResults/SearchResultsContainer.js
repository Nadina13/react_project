import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearch } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString), 
});

export default connect(mapStateToProps)(SearchResults);

