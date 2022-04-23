function display_clockTime() {
    var date = new Date(),
        timePeriod = date.getHours() >= 12 ? " PM" : " AM",
        getMonth = date.getMonth() + 1,
        getHours = date.getHours(),
        getMins = date.getMinutes(),
        getSecs = date.getSeconds();
        format_getMonth = getMonth < 10 ? "-0" + getMonth : "-" + getMonth,
        format_getHours = getHours > 12 ? getHours-12 : getHours;
        format_getMins = getMins < 10 ? ":0" + getMins : ":" + getMins,
        format_getSecs = getSecs < 10 ? ":0" + getSecs : ":" + getSecs,
        i = "🕐 "+ date.getDate().toString() + format_getMonth +  "-" + date.getFullYear();
    (i = i + " ◃▹ " + format_getHours + format_getMins + format_getSecs + timePeriod), (document.getElementById("clockTime").innerHTML = i), display_c5();
}
function display_c5() {
    mytime = setTimeout("display_clockTime()", 1e3);
}

display_clockTime();
