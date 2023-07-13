import React, { useState } from 'react'
import CheckMode from './CheckMode'
import OptionsBox from './OptionsBox'
import Field from 'form_utility_package/dist/form_utility/controls/Field'

export default function SelectLanugage({selectOptions,selectValue,setSelectValue, totalQuestions,setTotalQuestions,onChange}) {

  const [checkValue, setcheckValue] = useState([])

  const checkOptions =
    [
      { name: "mcq", value: "mcq", label: "MCQ" },
      { name: "programming", value: "programming", label: "Programming" },
      { name: "descriptive", value: "descriptive", label: "Descriptive" }
    ]

  
  // select onchange method
  const onSelectChange = (e) => {
    setSelectValue(pre => [e.target.value])
  }
  // checkbox onchange method
  const onCheckBoxChange = (e) => {

    if (e.target.checked) {
      setcheckValue(pre => [...pre, e.target.value])
    } else {
      let filterData = checkValue.filter(item => item != e.target.value)
      setTotalQuestions(pre => { return { ...pre, [e.target.name]: e.target.value } })
      setcheckValue(filterData)
    }
  }

  return (<>
    <Field
      control="select"
      defaultValue="default"
      name="language"
      options={selectOptions}
      label="Select-language"
      onChange={onSelectChange}
      className={'form-control'}
      outerClass={`p-2`}
    />
    {/* check mode */}
    <CheckMode selectValue={selectValue} checkOptions={checkOptions} onCheckBoxChange={onCheckBoxChange} />

    {/* option box */}
    <OptionsBox checkValue={checkValue} onChange={onChange} totalQuestions={totalQuestions} />
  </>
  )
}