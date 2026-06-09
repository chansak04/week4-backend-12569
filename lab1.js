"use strict";
function fetchFromSever(age, name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name, age });
        }, 1000);
    });
}
async function main() {
    const user = await fetchFromSever(30, "Alice");
    console.log(user);
}
main();
