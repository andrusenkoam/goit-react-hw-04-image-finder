import { Container, Spinner } from './Loader.styled';

export function Loader() {
  return (
    <Container>
      <Spinner>
        <span></span>
      </Spinner>
    </Container>
  );
}
