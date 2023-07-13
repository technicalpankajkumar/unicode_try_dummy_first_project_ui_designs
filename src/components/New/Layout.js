import React, { useState } from 'react'
import SelectLanugage from './SelectLanguage'
import NumberOfQuestions from '../NumberOfQuestions'
import Field from 'form_utility_package/dist/form_utility/controls/Field'
import { selectOptions } from '../ApiData'

export default function Layout() {
    const [store, setStore] = useState({
        manageSelects: [selectOptions]
    })
    const [totalQuestions, setTotalQuestions] = useState({
        number_of_questions: 0,
        mcq: 0,
        programming: 0,
        descriptive: 0,
    })
    const [selectValue, setSelectValue] = useState([])
    const [count, setCount] = useState(0)

    // enter number of question manage onchange methode 
    const onChange = (e) => {
        if (e.target.value < 0) {
            setTotalQuestions(pre => { return { ...pre, [e.target.name]: 0 } })
        
        }else {
        setTotalQuestions(pre => {
            return { ...pre, [e.target.name]: e.target.value }
        })
        }
    }

    console.log(totalQuestions)

    const onButtonClick = () => {
        
        if (store.manageSelects.length == selectOptions.length) {
        } else {
            let filterData = store.manageSelects[count].filter(data => data.value != selectValue)
            setStore(pre => { return { ...pre, manageSelects: [...store.manageSelects, filterData] } })
            setCount(pre => pre + 1)
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row mb-3'>
                <div className='col-md-5 '>
                    <NumberOfQuestions onChange={onChange} totalQuestions={totalQuestions} />

                    {
                        store.manageSelects.map((data, index) => {
                            console.log(data)
                            return (<div key={index}>
                                {/* select option tag */}
                                <SelectLanugage selectOptions={data} selectValue={selectValue} setSelectValue={setSelectValue} totalQuestions={totalQuestions} setTotalQuestions={setTotalQuestions} onChange={onChange} />
                            </div>)
                        })
                    }
                    {/* error field */}
                    <div className='px-1 pb-2'>
                        {Number(totalQuestions?.number_of_questions) != Number(totalQuestions?.descriptive + totalQuestions?.programming + totalQuestions?.mcq)
                            ?
                            (Number(totalQuestions.number_of_questions) < Number(totalQuestions?.descriptive) + Number(totalQuestions?.programming) + Number(totalQuestions?.mcq))
                                ? <><span style={{ color: "red" }}>your value greater than questions</span><br /></>
                                :
                                <span></span>
                            : <span></span>
                        }
                    </div>
                    {/* button section */}
                    < Field
                        control="button"
                        type="button"
                        label="Add More Language"
                        className={`btn btn-sm btn-primary`}
                        onClick={onButtonClick}
                    />
                </div>
            </div>
        </div>
    )
}