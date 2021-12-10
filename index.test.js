const { Toolkit } = require('actions-toolkit')
const action = require('./action.js')

describe('tests', () => {


  beforeEach(() => {})

  afterEach(() => {})

  

  it('logs successfully', async () => {
    let actionRun = new action({B4A_API_KEY:"zozo"})
    
    expect(actionRun).toHaveBeenCalled()
  })
})