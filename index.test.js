const { Toolkit } = require('actions-toolkit')

describe('tests', () => {
  let action

  beforeAll(() => {
    // Mock `Toolkit.run` to redefine `action` when its called
    Toolkit.run = fn => { action = fn }
    // Require the index.js file, after we've mocked `Toolkit.run`
    require('./action.js')
  })

  it('logs successfully', async () => {
    // Create a fake instance of `Toolkit`
    const fakeTools = new Toolkit()
    // Mock the logger, or whatever else you need
    fakeTools.log.success = jest.fn()
    await action(fakeTools)
    expect(fakeTools.log.success).toHaveBeenCalled()
  })
})