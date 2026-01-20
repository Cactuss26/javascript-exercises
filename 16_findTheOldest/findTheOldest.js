const findTheOldest = function(people) {
    for (person of people) {
        if (!("yearOfDeath" in person)) {
            currentDate = new Date();
            person.yearOfDeath = Number(currentDate.getFullYear());
        }
    }

    people = people.map(person => {
        const obj = {
            name: person.name,
            age: person.yearOfDeath - person.yearOfBirth,
        }
        return obj;
    })

    people.sort((a, b) => b.age - a.age);

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
