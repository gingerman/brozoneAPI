import bodyParser from "body-parser";
//import express from "express";
import { Logger } from "logger";
import Routes from "./routes";

class App {

    public bodyParser: bodyParser.BodyParser;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        // this.express = require('express');

        this.bodyParser = bodyParser();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    // // Configure Express middleware.
    // private middleware(): void {
    //     this.express.use(bodyParser.json());
    //     this.express.use(bodyParser.urlencoded({ extended: false }));
    // }

    // Configure Express middleware.
    private middleware(): void {
        // this.express.use(bodyParser.json());
        // this.express.use(bodyParser.urlencoded({ extended: false }));
        this.bodyParser(bodyParser.json());
        this.bodyParser.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.bodyParser.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });

        // user route
        this.bodyParser.use("/api", Routes);

        // handle undefined routes
        this.bodyParser.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().bodyParser;