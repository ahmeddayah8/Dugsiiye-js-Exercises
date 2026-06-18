// exercise for https get method

async function getUserData() {
  try {
    console.log("star fetching data");

    const user = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!user.ok) {
      throw error("https error! status: ${user.status}");
    }

    const data = await user.json();

    console.log("user:", data);
  } catch (errror) {
    console.error("error fetching data:", errror);
  }
}

getUserData();
