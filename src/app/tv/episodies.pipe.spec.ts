import {EpisodiesPipe} from './episodies.pipe';
import {Episode} from '@models';

describe('EpisodiesPipe', () => {
  let pipe: EpisodiesPipe;

  beforeEach(() => {
    pipe = new EpisodiesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return a string with "s" and "e" before numbers', () => {
    const input: Partial<Episode> = {
      season: 20,
      number: 10
    };

    expect(pipe.transform(input)).toBe('s20e10');
  });

  it('return a properly added string', () => {
    const input: Partial<Episode> = {
      season: 2,
      number: 1
    };

    expect(pipe.transform(input)).toBe('s02e01');
  });

  it('returns uppercase if addition param is "true"', () => {
    const input: Partial<Episode> = {
      season: 2,
      number: 1
    };
    expect(pipe.transform(input, true)).toBe('S02E01');
  });
});
