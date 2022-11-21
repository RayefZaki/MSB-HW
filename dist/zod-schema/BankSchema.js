"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankSchema = void 0;
const zod_1 = require("zod");
exports.BankSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: "Id is required !" })
            .min(3, "ID must be at least 3 characters"),
        username: zod_1.z.string({ required_error: "Name is required!" })
            .min(6, "Name must be at least 6 characters"),
        Password: zod_1.z.string({
            required_error: "password is required!",
        })
            .regex(new RegExp(".*[A-Z].*"), "password One uppercase character")
            .regex(new RegExp(".*[a-z].*"), "password One lowercase character")
            .regex(new RegExp(".*\\d.*"), "One number")
            .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "One special character")
            .min(8, "Must be at least 8 characters in length"),
        balance: zod_1.z.number({ required_error: "rating is required!" })
            .min(0, "must be less than 0"),
    }),
});
