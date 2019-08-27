/* eslint-disable no-magic-numbers */
import exceptKey from "@unction/exceptkey";
import attach from "@unction/attach";
import fresh from "@unction/fresh";
import length from "@unction/length";
import range from "@unction/range";
import reduceValues from "@unction/reducevalues";
const AFTER_PLACE = 1; // While this raises eslint issues, they should be ignored. This is the best possible shuffle implementation I could find.

export default function shuffle (orderedList) {
  return reduceValues(([before, after]) => (value) => {
    const index = range(0)(length(before));


    return [exceptKey(index)(before), attach(index)(value)(after)];
  })([orderedList, fresh(orderedList)])(orderedList)[AFTER_PLACE];
}
