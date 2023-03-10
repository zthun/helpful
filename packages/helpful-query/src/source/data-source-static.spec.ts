import { range } from 'lodash';
import { beforeEach, describe, expect, it } from 'vitest';
import { ZDataFilterFields } from '../filter/data-filter-fields';
import { IZFilter } from '../filter/filter';
import { ZFilterBinaryBuilder } from '../filter/filter-binary';
import { ZFilterCollectionBuilder } from '../filter/filter-collection';
import { ZFilterLogicBuilder } from '../filter/filter-logic';
import { ZFilterUnaryBuilder } from '../filter/filter-unary';
import { IZDataMatch } from '../match/data-match';
import { ZDataSearchFields } from '../search/data-search-fields';
import { ZDataSearchText } from '../search/data-search-text';
import { ZSortBuilder } from '../sort/sort';
import { IZDataRequest, ZDataRequestBuilder } from './data-request';
import { ZDataSourceStatic } from './data-source-static';

describe('ZDataSourceStatic', () => {
  let data: any[];
  let search: IZDataMatch<any, string> | undefined;
  let filter: IZDataMatch<any, IZFilter> | undefined;

  function createTestTarget() {
    return new ZDataSourceStatic(data, search, filter);
  }

  beforeEach(() => {
    search = undefined;
    filter = undefined;

    data = range(1, 1101);
  });

  describe('Count', () => {
    it('should return the total count of the data unpaginated', async () => {
      // Arrange
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().page(2).size(5).build();
      // Act
      const result = await target.count(request);
      // Assert
      expect(result).toEqual(data.length);
    });

    it('should return the total count of the data after a search', async () => {
      // Arrange
      search = new ZDataSearchText();
      data = ['Batman', 'Superman', 'Flash', 'Wonder Woman', 'Green Lantern', 'John Constantine'];
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().search('man').build();
      // Act
      const result = await target.count(request);
      // Assert.
      expect(result).toEqual(3);
    });

    it('should return the total count of the data after a filter', async () => {
      // Arrange
      filter = new ZDataFilterFields();
      data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const target = createTestTarget();
      const request = new ZDataRequestBuilder()
        .filter(new ZFilterBinaryBuilder().greaterThan().value(4).build())
        .build();
      // Act.
      const result = await target.count(request);
      // Assert.
      expect(result).toEqual(5);
    });
  });

  describe('Retrieve', () => {
    async function shouldResultInPage(expected: number[], request: IZDataRequest) {
      const target = createTestTarget();
      // Act.
      const result = await target.retrieve(request);
      // Assert.
      expect(result).toEqual(expected);
    }

    it('should return an empty page if the page size goes beyond the final page', async () => {
      const request = new ZDataRequestBuilder().page(1000).size(1000).build();
      await shouldResultInPage([], request);
    });

    it('should return the entire data set if the size is infinite and the page is equal to 1', async () => {
      const request = new ZDataRequestBuilder().build();
      await shouldResultInPage(data, request);
    });

    it('should return an empty page if size is infinite, but page is greater than 1', async () => {
      const request = new ZDataRequestBuilder().page(2).build();
      await shouldResultInPage([], request);
    });

    it('should return the requested page', async () => {
      const request = new ZDataRequestBuilder().page(2).size(100).build();
      await shouldResultInPage(range(101, 201), request);
    });

    it('should return the last page remaining data', async () => {
      const request = new ZDataRequestBuilder().page(11).size(100).build();
      await shouldResultInPage(range(1001, 1101), request);
    });

    it('should only return the data that matches a search', async () => {
      // Arrange
      search = new ZDataSearchText();
      data = ['Batman', 'Superman', 'Flash', 'Wonder Woman', 'Green Lantern', 'John Constantine'];
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().search('man').page(2).size(2).build();
      const expected = ['Wonder Woman'];
      // Act
      const result = await target.retrieve(request);
      // Assert.
      expect(result).toEqual(expected);
    });

    it('should only return data that matches a filter', async () => {
      // Arrange
      filter = new ZDataFilterFields();
      data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const target = createTestTarget();
      const _filter = new ZFilterBinaryBuilder().greaterThan().value(4).build();
      const request = new ZDataRequestBuilder().filter(_filter).build();
      const expected = [5, 6, 7, 8, 9];
      // Act.
      const result = await target.retrieve(request);
      // Assert.
      expect(result).toEqual(expected);
    });
  });

  describe('Filter', () => {
    let ranges: number[];
    let objects: { person: { id: number; name: string } }[];

    beforeEach(() => {
      ranges = range(0, 100);
      objects = ranges.map((r) => ({ person: { id: r, name: r.toString() } }));
      data = objects;
    });

    async function assertMatchesData(expected: any[], filter: IZFilter) {
      // Arrange.
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().filter(filter).build();
      // Act.
      const actual = await target.retrieve(request);
      // Assert.
      expect(actual).toEqual(expected);
    }

    describe('Binary', () => {
      describe('Equals', () => {
        it('should match data when the value is exact [path]', async () => {
          await assertMatchesData(
            [data[10]],
            new ZFilterBinaryBuilder().subject('person.id').equal().value(10).build()
          );
        });

        it('should match data when the value is exact [self]', async () => {
          data = ranges;
          await assertMatchesData([10], new ZFilterBinaryBuilder().equal().value(10).build());
        });
      });

      describe('Not Equals', () => {
        it('should match data when the value is different [path]', async () => {
          await assertMatchesData(
            data.filter((d, i) => i !== 10),
            new ZFilterBinaryBuilder().subject('person.id').notEqual().value(10).build()
          );
        });

        it('should match data when the value is different [self]', async () => {
          data = ranges;
          await assertMatchesData(
            ranges.filter((i) => i !== 10),
            new ZFilterBinaryBuilder().notEqual().value(10).build()
          );
        });
      });

      describe('Greater Than', () => {
        it('should match data when the value greater than [path]', async () => {
          await assertMatchesData(
            data.filter((d, i) => i > 10),
            new ZFilterBinaryBuilder().subject('person.id').greaterThan().value(10).build()
          );
        });

        it('should match data when the value is greater than [self]', async () => {
          data = ranges;
          await assertMatchesData(
            ranges.filter((i) => i > 10),
            new ZFilterBinaryBuilder().greaterThan().value(10).build()
          );
        });
      });

      describe('Greater Than Equal To', () => {
        it('should match data when the value greater/equal than [path]', async () => {
          await assertMatchesData(
            data.filter((d, i) => i >= 10),
            new ZFilterBinaryBuilder().subject('person.id').greaterThanEqualTo().value(10).build()
          );
        });

        it('should match data when the value is greater/equal than [self]', async () => {
          data = ranges;
          await assertMatchesData(
            ranges.filter((i) => i >= 10),
            new ZFilterBinaryBuilder().greaterThanEqualTo().value(10).build()
          );
        });
      });

      describe('Less Than', () => {
        it('should match data when the value less than [path]', async () => {
          await assertMatchesData(
            data.filter((_, i) => i < 10),
            new ZFilterBinaryBuilder().subject('person.id').lessThan().value(10).build()
          );
        });

        it('should match data when the value is less than [self]', async () => {
          data = ranges;
          await assertMatchesData(
            ranges.filter((i) => i < 10),
            new ZFilterBinaryBuilder().lessThan().value(10).build()
          );
        });
      });

      describe('Less Than Equal To', () => {
        it('should match data when the value less than [path]', async () => {
          await assertMatchesData(
            data.filter((_, i) => i <= 10),
            new ZFilterBinaryBuilder().subject('person.id').lessThanEqualTo().value(10).build()
          );
        });

        it('should match data when the value is less than [self]', async () => {
          data = ranges;
          await assertMatchesData(
            ranges.filter((i) => i <= 10),
            new ZFilterBinaryBuilder().lessThanEqualTo().value(10).build()
          );
        });
      });

      describe('Like', () => {
        it('should match data that contains the value [path]', async () => {
          data = [{ name: 'Batman' }, { name: 'Superman' }, { name: 'Green Lantern' }];
          await assertMatchesData(
            [data[0], data[1]],
            new ZFilterBinaryBuilder().subject('name').like().value('man').build()
          );
        });

        it('should match data that contains the value [self]', async () => {
          data = ['Batman', 'Superman', 'Green Lantern'];
          await assertMatchesData(['Batman', 'Superman'], new ZFilterBinaryBuilder().like().value('man').build());
        });
      });
    });

    describe('Collection', () => {
      describe('In', () => {
        it('should match data when the value is in the specific set of data [path]', async () => {
          await assertMatchesData(
            [data[10], data[11], data[12]],
            new ZFilterCollectionBuilder().subject('person.id').in().values([10, 11, 12]).build()
          );
        });

        it('should match data when the value is in the specific set of data [self]', async () => {
          data = ranges;
          await assertMatchesData(
            [10, 11, 12],
            new ZFilterCollectionBuilder().in().value(10).value(11).value(12).build()
          );
        });
      });

      describe('Not In', () => {
        it('should match data when the value is excluded in the specific set of data [path]', async () => {
          const exclude = ranges.filter((i) => i < 95);
          await assertMatchesData(
            [data[95], data[96], data[97], data[98], data[99]],
            new ZFilterCollectionBuilder().subject('person.id').notIn().values(exclude).build()
          );
        });

        it('should match data when the value is excluded in the specific set of data [self]', async () => {
          data = ranges;
          const exclude = ranges.filter((i) => i < 95);
          await assertMatchesData([95, 96, 97, 98, 99], new ZFilterCollectionBuilder().notIn().values(exclude).build());
        });
      });
    });

    describe('Unary', () => {
      describe('Not null', () => {
        it('should match data when the value is not null or undefined [path]', async () => {
          data = [{}, { person: {} }, ...objects, { person: { id: null } }];
          await assertMatchesData(objects, new ZFilterUnaryBuilder().subject('person.id').isNotNull().build());
        });

        it('should match data when the value is in the specific set of data [self]', async () => {
          data = [undefined, ...ranges, null];
          await assertMatchesData(ranges, new ZFilterUnaryBuilder().isNotNull().build());
        });
      });

      describe('Null', () => {
        it('should match data when the value is null or undefined [path]', async () => {
          data = [{}, { person: {} }, ...objects, { person: { id: null } }];
          await assertMatchesData(
            [data[0], data[1], data[data.length - 1]],
            new ZFilterUnaryBuilder().subject('person.id').isNull().build()
          );
        });

        it('should match data when the value is null or undefined [self]', async () => {
          data = [undefined, ...ranges, null, null];
          await assertMatchesData([undefined, null, null], new ZFilterUnaryBuilder().isNull().build());
        });
      });
    });

    describe('Logic', () => {
      describe('And', () => {
        it('should include data that only matches all clauses', async () => {
          data = [{ person: { id: null } }, ...objects];
          const expected = data.filter((d) => d.person.id != null && d.person.id < 10);
          await assertMatchesData(
            expected,
            new ZFilterLogicBuilder()
              .and()
              .clause(new ZFilterUnaryBuilder().subject('person.id').isNotNull().build())
              .clause(new ZFilterBinaryBuilder().subject('person.id').lessThan().value(10).build())
              .build()
          );
        });
      });

      describe('Or', () => {
        it('should include data that matches at least one clause', async () => {
          data = [{ person: { id: -1 } }, ...objects];
          const expected = data.filter((d) => d.person.name == null || d.person.id === 10);
          await assertMatchesData(
            expected,
            new ZFilterLogicBuilder()
              .or()
              .clause(new ZFilterUnaryBuilder().subject('person.name').isNull().build())
              .clause(new ZFilterBinaryBuilder().subject('person.id').equal().value(10).build())
              .build()
          );
        });
      });
    });
  });

  describe('Search', () => {
    interface IZHero {
      id: string;
      name: string;
      alias: string;
    }

    let batman: IZHero;
    let superman: IZHero;
    let wonderWoman: IZHero;
    let johnConstantine: IZHero;
    let greenLantern: IZHero;

    beforeEach(() => {
      batman = { id: 'batman', name: 'Bruce Wayne', alias: 'Batman' };
      superman = { id: 'superman', name: 'Clark Kent', alias: 'Superman' };
      wonderWoman = { id: 'wonder-woman', name: 'Diana Prince', alias: 'Wonder Woman' };
      johnConstantine = { id: 'constantine', name: 'John Constantine', alias: 'John Constantine' };
      greenLantern = { id: 'green-lantern', name: 'Hal Jordan', alias: 'Green Lantern' };

      search = new ZDataSearchFields();
      data = [batman, superman, wonderWoman, johnConstantine, greenLantern];
    });

    it('should default to always return data', async () => {
      // Arrange.
      search = undefined;
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().search('man').build();
      // Act.
      const actual = await target.retrieve(request);
      // Assert.
      expect(actual).toEqual(data);
    });

    it('should only find the objects which match any property', async () => {
      // Arrange.
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().search('man').build();
      const expected = [batman, superman, wonderWoman];
      // Act.
      const actual = await target.retrieve(request);
      // Assert.
      expect(actual).toEqual(expected);
    });

    it('should only find the objects which match just the specified fields', async () => {
      // Arrange.
      search = new ZDataSearchFields(['name', 'noise']);
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().search('An').build();
      const expected = [wonderWoman, johnConstantine, greenLantern];
      // Act.
      const actual = await target.retrieve(request);
      // Assert.
      expect(actual).toEqual(expected);
    });

    it('should not match fields that are not in the field list', async () => {
      // Arrange.
      search = new ZDataSearchFields(['id']);
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().search('john').build();
      // Act.
      const actual = await target.retrieve(request);
      // Assert.
      expect(actual).toEqual([]);
    });
  });

  describe('Sort', () => {
    it('should sort the data', async () => {
      // Arrange.
      data = [null, 1, 3, 5, 7, null, 2, 4, 8, 6, null];
      const expected = [null, null, null, 1, 2, 3, 4, 5, 6, 7, 8];
      const target = createTestTarget();
      const request = new ZDataRequestBuilder().sort(new ZSortBuilder().ascending().build()).build();
      // Act.
      const actual = await target.retrieve(request);
      // Assert.
      expect(actual).toEqual(expected);
    });

    it('should sort by properties in order', async () => {
      // Arrange.
      data = [
        { id: 4, name: 'Batman' },
        { id: 2, name: 'Superman' },
        { id: 1, name: 'John Constantine' },
        { id: 3, name: 'Batman' },
        { id: 5, name: 'Green Lantern' }
      ];
      const expected = [
        { id: 4, name: 'Batman' },
        { id: 3, name: 'Batman' },
        { id: 5, name: 'Green Lantern' },
        { id: 1, name: 'John Constantine' },
        { id: 2, name: 'Superman' }
      ];
      const target = createTestTarget();
      const request = new ZDataRequestBuilder()
        .sort(new ZSortBuilder().ascending('name').descending('id').build())
        .build();
      // Act.
      const actual = await target.retrieve(new ZDataRequestBuilder().copy(request).build());
      // Assert.
      expect(actual).toEqual(expected);
    });
  });
});
