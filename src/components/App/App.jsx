import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetchImages } from 'helpers/api';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Container } from './App.styled';

export function App() {
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);

  useEffect(() => {
    const options = {
      position: 'top-center',
      autoClose: 3000,
      theme: 'colored',
    };
    const perPage = 12;

    if (searchText === '') {
      return;
    }

    setIsLoading(true);

    fetchImages(searchText, page, perPage)
      .then(resp => {
        const { hits, totalHits } = resp;
        setItems(prevItems =>
          prevItems ? [...prevItems, ...hits] : [...hits]
        );

        const lastPage = Math.ceil(totalHits / perPage);

        if (totalHits) {
          setIsShowButton(true);
        } else if (!totalHits) {
          setIsShowButton(false);
          toast.error(`No images for query ${searchText} `, options);
        } else if (page === lastPage) {
          setIsShowButton(false);
          toast.error(`This is last page for query ${searchText} `, options);
        }
      })
      .catch(error => {
        console.log(error);
        toast.error(
          'Oops, something went wrong. Repeat one more time!',
          options
        );
      })
      .finally(() => setIsLoading(false));
  }, [searchText, page]);

  function handleSubmit(searchText) {
    setSearchText(searchText.toLowerCase().trim());
    setItems(null);
    setPage(1);
    setIsShowButton(false);
  }

  function onLoadMoreClick() {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <Container>
      {isLoading && <Loader />}
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery items={items} />
      {isShowButton && <Button onBtnClick={onLoadMoreClick} />}
      <ToastContainer />
    </Container>
  );
}
