import {applyFilter} from '../../src/utils/urlService';

describe('urlService Test', () => {
  it('default', () => {
    const filter = {};

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/');
  });

  it('cookbook', () => {
    const filter = {cookbookId: '1'};

    const url = applyFilter(filter);

    expect(url).toBe('/cookbooks/1');
  });

  it('page', () => {
    const filter = {count: 10};

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/?page=2');
  });

  it('owner', () => {
    const filter = {ownerId: 'me'};

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/?user=me');
  });

  it('sortBy', () => {
    const filter = {sortBy: 'rating'};

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/?sort=rating');
  });

  it('favorite', () => {
    const filter = {favorite: 'True'};

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/?favorite=True');
  });

  it('duration', () => {
    const filter = {maxDuration: 10};

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/?duration=10');
  });

  it('difficulty', () => {
    const filter = {difficulty: 'Mittel'};

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/?difficulty=Mittel');
  });

  it('ingredients', () => {
    const filter = {
      ingredients: ['zutat1', 'zutat2'],
    };

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/?ingredients=zutat1+zutat2');
  });

  it('search', () => {
    const filter = {
      search: ['searchWord1', 'searchWord2'],
    };

    const url = applyFilter(filter);

    expect(url).toBe('/recipes/?search=searchWord1+searchWord2');
  });
});
