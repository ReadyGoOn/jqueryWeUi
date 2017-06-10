 $(".infinite").infinite().on("infinite", function() {
        var self = this;
        if(self.loading) return;
        console.log(self)
        self.loading = true;
        console.log(self);
        setTimeout(function() {
          $(self).find(".content-padded").append("<p>我是加载的新内容。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。我是加载的新内容。。。。。</p>");
          self.loading = false;
        }, 2000);   //模拟延迟
      });

  $('.weui-navbar__item').each(function(index,ele){
      
  });    