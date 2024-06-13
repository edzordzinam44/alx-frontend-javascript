export default function handleResponseFromAPI(promise) {
    return promise
    .then(() => {
        return {
            status: 200,
            body: 'success',
        };
    })
    .catch(() => {
        return new Error();
    })
    .finally(() => {
        consolelog('Got a response from API');
    });
}