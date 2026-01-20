import { registerController } from "@albertoielpo/ielpify";
import Fastify from "fastify";
import HomeController from "../home/home.controller";

const fastify = Fastify();

// Register controllers
registerController(fastify, HomeController);

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is listening on ${address}`);
});
