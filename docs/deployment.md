# Deployments

Update date in Footer.js component

## Deploying for production/live

### Internal website

```bash
# Build the internal site
yarn build:internal

# Run build locally 
npx serve public

# Test local production build of website
http://localhost:5000

# Login
ibmcloud login --sso  -a https://api.stage1.ng.bluemix.net  -o 'carbon@us.ibm.com' -s production

# Make sure you have blue-green-deploy installed as a plugin for cf
ibmcloud cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
ibmcloud cf install-plugin blue-green-deploy -r CF-Community

# Deploy the internal website
ibmcloud cf blue-green-deploy carbon-website-internal  -f .circleci/manifest.internal.yml --delete-old-apps

# Deploy the internal website without bluegreen
ibmcloud cf push carbon-website-internal  -f .circleci/manifest.internal.yml
```

### External website

```bash
# Build the external site
yarn build:external

# Run build locally 
npx serve public

# Test local production build of website
http://localhost:5000

## Login and push
ibmcloud login --sso -a https://api.ng.bluemix.net -o carbon-design-system -s production

# Make sure you have blue-green-deploy installed as a plugin for cf
ibmcloud cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
ibmcloud cf install-plugin blue-green-deploy -r CF-Community

# Deploy the external website
ibmcloud cf blue-green-deploy carbon-website -f .circleci/manifest.external.yml --delete-old-apps

# Deploy external website without blue-green
ibmcloud cf push -f .circleci/manifest.external.yml

```

## Deploying for development/preview builds

```bash
# Build the external site (for internal builds of the site, swap `internal` for `external`)
yarn build:external

# Run build locally 
npx serve public

# Test local production build of website
http://localhost:5000

# Login
ibmcloud login --sso

# Update `.circleci > manifest.external.yml`:
  # - comment out or remove any `routes:` information
  # - add the property: `random-route: true`

# Deploy to preview link:
ibmcloud cf push -f .circleci/manifest.external.yml

```
