async function load() {
    let url = 'https://www.localhost/json/config.php';
    let obj = null;

    try {
        obj = await (await fetch(url)).json();
    } catch (e) {
        console.log('The Json you requested could not be obtained');
    }
    console.log(obj);
}
load();