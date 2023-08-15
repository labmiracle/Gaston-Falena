const users = [
    {
        login: 'knuth',
        firstName: 'Donald',
        lastName: 'Knuth',
        likes: ['C', 'Unix'],
    },
    {
        login: 'norvig',
        firstName: 'Peter',
        lastName: 'Norvig',
        likes: ['IA', 'Búsqueda', 'NASA', 'Marte'],
    },
    {
        login: 'mfowler',
        firstName: 'Martin',
        lastName: 'Fowler',
        likes: ['Patrones de Diseño', 'Refactorización'],
    },
    {
        login: 'kent',
        firstName: 'Kent',
        lastName: 'Beck',
        likes: ['TDD', 'wikis', 'Patrones de Diseño'],
    },
];

const lookup = (login, property) => {
    const user = users.find(user => user.login === login);

    if (!user) {
        throw new Error(`Could not find user ${login}`);
    }

    if (!user.hasOwnProperty(property)) {
        throw new Error(`Could not find property ${property}`);
    }

    return user[property];
};

describe('lookup()', () => {
    it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
        const actual = lookup('norvig', 'likes');
        const expected = ['IA', 'Búsqueda', 'NASA', 'Marte'];

        expect(actual).toEqual(expected);
    });

    it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
        const actual = lookup('knuth', 'lastName');
        const expected = 'Knuth';

        expect(actual).toEqual(expected);
    });

    it('with unknown user should throw an error with the correct message', () => {
        expect(() => {
            lookup('nobody', 'likes');
        }).toThrow(/Could not find user/);
    });

    it('with unknown property should throw an error the correct message', () => {
        expect(() => {
            lookup('mfowler', 'noprop');
        }).toThrow(/Could not find property/);
    });
});
