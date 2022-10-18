import { useState, useEffect } from 'react';
import { FiArrowLeft, FiStar, FiClock  } from 'react-icons/fi';
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Content, Author, Title} from "./styles";
import { format, parseISO } from "date-fns";

import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";

import { Tag } from "../../components/Tags";
import { Header } from "../../components/Header";

export function Details(){
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const params = useParams();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
      console.log(response.data, parseISO(response.data.created_at))
    }
    fetchNote();
  }, []);
  


  return( //onde tem o conteúdo da interface.
      <Container>
        <Header />
        {
          data && 
        <main>
          <Content>
            <header>
              <Link to='/'>
                <FiArrowLeft /> Voltar
              </Link>
            </header>
            
            <Title> 
              <h1>
              {data.title}
              </h1>
            
              {/* <h2>
                <FiStar className= {4 >= 1 ? "rated" : ""} />
                <FiStar className= {4 >= 2 ? "rated" : ""} />
                <FiStar className= {4 >= 3 ? "rated" : ""} />
                <FiStar className= {4 >= 4 ? "rated" : ""} />
                <FiStar className= {4 >= 5 ? "rated" : ""} />
              </h2> */}
              <h2> 
                <FiStar className= {data.rating  >= 1 ? "rated" : ""} />
                <FiStar className= {data.rating  >= 2 ? "rated" : ""} />
                <FiStar className= {data.rating  >= 3 ? "rated" : ""} />
                <FiStar className= {data.rating  >= 4 ? "rated" : ""} />
                <FiStar className= {data.rating  >= 5 ? "rated" : ""} />
              </h2>
            </Title>
            
            <Author>
              {/* <img src='https://github.com/patizani.png' alt="Foto do usuário" width = "20" /> */}
              <img 
                src={avatarURL}
                alt={user.name}
                width = "20" 
              />
              Por {user.name}
              <FiClock /> {format(parseISO(data.created_at), "dd/MM/yyyy 'às' HH:mm")}
            </Author>

            {
              data.movie_tags && 
              <footer>
                {
                  data.movie_tags.map(tag => <Tag key = {tag.id} title = {tag.tag_name} />)
                }
              </footer>
            }

            <p>
              {data.description}
            </p>
            
          </Content>
        </main>
      }
      </Container> 
  )
}
