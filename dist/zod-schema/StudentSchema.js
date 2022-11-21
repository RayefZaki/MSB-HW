"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const zod_1 = require("zod");
exports.StudentSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: "Id is required !" })
            .min(3, "ID must be at least 3 characters"),
        name: zod_1.z.string({ required_error: "Name is required!" })
            .min(3, "Name must be at least 3 characters"),
        major: zod_1.z.enum(["IT", "IS", "CS", "SWE"], {
            required_error: "genre is required and must be one of this array [`IT`, `IS`, `CS`,`SWE`]",
        }),
        level: zod_1.z.number({ required_error: "rating is required!" })
            .min(1, "must be less than 1")
            .max(8, "must be more than 8"),
        GPA: zod_1.z.number({ required_error: "duration is required!" })
            .min(0, "must be less than 0")
            .max(5, "must be more than 5"),
    }),
});
