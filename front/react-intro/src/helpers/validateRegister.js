export const validate =(input)=>{
    const errors={};
    const expresionRegularUsuario = /^[a-zA-Z0-9]{3,12}$/;
    const expresionRegularPassword = /^[a-zA-Z0-9]{8,20}$/;
    const expresionRegularCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const expresionRegularNombre = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
    const expresionRegularDNI = /^[0-9]{8,9}$/;
    const expresionRegularDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;


    if (!expresionRegularUsuario.test(input.username)) {
        return errors.username = 'El usuario es incorrecto';
    }
    
    if (!expresionRegularPassword.test(input.password)) {
       return  errors.password = 'La contraseña es incorrecta';
    }
    if (!expresionRegularCorreo.test(input.email)) {
        return errors.email = 'El email es incorrecto';
    }
    if (!expresionRegularNombre.test(input.name)) {
        return errors.name = 'El nombre es incorrecto';
    }
    if (input.nDni !== undefined && !expresionRegularDNI.test(input.nDni.toString())) {
        return errors.nDni = 'El DNI es incorrecto';
    }
    if (!expresionRegularDate.test(input.birthdate)) {
        return errors.birthdate = 'La fecha es incorrecta';
    }
    return errors;
}