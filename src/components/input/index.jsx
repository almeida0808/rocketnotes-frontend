import { Container } from "../input/styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
{Icon && <Icon size={20}/>} {/*Colocar o Icon so se tiver Icon*/}
<input {...rest} />
    </Container>
  
  )
}
