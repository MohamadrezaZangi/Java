const users = [
  {
    username: "marsh",
    password: "m1122",
    role: "sa",
  },
  {
    username: "albert",
    password: "a3344",
    role: "ad",
  },
  {
    username: "rally22",
    password: "r5566",
    role: "us",
  },
];

const inputUser = prompt("Enter User Name");
let usernum = null;
let inputPass;
const loginshow = document.querySelector("p");

for (let i = 0; i < users.length; i++)
  if (users[i].username == inputUser) usernum = i;

if (usernum != null) inputPass = prompt("Enter User password");
if (usernum === null) loginshow.innerText = "User Not Found";

if (inputPass === users[usernum].password)
  loginshow.innerText = `Username:${users[usernum].username} \nPassword:${users[usernum].password}  \nRole:${users[usernum].role}`;
else loginshow.innerText = "password Invalid";
