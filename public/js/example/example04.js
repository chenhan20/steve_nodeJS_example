//example01
$( "#button_1" ).click(function() {
    console.log($("#inputBox").val());
    var change=change_string($("#inputBox").val());
    console.log(change);    
    $("#example_01").html(change);
});

var change_string=function(s){
    var s;
    var s_list=s.split("");
    var return_s="";
    for(var i=s_list.length-1;i>=0;i--)
    {
        return_s=return_s+s_list[i];
    }
    return return_s;
}
//example02

$( "#button_2" ).click(function() {
    var inputBox_01=$("#inputBox_01").val();
    var inputBox_02=$("#inputBox_02").val();
    var list_01=inputBox_01.split("").sort().join();
    var list_02=inputBox_02.split("").sort().join();
    
    $("#example_02").text(list_01==list_02)//jquery 的.html()方法無法傳遞false，用test才行
});
//example03 尚未完成


$( "#button_3" ).click(function() {
    var number_01=$("#inputBox_03").val();
    $("#example_03").text("結果:"+number_01)
    $("div.example_03").html("");
});