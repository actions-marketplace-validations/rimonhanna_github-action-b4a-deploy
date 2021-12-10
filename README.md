## github-action-b4a-deploy

GitHub Action for automated b4a "Back4App" deploy.

It is meant to be used on every successful merge to main but 
you'll need to configured that workflow yourself. You can look to the
[`.github/workflows/push.yml`](./.github/workflows/push.yml) file in this project as an example.

**Attention**

Make sure you use the `actions/checkout@v2` action!

### Usage:
**tag-prefix:** Prefix that is used for the git tag  (optional). Example:
```yaml
- name:  'Automated Github Action Version Bump'
  uses:  'rimonhanna/github-action-b4a-deploy@master'
  with:
    tag-prefix:  ''
```
**PACKAGEJSON_DIR:** Param to parse the location of the desired package.json (optional). Example:
```yaml
- name:  'Automated Github Action Version Bump'
  uses:  'rimonhanna/github-action-b4a-deploy@master'
  env:
    PACKAGEJSON_DIR:  'frontend'
```
