import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ItemModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ imgSource, imgDescription, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <Overlay onClick={handleClick}>
      <ItemModal>
        <img src={imgSource} alt={imgDescription} />
      </ItemModal>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  imgSource: PropTypes.string.isRequired,
  imgDescription: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
