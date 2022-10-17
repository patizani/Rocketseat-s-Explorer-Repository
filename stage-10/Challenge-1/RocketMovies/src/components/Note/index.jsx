import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import { Container } from "./styles";
import { Tag } from '../Tags';


export function Note({ data, ...rest }) {
  return (
    <Container>

      <Link to="/details">{data.title}</Link>

      <h2> 
        <FiStar className= {data.stars >= 1 ? "rated" : ""} />
        <FiStar className= {data.stars >= 2 ? "rated" : ""} />
        <FiStar className= {data.stars >= 3 ? "rated" : ""} />
        <FiStar className= {data.stars >= 4 ? "rated" : ""} />
        <FiStar className= {data.stars >= 5 ? "rated" : ""} />
      </h2>

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  )
}