export const validate =(input)=>{
    const errors={};
    const expresionRegularUsuario = /^[a-zA-Z0-9]{3,12}$/;
    const expresionRegularPassword = /^[a-zA-Z0-9]{8,20}$/;
    if (!expresionRegularUsuario.test(input.username)) {
        errors.username = 'El usuario es incorrecto';
    }
    
    if (!expresionRegularPassword.test(input.password)) {
        errors.password = 'La contraseña es incorrecta';
    }
    
    return errors;
}