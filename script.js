document.addEventListener("DOMContentLoaded", function() {
    const loadScheduleButton = document.getElementById("loadScheduleButton");
    const scheduleInfo = document.getElementById("scheduleInfo");
    loadScheduleButton.addEventListener("click", function() {
        scheduleInfo.innerText = "IPL 2024 Schedule:\nMatch 1: Team A vs Team B\nMatch 2: Team C vs Team D\nMatch 3: Team E vs Team F";
    });

    const loadStatsButton = document.getElementById("loadStatsButton");
    const statsInfo = document.getElementById("statsInfo");
    loadStatsButton.addEventListener("click", function() {
        statsInfo.innerText = "IPL 2024 Stats:\nTotal Matches: 60\nTotal Runs Scored: 5000\nTotal Wickets Taken: 250\nTop Run Scorer: Player X\nTop Wicket Taker: Player Y";
    });
});
