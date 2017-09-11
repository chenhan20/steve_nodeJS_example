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
//example03 
$( "#button_3" ).click(function() {
    var number_01=$("#inputBox_03").val();
    var number_01_size=number_01.length;
    //先判斷一開始的輸入，若個位數就直接顯示了
    if(isNaN(number_01)){
        alert("請輸入數字謝謝~");
        return;
    }else if(number_01_size<=1){
        $("#example_03").text("結果:"+number_01)
        return;
    }
    
    var number_list=number_01.split("");
    var number_sum=0;    
    while(number_01_size>1){
        for(var s=0;s<number_01_size;s++){
            number_sum = number_sum+parseInt(number_list[s]);    
            console.log(number_sum.toString().length);              
        }
        //加總完之後，會將size與list都重製，再去判斷是否為1位數了
        //若沒有，就會將number_sum歸零後再計算一次
        number_01_size=number_sum.toString().length;
        number_list=number_sum.toString().split("");
        if(number_01_size>1){
            number_sum=0;
        }
    }
    $("#example_03").text("結果:"+number_sum)
});