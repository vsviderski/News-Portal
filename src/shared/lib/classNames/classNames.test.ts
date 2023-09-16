import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('with additional classes', () => {
        const expected = 'first second third';
        expect(classNames('first', ['second', 'third'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'first second third active';
        expect(
            classNames('first', ['second', 'third'], {
                active: true,
            })
        ).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'first second third';
        expect(
            classNames('first', ['second', 'third'], { active: false })
        ).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'first second third';
        expect(
            classNames('first', ['second', 'third'], {
                active: undefined,
            })
        ).toBe(expected);
    });
});
