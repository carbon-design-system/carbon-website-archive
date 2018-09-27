/**
 * Normalize the location object provided to us through @reach/router. We also
 * make sure to clean the __PATH_PREFIX__ defined in gatsby-config.js so that
 * we can work with our paths as if they did not have that prefix. This is
 * useful for asserting locations in the pathname for our nav sub-items
 */
function normalizeLocation(location) {
  let normalizedUrlArray = location.pathname
      .replace(__PATH_PREFIX__, '')
      .split('/')
      .filter(Boolean),
    routeIndex;

  return normalizedUrlArray;
}

/**
 * Takes a location and determines based on it's normalized url array length
 * the index of the route path within the array.
 */
function determineRoutePathIndex(location) {
  const normalizedPathArray = normalizeLocation(location);
  // Doing this hard coded check is kinda gnarly and brittle, but since we're
  // iterating through the entire array to check for "active" items in the nav
  // there are actually two places where "designers" is the 1st index element.
  if (
    normalizedPathArray[0] === 'contributing' &&
    normalizedPathArray[1] === 'designers'
  ) {
    return 0;
  }

  return normalizedPathArray.length >= 2 ? 1 : 0;
}

/**
 * Helper to determine if the location from @reach/router has the given path
 * anywhere in its pathname. Useful for top-level navigational items
 */
function locationContainsPath(location, path) {
  return normalizeLocation(location).indexOf(path) !== -1;
}

/**
 * Helper to determine if the location from @reach/router has the given path at
 * the given index.
 */
function locationContainsPathAtIndex(location, path, index) {
  // An array of the various url parts split at the '/'s
  const destructoredUrlArray = normalizeLocation(location);
  if (index < 0) {
    return destructoredUrlArray[destructoredUrlArray.length + index] === path;
  }
  return destructoredUrlArray[index] === path;
}

module.exports = {
  locationContainsPath,
  locationContainsPathAtIndex,
  determineRoutePathIndex,
};
