import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container, Search, User, Profile } from "./styles";

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
// import { Button } from "../../components/Button";

export function Header({ children }){
  const { signOut, user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  const navigate = useNavigate();

  function handleSignOut(){
    navigate("/");
    signOut();
  }

  return(
    <Container>

      <h1>
        RocketMovies
      </h1>
      {children}
      
      <div>
        <User>
          <strong> {user.name} </strong>
          <span> <a href='/' onClick={handleSignOut}>  Sair </a> </span>
        </User>
        <Profile to="/profile">
          <img
            src={avatarURL}
            alt={user.name}
          />
         </Profile>
      </div>

        
    </Container>
  );
}