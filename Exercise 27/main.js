// exercise for promises

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve(["Ahmed", "ali", "farah"]);
      } else {
        ("failed to get user data");
      }
    }, 2000);
  });
}

getUserData()
.then((data) => console.log("array list", data))
.catch((err) =>
    console.log(err));
