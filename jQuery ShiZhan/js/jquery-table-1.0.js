;
(function($) {
	$.fn.table = function(options) {
		var defaults = {
			//各种参数，各种属性
			evenRowClass: 'evenRow',
			oddRowClass: 'oddRow',
			currentRowClass: 'currentRow',
			eventType: 'mouseover',
			eventType2: 'mouseout'
		}
		var options = $.extend(true, defaults, options);
		this.each(function() {
			//实现功能代码
			//偶数行
			$(this).find("tr:even").addClass(options.evenRowClass);
			//奇数行
			$(this).find("tr:odd").addClass(options.oddRowClass);
			/*$(this).find('tr').mouseover(function() {
				$(this).addClass(options.currentRowClass);
			}).mouseout(function() {
				$(this).removeClass(options.currentRowClass);
			});*/
			$(this).find('tr').bind(options.eventType, function() {
				$(this).addClass(options.currentRowClass);
			});
			$(this).find('tr').bind(options.eventType2, function() {
				$(this).removeClass(options.currentRowClass);
			});
		});
	}
})(jQuery);