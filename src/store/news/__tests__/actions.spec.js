import { getNewsRequest, GET_NEWS_REQUEST } from '../actions';

describe('getNewsReq', () => {
    it('return obj with predefined type', () => {
        const expected = {
            type: GET_NEWS_REQUEST,
        };

        const received = getNewsRequest();

        expect(received).toEqual(expected);
    });
});