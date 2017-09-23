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
    //=================================================

    var old_rank_1=$('#sel1').val();
    var old_rank_2=$('#sel2').val();
    var old_rank_3=$('.old_input_point').val();
    var new_rank_1=$('#sel3').val();
    var new_rank_2=$('#sel4').val();
    var new_rank_3=$('.new_input_point').val();
    var price=0;
    console.log("old:"+old_rank_1+old_rank_2+old_rank_3);
    console.log("new:"+new_rank_1+new_rank_2+new_rank_3);

    //==============價格計算================================
    
    //==============結果====================================
    $('.title_01').text("從"+old_rank_1+old_rank_2+old_rank_3+"分"+"~"+new_rank_1+new_rank_2+new_rank_3+"分");
    $('.text_01').text("價格是"+price)
})