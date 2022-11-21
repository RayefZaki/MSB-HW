import express from "express";
import { movieRatingRouter } from "./Routes/movieRating";
import { StudentGPARouter } from "./Routes/StudentManag";
import { BankRouter } from "./Routes/BankManag";

const app = express();
app.use(express.json());

app.use(`/movieRating`,movieRatingRouter);
app.use(`/StudentManag`,StudentGPARouter);
app.use(`/BankManag`,BankRouter);

app.listen(4500)