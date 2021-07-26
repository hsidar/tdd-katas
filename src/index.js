import { generalConstants } from "./constants";
import server from "./server";

const { serverPort } = generalConstants;

server.listen(serverPort, () => console.log(`Listening on port ${serverPort}`));
