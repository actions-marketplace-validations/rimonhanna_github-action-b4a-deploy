const { Toolkit } = require('actions-toolkit')
const core = require('@actions/core')

describe('tests', () => {
  

  it('logs successfully', async () => {
    jest.spyOn(core, 'getInput').mockImplementation((name, options) => {
        switch(name) {
            case 'B4A_API_KEY': return 'test';
        }

        return '';
    }); 
    const action = require('./action.js')
    
    expect(action).toHaveBeenCalled()
  })
})