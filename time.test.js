import {test} from 'node:test';import assert from 'node:assert/strict';import {elapsed} from './time.js';
test('instante inicial usa Brasília e conta dias completos',()=>{assert.equal(new Date('2026-10-10T12:48:00-03:00').toISOString(),'2026-10-10T15:48:00.000Z');assert.deepEqual(elapsed('2026-10-10T12:48:00-03:00',Date.parse('2026-10-11T16:49:02Z')),[1,1,1,2]);});
test('não exibe valores negativos antes do começo',()=>assert.deepEqual(elapsed('2026-10-10T12:48:00-03:00',0),[0,0,0,0]));
