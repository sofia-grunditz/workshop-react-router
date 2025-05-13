import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 64px 24px;
`

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #c1121f;
  text-align: center;
  margin-bottom: 48px;
`

const SongList = styled.ul`
  list-style: none;
  padding: 0;
`

const SongItem = styled.li`
  margin-bottom: 16px;
  font-size: 1.25rem;
`

const StyledLink = styled(Link)`
  color: #222;
  font-weight: 600;

  &:hover {
    color: #c1121f;
  }
`

const Home = ({ songs }) => {
  return (
    <Container>
      <Heading>Rolling Stones 500 Greatest Songs of All Time</Heading>
      <SongList>
        {songs.map((song) => (
          <SongItem key={song.title}>
            <StyledLink to={`/song/${encodeURIComponent(song.title)}`}>
              {song.title}
            </StyledLink>
          </SongItem>
        ))}
      </SongList>
    </Container>
  )
}

export default Home
