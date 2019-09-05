/* eslint-disable no-magic-numbers */
import exceptKey from "@unction/exceptkey";
import attach from "@unction/attach";
import fresh from "@unction/fresh";
import length from "@unction/length";
import range from "@unction/range";
import reduceValues from "@unction/reducevalues";
import {OrderedEnumerableType} from "./types";

const AFTER_PLACE = 1;

export default function shuffle<A> (orderedEnumerable: OrderedEnumerableType<A>) {
  return reduceValues(([before, after]: [A, A]) => (value: A): OrderedEnumerableType<A> => {
    const index = range(0)(length(before));

    return [exceptKey(index)(before), attach(index)(value)(after)];
  })(
    [orderedEnumerable, fresh(orderedEnumerable)]
  )(
    orderedEnumerable
  )[AFTER_PLACE];
}
