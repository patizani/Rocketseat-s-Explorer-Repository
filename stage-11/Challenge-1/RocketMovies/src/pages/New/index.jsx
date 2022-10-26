import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState([]);
  const [rating, setRating] = useState([]);
  const [description, setDescription] = useState([]);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState => [...prevState, newTag]));
    setNewTag("");
}

function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
}

async function handleNewMovieNote(){
    if(!title || title==""){
        return alert("Digite um título.")
    }       
    if(!rating || rating==""){
        return alert("Digite uma nota.")
    }
    if(Number(rating) < 0 || Number(rating) > 5){
        return alert("Digite uma nota entre 0 e 5.")
    }
    if(!description || description==""){
        return alert("Digite a descrição.")
    }
    if(!tags || tags==""){
        return alert("Digite a(s) tag(s).")
    }
    if(newTag){
        return alert("Há um Marcador pendente para adicionar")
    }

    await api.post("/movies", {
        title,
        description,
        rating,
        tags
    });

    alert("Nota criada com sucesso!");
    navigate("/");
}

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to='/'>
              <FiArrowLeft /> Voltar
            </Link>
            <h1> Novo Filme </h1>
          </header>

          <section>
            <div>
              <Input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Input type="number"
                     placeholder="Sua nota (de 0 a 5)"
                     onChange={e => setRating(e.target.value)} 
              />
            </div>
          </section>

          <section>
            <div>
              <Textarea
               placeholder="Descrição"
               onChange={e => setDescription(e.target.value)}
              />
            </div>
          </section>

          <h2> Marcadores </h2>

          <section className="marcadores">
            <div>
            {
              tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
              {/* <NoteItem value="React" /> */}
            </div>
            <div>
              <NoteItem
                isNew
                placeholder="Novo Marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
              {/* <NoteItem isNew placeholder="Novo Marcador" /> */}
            </div>
          </section>

          <section>
            {/* <div>
              <Button title="Excluir filme" toDelete false/>
            </div> */}
            <div>
              <Button title="Salvar Filme" onClick={handleNewMovieNote} />
            </div>
          </section>



        </Form>
      </main>

    </Container>
  )
}