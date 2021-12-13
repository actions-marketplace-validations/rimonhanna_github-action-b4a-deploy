## Automated Back4App B4a deployment

GitHub Action for automated b4a "Back4App" deploy.

It is meant to be used on every successful merge to main but 
you'll need to configured that workflow yourself.

**Attention**

Make sure you use the `actions/checkout@v2` action!

### Usage:
**B4A_API_KEY:** Back4App api key  (required). Example:
```yaml
- name:  'Automated Github Action Version Bump'
  uses:  'rimonhanna/github-action-b4a-deploy@main'
  with:
    B4A_API_KEY:  ''
```
**APP_NAME:** Name of the app you're deploying to, deploys to your default app if left empty (optional). Example:
```yaml
- name:  'Automated Github Action Version Bump'
  uses:  'rimonhanna/github-action-b4a-deploy@main'
  env:
    B4A_API_KEY:  ''
    APP_NAME:  'your_app_name'
```
