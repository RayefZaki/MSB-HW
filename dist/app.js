"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieRating_1 = require("./Routes/movieRating");
const StudentManag_1 = require("./Routes/StudentManag");
const BankManag_1 = require("./Routes/BankManag");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(`/movieRating`, movieRating_1.movieRatingRouter);
app.use(`/StudentManag`, StudentManag_1.StudentGPARouter);
app.use(`/BankManag`, BankManag_1.BankRouter);
app.listen(4500);
