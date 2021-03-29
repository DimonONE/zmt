import React from "react"
import { Field, reduxForm } from "redux-form"
import { Inputs } from "../../common/FormsControls/FormControls"
import styles from './../../common/FormsControls/FormControls.module.css';

const FormLogin = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={"login"} name={"login"} component={Inputs} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Inputs} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> Запомнить меня
            </div>
            {props.error && <div className={styles.erorsForm + " " + styles.erors}>
                <span>{props.error}</span>
            </div>}
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