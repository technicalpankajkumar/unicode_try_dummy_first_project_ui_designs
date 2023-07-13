import Field from 'form_utility_package/dist/form_utility/controls/Field'
import React from 'react'
import './chooseAnswer.css'
export default function ChooseAnswer({options,number}){

    return <Field
         control="radio"
         name={`Q.${number}`}
         label="Choose write answer "
         options={options}
         className="radioButton"
         />
}