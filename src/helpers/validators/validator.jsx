export const maxLengths = (maxLength) => (value) =>{
    if(value && value.length > maxLength) return `Максимальна довжина ${maxLength}`
    return undefined
}

export const required = (value) => {
    if(value) return undefined
    return "Поле не може буути путим"
}