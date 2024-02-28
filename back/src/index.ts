import server from "./server";
import { PORT } from "./config/envs";

server.listen(PORT, () => {
  console.log(`El server está escuchando en el puerto n° ${PORT}`);
});