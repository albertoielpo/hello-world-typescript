import { Controller, Get } from "@albertoielpo/ielpify";
import { FastifyReply, FastifyRequest } from "fastify";

@Controller()
export default class HomeController {
    @Get()
    helloWorld(req: FastifyRequest, res: FastifyReply): FastifyReply {
        return res.send({
            status: "OK"
        });
    }
}
