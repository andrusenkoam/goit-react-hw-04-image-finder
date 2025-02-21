import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { GalerryImage } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
  item: { webformatURL, largeImageURL, tags },
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(tags);

  return (
    <>
      <GalerryImage
        src={webformatURL}
        alt={tags}
        onClick={() => setIsModalOpen(prevState => !prevState)}
      />
      {isModalOpen && (
        <Modal
          imgSource={largeImageURL}
          imgDescription={tags}
          onClose={() => setIsModalOpen(prevState => !prevState)}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.exact({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
};
