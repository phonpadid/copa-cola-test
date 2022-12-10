export default function auth({next, router}) {
    const token = JSON.parse(localStorage.getItem("CREDENTIAL"));
    if (!token) {
        return router.push({name: "login.index"});
    }
    return next();
}
