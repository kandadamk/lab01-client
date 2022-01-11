    // take input from the user
    let score = 49

    let grades 
    for(i=0; i<1; i++){
    if (score <= 100 && score >= 80) {
        grades = "A";
    } else if (score <= 79 && score >= 70) {
        grades = "B";
    } else if (score <= 69 && score >= 60) {
        grades = "C";
    } else if (score <= 59 && score >= 50) {
        grades = "D";
    } else {
        grades = "E";
    }
    }
    console.log('Your score is : %d', score);
    console.log("Your grade: "+grades)