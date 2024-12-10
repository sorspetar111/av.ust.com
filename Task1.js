
/*

javascript

Calculate the Number of Days Between Two Dates . findDays(11/02/2022, 22/03/2022) => 42


*/


function findDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24) + 1;
    return daysDifference;
}

// call test
console.log(findDays("02/11/2022", "03/22/2022")); // Output: 42
