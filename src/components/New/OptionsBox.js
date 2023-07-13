import Field from 'form_utility_package/dist/form_utility/controls/Field'
import React from 'react'

export default function OptionsBox({ checkValue, onChange, totalQuestions }) {

    return (
        <>
            {
                checkValue.map((value, index) => {
                    let equalQuestion = Number(totalQuestions?.descriptive) + Number(totalQuestions?.programming) + Number(totalQuestions?.mcq)

                    if (Number(totalQuestions?.number_of_questions) == equalQuestion) {

                        return <span key={index}>
                            <Field
                                control="input"
                                type="number"
                                name={value}
                                onChange={onChange}
                                disabled
                                placeholder={value + " " + "how many questions ?."}
                                className="form-control mb-2"
                                outerClass="px-2"
                            />
                        </span>
                    }

                    return <span key={index}>
                        <Field
                            control="input"
                            type="number"
                            name={value}
                            onChange={onChange}
                            placeholder={value + " " + "how many questions ?."}
                            className="form-control mb-2"
                            outerClass="px-2"
                        />
                    </span>
                })
            }
        </>
    )
}