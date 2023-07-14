import React, { useContext, useState } from 'react'
import CheckMode from './CheckMode'
import OptionsBox from './OptionsBox'
import Field from 'form_utility_package/dist/form_utility/controls/Field'
import { storeContext } from './Layout'

export default function SelectLanugage({index,selectOptions,selectValue,setSelectValue, totalQuestions,setTotalQuestions,onChange}) {

  const [checkValue, setcheckValue] = useState([])

  const checkOptions =
    [
      { name: "mcq", value: "mcq", label: "MCQ" },
      { name: "programming", value: "programming", label: "Programming" },
      { name: "descriptive", value: "descriptive", label: "Descriptive" }
    ]

    const storeContextAPI =useContext(storeContext)

    console.log(storeContextAPI," it is store")
  // select onchange method
  const onSelectChange = (e) => {
     if(e.target.id.includes('select')){
            storeContextAPI.setStore(pre => {
              return {...pre,selects:{...pre.selects,
                [e.target.id]: {name:e.target.value,value:{mcq:0,descriptive:0,programming:0}}
              }}
            })
        }
    setSelectValue([e.target.value])
  }
  // checkbox onchange method
  const onCheckBoxChange = (e) => {
    if (e.target.checked) {
      setcheckValue(pre => [...pre, e.target.value])
    } else {
      //remove selected value in selected for next selecte options
      let filterData = checkValue.filter(item => item != e.target.value)
      setTotalQuestions(pre => { return { ...pre, [e.target.name]: e.target.value } })
      setcheckValue(filterData)
      // end program

      //traverse DOM to find selected element id.
     let selectId = (e.target.parentNode.parentNode.previousSibling.childNodes[4].id)
      storeContextAPI.setStore(pre => {
        return {...pre, selects: {
          ...pre.selects,[selectId]:{
            ...pre.selects?.[selectId],value:{...pre.selects?.[selectId]?.value,[e.target.name]: 0}}}}
        })
    }
  }

  return (<>
    <Field
      control="select"
      defaultValue="default"
      name={`select_${index}`}
      options={selectOptions}
      label="Select-language"
      onChange={onSelectChange}
      className={'form-control'}
      outerClass={`p-2`}
    />
    {/* check mode */}
    <CheckMode selectValue={selectValue} checkOptions={checkOptions} onCheckBoxChange={onCheckBoxChange} />

    {/* option box */}
    <OptionsBox uniqueIdGenerate={`select_${index}`} checkValue={checkValue} onChange={onChange} totalQuestions={totalQuestions} />
  </>
  )
}