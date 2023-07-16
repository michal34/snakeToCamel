"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeToCamel = void 0;
const snakeToCamel = (input) => {
    if (Array.isArray(input)) {
        return input.map((item) => (0, exports.snakeToCamel)(item));
    }
    else if (typeof input === "object" && input !== null) {
        const output = {};
        for (const key in input) {
            if (Object.hasOwnProperty.call(input, key)) {
                const newKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
                output[newKey] = (0, exports.snakeToCamel)(input[key]);
            }
        }
        return output;
    }
    else if (typeof input === "string") {
        return input.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
    }
    else {
        return input;
    }
};
exports.snakeToCamel = snakeToCamel;
