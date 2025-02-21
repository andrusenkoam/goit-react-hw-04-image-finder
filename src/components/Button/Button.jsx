import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

export function Button({ onBtnClick }) {
  return (
    <LoadMoreButton type="button" onClick={() => onBtnClick()}>
      Load more
    </LoadMoreButton>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
