const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    {
        firstName: 'Jonathan',
        lastName: 'Baughn',
        role: 'Enterprise Instructor',
    },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
];
//1. Mapealo a un arreglo de strings: firstName-lastName: role
const formatFLUsers = users.map(
    user => `${user.firstName}-${user.lastName}: ${user.role}`
);

console.log(formatFLUsers);
//2. Filtra aquellos usuarios con role de Full Stack Resident
const fullStackResidentsUsers = users.filter(
    user => user.role === 'Full Stack Resident'
);

console.log(fullStackResidentsUsers);

//3. Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo
//con los objetos usuarios que tienen dicho role
const rolesObject = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
}, {});

console.log(rolesObject);
//4. Genera una función de búsqueda de un usuario por firstName con find
function findUserByFirstName(firstName) {
    if (users.find(user => user.firstName === firstName)) {
        return firstName;
    }
    return 'Usuario no encontrado';
}

console.log(findUserByFirstName('asdBradley'));
console.log(findUserByFirstName('Bradley'));
