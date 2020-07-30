import api from "./api.service";

export const TOKEN_KEY = "@reactjs-crud";
export const isAuthenticated = () => {
    const token = getToken();
    if (token) {
        return validateToken(token);
    } else {
        return false;
    }
};

export const validateToken = (token) => {
    return api.post("/auth/verify-token", { token }).then(() => {
        return true;
    }).catch(() => {
        return true;
        // return false; -> change this when exists end-point to validate token
    });
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};