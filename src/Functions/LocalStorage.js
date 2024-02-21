
export function SetLC(key, data) {
    localStorage.setItem(key, (typeof data == 'object' ? JSON.stringify(data) : data));
    return true;
}

export function GetLC(key) {
    const a = localStorage.getItem(key);
    if (typeof a == 'string') {
        return JSON.parse(a);
    } else {
        return a;
    }
}