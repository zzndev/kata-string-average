const stringAverage = require('./string-average');

describe('String Average', () => {
    it('should be a function', () => {
        expect(typeof stringAverage).toBe('function');
    });
    
    it('should return n/a for invalid number.', () => {
        expect(stringAverage('onetwo')).toBe('n/a');
    });
    
    it('should be the same for single-number input.', () => {
        expect(stringAverage('one')).toBe('one');
        expect(stringAverage('two')).toBe('two');
        expect(stringAverage('three')).toBe('three');
        expect(stringAverage('four')).toBe('four');
        expect(stringAverage('five')).toBe('five');
        expect(stringAverage('six')).toBe('six');
        expect(stringAverage('seven')).toBe('seven');
        expect(stringAverage('eight')).toBe('eight');
        expect(stringAverage('nine')).toBe('nine');
        expect(stringAverage('zero')).toBe('zero');
        expect(stringAverage('abc')).toBe('n/a');
    });

    it('should calculate the whole-number average.', () => {
        expect(stringAverage('one three')).toBe('two');
        expect(stringAverage('six four two')).toBe('four');
        expect(stringAverage('six four two eight')).toBe('five');
        expect(stringAverage('six four two eight zero')).toBe('four');
    });

    it('should floor the decimal-number average.', () => {
        expect(stringAverage('one four')).toBe('two');
        expect(stringAverage('six four three')).toBe('four');
    });
});