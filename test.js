import test from 'ava';
import deleteKeys from '.';

const obj = {
	name: 'abraham',
	last: 'hernandez',
	_id: '03773',
	phone: '800-000-0000'
};

const expected = {
	name: 'abraham',
	last: 'hernandez'
};

test('Main', t => {
	t.deepEqual(deleteKeys(obj, ['_id', 'phone']), expected);
});
