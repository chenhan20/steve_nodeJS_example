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
//看解答後發現其實只要while(sum>10)就進迴圈繼續做，根本不用判斷是幾位數QQ
$( "#button_3" ).click(function() {
    var number_01=$("#inputBox_03").val();
    var number_01_size=number_01.length;
    //先判斷一開始的輸入，若個位數就直接顯示了
    if(isNaN(number_01)||number_01==''){
        $("#modal-title").text("錯誤!!!");
        $("#modal-body-p").text("請輸入數字好嗎??");
        $("#myModal").modal();
        return;
    }else if(number_01_size<=1){
        $("#example_03").text("結果:"+number_01)
        $("#modal-title").text("輸入格式正確:");
        $("#modal-body-p").text("結果:"+ number_01 +"="+number_01);
        $("#myModal").modal();
        return;
    }
    var string_process="";
    var number_list=number_01.split("");
    var number_sum=0;    
    while(number_01_size>1){
        for(var s=0;s<number_01_size;s++){
            if(s==number_01_size-1){
                string_process += number_list[s];
            }else{
            string_process += number_list[s] + "+";
            }
            number_sum = number_sum+parseInt(number_list[s]);       
        }
        //加總完之後，會將size與list都重製，再去判斷是否為1位數了
        //若沒有，就會將number_sum歸零後再計算一次
        number_01_size=number_sum.toString().length;
        number_list=number_sum.toString().split("");
        if(number_01_size>1){
            string_process += "=" + number_sum + " , ";
            number_sum=0;
        }
    }

    $("#example_03").text("結果:"+number_sum)
    $("#modal-title").text("輸入格式正確:");
    $("#modal-body-p").text("結果:"+ string_process +"="+number_sum);
    $("#myModal").modal();   
});

// example04
$( "#button_4" ).click(function() {
    var string_ABC=$("#inputBox_04").val();
    var regExp = /^[A-Za-z]*$/;
    var boolean_ABC=regExp.test(string_ABC);
    //
    //debugger;
    if(!boolean_ABC){
        $("#myModa2").modal(); 
        $("#strong_text_danger").text("錯誤");
        $("#p_text_danger").text("請輸入英文謝謝");
        return;   
    }
    string_ABC=string_ABC.toUpperCase();//轉大寫
    var string_ABC_list=string_ABC.split("");
    var sum_abc=0;
    var exp=0;
    for(var q=string_ABC_list.length-1;q>=0;q--){
        var charcode=string_ABC.charCodeAt(q);
        var v=string_ABC.charCodeAt(q)-64;
        sum_abc+=v*Math.pow(26,exp++);
    }
        $("#myModa3").modal(); 
        $("#strong_text_success").text("正確");
        $("#p_text_success").text("結果為:"+sum_abc);
}); 
//example05
$('#button_5').click(function(){
    var ex5_val=$('#inputBox_05').val();
    var ex5_split=ex5_val.split(",");



    console.log(ex5_split);
})