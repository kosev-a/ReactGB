import { FETCH_STATUSES } from "../../../utils/constants";
import { getNewsRequest } from "../actions";
import { newsReducer } from "../reducer";

describe('news reducer', () => {
    it('sets error to null if called with request action', () => {
        const result = newsReducer(
            {
                dataObj: [],
                error: 'some error',
                status: FETCH_STATUSES.IDLE,
            },
            getNewsRequest()
        );

        expect(result.error).toBeNull();
    });
});