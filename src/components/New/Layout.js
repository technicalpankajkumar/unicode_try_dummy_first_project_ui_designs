import React, { createContext, useEffect, useState } from 'react'
import SelectLanugage from './SelectLanguage'
import NumberOfQuestions from '../NumberOfQuestions'
import Field from 'form_utility_package/dist/form_utility/controls/Field'
import { selectOptions } from '../ApiData'
import reduceValue from './tryCreateSameFn'

export const storeContext = createContext('')

export default function Layout() {
    const [store, setStore] = useState({
        manageSelects: [selectOptions],
        selects: {},
        totalValues: 0
    })
    const [totalQuestions, setTotalQuestions] = useState({
        number_of_questions: 0,
    })
    const [selectValue, setSelectValue] = useState([])
    const [oldSelectValue, setOldSelectValue] = useState('')
    const [count, setCount] = useState(0)


    // enter number of question manage onchange methode 
    const onChange = (e) => {
        //number_of_questions manage
        if (e.target.name == 'number_of_questions') {
            if (e.target.value < 0) {
                setTotalQuestions(pre => { return { ...pre, [e.target.name]: 0 } })
            } else {
                setTotalQuestions(pre => {
                    return { ...pre, [e.target.name]: e.target.value }
                })
            }
        }

        console.log(e.target.value,"console")
        // setStore(pre => {
        //     return {...pre,selects : [e.target.parentNode]}
        // })
        if (e.target.name.includes(`select`)) {
            setStore(pre => {
                return {
                    ...pre, selects: {
                        ...pre.selects, [e.target.name.split('.')[0]]: {
                            ...pre.selects?.[e.target.name.split('.')[0]], value: {
                                ...pre.selects?.[e.target.name.split('.')[0]].value, [e.target.name.split('.')[1]]: e.target.value
                            }
                        }
                    }
                }
            })
        }
    }

    useEffect(() => {
        if (Object.values(store.selects).length > 0) {
            let value = reduceValue(store)
            setStore(pre => { return { ...pre, totalValues: value } })
        }

    }, [store.selects])

    const onButtonClick = () => {
        //here manage old or previous selected value
        setOldSelectValue(selectValue[0])

        //here apply condition for create select option after selected language
        if (selectValue[0] != oldSelectValue && selectValue.length > 0) {
            if (store.manageSelects.length == selectOptions.length - 1) {
            } else {
                let filterData = store.manageSelects[count].filter(data => data.value != selectValue)
                setStore(pre => { return { ...pre, manageSelects: [...store.manageSelects, filterData] } })
                setCount(pre => pre + 1)
            }
        }
    }

    return (
        <storeContext.Provider value={{ store: store, setStore: setStore }}>
            <div className='container-fluid'>
                <div className='row mb-3'>
                    <div className='col-md-5 '>
                        <NumberOfQuestions onChange={onChange} totalQuestions={totalQuestions} />

                        {
                            store.manageSelects.map((data, index) => {
                                // console.log(data)
                                return (<div key={index}>
                                    {/* select option tag */}
                                    <SelectLanugage index={index} selectOptions={data} selectValue={selectValue} setSelectValue={setSelectValue} totalQuestions={totalQuestions} setTotalQuestions={setTotalQuestions} onChange={onChange} />
                                </div>)
                            })
                        }
                        {/* error field */}
                        <div className='px-1 pb-2'>
                            {Number(totalQuestions?.number_of_questions) != store.totalValues
                                ?
                                (Number(totalQuestions.number_of_questions) < store.totalValues)
                                    ? <><span style={{ color: "red" }}>your value greater than questions</span><br /></>
                                    :
                                    <span></span>
                                : <span></span>
                            }
                        </div>
                        {/* button section */}
                        {
                            Number(totalQuestions?.number_of_questions) == store.totalValues
                                ?
                                <Field
                                    control="button"
                                    type="button"
                                    label="Submit Data"
                                    className={`btn btn-sm btn-success`}
                                    // onClick={``}
                                />
                                :
                                <Field
                                    control="button"
                                    type="button"
                                    label="Add More Language"
                                    className={`btn btn-sm btn-primary`}
                                    onClick={onButtonClick}
                                />
                        }

                    </div>
                </div>
            </div>
        </storeContext.Provider>
    )
}