import Field from "form_utility_package/dist/form_utility/controls/Field";



export default function Options({ onChange,index }) {

    return (
        <>
            <Field
                control="input"
                type="text"
                label={`Option ${String.fromCharCode(97+index)}`}
                placeholder="write your option"
                className="form-control"
                onChange={onChange}
                outerClass={`mb-1`}
            />
        </>
    )
}