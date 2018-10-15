const students = ['Robert', 'Ania', 'Anka', 'Tri', 'Nico'];

// students.forEach(function(student) {
//     console.log(student)
// })

// students

const studentNameLenght = students.map(function (student){
    return student.length; 
})
console.log (studentNameLenght);
console.log (students);