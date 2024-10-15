const user1 = {
    firstname : "Satya",
    lastname : "Kumar",
    fullname : function (city, country){
        return this.firstname + " " + this.lastname + " " + city + " " + country
    }
}

const user2 = {
    firstname: "faraj",
    lastname: "nasir"
}

console.log(user1.fullname.call(user2, "Pune", "India"));

console.log(user1.fullname.apply(user2, ["Pune", "India"]));

const result = user1.fullname.bind(user2, "Pune", "India");
console.log(result());