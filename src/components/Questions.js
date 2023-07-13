import React, { useState } from 'react'
import Field from 'form_utility_package/dist/form_utility/controls/Field'
import Options from './Options'
import ChooseAnswer from './ChooseAnswer'


export default function Questions({ number }) {

    const [store, setStore] = useState({
        question: {},
        questions: [],
        options: [],
        buttonDisable: true
    })
    const radioOptions=[
        {value: "a",label: "A"}, 
        {value: "b",label: "B"},
        {value: "c",label: "C"},
        {value: "d",label: "D"}
    ]
    const onChange = (e) => {

    }


    const onOptionsButtonClick = () => {

        if (store.options.length < 4)
            setStore(pre => {
                return { ...pre, options: [...store.options, { value:1 }] }
            })
        if (store.options.length == 3)
            setStore(pre => { return { ...pre, buttonDisable: false } })
    }
    console.log(store)

    return (
        <>
            <Field
                control="input"
                type="text"
                name={`Q.${number}`}
                label={`Question ${number}`}
                placeholder="Enter your questions"
                className="form-control"
                onChange={onChange}
                outerClass="form-control bg-success text-white"
            />
            {store.buttonDisable
                &&
                <Field
                    control="button"
                    type="text"
                    label="ADD OPTION"
                    className="btn btn-sm btn-warning m-1"
                    onClick={onOptionsButtonClick}
                />
            }

            {store.options.map((num, index) => <div key={index}><Options index={index}/></div>)}
            {store.options.length == 4 && <ChooseAnswer options={radioOptions} number={number}/>}
        </>
    )
}