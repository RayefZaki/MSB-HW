"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentGPARouter = void 0;
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleWare/validate"));
const StudentSchema_1 = require("../zod-schema/StudentSchema");
exports.StudentGPARouter = (0, express_1.default)();
let Studentmanag = [];
Studentmanag.push({
    id: "001",
    name: "Rayef",
    major: "IT",
    level: 2,
    GPA: 4.45,
});
exports.StudentGPARouter.get('/:major', (req, res) => {
    const { major } = req.params;
    let z = major.toLowerCase() || major.toLowerCase();
    Studentmanag.filter((search) => {
        return search.major.toLowerCase() === z || search.major.toUpperCase() === z ? res.json(search) : "Not Found";
    });
});
exports.StudentGPARouter.get(`/`, (req, res) => {
    return res.json(Studentmanag);
});
exports.StudentGPARouter.post(`/`, (0, validate_1.default)(StudentSchema_1.StudentSchema), (req, res) => {
    const newRide = req.body;
    Studentmanag.push(newRide);
    return res.json({
        message: "successfully !",
    });
});
exports.StudentGPARouter.put(`/:id`, (0, validate_1.default)(StudentSchema_1.StudentSchema), (req, res) => {
    const { id } = req.params;
    const updateObj = req.body;
    Studentmanag.map((update) => {
        if (update.id === id || update.name === id) {
            update.id = updateObj.id;
            update.name = updateObj.name;
            update.major = updateObj.major;
            update.level = updateObj.level;
            update.GPA = updateObj.GPA;
        }
    });
    return res.json({
        message: "item updated !",
    });
});
exports.StudentGPARouter.delete(`/:id`, (req, res) => {
    const { id } = req.params;
    const newRideArr = Studentmanag.filter((del) => {
        return del.id !== id;
    });
    Studentmanag = newRideArr;
    return res.json({
        message: "item deleted !",
    });
});
