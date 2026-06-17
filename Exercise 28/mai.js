// exercise for async/await

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ name: "geedi", id: 2026, class: 12 });
      } else {
       reject ("failed to get user data");
      }
    }, 2000);
  });
}

async function displayUserData() {
  try {
    const user = await getUserData();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}
displayUserData();
