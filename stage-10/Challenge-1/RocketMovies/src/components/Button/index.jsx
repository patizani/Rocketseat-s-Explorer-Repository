import { FiPlus } from 'react-icons/fi'
import { Container } from "./styles";

export function Button({toDelete, title, loading=false, add}) {

    return (
        <Container 
            toDelete = {toDelete}
            type="button"
            disabled={loading}
        >
            {add ? <FiPlus /> : ""}
            {loading ? 'Carregando...' : title}

        </Container>
    )
}