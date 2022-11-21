"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankRouter = void 0;
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleWare/validate"));
const BankSchema_1 = require("../zod-schema/BankSchema");
exports.BankRouter = (0, express_1.default)();
let Bankmanag = [];
Bankmanag.push({
    id: "001",
    username: "Rayef",
    Password: "Abcd123!",
    balance: 100000,
});
exports.BankRouter.get(`/`, (req, res) => {
    return res.json(Bankmanag);
});
exports.BankRouter.post(`/`, (0, validate_1.default)(BankSchema_1.BankSchema), (req, res) => {
    const newRide = req.body;
    Bankmanag.push(newRide);
    return res.json({
        message: "successfully !",
    });
});
exports.BankRouter.put(`/wirtdraw/:id/:amount`, (req, res) => {
    const id = req.params.id;
    const amount = req.params.amount;
    Bankmanag.map((draw) => {
        if (draw.id === id) {
            if (draw.balance >= amount) {
                draw.balance = draw.balance - amount;
                return res.json({
                    message: `completed procces and your new balnce is ${draw.balance}`,
                });
            }
            else {
                return res.json({
                    message: "you don't have enugh funds"
                });
            }
        }
    });
});
exports.BankRouter.put(`/deposits/:id/:amount`, (req, res) => {
    const id = req.params.id;
    const amount = req.params.amount;
    Bankmanag.map((deposits) => {
        if (deposits.id == id) {
            deposits.balance = deposits.balance + amount;
            {
                return res.json({
                    message: `completed procces and your new balnce is ${deposits.balance}`
                });
            }
        }
    });
});
exports.BankRouter.put(`/:id`, (0, validate_1.default)(BankSchema_1.BankSchema), (req, res) => {
    const { id } = req.params;
    const updateObj = req.body;
    Bankmanag.map((update) => {
        if (update.id === id || update.username === id) {
            update.id = updateObj.id;
            update.username = updateObj.username;
            update.Password = updateObj.Password;
            update.balance = updateObj.balance;
        }
    });
    return res.json({
        message: "item updated !",
    });
});
exports.BankRouter.delete(`/:id`, (req, res) => {
    const { id } = req.params;
    const newRideArr = Bankmanag.filter((del) => {
        return del.id !== id;
    });
    Bankmanag = newRideArr;
    return res.json({
        message: "item deleted !",
    });
});
