import React from 'react'
import { Link } from 'react-router-dom'

const pages = [
  {
    id: 'spotify-home-page',
    title: 'Spotify Home Page',
    originalLink:
      'https://web.archive.org/web/20190629024534/https://www.spotify.com/us/',
    cloneLink: '/spotify-home'
  },
  {
    id: 'netflix-home-page',
    title: 'Netflix Home Page',
    originalLink:
      'https://web.archive.org/web/20190701102306/https://www.netflix.com/',
    cloneLink: '/netflix-home'
  }
]

const Home = () => {
  return (
    <table>
      <tr>
        <td>Page</td>
        <td>Technologies</td>
        <td>Features</td>
        <td>Clone</td>
      </tr>
      {pages.map(({ id, title, originalLink, cloneLink }) => (
        <tr>
          <td key={id}>
            {title}
            <br />
            <a target="_blank" href={originalLink}>
              view original
            </a>
          </td>
          <td>
            <ul />
          </td>
          <td />
          <td>
            <Link to={cloneLink}>View</Link>
          </td>
        </tr>
      ))}
    </table>
  )
}

export default Home
