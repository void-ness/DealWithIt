const isAuthenticated = () => {
    if (localStorage.getItem('username') === "test" && localStorage.getItem('pass') === "test@123") {
        return true;
    }

    else {
        return false;
    }
}

const isRegistered = ({ username, pass }) => {
    if (username.trim().toLowerCase() === "test" && pass === "test@123") {
        localStorage.setItem('username', 'test');
        localStorage.setItem('pass', 'test@123');
        return true;
    }

    else {
        return false;
    }
}

export { isAuthenticated, isRegistered };