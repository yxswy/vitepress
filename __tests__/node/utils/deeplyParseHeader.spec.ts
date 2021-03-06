import { test, expect } from 'vitest'
import { deeplyParseHeader } from 'node/utils/parseHeader'

test('deeplyParseHeader', () => {
  const asserts: Record<string, string> = {
    // remove tail html
    '# `H1` <Comp></Comp>': '# H1',
    '# *H1* <Comp/>': '# H1',

    // reserve code-wrapped tail html
    '# `H1` `<Comp></Comp>`': '# H1 <Comp></Comp>',
    '# *H1* `<Comp/>`': '# H1 <Comp/>',

    // remove leading html
    '# <Comp></Comp> `H1`': '#  H1',
    '# <Comp/> *H1*': '#  H1',

    // reserve code-wrapped leading html
    '# `<Comp></Comp>` `H1`': '# <Comp></Comp> H1',
    '# `<Comp/>` *H1*': '# <Comp/> H1',

    // remove middle html
    '# `H1` <Comp></Comp> `H2`': '# H1  H2',
    '# `H1` <Comp/> `H2`': '# H1  H2',

    // reserve middle html
    '# `H1` `<Comp></Comp>` `H2`': '# H1 <Comp></Comp> H2',
    '# `H1` `<Comp/>` `H2`': '# H1 <Comp/> H2'
  }

  Object.keys(asserts).forEach((input) => {
    expect(deeplyParseHeader(input)).toBe(asserts[input])
  })
})
