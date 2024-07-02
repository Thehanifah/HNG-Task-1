document.addEventListener("DOMContentLoaded", function() {
    function updateCurrentTimeAndDay() {
        const currentTime = document.getElementById('current-time');
        const currentDay = document.getElementById('current-day');
        const date = new Date();
        
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds} UTC`;
        
        const day = date.toLocaleString('en-US', { weekday: 'long', timeZone: 'UTC' });
        
        currentTime.textContent = ` ${timeString}`;
        currentDay.textContent = ` ${day}`;
    }

    updateCurrentTimeAndDay();

    setInterval(updateCurrentTimeAndDay, 1000);
});


