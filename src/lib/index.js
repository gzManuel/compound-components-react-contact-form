
export const setFormHOF = (key, value) => {
    return (prev)=>({
        ...prev,
        [key]:value
    })
}