function display_clockTime() {
    var e = new Date(),
        t = e.getHours() >= 12 ? " PM" : " AM",
        gm = e.getMonth() + 1,
        m = gm < 10 ? "-0" + gm : "-" + gm,
        i = "🕐 "+ e.getDate().toString() + m +  "-" + e.getFullYear();
    (i = i + " - " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + t), (document.getElementById("clockTime").innerHTML = i), display_c5();
}
function display_c5() {
    mytime = setTimeout("display_clockTime()", 1e3);
}

display_clockTime();
