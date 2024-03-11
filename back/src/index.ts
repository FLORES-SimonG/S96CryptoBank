import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize()
.then(() => {
    console.log("Conexión a la base de datos exitosa");

    server.listen(PORT, () => {
      console.log(`El server está escuchando en el puerto n° ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
    
  
    // AppDataSource.initialize().then(res=>{console.log("Conexión a la base de datos exitosa")});
    // server.listen(PORT, () => {
    //     console.log(`El server está escuchando en el puerto n° ${PORT}`);
    //   });