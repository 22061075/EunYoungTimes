$(document).ready(function() {
    var d = new Date();
    // $("#jsDate").text(d);

    var year = d.getFullYear();
    $(".jsDate").eq(0).text(year);
    var month = d.getMonth() + 1;
    $(".jsDate").eq(1).text(month);
    var date = d.getDate();
    $(".jsDate").eq(2).text(date);
});