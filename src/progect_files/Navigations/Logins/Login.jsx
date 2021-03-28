import React from "react"
import { Field, reduxForm } from "redux-form"

const FormLogin = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={"login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> Запомнить меня
            </div>
            <div>
                <button>Вход</button>
            </div>
        </form>
    )
}


const FormLoginRedux = reduxForm({form: 'login'})(FormLogin)

const LoginPage = (props) => {
    const onSubmit = (FormData) => {
        console.log(FormData)
        props.LoginingUser(FormData)
    }

    return (
        <div > 
            <FormLoginRedux onSubmit={onSubmit} />
        </div>
    )
}

export default LoginPage;