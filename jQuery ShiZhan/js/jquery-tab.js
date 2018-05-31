;
(function($) {
	$.fn.tab = function(options) {
		var defaults = {
			//各种参数，各种属性
			currentClass: 'current',
			tabNav: '.tabNav>li',
			tabContent: '.tabContent>div',
			eventType: 'click'
		}
		var options = $.extend(true, defaults, options);
		this.each(function() {
			//实现功能代码
			var _this = $(this);
			_this.find(options.tabNav).bind(options.eventType, function() {
				$(this).addClass(options.currentClass);
				$(this).siblings().removeClass(options.currentClass);
				var index = $(this).index();
				_this.find(options.tabContent).eq(index).show().siblings().hide();
			});
		});
		return this;
	}
})(jQuery);