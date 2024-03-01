import ICredentials from "../interfaces/ICredentials";

// Aquí usarías una base de datos real, pero para este ejemplo usaremos un arreglo
let credentials: ICredentials[] = [];

export const createCredentialsService = (
  username: string,
  password: string
): number => {
  const id = credentials.length + 1;
  credentials.push({ id, username, password });
  return id;
};

export const validateCredentials = (
  username: string,
  password: string
): number | null => {
  const credencialEncontrada = credentials.find(
    (credential) => (credential.username = username)
  );
  if (credencialEncontrada && credencialEncontrada.password === password) {
    return credencialEncontrada.id;
  } else {
    throw new Error("Credenciales incorrectas");
  }
};
