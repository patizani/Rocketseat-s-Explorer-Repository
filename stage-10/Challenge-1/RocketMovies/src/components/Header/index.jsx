import { Container, Search, User, Profile } from "./styles";
import { Input } from "../../components/Input";
// import { Button } from "../../components/Button";

export function Header(){
  return(
    <Container>

      <h1>
        RocketMovies
      </h1>
      
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
       
      <Profile to="/profile">
        <User>
          <strong> Patrícia Zanirati </strong>
            <span> <a href='/'>  Sair </a> </span>
        </User>

        <img
          src="https://github.com/patizani.png"
          alt="Foto do usuário"
        />
      </Profile>

        
    </Container>
  );
}