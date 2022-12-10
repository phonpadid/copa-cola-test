export default function guest({next, router}) {
    const token = JSON.parse(localStorage.getItem("CREDENTIAL"));
    if (token.access_token) {
        return router.push({name: 'dashboard.index'});
    }
    return next();
}
