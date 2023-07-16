export const snakeToCamel = (input: any): any => {
    if (Array.isArray(input)) {
        return input.map((item: any) => snakeToCamel(item));
    } else if (typeof input === "object" && input !== null) {
        const output: any = {};
        for (const key in input) {
            if (Object.hasOwnProperty.call(input, key)) {
                const newKey: any = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
                output[newKey] = snakeToCamel(input[key]);
            }
        }
        return output;
    } else if (typeof input === "string") {
        return input.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
    } else {
        return input;
    }
};
