const person = {
    name: 'Cass',
    age: 26,
    address: {
        city: 'London',
        postcode: 'SW1A 1AA'
    },
    hobbies: ['coding', 'rowing', 'complaining']
};

console.log(person.address.city);
console.log(person.hobbies[1]);


//


const cohort = {
    name: 'January2023',
    id: '0123',
    students: ['Cass', 'James', 'Ed']
}

const cohortFormatter = (cohort) => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`)
};

cohortFormatter(cohort);