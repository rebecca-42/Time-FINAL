function calculateTimeElapsed() {
    const dobInput = document.getElementById('dob').value;
    const timeInput = document.getElementById('time').value;

    const datetimeString = dobInput + " " + timeInput;

    const momentObject = moment(datetimeString, "YYYY-MM-DD HH:mm");
    const totalMinutes = moment().diff(momentObject, 'minutes');

    const years = moment().diff(momentObject, 'years');
    const months = moment().diff(momentObject, 'months') % 12;
    const weeks = moment().diff(momentObject, 'weeks') % 4;
    const days = moment().diff(momentObject, 'days') % 7;
    const hours = moment().diff(momentObject, 'hours') % 24;
    const minutes = moment().diff(momentObject, 'minutes') % 60;
    
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

}
