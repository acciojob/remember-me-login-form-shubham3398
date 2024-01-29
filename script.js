//your JS code here. If required.
let users = {};
let username; 
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let user = {};
  user.username = form.username.value;
  user.password = form.password.value;

  username = user.username;

  console.log(user);

  if(users[user.username]){
    // console.log("already saved");
    const button = document.createElement("button");
    button.setAttribute("id", "existing");
    button.textContent = "Login as existing user";
    button.addEventListener("click", function(e) {
        alert(`Logged in as ${username}`)
    })
    form.appendChild(button);
  }else{
    // console.log("not already saved");
    alert(`Logged in as ${user.username}`);
  }

  if (form.remember_me.checked === true) {
    // console.log("user checked remember me");

    if (!users[user.username]) {
      users[user.username] = user;
    }
  }
});