import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { GalleryList, GalleryItem } from './ImageGallery.styled';

export function ImageGallery({ items, isShowButton, onLoadMoreClick }) {
  return (
    <>
      <GalleryList>
        {items.map((item, idx) => (
          <GalleryItem key={idx}>
            <ImageGalleryItem item={item} />
          </GalleryItem>
        ))}
      </GalleryList>
      {isShowButton && <Button onBtnClick={onLoadMoreClick} />}
    </>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  isShowButton: PropTypes.bool,
  onLoadMoreClick: PropTypes.func,
};
