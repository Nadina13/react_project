import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearch } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.id),
});

export default connect(mapStateToProps)(SearchResults);

