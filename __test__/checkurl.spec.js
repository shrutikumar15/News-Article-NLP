import { validateURL } from '../src/client/js/validURL';

describe('Validate URL', () => {
    it('should give result for valid url', () => {

        const input = 'https://www.hindustantimes.com/bollywood/sushant-singh-rajput-s-friend-says-actor-s-family-asked-him-to-give-statement-against-rhea-chakraborty-to-police-report/story-L6v1Ilp1TzvGlSW24SlY6K.html'
        expect(validateURL(input)).toEqual(true);
    });
});

describe('Validate URL', () => {
    it('should not give result for invalid url', () => {

        const input = '.googlenews/sportse3m2km52319576'
        expect(validateURL(input)).toEqual(false);
    });
  });