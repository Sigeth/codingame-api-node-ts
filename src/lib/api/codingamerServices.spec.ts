import anyTest, { TestInterface } from 'ava'

const test = anyTest as TestInterface<{}>

test("void", async t => {
    t.assert(true)
})