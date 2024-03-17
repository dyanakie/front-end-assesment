import { repeat, getMultiSelected, timestampToDays, generateId } from '../utils';

describe('Utilities', () => {
    describe('repeat function', () => {
        it('creates an array of the specified length with incremental values starting from 0', () => {
            expect(repeat(5)).toEqual([0, 1, 2, 3, 4]);
            expect(repeat(0)).toEqual([]);
            expect(repeat(1)).toEqual([0]);
        });
    });

    describe('getMultiSelected function', () => {
        it('returns an array of selected option values', () => {
            const mockSelectElement = {
                options: [
                    { value: '1', selected: false },
                    { value: '2', selected: true },
                    { value: '3', selected: true },
                ],
            };
            expect(getMultiSelected(mockSelectElement)).toEqual(['2', '3']);
        });
    });

    describe('timestampToDays function', () => {
        it('converts milliseconds to days', () => {
            const millisecondsInADay = 24 * 60 * 60 * 1000;
            expect(timestampToDays(millisecondsInADay)).toEqual(1);
            expect(timestampToDays(millisecondsInADay * 2)).toEqual(2);
            expect(timestampToDays(0)).toEqual(0);
        });
    });
});