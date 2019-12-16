import { expectType } from 'tsd';
import deleteKeys = require('.');

const keys: [] = [];

expectType<Object>(deleteKeys({}, keys));