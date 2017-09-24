    /** 
     * 計算牌位價格
     * old_rank_1、old_rank_2、old_rank_3 為目前牌位
     * new_rank_1、new_rank_2、new_rank_3 為目標牌位
     * 計算出價格，牌位區間的價格目前先寫死，之後可能吃DB
     * 先寫出銅牌的以此類推
     * 
     * 
    */

$('.btn_search').click(function(){
    //以下為牌位價格 
    //=================銅牌=============================
    var Bronze=700;
    var Bronze_up=850;
    var Bronze_one=120;
    var Bronze_bo3=250;
    var Bronze_bo5=350;
    //================抓取輸入資訊=============================

    var old_rank_1=$('#sel1').val();
    var old_rank_2=$('#sel2').val();
    var old_rank_3=$('.old_input_point').val();
    var new_rank_1=$('#sel3').val();
    var new_rank_2=$('#sel4').val();
    var new_rank_3=$('.new_input_point').val();
    var price=0;
    var old_lavel;              //以數字代表牌位
    var old_lavel_area;         //以數字代表區間
    var new_lavel;              //以數字代表牌位
    var new_lavel_area;         //以數字代表區間
    console.log("old:"+old_rank_1+old_rank_2+old_rank_3);
    console.log("new:"+new_rank_1+new_rank_2+new_rank_3);
    //===============輸入資訊先判斷(避免下面每個if都要判斷)
    //目前區間
    switch (old_rank_1){
        case "銅牌Bronze":
            old_lavel=7;
            break;
        case "銀牌Silver":
            old_lavel=6;
            break;
        case "金牌Gold":
            old_lavel=5;
            break;
        case "白金Platinum":
            old_lavel=4;
            break;
        case "鑽石Diamond":
            old_lavel=3;
            break;
        case "大師Master":
            old_lavel=2;
            break;
        case "菁英Challenger":
            old_lavel=1;
            break;
    }
    switch (old_rank_2){
        case "五區(V)":
            old_lavel_area =5;
            break;
        case "四區(IV)":
            old_lavel_area =4;
            break;
        case "三區(III)":
            old_lavel_area =3;
            break;
        case "二區(II)":
            old_lavel_area =2;
            break;
        case "一區(I)":
            old_lavel_area =1;
            break;
    }
    //目標區間
    switch (new_rank_1){
        case "銅牌Bronze":
            new_lavel=7;
            break;
        case "銀牌Silver":
            new_lavel=6;
            break;
        case "金牌Gold":
            new_lavel=5;
            break;
        case "白金Platinum":
            new_lavel=4;
            break;
        case "鑽石Diamond":
            new_lavel=3;
            break;
        case "大師Master":
            new_lavel=2;
            break;
        case "菁英Challenger":
            new_lavel=1;
            break;
    }
    switch (new_rank_2){
        case "五區(V)":
            new_lavel_area =5;
            break;
        case "四區(IV)":
            new_lavel_area =4;
            break;
        case "三區(III)":
            new_lavel_area =3;
            break;
        case "二區(II)":
            new_lavel_area =2;
            break;
        case "一區(I)":
            old_lavel_area =1;
            break;
    }

    //==============價格計算================================
    debugger;
    
    var old_point=Math.floor(old_rank_3/20);
    var new_point=Math.floor(new_rank_3/20);

    var rank_price=Bronze_one;

    if(old_lavel<new_lavel){
        
    }else{

    }


    // if(old_lavel==new_lavel){
    //     if(old_lavel_area==new_lavel_area){
    //         //==============代表同牌位為同區 直接算勝差
    //         price=(new_point-old_point)*rank_price;
    //         console.log((new_point-old_point)*rank_price);
    //     }else{
    //         //==============代表同牌位為不同區 算區的$(若原本有分或要買到20分以上需再加上勝差$)     
            
    //     }
    // }else{

    // }

    //==============結果====================================
    $('.title_01').text("從"+old_rank_1+old_rank_2+old_rank_3+"分"+"~"+new_rank_1+new_rank_2+new_rank_3+"分");
    $('.text_01').text("價格是"+price)
})