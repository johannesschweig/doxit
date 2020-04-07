import { getElLastInArr } from '@/utils'

describe('utils.js', () => {
  it('returns element as last with resorted array', () => {
      // center
      expect(getElLastInArr([1, 2, 3, 4], 2)).toStrictEqual([3, 4, 1, 2])
      // front
      expect(getElLastInArr([1, 2, 3, 4], 1)).toStrictEqual([2, 3, 4, 1])
      // last
      expect(getElLastInArr([1, 2, 3, 4], 4)).toStrictEqual([1, 2, 3, 4])
  })
})