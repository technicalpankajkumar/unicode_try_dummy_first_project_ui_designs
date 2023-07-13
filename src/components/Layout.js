import React, { useState } from 'react'
import NumberOfQuestions from './NumberOfQuestions'
import Questions from './Questions'
import Field from 'form_utility_package/dist/form_utility/controls/Field'

export default function Layout() {

    const [number, setNumber] = useState(0)
    const [questionsRun, setQuestionsRun] = useState([])
    const [buttonDisable, setButtonDisable] = useState(true)

    const onSmash = (e) => {
        setNumber(e.target.value)
        setButtonDisable(true)
    }

    const onButtonClick = () => {
        if (questionsRun.length < number)
            setQuestionsRun(pre => [...pre, 1])
        if (questionsRun.length + 1 == number)
            setButtonDisable(false)
    }

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-sm-6'>
                    <NumberOfQuestions onChange={onSmash} />
                    {buttonDisable && <Field
                        control="button"
                        type="button"
                        label="ADD QUESTIONS"
                        onClick={onButtonClick}
                        className="btn btn-sm btn-primary mb-1"
                    />}
                </div>
                    
            </div>
            <div className='row'>
                {questionsRun.map((n, i) => {
                    return <div className='col-md-6 col-sm-12' key={i}>
                        <Questions number={i + 1} />
                    </div>
                })}
            </div>
        </div>
    )
}