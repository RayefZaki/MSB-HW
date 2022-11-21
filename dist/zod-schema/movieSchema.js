"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSchema = void 0;
const zod_1 = require("zod");
exports.movieSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: "Id is required !" })
            .min(3, "ID must be at least 3 characters"),
        name: zod_1.z.string({ required_error: "Name is required!" })
            .min(3, "Name must be at least 3 characters"),
        genre: zod_1.z.enum(["Drama", "Action", "Comedy"], {
            required_error: "genre is required and must be one of this array [`Drama`, `Action`, `Comedy`]",
        }),
        rating: zod_1.z.number({ required_error: "rating is required!" })
            .min(1, "must be less than 1")
            .max(5, "must be more than 5"),
        duration: zod_1.z.number({ required_error: "duration is required!" })
            .min(60, "must be less than 60"),
    }),
});
