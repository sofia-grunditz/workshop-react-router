import { useParams, Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 64px 24px;

  @media (max-width: 600px) {
    padding: 48px 16px;
  }
`

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #c1121f;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

const InfoGroup = styled.div`
  background-color: #f5f5f5;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`

const Info = styled.p`
  font-size: 1.25rem;
  margin-bottom: 12px;

  & strong {
    color: #111;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 48px;
  color: #222;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: #c1121f;
    text-decoration: underline;
  }
`

const SongInfo = ({ songs }) => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const song = songs.find((s) => s.title === decodedTitle);

  return (
    <Container>
      <Heading>Song Information</Heading>

      {song ? (
        <InfoGroup>
          <Info><strong>Title:</strong> {song.title}</Info>
          <Info><strong>Artist:</strong> {song.artist}</Info>
          <Info><strong>Album:</strong> {song.album}</Info>
          <Info><strong>Year:</strong> {song.year}</Info>
          <Info><strong>Rank:</strong> #{song.rank}</Info>
        </InfoGroup>
      ) : (
        <Info>Song not found!</Info>
      )}

      <BackLink to="/">← Back to Home</BackLink>
    </Container>
  );
};

export default SongInfo;
