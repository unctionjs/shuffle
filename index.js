/* eslint-disable immutable/no-let, no-magic-numbers, immutable/no-mutation */
import key from "@unction/key"
import exceptKey from "@unction/exceptkey"
import initial from "@unction/initial"
import attach from "@unction/attach"
import keys from "@unction/keys"
import fresh from "@unction/fresh"
import length from "@unction/length"
import isPopulated from "@unction/ispopulated"
import reduceValues from "@unction/reducevalues"

// While this raises eslint issues, they should be ignored. This is the best possible shuffle implementation I could find.
export default function shuffle (orderedList: string | ArrayType): string | ArrayType {
  return reduceValues(
    ({latest, remaining, positions}: {latest: string | ArrayType, remaining: string | ArrayType, positions: Array<number>}): Function =>
      (value: ValueType): {latest: string | ArrayType, remaining: string | ArrayType} | string | ArrayType => {
        if (isPopulated(remaining)) {
          const index = Math.floor(Math.random() * length(positions))

          return {
            latest: attach(key(index)(positions))(value)(latest),
            remaining: initial(remaining),
            positions: exceptKey(index)(positions),
          }
        }

        return latest
      },
  )(
    {
      remaining: orderedList,
      latest: fresh(orderedList),
      positions: keys(orderedList),
    }
  )(
    orderedList
  )
}
