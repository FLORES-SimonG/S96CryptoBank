import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then(res=>{console.log("Conexión a la base de datos exitosa")}).catch(err=>{console.log("Error en la conexión a la base de datos")});
server.listen(PORT, () => {
    console.log(`El server está escuchando en el puerto n° ${PORT}`);
  });
