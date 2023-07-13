import Field from 'form_utility_package/dist/form_utility/controls/Field'
import React from 'react'
export default function CheckMode({selectValue,checkOptions,onCheckBoxChange}){

    return  <>
        {selectValue.length == 1
        &&
         <Field
        control="checkbox"
        options={checkOptions}
        outerClass={`p-2`}
        onChange={onCheckBoxChange}
    />}
    </>
}