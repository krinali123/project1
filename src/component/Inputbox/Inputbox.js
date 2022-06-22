import React from 'react';
import { FormFeedbackstyled, InputBoxstyled } from './Inputbox.style';

function Inputbox({children,error=false,errorMessage='',...rest}) {
    console.log(error,errorMessage, rest);
    return (
        <>
            <InputBoxstyled {...rest}>
             {children}
            </InputBoxstyled>
            <FormFeedbackstyled error={error}>
           {errorMessage}
            </FormFeedbackstyled>
        </>
    );
}

export default Inputbox;