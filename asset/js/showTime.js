var getDateStr;
function display_clockTime() {
    var date = new Date(),
        timePeriod = date.getHours() >= 12 ? " PM" : " AM",
        getMonth = date.getMonth() + 1,
        getDay = date.getDate(), 
        getHours = date.getHours(),
        getMins = date.getMinutes(),
        getSecs = date.getSeconds(),
        format_getMonth = getMonth < 10 ? "-0" + getMonth : "-" + getMonth,
        format_getDay = getDay < 10 ? "0" + getDay : getDay,
        format_getHours = getHours > 12 ? getHours-12 : getHours;
        format_getMins = getMins < 10 ? ":0" + getMins : ":" + getMins,
        format_getSecs = getSecs < 10 ? ":0" + getSecs : ":" + getSecs,
        i = "🕐 "+ format_getDay + format_getMonth +  "-" + date.getFullYear();

        getDateStr = getMonth.toString()+"-"+getDay.toString()+"-"+date.getFullYear();
        var dateStr = new Date(getDateStr).toLocaleString('en-us', {weekday:'long'});
        var mobile_app_lect = document.getElementById("mobile_app_lect");
        var mobile_app_lab = document.getElementById("mobile_app_lab");
        var iot_lect = document.getElementById("iot_lect");
        var web_secure_lect = document.getElementById("web_secure_lect");
        var web_secure_lab = document.getElementById("web_secure_lab");
        var human_relation_lect = document.getElementById("human_relation_lect");
        var seminar_lect = document.getElementById("seminar_lect");
        var machine_learning_lect = document.getElementById("machine_learning_lect");
        var machine_learning_lab = document.getElementById("machine_learning_lab");
        var asp_lect = document.getElementById("asp_lect");
        var asp_lab = document.getElementById("asp_lab");
        var software_engineering_lect = document.getElementById("software_engineering_lect");
        var titleToLearning = document.getElementById("titleToLearning");

        //For debugging only
        // console.log(dateStr)

        if(dateStr == "Monday"){
            mobile_app_lect.setAttribute("class", "link");
            mobile_app_lab.setAttribute("class", "link");
            iot_lect.setAttribute("class", "link");
            titleToLearning.setAttribute("class","titleToLearning_show");
        }

        if(dateStr == "Tuesday"){
            web_secure_lab.setAttribute("class", "link");
            web_secure_lect.setAttribute("class", "link");
            human_relation_lect.setAttribute("class", "link");
            titleToLearning.setAttribute("class","titleToLearning_show");
        }

        if(dateStr == "Wednesday"){
            //
        }

        if(dateStr == "Thursday"){
            seminar_lect.setAttribute("class", "link");
            asp_lect.setAttribute("class", "link");
            machine_learning_lect.setAttribute("class", "link");
            titleToLearning.setAttribute("class","titleToLearning_show");
        }

        if(dateStr == "Friday"){
            machine_learning_lab.setAttribute("class", "link");
            software_engineering_lect.setAttribute("class", "link");
            asp_lab.setAttribute("class", "link");
            titleToLearning.setAttribute("class","titleToLearning_show");
        }


  

    (i = i + " ◃▹ " + format_getHours + format_getMins + format_getSecs + timePeriod), (document.getElementById("clockTime").innerHTML = i), display_c5();

}
function display_c5() {
    mytime = setTimeout("display_clockTime()", 1e3);
}







display_clockTime();

