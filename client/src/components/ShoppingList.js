import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  _deleteItem = id => {
    this.props.deleteItem(id);
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {items} = this.props.item;

    return(
      <Container>

        <ListGroup>
          <TransitionGroup className="ShoppingList">
            {
              items.map(({_id, name}) => {
                return (
                  <CSSTransition key={_id} timeout={500} classNames="fase">
                    <ListGroupItem>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this._deleteItem.bind(this, _id)}>
                        &times;
                      </Button>
                      {name}
                    </ListGroupItem>
                  </CSSTransition>
                  );
              })
            }
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
