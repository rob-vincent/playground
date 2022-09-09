const userInfo = { name: "Vincent", age: 30, address: "Baguio" }

localStorage.setItem("userInfo", JSON.stringify(userInfo))

const x = JSON.parse(localStorage.getItem("userInfo"))

console.log(x)

console.log("Rob Vincent")
