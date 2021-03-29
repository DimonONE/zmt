import React from 'react'
import styles from './FormControls.module.css'

export const Inputs = ({input, meta, ...props}) => {
    let errors = meta.touched && meta.error
    return(
        <div className={styles.erorsForm + " " + (errors && styles.erors)}>
            <div>
                <input {...input} {...props} />
            </div>
            { errors && <span>{meta.error}</span> }
        </div>
    )
}