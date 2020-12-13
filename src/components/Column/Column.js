import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        columnOne: PropTypes.node.isRequired,
        columnTwo: PropTypes.node.isRequired,
        columnThree: PropTypes.node.isRequired,
    }
    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.columnOne}{this.props.columnTwo}{this.props.columnThree}</h3>
        </section>
      )
    }
  }

  export default Column;