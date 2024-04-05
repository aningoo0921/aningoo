import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassProps extends Component {
  render() {
    console.log(this.props);

    return (
      <>
        <h1>제가 좋아하는 음식입니다.</h1>
        <div>
          제가 좋아하는 음식은 {this.props.food}이고, 맛이 {this.props.author}{' '}
          입니다
        </div>
        <div>가격은 {this.props.price}원 입니다.</div>

      </>
    );
  }
  static defaultProps = {
    price: 9000,
  };
}
ClassProps.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.string.isRequired,
    price: PropTypes.number,
  };
  