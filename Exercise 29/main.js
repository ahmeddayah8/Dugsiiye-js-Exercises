// jyson
async function fetchData() {
    console.log("star fetching data");
    const response = await fetch ('data.json');
    console.log("response: ", response);
}

fetchData();
