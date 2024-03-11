function calculateTimeElapsed() {
        
    const dobInput = document.getElementById('dob').value;
    const timeInput = document.getElementById('time').value;
    
    const datetimeString = dobInput + " " + timeInput;
    const momentObject = moment.tz(datetimeString, "YYYY-MM-DD HH:mm");

    
    const momentObject = moment(datetimeString, "YYYY-MM-DD HH:mm");
    const totalMinutes = moment().diff(momentObject, 'minutes');
    const totalHours = moment().diff(momentObject, 'hours')

    const years = moment().diff(momentObject, 'years');
    const months = moment().diff(momentObject, 'months') % 12;
    const weeks = moment().diff(momentObject, 'weeks') % 4;
    const days = moment().diff(momentObject, 'days') % 7;
    const hours = moment().diff(momentObject, 'hours') % 24;
    const minutes = moment().diff(momentObject, 'minutes') % 60;
    }
    
    // AGE
    document.getElementById('age').innerText = `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours, and ${minutes} minutes old and counting...`;

    // HEARTBEATS
    const averageHeartbeats = totalMinutes * 80;
    const formattedHeartbeats = averageHeartbeats.toLocaleString();
    // 80 bpm is average
    document.getElementById('heartbeats').innerText = `${formattedHeartbeats} heartbeats and counting...`;

    // BREATHS
    const averageBreaths = totalMinutes * 15;
    const formattedBreaths = averageBreaths.toLocaleString();
    // 15 breaths per minute is average
    document.getElementById('breaths').innerText = `${formattedBreaths} breaths and counting...`;

    // COFFEE
    const averageCoffee = totalMinutes / 720;
    const formattedCoffee = averageCoffee.toLocaleString();
    // 2 cups per day is average
    document.getElementById('coffee').innerText = `${formattedCoffee} cups of coffee and counting...`;

    // BEDS
    const averageBeds = totalMinutes / 1440;
    const formattedBeds = averageBeds.toLocaleString();
    // 1 bed per day is average
    document.getElementById('beds').innerText = `${formattedBeds} beds made and counting...`;

    // MEALS
    const averageMeals = totalMinutes / 480;
    const formattedMeals = averageMeals.toLocaleString();
    // 3 meals per day is average
    document.getElementById('meals').innerText = `${formattedMeals} meals made and counting...`;

    // SLEEP
    const averageSleep = totalHours / 24 * 8 ;
    const formattedSleep = averageSleep.toLocaleString();
    // 8 hours of sleep per day is average
    document.getElementById('sleep').innerText = `${formattedSleep} hours slept and counting...`;

}
