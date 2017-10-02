/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import shuffle from "./index"

test(({ok, end}) => {
  const result = shuffle(["a", "b", "c", "d", "e", "f"])

  ok(
    result.includes("a")
  )

  ok(
    result.includes("b")
  )

  ok(
    result.includes("c")
  )

  ok(
    result.includes("d")
  )

  ok(
    result.includes("e")
  )

  ok(
    result.includes("f")
  )

  end()
})

test(({equal, end}) => {
  equal(
    shuffle(["a", "b", "c", "d", "e", "f"]).length,
    6
  )

  end()
})

test(({equal, end}) => {
  equal(
    shuffle(["a"]).length,
    1
  )

  end()
})

test(({ok, end}) => {
  ok(
    shuffle(["a"]).includes("a")
  )

  end()
})


test(({ok, end}) => {
  const result = shuffle("abcdef")

  ok(
    result.includes("a")
  )

  ok(
    result.includes("b")
  )

  ok(
    result.includes("c")
  )

  ok(
    result.includes("d")
  )

  ok(
    result.includes("e")
  )

  ok(
    result.includes("f")
  )

  end()
})

test(({equal, end}) => {
  equal(
    shuffle("abcdef").length,
    6
  )

  end()
})

test(({equal, end}) => {
  equal(
    shuffle("a").length,
    1
  )

  end()
})

test(({ok, end}) => {
  ok(
    shuffle("a").includes("a")
  )

  end()
})
