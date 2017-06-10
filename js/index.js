$(function(){
    $('.container').pullToRefresh().on("pull-to-refresh", function() {
        console.log(this);
        //do something
        setTimeout(function(){
            $('.container').pullToRefreshDone();
        },2000);
    });
    $('.container').eq(0).show();
    $('.container').each(function(index,el){
        this.number = 0 ;
    })

     $('.container').infinite().on("infinite", function() {
         var that = this ;
         console.log(that)
        if(that.loading) return;
        that.loading = true;
        that.number++;
        console.log(that.number);
        if(that.number <= 3){
            console.log(11);
             setTimeout(function() {
                $(that).find(".ulList").append("<li>《世界著名计算机教材精选·人工智能:一种现代的方法(第3版)》英文版有1100多页，教学内容非常丰富，不但涵盖了人工智能基础、问题求解、知识推理与规划等经典内容，而且还包括不确定知识与推理、机器学习、通讯感知与行动等专门知识的介绍。目前我们为本科生开设的学科基础必修课“人工智能导论”主要介绍其中的经典内容，而研究生必修的核心课程“人工智能原理”主要关注其中的专门知识。其实《世界著名计算机教材精选·人工智能:一种现代的方法(第3版)》也适合希望提高自身计算系统设计水平的广大应用计算技术的社会公众，对参加信息学奥林匹克竞赛和ACM程序设计竞赛的选手及其教练员也有一定的参考作用。</li>");
                that.loading = false;
                }, 2000);
        }else{
            console.log(12);
             setTimeout(function() {
                $(that).find('.weui-loadmore_loading').hide();
                $(that).find('.weui-loadmore_line').show();
            }, 2000);
        }
      });
    $('.head_content div:first').css('color','#f00');
    $('.head_content div').on('click',function(){
        var that = this;
        var ind = '';
        $('.head_content div').each(function(index,element) {
            if(this == that){
                ind = index;
                $('.item').css('color',"#000");
                $(that).css('color','#f00');
                $('.botomLine').animate({left:index*25+'%'},300);
            }
        });
        $('.container').hide();
        console.log(ind);
        $('.container').eq(ind).show();

    });
});