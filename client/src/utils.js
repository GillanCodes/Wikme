export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
}

export const genUId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export const toTimestamp = (date) => {
    let timestamp = new Date(date).getTime();
    return timestamp;
}