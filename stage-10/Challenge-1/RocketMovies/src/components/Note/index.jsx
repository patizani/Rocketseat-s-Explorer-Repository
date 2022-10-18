import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { FiStar, FiTrash2} from 'react-icons/fi'
import { Container } from "./styles";
import { Tag } from '../Tags';


export function Note({ data, ...rest }) {

  const { user } = useAuth();

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente excluir este filme?");

    if (confirm){
      await api.delete(`/movies/${data.id}`);
      location.reload();
    }
  }

  return (
    <Container {...rest}>
      <h1>{data.title} <FiTrash2 onClick={ handleRemove } /></h1>
      {/* <Link to="/details">{data.title}</Link> */}
      <h2> 
        <FiStar className= {data.rating  >= 1 ? "rated" : ""} />
        <FiStar className= {data.rating  >= 2 ? "rated" : ""} />
        <FiStar className= {data.rating  >= 3 ? "rated" : ""} />
        <FiStar className= {data.rating  >= 4 ? "rated" : ""} />
        <FiStar className= {data.rating  >= 5 ? "rated" : ""} />
      </h2>

      <p>{data.description} </p>

      {
        data.movie_tags &&
        <footer>
          {
            data.movie_tags.map(tag => <Tag key={tag.id} title={tag.tag_name} />)
          }
        </footer>
      }

    </Container>
  )
}