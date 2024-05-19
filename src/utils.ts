export const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

export const getRandom = <T>(arr: T[]): T => {
    if (arr.length === 0) {
        throw new Error("Cannot get a random element from an empty array");
    }
    return arr[Math.floor(Math.random() * arr.length)];
};
