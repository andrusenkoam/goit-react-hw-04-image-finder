import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList, GalleryItem } from './ImageGallery.styled';

export function ImageGallery({ items }) {
  return (
    items && (
      <GalleryList>
        {items.map((item, idx) => (
          <GalleryItem key={idx}>
            <ImageGalleryItem item={item} />
          </GalleryItem>
        ))}
      </GalleryList>
    )
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
