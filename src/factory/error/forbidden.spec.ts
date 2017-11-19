/**
 * ForbiddenErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import ForbiddenError from './forbidden';
import { WaiterError } from './waiter';

describe('new ForbiddenError()', () => {
    it('正しくインスタンス化できる', async () => {
        const message = 'test message';
        const error = new ForbiddenError(message);
        assert(error instanceof Error);
        assert.equal(error.message, message);
        assert.equal(error.name, WaiterError.name);
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', async () => {
        const error = new ForbiddenError();
        assert(error instanceof Error);
        assert.equal(error.name, WaiterError.name);
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});
