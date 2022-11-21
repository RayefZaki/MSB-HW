"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRatingRouter = void 0;
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleWare/validate"));
const movieSchema_1 = require("../zod-schema/movieSchema");
exports.movieRatingRouter = (0, express_1.default)();
let movieRating = [];
movieRating.push({
    id: "001",
    name: "Rayef",
    genre: "Comedy",
    rating: 4,
    duration: 125,
});
exports.movieRatingRouter.get('/:name', (req, res) => {
    const { name } = req.params;
    let z = name.toLowerCase() || name.toLowerCase();
    movieRating.filter((search) => {
        return search.name.toLowerCase() === z || search.name.toUpperCase() === z ? res.json(search) : "Not Found";
    });
});
exports.movieRatingRouter.get(`/`, (req, res) => {
    return res.json(movieRating);
});
exports.movieRatingRouter.post(`/`, (0, validate_1.default)(movieSchema_1.movieSchema), (req, res) => {
    const newRide = req.body;
    movieRating.push(newRide);
    return res.json({
        message: "successfully !",
    });
});
exports.movieRatingRouter.put(`/:id`, (0, validate_1.default)(movieSchema_1.movieSchema), (req, res) => {
    const { id } = req.params;
    const updateObj = req.body;
    movieRating.map((upd) => {
        if (upd.id === id || upd.name === id) {
            upd.id = updateObj.id;
            upd.name = updateObj.name;
            upd.genre = updateObj.genre;
            upd.rating = updateObj.rating;
            upd.duration = updateObj.duration;
        }
    });
    return res.json({
        message: "item updated !",
    });
});
exports.movieRatingRouter.delete(`/:id`, (req, res) => {
    const { id } = req.params;
    const newRideArr = movieRating.filter((del) => {
        return del.id !== id;
    });
    movieRating = newRideArr;
    return res.json({
        message: "item deleted !",
    });
});
