import { Input ,FormFeedback}  from 'reactstrap';
import styled from "styled-components";


export const InputBoxstyled = styled(Input) `

`;
export const FormFeedbackstyled = styled(FormFeedback)`
  color:red;
  display:${props => props.error ? 'block' : 'none'}
`;

