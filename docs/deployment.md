# Deployments

Update date in Footer.js component

## Internal

```bash
# Build the internal site
yarn build:internal

ibmcloud login \
  --sso
  -a https://api.stage1.ng.bluemix.net \
  -o 'carbon@us.ibm.com' \
  -s production

# Make sure you have blue-green-deploy installed as a plugin for cf
ibmcloud cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
ibmcloud cf install-plugin blue-green-deploy -r CF-Community

# Deploy the internal website
ibmcloud cf blue-green-deploy carbon-website-internal \
  -f .circleci/manifest.internal.yml \
  --delete-old-apps
```

## External


```bash
# Build the external site
yarn build:external

** we need a testing step in here to view **

ibmcloud --sso -a https://api.ng.bluemix.net -o carbon-design-system -s production
ibmcloud cf push -f .circleci/manifest.external.yml

```
