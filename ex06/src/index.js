const firstName = (firstName) => {
  return firstName.toUpperCase();
};
const lastName = (lastName) => {
  return lastName.toLowerCase();
};

console.log(firstName("Neko"));
console.log(lastName("Nekic"));

exports.firstName = firstName;
exports.lastName = lastName;
