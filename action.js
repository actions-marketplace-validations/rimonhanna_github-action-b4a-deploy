const { Toolkit } = require('actions-toolkit')
const { execSync } = require('child_process')
const core = require('@actions/core')


// Run your GitHub Action!
Toolkit.run(async tools => {
  const b4aApiKey = core.getInput('B4A_API_KEY', { required: true });
  if (b4aApiKey == undefined || b4aApiKey.length == 0){
      log.error("B4A_API_KEY is missing")
      process.exit(0)
  }
  const appName = core.getInput('APP_NAME', { required: false });


  try {
    execSync('curl https://raw.githubusercontent.com/back4app/parse-cli/back4app/installer.sh | sudo /bin/bash')
    execSync('mkdir -p ~/.back4app')
    execSync(`echo -e "machine parsecli.back4app.com\n  login default\n  password ${b4aApiKey}" > ~/.back4app/netrc`)
    execSync('cat ~/.back4app/netrc')

    if(appName && appName.length > 0) {
      execSync(`b4a default "${appName}"`)
    }

    let deploy = execSync('b4a deploy').toString().trim()
    
    core.setOutput('response', deploy);
  } catch (e) {
    tools.log.fatal(e)
    tools.exit.failure('Failed to deploy')
  }
  tools.exit.success('Deployed successfully!')
})
