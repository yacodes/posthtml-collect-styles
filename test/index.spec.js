import test from 'ava';
import posthtml from 'posthtml';
import plugin from '..';

test('Must replace styles to head if no selector provided', async t => {
	const source = '<html><head></head><body><style>.red {color: red;}</style><style>.white {color: white;}</style></body></html>';
	const expected = '<html><head><style>.red {color: red;}.white {color: white;}</style></head><body></body></html>';
	const {html} = await posthtml().use(plugin()).process(source);
	t.is(expected, html);
});

test('Must replace styles to selector if no selector provided', async t => {
	const source = '<html><head></head><body><style>.red {color: red;}</style><style>.white {color: white;}</style></body></html>';
	const expected = '<html><head></head><body><style>.red {color: red;}.white {color: white;}</style></body></html>';
	const {html} = await posthtml().use(plugin('body')).process(source);
	t.is(expected, html);
});

test('Must not replace content in selector', async t => {
	const source = '<html><head><title>Title</title></head><body><style>.red {color: red;}</style><style>.white {color: white;}</style></body></html>';
	const expected = '<html><head><title>Title</title><style>.red {color: red;}.white {color: white;}</style></head><body></body></html>';
	const {html} = await posthtml().use(plugin()).process(source);
	t.is(expected, html);
});
