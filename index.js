'use strict';

var match = require('posthtml-match-helper');

module.exports = function plugin(selector) {
	selector = selector || 'head';

	return function parse(tree) {
		var styles = [];

		tree.match(match('style'), function (node) {
			styles.push(node.content);
		});

		tree.match(match(selector), function (node) {
			var element = {
				tag: 'style',
				content: styles
			};

			if (node.content) {
				node.content.push(element);
			} else {
				node.content = element;
			}

			return node;
		});

		return tree;
	};
};
