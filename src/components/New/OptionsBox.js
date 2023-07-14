import Field from 'form_utility_package/dist/form_utility/controls/Field'
import React, { useContext } from 'react'
import { storeContext } from './Layout'

export default function OptionsBox({ uniqueIdGenerate, checkValue, onChange, totalQuestions }) {
    const storeContextAPI = useContext(storeContext)

    return (
        <>
            {
                checkValue.map((value, index) => {
                    // if (Number(totalQuestions?.number_of_questions) == storeContextAPI.store.totalValues) {

                        return <span key={`${uniqueIdGenerate}.${value}`}>
                            <Field
                                control="input"
                                type="number"
                                name={`${uniqueIdGenerate}.${value}`}
                                onChange={onChange}
                                // disabled
                                placeholder={value + " " + "how many questions ?."}
                                className="form-control mb-2"
                                outerClass="px-2"
                            />
                        </span>
                    }

                )



                // if(value == 'mcq'){
                // return <span key={index}>
                //     <Field
                //         control="input"
                //         type="number"
                //         name={`${uniqueIdGenerate}.${value}`}
                //         onChange={onChange}
                //         placeholder={value + " " + "how many questions ?."}
                //         className="form-control mb-2"
                //         outerClass="px-2"
                //     />
                // </span>
                // }
                // if(value == 'programming'){
                //     return <span key={index}>
                //     <Field
                //         control="input"
                //         type="number"
                //         name={`${uniqueIdGenerate}.${value}`}
                //         onChange={onChange}
                //         placeholder={value + " " + "how many questions ?."}
                //         className="form-control mb-2"
                //         outerClass="px-2"
                //     />
                // </span>
                // }
                // if(value == 'descriptive'){
                //     return <span key={index}>
                //     <Field
                //         control="input"
                //         type="number"
                //         name={`${uniqueIdGenerate}.${value}`}
                //         onChange={onChange}
                //         placeholder={value + " " + "how many questions ?."}
                //         className="form-control mb-2"
                //         outerClass="px-2"
                //     />
                // </span>
                // }
            }
        </>
    )
}