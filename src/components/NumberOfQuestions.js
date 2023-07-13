import Field from 'form_utility_package/dist/form_utility/controls/Field';
import React from 'react';


export default function NumberOfQuestions({ onChange,totalQuestions }) {

    return (
        <>
            <Field
                control="input"
                type="number"
                name="number_of_questions"
                label="Number Of Questions"
                value={totalQuestions.number_of_questions}
                className="form-control"
                onChange={onChange}
                outerClass="p-2"
            />
        </>
    )
}