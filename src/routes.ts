import bodyParser from "body-parser";
// import express from "express";
// import { Logger } from "../logger/logger";
import { Logger } from "logger";
import User from "./user";

class Routes {

    public bodyParser: bodyParser.BodyParser;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        this.bodyParser = bodyParser();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        // this.express.use(bodyParser.json());
        // this.express.use(bodyParser.urlencoded({ extended: false }));
           this.bodyParser.use(bodyParser.json());
           this.bodyParser.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // user route
        this.bodyParser.use("/", User);
    }
}

export default new Routes().bodyParser;