(function() {

    var Widget = WAF.require('waf-core/widget'),
    fb = Widget.create('FacebookLike');
    
    fb.prototype.init = function() {
    	
    this.node.innerHTML = '<div class="waf-container"><iframe src="//www.facebook.com/plugins/likebox.php?href='+this.options.page+'&width='+this.options.width+'&height='+this.options.height+'&colorscheme='+this.options.colorscheme+'&show_faces='+this.options.show_faces+'&header='+this.options.header+'&stream='+this.options.stream+'&show_border='+this.options.show_border+'&appId='+this.options.appid+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:290px;" allowTransparency="true"></iframe></div>';
}
})();