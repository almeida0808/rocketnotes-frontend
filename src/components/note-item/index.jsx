import { Container } from "../note-item/styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" readOnly={!isNew} value={value} {...rest} />
  
  <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
{isNew ? <FiPlus/> : <FiX/>} {/*caso seja um campo pra adicionar um link colocar o sinal de + , caso seja um link já criado coloque X*/}
  </button>
  
    </Container>
  );
}
