"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* binding */ AbortedDeferredError),
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "ErrorResponse": () => (/* binding */ ErrorResponse),
/* harmony export */   "IDLE_BLOCKER": () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   "IDLE_FETCHER": () => (/* binding */ IDLE_FETCHER),
/* harmony export */   "IDLE_NAVIGATION": () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   "UNSAFE_DEFERRED_SYMBOL": () => (/* binding */ UNSAFE_DEFERRED_SYMBOL),
/* harmony export */   "UNSAFE_DeferredData": () => (/* binding */ DeferredData),
/* harmony export */   "UNSAFE_convertRoutesToDataRoutes": () => (/* binding */ convertRoutesToDataRoutes),
/* harmony export */   "UNSAFE_getPathContributingMatches": () => (/* binding */ getPathContributingMatches),
/* harmony export */   "UNSAFE_invariant": () => (/* binding */ invariant),
/* harmony export */   "UNSAFE_warning": () => (/* binding */ warning),
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createPath": () => (/* binding */ createPath),
/* harmony export */   "createRouter": () => (/* binding */ createRouter),
/* harmony export */   "createStaticHandler": () => (/* binding */ createStaticHandler),
/* harmony export */   "defer": () => (/* binding */ defer),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "getStaticContextFromError": () => (/* binding */ getStaticContextFromError),
/* harmony export */   "getToPathname": () => (/* binding */ getToPathname),
/* harmony export */   "isDeferredData": () => (/* binding */ isDeferredData),
/* harmony export */   "isRouteErrorResponse": () => (/* binding */ isRouteErrorResponse),
/* harmony export */   "joinPaths": () => (/* binding */ joinPaths),
/* harmony export */   "json": () => (/* binding */ json),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "matchRoutes": () => (/* binding */ matchRoutes),
/* harmony export */   "normalizePathname": () => (/* binding */ normalizePathname),
/* harmony export */   "parsePath": () => (/* binding */ parsePath),
/* harmony export */   "redirect": () => (/* binding */ redirect),
/* harmony export */   "resolvePath": () => (/* binding */ resolvePath),
/* harmony export */   "resolveTo": () => (/* binding */ resolveTo),
/* harmony export */   "stripBasename": () => (/* binding */ stripBasename)
/* harmony export */ });
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation

  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;

  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }

  function getCurrentLocation() {
    return entries[index];
  }

  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }

    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }

  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }

  let history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return getCurrentLocation();
    },

    createHref,

    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },

    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },

    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },

    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },

    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;

      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },

    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }

  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";

    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }

  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }

  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex(); // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.

  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }

  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }

  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;

    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }

  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }

  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }

  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    createURL,

    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));

const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function isIndexRoute(route) {
  return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router


function convertRoutesToDataRoutes(routes, detectErrorBoundary, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  if (manifest === void 0) {
    manifest = {};
  }

  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");

    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, {
        hasErrorBoundary: detectErrorBoundary(route),
        id
      });

      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, {
        id,
        hasErrorBoundary: detectErrorBoundary(route),
        children: undefined
      });

      manifest[id] = pathOrLayoutRoute;

      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, detectErrorBoundary, treePath, manifest);
      }

      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      invariant( // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };

  routes.forEach((route, index) => {
    var _route$path;

    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */


function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

  let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

  let required = first.replace(/\?$/, "");

  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }

  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = []; // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue

  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

  if (isOptional) {
    result.push(...restExploded);
  } // for absolute paths, ensure `/` instead of empty segment


  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */


function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }

  let path = originalPath;

  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  } // ensure `/` is added at the beginning if the path is absolute


  const prefix = path.startsWith("/") ? "/" : "";
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1; // only apply the splat if it's the last segment

    if (isLastSegment && segment === "*") {
      const star = "*";
      const starParam = params[star]; // Apply the splat

      return starParam;
    }

    const keyMatch = segment.match(/^:(\w+)(\??)$/);

    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];

      if (optional === "?") {
        return param == null ? "" : param;
      }

      if (param == null) {
        invariant(false, "Missing \":" + key + "\" param");
      }

      return param;
    } // Remove any optional markers from optional static segments


    return segment.replace(/\?$/g, "");
  }) // Remove empty segments
  .filter(segment => !!segment);
  return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */

function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */

const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
    // cancellation

    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();

    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));

    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);

    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});

    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }

    this.init = responseInit;
  }

  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }

    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key); // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject

    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values

    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }

  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }

    this.pendingKeysSet.delete(key);

    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }

    if (error) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }

    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }

  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }

  async resolveData(signal) {
    let aborted = false;

    if (!this.done) {
      let onAbort = () => this.cancel();

      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);

          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }

    return aborted;
  }

  get done() {
    return this.pendingKeysSet.size === 0;
  }

  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }

  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }

}

function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}

function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }

  if (value._error) {
    throw value._error;
  }

  return value._data;
}

const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */

const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }

  let responseInit = init;

  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }

  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */

class ErrorResponse {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }

    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;

    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }

}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */

function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const isServer = !isBrowser;

const defaultDetectErrorBoundary = route => Boolean(route.hasErrorBoundary); //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////

/**
 * Create a router and listen to history POP navigations
 */


function createRouter(init) {
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let detectErrorBoundary = init.detectErrorBoundary || defaultDetectErrorBoundary; // Routes keyed by ID

  let manifest = {}; // Routes in tree format for matching

  let dataRoutes = convertRoutesToDataRoutes(init.routes, detectErrorBoundary, undefined, manifest);
  let inFlightDataRoutes; // Config driven behavior flags

  let future = _extends({
    v7_normalizeFormMethod: false
  }, init.future); // Cleanup function for history


  let unlistenHistory = null; // Externally-provided functions to call on all state changes

  let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

  let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

  let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

  let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.

  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  let initialErrors = null;

  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }

  let initialized = // All initialMatches need to be loaded before we're ready.  If we have lazy
  // functions around still then we'll need to run them in initialize()
  !initialMatches.some(m => m.route.lazy) && ( // And we have to either have no loaders or have been provided hydrationData
  !initialMatches.some(m => m.route.loader) || init.hydrationData != null);
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  }; // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)

  let pendingAction = Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?

  let pendingPreventScrollReset = false; // AbortController for the active navigation

  let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted

  let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidate()
  //  - X-Remix-Revalidate (from redirect)

  let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission

  let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation

  let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

  let fetchControllers = new Map(); // Track loads based on the order in which they started

  let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation

  let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

  let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

  let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

  let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.

  let activeDeferreds = new Map(); // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change

  let blockerFunctions = new Map(); // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state

  let ignoreNextHistoryUpdate = false; // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();

  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;

      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }

      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });

      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1); // Put the blocker into a blocked state

        updateBlocker(blockerKey, {
          state: "blocked",
          location,

          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            }); // Re-do the same POP navigation we just blocked

            init.history.go(delta);
          },

          reset() {
            deleteBlocker(blockerKey);
            updateState({
              blockers: new Map(router.state.blockers)
            });
          }

        });
        return;
      }

      return startNavigation(historyAction, location);
    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history
    // Note we don't do any handling of lazy here.  For SPA's it'll get handled
    // in the normal navigation flow.  For SSR it's expected that lazy modules are
    // resolved prior to router creation since we can't go into a fallbackElement
    // UI for SSR'd apps

    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }

    return router;
  } // Clean up a router and it's side effects


  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }

    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  } // Subscribe to state updates for the router


  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  } // Update our state and notify the calling context of the change


  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState


  function completeNavigation(location, newState) {
    var _location$state, _location$state2;

    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;

    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    } // Always preserve any existing loaderData from re-used routes


    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData; // On a successful navigation we can assume we got through all blockers
    // so we can start fresh

    for (let [key] of blockerFunctions) {
      deleteBlocker(key);
    } // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect


    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;

    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }

    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers: new Map(state.blockers)
    }));

    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    } // Reset stateful navigation vars


    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission


  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }

    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(to, future, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history

    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;

    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }

    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });

    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,

        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          }); // Send the same navigation through

          navigate(to, opts);
        },

        reset() {
          deleteBlocker(blockerKey);
          updateState({
            blockers: new Map(state.blockers)
          });
        }

      });
      return;
    }

    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  } // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round


  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    }); // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders

    if (state.navigation.state === "submitting") {
      return;
    } // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation


    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    } // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes


    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  } // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation


  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion

    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse); // Cancel all pending deferred on 404s since we don't keep any routes

      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    } // Short circuit if it's only a hash change and not a mutation submission
    // For example, on /page#hash and submit a <Form method="post"> which will
    // default to a navigation to /page


    if (isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    } // Create a controller/Request for this navigation


    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;

    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });

      if (actionOutput.shortCircuited) {
        return;
      }

      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;

      let navigation = _extends({
        state: "loading",
        location
      }, opts.submission);

      loadingNavigation = navigation; // Create a GET request for the loaders

      request = new Request(request.url, {
        signal: request.signal
      });
    } // Call loaders


    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);

    if (shortCircuited) {
      return;
    } // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation


    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  } // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors


  async function handleAction(request, location, submission, matches, opts) {
    interruptActiveLoads(); // Put us in a submitting state

    let navigation = _extends({
      state: "submitting",
      location
    }, submission);

    updateState({
      navigation
    }); // Call our action and get the result

    let result;
    let actionMatch = getTargetMatch(matches, location);

    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, detectErrorBoundary, router.basename);

      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }

    if (isRedirectResult(result)) {
      let replace;

      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }

      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again

      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }

      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }

    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }

    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  } // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.


  async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation;

    if (!loadingNavigation) {
      let navigation = _extends({
        state: "loading",
        location,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      }, submission);

      loadingNavigation = navigation;
    } // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available


    let activeSubmission = submission || fetcherSubmission ? submission || fetcherSubmission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
      formMethod: loadingNavigation.formMethod,
      formAction: loadingNavigation.formAction,
      formData: loadingNavigation.formData,
      formEncType: loadingNavigation.formEncType
    } : undefined;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, init.basename, pendingActionData, pendingError); // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op

    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}));
      return {
        shortCircuited: true
      };
    } // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)


    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = {
          state: "loading",
          data: fetcher && fetcher.data,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }

    pendingNavigationLoadId = ++incrementingLoadId;
    revalidatingFetchers.forEach(rf => fetchControllers.set(rf.key, pendingNavigationController));
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);

    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    } // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation


    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key)); // If any loaders returned a redirect Response, start a new REPLACE navigation

    let redirect = findRedirect(results);

    if (redirect) {
      await startRedirectNavigation(state, redirect, {
        replace
      });
      return {
        shortCircuited: true
      };
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    return _extends({
      loaderData,
      errors
    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }

  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  } // Trigger a fetcher load/submit for the given fetcher key


  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }

    if (fetchControllers.has(key)) abortFetcher(key);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = matchRoutes(routesToUse, href, init.basename);

    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: href
      }));
      return;
    }

    let {
      path,
      submission
    } = normalizeNavigateOptions(href, future, opts, true);
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;

    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    } // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations


    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  } // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation


  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);

    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    } // Put this fetcher into it's submitting state


    let existingFetcher = state.fetchers.get(key);

    let fetcher = _extends({
      state: "submitting"
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the action for the fetcher

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, detectErrorBoundary, router.basename);

    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }

      return;
    }

    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      fetchRedirectIds.add(key);

      let loadingFetcher = _extends({
        state: "loading"
      }, submission, {
        data: undefined,
        " _hasFetcherDoneAnything ": true
      });

      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return startRedirectNavigation(state, actionResult, {
        submission,
        isFetchActionRedirect: true
      });
    } // Process any non-redirect errors thrown


    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }

    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    } // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation


    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, init.basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);

    let loadFetcher = _extends({
      state: "loading",
      data: actionResult.data
    }, submission, {
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, init.basename, {
      [match.route.id]: actionResult.data
    }, undefined // No need to send through errors since we short circuit above
    ); // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data

    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = {
        state: "loading",
        data: existingFetcher && existingFetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(staleKey, revalidatingFetcher);
      fetchControllers.set(staleKey, abortController);
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);

    if (abortController.signal.aborted) {
      return;
    }

    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(results);

    if (redirect) {
      return startRedirectNavigation(state, redirect);
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    let doneFetcher = {
      state: "idle",
      data: actionResult.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data

    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.


  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

    let loadingFetcher = _extends({
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the loader for this fetcher route match

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, detectErrorBoundary, router.basename); // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens

    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    } // We can delete this so long as we weren't aborted by ou our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers


    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }

    if (fetchRequest.signal.aborted) {
      return;
    } // If the loader threw a redirect Response, start a new REPLACE navigation


    if (isRedirectResult(result)) {
      await startRedirectNavigation(state, result);
      return;
    } // Process any non-redirect errors thrown


    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?

      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }

    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

    let doneFetcher = {
      state: "idle",
      data: result.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */


  async function startRedirectNavigation(state, redirect, _temp) {
    var _window;

    let {
      submission,
      replace,
      isFetchActionRedirect
    } = _temp === void 0 ? {} : _temp;

    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }

    let redirectLocation = createLocation(state.location, redirect.location, // TODO: This can be removed once we get rid of useTransition in Remix v2
    _extends({
      _isRedirect: true
    }, isFetchActionRedirect ? {
      _isFetchActionRedirect: true
    } : {}));
    invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an absolute external redirect that goes to a new origin

    if (ABSOLUTE_URL_REGEX.test(redirect.location) && isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
      let url = init.history.createURL(redirect.location);
      let isDifferentBasename = stripBasename(url.pathname, init.basename || "/") == null;

      if (window.location.origin !== url.origin || isDifferentBasename) {
        if (replace) {
          window.location.replace(redirect.location);
        } else {
          window.location.assign(redirect.location);
        }

        return;
      }
    } // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled


    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push; // Use the incoming submission if provided, fallback on the active one in
    // state.navigation

    let {
      formMethod,
      formAction,
      formEncType,
      formData
    } = state.navigation;

    if (!submission && formMethod && formAction && formData && formEncType) {
      submission = {
        formMethod,
        formAction,
        formEncType,
        formData
      };
    } // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location


    if (redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, submission, {
          formAction: redirect.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else if (isFetchActionRedirect) {
      // For a fetch action redirect, we kick off a new loading navigation
      // without the fetcher submission, but we send it along for shouldRevalidate
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined
        },
        fetcherSubmission: submission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // Otherwise, we kick off a new loading navigation, preserving the
      // submission info for the duration of this navigation
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: submission ? submission.formMethod : undefined,
          formAction: submission ? submission.formAction : undefined,
          formEncType: submission ? submission.formEncType : undefined,
          formData: submission ? submission.formData : undefined
        },
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }

  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, detectErrorBoundary, router.basename)), ...fetchersToLoad.map(f => {
      if (f.matches && f.match) {
        return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, request.signal), f.match, f.matches, manifest, detectErrorBoundary, router.basename);
      } else {
        let error = {
          type: ResultType.error,
          error: getInternalRouterError(404, {
            pathname: f.path
          })
        };
        return error;
      }
    })]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, request.signal, true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }

  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation

    cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }

  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }

  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }

  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }

  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        data: fetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  function markFetchRedirectsDone() {
    let doneKeys = [];

    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);

      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }

    markFetchersDone(doneKeys);
  }

  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];

    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);

        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }

    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }

  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;

    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }

    return blocker;
  }

  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  } // Utility function to update blockers, ensuring valid state transitions


  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER; // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM

    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    state.blockers.set(key, newBlocker);
    updateState({
      blockers: new Map(state.blockers)
    });
  }

  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;

    if (blockerFunctions.size === 0) {
      return;
    } // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet


    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }

    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);

    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    } // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function


    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }

  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  } // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component


  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;

    getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available


    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);

      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }

    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }

  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }

  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      let y = savedScrollPositions[key];

      if (typeof y === "number") {
        return y;
      }
    }

    return null;
  }

  function _internalSetRoutes(newRoutes) {
    inFlightDataRoutes = newRoutes;
  }

  router = {
    get basename() {
      return init.basename;
    },

    get state() {
      return state;
    },

    get routes() {
      return dataRoutes;
    },

    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////

const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let detectErrorBoundary = (opts == null ? void 0 : opts.detectErrorBoundary) || defaultDetectErrorBoundary;
  let dataRoutes = convertRoutesToDataRoutes(routes, detectErrorBoundary, undefined, manifest);
  let basename = (opts ? opts.basename : null) || "/";
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */

  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    let result = await queryImpl(request, location, matches, requestContext);

    if (isResponse(result)) {
      return result;
    } // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location


    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */


  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);

    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let result = await queryImpl(request, location, matches, requestContext, match);

    if (isResponse(result)) {
      return result;
    }

    let error = result.errors ? Object.values(result.errors)[0] : undefined;

    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    } // Pick off the right state value to return


    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }

    if (result.loaderData) {
      var _result$activeDeferre;

      let data = Object.values(result.loaderData)[0];

      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }

      return data;
    }

    return undefined;
  }

  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");

    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }

      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
          throw e.response;
        }

        return e.response;
      } // Redirects are always returned since they don't propagate to catch
      // boundaries


      if (isRedirectResponse(e)) {
        return e;
      }

      throw e;
    }
  }

  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;

    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, detectErrorBoundary, basename, true, isRouteRequest, requestContext);

      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted");
      }
    }

    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }

    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    }

    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }

      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      }); // action status codes take precedence over loader status codes

      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    } // Create a GET request for the loaders


    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }

  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())

    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }

    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy); // Short circuit if we have no loaders to run (query())

    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }

    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, detectErrorBoundary, basename, true, isRouteRequest, requestContext))]);

    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    } // Process and commit output from loaders


    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds); // Add a null for any non-loader matches for proper revalidation on the client

    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }

  return {
    dataRoutes,
    query,
    queryRoute
  };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////

/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */

function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });

  return newContext;
}

function isSubmissionNavigation(opts) {
  return opts != null && "formData" in opts;
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params


function normalizeNavigateOptions(to, future, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }

  let path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }

  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  } // Create a Submission on non-GET navigations


  let submission;

  if (opts.formData) {
    let formMethod = opts.formMethod || "get";
    submission = {
      formMethod: future.v7_normalizeFormMethod ? formMethod.toUpperCase() : formMethod.toLowerCase(),
      formAction: stripHashFromPath(path),
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData: opts.formData
    };

    if (isMutationMethod(submission.formMethod)) {
      return {
        path,
        submission
      };
    }
  } // Flatten submission onto URLSearchParams for GET submissions


  let parsedPath = parsePath(path);
  let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
  // navigation GET submissions which run all loaders), we need to preserve
  // any incoming ?index params

  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }

  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them


function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;

  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);

    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }

  return boundaryMatches;
}

function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, basename, pendingActionData, pendingError) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let defaultShouldRevalidate = // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  isRevalidationRequired || // Clicked the same link, resubmitted a GET form
  currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
  currentUrl.search !== nextUrl.search; // Pick navigation matches that are net-new or qualify for revalidation

  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.lazy) {
      // We haven't loaded this route yet so we don't know if it's got a loader!
      return true;
    }

    if (match.route.loader == null) {
      return false;
    } // Always call the loader on new route instances and pending defer cancellations


    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    } // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases


    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate: defaultShouldRevalidate || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  }); // Pick fetcher.loads that need to be revalidated

  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    // Don't revalidate if fetcher won't be present in the subsequent render
    if (!matches.some(m => m.route.id === f.routeId)) {
      return;
    }

    let fetcherMatches = matchRoutes(routesToUse, f.path, basename); // If the fetcher path no longer matches, push it in with null matches so
    // we can trigger a 404 in callLoadersAndMaybeResolveData

    if (!fetcherMatches) {
      revalidatingFetchers.push(_extends({
        key
      }, f, {
        matches: null,
        match: null
      }));
      return;
    }

    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);

    if (cancelledFetcherLoads.includes(key)) {
      revalidatingFetchers.push(_extends({
        key,
        matches: fetcherMatches,
        match: fetcherMatch
      }, f));
      return;
    } // Revalidating fetchers are decoupled from the route matches since they
    // hit a static href, so they _always_ check shouldRevalidate and the
    // default is strictly if a revalidation is explicitly required (action
    // submissions, useRevalidator, X-Remix-Revalidate).


    let shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
      currentUrl,
      currentParams: state.matches[state.matches.length - 1].params,
      nextUrl,
      nextParams: matches[matches.length - 1].params
    }, submission, {
      actionResult,
      defaultShouldRevalidate
    }));

    if (shouldRevalidate) {
      revalidatingFetchers.push(_extends({
        key,
        matches: fetcherMatches,
        match: fetcherMatch
      }, f));
    }
  });
  return [navigationMatches, revalidatingFetchers];
}

function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = // [a] -> [a, b]
  !currentMatch || // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred

  let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

  return isNew || isMissingData;
}

function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}

function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);

    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }

  return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */


async function loadLazyRouteModule(route, detectErrorBoundary, manifest) {
  if (!route.lazy) {
    return;
  }

  let lazyRoute = await route.lazy(); // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static

  if (!route.lazy) {
    return;
  }

  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest"); // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.

  let routeUpdates = {};

  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));

    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  } // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to detectErrorBoundary


  Object.assign(routeToUpdate, routeUpdates); // Mutate the `hasErrorBoundary` property on the route based on the route
  // updates and remove the `lazy` function so we don't resolve the lazy
  // route again.

  Object.assign(routeToUpdate, {
    // To keep things framework agnostic, we use the provided
    // `detectErrorBoundary` function to set the `hasErrorBoundary` route
    // property since the logic will differ between frameworks.
    hasErrorBoundary: detectErrorBoundary(_extends({}, routeToUpdate)),
    lazy: undefined
  });
}

async function callLoaderOrAction(type, request, match, matches, manifest, detectErrorBoundary, basename, isStaticRequest, isRouteRequest, requestContext) {
  if (basename === void 0) {
    basename = "/";
  }

  if (isStaticRequest === void 0) {
    isStaticRequest = false;
  }

  if (isRouteRequest === void 0) {
    isRouteRequest = false;
  }

  let resultType;
  let result;
  let onReject;

  let runHandler = handler => {
    // Setup a promise we can race against so that abort signals short circuit
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);

    onReject = () => reject();

    request.signal.addEventListener("abort", onReject);
    return Promise.race([handler({
      request,
      params: match.params,
      context: requestContext
    }), abortPromise]);
  };

  try {
    let handler = match.route[type];

    if (match.route.lazy) {
      if (handler) {
        // Run statically defined handler in parallel with lazy()
        let values = await Promise.all([runHandler(handler), loadLazyRouteModule(match.route, detectErrorBoundary, manifest)]);
        result = values[0];
      } else {
        // Load lazy route module, then run any returned handler
        await loadLazyRouteModule(match.route, detectErrorBoundary, manifest);
        handler = match.route[type];

        if (handler) {
          // Handler still run even if we got interrupted to maintain consistency
          // with un-abortable behavior of handler execution on non-lazy or
          // previously-lazy-loaded routes
          result = await runHandler(handler);
        } else if (type === "action") {
          throw getInternalRouterError(405, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: match.route.id
          });
        } else {
          // lazy() route has no loader to run.  Short circuit here so we don't
          // hit the invariant below that errors on returning undefined.
          return {
            type: ResultType.data,
            data: undefined
          };
        }
      }
    } else {
      invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
      result = await runHandler(handler);
    }

    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }

  if (isResponse(result)) {
    let status = result.status; // Process redirects

    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header"); // Support relative routing in internal redirects

      if (!ABSOLUTE_URL_REGEX.test(location)) {
        let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
        let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
        let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
        invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

        if (basename) {
          let path = resolvedLocation.pathname;
          resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
        }

        location = createPath(resolvedLocation);
      } else if (!isStaticRequest) {
        // Strip off the protocol+origin for same-origin + same-basename absolute
        // redirects. If this is a static request, we can let it go back to the
        // browser as-is
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
        let isSameBasename = stripBasename(url.pathname, basename) != null;

        if (url.origin === currentUrl.origin && isSameBasename) {
          location = url.pathname + url.search + url.hash;
        }
      } // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account


      if (isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }

      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null
      };
    } // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown


    if (isRouteRequest) {
      // eslint-disable-next-line no-throw-literal
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    }

    let data;
    let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }

    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponse(status, result.statusText, data),
        headers: result.headers
      };
    }

    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }

  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }

  if (isDeferredData(result)) {
    var _result$init, _result$init2;

    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }

  return {
    type: ResultType.data,
    data: result
  };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)


function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };

  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType,
      formData
    } = submission; // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method

    init.method = formMethod.toUpperCase();
    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)


  return new Request(url, init);
}

function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, value instanceof File ? value.name : value);
  }

  return searchParams;
}

function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");

    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error; // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed

      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }

      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      } // Clear our any prior loaderData for the throwing route


      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding

      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      } // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.


      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  }); // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route

  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }

  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}

function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index]; // Process fetcher non-redirect errors

    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);

      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }

      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  return {
    loaderData,
    errors
  };
}

function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);

  for (let match of matches) {
    let id = match.route.id;

    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined && match.route.loader) {
      // Preserve existing keys not included in newLoaderData and where a loader
      // wasn't removed by HMR
      mergedLoaderData[id] = loaderData[id];
    }

    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }

  return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match


function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}

function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}

function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";

  if (status === 400) {
    statusText = "Bad Request";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }

  return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match


function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];

    if (isRedirectResult(result)) {
      return result;
    }
  }
}

function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}

function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}

function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}

function isErrorResult(result) {
  return result.type === ResultType.error;
}

function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}

function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}

function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}

function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }

  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}

function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}

function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}

function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}

async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index]; // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR

    if (!match) {
      continue;
    }

    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;

    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}

async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }

  let aborted = await result.deferredData.resolveData(signal);

  if (aborted) {
    return;
  }

  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }

  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}

function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up


function createUseMatchesMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}

function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;

  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  } // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)


  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
} //#endregion


//# sourceMappingURL=router.js.map


/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41);
/* harmony import */ var _MainHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Prices__WEBPACK_IMPORTED_MODULE_8__);










var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sections__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
/* harmony export */   "Await": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Await),
/* harmony export */   "BrowserRouter": () => (/* binding */ BrowserRouter),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "HashRouter": () => (/* binding */ HashRouter),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.MemoryRouter),
/* harmony export */   "NavLink": () => (/* binding */ NavLink),
/* harmony export */   "Navigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Navigate),
/* harmony export */   "NavigationType": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   "Outlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Outlet),
/* harmony export */   "Route": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Router),
/* harmony export */   "RouterProvider": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.RouterProvider),
/* harmony export */   "Routes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Routes),
/* harmony export */   "ScrollRestoration": () => (/* binding */ ScrollRestoration),
/* harmony export */   "UNSAFE_DataRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext),
/* harmony export */   "UNSAFE_DataRouterStateContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext),
/* harmony export */   "UNSAFE_LocationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_LocationContext),
/* harmony export */   "UNSAFE_NavigationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext),
/* harmony export */   "UNSAFE_useScrollRestoration": () => (/* binding */ useScrollRestoration),
/* harmony export */   "createBrowserRouter": () => (/* binding */ createBrowserRouter),
/* harmony export */   "createHashRouter": () => (/* binding */ createHashRouter),
/* harmony export */   "createMemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createMemoryRouter),
/* harmony export */   "createPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
/* harmony export */   "createRoutesFromChildren": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createRoutesFromChildren),
/* harmony export */   "createRoutesFromElements": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createRoutesFromElements),
/* harmony export */   "createSearchParams": () => (/* binding */ createSearchParams),
/* harmony export */   "defer": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   "isRouteErrorResponse": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
/* harmony export */   "json": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.json),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   "parsePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   "redirect": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
/* harmony export */   "renderMatches": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.renderMatches),
/* harmony export */   "resolvePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   "unstable_HistoryRouter": () => (/* binding */ HistoryRouter),
/* harmony export */   "unstable_useBlocker": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.unstable_useBlocker),
/* harmony export */   "unstable_usePrompt": () => (/* binding */ usePrompt),
/* harmony export */   "useActionData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useActionData),
/* harmony export */   "useAsyncError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useAsyncError),
/* harmony export */   "useAsyncValue": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useAsyncValue),
/* harmony export */   "useBeforeUnload": () => (/* binding */ useBeforeUnload),
/* harmony export */   "useFetcher": () => (/* binding */ useFetcher),
/* harmony export */   "useFetchers": () => (/* binding */ useFetchers),
/* harmony export */   "useFormAction": () => (/* binding */ useFormAction),
/* harmony export */   "useHref": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useHref),
/* harmony export */   "useInRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useInRouterContext),
/* harmony export */   "useLinkClickHandler": () => (/* binding */ useLinkClickHandler),
/* harmony export */   "useLoaderData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useLoaderData),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation),
/* harmony export */   "useMatch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useMatch),
/* harmony export */   "useMatches": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useMatches),
/* harmony export */   "useNavigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate),
/* harmony export */   "useNavigation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigation),
/* harmony export */   "useNavigationType": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigationType),
/* harmony export */   "useOutlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useOutlet),
/* harmony export */   "useOutletContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useOutletContext),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useParams),
/* harmony export */   "useResolvedPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath),
/* harmony export */   "useRevalidator": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRevalidator),
/* harmony export */   "useRouteError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRouteError),
/* harmony export */   "useRouteLoaderData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRouteLoaderData),
/* harmony export */   "useRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRoutes),
/* harmony export */   "useSearchParams": () => (/* binding */ useSearchParams),
/* harmony export */   "useSubmit": () => (/* binding */ useSubmit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* provided dependency */ var process = __webpack_require__(9);
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function shouldProcessLinkClick(event, target) {
  return event.button === 0 && ( // Ignore everything but left clicks
  !target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */

function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);

  if (defaultSearchParams) {
    for (let key of defaultSearchParams.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }
  }

  return searchParams;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;

  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);

    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;

    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>


    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;

    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();

      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }

  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method: method.toLowerCase(),
    encType,
    formData
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
      _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
function createBrowserRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    detectErrorBoundary: react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_detectErrorBoundary
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    detectErrorBoundary: react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_detectErrorBoundary
  }).initialize();
}

function parseHydrationData() {
  var _window;

  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;

  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }

  return state;
}

function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};

  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_1__.ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      let error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
      // because we don't serialize SSR stack traces for security reasons

      error.stack = "";
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }

  return serialized;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */


function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */

function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */

function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (process.env.NODE_ENV !== "production") {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */

const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext); // Rendered into <a href> for absolute URLs

  let absoluteHref;
  let isExternal = false;

  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to; // Only check for external origins client-side

    if (isBrowser) {
      let currentUrl = new URL(window.location.href);
      let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
      let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(targetUrl.pathname, basename);

      if (targetUrl.origin === currentUrl.origin && path != null) {
        // Strip the protocol/origin/basename for same-origin absolute URLs
        to = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    }
  } // Rendered into <a href> for relative URLs


  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext);
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});

if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */


const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormImpl, _extends({}, props, {
    ref: ref
  }));
});

if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}

const FormImpl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative,
    preventScrollReset
  } = _ref6,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded3);

  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });

  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      relative,
      preventScrollReset
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});

if (process.env.NODE_ENV !== "production") {
  FormImpl.displayName = "FormImpl";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */


function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}

if (process.env.NODE_ENV !== "production") {
  ScrollRestoration.displayName = "ScrollRestoration";
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////


var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      let replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
  process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : void 0;
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */

function useSubmit() {
  return useSubmitImpl();
}

function useSubmitImpl(fetcherKey, routeId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmitImpl);
  let defaultAction = useFormAction();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }

    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      preventScrollReset: options.preventScrollReset,
      formData,
      formMethod: method,
      formEncType: encType
    };

    if (fetcherKey) {
      !(routeId != null) ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No routeId available for useFetcher()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}

function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let [match] = routeContext.matches.slice(-1); // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath

  let path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(action ? action : ".", {
    relative
  })); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927


  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();

  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }

  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  } // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions


  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
  }

  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
}

function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormImpl, _extends({}, props, {
      ref: ref,
      fetcherKey: fetcherKey,
      routeId: routeId
    }));
  });

  if (process.env.NODE_ENV !== "production") {
    FetcherForm.displayName = "fetcher.Form";
  }

  return FetcherForm;
}

let fetcherId = 0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */

function useFetcher() {
  var _route$matches;

  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let [fetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => String(++fetcherId));
  let [Form] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
    !routeId ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No routeId available for fetcher.Form()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => href => {
    !router ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No router available for fetcher.load()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    !routeId ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitImpl(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => _extends({
    Form,
    submit,
    load
  }, fetcher), [fetcher, Form, submit, load]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return () => {
      if (!router) {
        console.warn("No fetcher available to clean up from useFetcher()");
        return;
      }

      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */

function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */

function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let matches = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useMatches)();
  let navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigation)(); // Trigger manual scroll restoration while we're active

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []); // Save positions on pagehide

  usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }

    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches])); // Read in any saved scroll locations

  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);

        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {// no-op, use default empty object
      }
    }, [storageKey]); // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, getKey]); // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      } // been here before, scroll to it


      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      } // try to scroll to the hash


      if (location.hash) {
        let el = document.getElementById(location.hash.slice(1));

        if (el) {
          el.scrollIntoView();
          return;
        }
      } // Don't reset if this navigation opted out


      if (preventScrollReset === true) {
        return;
      } // otherwise go to the top on new locations


      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */


function usePrompt(_ref8) {
  let {
    when,
    message
  } = _ref8;
  let blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.unstable_useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);

      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
}
 //#endregion


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.AbortedDeferredError),
/* harmony export */   "Await": () => (/* binding */ Await),
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Navigate": () => (/* binding */ Navigate),
/* harmony export */   "NavigationType": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action),
/* harmony export */   "Outlet": () => (/* binding */ Outlet),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "RouterProvider": () => (/* binding */ RouterProvider),
/* harmony export */   "Routes": () => (/* binding */ Routes),
/* harmony export */   "UNSAFE_DataRouterContext": () => (/* binding */ DataRouterContext),
/* harmony export */   "UNSAFE_DataRouterStateContext": () => (/* binding */ DataRouterStateContext),
/* harmony export */   "UNSAFE_LocationContext": () => (/* binding */ LocationContext),
/* harmony export */   "UNSAFE_NavigationContext": () => (/* binding */ NavigationContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* binding */ RouteContext),
/* harmony export */   "UNSAFE_detectErrorBoundary": () => (/* binding */ detectErrorBoundary),
/* harmony export */   "createMemoryRouter": () => (/* binding */ createMemoryRouter),
/* harmony export */   "createPath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createPath),
/* harmony export */   "createRoutesFromChildren": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "createRoutesFromElements": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "defer": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.defer),
/* harmony export */   "generatePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.generatePath),
/* harmony export */   "isRouteErrorResponse": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.isRouteErrorResponse),
/* harmony export */   "json": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.json),
/* harmony export */   "matchPath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchRoutes),
/* harmony export */   "parsePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath),
/* harmony export */   "redirect": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.redirect),
/* harmony export */   "renderMatches": () => (/* binding */ renderMatches),
/* harmony export */   "resolvePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolvePath),
/* harmony export */   "unstable_useBlocker": () => (/* binding */ useBlocker),
/* harmony export */   "useActionData": () => (/* binding */ useActionData),
/* harmony export */   "useAsyncError": () => (/* binding */ useAsyncError),
/* harmony export */   "useAsyncValue": () => (/* binding */ useAsyncValue),
/* harmony export */   "useHref": () => (/* binding */ useHref),
/* harmony export */   "useInRouterContext": () => (/* binding */ useInRouterContext),
/* harmony export */   "useLoaderData": () => (/* binding */ useLoaderData),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "useMatches": () => (/* binding */ useMatches),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useNavigation": () => (/* binding */ useNavigation),
/* harmony export */   "useNavigationType": () => (/* binding */ useNavigationType),
/* harmony export */   "useOutlet": () => (/* binding */ useOutlet),
/* harmony export */   "useOutletContext": () => (/* binding */ useOutletContext),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useResolvedPath": () => (/* binding */ useResolvedPath),
/* harmony export */   "useRevalidator": () => (/* binding */ useRevalidator),
/* harmony export */   "useRouteError": () => (/* binding */ useRouteError),
/* harmony export */   "useRouteLoaderData": () => (/* binding */ useRouteLoaderData),
/* harmony export */   "useRoutes": () => (/* binding */ useRoutes)
/* harmony export */ });
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var process = __webpack_require__(9);
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
// dispatch for CommonJS interop named imports.

const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = react__WEBPACK_IMPORTED_MODULE_1__;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if (true) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that " + "does not support useSyncExternalStore. The " + "use-sync-external-store shim will not work correctly. Upgrade " + "to a newer pre-release.");
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  const value = getSnapshot();

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();

      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  }); // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.

  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    }

    const handleStoreChange = () => {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;

  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

/**
 * Inlined into the react-router repo since use-sync-external-store does not
 * provide a UMD-compatible package, so we need this to be able to distribute
 * UMD react-router bundles
 */
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
const useSyncExternalStore = true ? (module => module.useSyncExternalStore)(react__WEBPACK_IMPORTED_MODULE_1__) : shim;

const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}

const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}

const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  outlet: null,
  matches: []
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}

const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */

function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */

function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */

function useMatch(pattern) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  let {
    pathname
  } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchPath)(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */

function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */

function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */

function useParams() {
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */

function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let dataRouterStateContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (process.env.NODE_ENV !== "production") {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchRoutes)(routes, {
    pathname: remainingPathname
  });

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : void 0;
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : void 0;
  }

  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.


  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action.Pop
      }
    }, renderedMatches);
  }

  return renderedMatches;
}

function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;

  if (process.env.NODE_ENV !== "production") {
    devInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " prop on\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", {
      style: codeStyles
    }, "<Route>")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}

class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }

  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    } // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.


    return {
      error: props.error || state.error,
      location: state.location
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }

  render() {
    return this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }

}

function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter

  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}

function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }

  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;

  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "Could not find a matching route for the current errors: " + errors) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

    let errorElement = null;

    if (dataRouterState) {
      if (match.route.ErrorBoundary) {
        errorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(match.route.ErrorBoundary, null);
      } else if (match.route.errorElement) {
        errorElement = match.route.errorElement;
      } else {
        errorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DefaultErrorComponent, null);
      }
    }

    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));

    let getChildren = () => {
      let children = outlet;

      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches
        },
        children: children
      });
    }; // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement


    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return state;
}

function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return route;
}

function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return thisRoute.route.id;
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */


function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */

function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */

function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => matches.map(match => {
    let {
      pathname,
      params
    } = match; // Note: This structure matches that created by createUseMatchesMatch
    // in the @remix-run/router , so if you change this please also change
    // that :)  Eventually we'll DRY this up

    return {
      id: match.route.id,
      pathname,
      params,
      data: loaderData[match.route.id],
      handle: match.route.handle
    };
  }), [matches, loaderData]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */

function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);

  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }

  return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */

function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */

function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "useActionData must be used inside a RouteContext") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */

function useRouteError() {
  var _state$errors;

  let error = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary

  if (error) {
    return error;
  } // Otherwise look for errors from our data router state


  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */

function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_1__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */

function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_1__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */

function useBlocker(shouldBlock) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => String(++blockerId));
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(args => {
    return typeof shouldBlock === "function" ? !!shouldBlock(args) : !!shouldBlock;
  }, [shouldBlock]);
  let blocker = router.getBlocker(blockerKey, blockerFunction); // Cleanup on unmount

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => () => router.deleteBlocker(blockerKey), [router, blockerKey]); // Prefer the blocker from state since DataRouterContext is memoized so this
  // ensures we update on blocker state updates

  return state.blockers.get(blockerKey) || blocker;
}
const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(false, message) : void 0;
  }
}

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router
  } = _ref;
  let getState = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => router.state, [router]); // Sync router state to our component state to force re-renders

  let state = useSyncExternalStore(router.subscribe, getState, // We have to provide this so React@18 doesn't complain during hydration,
  // but we pass our serialized hydration data into the router so state here
  // is already synced with what the server saw
  getState);
  let navigator = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]); // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
    basename: router.basename,
    location: router.state.location,
    navigationType: router.state.historyAction,
    navigator: navigator
  }, router.state.initialized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Routes, null) : fallbackElement))), null);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref2) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref2;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref3) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref3;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(!react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : void 0;
  let dataRouterState = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  let navigate = useNavigate();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    // Avoid kicking off multiple navigations if we're in the middle of a
    // data-router navigation, since components get re-rendered when we enter
    // a submitting/loading state
    if (dataRouterState && dataRouterState.navigation.state !== "idle") {
      return;
    }

    navigate(to, {
      replace,
      state,
      relative
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.stripBasename)(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;

  if (locationContext == null) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
  // directly.  If we have children, then we're in a descendant tree and we
  // need to use child routes.

  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}

/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref6) {
  let {
    children,
    errorElement,
    resolve
  } = _ref6;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

const neverSettledPromise = new Promise(() => {});

class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }

  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;

    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings

      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }

    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }

    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }

    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }

    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    } // Throw to the suspense boundary


    throw promise;
  }

}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */


function ResolveAwait(_ref7) {
  let {
    children
  } = _ref7;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, toRender);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */


function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    let treePath = [...parentPath, index];

    if (element.type === react__WEBPACK_IMPORTED_MODULE_1__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }

    !(element.type === Route) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
    !(!element.props.index || !element.props.children) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}

function detectErrorBoundary(route) {
  if (process.env.NODE_ENV !== "production") {
    if (route.Component && route.element) {
      process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`element` will be ignored.") : void 0;
    }

    if (route.ErrorBoundary && route.errorElement) {
      process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`errorElement` will be ignored.") : void 0;
    }
  } // Note: this check also occurs in createRoutesFromChildren so update
  // there if you change this


  return Boolean(route.ErrorBoundary) || Boolean(route.errorElement);
}

function createMemoryRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    detectErrorBoundary
  }).initialize();
} ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7497a6dc1c04dd9bd1f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZGU1YzgyOTk0ODg5MjEzYTdkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyx3QkFBd0I7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsTUFBTTtBQUNOLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHdDQUF3QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQyx3Q0FBd0M7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBHQUEwRzs7QUFFMUc7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QyxpQ0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7O0FBRUEsb0NBQW9DOztBQUVwQywrRkFBK0Y7O0FBRS9GOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQSx1REFBdUQ7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrR0FBK0c7QUFDL0c7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxJQUFJOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUEsK0pBQStKO0FBQy9KOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9GQUFvRjs7QUFFcEYscUJBQXFCOztBQUVyQjtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCOzs7QUFHbkIsOEJBQThCOztBQUU5QiwrQkFBK0I7O0FBRS9CLG1DQUFtQzs7QUFFbkMsc0NBQXNDOztBQUV0QyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0NBQWtDO0FBQ2xDOztBQUVBLHlDQUF5Qzs7QUFFekMsbUNBQW1DO0FBQ25DOztBQUVBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQSxrQ0FBa0M7O0FBRWxDLG9DQUFvQzs7QUFFcEMsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUEsb0NBQW9DOztBQUVwQyxrQ0FBa0M7O0FBRWxDLG9DQUFvQzs7QUFFcEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7O0FBRUEsb0NBQW9DO0FBQ3BDOztBQUVBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEdBQUc7O0FBRWhCO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEtBQUssR0FBRztBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTiwrSkFBK0o7QUFDL0o7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx1Q0FBdUMseUNBQXlDO0FBQ2hGO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLGtDQUFrQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7O0FBRWQ7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRztBQUNSOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFOztBQUVyRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1Q0FBdUM7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLE1BQU0sSUFBSTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLG1SQUFtUjtBQUNuUjtBQUNBOztBQUVBLG1LQUFtSzs7QUFFbks7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRLElBQUk7QUFDWjtBQUNBLFFBQVEsSUFBSTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0EseUVBQXlFOztBQUV6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsTUFBTSx3SUFBd0k7O0FBRTlJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxNQUFNLElBQUk7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsUUFBUSxJQUFJO0FBQ1o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBLG1JQUFtSTtBQUNuSTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLDZFQUE2RTs7QUFFN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdCQUF3Qjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLE1BQU0sSUFBSTtBQUNWLG1GQUFtRjs7QUFFbkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG9FQUFvRTtBQUNwRTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sR0FBRzs7QUFFVix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLFVBQVUsSUFBSTtBQUNkLE9BQU87QUFDUCxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLE1BQU0sSUFBSTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsZ0NBQWdDO0FBQ2hDO0FBQ0EsUUFBUSxJQUFJO0FBQ1osS0FBSztBQUNMOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGdJQUFnSTtBQUNoSSxvRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNkO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0EsZ0hBQWdIOztBQUVoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsR0FBRzs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQSx1RUFBdUU7O0FBRXZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLHlHQUF5Rzs7QUFFekc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUc7O0FBRXJHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sY0FBYztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLFFBQVE7OztBQUdSLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRXd5QjtBQUMxeUI7Ozs7Ozs7OztVQ2w1Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9yb3V0ZXIvZGlzdC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEByZW1peC1ydW4vcm91dGVyIHYxLjUuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gVHlwZXMgYW5kIENvbnN0YW50c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBBY3Rpb25zIHJlcHJlc2VudCB0aGUgdHlwZSBvZiBjaGFuZ2UgdG8gYSBsb2NhdGlvbiB2YWx1ZS5cbiAqL1xudmFyIEFjdGlvbjtcblxuKGZ1bmN0aW9uIChBY3Rpb24pIHtcbiAgLyoqXG4gICAqIEEgUE9QIGluZGljYXRlcyBhIGNoYW5nZSB0byBhbiBhcmJpdHJhcnkgaW5kZXggaW4gdGhlIGhpc3Rvcnkgc3RhY2ssIHN1Y2hcbiAgICogYXMgYSBiYWNrIG9yIGZvcndhcmQgbmF2aWdhdGlvbi4gSXQgZG9lcyBub3QgZGVzY3JpYmUgdGhlIGRpcmVjdGlvbiBvZiB0aGVcbiAgICogbmF2aWdhdGlvbiwgb25seSB0aGF0IHRoZSBjdXJyZW50IGluZGV4IGNoYW5nZWQuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgaXMgdGhlIGRlZmF1bHQgYWN0aW9uIGZvciBuZXdseSBjcmVhdGVkIGhpc3Rvcnkgb2JqZWN0cy5cbiAgICovXG4gIEFjdGlvbltcIlBvcFwiXSA9IFwiUE9QXCI7XG4gIC8qKlxuICAgKiBBIFBVU0ggaW5kaWNhdGVzIGEgbmV3IGVudHJ5IGJlaW5nIGFkZGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrLCBzdWNoIGFzIHdoZW5cbiAgICogYSBsaW5rIGlzIGNsaWNrZWQgYW5kIGEgbmV3IHBhZ2UgbG9hZHMuIFdoZW4gdGhpcyBoYXBwZW5zLCBhbGwgc3Vic2VxdWVudFxuICAgKiBlbnRyaWVzIGluIHRoZSBzdGFjayBhcmUgbG9zdC5cbiAgICovXG5cbiAgQWN0aW9uW1wiUHVzaFwiXSA9IFwiUFVTSFwiO1xuICAvKipcbiAgICogQSBSRVBMQUNFIGluZGljYXRlcyB0aGUgZW50cnkgYXQgdGhlIGN1cnJlbnQgaW5kZXggaW4gdGhlIGhpc3Rvcnkgc3RhY2tcbiAgICogYmVpbmcgcmVwbGFjZWQgYnkgYSBuZXcgb25lLlxuICAgKi9cblxuICBBY3Rpb25bXCJSZXBsYWNlXCJdID0gXCJSRVBMQUNFXCI7XG59KShBY3Rpb24gfHwgKEFjdGlvbiA9IHt9KSk7XG5cbmNvbnN0IFBvcFN0YXRlRXZlbnRUeXBlID0gXCJwb3BzdGF0ZVwiO1xuLyoqXG4gKiBNZW1vcnkgaGlzdG9yeSBzdG9yZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gbWVtb3J5LiBJdCBpcyBkZXNpZ25lZCBmb3IgdXNlXG4gKiBpbiBzdGF0ZWZ1bCBub24tYnJvd3NlciBlbnZpcm9ubWVudHMgbGlrZSB0ZXN0cyBhbmQgUmVhY3QgTmF0aXZlLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3Rvcnkob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgbGV0IHtcbiAgICBpbml0aWFsRW50cmllcyA9IFtcIi9cIl0sXG4gICAgaW5pdGlhbEluZGV4LFxuICAgIHY1Q29tcGF0ID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCBlbnRyaWVzOyAvLyBEZWNsYXJlIHNvIHdlIGNhbiBhY2Nlc3MgZnJvbSBjcmVhdGVNZW1vcnlMb2NhdGlvblxuXG4gIGVudHJpZXMgPSBpbml0aWFsRW50cmllcy5tYXAoKGVudHJ5LCBpbmRleCkgPT4gY3JlYXRlTWVtb3J5TG9jYXRpb24oZW50cnksIHR5cGVvZiBlbnRyeSA9PT0gXCJzdHJpbmdcIiA/IG51bGwgOiBlbnRyeS5zdGF0ZSwgaW5kZXggPT09IDAgPyBcImRlZmF1bHRcIiA6IHVuZGVmaW5lZCkpO1xuICBsZXQgaW5kZXggPSBjbGFtcEluZGV4KGluaXRpYWxJbmRleCA9PSBudWxsID8gZW50cmllcy5sZW5ndGggLSAxIDogaW5pdGlhbEluZGV4KTtcbiAgbGV0IGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gIGxldCBsaXN0ZW5lciA9IG51bGw7XG5cbiAgZnVuY3Rpb24gY2xhbXBJbmRleChuKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIDApLCBlbnRyaWVzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKCkge1xuICAgIHJldHVybiBlbnRyaWVzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUxvY2F0aW9uKHRvLCBzdGF0ZSwga2V5KSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihlbnRyaWVzID8gZ2V0Q3VycmVudExvY2F0aW9uKCkucGF0aG5hbWUgOiBcIi9cIiwgdG8sIHN0YXRlLCBrZXkpO1xuICAgIHdhcm5pbmcobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApID09PSBcIi9cIiwgXCJyZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gbWVtb3J5IGhpc3Rvcnk6IFwiICsgSlNPTi5zdHJpbmdpZnkodG8pKTtcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKHRvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IHtcbiAgICBnZXQgaW5kZXgoKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIGdldCBhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG5cbiAgICBnZXQgbG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUhyZWYsXG5cbiAgICBjcmVhdGVVUkwodG8pIHtcbiAgICAgIHJldHVybiBuZXcgVVJMKGNyZWF0ZUhyZWYodG8pLCBcImh0dHA6Ly9sb2NhbGhvc3RcIik7XG4gICAgfSxcblxuICAgIGVuY29kZUxvY2F0aW9uKHRvKSB7XG4gICAgICBsZXQgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lOiBwYXRoLnBhdGhuYW1lIHx8IFwiXCIsXG4gICAgICAgIHNlYXJjaDogcGF0aC5zZWFyY2ggfHwgXCJcIixcbiAgICAgICAgaGFzaDogcGF0aC5oYXNoIHx8IFwiXCJcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHB1c2godG8sIHN0YXRlKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUHVzaDtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUpO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCBlbnRyaWVzLmxlbmd0aCwgbmV4dExvY2F0aW9uKTtcblxuICAgICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVwbGFjZSh0bywgc3RhdGUpIHtcbiAgICAgIGFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKHRvLCBzdGF0ZSk7XG4gICAgICBlbnRyaWVzW2luZGV4XSA9IG5leHRMb2NhdGlvbjtcblxuICAgICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcbiAgICAgICAgICBkZWx0YTogMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ28oZGVsdGEpIHtcbiAgICAgIGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgICBsZXQgbmV4dEluZGV4ID0gY2xhbXBJbmRleChpbmRleCArIGRlbHRhKTtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBlbnRyaWVzW25leHRJbmRleF07XG4gICAgICBpbmRleCA9IG5leHRJbmRleDtcblxuICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcbiAgICAgICAgICBkZWx0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbGlzdGVuKGZuKSB7XG4gICAgICBsaXN0ZW5lciA9IGZuO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbGlzdGVuZXIgPSBudWxsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG4vKipcbiAqIEJyb3dzZXIgaGlzdG9yeSBzdG9yZXMgdGhlIGxvY2F0aW9uIGluIHJlZ3VsYXIgVVJMcy4gVGhpcyBpcyB0aGUgc3RhbmRhcmQgZm9yXG4gKiBtb3N0IHdlYiBhcHBzLCBidXQgaXQgcmVxdWlyZXMgc29tZSBjb25maWd1cmF0aW9uIG9uIHRoZSBzZXJ2ZXIgdG8gZW5zdXJlIHlvdVxuICogc2VydmUgdGhlIHNhbWUgYXBwIGF0IG11bHRpcGxlIFVSTHMuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL2hpc3RvcnkvdHJlZS9tYWluL2RvY3MvYXBpLXJlZmVyZW5jZS5tZCNjcmVhdGVicm93c2VyaGlzdG9yeVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpIHtcbiAgICBsZXQge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoXG4gICAgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24oXCJcIiwge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoXG4gICAgfSwgLy8gc3RhdGUgZGVmYXVsdHMgdG8gYG51bGxgIGJlY2F1c2UgYHdpbmRvdy5oaXN0b3J5LnN0YXRlYCBkb2VzXG4gICAgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLnVzciB8fCBudWxsLCBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUua2V5IHx8IFwiZGVmYXVsdFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIcmVmKHdpbmRvdywgdG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKTtcbiAgfVxuXG4gIHJldHVybiBnZXRVcmxCYXNlZEhpc3RvcnkoY3JlYXRlQnJvd3NlckxvY2F0aW9uLCBjcmVhdGVCcm93c2VySHJlZiwgbnVsbCwgb3B0aW9ucyk7XG59XG4vKipcbiAqIEhhc2ggaGlzdG9yeSBzdG9yZXMgdGhlIGxvY2F0aW9uIGluIHdpbmRvdy5sb2NhdGlvbi5oYXNoLiBUaGlzIG1ha2VzIGl0IGlkZWFsXG4gKiBmb3Igc2l0dWF0aW9ucyB3aGVyZSB5b3UgZG9uJ3Qgd2FudCB0byBzZW5kIHRoZSBsb2NhdGlvbiB0byB0aGUgc2VydmVyIGZvclxuICogc29tZSByZWFzb24sIGVpdGhlciBiZWNhdXNlIHlvdSBkbyBjYW5ub3QgY29uZmlndXJlIGl0IG9yIHRoZSBVUkwgc3BhY2UgaXNcbiAqIHJlc2VydmVkIGZvciBzb21ldGhpbmcgZWxzZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vaGlzdG9yeS90cmVlL21haW4vZG9jcy9hcGktcmVmZXJlbmNlLm1kI2NyZWF0ZWhhc2hoaXN0b3J5XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3Rvcnkob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSGFzaExvY2F0aW9uKHdpbmRvdywgZ2xvYmFsSGlzdG9yeSkge1xuICAgIGxldCB7XG4gICAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgICAgc2VhcmNoID0gXCJcIixcbiAgICAgIGhhc2ggPSBcIlwiXG4gICAgfSA9IHBhcnNlUGF0aCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihcIlwiLCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2hcbiAgICB9LCAvLyBzdGF0ZSBkZWZhdWx0cyB0byBgbnVsbGAgYmVjYXVzZSBgd2luZG93Lmhpc3Rvcnkuc3RhdGVgIGRvZXNcbiAgICBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUudXNyIHx8IG51bGwsIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS5rZXkgfHwgXCJkZWZhdWx0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSGFzaEhyZWYod2luZG93LCB0bykge1xuICAgIGxldCBiYXNlID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpO1xuICAgIGxldCBocmVmID0gXCJcIjtcblxuICAgIGlmIChiYXNlICYmIGJhc2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSkge1xuICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgbGV0IGhhc2hJbmRleCA9IHVybC5pbmRleE9mKFwiI1wiKTtcbiAgICAgIGhyZWYgPSBoYXNoSW5kZXggPT09IC0xID8gdXJsIDogdXJsLnNsaWNlKDAsIGhhc2hJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhyZWYgKyBcIiNcIiArICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlSGFzaExvY2F0aW9uKGxvY2F0aW9uLCB0bykge1xuICAgIHdhcm5pbmcobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApID09PSBcIi9cIiwgXCJyZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gaGFzaCBoaXN0b3J5LnB1c2goXCIgKyBKU09OLnN0cmluZ2lmeSh0bykgKyBcIilcIik7XG4gIH1cblxuICByZXR1cm4gZ2V0VXJsQmFzZWRIaXN0b3J5KGNyZWF0ZUhhc2hMb2NhdGlvbiwgY3JlYXRlSGFzaEhyZWYsIHZhbGlkYXRlSGFzaExvY2F0aW9uLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGludmFyaWFudCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuZnVuY3Rpb24gd2FybmluZyhjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSBjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gV2VsY29tZSB0byBkZWJ1Z2dpbmcgaGlzdG9yeSFcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHlvdSBjYW4gbW9yZSBlYXNpbHlcbiAgICAgIC8vIGZpbmQgdGhlIHNvdXJjZSBmb3IgYSB3YXJuaW5nIHRoYXQgYXBwZWFycyBpbiB0aGUgY29uc29sZSBieVxuICAgICAgLy8gZW5hYmxpbmcgXCJwYXVzZSBvbiBleGNlcHRpb25zXCIgaW4geW91ciBKYXZhU2NyaXB0IGRlYnVnZ2VyLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA4KTtcbn1cbi8qKlxuICogRm9yIGJyb3dzZXItYmFzZWQgaGlzdG9yaWVzLCB3ZSBjb21iaW5lIHRoZSBzdGF0ZSBhbmQga2V5IGludG8gYW4gb2JqZWN0XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRIaXN0b3J5U3RhdGUobG9jYXRpb24sIGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgdXNyOiBsb2NhdGlvbi5zdGF0ZSxcbiAgICBrZXk6IGxvY2F0aW9uLmtleSxcbiAgICBpZHg6IGluZGV4XG4gIH07XG59XG4vKipcbiAqIENyZWF0ZXMgYSBMb2NhdGlvbiBvYmplY3Qgd2l0aCBhIHVuaXF1ZSBrZXkgZnJvbSB0aGUgZ2l2ZW4gUGF0aFxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oY3VycmVudCwgdG8sIHN0YXRlLCBrZXkpIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IG51bGw7XG4gIH1cblxuICBsZXQgbG9jYXRpb24gPSBfZXh0ZW5kcyh7XG4gICAgcGF0aG5hbWU6IHR5cGVvZiBjdXJyZW50ID09PSBcInN0cmluZ1wiID8gY3VycmVudCA6IGN1cnJlbnQucGF0aG5hbWUsXG4gICAgc2VhcmNoOiBcIlwiLFxuICAgIGhhc2g6IFwiXCJcbiAgfSwgdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvLCB7XG4gICAgc3RhdGUsXG4gICAgLy8gVE9ETzogVGhpcyBjb3VsZCBiZSBjbGVhbmVkIHVwLiAgcHVzaC9yZXBsYWNlIHNob3VsZCBwcm9iYWJseSBqdXN0IHRha2VcbiAgICAvLyBmdWxsIExvY2F0aW9ucyBub3cgYW5kIGF2b2lkIHRoZSBuZWVkIHRvIHJ1biB0aHJvdWdoIHRoaXMgZmxvdyBhdCBhbGxcbiAgICAvLyBCdXQgdGhhdCdzIGEgcHJldHR5IGJpZyByZWZhY3RvciB0byB0aGUgY3VycmVudCB0ZXN0IHN1aXRlIHNvIGdvaW5nIHRvXG4gICAgLy8ga2VlcCBhcyBpcyBmb3IgdGhlIHRpbWUgYmVpbmcgYW5kIGp1c3QgbGV0IGFueSBpbmNvbWluZyBrZXlzIHRha2UgcHJlY2VkZW5jZVxuICAgIGtleTogdG8gJiYgdG8ua2V5IHx8IGtleSB8fCBjcmVhdGVLZXkoKVxuICB9KTtcblxuICByZXR1cm4gbG9jYXRpb247XG59XG4vKipcbiAqIENyZWF0ZXMgYSBzdHJpbmcgVVJMIHBhdGggZnJvbSB0aGUgZ2l2ZW4gcGF0aG5hbWUsIHNlYXJjaCwgYW5kIGhhc2ggY29tcG9uZW50cy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVQYXRoKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCJcbiAgfSA9IF9yZWY7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSBcIj9cIikgcGF0aG5hbWUgKz0gc2VhcmNoLmNoYXJBdCgwKSA9PT0gXCI/XCIgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gXCIjXCIpIHBhdGhuYW1lICs9IGhhc2guY2hhckF0KDApID09PSBcIiNcIiA/IGhhc2ggOiBcIiNcIiArIGhhc2g7XG4gIHJldHVybiBwYXRobmFtZTtcbn1cbi8qKlxuICogUGFyc2VzIGEgc3RyaW5nIFVSTCBwYXRoIGludG8gaXRzIHNlcGFyYXRlIHBhdGhuYW1lLCBzZWFyY2gsIGFuZCBoYXNoIGNvbXBvbmVudHMuXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgbGV0IHBhcnNlZFBhdGggPSB7fTtcblxuICBpZiAocGF0aCkge1xuICAgIGxldCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCIjXCIpO1xuXG4gICAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgICBwYXJzZWRQYXRoLmhhc2ggPSBwYXRoLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gICAgfVxuXG4gICAgbGV0IHNlYXJjaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiP1wiKTtcblxuICAgIGlmIChzZWFyY2hJbmRleCA+PSAwKSB7XG4gICAgICBwYXJzZWRQYXRoLnNlYXJjaCA9IHBhdGguc3Vic3RyKHNlYXJjaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhcnNlZFBhdGgucGF0aG5hbWUgPSBwYXRoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWRQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRVcmxCYXNlZEhpc3RvcnkoZ2V0TG9jYXRpb24sIGNyZWF0ZUhyZWYsIHZhbGlkYXRlTG9jYXRpb24sIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGxldCB7XG4gICAgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcsXG4gICAgdjVDb21wYXQgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgbGV0IGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgbGV0IGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gIGxldCBsaXN0ZW5lciA9IG51bGw7XG4gIGxldCBpbmRleCA9IGdldEluZGV4KCk7IC8vIEluZGV4IHNob3VsZCBvbmx5IGJlIG51bGwgd2hlbiB3ZSBpbml0aWFsaXplLiBJZiBub3QsIGl0J3MgYmVjYXVzZSB0aGVcbiAgLy8gdXNlciBjYWxsZWQgaGlzdG9yeS5wdXNoU3RhdGUgb3IgaGlzdG9yeS5yZXBsYWNlU3RhdGUgZGlyZWN0bHksIGluIHdoaWNoXG4gIC8vIGNhc2Ugd2Ugc2hvdWxkIGxvZyBhIHdhcm5pbmcgYXMgaXQgd2lsbCByZXN1bHQgaW4gYnVncy5cblxuICBpZiAoaW5kZXggPT0gbnVsbCkge1xuICAgIGluZGV4ID0gMDtcbiAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZShfZXh0ZW5kcyh7fSwgZ2xvYmFsSGlzdG9yeS5zdGF0ZSwge1xuICAgICAgaWR4OiBpbmRleFxuICAgIH0pLCBcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluZGV4KCkge1xuICAgIGxldCBzdGF0ZSA9IGdsb2JhbEhpc3Rvcnkuc3RhdGUgfHwge1xuICAgICAgaWR4OiBudWxsXG4gICAgfTtcbiAgICByZXR1cm4gc3RhdGUuaWR4O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wKCkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgbGV0IG5leHRJbmRleCA9IGdldEluZGV4KCk7XG4gICAgbGV0IGRlbHRhID0gbmV4dEluZGV4ID09IG51bGwgPyBudWxsIDogbmV4dEluZGV4IC0gaW5kZXg7XG4gICAgaW5kZXggPSBuZXh0SW5kZXg7XG5cbiAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgZGVsdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2godG8sIHN0YXRlKSB7XG4gICAgYWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oaGlzdG9yeS5sb2NhdGlvbiwgdG8sIHN0YXRlKTtcbiAgICBpZiAodmFsaWRhdGVMb2NhdGlvbikgdmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbiwgdG8pO1xuICAgIGluZGV4ID0gZ2V0SW5kZXgoKSArIDE7XG4gICAgbGV0IGhpc3RvcnlTdGF0ZSA9IGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpO1xuICAgIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pOyAvLyB0cnkuLi5jYXRjaCBiZWNhdXNlIGlPUyBsaW1pdHMgdXMgdG8gMTAwIHB1c2hTdGF0ZSBjYWxscyA6L1xuXG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIiwgdXJsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gVGhleSBhcmUgZ29pbmcgdG8gbG9zZSBzdGF0ZSBoZXJlLCBidXQgdGhlcmUgaXMgbm8gcmVhbFxuICAgICAgLy8gd2F5IHRvIHdhcm4gdGhlbSBhYm91dCBpdCBzaW5jZSB0aGUgcGFnZSB3aWxsIHJlZnJlc2guLi5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICB9XG5cbiAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UodG8sIHN0YXRlKSB7XG4gICAgYWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oaGlzdG9yeS5sb2NhdGlvbiwgdG8sIHN0YXRlKTtcbiAgICBpZiAodmFsaWRhdGVMb2NhdGlvbikgdmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbiwgdG8pO1xuICAgIGluZGV4ID0gZ2V0SW5kZXgoKTtcbiAgICBsZXQgaGlzdG9yeVN0YXRlID0gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCk7XG4gICAgbGV0IHVybCA9IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiLCB1cmwpO1xuXG4gICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhOiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVUkwodG8pIHtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIGlzIFwibnVsbFwiICh0aGUgbGl0ZXJhbCBzdHJpbmcgdmFsdWUpIGluIEZpcmVmb3hcbiAgICAvLyB1bmRlciBjZXJ0YWluIGNvbmRpdGlvbnMsIG5vdGFibHkgd2hlbiBzZXJ2aW5nIGZyb20gYSBsb2NhbCBIVE1MIGZpbGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODc4Mjk3XG4gICAgbGV0IGJhc2UgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICE9PSBcIm51bGxcIiA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gOiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBsZXQgaHJlZiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gICAgaW52YXJpYW50KGJhc2UsIFwiTm8gd2luZG93LmxvY2F0aW9uLihvcmlnaW58aHJlZikgYXZhaWxhYmxlIHRvIGNyZWF0ZSBVUkwgZm9yIGhyZWY6IFwiICsgaHJlZik7XG4gICAgcmV0dXJuIG5ldyBVUkwoaHJlZiwgYmFzZSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IHtcbiAgICBnZXQgYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIGdldExvY2F0aW9uKHdpbmRvdywgZ2xvYmFsSGlzdG9yeSk7XG4gICAgfSxcblxuICAgIGxpc3Rlbihmbikge1xuICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgaGlzdG9yeSBvbmx5IGFjY2VwdHMgb25lIGFjdGl2ZSBsaXN0ZW5lclwiKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudFR5cGUsIGhhbmRsZVBvcCk7XG4gICAgICBsaXN0ZW5lciA9IGZuO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudFR5cGUsIGhhbmRsZVBvcCk7XG4gICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUhyZWYodG8pIHtcbiAgICAgIHJldHVybiBjcmVhdGVIcmVmKHdpbmRvdywgdG8pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVVUkwsXG5cbiAgICBlbmNvZGVMb2NhdGlvbih0bykge1xuICAgICAgLy8gRW5jb2RlIGEgTG9jYXRpb24gdGhlIHNhbWUgd2F5IHdpbmRvdy5sb2NhdGlvbiB3b3VsZFxuICAgICAgbGV0IHVybCA9IGNyZWF0ZVVSTCh0byk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHVybC5zZWFyY2gsXG4gICAgICAgIGhhc2g6IHVybC5oYXNoXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBwdXNoLFxuICAgIHJlcGxhY2UsXG5cbiAgICBnbyhuKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgICB9XG5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59IC8vI2VuZHJlZ2lvblxuXG52YXIgUmVzdWx0VHlwZTtcblxuKGZ1bmN0aW9uIChSZXN1bHRUeXBlKSB7XG4gIFJlc3VsdFR5cGVbXCJkYXRhXCJdID0gXCJkYXRhXCI7XG4gIFJlc3VsdFR5cGVbXCJkZWZlcnJlZFwiXSA9IFwiZGVmZXJyZWRcIjtcbiAgUmVzdWx0VHlwZVtcInJlZGlyZWN0XCJdID0gXCJyZWRpcmVjdFwiO1xuICBSZXN1bHRUeXBlW1wiZXJyb3JcIl0gPSBcImVycm9yXCI7XG59KShSZXN1bHRUeXBlIHx8IChSZXN1bHRUeXBlID0ge30pKTtcblxuY29uc3QgaW1tdXRhYmxlUm91dGVLZXlzID0gbmV3IFNldChbXCJsYXp5XCIsIFwiY2FzZVNlbnNpdGl2ZVwiLCBcInBhdGhcIiwgXCJpZFwiLCBcImluZGV4XCIsIFwiY2hpbGRyZW5cIl0pO1xuXG5mdW5jdGlvbiBpc0luZGV4Um91dGUocm91dGUpIHtcbiAgcmV0dXJuIHJvdXRlLmluZGV4ID09PSB0cnVlO1xufSAvLyBXYWxrIHRoZSByb3V0ZSB0cmVlIGdlbmVyYXRpbmcgdW5pcXVlIElEcyB3aGVyZSBuZWNlc3Nhcnkgc28gd2UgYXJlIHdvcmtpbmdcbi8vIHNvbGVseSB3aXRoIEFnbm9zdGljRGF0YVJvdXRlT2JqZWN0J3Mgd2l0aGluIHRoZSBSb3V0ZXJcblxuXG5mdW5jdGlvbiBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKHJvdXRlcywgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgcGFyZW50UGF0aCwgbWFuaWZlc3QpIHtcbiAgaWYgKHBhcmVudFBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhcmVudFBhdGggPSBbXTtcbiAgfVxuXG4gIGlmIChtYW5pZmVzdCA9PT0gdm9pZCAwKSB7XG4gICAgbWFuaWZlc3QgPSB7fTtcbiAgfVxuXG4gIHJldHVybiByb3V0ZXMubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdHJlZVBhdGggPSBbLi4ucGFyZW50UGF0aCwgaW5kZXhdO1xuICAgIGxldCBpZCA9IHR5cGVvZiByb3V0ZS5pZCA9PT0gXCJzdHJpbmdcIiA/IHJvdXRlLmlkIDogdHJlZVBhdGguam9pbihcIi1cIik7XG4gICAgaW52YXJpYW50KHJvdXRlLmluZGV4ICE9PSB0cnVlIHx8ICFyb3V0ZS5jaGlsZHJlbiwgXCJDYW5ub3Qgc3BlY2lmeSBjaGlsZHJlbiBvbiBhbiBpbmRleCByb3V0ZVwiKTtcbiAgICBpbnZhcmlhbnQoIW1hbmlmZXN0W2lkXSwgXCJGb3VuZCBhIHJvdXRlIGlkIGNvbGxpc2lvbiBvbiBpZCBcXFwiXCIgKyBpZCArIFwiXFxcIi4gIFJvdXRlIFwiICsgXCJpZCdzIG11c3QgYmUgZ2xvYmFsbHkgdW5pcXVlIHdpdGhpbiBEYXRhIFJvdXRlciB1c2FnZXNcIik7XG5cbiAgICBpZiAoaXNJbmRleFJvdXRlKHJvdXRlKSkge1xuICAgICAgbGV0IGluZGV4Um91dGUgPSBfZXh0ZW5kcyh7fSwgcm91dGUsIHtcbiAgICAgICAgaGFzRXJyb3JCb3VuZGFyeTogZGV0ZWN0RXJyb3JCb3VuZGFyeShyb3V0ZSksXG4gICAgICAgIGlkXG4gICAgICB9KTtcblxuICAgICAgbWFuaWZlc3RbaWRdID0gaW5kZXhSb3V0ZTtcbiAgICAgIHJldHVybiBpbmRleFJvdXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aE9yTGF5b3V0Um91dGUgPSBfZXh0ZW5kcyh7fSwgcm91dGUsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGRldGVjdEVycm9yQm91bmRhcnkocm91dGUpLFxuICAgICAgICBjaGlsZHJlbjogdW5kZWZpbmVkXG4gICAgICB9KTtcblxuICAgICAgbWFuaWZlc3RbaWRdID0gcGF0aE9yTGF5b3V0Um91dGU7XG5cbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgICAgICBwYXRoT3JMYXlvdXRSb3V0ZS5jaGlsZHJlbiA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGUuY2hpbGRyZW4sIGRldGVjdEVycm9yQm91bmRhcnksIHRyZWVQYXRoLCBtYW5pZmVzdCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXRoT3JMYXlvdXRSb3V0ZTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBNYXRjaGVzIHRoZSBnaXZlbiByb3V0ZXMgdG8gYSBsb2NhdGlvbiBhbmQgcmV0dXJucyB0aGUgbWF0Y2ggZGF0YS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL21hdGNoLXJvdXRlc1xuICovXG5cbmZ1bmN0aW9uIG1hdGNoUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcsIGJhc2VuYW1lKSB7XG4gIGlmIChiYXNlbmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZW5hbWUgPSBcIi9cIjtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbiA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgbGV0IHBhdGhuYW1lID0gc3RyaXBCYXNlbmFtZShsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIiwgYmFzZW5hbWUpO1xuXG4gIGlmIChwYXRobmFtZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgYnJhbmNoZXMgPSBmbGF0dGVuUm91dGVzKHJvdXRlcyk7XG4gIHJhbmtSb3V0ZUJyYW5jaGVzKGJyYW5jaGVzKTtcbiAgbGV0IG1hdGNoZXMgPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwOyBtYXRjaGVzID09IG51bGwgJiYgaSA8IGJyYW5jaGVzLmxlbmd0aDsgKytpKSB7XG4gICAgbWF0Y2hlcyA9IG1hdGNoUm91dGVCcmFuY2goYnJhbmNoZXNbaV0sIC8vIEluY29taW5nIHBhdGhuYW1lcyBhcmUgZ2VuZXJhbGx5IGVuY29kZWQgZnJvbSBlaXRoZXIgd2luZG93LmxvY2F0aW9uXG4gICAgLy8gb3IgZnJvbSByb3V0ZXIubmF2aWdhdGUsIGJ1dCB3ZSB3YW50IHRvIG1hdGNoIGFnYWluc3QgdGhlIHVuZW5jb2RlZFxuICAgIC8vIHBhdGhzIGluIHRoZSByb3V0ZSBkZWZpbml0aW9ucy4gIE1lbW9yeSByb3V0ZXIgbG9jYXRpb25zIHdvbid0IGJlXG4gICAgLy8gZW5jb2RlZCBoZXJlIGJ1dCB0aGVyZSBhbHNvIHNob3VsZG4ndCBiZSBhbnl0aGluZyB0byBkZWNvZGUgc28gdGhpc1xuICAgIC8vIHNob3VsZCBiZSBhIHNhZmUgb3BlcmF0aW9uLiAgVGhpcyBhdm9pZHMgbmVlZGluZyBtYXRjaFJvdXRlcyB0byBiZVxuICAgIC8vIGhpc3RvcnktYXdhcmUuXG4gICAgc2FmZWx5RGVjb2RlVVJJKHBhdGhuYW1lKSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZmxhdHRlblJvdXRlcyhyb3V0ZXMsIGJyYW5jaGVzLCBwYXJlbnRzTWV0YSwgcGFyZW50UGF0aCkge1xuICBpZiAoYnJhbmNoZXMgPT09IHZvaWQgMCkge1xuICAgIGJyYW5jaGVzID0gW107XG4gIH1cblxuICBpZiAocGFyZW50c01ldGEgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudHNNZXRhID0gW107XG4gIH1cblxuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFwiXCI7XG4gIH1cblxuICBsZXQgZmxhdHRlblJvdXRlID0gKHJvdXRlLCBpbmRleCwgcmVsYXRpdmVQYXRoKSA9PiB7XG4gICAgbGV0IG1ldGEgPSB7XG4gICAgICByZWxhdGl2ZVBhdGg6IHJlbGF0aXZlUGF0aCA9PT0gdW5kZWZpbmVkID8gcm91dGUucGF0aCB8fCBcIlwiIDogcmVsYXRpdmVQYXRoLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogcm91dGUuY2FzZVNlbnNpdGl2ZSA9PT0gdHJ1ZSxcbiAgICAgIGNoaWxkcmVuSW5kZXg6IGluZGV4LFxuICAgICAgcm91dGVcbiAgICB9O1xuXG4gICAgaWYgKG1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICBpbnZhcmlhbnQobWV0YS5yZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChwYXJlbnRQYXRoKSwgXCJBYnNvbHV0ZSByb3V0ZSBwYXRoIFxcXCJcIiArIG1ldGEucmVsYXRpdmVQYXRoICsgXCJcXFwiIG5lc3RlZCB1bmRlciBwYXRoIFwiICsgKFwiXFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIiBpcyBub3QgdmFsaWQuIEFuIGFic29sdXRlIGNoaWxkIHJvdXRlIHBhdGggXCIpICsgXCJtdXN0IHN0YXJ0IHdpdGggdGhlIGNvbWJpbmVkIHBhdGggb2YgYWxsIGl0cyBwYXJlbnQgcm91dGVzLlwiKTtcbiAgICAgIG1ldGEucmVsYXRpdmVQYXRoID0gbWV0YS5yZWxhdGl2ZVBhdGguc2xpY2UocGFyZW50UGF0aC5sZW5ndGgpO1xuICAgIH1cblxuICAgIGxldCBwYXRoID0gam9pblBhdGhzKFtwYXJlbnRQYXRoLCBtZXRhLnJlbGF0aXZlUGF0aF0pO1xuICAgIGxldCByb3V0ZXNNZXRhID0gcGFyZW50c01ldGEuY29uY2F0KG1ldGEpOyAvLyBBZGQgdGhlIGNoaWxkcmVuIGJlZm9yZSBhZGRpbmcgdGhpcyByb3V0ZSB0byB0aGUgYXJyYXkgc28gd2UgdHJhdmVyc2UgdGhlXG4gICAgLy8gcm91dGUgdHJlZSBkZXB0aC1maXJzdCBhbmQgY2hpbGQgcm91dGVzIGFwcGVhciBiZWZvcmUgdGhlaXIgcGFyZW50cyBpblxuICAgIC8vIHRoZSBcImZsYXR0ZW5lZFwiIHZlcnNpb24uXG5cbiAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgaW52YXJpYW50KCAvLyBPdXIgdHlwZXMga25vdyBiZXR0ZXIsIGJ1dCBydW50aW1lIEpTIG1heSBub3QhXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICByb3V0ZS5pbmRleCAhPT0gdHJ1ZSwgXCJJbmRleCByb3V0ZXMgbXVzdCBub3QgaGF2ZSBjaGlsZCByb3V0ZXMuIFBsZWFzZSByZW1vdmUgXCIgKyAoXCJhbGwgY2hpbGQgcm91dGVzIGZyb20gcm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiLlwiKSk7XG4gICAgICBmbGF0dGVuUm91dGVzKHJvdXRlLmNoaWxkcmVuLCBicmFuY2hlcywgcm91dGVzTWV0YSwgcGF0aCk7XG4gICAgfSAvLyBSb3V0ZXMgd2l0aG91dCBhIHBhdGggc2hvdWxkbid0IGV2ZXIgbWF0Y2ggYnkgdGhlbXNlbHZlcyB1bmxlc3MgdGhleSBhcmVcbiAgICAvLyBpbmRleCByb3V0ZXMsIHNvIGRvbid0IGFkZCB0aGVtIHRvIHRoZSBsaXN0IG9mIHBvc3NpYmxlIGJyYW5jaGVzLlxuXG5cbiAgICBpZiAocm91dGUucGF0aCA9PSBudWxsICYmICFyb3V0ZS5pbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGJyYW5jaGVzLnB1c2goe1xuICAgICAgcGF0aCxcbiAgICAgIHNjb3JlOiBjb21wdXRlU2NvcmUocGF0aCwgcm91dGUuaW5kZXgpLFxuICAgICAgcm91dGVzTWV0YVxuICAgIH0pO1xuICB9O1xuXG4gIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSwgaW5kZXgpID0+IHtcbiAgICB2YXIgX3JvdXRlJHBhdGg7XG5cbiAgICAvLyBjb2Fyc2UtZ3JhaW4gY2hlY2sgZm9yIG9wdGlvbmFsIHBhcmFtc1xuICAgIGlmIChyb3V0ZS5wYXRoID09PSBcIlwiIHx8ICEoKF9yb3V0ZSRwYXRoID0gcm91dGUucGF0aCkgIT0gbnVsbCAmJiBfcm91dGUkcGF0aC5pbmNsdWRlcyhcIj9cIikpKSB7XG4gICAgICBmbGF0dGVuUm91dGUocm91dGUsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgZXhwbG9kZWQgb2YgZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocm91dGUucGF0aCkpIHtcbiAgICAgICAgZmxhdHRlblJvdXRlKHJvdXRlLCBpbmRleCwgZXhwbG9kZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBicmFuY2hlcztcbn1cbi8qKlxuICogQ29tcHV0ZXMgYWxsIGNvbWJpbmF0aW9ucyBvZiBvcHRpb25hbCBwYXRoIHNlZ21lbnRzIGZvciBhIGdpdmVuIHBhdGgsXG4gKiBleGNsdWRpbmcgY29tYmluYXRpb25zIHRoYXQgYXJlIGFtYmlndW91cyBhbmQgb2YgbG93ZXIgcHJpb3JpdHkuXG4gKlxuICogRm9yIGV4YW1wbGUsIGAvb25lLzp0d28/L3RocmVlLzpmb3VyPy86Zml2ZT9gIGV4cGxvZGVzIHRvOlxuICogLSBgL29uZS90aHJlZWBcbiAqIC0gYC9vbmUvOnR3by90aHJlZWBcbiAqIC0gYC9vbmUvdGhyZWUvOmZvdXJgXG4gKiAtIGAvb25lL3RocmVlLzpmaXZlYFxuICogLSBgL29uZS86dHdvL3RocmVlLzpmb3VyYFxuICogLSBgL29uZS86dHdvL3RocmVlLzpmaXZlYFxuICogLSBgL29uZS90aHJlZS86Zm91ci86Zml2ZWBcbiAqIC0gYC9vbmUvOnR3by90aHJlZS86Zm91ci86Zml2ZWBcbiAqL1xuXG5cbmZ1bmN0aW9uIGV4cGxvZGVPcHRpb25hbFNlZ21lbnRzKHBhdGgpIHtcbiAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgbGV0IFtmaXJzdCwgLi4ucmVzdF0gPSBzZWdtZW50czsgLy8gT3B0aW9uYWwgcGF0aCBzZWdtZW50cyBhcmUgZGVub3RlZCBieSBhIHRyYWlsaW5nIGA/YFxuXG4gIGxldCBpc09wdGlvbmFsID0gZmlyc3QuZW5kc1dpdGgoXCI/XCIpOyAvLyBDb21wdXRlIHRoZSBjb3JyZXNwb25kaW5nIHJlcXVpcmVkIHNlZ21lbnQ6IGBmb28/YCAtPiBgZm9vYFxuXG4gIGxldCByZXF1aXJlZCA9IGZpcnN0LnJlcGxhY2UoL1xcPyQvLCBcIlwiKTtcblxuICBpZiAocmVzdC5sZW5ndGggPT09IDApIHtcbiAgICAvLyBJbnRlcHJldCBlbXB0eSBzdHJpbmcgYXMgb21pdHRpbmcgYW4gb3B0aW9uYWwgc2VnbWVudFxuICAgIC8vIGBbXCJvbmVcIiwgXCJcIiwgXCJ0aHJlZVwiXWAgY29ycmVzcG9uZHMgdG8gb21pdHRpbmcgYDp0d29gIGZyb20gYC9vbmUvOnR3bz8vdGhyZWVgIC0+IGAvb25lL3RocmVlYFxuICAgIHJldHVybiBpc09wdGlvbmFsID8gW3JlcXVpcmVkLCBcIlwiXSA6IFtyZXF1aXJlZF07XG4gIH1cblxuICBsZXQgcmVzdEV4cGxvZGVkID0gZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocmVzdC5qb2luKFwiL1wiKSk7XG4gIGxldCByZXN1bHQgPSBbXTsgLy8gQWxsIGNoaWxkIHBhdGhzIHdpdGggdGhlIHByZWZpeC4gIERvIHRoaXMgZm9yIGFsbCBjaGlsZHJlbiBiZWZvcmUgdGhlXG4gIC8vIG9wdGlvbmFsIHZlcnNpb24gZm9yIGFsbCBjaGlsZHJlbiBzbyB3ZSBnZXQgY29uc2lzdGVudCBvcmRlcmluZyB3aGVyZSB0aGVcbiAgLy8gcGFyZW50IG9wdGlvbmFsIGFzcGVjdCBpcyBwcmVmZXJyZWQgYXMgcmVxdWlyZWQuICBPdGhlcndpc2UsIHdlIGNhbiBnZXRcbiAgLy8gY2hpbGQgc2VjdGlvbnMgaW50ZXJzcGVyc2VkIHdoZXJlIGRlZXBlciBvcHRpb25hbCBzZWdtZW50cyBhcmUgaGlnaGVyIHRoYW5cbiAgLy8gcGFyZW50IG9wdGlvbmFsIHNlZ21lbnRzLCB3aGVyZSBmb3IgZXhhbXBsZSwgLzp0d28gd291bGQgZXhwbG9kZXMgX2VhcmxpZXJfXG4gIC8vIHRoZW4gLzpvbmUuICBCeSBhbHdheXMgaW5jbHVkaW5nIHRoZSBwYXJlbnQgYXMgcmVxdWlyZWQgX2ZvciBhbGwgY2hpbGRyZW5fXG4gIC8vIGZpcnN0LCB3ZSBhdm9pZCB0aGlzIGlzc3VlXG5cbiAgcmVzdWx0LnB1c2goLi4ucmVzdEV4cGxvZGVkLm1hcChzdWJwYXRoID0+IHN1YnBhdGggPT09IFwiXCIgPyByZXF1aXJlZCA6IFtyZXF1aXJlZCwgc3VicGF0aF0uam9pbihcIi9cIikpKTsgLy8gVGhlbiBpZiB0aGlzIGlzIGFuIG9wdGlvbmFsIHZhbHVlLCBhZGQgYWxsIGNoaWxkIHZlcnNpb25zIHdpdGhvdXRcblxuICBpZiAoaXNPcHRpb25hbCkge1xuICAgIHJlc3VsdC5wdXNoKC4uLnJlc3RFeHBsb2RlZCk7XG4gIH0gLy8gZm9yIGFic29sdXRlIHBhdGhzLCBlbnN1cmUgYC9gIGluc3RlYWQgb2YgZW1wdHkgc2VnbWVudFxuXG5cbiAgcmV0dXJuIHJlc3VsdC5tYXAoZXhwbG9kZWQgPT4gcGF0aC5zdGFydHNXaXRoKFwiL1wiKSAmJiBleHBsb2RlZCA9PT0gXCJcIiA/IFwiL1wiIDogZXhwbG9kZWQpO1xufVxuXG5mdW5jdGlvbiByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcykge1xuICBicmFuY2hlcy5zb3J0KChhLCBiKSA9PiBhLnNjb3JlICE9PSBiLnNjb3JlID8gYi5zY29yZSAtIGEuc2NvcmUgLy8gSGlnaGVyIHNjb3JlIGZpcnN0XG4gIDogY29tcGFyZUluZGV4ZXMoYS5yb3V0ZXNNZXRhLm1hcChtZXRhID0+IG1ldGEuY2hpbGRyZW5JbmRleCksIGIucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpKSk7XG59XG5cbmNvbnN0IHBhcmFtUmUgPSAvXjpcXHcrJC87XG5jb25zdCBkeW5hbWljU2VnbWVudFZhbHVlID0gMztcbmNvbnN0IGluZGV4Um91dGVWYWx1ZSA9IDI7XG5jb25zdCBlbXB0eVNlZ21lbnRWYWx1ZSA9IDE7XG5jb25zdCBzdGF0aWNTZWdtZW50VmFsdWUgPSAxMDtcbmNvbnN0IHNwbGF0UGVuYWx0eSA9IC0yO1xuXG5jb25zdCBpc1NwbGF0ID0gcyA9PiBzID09PSBcIipcIjtcblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKHBhdGgsIGluZGV4KSB7XG4gIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBsZXQgaW5pdGlhbFNjb3JlID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gIGlmIChzZWdtZW50cy5zb21lKGlzU3BsYXQpKSB7XG4gICAgaW5pdGlhbFNjb3JlICs9IHNwbGF0UGVuYWx0eTtcbiAgfVxuXG4gIGlmIChpbmRleCkge1xuICAgIGluaXRpYWxTY29yZSArPSBpbmRleFJvdXRlVmFsdWU7XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHMuZmlsdGVyKHMgPT4gIWlzU3BsYXQocykpLnJlZHVjZSgoc2NvcmUsIHNlZ21lbnQpID0+IHNjb3JlICsgKHBhcmFtUmUudGVzdChzZWdtZW50KSA/IGR5bmFtaWNTZWdtZW50VmFsdWUgOiBzZWdtZW50ID09PSBcIlwiID8gZW1wdHlTZWdtZW50VmFsdWUgOiBzdGF0aWNTZWdtZW50VmFsdWUpLCBpbml0aWFsU2NvcmUpO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlSW5kZXhlcyhhLCBiKSB7XG4gIGxldCBzaWJsaW5ncyA9IGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLnNsaWNlKDAsIC0xKS5ldmVyeSgobiwgaSkgPT4gbiA9PT0gYltpXSk7XG4gIHJldHVybiBzaWJsaW5ncyA/IC8vIElmIHR3byByb3V0ZXMgYXJlIHNpYmxpbmdzLCB3ZSBzaG91bGQgdHJ5IHRvIG1hdGNoIHRoZSBlYXJsaWVyIHNpYmxpbmdcbiAgLy8gZmlyc3QuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBoYXZlIGZpbmUtZ3JhaW5lZCBjb250cm9sIG92ZXIgdGhlIG1hdGNoaW5nXG4gIC8vIGJlaGF2aW9yIGJ5IHNpbXBseSBwdXR0aW5nIHJvdXRlcyB3aXRoIGlkZW50aWNhbCBwYXRocyBpbiB0aGUgb3JkZXIgdGhleVxuICAvLyB3YW50IHRoZW0gdHJpZWQuXG4gIGFbYS5sZW5ndGggLSAxXSAtIGJbYi5sZW5ndGggLSAxXSA6IC8vIE90aGVyd2lzZSwgaXQgZG9lc24ndCByZWFsbHkgbWFrZSBzZW5zZSB0byByYW5rIG5vbi1zaWJsaW5ncyBieSBpbmRleCxcbiAgLy8gc28gdGhleSBzb3J0IGVxdWFsbHkuXG4gIDA7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGVCcmFuY2goYnJhbmNoLCBwYXRobmFtZSkge1xuICBsZXQge1xuICAgIHJvdXRlc01ldGFcbiAgfSA9IGJyYW5jaDtcbiAgbGV0IG1hdGNoZWRQYXJhbXMgPSB7fTtcbiAgbGV0IG1hdGNoZWRQYXRobmFtZSA9IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzTWV0YS5sZW5ndGg7ICsraSkge1xuICAgIGxldCBtZXRhID0gcm91dGVzTWV0YVtpXTtcbiAgICBsZXQgZW5kID0gaSA9PT0gcm91dGVzTWV0YS5sZW5ndGggLSAxO1xuICAgIGxldCByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWRQYXRobmFtZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKG1hdGNoZWRQYXRobmFtZS5sZW5ndGgpIHx8IFwiL1wiO1xuICAgIGxldCBtYXRjaCA9IG1hdGNoUGF0aCh7XG4gICAgICBwYXRoOiBtZXRhLnJlbGF0aXZlUGF0aCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IG1ldGEuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVuZFxuICAgIH0sIHJlbWFpbmluZ1BhdGhuYW1lKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgICBPYmplY3QuYXNzaWduKG1hdGNoZWRQYXJhbXMsIG1hdGNoLnBhcmFtcyk7XG4gICAgbGV0IHJvdXRlID0gbWV0YS5yb3V0ZTtcbiAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgLy8gVE9ETzogQ2FuIHRoaXMgYXMgYmUgYXZvaWRlZD9cbiAgICAgIHBhcmFtczogbWF0Y2hlZFBhcmFtcyxcbiAgICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVdKSxcbiAgICAgIHBhdGhuYW1lQmFzZTogbm9ybWFsaXplUGF0aG5hbWUoam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lQmFzZV0pKSxcbiAgICAgIHJvdXRlXG4gICAgfSk7XG5cbiAgICBpZiAobWF0Y2gucGF0aG5hbWVCYXNlICE9PSBcIi9cIikge1xuICAgICAgbWF0Y2hlZFBhdGhuYW1lID0gam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lQmFzZV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcGF0aCB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9nZW5lcmF0ZS1wYXRoXG4gKi9cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBhdGgob3JpZ2luYWxQYXRoLCBwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICBsZXQgcGF0aCA9IG9yaWdpbmFsUGF0aDtcblxuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikgJiYgcGF0aCAhPT0gXCIqXCIgJiYgIXBhdGguZW5kc1dpdGgoXCIvKlwiKSkge1xuICAgIHdhcm5pbmcoZmFsc2UsIFwiUm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiIHdpbGwgYmUgdHJlYXRlZCBhcyBpZiBpdCB3ZXJlIFwiICsgKFwiXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIiBiZWNhdXNlIHRoZSBgKmAgY2hhcmFjdGVyIG11c3QgXCIpICsgXCJhbHdheXMgZm9sbG93IGEgYC9gIGluIHRoZSBwYXR0ZXJuLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgXCIgKyAoXCJwbGVhc2UgY2hhbmdlIHRoZSByb3V0ZSBwYXRoIHRvIFxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIuXCIpKTtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKTtcbiAgfSAvLyBlbnN1cmUgYC9gIGlzIGFkZGVkIGF0IHRoZSBiZWdpbm5pbmcgaWYgdGhlIHBhdGggaXMgYWJzb2x1dGVcblxuXG4gIGNvbnN0IHByZWZpeCA9IHBhdGguc3RhcnRzV2l0aChcIi9cIikgPyBcIi9cIiA6IFwiXCI7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgvXFwvKy8pLm1hcCgoc2VnbWVudCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgY29uc3QgaXNMYXN0U2VnbWVudCA9IGluZGV4ID09PSBhcnJheS5sZW5ndGggLSAxOyAvLyBvbmx5IGFwcGx5IHRoZSBzcGxhdCBpZiBpdCdzIHRoZSBsYXN0IHNlZ21lbnRcblxuICAgIGlmIChpc0xhc3RTZWdtZW50ICYmIHNlZ21lbnQgPT09IFwiKlwiKSB7XG4gICAgICBjb25zdCBzdGFyID0gXCIqXCI7XG4gICAgICBjb25zdCBzdGFyUGFyYW0gPSBwYXJhbXNbc3Rhcl07IC8vIEFwcGx5IHRoZSBzcGxhdFxuXG4gICAgICByZXR1cm4gc3RhclBhcmFtO1xuICAgIH1cblxuICAgIGNvbnN0IGtleU1hdGNoID0gc2VnbWVudC5tYXRjaCgvXjooXFx3KykoXFw/PykkLyk7XG5cbiAgICBpZiAoa2V5TWF0Y2gpIHtcbiAgICAgIGNvbnN0IFssIGtleSwgb3B0aW9uYWxdID0ga2V5TWF0Y2g7XG4gICAgICBsZXQgcGFyYW0gPSBwYXJhbXNba2V5XTtcblxuICAgICAgaWYgKG9wdGlvbmFsID09PSBcIj9cIikge1xuICAgICAgICByZXR1cm4gcGFyYW0gPT0gbnVsbCA/IFwiXCIgOiBwYXJhbTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtID09IG51bGwpIHtcbiAgICAgICAgaW52YXJpYW50KGZhbHNlLCBcIk1pc3NpbmcgXFxcIjpcIiArIGtleSArIFwiXFxcIiBwYXJhbVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH0gLy8gUmVtb3ZlIGFueSBvcHRpb25hbCBtYXJrZXJzIGZyb20gb3B0aW9uYWwgc3RhdGljIHNlZ21lbnRzXG5cblxuICAgIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1xcPyQvZywgXCJcIik7XG4gIH0pIC8vIFJlbW92ZSBlbXB0eSBzZWdtZW50c1xuICAuZmlsdGVyKHNlZ21lbnQgPT4gISFzZWdtZW50KTtcbiAgcmV0dXJuIHByZWZpeCArIHNlZ21lbnRzLmpvaW4oXCIvXCIpO1xufVxuLyoqXG4gKiBQZXJmb3JtcyBwYXR0ZXJuIG1hdGNoaW5nIG9uIGEgVVJMIHBhdGhuYW1lIGFuZCByZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0XG4gKiB0aGUgbWF0Y2guXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9tYXRjaC1wYXRoXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2hQYXRoKHBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHBhdHRlcm4gPSB7XG4gICAgICBwYXRoOiBwYXR0ZXJuLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICBlbmQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgbGV0IFttYXRjaGVyLCBwYXJhbU5hbWVzXSA9IGNvbXBpbGVQYXRoKHBhdHRlcm4ucGF0aCwgcGF0dGVybi5jYXNlU2Vuc2l0aXZlLCBwYXR0ZXJuLmVuZCk7XG4gIGxldCBtYXRjaCA9IHBhdGhuYW1lLm1hdGNoKG1hdGNoZXIpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgbGV0IG1hdGNoZWRQYXRobmFtZSA9IG1hdGNoWzBdO1xuICBsZXQgcGF0aG5hbWVCYXNlID0gbWF0Y2hlZFBhdGhuYW1lLnJlcGxhY2UoLyguKVxcLyskLywgXCIkMVwiKTtcbiAgbGV0IGNhcHR1cmVHcm91cHMgPSBtYXRjaC5zbGljZSgxKTtcbiAgbGV0IHBhcmFtcyA9IHBhcmFtTmFtZXMucmVkdWNlKChtZW1vLCBwYXJhbU5hbWUsIGluZGV4KSA9PiB7XG4gICAgLy8gV2UgbmVlZCB0byBjb21wdXRlIHRoZSBwYXRobmFtZUJhc2UgaGVyZSB1c2luZyB0aGUgcmF3IHNwbGF0IHZhbHVlXG4gICAgLy8gaW5zdGVhZCBvZiB1c2luZyBwYXJhbXNbXCIqXCJdIGxhdGVyIGJlY2F1c2UgaXQgd2lsbCBiZSBkZWNvZGVkIHRoZW5cbiAgICBpZiAocGFyYW1OYW1lID09PSBcIipcIikge1xuICAgICAgbGV0IHNwbGF0VmFsdWUgPSBjYXB0dXJlR3JvdXBzW2luZGV4XSB8fCBcIlwiO1xuICAgICAgcGF0aG5hbWVCYXNlID0gbWF0Y2hlZFBhdGhuYW1lLnNsaWNlKDAsIG1hdGNoZWRQYXRobmFtZS5sZW5ndGggLSBzcGxhdFZhbHVlLmxlbmd0aCkucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICAgIH1cblxuICAgIG1lbW9bcGFyYW1OYW1lXSA9IHNhZmVseURlY29kZVVSSUNvbXBvbmVudChjYXB0dXJlR3JvdXBzW2luZGV4XSB8fCBcIlwiLCBwYXJhbU5hbWUpO1xuICAgIHJldHVybiBtZW1vO1xuICB9LCB7fSk7XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHBhdGhuYW1lOiBtYXRjaGVkUGF0aG5hbWUsXG4gICAgcGF0aG5hbWVCYXNlLFxuICAgIHBhdHRlcm5cbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZVBhdGgocGF0aCwgY2FzZVNlbnNpdGl2ZSwgZW5kKSB7XG4gIGlmIChjYXNlU2Vuc2l0aXZlID09PSB2b2lkIDApIHtcbiAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoZW5kID09PSB2b2lkIDApIHtcbiAgICBlbmQgPSB0cnVlO1xuICB9XG5cbiAgd2FybmluZyhwYXRoID09PSBcIipcIiB8fCAhcGF0aC5lbmRzV2l0aChcIipcIikgfHwgcGF0aC5lbmRzV2l0aChcIi8qXCIpLCBcIlJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiArIChcIlxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIgYmVjYXVzZSB0aGUgYCpgIGNoYXJhY3RlciBtdXN0IFwiKSArIFwiYWx3YXlzIGZvbGxvdyBhIGAvYCBpbiB0aGUgcGF0dGVybi4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIFwiICsgKFwicGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiLlwiKSk7XG4gIGxldCBwYXJhbU5hbWVzID0gW107XG4gIGxldCByZWdleHBTb3VyY2UgPSBcIl5cIiArIHBhdGgucmVwbGFjZSgvXFwvKlxcKj8kLywgXCJcIikgLy8gSWdub3JlIHRyYWlsaW5nIC8gYW5kIC8qLCB3ZSdsbCBoYW5kbGUgaXQgYmVsb3dcbiAgLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpIC8vIE1ha2Ugc3VyZSBpdCBoYXMgYSBsZWFkaW5nIC9cbiAgLnJlcGxhY2UoL1tcXFxcLiorXiQ/e318KClbXFxdXS9nLCBcIlxcXFwkJlwiKSAvLyBFc2NhcGUgc3BlY2lhbCByZWdleCBjaGFyc1xuICAucmVwbGFjZSgvXFwvOihcXHcrKS9nLCAoXywgcGFyYW1OYW1lKSA9PiB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKHBhcmFtTmFtZSk7XG4gICAgcmV0dXJuIFwiLyhbXlxcXFwvXSspXCI7XG4gIH0pO1xuXG4gIGlmIChwYXRoLmVuZHNXaXRoKFwiKlwiKSkge1xuICAgIHBhcmFtTmFtZXMucHVzaChcIipcIik7XG4gICAgcmVnZXhwU291cmNlICs9IHBhdGggPT09IFwiKlwiIHx8IHBhdGggPT09IFwiLypcIiA/IFwiKC4qKSRcIiAvLyBBbHJlYWR5IG1hdGNoZWQgdGhlIGluaXRpYWwgLywganVzdCBtYXRjaCB0aGUgcmVzdFxuICAgIDogXCIoPzpcXFxcLyguKyl8XFxcXC8qKSRcIjsgLy8gRG9uJ3QgaW5jbHVkZSB0aGUgLyBpbiBwYXJhbXNbXCIqXCJdXG4gIH0gZWxzZSBpZiAoZW5kKSB7XG4gICAgLy8gV2hlbiBtYXRjaGluZyB0byB0aGUgZW5kLCBpZ25vcmUgdHJhaWxpbmcgc2xhc2hlc1xuICAgIHJlZ2V4cFNvdXJjZSArPSBcIlxcXFwvKiRcIjtcbiAgfSBlbHNlIGlmIChwYXRoICE9PSBcIlwiICYmIHBhdGggIT09IFwiL1wiKSB7XG4gICAgLy8gSWYgb3VyIHBhdGggaXMgbm9uLWVtcHR5IGFuZCBjb250YWlucyBhbnl0aGluZyBiZXlvbmQgYW4gaW5pdGlhbCBzbGFzaCxcbiAgICAvLyB0aGVuIHdlIGhhdmUgX3NvbWVfIGZvcm0gb2YgcGF0aCBpbiBvdXIgcmVnZXggc28gd2Ugc2hvdWxkIGV4cGVjdCB0b1xuICAgIC8vIG1hdGNoIG9ubHkgaWYgd2UgZmluZCB0aGUgZW5kIG9mIHRoaXMgcGF0aCBzZWdtZW50LiAgTG9vayBmb3IgYW4gb3B0aW9uYWxcbiAgICAvLyBub24tY2FwdHVyZWQgdHJhaWxpbmcgc2xhc2ggKHRvIG1hdGNoIGEgcG9ydGlvbiBvZiB0aGUgVVJMKSBvciB0aGUgZW5kXG4gICAgLy8gb2YgdGhlIHBhdGggKGlmIHdlJ3ZlIG1hdGNoZWQgdG8gdGhlIGVuZCkuICBXZSB1c2VkIHRvIGRvIHRoaXMgd2l0aCBhXG4gICAgLy8gd29yZCBib3VuZGFyeSBidXQgdGhhdCBnaXZlcyBmYWxzZSBwb3NpdGl2ZXMgb24gcm91dGVzIGxpa2VcbiAgICAvLyAvdXNlci1wcmVmZXJlbmNlcyBzaW5jZSBgLWAgY291bnRzIGFzIGEgd29yZCBib3VuZGFyeS5cbiAgICByZWdleHBTb3VyY2UgKz0gXCIoPzooPz1cXFxcL3wkKSlcIjtcbiAgfSBlbHNlIDtcblxuICBsZXQgbWF0Y2hlciA9IG5ldyBSZWdFeHAocmVnZXhwU291cmNlLCBjYXNlU2Vuc2l0aXZlID8gdW5kZWZpbmVkIDogXCJpXCIpO1xuICByZXR1cm4gW21hdGNoZXIsIHBhcmFtTmFtZXNdO1xufVxuXG5mdW5jdGlvbiBzYWZlbHlEZWNvZGVVUkkodmFsdWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCBcIlRoZSBVUkwgcGF0aCBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIiBjb3VsZCBub3QgYmUgZGVjb2RlZCBiZWNhdXNlIGl0IGlzIGlzIGEgXCIgKyBcIm1hbGZvcm1lZCBVUkwgc2VnbWVudC4gVGhpcyBpcyBwcm9iYWJseSBkdWUgdG8gYSBiYWQgcGVyY2VudCBcIiArIChcImVuY29kaW5nIChcIiArIGVycm9yICsgXCIpLlwiKSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVseURlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSwgcGFyYW1OYW1lKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgd2FybmluZyhmYWxzZSwgXCJUaGUgdmFsdWUgZm9yIHRoZSBVUkwgcGFyYW0gXFxcIlwiICsgcGFyYW1OYW1lICsgXCJcXFwiIHdpbGwgbm90IGJlIGRlY29kZWQgYmVjYXVzZVwiICsgKFwiIHRoZSBzdHJpbmcgXFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgaXMgYSBtYWxmb3JtZWQgVVJMIHNlZ21lbnQuIFRoaXMgaXMgcHJvYmFibHlcIikgKyAoXCIgZHVlIHRvIGEgYmFkIHBlcmNlbnQgZW5jb2RpbmcgKFwiICsgZXJyb3IgKyBcIikuXCIpKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUocGF0aG5hbWUsIGJhc2VuYW1lKSB7XG4gIGlmIChiYXNlbmFtZSA9PT0gXCIvXCIpIHJldHVybiBwYXRobmFtZTtcblxuICBpZiAoIXBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChiYXNlbmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IC8vIFdlIHdhbnQgdG8gbGVhdmUgdHJhaWxpbmcgc2xhc2ggYmVoYXZpb3IgaW4gdGhlIHVzZXIncyBjb250cm9sLCBzbyBpZiB0aGV5XG4gIC8vIHNwZWNpZnkgYSBiYXNlbmFtZSB3aXRoIGEgdHJhaWxpbmcgc2xhc2gsIHdlIHNob3VsZCBzdXBwb3J0IGl0XG5cblxuICBsZXQgc3RhcnRJbmRleCA9IGJhc2VuYW1lLmVuZHNXaXRoKFwiL1wiKSA/IGJhc2VuYW1lLmxlbmd0aCAtIDEgOiBiYXNlbmFtZS5sZW5ndGg7XG4gIGxldCBuZXh0Q2hhciA9IHBhdGhuYW1lLmNoYXJBdChzdGFydEluZGV4KTtcblxuICBpZiAobmV4dENoYXIgJiYgbmV4dENoYXIgIT09IFwiL1wiKSB7XG4gICAgLy8gcGF0aG5hbWUgZG9lcyBub3Qgc3RhcnQgd2l0aCBiYXNlbmFtZS9cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwYXRobmFtZS5zbGljZShzdGFydEluZGV4KSB8fCBcIi9cIjtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJlc29sdmVkIHBhdGggb2JqZWN0IHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBwYXRobmFtZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL3Jlc29sdmUtcGF0aFxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoKHRvLCBmcm9tUGF0aG5hbWUpIHtcbiAgaWYgKGZyb21QYXRobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgZnJvbVBhdGhuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQge1xuICAgIHBhdGhuYW1lOiB0b1BhdGhuYW1lLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCJcbiAgfSA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bztcbiAgbGV0IHBhdGhuYW1lID0gdG9QYXRobmFtZSA/IHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikgPyB0b1BhdGhuYW1lIDogcmVzb2x2ZVBhdGhuYW1lKHRvUGF0aG5hbWUsIGZyb21QYXRobmFtZSkgOiBmcm9tUGF0aG5hbWU7XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBub3JtYWxpemVTZWFyY2goc2VhcmNoKSxcbiAgICBoYXNoOiBub3JtYWxpemVIYXNoKGhhc2gpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZShyZWxhdGl2ZVBhdGgsIGZyb21QYXRobmFtZSkge1xuICBsZXQgc2VnbWVudHMgPSBmcm9tUGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIGxldCByZWxhdGl2ZVNlZ21lbnRzID0gcmVsYXRpdmVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgcmVsYXRpdmVTZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4ge1xuICAgIGlmIChzZWdtZW50ID09PSBcIi4uXCIpIHtcbiAgICAgIC8vIEtlZXAgdGhlIHJvb3QgXCJcIiBzZWdtZW50IHNvIHRoZSBwYXRobmFtZSBzdGFydHMgYXQgL1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHNlZ21lbnRzLnBvcCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gXCIuXCIpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBzZWdtZW50cy5qb2luKFwiL1wiKSA6IFwiL1wiO1xufVxuXG5mdW5jdGlvbiBnZXRJbnZhbGlkUGF0aEVycm9yKGNoYXIsIGZpZWxkLCBkZXN0LCBwYXRoKSB7XG4gIHJldHVybiBcIkNhbm5vdCBpbmNsdWRlIGEgJ1wiICsgY2hhciArIFwiJyBjaGFyYWN0ZXIgaW4gYSBtYW51YWxseSBzcGVjaWZpZWQgXCIgKyAoXCJgdG8uXCIgKyBmaWVsZCArIFwiYCBmaWVsZCBbXCIgKyBKU09OLnN0cmluZ2lmeShwYXRoKSArIFwiXS4gIFBsZWFzZSBzZXBhcmF0ZSBpdCBvdXQgdG8gdGhlIFwiKSArIChcImB0by5cIiArIGRlc3QgKyBcImAgZmllbGQuIEFsdGVybmF0aXZlbHkgeW91IG1heSBwcm92aWRlIHRoZSBmdWxsIHBhdGggYXMgXCIpICsgXCJhIHN0cmluZyBpbiA8TGluayB0bz1cXFwiLi4uXFxcIj4gYW5kIHRoZSByb3V0ZXIgd2lsbCBwYXJzZSBpdCBmb3IgeW91LlwiO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICpcbiAqIFdoZW4gcHJvY2Vzc2luZyByZWxhdGl2ZSBuYXZpZ2F0aW9uIHdlIHdhbnQgdG8gaWdub3JlIGFuY2VzdG9yIHJvdXRlcyB0aGF0XG4gKiBkbyBub3QgY29udHJpYnV0ZSB0byB0aGUgcGF0aCwgc3VjaCB0aGF0IGluZGV4L3BhdGhsZXNzIGxheW91dCByb3V0ZXMgZG9uJ3RcbiAqIGludGVyZmVyZS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgd2hlbiBtb3ZpbmcgYSByb3V0ZSBlbGVtZW50IGludG8gYW4gaW5kZXggcm91dGUgYW5kL29yIGFcbiAqIHBhdGhsZXNzIGxheW91dCByb3V0ZSwgcmVsYXRpdmUgbGluayBiZWhhdmlvciBjb250YWluZWQgd2l0aGluIHNob3VsZCBzdGF5XG4gKiB0aGUgc2FtZS4gIEJvdGggb2YgdGhlIGZvbGxvd2luZyBleGFtcGxlcyBzaG91bGQgbGluayBiYWNrIHRvIHRoZSByb290OlxuICpcbiAqICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gKiAgICAgPFJvdXRlIHBhdGg9XCJhY2NvdW50c1wiIGVsZW1lbnQ9ezxMaW5rIHRvPVwiLi5cIn0+XG4gKiAgIDwvUm91dGU+XG4gKlxuICogICA8Um91dGUgcGF0aD1cIi9cIj5cbiAqICAgICA8Um91dGUgcGF0aD1cImFjY291bnRzXCI+XG4gKiAgICAgICA8Um91dGUgZWxlbWVudD17PEFjY291bnRzTGF5b3V0IC8+fT4gICAgICAgLy8gPC0tIERvZXMgbm90IGNvbnRyaWJ1dGVcbiAqICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxMaW5rIHRvPVwiLi5cIn0gLz4gIC8vIDwtLSBEb2VzIG5vdCBjb250cmlidXRlXG4gKiAgICAgICA8L1JvdXRlXG4gKiAgICAgPC9Sb3V0ZT5cbiAqICAgPC9Sb3V0ZT5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIG1hdGNoZXMuZmlsdGVyKChtYXRjaCwgaW5kZXgpID0+IGluZGV4ID09PSAwIHx8IG1hdGNoLnJvdXRlLnBhdGggJiYgbWF0Y2gucm91dGUucGF0aC5sZW5ndGggPiAwKTtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVG8odG9BcmcsIHJvdXRlUGF0aG5hbWVzLCBsb2NhdGlvblBhdGhuYW1lLCBpc1BhdGhSZWxhdGl2ZSkge1xuICBpZiAoaXNQYXRoUmVsYXRpdmUgPT09IHZvaWQgMCkge1xuICAgIGlzUGF0aFJlbGF0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgdG87XG5cbiAgaWYgKHR5cGVvZiB0b0FyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHRvID0gcGFyc2VQYXRoKHRvQXJnKTtcbiAgfSBlbHNlIHtcbiAgICB0byA9IF9leHRlbmRzKHt9LCB0b0FyZyk7XG4gICAgaW52YXJpYW50KCF0by5wYXRobmFtZSB8fCAhdG8ucGF0aG5hbWUuaW5jbHVkZXMoXCI/XCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiP1wiLCBcInBhdGhuYW1lXCIsIFwic2VhcmNoXCIsIHRvKSk7XG4gICAgaW52YXJpYW50KCF0by5wYXRobmFtZSB8fCAhdG8ucGF0aG5hbWUuaW5jbHVkZXMoXCIjXCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiI1wiLCBcInBhdGhuYW1lXCIsIFwiaGFzaFwiLCB0bykpO1xuICAgIGludmFyaWFudCghdG8uc2VhcmNoIHx8ICF0by5zZWFyY2guaW5jbHVkZXMoXCIjXCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiI1wiLCBcInNlYXJjaFwiLCBcImhhc2hcIiwgdG8pKTtcbiAgfVxuXG4gIGxldCBpc0VtcHR5UGF0aCA9IHRvQXJnID09PSBcIlwiIHx8IHRvLnBhdGhuYW1lID09PSBcIlwiO1xuICBsZXQgdG9QYXRobmFtZSA9IGlzRW1wdHlQYXRoID8gXCIvXCIgOiB0by5wYXRobmFtZTtcbiAgbGV0IGZyb207IC8vIFJvdXRpbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgcGF0aG5hbWUgaWYgZXhwbGljaXRseSByZXF1ZXN0ZWQuXG4gIC8vXG4gIC8vIElmIGEgcGF0aG5hbWUgaXMgZXhwbGljaXRseSBwcm92aWRlZCBpbiBgdG9gLCBpdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlXG4gIC8vIHJvdXRlIGNvbnRleHQuIFRoaXMgaXMgZXhwbGFpbmVkIGluIGBOb3RlIG9uIGA8TGluayB0bz5gIHZhbHVlc2AgaW4gb3VyXG4gIC8vIG1pZ3JhdGlvbiBndWlkZSBmcm9tIHY1IGFzIGEgbWVhbnMgb2YgZGlzYW1iaWd1YXRpb24gYmV0d2VlbiBgdG9gIHZhbHVlc1xuICAvLyB0aGF0IGJlZ2luIHdpdGggYC9gIGFuZCB0aG9zZSB0aGF0IGRvIG5vdC4gSG93ZXZlciwgdGhpcyBpcyBwcm9ibGVtYXRpYyBmb3JcbiAgLy8gYHRvYCB2YWx1ZXMgdGhhdCBkbyBub3QgcHJvdmlkZSBhIHBhdGhuYW1lLiBgdG9gIGNhbiBzaW1wbHkgYmUgYSBzZWFyY2ggb3JcbiAgLy8gaGFzaCBzdHJpbmcsIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkIGFzc3VtZSB0aGF0IHRoZSBuYXZpZ2F0aW9uIGlzIHJlbGF0aXZlXG4gIC8vIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uJ3MgcGF0aG5hbWUgYW5kICpub3QqIHRoZSByb3V0ZSBwYXRobmFtZS5cblxuICBpZiAoaXNQYXRoUmVsYXRpdmUgfHwgdG9QYXRobmFtZSA9PSBudWxsKSB7XG4gICAgZnJvbSA9IGxvY2F0aW9uUGF0aG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJvdXRlUGF0aG5hbWVJbmRleCA9IHJvdXRlUGF0aG5hbWVzLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAodG9QYXRobmFtZS5zdGFydHNXaXRoKFwiLi5cIikpIHtcbiAgICAgIGxldCB0b1NlZ21lbnRzID0gdG9QYXRobmFtZS5zcGxpdChcIi9cIik7IC8vIEVhY2ggbGVhZGluZyAuLiBzZWdtZW50IG1lYW5zIFwiZ28gdXAgb25lIHJvdXRlXCIgaW5zdGVhZCBvZiBcImdvIHVwIG9uZVxuICAgICAgLy8gVVJMIHNlZ21lbnRcIi4gIFRoaXMgaXMgYSBrZXkgZGlmZmVyZW5jZSBmcm9tIGhvdyA8YSBocmVmPiB3b3JrcyBhbmQgYVxuICAgICAgLy8gbWFqb3IgcmVhc29uIHdlIGNhbGwgdGhpcyBhIFwidG9cIiB2YWx1ZSBpbnN0ZWFkIG9mIGEgXCJocmVmXCIuXG5cbiAgICAgIHdoaWxlICh0b1NlZ21lbnRzWzBdID09PSBcIi4uXCIpIHtcbiAgICAgICAgdG9TZWdtZW50cy5zaGlmdCgpO1xuICAgICAgICByb3V0ZVBhdGhuYW1lSW5kZXggLT0gMTtcbiAgICAgIH1cblxuICAgICAgdG8ucGF0aG5hbWUgPSB0b1NlZ21lbnRzLmpvaW4oXCIvXCIpO1xuICAgIH0gLy8gSWYgdGhlcmUgYXJlIG1vcmUgXCIuLlwiIHNlZ21lbnRzIHRoYW4gcGFyZW50IHJvdXRlcywgcmVzb2x2ZSByZWxhdGl2ZSB0b1xuICAgIC8vIHRoZSByb290IC8gVVJMLlxuXG5cbiAgICBmcm9tID0gcm91dGVQYXRobmFtZUluZGV4ID49IDAgPyByb3V0ZVBhdGhuYW1lc1tyb3V0ZVBhdGhuYW1lSW5kZXhdIDogXCIvXCI7XG4gIH1cblxuICBsZXQgcGF0aCA9IHJlc29sdmVQYXRoKHRvLCBmcm9tKTsgLy8gRW5zdXJlIHRoZSBwYXRobmFtZSBoYXMgYSB0cmFpbGluZyBzbGFzaCBpZiB0aGUgb3JpZ2luYWwgXCJ0b1wiIGhhZCBvbmVcblxuICBsZXQgaGFzRXhwbGljaXRUcmFpbGluZ1NsYXNoID0gdG9QYXRobmFtZSAmJiB0b1BhdGhuYW1lICE9PSBcIi9cIiAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTsgLy8gT3IgaWYgdGhpcyB3YXMgYSBsaW5rIHRvIHRoZSBjdXJyZW50IHBhdGggd2hpY2ggaGFzIGEgdHJhaWxpbmcgc2xhc2hcblxuICBsZXQgaGFzQ3VycmVudFRyYWlsaW5nU2xhc2ggPSAoaXNFbXB0eVBhdGggfHwgdG9QYXRobmFtZSA9PT0gXCIuXCIpICYmIGxvY2F0aW9uUGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpO1xuXG4gIGlmICghcGF0aC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikgJiYgKGhhc0V4cGxpY2l0VHJhaWxpbmdTbGFzaCB8fCBoYXNDdXJyZW50VHJhaWxpbmdTbGFzaCkpIHtcbiAgICBwYXRoLnBhdGhuYW1lICs9IFwiL1wiO1xuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0VG9QYXRobmFtZSh0bykge1xuICAvLyBFbXB0eSBzdHJpbmdzIHNob3VsZCBiZSB0cmVhdGVkIHRoZSBzYW1lIGFzIC8gcGF0aHNcbiAgcmV0dXJuIHRvID09PSBcIlwiIHx8IHRvLnBhdGhuYW1lID09PSBcIlwiID8gXCIvXCIgOiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pLnBhdGhuYW1lIDogdG8ucGF0aG5hbWU7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3Qgam9pblBhdGhzID0gcGF0aHMgPT4gcGF0aHMuam9pbihcIi9cIikucmVwbGFjZSgvXFwvXFwvKy9nLCBcIi9cIik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3Qgbm9ybWFsaXplUGF0aG5hbWUgPSBwYXRobmFtZSA9PiBwYXRobmFtZS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG5vcm1hbGl6ZVNlYXJjaCA9IHNlYXJjaCA9PiAhc2VhcmNoIHx8IHNlYXJjaCA9PT0gXCI/XCIgPyBcIlwiIDogc2VhcmNoLnN0YXJ0c1dpdGgoXCI/XCIpID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3Qgbm9ybWFsaXplSGFzaCA9IGhhc2ggPT4gIWhhc2ggfHwgaGFzaCA9PT0gXCIjXCIgPyBcIlwiIDogaGFzaC5zdGFydHNXaXRoKFwiI1wiKSA/IGhhc2ggOiBcIiNcIiArIGhhc2g7XG4vKipcbiAqIFRoaXMgaXMgYSBzaG9ydGN1dCBmb3IgY3JlYXRpbmcgYGFwcGxpY2F0aW9uL2pzb25gIHJlc3BvbnNlcy4gQ29udmVydHMgYGRhdGFgXG4gKiB0byBKU09OIGFuZCBzZXRzIHRoZSBgQ29udGVudC1UeXBlYCBoZWFkZXIuXG4gKi9cblxuY29uc3QganNvbiA9IGZ1bmN0aW9uIGpzb24oZGF0YSwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IHt9O1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlSW5pdCA9IHR5cGVvZiBpbml0ID09PSBcIm51bWJlclwiID8ge1xuICAgIHN0YXR1czogaW5pdFxuICB9IDogaW5pdDtcbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXNwb25zZUluaXQuaGVhZGVycyk7XG5cbiAgaWYgKCFoZWFkZXJzLmhhcyhcIkNvbnRlbnQtVHlwZVwiKSkge1xuICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSksIF9leHRlbmRzKHt9LCByZXNwb25zZUluaXQsIHtcbiAgICBoZWFkZXJzXG4gIH0pKTtcbn07XG5jbGFzcyBBYm9ydGVkRGVmZXJyZWRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5jbGFzcyBEZWZlcnJlZERhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhLCByZXNwb25zZUluaXQpIHtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5kZWZlcnJlZEtleXMgPSBbXTtcbiAgICBpbnZhcmlhbnQoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhKSwgXCJkZWZlcigpIG9ubHkgYWNjZXB0cyBwbGFpbiBvYmplY3RzXCIpOyAvLyBTZXQgdXAgYW4gQWJvcnRDb250cm9sbGVyICsgUHJvbWlzZSB3ZSBjYW4gcmFjZSBhZ2FpbnN0IHRvIGV4aXQgZWFybHlcbiAgICAvLyBjYW5jZWxsYXRpb25cblxuICAgIGxldCByZWplY3Q7XG4gICAgdGhpcy5hYm9ydFByb21pc2UgPSBuZXcgUHJvbWlzZSgoXywgcikgPT4gcmVqZWN0ID0gcik7XG4gICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgbGV0IG9uQWJvcnQgPSAoKSA9PiByZWplY3QobmV3IEFib3J0ZWREZWZlcnJlZEVycm9yKFwiRGVmZXJyZWQgZGF0YSBhYm9ydGVkXCIpKTtcblxuICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCA9ICgpID0+IHRoaXMuY29udHJvbGxlci5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuXG4gICAgdGhpcy5jb250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgdGhpcy5kYXRhID0gT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKChhY2MsIF9yZWYpID0+IHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBfcmVmO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgIFtrZXldOiB0aGlzLnRyYWNrUHJvbWlzZShrZXksIHZhbHVlKVxuICAgICAgfSk7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgLy8gQWxsIGluY29taW5nIHZhbHVlcyB3ZXJlIHJlc29sdmVkXG4gICAgICB0aGlzLnVubGlzdGVuQWJvcnRTaWduYWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQgPSByZXNwb25zZUluaXQ7XG4gIH1cblxuICB0cmFja1Byb21pc2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmRlZmVycmVkS2V5cy5wdXNoKGtleSk7XG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldC5hZGQoa2V5KTsgLy8gV2Ugc3RvcmUgYSBsaXR0bGUgd3JhcHBlciBwcm9taXNlIHRoYXQgd2lsbCBiZSBleHRlbmRlZCB3aXRoXG4gICAgLy8gX2RhdGEvX2Vycm9yIHByb3BzIHVwb24gcmVzb2x2ZS9yZWplY3RcblxuICAgIGxldCBwcm9taXNlID0gUHJvbWlzZS5yYWNlKFt2YWx1ZSwgdGhpcy5hYm9ydFByb21pc2VdKS50aGVuKGRhdGEgPT4gdGhpcy5vblNldHRsZShwcm9taXNlLCBrZXksIG51bGwsIGRhdGEpLCBlcnJvciA9PiB0aGlzLm9uU2V0dGxlKHByb21pc2UsIGtleSwgZXJyb3IpKTsgLy8gUmVnaXN0ZXIgcmVqZWN0aW9uIGxpc3RlbmVycyB0byBhdm9pZCB1bmNhdWdodCBwcm9taXNlIHJlamVjdGlvbnMgb25cbiAgICAvLyBlcnJvcnMgb3IgYWJvcnRlZCBkZWZlcnJlZCB2YWx1ZXNcblxuICAgIHByb21pc2UuY2F0Y2goKCkgPT4ge30pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgb25TZXR0bGUocHJvbWlzZSwga2V5LCBlcnJvciwgZGF0YSkge1xuICAgIGlmICh0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQgJiYgZXJyb3IgaW5zdGFuY2VvZiBBYm9ydGVkRGVmZXJyZWRFcnJvcikge1xuICAgICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsKCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGVycm9yXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldC5kZWxldGUoa2V5KTtcblxuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIC8vIE5vdGhpbmcgbGVmdCB0byBhYm9ydCFcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBlcnJvclxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoZmFsc2UsIGtleSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9kYXRhXCIsIHtcbiAgICAgIGdldDogKCkgPT4gZGF0YVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdChmYWxzZSwga2V5KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGVtaXQoYWJvcnRlZCwgc2V0dGxlZEtleSkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIoYWJvcnRlZCwgc2V0dGxlZEtleSkpO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5hZGQoZm4pO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShmbik7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5jb250cm9sbGVyLmFib3J0KCk7XG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldC5mb3JFYWNoKCh2LCBrKSA9PiB0aGlzLnBlbmRpbmdLZXlzU2V0LmRlbGV0ZShrKSk7XG4gICAgdGhpcy5lbWl0KHRydWUpO1xuICB9XG5cbiAgYXN5bmMgcmVzb2x2ZURhdGEoc2lnbmFsKSB7XG4gICAgbGV0IGFib3J0ZWQgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5kb25lKSB7XG4gICAgICBsZXQgb25BYm9ydCA9ICgpID0+IHRoaXMuY2FuY2VsKCk7XG5cbiAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgICBhYm9ydGVkID0gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKGFib3J0ZWQgPT4ge1xuICAgICAgICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG5cbiAgICAgICAgICBpZiAoYWJvcnRlZCB8fCB0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoYWJvcnRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhYm9ydGVkO1xuICB9XG5cbiAgZ2V0IGRvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVuZGluZ0tleXNTZXQuc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIGdldCB1bndyYXBwZWREYXRhKCkge1xuICAgIGludmFyaWFudCh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kb25lLCBcIkNhbiBvbmx5IHVud3JhcCBkYXRhIG9uIGluaXRpYWxpemVkIGFuZCBzZXR0bGVkIGRlZmVycmVkc1wiKTtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5kYXRhKS5yZWR1Y2UoKGFjYywgX3JlZjIpID0+IHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBfcmVmMjtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICBba2V5XTogdW53cmFwVHJhY2tlZFByb21pc2UodmFsdWUpXG4gICAgICB9KTtcbiAgICB9LCB7fSk7XG4gIH1cblxuICBnZXQgcGVuZGluZ0tleXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wZW5kaW5nS2V5c1NldCk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBpc1RyYWNrZWRQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgJiYgdmFsdWUuX3RyYWNrZWQgPT09IHRydWU7XG59XG5cbmZ1bmN0aW9uIHVud3JhcFRyYWNrZWRQcm9taXNlKHZhbHVlKSB7XG4gIGlmICghaXNUcmFja2VkUHJvbWlzZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUuX2Vycm9yKSB7XG4gICAgdGhyb3cgdmFsdWUuX2Vycm9yO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlLl9kYXRhO1xufVxuXG5jb25zdCBkZWZlciA9IGZ1bmN0aW9uIGRlZmVyKGRhdGEsIGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSB7fTtcbiAgfVxuXG4gIGxldCByZXNwb25zZUluaXQgPSB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBzdGF0dXM6IGluaXRcbiAgfSA6IGluaXQ7XG4gIHJldHVybiBuZXcgRGVmZXJyZWREYXRhKGRhdGEsIHJlc3BvbnNlSW5pdCk7XG59O1xuLyoqXG4gKiBBIHJlZGlyZWN0IHJlc3BvbnNlLiBTZXRzIHRoZSBzdGF0dXMgY29kZSBhbmQgdGhlIGBMb2NhdGlvbmAgaGVhZGVyLlxuICogRGVmYXVsdHMgdG8gXCIzMDIgRm91bmRcIi5cbiAqL1xuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KHVybCwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IDMwMjtcbiAgfVxuXG4gIGxldCByZXNwb25zZUluaXQgPSBpbml0O1xuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VJbml0ID09PSBcIm51bWJlclwiKSB7XG4gICAgcmVzcG9uc2VJbml0ID0ge1xuICAgICAgc3RhdHVzOiByZXNwb25zZUluaXRcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXNwb25zZUluaXQuc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzcG9uc2VJbml0LnN0YXR1cyA9IDMwMjtcbiAgfVxuXG4gIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVzcG9uc2VJbml0LmhlYWRlcnMpO1xuICBoZWFkZXJzLnNldChcIkxvY2F0aW9uXCIsIHVybCk7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwgX2V4dGVuZHMoe30sIHJlc3BvbnNlSW5pdCwge1xuICAgIGhlYWRlcnNcbiAgfSkpO1xufTtcbi8qKlxuICogQHByaXZhdGVcbiAqIFV0aWxpdHkgY2xhc3Mgd2UgdXNlIHRvIGhvbGQgYXV0by11bndyYXBwZWQgNHh4LzV4eCBSZXNwb25zZSBib2RpZXNcbiAqL1xuXG5jbGFzcyBFcnJvclJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3Ioc3RhdHVzLCBzdGF0dXNUZXh0LCBkYXRhLCBpbnRlcm5hbCkge1xuICAgIGlmIChpbnRlcm5hbCA9PT0gdm9pZCAwKSB7XG4gICAgICBpbnRlcm5hbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQgfHwgXCJcIjtcbiAgICB0aGlzLmludGVybmFsID0gaW50ZXJuYWw7XG5cbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmVycm9yID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gIH1cblxufVxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZXJyb3IgaXMgYW4gRXJyb3JSZXNwb25zZSBnZW5lcmF0ZWQgZnJvbSBhIDR4eC81eHhcbiAqIFJlc3BvbnNlIHRocm93biBmcm9tIGFuIGFjdGlvbi9sb2FkZXJcbiAqL1xuXG5mdW5jdGlvbiBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikge1xuICByZXR1cm4gZXJyb3IgIT0gbnVsbCAmJiB0eXBlb2YgZXJyb3Iuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBlcnJvci5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBlcnJvci5pbnRlcm5hbCA9PT0gXCJib29sZWFuXCIgJiYgXCJkYXRhXCIgaW4gZXJyb3I7XG59XG5cbmNvbnN0IHZhbGlkTXV0YXRpb25NZXRob2RzQXJyID0gW1wicG9zdFwiLCBcInB1dFwiLCBcInBhdGNoXCIsIFwiZGVsZXRlXCJdO1xuY29uc3QgdmFsaWRNdXRhdGlvbk1ldGhvZHMgPSBuZXcgU2V0KHZhbGlkTXV0YXRpb25NZXRob2RzQXJyKTtcbmNvbnN0IHZhbGlkUmVxdWVzdE1ldGhvZHNBcnIgPSBbXCJnZXRcIiwgLi4udmFsaWRNdXRhdGlvbk1ldGhvZHNBcnJdO1xuY29uc3QgdmFsaWRSZXF1ZXN0TWV0aG9kcyA9IG5ldyBTZXQodmFsaWRSZXF1ZXN0TWV0aG9kc0Fycik7XG5jb25zdCByZWRpcmVjdFN0YXR1c0NvZGVzID0gbmV3IFNldChbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdKTtcbmNvbnN0IHJlZGlyZWN0UHJlc2VydmVNZXRob2RTdGF0dXNDb2RlcyA9IG5ldyBTZXQoWzMwNywgMzA4XSk7XG5jb25zdCBJRExFX05BVklHQVRJT04gPSB7XG4gIHN0YXRlOiBcImlkbGVcIixcbiAgbG9jYXRpb246IHVuZGVmaW5lZCxcbiAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiB1bmRlZmluZWRcbn07XG5jb25zdCBJRExFX0ZFVENIRVIgPSB7XG4gIHN0YXRlOiBcImlkbGVcIixcbiAgZGF0YTogdW5kZWZpbmVkLFxuICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgZm9ybURhdGE6IHVuZGVmaW5lZFxufTtcbmNvbnN0IElETEVfQkxPQ0tFUiA9IHtcbiAgc3RhdGU6IFwidW5ibG9ja2VkXCIsXG4gIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgbG9jYXRpb246IHVuZGVmaW5lZFxufTtcbmNvbnN0IEFCU09MVVRFX1VSTF9SRUdFWCA9IC9eKD86W2Etel1bYS16MC05Ky4tXSo6fFxcL1xcLykvaTtcbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBpc1NlcnZlciA9ICFpc0Jyb3dzZXI7XG5cbmNvbnN0IGRlZmF1bHREZXRlY3RFcnJvckJvdW5kYXJ5ID0gcm91dGUgPT4gQm9vbGVhbihyb3V0ZS5oYXNFcnJvckJvdW5kYXJ5KTsgLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIGNyZWF0ZVJvdXRlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBDcmVhdGUgYSByb3V0ZXIgYW5kIGxpc3RlbiB0byBoaXN0b3J5IFBPUCBuYXZpZ2F0aW9uc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKGluaXQpIHtcbiAgaW52YXJpYW50KGluaXQucm91dGVzLmxlbmd0aCA+IDAsIFwiWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSByb3V0ZXMgYXJyYXkgdG8gY3JlYXRlUm91dGVyXCIpO1xuICBsZXQgZGV0ZWN0RXJyb3JCb3VuZGFyeSA9IGluaXQuZGV0ZWN0RXJyb3JCb3VuZGFyeSB8fCBkZWZhdWx0RGV0ZWN0RXJyb3JCb3VuZGFyeTsgLy8gUm91dGVzIGtleWVkIGJ5IElEXG5cbiAgbGV0IG1hbmlmZXN0ID0ge307IC8vIFJvdXRlcyBpbiB0cmVlIGZvcm1hdCBmb3IgbWF0Y2hpbmdcblxuICBsZXQgZGF0YVJvdXRlcyA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMoaW5pdC5yb3V0ZXMsIGRldGVjdEVycm9yQm91bmRhcnksIHVuZGVmaW5lZCwgbWFuaWZlc3QpO1xuICBsZXQgaW5GbGlnaHREYXRhUm91dGVzOyAvLyBDb25maWcgZHJpdmVuIGJlaGF2aW9yIGZsYWdzXG5cbiAgbGV0IGZ1dHVyZSA9IF9leHRlbmRzKHtcbiAgICB2N19ub3JtYWxpemVGb3JtTWV0aG9kOiBmYWxzZVxuICB9LCBpbml0LmZ1dHVyZSk7IC8vIENsZWFudXAgZnVuY3Rpb24gZm9yIGhpc3RvcnlcblxuXG4gIGxldCB1bmxpc3Rlbkhpc3RvcnkgPSBudWxsOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9ucyB0byBjYWxsIG9uIGFsbCBzdGF0ZSBjaGFuZ2VzXG5cbiAgbGV0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIG9iamVjdCB0byBob2xkIHNjcm9sbCByZXN0b3JhdGlvbiBsb2NhdGlvbnMgZHVyaW5nIHJvdXRpbmdcblxuICBsZXQgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBudWxsOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9uIHRvIGdldCBzY3JvbGwgcmVzdG9yYXRpb24ga2V5c1xuXG4gIGxldCBnZXRTY3JvbGxSZXN0b3JhdGlvbktleSA9IG51bGw7IC8vIEV4dGVybmFsbHktcHJvdmlkZWQgZnVuY3Rpb24gdG8gZ2V0IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG5cbiAgbGV0IGdldFNjcm9sbFBvc2l0aW9uID0gbnVsbDsgLy8gT25lLXRpbWUgZmxhZyB0byBjb250cm9sIHRoZSBpbml0aWFsIGh5ZHJhdGlvbiBzY3JvbGwgcmVzdG9yYXRpb24uICBCZWNhdXNlXG4gIC8vIHdlIGRvbid0IGdldCB0aGUgc2F2ZWQgcG9zaXRpb25zIGZyb20gPFNjcm9sbFJlc3RvcmF0aW9uIC8+IHVudGlsIF9hZnRlcl9cbiAgLy8gdGhlIGluaXRpYWwgcmVuZGVyLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHRyaWdnZXIgYSBzZXBhcmF0ZSB1cGRhdGVTdGF0ZSB0b1xuICAvLyBzZW5kIGFsb25nIHRoZSByZXN0b3JlU2Nyb2xsUG9zaXRpb25cbiAgLy8gU2V0IHRvIHRydWUgaWYgd2UgaGF2ZSBgaHlkcmF0aW9uRGF0YWAgc2luY2Ugd2UgYXNzdW1lIHdlIHdlcmUgU1NSJ2QgYW5kIHRoYXRcbiAgLy8gU1NSIGRpZCB0aGUgaW5pdGlhbCBzY3JvbGwgcmVzdG9yYXRpb24uXG5cbiAgbGV0IGluaXRpYWxTY3JvbGxSZXN0b3JlZCA9IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsO1xuICBsZXQgaW5pdGlhbE1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBpbml0Lmhpc3RvcnkubG9jYXRpb24sIGluaXQuYmFzZW5hbWUpO1xuICBsZXQgaW5pdGlhbEVycm9ycyA9IG51bGw7XG5cbiAgaWYgKGluaXRpYWxNYXRjaGVzID09IG51bGwpIHtcbiAgICAvLyBJZiB3ZSBkbyBub3QgbWF0Y2ggYSB1c2VyLXByb3ZpZGVkLXJvdXRlLCBmYWxsIGJhY2sgdG8gdGhlIHJvb3RcbiAgICAvLyB0byBhbGxvdyB0aGUgZXJyb3IgYm91bmRhcnkgdG8gdGFrZSBvdmVyXG4gICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgIHBhdGhuYW1lOiBpbml0Lmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWVcbiAgICB9KTtcbiAgICBsZXQge1xuICAgICAgbWF0Y2hlcyxcbiAgICAgIHJvdXRlXG4gICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgaW5pdGlhbE1hdGNoZXMgPSBtYXRjaGVzO1xuICAgIGluaXRpYWxFcnJvcnMgPSB7XG4gICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgIH07XG4gIH1cblxuICBsZXQgaW5pdGlhbGl6ZWQgPSAvLyBBbGwgaW5pdGlhbE1hdGNoZXMgbmVlZCB0byBiZSBsb2FkZWQgYmVmb3JlIHdlJ3JlIHJlYWR5LiAgSWYgd2UgaGF2ZSBsYXp5XG4gIC8vIGZ1bmN0aW9ucyBhcm91bmQgc3RpbGwgdGhlbiB3ZSdsbCBuZWVkIHRvIHJ1biB0aGVtIGluIGluaXRpYWxpemUoKVxuICAhaW5pdGlhbE1hdGNoZXMuc29tZShtID0+IG0ucm91dGUubGF6eSkgJiYgKCAvLyBBbmQgd2UgaGF2ZSB0byBlaXRoZXIgaGF2ZSBubyBsb2FkZXJzIG9yIGhhdmUgYmVlbiBwcm92aWRlZCBoeWRyYXRpb25EYXRhXG4gICFpbml0aWFsTWF0Y2hlcy5zb21lKG0gPT4gbS5yb3V0ZS5sb2FkZXIpIHx8IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsKTtcbiAgbGV0IHJvdXRlcjtcbiAgbGV0IHN0YXRlID0ge1xuICAgIGhpc3RvcnlBY3Rpb246IGluaXQuaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGluaXQuaGlzdG9yeS5sb2NhdGlvbixcbiAgICBtYXRjaGVzOiBpbml0aWFsTWF0Y2hlcyxcbiAgICBpbml0aWFsaXplZCxcbiAgICBuYXZpZ2F0aW9uOiBJRExFX05BVklHQVRJT04sXG4gICAgLy8gRG9uJ3QgcmVzdG9yZSBvbiBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgaWYgd2Ugd2VyZSBTU1InZFxuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogaW5pdC5oeWRyYXRpb25EYXRhICE9IG51bGwgPyBmYWxzZSA6IG51bGwsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0OiBmYWxzZSxcbiAgICByZXZhbGlkYXRpb246IFwiaWRsZVwiLFxuICAgIGxvYWRlckRhdGE6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEubG9hZGVyRGF0YSB8fCB7fSxcbiAgICBhY3Rpb25EYXRhOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmFjdGlvbkRhdGEgfHwgbnVsbCxcbiAgICBlcnJvcnM6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEuZXJyb3JzIHx8IGluaXRpYWxFcnJvcnMsXG4gICAgZmV0Y2hlcnM6IG5ldyBNYXAoKSxcbiAgICBibG9ja2VyczogbmV3IE1hcCgpXG4gIH07IC8vIC0tIFN0YXRlZnVsIGludGVybmFsIHZhcmlhYmxlcyB0byBtYW5hZ2UgbmF2aWdhdGlvbnMgLS1cbiAgLy8gQ3VycmVudCBuYXZpZ2F0aW9uIGluIHByb2dyZXNzICh0byBiZSBjb21taXR0ZWQgaW4gY29tcGxldGVOYXZpZ2F0aW9uKVxuXG4gIGxldCBwZW5kaW5nQWN0aW9uID0gQWN0aW9uLlBvcDsgLy8gU2hvdWxkIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gcHJldmVudCB0aGUgc2Nyb2xsIHJlc2V0IGlmIHNjcm9sbCBjYW5ub3RcbiAgLy8gYmUgcmVzdG9yZWQ/XG5cbiAgbGV0IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSBmYWxzZTsgLy8gQWJvcnRDb250cm9sbGVyIGZvciB0aGUgYWN0aXZlIG5hdmlnYXRpb25cblxuICBsZXQgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyOyAvLyBXZSB1c2UgdGhpcyB0byBhdm9pZCB0b3VjaGluZyBoaXN0b3J5IGluIGNvbXBsZXRlTmF2aWdhdGlvbiBpZiBhXG4gIC8vIHJldmFsaWRhdGlvbiBpcyBlbnRpcmVseSB1bmludGVycnVwdGVkXG5cbiAgbGV0IGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbiA9IGZhbHNlOyAvLyBVc2UgdGhpcyBpbnRlcm5hbCBmbGFnIHRvIGZvcmNlIHJldmFsaWRhdGlvbiBvZiBhbGwgbG9hZGVyczpcbiAgLy8gIC0gc3VibWlzc2lvbnMgKGNvbXBsZXRlZCBvciBpbnRlcnJ1cHRlZClcbiAgLy8gIC0gdXNlUmV2YWxpZGF0ZSgpXG4gIC8vICAtIFgtUmVtaXgtUmV2YWxpZGF0ZSAoZnJvbSByZWRpcmVjdClcblxuICBsZXQgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlOyAvLyBVc2UgdGhpcyBpbnRlcm5hbCBhcnJheSB0byBjYXB0dXJlIHJvdXRlcyB0aGF0IHJlcXVpcmUgcmV2YWxpZGF0aW9uIGR1ZVxuICAvLyB0byBhIGNhbmNlbGxlZCBkZWZlcnJlZCBvbiBhY3Rpb24gc3VibWlzc2lvblxuXG4gIGxldCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcyA9IFtdOyAvLyBVc2UgdGhpcyBpbnRlcm5hbCBhcnJheSB0byBjYXB0dXJlIGZldGNoZXIgbG9hZHMgdGhhdCB3ZXJlIGNhbmNlbGxlZCBieSBhblxuICAvLyBhY3Rpb24gbmF2aWdhdGlvbiBhbmQgcmVxdWlyZSByZXZhbGlkYXRpb25cblxuICBsZXQgY2FuY2VsbGVkRmV0Y2hlckxvYWRzID0gW107IC8vIEFib3J0Q29udHJvbGxlcnMgZm9yIGFueSBpbi1mbGlnaHQgZmV0Y2hlcnNcblxuICBsZXQgZmV0Y2hDb250cm9sbGVycyA9IG5ldyBNYXAoKTsgLy8gVHJhY2sgbG9hZHMgYmFzZWQgb24gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgc3RhcnRlZFxuXG4gIGxldCBpbmNyZW1lbnRpbmdMb2FkSWQgPSAwOyAvLyBUcmFjayB0aGUgb3V0c3RhbmRpbmcgcGVuZGluZyBuYXZpZ2F0aW9uIGRhdGEgbG9hZCB0byBiZSBjb21wYXJlZCBhZ2FpbnN0XG4gIC8vIHRoZSBnbG9iYWxseSBpbmNyZW1lbnRpbmcgbG9hZCB3aGVuIGEgZmV0Y2hlciBsb2FkIGxhbmRzIGFmdGVyIGEgY29tcGxldGVkXG4gIC8vIG5hdmlnYXRpb25cblxuICBsZXQgcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPSAtMTsgLy8gRmV0Y2hlcnMgdGhhdCB0cmlnZ2VyZWQgZGF0YSByZWxvYWRzIGFzIGEgcmVzdWx0IG9mIHRoZWlyIGFjdGlvbnNcblxuICBsZXQgZmV0Y2hSZWxvYWRJZHMgPSBuZXcgTWFwKCk7IC8vIEZldGNoZXJzIHRoYXQgdHJpZ2dlcmVkIHJlZGlyZWN0IG5hdmlnYXRpb25zIGZyb20gdGhlaXIgYWN0aW9uc1xuXG4gIGxldCBmZXRjaFJlZGlyZWN0SWRzID0gbmV3IFNldCgpOyAvLyBNb3N0IHJlY2VudCBocmVmL21hdGNoIGZvciBmZXRjaGVyLmxvYWQgY2FsbHMgZm9yIGZldGNoZXJzXG5cbiAgbGV0IGZldGNoTG9hZE1hdGNoZXMgPSBuZXcgTWFwKCk7IC8vIFN0b3JlIERlZmVycmVkRGF0YSBpbnN0YW5jZXMgZm9yIGFjdGl2ZSByb3V0ZSBtYXRjaGVzLiAgV2hlbiBhXG4gIC8vIHJvdXRlIGxvYWRlciByZXR1cm5zIGRlZmVyKCkgd2Ugc3RpY2sgb25lIGluIGhlcmUuICBUaGVuLCB3aGVuIGEgbmVzdGVkXG4gIC8vIHByb21pc2UgcmVzb2x2ZXMgd2UgdXBkYXRlIGxvYWRlckRhdGEuICBJZiBhIG5ldyBuYXZpZ2F0aW9uIHN0YXJ0cyB3ZVxuICAvLyBjYW5jZWwgYWN0aXZlIGRlZmVycmVkcyBmb3IgZWxpbWluYXRlZCByb3V0ZXMuXG5cbiAgbGV0IGFjdGl2ZURlZmVycmVkcyA9IG5ldyBNYXAoKTsgLy8gU3RvcmUgYmxvY2tlciBmdW5jdGlvbnMgaW4gYSBzZXBhcmF0ZSBNYXAgb3V0c2lkZSBvZiByb3V0ZXIgc3RhdGUgc2luY2VcbiAgLy8gd2UgZG9uJ3QgbmVlZCB0byB1cGRhdGUgVUkgc3RhdGUgaWYgdGhleSBjaGFuZ2VcblxuICBsZXQgYmxvY2tlckZ1bmN0aW9ucyA9IG5ldyBNYXAoKTsgLy8gRmxhZyB0byBpZ25vcmUgdGhlIG5leHQgaGlzdG9yeSB1cGRhdGUsIHNvIHdlIGNhbiByZXZlcnQgdGhlIFVSTCBjaGFuZ2Ugb25cbiAgLy8gYSBQT1AgbmF2aWdhdGlvbiB0aGF0IHdhcyBibG9ja2VkIGJ5IHRoZSB1c2VyIHdpdGhvdXQgdG91Y2hpbmcgcm91dGVyIHN0YXRlXG5cbiAgbGV0IGlnbm9yZU5leHRIaXN0b3J5VXBkYXRlID0gZmFsc2U7IC8vIEluaXRpYWxpemUgdGhlIHJvdXRlciwgYWxsIHNpZGUgZWZmZWN0cyBzaG91bGQgYmUga2lja2VkIG9mZiBmcm9tIGhlcmUuXG4gIC8vIEltcGxlbWVudGVkIGFzIGEgRmx1ZW50IEFQSSBmb3IgZWFzZSBvZjpcbiAgLy8gICBsZXQgcm91dGVyID0gY3JlYXRlUm91dGVyKGluaXQpLmluaXRpYWxpemUoKTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIC8vIElmIGhpc3RvcnkgaW5mb3JtcyB1cyBvZiBhIFBPUCBuYXZpZ2F0aW9uLCBzdGFydCB0aGUgbmF2aWdhdGlvbiBidXQgZG8gbm90IHVwZGF0ZVxuICAgIC8vIHN0YXRlLiAgV2UnbGwgdXBkYXRlIG91ciBvd24gc3RhdGUgb25jZSB0aGUgbmF2aWdhdGlvbiBjb21wbGV0ZXNcbiAgICB1bmxpc3Rlbkhpc3RvcnkgPSBpbml0Lmhpc3RvcnkubGlzdGVuKF9yZWYgPT4ge1xuICAgICAgbGV0IHtcbiAgICAgICAgYWN0aW9uOiBoaXN0b3J5QWN0aW9uLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZGVsdGFcbiAgICAgIH0gPSBfcmVmO1xuXG4gICAgICAvLyBJZ25vcmUgdGhpcyBldmVudCBpZiBpdCB3YXMganVzdCB1cyByZXNldHRpbmcgdGhlIFVSTCBmcm9tIGFcbiAgICAgIC8vIGJsb2NrZWQgUE9QIG5hdmlnYXRpb25cbiAgICAgIGlmIChpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSkge1xuICAgICAgICBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm5pbmcoYmxvY2tlckZ1bmN0aW9ucy5zaXplID09PSAwIHx8IGRlbHRhICE9IG51bGwsIFwiWW91IGFyZSB0cnlpbmcgdG8gdXNlIGEgYmxvY2tlciBvbiBhIFBPUCBuYXZpZ2F0aW9uIHRvIGEgbG9jYXRpb24gXCIgKyBcInRoYXQgd2FzIG5vdCBjcmVhdGVkIGJ5IEByZW1peC1ydW4vcm91dGVyLiBUaGlzIHdpbGwgZmFpbCBzaWxlbnRseSBpbiBcIiArIFwicHJvZHVjdGlvbi4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBhcmUgbmF2aWdhdGluZyBvdXRzaWRlIHRoZSByb3V0ZXIgXCIgKyBcInZpYSBgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlYC9gd2luZG93LmxvY2F0aW9uLmhhc2hgIGluc3RlYWQgb2YgdXNpbmcgXCIgKyBcInJvdXRlciBuYXZpZ2F0aW9uIEFQSXMuICBUaGlzIGNhbiBhbHNvIGhhcHBlbiBpZiB5b3UgYXJlIHVzaW5nIFwiICsgXCJjcmVhdGVIYXNoUm91dGVyIGFuZCB0aGUgdXNlciBtYW51YWxseSBjaGFuZ2VzIHRoZSBVUkwuXCIpO1xuICAgICAgbGV0IGJsb2NrZXJLZXkgPSBzaG91bGRCbG9ja05hdmlnYXRpb24oe1xuICAgICAgICBjdXJyZW50TG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgICAgICBuZXh0TG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBoaXN0b3J5QWN0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKGJsb2NrZXJLZXkgJiYgZGVsdGEgIT0gbnVsbCkge1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBVUkwgdG8gbWF0Y2ggdGhlIGN1cnJlbnQgVUksIGJ1dCBkb24ndCB1cGRhdGUgcm91dGVyIHN0YXRlXG4gICAgICAgIGlnbm9yZU5leHRIaXN0b3J5VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgaW5pdC5oaXN0b3J5LmdvKGRlbHRhICogLTEpOyAvLyBQdXQgdGhlIGJsb2NrZXIgaW50byBhIGJsb2NrZWQgc3RhdGVcblxuICAgICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgICAgbG9jYXRpb24sXG5cbiAgICAgICAgICBwcm9jZWVkKCkge1xuICAgICAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgICAgIHN0YXRlOiBcInByb2NlZWRpbmdcIixcbiAgICAgICAgICAgICAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICByZXNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBsb2NhdGlvblxuICAgICAgICAgICAgfSk7IC8vIFJlLWRvIHRoZSBzYW1lIFBPUCBuYXZpZ2F0aW9uIHdlIGp1c3QgYmxvY2tlZFxuXG4gICAgICAgICAgICBpbml0Lmhpc3RvcnkuZ28oZGVsdGEpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJsb2NrZXIoYmxvY2tlcktleSk7XG4gICAgICAgICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHJvdXRlci5zdGF0ZS5ibG9ja2VycylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhcnROYXZpZ2F0aW9uKGhpc3RvcnlBY3Rpb24sIGxvY2F0aW9uKTtcbiAgICB9KTsgLy8gS2ljayBvZmYgaW5pdGlhbCBkYXRhIGxvYWQgaWYgbmVlZGVkLiAgVXNlIFBvcCB0byBhdm9pZCBtb2RpZnlpbmcgaGlzdG9yeVxuICAgIC8vIE5vdGUgd2UgZG9uJ3QgZG8gYW55IGhhbmRsaW5nIG9mIGxhenkgaGVyZS4gIEZvciBTUEEncyBpdCdsbCBnZXQgaGFuZGxlZFxuICAgIC8vIGluIHRoZSBub3JtYWwgbmF2aWdhdGlvbiBmbG93LiAgRm9yIFNTUiBpdCdzIGV4cGVjdGVkIHRoYXQgbGF6eSBtb2R1bGVzIGFyZVxuICAgIC8vIHJlc29sdmVkIHByaW9yIHRvIHJvdXRlciBjcmVhdGlvbiBzaW5jZSB3ZSBjYW4ndCBnbyBpbnRvIGEgZmFsbGJhY2tFbGVtZW50XG4gICAgLy8gVUkgZm9yIFNTUidkIGFwcHNcblxuICAgIGlmICghc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHN0YXJ0TmF2aWdhdGlvbihBY3Rpb24uUG9wLCBzdGF0ZS5sb2NhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvdXRlcjtcbiAgfSAvLyBDbGVhbiB1cCBhIHJvdXRlciBhbmQgaXQncyBzaWRlIGVmZmVjdHNcblxuXG4gIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHVubGlzdGVuSGlzdG9yeSkge1xuICAgICAgdW5saXN0ZW5IaXN0b3J5KCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlcnMuY2xlYXIoKTtcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgJiYgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLmFib3J0KCk7XG4gICAgc3RhdGUuZmV0Y2hlcnMuZm9yRWFjaCgoXywga2V5KSA9PiBkZWxldGVGZXRjaGVyKGtleSkpO1xuICAgIHN0YXRlLmJsb2NrZXJzLmZvckVhY2goKF8sIGtleSkgPT4gZGVsZXRlQmxvY2tlcihrZXkpKTtcbiAgfSAvLyBTdWJzY3JpYmUgdG8gc3RhdGUgdXBkYXRlcyBmb3IgdGhlIHJvdXRlclxuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGZuKSB7XG4gICAgc3Vic2NyaWJlcnMuYWRkKGZuKTtcbiAgICByZXR1cm4gKCkgPT4gc3Vic2NyaWJlcnMuZGVsZXRlKGZuKTtcbiAgfSAvLyBVcGRhdGUgb3VyIHN0YXRlIGFuZCBub3RpZnkgdGhlIGNhbGxpbmcgY29udGV4dCBvZiB0aGUgY2hhbmdlXG5cblxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIHN0YXRlID0gX2V4dGVuZHMoe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIoc3RhdGUpKTtcbiAgfSAvLyBDb21wbGV0ZSBhIG5hdmlnYXRpb24gcmV0dXJuaW5nIHRoZSBzdGF0ZS5uYXZpZ2F0aW9uIGJhY2sgdG8gdGhlIElETEVfTkFWSUdBVElPTlxuICAvLyBhbmQgc2V0dGluZyBzdGF0ZS5baGlzdG9yeUFjdGlvbi9sb2NhdGlvbi9tYXRjaGVzXSB0byB0aGUgbmV3IHJvdXRlLlxuICAvLyAtIExvY2F0aW9uIGlzIGEgcmVxdWlyZWQgcGFyYW1cbiAgLy8gLSBOYXZpZ2F0aW9uIHdpbGwgYWx3YXlzIGJlIHNldCB0byBJRExFX05BVklHQVRJT05cbiAgLy8gLSBDYW4gcGFzcyBhbnkgb3RoZXIgc3RhdGUgaW4gbmV3U3RhdGVcblxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgbmV3U3RhdGUpIHtcbiAgICB2YXIgX2xvY2F0aW9uJHN0YXRlLCBfbG9jYXRpb24kc3RhdGUyO1xuXG4gICAgLy8gRGVkdWNlIGlmIHdlJ3JlIGluIGEgbG9hZGluZy9hY3Rpb25SZWxvYWQgc3RhdGU6XG4gICAgLy8gLSBXZSBoYXZlIGNvbW1pdHRlZCBhY3Rpb25EYXRhIGluIHRoZSBzdG9yZVxuICAgIC8vIC0gVGhlIGN1cnJlbnQgbmF2aWdhdGlvbiB3YXMgYSBtdXRhdGlvbiBzdWJtaXNzaW9uXG4gICAgLy8gLSBXZSdyZSBwYXN0IHRoZSBzdWJtaXR0aW5nIHN0YXRlIGFuZCBpbnRvIHRoZSBsb2FkaW5nIHN0YXRlXG4gICAgLy8gLSBUaGUgbG9jYXRpb24gYmVpbmcgbG9hZGVkIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGEgcmVkaXJlY3RcbiAgICBsZXQgaXNBY3Rpb25SZWxvYWQgPSBzdGF0ZS5hY3Rpb25EYXRhICE9IG51bGwgJiYgc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kICE9IG51bGwgJiYgaXNNdXRhdGlvbk1ldGhvZChzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QpICYmIHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmICgoX2xvY2F0aW9uJHN0YXRlID0gbG9jYXRpb24uc3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfbG9jYXRpb24kc3RhdGUuX2lzUmVkaXJlY3QpICE9PSB0cnVlO1xuICAgIGxldCBhY3Rpb25EYXRhO1xuXG4gICAgaWYgKG5ld1N0YXRlLmFjdGlvbkRhdGEpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdTdGF0ZS5hY3Rpb25EYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFjdGlvbkRhdGEgPSBuZXdTdGF0ZS5hY3Rpb25EYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRW1wdHkgYWN0aW9uRGF0YSAtPiBjbGVhciBwcmlvciBhY3Rpb25EYXRhIGR1ZSB0byBhbiBhY3Rpb24gZXJyb3JcbiAgICAgICAgYWN0aW9uRGF0YSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FjdGlvblJlbG9hZCkge1xuICAgICAgLy8gS2VlcCB0aGUgY3VycmVudCBkYXRhIGlmIHdlJ3JlIHdyYXBwaW5nIHVwIHRoZSBhY3Rpb24gcmVsb2FkXG4gICAgICBhY3Rpb25EYXRhID0gc3RhdGUuYWN0aW9uRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xlYXIgYWN0aW9uRGF0YSBvbiBhbnkgb3RoZXIgY29tcGxldGVkIG5hdmlnYXRpb25zXG4gICAgICBhY3Rpb25EYXRhID0gbnVsbDtcbiAgICB9IC8vIEFsd2F5cyBwcmVzZXJ2ZSBhbnkgZXhpc3RpbmcgbG9hZGVyRGF0YSBmcm9tIHJlLXVzZWQgcm91dGVzXG5cblxuICAgIGxldCBsb2FkZXJEYXRhID0gbmV3U3RhdGUubG9hZGVyRGF0YSA/IG1lcmdlTG9hZGVyRGF0YShzdGF0ZS5sb2FkZXJEYXRhLCBuZXdTdGF0ZS5sb2FkZXJEYXRhLCBuZXdTdGF0ZS5tYXRjaGVzIHx8IFtdLCBuZXdTdGF0ZS5lcnJvcnMpIDogc3RhdGUubG9hZGVyRGF0YTsgLy8gT24gYSBzdWNjZXNzZnVsIG5hdmlnYXRpb24gd2UgY2FuIGFzc3VtZSB3ZSBnb3QgdGhyb3VnaCBhbGwgYmxvY2tlcnNcbiAgICAvLyBzbyB3ZSBjYW4gc3RhcnQgZnJlc2hcblxuICAgIGZvciAobGV0IFtrZXldIG9mIGJsb2NrZXJGdW5jdGlvbnMpIHtcbiAgICAgIGRlbGV0ZUJsb2NrZXIoa2V5KTtcbiAgICB9IC8vIEFsd2F5cyByZXNwZWN0IHRoZSB1c2VyIGZsYWcuICBPdGhlcndpc2UgZG9uJ3QgcmVzZXQgb24gbXV0YXRpb25cbiAgICAvLyBzdWJtaXNzaW9uIG5hdmlnYXRpb25zIHVubGVzcyB0aGV5IHJlZGlyZWN0XG5cblxuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIHx8IHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kKSAmJiAoKF9sb2NhdGlvbiRzdGF0ZTIgPSBsb2NhdGlvbi5zdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sb2NhdGlvbiRzdGF0ZTIuX2lzUmVkaXJlY3QpICE9PSB0cnVlO1xuXG4gICAgaWYgKGluRmxpZ2h0RGF0YVJvdXRlcykge1xuICAgICAgZGF0YVJvdXRlcyA9IGluRmxpZ2h0RGF0YVJvdXRlcztcbiAgICAgIGluRmxpZ2h0RGF0YVJvdXRlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShfZXh0ZW5kcyh7fSwgbmV3U3RhdGUsIHtcbiAgICAgIGFjdGlvbkRhdGEsXG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgaGlzdG9yeUFjdGlvbjogcGVuZGluZ0FjdGlvbixcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgaW5pdGlhbGl6ZWQ6IHRydWUsXG4gICAgICBuYXZpZ2F0aW9uOiBJRExFX05BVklHQVRJT04sXG4gICAgICByZXZhbGlkYXRpb246IFwiaWRsZVwiLFxuICAgICAgcmVzdG9yZVNjcm9sbFBvc2l0aW9uOiBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBuZXdTdGF0ZS5tYXRjaGVzIHx8IHN0YXRlLm1hdGNoZXMpLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgYmxvY2tlcnM6IG5ldyBNYXAoc3RhdGUuYmxvY2tlcnMpXG4gICAgfSkpO1xuXG4gICAgaWYgKGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbikgOyBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBBY3Rpb24uUG9wKSA7IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IEFjdGlvbi5QdXNoKSB7XG4gICAgICBpbml0Lmhpc3RvcnkucHVzaChsb2NhdGlvbiwgbG9jYXRpb24uc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlJlcGxhY2UpIHtcbiAgICAgIGluaXQuaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uLCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgfSAvLyBSZXNldCBzdGF0ZWZ1bCBuYXZpZ2F0aW9uIHZhcnNcblxuXG4gICAgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IGZhbHNlO1xuICAgIGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbiA9IGZhbHNlO1xuICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcyA9IFtdO1xuICAgIGNhbmNlbGxlZEZldGNoZXJMb2FkcyA9IFtdO1xuICB9IC8vIFRyaWdnZXIgYSBuYXZpZ2F0aW9uIGV2ZW50LCB3aGljaCBjYW4gZWl0aGVyIGJlIGEgbnVtZXJpY2FsIFBPUCBvciBhIFBVU0hcbiAgLy8gcmVwbGFjZSB3aXRoIGFuIG9wdGlvbmFsIHN1Ym1pc3Npb25cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlKHRvLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgaW5pdC5oaXN0b3J5LmdvKHRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgcGF0aCxcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICBlcnJvclxuICAgIH0gPSBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnModG8sIGZ1dHVyZSwgb3B0cyk7XG4gICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IHN0YXRlLmxvY2F0aW9uO1xuICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGF0ZS5sb2NhdGlvbiwgcGF0aCwgb3B0cyAmJiBvcHRzLnN0YXRlKTsgLy8gV2hlbiB1c2luZyBuYXZpZ2F0ZSBhcyBhIFBVU0gvUkVQTEFDRSB3ZSBhcmVuJ3QgcmVhZGluZyBhbiBhbHJlYWR5LWVuY29kZWRcbiAgICAvLyBVUkwgZnJvbSB3aW5kb3cubG9jYXRpb24sIHNvIHdlIG5lZWQgdG8gZW5jb2RlIGl0IGhlcmUgc28gdGhlIGJlaGF2aW9yXG4gICAgLy8gcmVtYWlucyB0aGUgc2FtZSBhcyBQT1AgYW5kIG5vbi1kYXRhLXJvdXRlciB1c2FnZXMuICBuZXcgVVJMKCkgZG9lcyBhbGxcbiAgICAvLyB0aGUgc2FtZSBlbmNvZGluZyB3ZSdkIGdldCBmcm9tIGEgaGlzdG9yeS5wdXNoU3RhdGUvd2luZG93LmxvY2F0aW9uIHJlYWRcbiAgICAvLyB3aXRob3V0IGhhdmluZyB0byB0b3VjaCBoaXN0b3J5XG5cbiAgICBuZXh0TG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbmV4dExvY2F0aW9uLCBpbml0Lmhpc3RvcnkuZW5jb2RlTG9jYXRpb24obmV4dExvY2F0aW9uKSk7XG4gICAgbGV0IHVzZXJSZXBsYWNlID0gb3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCA/IG9wdHMucmVwbGFjZSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuXG4gICAgaWYgKHVzZXJSZXBsYWNlID09PSB0cnVlKSB7XG4gICAgICBoaXN0b3J5QWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgfSBlbHNlIGlmICh1c2VyUmVwbGFjZSA9PT0gZmFsc2UpIDsgZWxzZSBpZiAoc3VibWlzc2lvbiAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSAmJiBzdWJtaXNzaW9uLmZvcm1BY3Rpb24gPT09IHN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lICsgc3RhdGUubG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAvLyBCeSBkZWZhdWx0IG9uIHN1Ym1pc3Npb25zIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIHdlIFJFUExBQ0Ugc28gdGhhdFxuICAgICAgLy8gdXNlcnMgZG9uJ3QgaGF2ZSB0byBkb3VibGUtY2xpY2sgdGhlIGJhY2sgYnV0dG9uIHRvIGdldCB0byB0aGUgcHJpb3JcbiAgICAgIC8vIGxvY2F0aW9uLiAgSWYgdGhlIHVzZXIgcmVkaXJlY3RzIHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIGZyb20gdGhlXG4gICAgICAvLyBhY3Rpb24vbG9hZGVyIHRoaXMgd2lsbCBiZSBpZ25vcmVkIGFuZCB0aGUgcmVkaXJlY3Qgd2lsbCBiZSBhIFBVU0hcbiAgICAgIGhpc3RvcnlBY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmVudFNjcm9sbFJlc2V0ID0gb3B0cyAmJiBcInByZXZlbnRTY3JvbGxSZXNldFwiIGluIG9wdHMgPyBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCA9PT0gdHJ1ZSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgYmxvY2tlcktleSA9IHNob3VsZEJsb2NrTmF2aWdhdGlvbih7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAoYmxvY2tlcktleSkge1xuICAgICAgLy8gUHV0IHRoZSBibG9ja2VyIGludG8gYSBibG9ja2VkIHN0YXRlXG4gICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgc3RhdGU6IFwiYmxvY2tlZFwiLFxuICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxuXG4gICAgICAgIHByb2NlZWQoKSB7XG4gICAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICBwcm9jZWVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZXNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvblxuICAgICAgICAgIH0pOyAvLyBTZW5kIHRoZSBzYW1lIG5hdmlnYXRpb24gdGhyb3VnaFxuXG4gICAgICAgICAgbmF2aWdhdGUodG8sIG9wdHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgIGRlbGV0ZUJsb2NrZXIoYmxvY2tlcktleSk7XG4gICAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgYmxvY2tlcnM6IG5ldyBNYXAoc3RhdGUuYmxvY2tlcnMpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBuZXh0TG9jYXRpb24sIHtcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICAvLyBTZW5kIHRocm91Z2ggdGhlIGZvcm1EYXRhIHNlcmlhbGl6YXRpb24gZXJyb3IgaWYgd2UgaGF2ZSBvbmUgc28gd2UgY2FuXG4gICAgICAvLyByZW5kZXIgYXQgdGhlIHJpZ2h0IGVycm9yIGJvdW5kYXJ5IGFmdGVyIHdlIG1hdGNoIHJvdXRlc1xuICAgICAgcGVuZGluZ0Vycm9yOiBlcnJvcixcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIHJlcGxhY2U6IG9wdHMgJiYgb3B0cy5yZXBsYWNlXG4gICAgfSk7XG4gIH0gLy8gUmV2YWxpZGF0ZSBhbGwgY3VycmVudCBsb2FkZXJzLiAgSWYgYSBuYXZpZ2F0aW9uIGlzIGluIHByb2dyZXNzIG9yIGlmIHRoaXNcbiAgLy8gaXMgaW50ZXJydXB0ZWQgYnkgYSBuYXZpZ2F0aW9uLCBhbGxvdyB0aGlzIHRvIFwic3VjY2VlZFwiIGJ5IGNhbGxpbmcgYWxsXG4gIC8vIGxvYWRlcnMgZHVyaW5nIHRoZSBuZXh0IGxvYWRlciByb3VuZFxuXG5cbiAgZnVuY3Rpb24gcmV2YWxpZGF0ZSgpIHtcbiAgICBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIHJldmFsaWRhdGlvbjogXCJsb2FkaW5nXCJcbiAgICB9KTsgLy8gSWYgd2UncmUgY3VycmVudGx5IHN1Ym1pdHRpbmcgYW4gYWN0aW9uLCB3ZSBkb24ndCBuZWVkIHRvIHN0YXJ0IGEgbmV3XG4gICAgLy8gbmF2aWdhdGlvbiwgd2UnbGwganVzdCBsZXQgdGhlIGZvbGxvdyB1cCBsb2FkZXIgZXhlY3V0aW9uIGNhbGwgYWxsIGxvYWRlcnNcblxuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgd2UncmUgY3VycmVudGx5IGluIGFuIGlkbGUgc3RhdGUsIHN0YXJ0IGEgbmV3IG5hdmlnYXRpb24gZm9yIHRoZSBjdXJyZW50XG4gICAgLy8gYWN0aW9uL2xvY2F0aW9uIGFuZCBtYXJrIGl0IGFzIHVuaW50ZXJydXB0ZWQsIHdoaWNoIHdpbGwgc2tpcCB0aGUgaGlzdG9yeVxuICAgIC8vIHVwZGF0ZSBpbiBjb21wbGV0ZU5hdmlnYXRpb25cblxuXG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICBzdGFydE5hdmlnYXRpb24oc3RhdGUuaGlzdG9yeUFjdGlvbiwgc3RhdGUubG9jYXRpb24sIHtcbiAgICAgICAgc3RhcnRVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIE90aGVyd2lzZSwgaWYgd2UncmUgY3VycmVudGx5IGluIGEgbG9hZGluZyBzdGF0ZSwganVzdCBzdGFydCBhIG5ld1xuICAgIC8vIG5hdmlnYXRpb24gdG8gdGhlIG5hdmlnYXRpb24ubG9jYXRpb24gYnV0IGRvIG5vdCB0cmlnZ2VyIGFuIHVuaW50ZXJydXB0ZWRcbiAgICAvLyByZXZhbGlkYXRpb24gc28gdGhhdCBoaXN0b3J5IGNvcnJlY3RseSB1cGRhdGVzIG9uY2UgdGhlIG5hdmlnYXRpb24gY29tcGxldGVzXG5cblxuICAgIHN0YXJ0TmF2aWdhdGlvbihwZW5kaW5nQWN0aW9uIHx8IHN0YXRlLmhpc3RvcnlBY3Rpb24sIHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24sIHtcbiAgICAgIG92ZXJyaWRlTmF2aWdhdGlvbjogc3RhdGUubmF2aWdhdGlvblxuICAgIH0pO1xuICB9IC8vIFN0YXJ0IGEgbmF2aWdhdGlvbiB0byB0aGUgZ2l2ZW4gYWN0aW9uL2xvY2F0aW9uLiAgQ2FuIG9wdGlvbmFsbHkgcHJvdmlkZSBhXG4gIC8vIG92ZXJyaWRlTmF2aWdhdGlvbiB3aGljaCB3aWxsIG92ZXJyaWRlIHRoZSBub3JtYWxMb2FkIGluIHRoZSBjYXNlIG9mIGEgcmVkaXJlY3RcbiAgLy8gbmF2aWdhdGlvblxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnROYXZpZ2F0aW9uKGhpc3RvcnlBY3Rpb24sIGxvY2F0aW9uLCBvcHRzKSB7XG4gICAgLy8gQWJvcnQgYW55IGluLXByb2dyZXNzIG5hdmlnYXRpb25zIGFuZCBzdGFydCBhIG5ldyBvbmUuIFVuc2V0IGFueSBvbmdvaW5nXG4gICAgLy8gdW5pbnRlcnJ1cHRlZCByZXZhbGlkYXRpb25zIHVubGVzcyB0b2xkIG90aGVyd2lzZSwgc2luY2Ugd2Ugd2FudCB0aGlzXG4gICAgLy8gbmV3IG5hdmlnYXRpb24gdG8gdXBkYXRlIGhpc3Rvcnkgbm9ybWFsbHlcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgJiYgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLmFib3J0KCk7XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBwZW5kaW5nQWN0aW9uID0gaGlzdG9yeUFjdGlvbjtcbiAgICBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSAob3B0cyAmJiBvcHRzLnN0YXJ0VW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbikgPT09IHRydWU7IC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGV2ZXJ5IHRpbWUgd2Ugc3RhcnQgYSBuZXcgbmF2aWdhdGlvbixcbiAgICAvLyBhbmQgdHJhY2sgd2hldGhlciB3ZSBzaG91bGQgcmVzZXQgc2Nyb2xsIG9uIGNvbXBsZXRpb25cblxuICAgIHNhdmVTY3JvbGxQb3NpdGlvbihzdGF0ZS5sb2NhdGlvbiwgc3RhdGUubWF0Y2hlcyk7XG4gICAgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IChvcHRzICYmIG9wdHMucHJldmVudFNjcm9sbFJlc2V0KSA9PT0gdHJ1ZTtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgbG9hZGluZ05hdmlnYXRpb24gPSBvcHRzICYmIG9wdHMub3ZlcnJpZGVOYXZpZ2F0aW9uO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIGxvY2F0aW9uLCBpbml0LmJhc2VuYW1lKTsgLy8gU2hvcnQgY2lyY3VpdCB3aXRoIGEgNDA0IG9uIHRoZSByb290IGVycm9yIGJvdW5kYXJ5IGlmIHdlIG1hdGNoIG5vdGhpbmdcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICAgIGxldCB7XG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgcm91dGVcbiAgICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKHJvdXRlc1RvVXNlKTsgLy8gQ2FuY2VsIGFsbCBwZW5kaW5nIGRlZmVycmVkIG9uIDQwNHMgc2luY2Ugd2UgZG9uJ3Qga2VlcCBhbnkgcm91dGVzXG5cbiAgICAgIGNhbmNlbEFjdGl2ZURlZmVycmVkcygpO1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU2hvcnQgY2lyY3VpdCBpZiBpdCdzIG9ubHkgYSBoYXNoIGNoYW5nZSBhbmQgbm90IGEgbXV0YXRpb24gc3VibWlzc2lvblxuICAgIC8vIEZvciBleGFtcGxlLCBvbiAvcGFnZSNoYXNoIGFuZCBzdWJtaXQgYSA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+IHdoaWNoIHdpbGxcbiAgICAvLyBkZWZhdWx0IHRvIGEgbmF2aWdhdGlvbiB0byAvcGFnZVxuXG5cbiAgICBpZiAoaXNIYXNoQ2hhbmdlT25seShzdGF0ZS5sb2NhdGlvbiwgbG9jYXRpb24pICYmICEob3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChvcHRzLnN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpKSB7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIHtcbiAgICAgICAgbWF0Y2hlc1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDcmVhdGUgYSBjb250cm9sbGVyL1JlcXVlc3QgZm9yIHRoaXMgbmF2aWdhdGlvblxuXG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IHJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIGxvY2F0aW9uLCBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuc2lnbmFsLCBvcHRzICYmIG9wdHMuc3VibWlzc2lvbik7XG4gICAgbGV0IHBlbmRpbmdBY3Rpb25EYXRhO1xuICAgIGxldCBwZW5kaW5nRXJyb3I7XG5cbiAgICBpZiAob3B0cyAmJiBvcHRzLnBlbmRpbmdFcnJvcikge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBlbmRpbmdFcnJvciwgaXQgbWVhbnMgdGhlIHVzZXIgYXR0ZW1wdGVkIGEgR0VUIHN1Ym1pc3Npb25cbiAgICAgIC8vIHdpdGggYmluYXJ5IEZvcm1EYXRhIHNvIGFzc2lnbiBoZXJlIGFuZCBza2lwIHRvIGhhbmRsZUxvYWRlcnMuICBUaGF0XG4gICAgICAvLyB3YXkgd2UgaGFuZGxlIGNhbGxpbmcgbG9hZGVycyBhYm92ZSB0aGUgYm91bmRhcnkgZXRjLiAgSXQncyBub3QgcmVhbGx5XG4gICAgICAvLyBkaWZmZXJlbnQgZnJvbSBhbiBhY3Rpb25FcnJvciBpbiB0aGF0IHNlbnNlLlxuICAgICAgcGVuZGluZ0Vycm9yID0ge1xuICAgICAgICBbZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzKS5yb3V0ZS5pZF06IG9wdHMucGVuZGluZ0Vycm9yXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChvcHRzLnN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIC8vIENhbGwgYWN0aW9uIGlmIHdlIHJlY2VpdmVkIGFuIGFjdGlvbiBzdWJtaXNzaW9uXG4gICAgICBsZXQgYWN0aW9uT3V0cHV0ID0gYXdhaXQgaGFuZGxlQWN0aW9uKHJlcXVlc3QsIGxvY2F0aW9uLCBvcHRzLnN1Ym1pc3Npb24sIG1hdGNoZXMsIHtcbiAgICAgICAgcmVwbGFjZTogb3B0cy5yZXBsYWNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjdGlvbk91dHB1dC5zaG9ydENpcmN1aXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBlbmRpbmdBY3Rpb25EYXRhID0gYWN0aW9uT3V0cHV0LnBlbmRpbmdBY3Rpb25EYXRhO1xuICAgICAgcGVuZGluZ0Vycm9yID0gYWN0aW9uT3V0cHV0LnBlbmRpbmdBY3Rpb25FcnJvcjtcblxuICAgICAgbGV0IG5hdmlnYXRpb24gPSBfZXh0ZW5kcyh7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgbG9jYXRpb25cbiAgICAgIH0sIG9wdHMuc3VibWlzc2lvbik7XG5cbiAgICAgIGxvYWRpbmdOYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjsgLy8gQ3JlYXRlIGEgR0VUIHJlcXVlc3QgZm9yIHRoZSBsb2FkZXJzXG5cbiAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0LnVybCwge1xuICAgICAgICBzaWduYWw6IHJlcXVlc3Quc2lnbmFsXG4gICAgICB9KTtcbiAgICB9IC8vIENhbGwgbG9hZGVyc1xuXG5cbiAgICBsZXQge1xuICAgICAgc2hvcnRDaXJjdWl0ZWQsXG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSA9IGF3YWl0IGhhbmRsZUxvYWRlcnMocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIGxvYWRpbmdOYXZpZ2F0aW9uLCBvcHRzICYmIG9wdHMuc3VibWlzc2lvbiwgb3B0cyAmJiBvcHRzLmZldGNoZXJTdWJtaXNzaW9uLCBvcHRzICYmIG9wdHMucmVwbGFjZSwgcGVuZGluZ0FjdGlvbkRhdGEsIHBlbmRpbmdFcnJvcik7XG5cbiAgICBpZiAoc2hvcnRDaXJjdWl0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENsZWFuIHVwIG5vdyB0aGF0IHRoZSBhY3Rpb24vbG9hZGVycyBoYXZlIGNvbXBsZXRlZC4gIERvbid0IGNsZWFuIHVwIGlmXG4gICAgLy8gd2Ugc2hvcnQgY2lyY3VpdGVkIGJlY2F1c2UgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyIHdpbGwgaGF2ZSBhbHJlYWR5XG4gICAgLy8gYmVlbiBhc3NpZ25lZCB0byBhIG5ldyBjb250cm9sbGVyIGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uXG5cblxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBfZXh0ZW5kcyh7XG4gICAgICBtYXRjaGVzXG4gICAgfSwgcGVuZGluZ0FjdGlvbkRhdGEgPyB7XG4gICAgICBhY3Rpb25EYXRhOiBwZW5kaW5nQWN0aW9uRGF0YVxuICAgIH0gOiB7fSwge1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0pKTtcbiAgfSAvLyBDYWxsIHRoZSBhY3Rpb24gbWF0Y2hlZCBieSB0aGUgbGVhZiByb3V0ZSBmb3IgdGhpcyBuYXZpZ2F0aW9uIGFuZCBoYW5kbGVcbiAgLy8gcmVkaXJlY3RzL2Vycm9yc1xuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQWN0aW9uKHJlcXVlc3QsIGxvY2F0aW9uLCBzdWJtaXNzaW9uLCBtYXRjaGVzLCBvcHRzKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTsgLy8gUHV0IHVzIGluIGEgc3VibWl0dGluZyBzdGF0ZVxuXG4gICAgbGV0IG5hdmlnYXRpb24gPSBfZXh0ZW5kcyh7XG4gICAgICBzdGF0ZTogXCJzdWJtaXR0aW5nXCIsXG4gICAgICBsb2NhdGlvblxuICAgIH0sIHN1Ym1pc3Npb24pO1xuXG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgbmF2aWdhdGlvblxuICAgIH0pOyAvLyBDYWxsIG91ciBhY3Rpb24gYW5kIGdldCB0aGUgcmVzdWx0XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBhY3Rpb25NYXRjaCA9IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKTtcblxuICAgIGlmICghYWN0aW9uTWF0Y2gucm91dGUuYWN0aW9uICYmICFhY3Rpb25NYXRjaC5yb3V0ZS5sYXp5KSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yOiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgIHJvdXRlSWQ6IGFjdGlvbk1hdGNoLnJvdXRlLmlkXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJhY3Rpb25cIiwgcmVxdWVzdCwgYWN0aW9uTWF0Y2gsIG1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCByb3V0ZXIuYmFzZW5hbWUpO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IHJlcGxhY2U7XG5cbiAgICAgIGlmIChvcHRzICYmIG9wdHMucmVwbGFjZSAhPSBudWxsKSB7XG4gICAgICAgIHJlcGxhY2UgPSBvcHRzLnJlcGxhY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBkaWRuJ3QgZXhwbGljaXR5IGluZGljYXRlIHJlcGxhY2UgYmVoYXZpb3IsIHJlcGxhY2UgaWZcbiAgICAgICAgLy8gd2UgcmVkaXJlY3RlZCB0byB0aGUgZXhhY3Qgc2FtZSBsb2NhdGlvbiB3ZSdyZSBjdXJyZW50bHkgYXQgdG8gYXZvaWRcbiAgICAgICAgLy8gZG91YmxlIGJhY2stYnV0dG9uc1xuICAgICAgICByZXBsYWNlID0gcmVzdWx0LmxvY2F0aW9uID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlc3VsdCwge1xuICAgICAgICBzdWJtaXNzaW9uLFxuICAgICAgICByZXBsYWNlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFN0b3JlIG9mZiB0aGUgcGVuZGluZyBlcnJvciAtIHdlIHVzZSBpdCB0byBkZXRlcm1pbmUgd2hpY2ggbG9hZGVyc1xuICAgICAgLy8gdG8gY2FsbCBhbmQgd2lsbCBjb21taXQgaXQgd2hlbiB3ZSBjb21wbGV0ZSB0aGUgbmF2aWdhdGlvblxuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIGFjdGlvbk1hdGNoLnJvdXRlLmlkKTsgLy8gQnkgZGVmYXVsdCwgYWxsIHN1Ym1pc3Npb25zIGFyZSBSRVBMQUNFIG5hdmlnYXRpb25zLCBidXQgaWYgdGhlXG4gICAgICAvLyBhY3Rpb24gdGhyZXcgYW4gZXJyb3IgdGhhdCdsbCBiZSByZW5kZXJlZCBpbiBhbiBlcnJvckVsZW1lbnQsIHdlIGZhbGxcbiAgICAgIC8vIGJhY2sgdG8gUFVTSCBzbyB0aGF0IHRoZSB1c2VyIGNhbiB1c2UgdGhlIGJhY2sgYnV0dG9uIHRvIGdldCBiYWNrIHRvXG4gICAgICAvLyB0aGUgcHJlLXN1Ym1pc3Npb24gZm9ybSBsb2NhdGlvbiB0byB0cnkgYWdhaW5cblxuICAgICAgaWYgKChvcHRzICYmIG9wdHMucmVwbGFjZSkgIT09IHRydWUpIHtcbiAgICAgICAgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBTZW5kIGJhY2sgYW4gZW1wdHkgb2JqZWN0IHdlIGNhbiB1c2UgdG8gY2xlYXIgb3V0IGFueSBwcmlvciBhY3Rpb25EYXRhXG4gICAgICAgIHBlbmRpbmdBY3Rpb25EYXRhOiB7fSxcbiAgICAgICAgcGVuZGluZ0FjdGlvbkVycm9yOiB7XG4gICAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGVuZGluZ0FjdGlvbkRhdGE6IHtcbiAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgIH1cbiAgICB9O1xuICB9IC8vIENhbGwgYWxsIGFwcGxpY2FibGUgbG9hZGVycyBmb3IgdGhlIGdpdmVuIG1hdGNoZXMsIGhhbmRsaW5nIHJlZGlyZWN0cyxcbiAgLy8gZXJyb3JzLCBldGMuXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2FkZXJzKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCBvdmVycmlkZU5hdmlnYXRpb24sIHN1Ym1pc3Npb24sIGZldGNoZXJTdWJtaXNzaW9uLCByZXBsYWNlLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKSB7XG4gICAgLy8gRmlndXJlIG91dCB0aGUgcmlnaHQgbmF2aWdhdGlvbiB3ZSB3YW50IHRvIHVzZSBmb3IgZGF0YSBsb2FkaW5nXG4gICAgbGV0IGxvYWRpbmdOYXZpZ2F0aW9uID0gb3ZlcnJpZGVOYXZpZ2F0aW9uO1xuXG4gICAgaWYgKCFsb2FkaW5nTmF2aWdhdGlvbikge1xuICAgICAgbGV0IG5hdmlnYXRpb24gPSBfZXh0ZW5kcyh7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkXG4gICAgICB9LCBzdWJtaXNzaW9uKTtcblxuICAgICAgbG9hZGluZ05hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xuICAgIH0gLy8gSWYgdGhpcyB3YXMgYSByZWRpcmVjdCBmcm9tIGFuIGFjdGlvbiB3ZSBkb24ndCBoYXZlIGEgXCJzdWJtaXNzaW9uXCIgYnV0XG4gICAgLy8gd2UgaGF2ZSBpdCBvbiB0aGUgbG9hZGluZyBuYXZpZ2F0aW9uIHNvIHVzZSB0aGF0IGlmIGF2YWlsYWJsZVxuXG5cbiAgICBsZXQgYWN0aXZlU3VibWlzc2lvbiA9IHN1Ym1pc3Npb24gfHwgZmV0Y2hlclN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uIHx8IGZldGNoZXJTdWJtaXNzaW9uIDogbG9hZGluZ05hdmlnYXRpb24uZm9ybU1ldGhvZCAmJiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtQWN0aW9uICYmIGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1EYXRhICYmIGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1FbmNUeXBlID8ge1xuICAgICAgZm9ybU1ldGhvZDogbG9hZGluZ05hdmlnYXRpb24uZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1BY3Rpb246IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1BY3Rpb24sXG4gICAgICBmb3JtRGF0YTogbG9hZGluZ05hdmlnYXRpb24uZm9ybURhdGEsXG4gICAgICBmb3JtRW5jVHlwZTogbG9hZGluZ05hdmlnYXRpb24uZm9ybUVuY1R5cGVcbiAgICB9IDogdW5kZWZpbmVkO1xuICAgIGxldCByb3V0ZXNUb1VzZSA9IGluRmxpZ2h0RGF0YVJvdXRlcyB8fCBkYXRhUm91dGVzO1xuICAgIGxldCBbbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnNdID0gZ2V0TWF0Y2hlc1RvTG9hZChpbml0Lmhpc3RvcnksIHN0YXRlLCBtYXRjaGVzLCBhY3RpdmVTdWJtaXNzaW9uLCBsb2NhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZmV0Y2hMb2FkTWF0Y2hlcywgcm91dGVzVG9Vc2UsIGluaXQuYmFzZW5hbWUsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpOyAvLyBDYW5jZWwgcGVuZGluZyBkZWZlcnJlZHMgZm9yIG5vLWxvbmdlci1tYXRjaGVkIHJvdXRlcyBvciByb3V0ZXMgd2UncmVcbiAgICAvLyBhYm91dCB0byByZWxvYWQuICBOb3RlIHRoYXQgaWYgdGhpcyBpcyBhbiBhY3Rpb24gcmVsb2FkIHdlIHdvdWxkIGhhdmVcbiAgICAvLyBhbHJlYWR5IGNhbmNlbGxlZCBhbGwgcGVuZGluZyBkZWZlcnJlZHMgc28gdGhpcyB3b3VsZCBiZSBhIG5vLW9wXG5cbiAgICBjYW5jZWxBY3RpdmVEZWZlcnJlZHMocm91dGVJZCA9PiAhKG1hdGNoZXMgJiYgbWF0Y2hlcy5zb21lKG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkpIHx8IG1hdGNoZXNUb0xvYWQgJiYgbWF0Y2hlc1RvTG9hZC5zb21lKG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkpOyAvLyBTaG9ydCBjaXJjdWl0IGlmIHdlIGhhdmUgbm8gbG9hZGVycyB0byBydW5cblxuICAgIGlmIChtYXRjaGVzVG9Mb2FkLmxlbmd0aCA9PT0gMCAmJiByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgX2V4dGVuZHMoe1xuICAgICAgICBtYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgLy8gQ29tbWl0IHBlbmRpbmcgZXJyb3IgaWYgd2UncmUgc2hvcnQgY2lyY3VpdGluZ1xuICAgICAgICBlcnJvcnM6IHBlbmRpbmdFcnJvciB8fCBudWxsXG4gICAgICB9LCBwZW5kaW5nQWN0aW9uRGF0YSA/IHtcbiAgICAgICAgYWN0aW9uRGF0YTogcGVuZGluZ0FjdGlvbkRhdGFcbiAgICAgIH0gOiB7fSkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfSAvLyBJZiB0aGlzIGlzIGFuIHVuaW50ZXJydXB0ZWQgcmV2YWxpZGF0aW9uLCB3ZSByZW1haW4gaW4gb3VyIGN1cnJlbnQgaWRsZVxuICAgIC8vIHN0YXRlLiAgSWYgbm90LCB3ZSBuZWVkIHRvIHN3aXRjaCB0byBvdXIgbG9hZGluZyBzdGF0ZSBhbmQgbG9hZCBkYXRhLFxuICAgIC8vIHByZXNlcnZpbmcgYW55IG5ldyBhY3Rpb24gZGF0YSBvciBleGlzdGluZyBhY3Rpb24gZGF0YSAoaW4gdGhlIGNhc2Ugb2ZcbiAgICAvLyBhIHJldmFsaWRhdGlvbiBpbnRlcnJ1cHRpbmcgYW4gYWN0aW9uUmVsb2FkKVxuXG5cbiAgICBpZiAoIWlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbikge1xuICAgICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaChyZiA9PiB7XG4gICAgICAgIGxldCBmZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KHJmLmtleSk7XG4gICAgICAgIGxldCByZXZhbGlkYXRpbmdGZXRjaGVyID0ge1xuICAgICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgICBkYXRhOiBmZXRjaGVyICYmIGZldGNoZXIuZGF0YSxcbiAgICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBzdGF0ZS5mZXRjaGVycy5zZXQocmYua2V5LCByZXZhbGlkYXRpbmdGZXRjaGVyKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGFjdGlvbkRhdGEgPSBwZW5kaW5nQWN0aW9uRGF0YSB8fCBzdGF0ZS5hY3Rpb25EYXRhO1xuICAgICAgdXBkYXRlU3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICBuYXZpZ2F0aW9uOiBsb2FkaW5nTmF2aWdhdGlvblxuICAgICAgfSwgYWN0aW9uRGF0YSA/IE9iamVjdC5rZXlzKGFjdGlvbkRhdGEpLmxlbmd0aCA9PT0gMCA/IHtcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbFxuICAgICAgfSA6IHtcbiAgICAgICAgYWN0aW9uRGF0YVxuICAgICAgfSA6IHt9LCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPiAwID8ge1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0gOiB7fSkpO1xuICAgIH1cblxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkID0gKytpbmNyZW1lbnRpbmdMb2FkSWQ7XG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaChyZiA9PiBmZXRjaENvbnRyb2xsZXJzLnNldChyZi5rZXksIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlcikpO1xuICAgIGxldCB7XG4gICAgICByZXN1bHRzLFxuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIGZldGNoZXJSZXN1bHRzXG4gICAgfSA9IGF3YWl0IGNhbGxMb2FkZXJzQW5kTWF5YmVSZXNvbHZlRGF0YShzdGF0ZS5tYXRjaGVzLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVycywgcmVxdWVzdCk7XG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfSAvLyBDbGVhbiB1cCBfYWZ0ZXJfIGxvYWRlcnMgaGF2ZSBjb21wbGV0ZWQuICBEb24ndCBjbGVhbiB1cCBpZiB3ZSBzaG9ydFxuICAgIC8vIGNpcmN1aXRlZCBiZWNhdXNlIGZldGNoQ29udHJvbGxlcnMgd291bGQgaGF2ZSBiZWVuIGFib3J0ZWQgYW5kXG4gICAgLy8gcmVhc3NpZ25lZCB0byBuZXcgY29udHJvbGxlcnMgZm9yIHRoZSBuZXh0IG5hdmlnYXRpb25cblxuXG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaChyZiA9PiBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShyZi5rZXkpKTsgLy8gSWYgYW55IGxvYWRlcnMgcmV0dXJuZWQgYSByZWRpcmVjdCBSZXNwb25zZSwgc3RhcnQgYSBuZXcgUkVQTEFDRSBuYXZpZ2F0aW9uXG5cbiAgICBsZXQgcmVkaXJlY3QgPSBmaW5kUmVkaXJlY3QocmVzdWx0cyk7XG5cbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZWRpcmVjdCwge1xuICAgICAgICByZXBsYWNlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH0gLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcblxuXG4gICAgbGV0IHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9ID0gcHJvY2Vzc0xvYWRlckRhdGEoc3RhdGUsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGxvYWRlclJlc3VsdHMsIHBlbmRpbmdFcnJvciwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpOyAvLyBXaXJlIHVwIHN1YnNjcmliZXJzIHRvIHVwZGF0ZSBsb2FkZXJEYXRhIGFzIHByb21pc2VzIHNldHRsZVxuXG4gICAgYWN0aXZlRGVmZXJyZWRzLmZvckVhY2goKGRlZmVycmVkRGF0YSwgcm91dGVJZCkgPT4ge1xuICAgICAgZGVmZXJyZWREYXRhLnN1YnNjcmliZShhYm9ydGVkID0+IHtcbiAgICAgICAgLy8gTm90ZTogTm8gbmVlZCB0byB1cGRhdGVTdGF0ZSBoZXJlIHNpbmNlIHRoZSBUcmFja2VkUHJvbWlzZSBvblxuICAgICAgICAvLyBsb2FkZXJEYXRhIGlzIHN0YWJsZSBhY3Jvc3MgcmVzb2x2ZS9yZWplY3RcbiAgICAgICAgLy8gUmVtb3ZlIHRoaXMgaW5zdGFuY2UgaWYgd2Ugd2VyZSBhYm9ydGVkIG9yIGlmIHByb21pc2VzIGhhdmUgc2V0dGxlZFxuICAgICAgICBpZiAoYWJvcnRlZCB8fCBkZWZlcnJlZERhdGEuZG9uZSkge1xuICAgICAgICAgIGFjdGl2ZURlZmVycmVkcy5kZWxldGUocm91dGVJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIG1hcmtGZXRjaFJlZGlyZWN0c0RvbmUoKTtcbiAgICBsZXQgZGlkQWJvcnRGZXRjaExvYWRzID0gYWJvcnRTdGFsZUZldGNoTG9hZHMocGVuZGluZ05hdmlnYXRpb25Mb2FkSWQpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSwgZGlkQWJvcnRGZXRjaExvYWRzIHx8IHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aCA+IDAgPyB7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9IDoge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmV0Y2hlcihrZXkpIHtcbiAgICByZXR1cm4gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSkgfHwgSURMRV9GRVRDSEVSO1xuICB9IC8vIFRyaWdnZXIgYSBmZXRjaGVyIGxvYWQvc3VibWl0IGZvciB0aGUgZ2l2ZW4gZmV0Y2hlciBrZXlcblxuXG4gIGZ1bmN0aW9uIGZldGNoKGtleSwgcm91dGVJZCwgaHJlZiwgb3B0cykge1xuICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicm91dGVyLmZldGNoKCkgd2FzIGNhbGxlZCBkdXJpbmcgdGhlIHNlcnZlciByZW5kZXIsIGJ1dCBpdCBzaG91bGRuJ3QgYmUuIFwiICsgXCJZb3UgYXJlIGxpa2VseSBjYWxsaW5nIGEgdXNlRmV0Y2hlcigpIG1ldGhvZCBpbiB0aGUgYm9keSBvZiB5b3VyIGNvbXBvbmVudC4gXCIgKyBcIlRyeSBtb3ZpbmcgaXQgdG8gYSB1c2VFZmZlY3Qgb3IgYSBjYWxsYmFjay5cIik7XG4gICAgfVxuXG4gICAgaWYgKGZldGNoQ29udHJvbGxlcnMuaGFzKGtleSkpIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgIGxldCByb3V0ZXNUb1VzZSA9IGluRmxpZ2h0RGF0YVJvdXRlcyB8fCBkYXRhUm91dGVzO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIGhyZWYsIGluaXQuYmFzZW5hbWUpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogaHJlZlxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB7XG4gICAgICBwYXRoLFxuICAgICAgc3VibWlzc2lvblxuICAgIH0gPSBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnMoaHJlZiwgZnV0dXJlLCBvcHRzLCB0cnVlKTtcbiAgICBsZXQgbWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBwYXRoKTtcbiAgICBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gKG9wdHMgJiYgb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXQpID09PSB0cnVlO1xuXG4gICAgaWYgKHN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICBoYW5kbGVGZXRjaGVyQWN0aW9uKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIHN1Ym1pc3Npb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU3RvcmUgb2ZmIHRoZSBtYXRjaCBzbyB3ZSBjYW4gY2FsbCBpdCdzIHNob3VsZFJldmFsaWRhdGUgb24gc3Vic2VxdWVudFxuICAgIC8vIHJldmFsaWRhdGlvbnNcblxuXG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5zZXQoa2V5LCB7XG4gICAgICByb3V0ZUlkLFxuICAgICAgcGF0aFxuICAgIH0pO1xuICAgIGhhbmRsZUZldGNoZXJMb2FkZXIoa2V5LCByb3V0ZUlkLCBwYXRoLCBtYXRjaCwgbWF0Y2hlcywgc3VibWlzc2lvbik7XG4gIH0gLy8gQ2FsbCB0aGUgYWN0aW9uIGZvciB0aGUgbWF0Y2hlZCBmZXRjaGVyLnN1Ym1pdCgpLCBhbmQgdGhlbiBoYW5kbGUgcmVkaXJlY3RzLFxuICAvLyBlcnJvcnMsIGFuZCByZXZhbGlkYXRpb25cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZldGNoZXJBY3Rpb24oa2V5LCByb3V0ZUlkLCBwYXRoLCBtYXRjaCwgcmVxdWVzdE1hdGNoZXMsIHN1Ym1pc3Npb24pIHtcbiAgICBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpO1xuICAgIGZldGNoTG9hZE1hdGNoZXMuZGVsZXRlKGtleSk7XG5cbiAgICBpZiAoIW1hdGNoLnJvdXRlLmFjdGlvbiAmJiAhbWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kOiBzdWJtaXNzaW9uLmZvcm1NZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBwYXRoLFxuICAgICAgICByb3V0ZUlkOiByb3V0ZUlkXG4gICAgICB9KTtcbiAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFB1dCB0aGlzIGZldGNoZXIgaW50byBpdCdzIHN1Ym1pdHRpbmcgc3RhdGVcblxuXG4gICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuXG4gICAgbGV0IGZldGNoZXIgPSBfZXh0ZW5kcyh7XG4gICAgICBzdGF0ZTogXCJzdWJtaXR0aW5nXCJcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBkYXRhOiBleGlzdGluZ0ZldGNoZXIgJiYgZXhpc3RpbmdGZXRjaGVyLmRhdGEsXG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZmV0Y2hlcik7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7IC8vIENhbGwgdGhlIGFjdGlvbiBmb3IgdGhlIGZldGNoZXJcblxuICAgIGxldCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IGZldGNoUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgcGF0aCwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCwgc3VibWlzc2lvbik7XG4gICAgZmV0Y2hDb250cm9sbGVycy5zZXQoa2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIGxldCBhY3Rpb25SZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJhY3Rpb25cIiwgZmV0Y2hSZXF1ZXN0LCBtYXRjaCwgcmVxdWVzdE1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCByb3V0ZXIuYmFzZW5hbWUpO1xuXG4gICAgaWYgKGZldGNoUmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgLy8gV2UgY2FuIGRlbGV0ZSB0aGlzIHNvIGxvbmcgYXMgd2Ugd2VyZW4ndCBhYm9ydGVkIGJ5IG91IG91ciBvd24gZmV0Y2hlclxuICAgICAgLy8gcmUtc3VibWl0IHdoaWNoIHdvdWxkIGhhdmUgcHV0IF9uZXdfIGNvbnRyb2xsZXIgaXMgaW4gZmV0Y2hDb250cm9sbGVyc1xuICAgICAgaWYgKGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSkgPT09IGFib3J0Q29udHJvbGxlcikge1xuICAgICAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICAgIGZldGNoUmVkaXJlY3RJZHMuYWRkKGtleSk7XG5cbiAgICAgIGxldCBsb2FkaW5nRmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiXG4gICAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBsb2FkaW5nRmV0Y2hlcik7XG4gICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIGFjdGlvblJlc3VsdCwge1xuICAgICAgICBzdWJtaXNzaW9uLFxuICAgICAgICBpc0ZldGNoQWN0aW9uUmVkaXJlY3Q6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gLy8gUHJvY2VzcyBhbnkgbm9uLXJlZGlyZWN0IGVycm9ycyB0aHJvd25cblxuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgYWN0aW9uUmVzdWx0LmVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChhY3Rpb25SZXN1bHQpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcbiAgICB9IC8vIFN0YXJ0IHRoZSBkYXRhIGxvYWQgZm9yIGN1cnJlbnQgbWF0Y2hlcywgb3IgdGhlIG5leHQgbG9jYXRpb24gaWYgd2UncmVcbiAgICAvLyBpbiB0aGUgbWlkZGxlIG9mIGEgbmF2aWdhdGlvblxuXG5cbiAgICBsZXQgbmV4dExvY2F0aW9uID0gc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiB8fCBzdGF0ZS5sb2NhdGlvbjtcbiAgICBsZXQgcmV2YWxpZGF0aW9uUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgbmV4dExvY2F0aW9uLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgbWF0Y2hlcyA9IHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgIT09IFwiaWRsZVwiID8gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24sIGluaXQuYmFzZW5hbWUpIDogc3RhdGUubWF0Y2hlcztcbiAgICBpbnZhcmlhbnQobWF0Y2hlcywgXCJEaWRuJ3QgZmluZCBhbnkgbWF0Y2hlcyBhZnRlciBmZXRjaGVyIGFjdGlvblwiKTtcbiAgICBsZXQgbG9hZElkID0gKytpbmNyZW1lbnRpbmdMb2FkSWQ7XG4gICAgZmV0Y2hSZWxvYWRJZHMuc2V0KGtleSwgbG9hZElkKTtcblxuICAgIGxldCBsb2FkRmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgIGRhdGE6IGFjdGlvblJlc3VsdC5kYXRhXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRGZXRjaGVyKTtcbiAgICBsZXQgW21hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzXSA9IGdldE1hdGNoZXNUb0xvYWQoaW5pdC5oaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgc3VibWlzc2lvbiwgbmV4dExvY2F0aW9uLCBpc1JldmFsaWRhdGlvblJlcXVpcmVkLCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcywgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLCBmZXRjaExvYWRNYXRjaGVzLCByb3V0ZXNUb1VzZSwgaW5pdC5iYXNlbmFtZSwge1xuICAgICAgW21hdGNoLnJvdXRlLmlkXTogYWN0aW9uUmVzdWx0LmRhdGFcbiAgICB9LCB1bmRlZmluZWQgLy8gTm8gbmVlZCB0byBzZW5kIHRocm91Z2ggZXJyb3JzIHNpbmNlIHdlIHNob3J0IGNpcmN1aXQgYWJvdmVcbiAgICApOyAvLyBQdXQgYWxsIHJldmFsaWRhdGluZyBmZXRjaGVycyBpbnRvIHRoZSBsb2FkaW5nIHN0YXRlLCBleGNlcHQgZm9yIHRoZVxuICAgIC8vIGN1cnJlbnQgZmV0Y2hlciB3aGljaCB3ZSB3YW50IHRvIGtlZXAgaW4gaXQncyBjdXJyZW50IGxvYWRpbmcgc3RhdGUgd2hpY2hcbiAgICAvLyBjb250YWlucyBpdCdzIGFjdGlvbiBzdWJtaXNzaW9uIGluZm8gKyBhY3Rpb24gZGF0YVxuXG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZmlsdGVyKHJmID0+IHJmLmtleSAhPT0ga2V5KS5mb3JFYWNoKHJmID0+IHtcbiAgICAgIGxldCBzdGFsZUtleSA9IHJmLmtleTtcbiAgICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoc3RhbGVLZXkpO1xuICAgICAgbGV0IHJldmFsaWRhdGluZ0ZldGNoZXIgPSB7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyICYmIGV4aXN0aW5nRmV0Y2hlci5kYXRhLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH07XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoc3RhbGVLZXksIHJldmFsaWRhdGluZ0ZldGNoZXIpO1xuICAgICAgZmV0Y2hDb250cm9sbGVycy5zZXQoc3RhbGVLZXksIGFib3J0Q29udHJvbGxlcik7XG4gICAgfSk7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7XG4gICAgbGV0IHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBsb2FkZXJSZXN1bHRzLFxuICAgICAgZmV0Y2hlclJlc3VsdHNcbiAgICB9ID0gYXdhaXQgY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhKHN0YXRlLm1hdGNoZXMsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCByZXZhbGlkYXRpb25SZXF1ZXN0KTtcblxuICAgIGlmIChhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gociA9PiBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShyLmtleSkpO1xuICAgIGxldCByZWRpcmVjdCA9IGZpbmRSZWRpcmVjdChyZXN1bHRzKTtcblxuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgcmV0dXJuIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZWRpcmVjdCk7XG4gICAgfSAvLyBQcm9jZXNzIGFuZCBjb21taXQgb3V0cHV0IGZyb20gbG9hZGVyc1xuXG5cbiAgICBsZXQge1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgc3RhdGUubWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgbG9hZGVyUmVzdWx0cywgdW5kZWZpbmVkLCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcyk7XG4gICAgbGV0IGRvbmVGZXRjaGVyID0ge1xuICAgICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgICAgZGF0YTogYWN0aW9uUmVzdWx0LmRhdGEsXG4gICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfTtcbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgbGV0IGRpZEFib3J0RmV0Y2hMb2FkcyA9IGFib3J0U3RhbGVGZXRjaExvYWRzKGxvYWRJZCk7IC8vIElmIHdlIGFyZSBjdXJyZW50bHkgaW4gYSBuYXZpZ2F0aW9uIGxvYWRpbmcgc3RhdGUgYW5kIHRoaXMgZmV0Y2hlciBpc1xuICAgIC8vIG1vcmUgcmVjZW50IHRoYW4gdGhlIG5hdmlnYXRpb24sIHdlIHdhbnQgdGhlIG5ld2VyIGRhdGEgc28gYWJvcnQgdGhlXG4gICAgLy8gbmF2aWdhdGlvbiBhbmQgY29tcGxldGUgaXQgd2l0aCB0aGUgZmV0Y2hlciBkYXRhXG5cbiAgICBpZiAoc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgJiYgbG9hZElkID4gcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQpIHtcbiAgICAgIGludmFyaWFudChwZW5kaW5nQWN0aW9uLCBcIkV4cGVjdGVkIHBlbmRpbmcgYWN0aW9uXCIpO1xuICAgICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24sIHtcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YSxcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2UganVzdCB1cGRhdGUgd2l0aCB0aGUgZmV0Y2hlciBkYXRhLCBwcmVzZXJ2aW5nIGFueSBleGlzdGluZ1xuICAgICAgLy8gbG9hZGVyRGF0YSBmb3IgbG9hZGVycyB0aGF0IGRpZCBub3QgbmVlZCB0byByZWxvYWQuICBXZSBoYXZlIHRvXG4gICAgICAvLyBtYW51YWxseSBtZXJnZSBoZXJlIHNpbmNlIHdlIGFyZW4ndCBnb2luZyB0aHJvdWdoIGNvbXBsZXRlTmF2aWdhdGlvblxuICAgICAgdXBkYXRlU3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGxvYWRlckRhdGE6IG1lcmdlTG9hZGVyRGF0YShzdGF0ZS5sb2FkZXJEYXRhLCBsb2FkZXJEYXRhLCBtYXRjaGVzLCBlcnJvcnMpXG4gICAgICB9LCBkaWRBYm9ydEZldGNoTG9hZHMgPyB7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSA6IHt9KSk7XG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgfVxuICB9IC8vIENhbGwgdGhlIG1hdGNoZWQgbG9hZGVyIGZvciBmZXRjaGVyLmxvYWQoKSwgaGFuZGxpbmcgcmVkaXJlY3RzLCBlcnJvcnMsIGV0Yy5cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZldGNoZXJMb2FkZXIoa2V5LCByb3V0ZUlkLCBwYXRoLCBtYXRjaCwgbWF0Y2hlcywgc3VibWlzc2lvbikge1xuICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTsgLy8gUHV0IHRoaXMgZmV0Y2hlciBpbnRvIGl0J3MgbG9hZGluZyBzdGF0ZVxuXG4gICAgbGV0IGxvYWRpbmdGZXRjaGVyID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWRcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBkYXRhOiBleGlzdGluZ0ZldGNoZXIgJiYgZXhpc3RpbmdGZXRjaGVyLmRhdGEsXG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgbG9hZGluZ0ZldGNoZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pOyAvLyBDYWxsIHRoZSBsb2FkZXIgZm9yIHRoaXMgZmV0Y2hlciByb3V0ZSBtYXRjaFxuXG4gICAgbGV0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgZmV0Y2hSZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBwYXRoLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLnNldChrZXksIGFib3J0Q29udHJvbGxlcik7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCBmZXRjaFJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgcm91dGVyLmJhc2VuYW1lKTsgLy8gRGVmZXJyZWQgaXNuJ3Qgc3VwcG9ydGVkIGZvciBmZXRjaGVyIGxvYWRzLCBhd2FpdCBldmVyeXRoaW5nIGFuZCB0cmVhdCBpdFxuICAgIC8vIGFzIGEgbm9ybWFsIGxvYWQuICByZXNvbHZlRGVmZXJyZWREYXRhIHdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGlzXG4gICAgLy8gZmV0Y2hlciBnZXRzIGFib3J0ZWQsIHNvIHdlIGp1c3QgbGVhdmUgcmVzdWx0IHVudG91Y2hlZCBhbmQgc2hvcnQgY2lyY3VpdFxuICAgIC8vIGJlbG93IGlmIHRoYXQgaGFwcGVuc1xuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gKGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBmZXRjaFJlcXVlc3Quc2lnbmFsLCB0cnVlKSkgfHwgcmVzdWx0O1xuICAgIH0gLy8gV2UgY2FuIGRlbGV0ZSB0aGlzIHNvIGxvbmcgYXMgd2Ugd2VyZW4ndCBhYm9ydGVkIGJ5IG91IG91ciBvd24gZmV0Y2hlclxuICAgIC8vIHJlLWxvYWQgd2hpY2ggd291bGQgaGF2ZSBwdXQgX25ld18gY29udHJvbGxlciBpcyBpbiBmZXRjaENvbnRyb2xsZXJzXG5cblxuICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmdldChrZXkpID09PSBhYm9ydENvbnRyb2xsZXIpIHtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgfVxuXG4gICAgaWYgKGZldGNoUmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgdGhlIGxvYWRlciB0aHJldyBhIHJlZGlyZWN0IFJlc3BvbnNlLCBzdGFydCBhIG5ldyBSRVBMQUNFIG5hdmlnYXRpb25cblxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgYXdhaXQgc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlc3VsdCk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBQcm9jZXNzIGFueSBub24tcmVkaXJlY3QgZXJyb3JzIHRocm93blxuXG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgcm91dGVJZCk7XG4gICAgICBzdGF0ZS5mZXRjaGVycy5kZWxldGUoa2V5KTsgLy8gVE9ETzogSW4gcmVtaXgsIHRoaXMgd291bGQgcmVzZXQgdG8gSURMRV9OQVZJR0FUSU9OIGlmIGl0IHdhcyBhIGNhdGNoIC1cbiAgICAgIC8vIGRvIHdlIG5lZWQgdG8gYmVoYXZlIGFueSBkaWZmZXJlbnRseSB3aXRoIG91ciBub24tcmVkaXJlY3QgZXJyb3JzP1xuICAgICAgLy8gV2hhdCBpZiBpdCB3YXMgYSBub24tcmVkaXJlY3QgUmVzcG9uc2U/XG5cbiAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZhcmlhbnQoIWlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSwgXCJVbmhhbmRsZWQgZmV0Y2hlciBkZWZlcnJlZCBkYXRhXCIpOyAvLyBQdXQgdGhlIGZldGNoZXIgYmFjayBpbnRvIGFuIGlkbGUgc3RhdGVcblxuICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH07XG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGhhbmRsZSByZWRpcmVjdHMgcmV0dXJuZWQgZnJvbSBhbiBhY3Rpb24gb3IgbG9hZGVyLlxuICAgKiBOb3JtYWxseSwgYSByZWRpcmVjdCBcInJlcGxhY2VzXCIgdGhlIG5hdmlnYXRpb24gdGhhdCB0cmlnZ2VyZWQgaXQuICBTbywgZm9yXG4gICAqIGV4YW1wbGU6XG4gICAqXG4gICAqICAtIHVzZXIgaXMgb24gL2FcbiAgICogIC0gdXNlciBjbGlja3MgYSBsaW5rIHRvIC9iXG4gICAqICAtIGxvYWRlciBmb3IgL2IgcmVkaXJlY3RzIHRvIC9jXG4gICAqXG4gICAqIEluIGEgbm9uLUpTIGFwcCB0aGUgYnJvd3NlciB3b3VsZCB0cmFjayB0aGUgaW4tZmxpZ2h0IG5hdmlnYXRpb24gdG8gL2IgYW5kXG4gICAqIHRoZW4gcmVwbGFjZSBpdCB3aXRoIC9jIHdoZW4gaXQgZW5jb3VudGVyZWQgdGhlIHJlZGlyZWN0IHJlc3BvbnNlLiAgSW5cbiAgICogdGhlIGVuZCBpdCB3b3VsZCBvbmx5IGV2ZXIgdXBkYXRlIHRoZSBVUkwgYmFyIHdpdGggL2MuXG4gICAqXG4gICAqIEluIGNsaWVudC1zaWRlIHJvdXRpbmcgdXNpbmcgcHVzaFN0YXRlL3JlcGxhY2VTdGF0ZSwgd2UgYWltIHRvIGVtdWxhdGVcbiAgICogdGhpcyBiZWhhdmlvciBhbmQgd2UgYWxzbyBkbyBub3QgdXBkYXRlIGhpc3RvcnkgdW50aWwgdGhlIGVuZCBvZiB0aGVcbiAgICogbmF2aWdhdGlvbiAoaW5jbHVkaW5nIHByb2Nlc3NlZCByZWRpcmVjdHMpLiAgVGhpcyBtZWFucyB0aGF0IHdlIG5ldmVyXG4gICAqIGFjdHVhbGx5IHRvdWNoIGhpc3RvcnkgdW50aWwgd2UndmUgcHJvY2Vzc2VkIHJlZGlyZWN0cywgc28gd2UganVzdCB1c2VcbiAgICogdGhlIGhpc3RvcnkgYWN0aW9uIGZyb20gdGhlIG9yaWdpbmFsIG5hdmlnYXRpb24gKFBVU0ggb3IgUkVQTEFDRSkuXG4gICAqL1xuXG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlZGlyZWN0LCBfdGVtcCkge1xuICAgIHZhciBfd2luZG93O1xuXG4gICAgbGV0IHtcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICByZXBsYWNlLFxuICAgICAgaXNGZXRjaEFjdGlvblJlZGlyZWN0XG4gICAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuXG4gICAgaWYgKHJlZGlyZWN0LnJldmFsaWRhdGUpIHtcbiAgICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCByZWRpcmVjdExvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oc3RhdGUubG9jYXRpb24sIHJlZGlyZWN0LmxvY2F0aW9uLCAvLyBUT0RPOiBUaGlzIGNhbiBiZSByZW1vdmVkIG9uY2Ugd2UgZ2V0IHJpZCBvZiB1c2VUcmFuc2l0aW9uIGluIFJlbWl4IHYyXG4gICAgX2V4dGVuZHMoe1xuICAgICAgX2lzUmVkaXJlY3Q6IHRydWVcbiAgICB9LCBpc0ZldGNoQWN0aW9uUmVkaXJlY3QgPyB7XG4gICAgICBfaXNGZXRjaEFjdGlvblJlZGlyZWN0OiB0cnVlXG4gICAgfSA6IHt9KSk7XG4gICAgaW52YXJpYW50KHJlZGlyZWN0TG9jYXRpb24sIFwiRXhwZWN0ZWQgYSBsb2NhdGlvbiBvbiB0aGUgcmVkaXJlY3QgbmF2aWdhdGlvblwiKTsgLy8gQ2hlY2sgaWYgdGhpcyBhbiBhYnNvbHV0ZSBleHRlcm5hbCByZWRpcmVjdCB0aGF0IGdvZXMgdG8gYSBuZXcgb3JpZ2luXG5cbiAgICBpZiAoQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QocmVkaXJlY3QubG9jYXRpb24pICYmIGlzQnJvd3NlciAmJiB0eXBlb2YgKChfd2luZG93ID0gd2luZG93KSA9PSBudWxsID8gdm9pZCAwIDogX3dpbmRvdy5sb2NhdGlvbikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGxldCB1cmwgPSBpbml0Lmhpc3RvcnkuY3JlYXRlVVJMKHJlZGlyZWN0LmxvY2F0aW9uKTtcbiAgICAgIGxldCBpc0RpZmZlcmVudEJhc2VuYW1lID0gc3RyaXBCYXNlbmFtZSh1cmwucGF0aG5hbWUsIGluaXQuYmFzZW5hbWUgfHwgXCIvXCIpID09IG51bGw7XG5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luICE9PSB1cmwub3JpZ2luIHx8IGlzRGlmZmVyZW50QmFzZW5hbWUpIHtcbiAgICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdC5sb2NhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihyZWRpcmVjdC5sb2NhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSAvLyBUaGVyZSdzIG5vIG5lZWQgdG8gYWJvcnQgb24gcmVkaXJlY3RzLCBzaW5jZSB3ZSBkb24ndCBkZXRlY3QgdGhlXG4gICAgLy8gcmVkaXJlY3QgdW50aWwgdGhlIGFjdGlvbi9sb2FkZXJzIGhhdmUgc2V0dGxlZFxuXG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgIGxldCByZWRpcmVjdEhpc3RvcnlBY3Rpb24gPSByZXBsYWNlID09PSB0cnVlID8gQWN0aW9uLlJlcGxhY2UgOiBBY3Rpb24uUHVzaDsgLy8gVXNlIHRoZSBpbmNvbWluZyBzdWJtaXNzaW9uIGlmIHByb3ZpZGVkLCBmYWxsYmFjayBvbiB0aGUgYWN0aXZlIG9uZSBpblxuICAgIC8vIHN0YXRlLm5hdmlnYXRpb25cblxuICAgIGxldCB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbixcbiAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgZm9ybURhdGFcbiAgICB9ID0gc3RhdGUubmF2aWdhdGlvbjtcblxuICAgIGlmICghc3VibWlzc2lvbiAmJiBmb3JtTWV0aG9kICYmIGZvcm1BY3Rpb24gJiYgZm9ybURhdGEgJiYgZm9ybUVuY1R5cGUpIHtcbiAgICAgIHN1Ym1pc3Npb24gPSB7XG4gICAgICAgIGZvcm1NZXRob2QsXG4gICAgICAgIGZvcm1BY3Rpb24sXG4gICAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgICBmb3JtRGF0YVxuICAgICAgfTtcbiAgICB9IC8vIElmIHRoaXMgd2FzIGEgMzA3LzMwOCBzdWJtaXNzaW9uIHdlIHdhbnQgdG8gcHJlc2VydmUgdGhlIEhUVFAgbWV0aG9kIGFuZFxuICAgIC8vIHJlLXN1Ym1pdCB0aGUgR0VUL1BPU1QvUFVUL1BBVENIL0RFTEVURSBhcyBhIHN1Ym1pc3Npb24gbmF2aWdhdGlvbiB0byB0aGVcbiAgICAvLyByZWRpcmVjdGVkIGxvY2F0aW9uXG5cblxuICAgIGlmIChyZWRpcmVjdFByZXNlcnZlTWV0aG9kU3RhdHVzQ29kZXMuaGFzKHJlZGlyZWN0LnN0YXR1cykgJiYgc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihyZWRpcmVjdEhpc3RvcnlBY3Rpb24sIHJlZGlyZWN0TG9jYXRpb24sIHtcbiAgICAgICAgc3VibWlzc2lvbjogX2V4dGVuZHMoe30sIHN1Ym1pc3Npb24sIHtcbiAgICAgICAgICBmb3JtQWN0aW9uOiByZWRpcmVjdC5sb2NhdGlvblxuICAgICAgICB9KSxcbiAgICAgICAgLy8gUHJlc2VydmUgdGhpcyBmbGFnIGFjcm9zcyByZWRpcmVjdHNcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzRmV0Y2hBY3Rpb25SZWRpcmVjdCkge1xuICAgICAgLy8gRm9yIGEgZmV0Y2ggYWN0aW9uIHJlZGlyZWN0LCB3ZSBraWNrIG9mZiBhIG5ldyBsb2FkaW5nIG5hdmlnYXRpb25cbiAgICAgIC8vIHdpdGhvdXQgdGhlIGZldGNoZXIgc3VibWlzc2lvbiwgYnV0IHdlIHNlbmQgaXQgYWxvbmcgZm9yIHNob3VsZFJldmFsaWRhdGVcbiAgICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihyZWRpcmVjdEhpc3RvcnlBY3Rpb24sIHJlZGlyZWN0TG9jYXRpb24sIHtcbiAgICAgICAgb3ZlcnJpZGVOYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICAgIGxvY2F0aW9uOiByZWRpcmVjdExvY2F0aW9uLFxuICAgICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIGZldGNoZXJTdWJtaXNzaW9uOiBzdWJtaXNzaW9uLFxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGlzIGZsYWcgYWNyb3NzIHJlZGlyZWN0c1xuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHdlIGtpY2sgb2ZmIGEgbmV3IGxvYWRpbmcgbmF2aWdhdGlvbiwgcHJlc2VydmluZyB0aGVcbiAgICAgIC8vIHN1Ym1pc3Npb24gaW5mbyBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoaXMgbmF2aWdhdGlvblxuICAgICAgYXdhaXQgc3RhcnROYXZpZ2F0aW9uKHJlZGlyZWN0SGlzdG9yeUFjdGlvbiwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBvdmVycmlkZU5hdmlnYXRpb246IHtcbiAgICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgbG9jYXRpb246IHJlZGlyZWN0TG9jYXRpb24sXG4gICAgICAgICAgZm9ybU1ldGhvZDogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybU1ldGhvZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtQWN0aW9uOiBzdWJtaXNzaW9uID8gc3VibWlzc2lvbi5mb3JtQWN0aW9uIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1FbmNUeXBlOiBzdWJtaXNzaW9uID8gc3VibWlzc2lvbi5mb3JtRW5jVHlwZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRGF0YTogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybURhdGEgOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUHJlc2VydmUgdGhpcyBmbGFnIGFjcm9zcyByZWRpcmVjdHNcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoY3VycmVudE1hdGNoZXMsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGZldGNoZXJzVG9Mb2FkLCByZXF1ZXN0KSB7XG4gICAgLy8gQ2FsbCBhbGwgbmF2aWdhdGlvbiBsb2FkZXJzIGFuZCByZXZhbGlkYXRpbmcgZmV0Y2hlciBsb2FkZXJzIGluIHBhcmFsbGVsLFxuICAgIC8vIHRoZW4gc2xpY2Ugb2ZmIHRoZSByZXN1bHRzIGludG8gc2VwYXJhdGUgYXJyYXlzIHNvIHdlIGNhbiBoYW5kbGUgdGhlbVxuICAgIC8vIGFjY29yZGluZ2x5XG4gICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbLi4ubWF0Y2hlc1RvTG9hZC5tYXAobWF0Y2ggPT4gY2FsbExvYWRlck9yQWN0aW9uKFwibG9hZGVyXCIsIHJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgcm91dGVyLmJhc2VuYW1lKSksIC4uLmZldGNoZXJzVG9Mb2FkLm1hcChmID0+IHtcbiAgICAgIGlmIChmLm1hdGNoZXMgJiYgZi5tYXRjaCkge1xuICAgICAgICByZXR1cm4gY2FsbExvYWRlck9yQWN0aW9uKFwibG9hZGVyXCIsIGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgZi5wYXRoLCByZXF1ZXN0LnNpZ25hbCksIGYubWF0Y2gsIGYubWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIHJvdXRlci5iYXNlbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZXJyb3IgPSB7XG4gICAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBmLnBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfSldKTtcbiAgICBsZXQgbG9hZGVyUmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF0Y2hlc1RvTG9hZC5sZW5ndGgpO1xuICAgIGxldCBmZXRjaGVyUmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UobWF0Y2hlc1RvTG9hZC5sZW5ndGgpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFtyZXNvbHZlRGVmZXJyZWRSZXN1bHRzKGN1cnJlbnRNYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBsb2FkZXJSZXN1bHRzLCByZXF1ZXN0LnNpZ25hbCwgZmFsc2UsIHN0YXRlLmxvYWRlckRhdGEpLCByZXNvbHZlRGVmZXJyZWRSZXN1bHRzKGN1cnJlbnRNYXRjaGVzLCBmZXRjaGVyc1RvTG9hZC5tYXAoZiA9PiBmLm1hdGNoKSwgZmV0Y2hlclJlc3VsdHMsIHJlcXVlc3Quc2lnbmFsLCB0cnVlKV0pO1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzLFxuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIGZldGNoZXJSZXN1bHRzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVycnVwdEFjdGl2ZUxvYWRzKCkge1xuICAgIC8vIEV2ZXJ5IGludGVycnVwdGlvbiB0cmlnZ2VycyBhIHJldmFsaWRhdGlvblxuICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSB0cnVlOyAvLyBDYW5jZWwgcGVuZGluZyByb3V0ZS1sZXZlbCBkZWZlcnJlZHMgYW5kIG1hcmsgY2FuY2VsbGVkIHJvdXRlcyBmb3JcbiAgICAvLyByZXZhbGlkYXRpb25cblxuICAgIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLnB1c2goLi4uY2FuY2VsQWN0aXZlRGVmZXJyZWRzKCkpOyAvLyBBYm9ydCBpbi1mbGlnaHQgZmV0Y2hlciBsb2Fkc1xuXG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhrZXkpKSB7XG4gICAgICAgIGNhbmNlbGxlZEZldGNoZXJMb2Fkcy5wdXNoKGtleSk7XG4gICAgICAgIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZXJyb3IpIHtcbiAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgcm91dGVJZCk7XG4gICAgZGVsZXRlRmV0Y2hlcihrZXkpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IGVycm9yXG4gICAgICB9LFxuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVGZXRjaGVyKGtleSkge1xuICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhrZXkpKSBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuICAgIGZldGNoUmVsb2FkSWRzLmRlbGV0ZShrZXkpO1xuICAgIGZldGNoUmVkaXJlY3RJZHMuZGVsZXRlKGtleSk7XG4gICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBhYm9ydEZldGNoZXIoa2V5KSB7XG4gICAgbGV0IGNvbnRyb2xsZXIgPSBmZXRjaENvbnRyb2xsZXJzLmdldChrZXkpO1xuICAgIGludmFyaWFudChjb250cm9sbGVyLCBcIkV4cGVjdGVkIGZldGNoIGNvbnRyb2xsZXI6IFwiICsga2V5KTtcbiAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtGZXRjaGVyc0RvbmUoa2V5cykge1xuICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IGdldEZldGNoZXIoa2V5KTtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgICAgICBkYXRhOiBmZXRjaGVyLmRhdGEsXG4gICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrRmV0Y2hSZWRpcmVjdHNEb25lKCkge1xuICAgIGxldCBkb25lS2V5cyA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IG9mIGZldGNoUmVkaXJlY3RJZHMpIHtcbiAgICAgIGxldCBmZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7XG4gICAgICBpbnZhcmlhbnQoZmV0Y2hlciwgXCJFeHBlY3RlZCBmZXRjaGVyOiBcIiArIGtleSk7XG5cbiAgICAgIGlmIChmZXRjaGVyLnN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgICBmZXRjaFJlZGlyZWN0SWRzLmRlbGV0ZShrZXkpO1xuICAgICAgICBkb25lS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFya0ZldGNoZXJzRG9uZShkb25lS2V5cyk7XG4gIH1cblxuICBmdW5jdGlvbiBhYm9ydFN0YWxlRmV0Y2hMb2FkcyhsYW5kZWRJZCkge1xuICAgIGxldCB5ZWV0ZWRLZXlzID0gW107XG5cbiAgICBmb3IgKGxldCBba2V5LCBpZF0gb2YgZmV0Y2hSZWxvYWRJZHMpIHtcbiAgICAgIGlmIChpZCA8IGxhbmRlZElkKSB7XG4gICAgICAgIGxldCBmZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7XG4gICAgICAgIGludmFyaWFudChmZXRjaGVyLCBcIkV4cGVjdGVkIGZldGNoZXI6IFwiICsga2V5KTtcblxuICAgICAgICBpZiAoZmV0Y2hlci5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgICBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICAgICAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICB5ZWV0ZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtGZXRjaGVyc0RvbmUoeWVldGVkS2V5cyk7XG4gICAgcmV0dXJuIHllZXRlZEtleXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJsb2NrZXIoa2V5LCBmbikge1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGtleSkgfHwgSURMRV9CTE9DS0VSO1xuXG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuZ2V0KGtleSkgIT09IGZuKSB7XG4gICAgICBibG9ja2VyRnVuY3Rpb25zLnNldChrZXksIGZuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2tlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUJsb2NrZXIoa2V5KSB7XG4gICAgc3RhdGUuYmxvY2tlcnMuZGVsZXRlKGtleSk7XG4gICAgYmxvY2tlckZ1bmN0aW9ucy5kZWxldGUoa2V5KTtcbiAgfSAvLyBVdGlsaXR5IGZ1bmN0aW9uIHRvIHVwZGF0ZSBibG9ja2VycywgZW5zdXJpbmcgdmFsaWQgc3RhdGUgdHJhbnNpdGlvbnNcblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXIoa2V5LCBuZXdCbG9ja2VyKSB7XG4gICAgbGV0IGJsb2NrZXIgPSBzdGF0ZS5ibG9ja2Vycy5nZXQoa2V5KSB8fCBJRExFX0JMT0NLRVI7IC8vIFBvb3IgbWFucyBzdGF0ZSBtYWNoaW5lIDopXG4gICAgLy8gaHR0cHM6Ly9tZXJtYWlkLmxpdmUvZWRpdCNwYWtvOmVOcVZrYzlPd3pBTXhsOGw4bm5qQVlyRXRESU9IRUJJZ3d2S0pUUmVHeTNfbERwSXFPMjdrNmF3TUcwWGNyTGxuejg3bndkb25FU29nS1hYQnVFNzlycTc1WFpPMy15SGRzMFJKVnV2NzBZclBsVXJDRWUySGZyT1JTM3J1YnFaZnVodHBnNUM5d2s1dFo0VktjUlVxODhxOVo4UlMwLTQ4Y0UxaUhKa0wwdWdiSHVGTHVzOUw2c3BaeThuWDlNUDJDTmRvbVZhcG9zcXUzZkdheVQ4VDgtakpRd2hlcG9fVXRwZ0JRYURFVW9tMDRkWmhBTjFhSkJEbFVLSkJ4RTFjZUIyU21qME1sbi1JQlc1QUZVMmR3VWlrdHRfMlFhcTJkQmZhS2RFdXA4NVVWN1lkLWRLamxua2FibDJQdnIwRFRrVHJlTVxuXG4gICAgaW52YXJpYW50KGJsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiB8fCBibG9ja2VyLnN0YXRlID09PSBcInByb2NlZWRpbmdcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiLCBcIkludmFsaWQgYmxvY2tlciBzdGF0ZSB0cmFuc2l0aW9uOiBcIiArIGJsb2NrZXIuc3RhdGUgKyBcIiAtPiBcIiArIG5ld0Jsb2NrZXIuc3RhdGUpO1xuICAgIHN0YXRlLmJsb2NrZXJzLnNldChrZXksIG5ld0Jsb2NrZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKF9yZWYyKSB7XG4gICAgbGV0IHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9ID0gX3JlZjI7XG5cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBXZSBvbnkgc3VwcG9ydCBhIHNpbmdsZSBhY3RpdmUgYmxvY2tlciBhdCB0aGUgbW9tZW50IHNpbmNlIHdlIGRvbid0IGhhdmVcbiAgICAvLyBhbnkgY29tcGVsbGluZyB1c2UgY2FzZXMgZm9yIG11bHRpLWJsb2NrZXIgeWV0XG5cblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb25zLnNpemUgPiAxKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIkEgcm91dGVyIG9ubHkgc3VwcG9ydHMgb25lIGJsb2NrZXIgYXQgYSB0aW1lXCIpO1xuICAgIH1cblxuICAgIGxldCBlbnRyaWVzID0gQXJyYXkuZnJvbShibG9ja2VyRnVuY3Rpb25zLmVudHJpZXMoKSk7XG4gICAgbGV0IFtibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb25dID0gZW50cmllc1tlbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGJsb2NrZXJLZXkpO1xuXG4gICAgaWYgKGJsb2NrZXIgJiYgYmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIpIHtcbiAgICAgIC8vIElmIHRoZSBibG9ja2VyIGlzIGN1cnJlbnRseSBwcm9jZWVkaW5nLCB3ZSBkb24ndCBuZWVkIHRvIHJlLWNoZWNrXG4gICAgICAvLyBpdCBhbmQgY2FuIGxldCB0aGlzIG5hdmlnYXRpb24gY29udGludWVcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEF0IHRoaXMgcG9pbnQsIHdlIGtub3cgd2UncmUgdW5ibG9ja2VkL2Jsb2NrZWQgc28gd2UgbmVlZCB0byBjaGVjayB0aGVcbiAgICAvLyB1c2VyLXByb3ZpZGVkIGJsb2NrZXIgZnVuY3Rpb25cblxuXG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbih7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSkpIHtcbiAgICAgIHJldHVybiBibG9ja2VyS2V5O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbEFjdGl2ZURlZmVycmVkcyhwcmVkaWNhdGUpIHtcbiAgICBsZXQgY2FuY2VsbGVkUm91dGVJZHMgPSBbXTtcbiAgICBhY3RpdmVEZWZlcnJlZHMuZm9yRWFjaCgoZGZkLCByb3V0ZUlkKSA9PiB7XG4gICAgICBpZiAoIXByZWRpY2F0ZSB8fCBwcmVkaWNhdGUocm91dGVJZCkpIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBkZWZlcnJlZCAtIGJ1dCBkbyBub3QgcmVtb3ZlIGZyb20gYWN0aXZlRGVmZXJyZWRzIGhlcmUgLVxuICAgICAgICAvLyB3ZSByZWx5IG9uIHRoZSBzdWJzY3JpYmVycyB0byBkbyB0aGF0IHNvIG91ciB0ZXN0cyBjYW4gYXNzZXJ0IHByb3BlclxuICAgICAgICAvLyBjbGVhbnVwIHZpYSBfaW50ZXJuYWxBY3RpdmVEZWZlcnJlZHNcbiAgICAgICAgZGZkLmNhbmNlbCgpO1xuICAgICAgICBjYW5jZWxsZWRSb3V0ZUlkcy5wdXNoKHJvdXRlSWQpO1xuICAgICAgICBhY3RpdmVEZWZlcnJlZHMuZGVsZXRlKHJvdXRlSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjYW5jZWxsZWRSb3V0ZUlkcztcbiAgfSAvLyBPcHQgaW4gdG8gY2FwdHVyaW5nIGFuZCByZXBvcnRpbmcgc2Nyb2xsIHBvc2l0aW9ucyBkdXJpbmcgbmF2aWdhdGlvbnMsXG4gIC8vIHVzZWQgYnkgdGhlIDxTY3JvbGxSZXN0b3JhdGlvbj4gY29tcG9uZW50XG5cblxuICBmdW5jdGlvbiBlbmFibGVTY3JvbGxSZXN0b3JhdGlvbihwb3NpdGlvbnMsIGdldFBvc2l0aW9uLCBnZXRLZXkpIHtcbiAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IHBvc2l0aW9ucztcbiAgICBnZXRTY3JvbGxQb3NpdGlvbiA9IGdldFBvc2l0aW9uO1xuXG4gICAgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBnZXRLZXkgfHwgKGxvY2F0aW9uID0+IGxvY2F0aW9uLmtleSk7IC8vIFBlcmZvcm0gaW5pdGlhbCBoeWRyYXRpb24gc2Nyb2xsIHJlc3RvcmF0aW9uLCBzaW5jZSB3ZSBtaXNzIHRoZSBib2F0IG9uXG4gICAgLy8gdGhlIGluaXRpYWwgdXBkYXRlU3RhdGUoKSBiZWNhdXNlIHdlJ3ZlIG5vdCB5ZXQgcmVuZGVyZWQgPFNjcm9sbFJlc3RvcmF0aW9uLz5cbiAgICAvLyBhbmQgdGhlcmVmb3JlIGhhdmUgbm8gc2F2ZWRTY3JvbGxQb3NpdGlvbnMgYXZhaWxhYmxlXG5cblxuICAgIGlmICghaW5pdGlhbFNjcm9sbFJlc3RvcmVkICYmIHN0YXRlLm5hdmlnYXRpb24gPT09IElETEVfTkFWSUdBVElPTikge1xuICAgICAgaW5pdGlhbFNjcm9sbFJlc3RvcmVkID0gdHJ1ZTtcbiAgICAgIGxldCB5ID0gZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihzdGF0ZS5sb2NhdGlvbiwgc3RhdGUubWF0Y2hlcyk7XG5cbiAgICAgIGlmICh5ICE9IG51bGwpIHtcbiAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogeVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBudWxsO1xuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb24gPSBudWxsO1xuICAgICAgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBudWxsO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlU2Nyb2xsUG9zaXRpb24obG9jYXRpb24sIG1hdGNoZXMpIHtcbiAgICBpZiAoc2F2ZWRTY3JvbGxQb3NpdGlvbnMgJiYgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgJiYgZ2V0U2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgIGxldCB1c2VyTWF0Y2hlcyA9IG1hdGNoZXMubWFwKG0gPT4gY3JlYXRlVXNlTWF0Y2hlc01hdGNoKG0sIHN0YXRlLmxvYWRlckRhdGEpKTtcbiAgICAgIGxldCBrZXkgPSBnZXRTY3JvbGxSZXN0b3JhdGlvbktleShsb2NhdGlvbiwgdXNlck1hdGNoZXMpIHx8IGxvY2F0aW9uLmtleTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV0gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNhdmVkU2Nyb2xsUG9zaXRpb24obG9jYXRpb24sIG1hdGNoZXMpIHtcbiAgICBpZiAoc2F2ZWRTY3JvbGxQb3NpdGlvbnMgJiYgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgJiYgZ2V0U2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgIGxldCB1c2VyTWF0Y2hlcyA9IG1hdGNoZXMubWFwKG0gPT4gY3JlYXRlVXNlTWF0Y2hlc01hdGNoKG0sIHN0YXRlLmxvYWRlckRhdGEpKTtcbiAgICAgIGxldCBrZXkgPSBnZXRTY3JvbGxSZXN0b3JhdGlvbktleShsb2NhdGlvbiwgdXNlck1hdGNoZXMpIHx8IGxvY2F0aW9uLmtleTtcbiAgICAgIGxldCB5ID0gc2F2ZWRTY3JvbGxQb3NpdGlvbnNba2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB5ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiB5O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gX2ludGVybmFsU2V0Um91dGVzKG5ld1JvdXRlcykge1xuICAgIGluRmxpZ2h0RGF0YVJvdXRlcyA9IG5ld1JvdXRlcztcbiAgfVxuXG4gIHJvdXRlciA9IHtcbiAgICBnZXQgYmFzZW5hbWUoKSB7XG4gICAgICByZXR1cm4gaW5pdC5iYXNlbmFtZTtcbiAgICB9LFxuXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG5cbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgcmV0dXJuIGRhdGFSb3V0ZXM7XG4gICAgfSxcblxuICAgIGluaXRpYWxpemUsXG4gICAgc3Vic2NyaWJlLFxuICAgIGVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uLFxuICAgIG5hdmlnYXRlLFxuICAgIGZldGNoLFxuICAgIHJldmFsaWRhdGUsXG4gICAgLy8gUGFzc3Rocm91Z2ggdG8gaGlzdG9yeS1hd2FyZSBjcmVhdGVIcmVmIHVzZWQgYnkgdXNlSHJlZiBzbyB3ZSBnZXQgcHJvcGVyXG4gICAgLy8gaGFzaC1hd2FyZSBVUkxzIGluIERPTSBwYXRoc1xuICAgIGNyZWF0ZUhyZWY6IHRvID0+IGluaXQuaGlzdG9yeS5jcmVhdGVIcmVmKHRvKSxcbiAgICBlbmNvZGVMb2NhdGlvbjogdG8gPT4gaW5pdC5oaXN0b3J5LmVuY29kZUxvY2F0aW9uKHRvKSxcbiAgICBnZXRGZXRjaGVyLFxuICAgIGRlbGV0ZUZldGNoZXIsXG4gICAgZGlzcG9zZSxcbiAgICBnZXRCbG9ja2VyLFxuICAgIGRlbGV0ZUJsb2NrZXIsXG4gICAgX2ludGVybmFsRmV0Y2hDb250cm9sbGVyczogZmV0Y2hDb250cm9sbGVycyxcbiAgICBfaW50ZXJuYWxBY3RpdmVEZWZlcnJlZHM6IGFjdGl2ZURlZmVycmVkcyxcbiAgICAvLyBUT0RPOiBSZW1vdmUgc2V0Um91dGVzLCBpdCdzIHRlbXBvcmFyeSB0byBhdm9pZCBkZWFsaW5nIHdpdGhcbiAgICAvLyB1cGRhdGluZyB0aGUgdHJlZSB3aGlsZSB2YWxpZGF0aW5nIHRoZSB1cGRhdGUgYWxnb3JpdGhtLlxuICAgIF9pbnRlcm5hbFNldFJvdXRlc1xuICB9O1xuICByZXR1cm4gcm91dGVyO1xufSAvLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gY3JlYXRlU3RhdGljSGFuZGxlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgVU5TQUZFX0RFRkVSUkVEX1NZTUJPTCA9IFN5bWJvbChcImRlZmVycmVkXCIpO1xuZnVuY3Rpb24gY3JlYXRlU3RhdGljSGFuZGxlcihyb3V0ZXMsIG9wdHMpIHtcbiAgaW52YXJpYW50KHJvdXRlcy5sZW5ndGggPiAwLCBcIllvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgcm91dGVzIGFycmF5IHRvIGNyZWF0ZVN0YXRpY0hhbmRsZXJcIik7XG4gIGxldCBtYW5pZmVzdCA9IHt9O1xuICBsZXQgZGV0ZWN0RXJyb3JCb3VuZGFyeSA9IChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmRldGVjdEVycm9yQm91bmRhcnkpIHx8IGRlZmF1bHREZXRlY3RFcnJvckJvdW5kYXJ5O1xuICBsZXQgZGF0YVJvdXRlcyA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGVzLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCB1bmRlZmluZWQsIG1hbmlmZXN0KTtcbiAgbGV0IGJhc2VuYW1lID0gKG9wdHMgPyBvcHRzLmJhc2VuYW1lIDogbnVsbCkgfHwgXCIvXCI7XG4gIC8qKlxuICAgKiBUaGUgcXVlcnkoKSBtZXRob2QgaXMgaW50ZW5kZWQgZm9yIGRvY3VtZW50IHJlcXVlc3RzLCBpbiB3aGljaCB3ZSB3YW50IHRvXG4gICAqIGNhbGwgYW4gb3B0aW9uYWwgYWN0aW9uIGFuZCBwb3RlbnRpYWxseSBtdWx0aXBsZSBsb2FkZXJzIGZvciBhbGwgbmVzdGVkXG4gICAqIHJvdXRlcy4gIEl0IHJldHVybnMgYSBTdGF0aWNIYW5kbGVyQ29udGV4dCBvYmplY3QsIHdoaWNoIGlzIHZlcnkgc2ltaWxhclxuICAgKiB0byB0aGUgcm91dGVyIHN0YXRlIChsb2NhdGlvbiwgbG9hZGVyRGF0YSwgYWN0aW9uRGF0YSwgZXJyb3JzLCBldGMuKSBhbmRcbiAgICogYWxzbyBhZGRzIFNTUi1zcGVjaWZpYyBpbmZvcm1hdGlvbiBzdWNoIGFzIHRoZSBzdGF0dXNDb2RlIGFuZCBoZWFkZXJzXG4gICAqIGZyb20gYWN0aW9uL2xvYWRlcnMgUmVzcG9uc2VzLlxuICAgKlxuICAgKiBJdCBfc2hvdWxkXyBuZXZlciB0aHJvdyBhbmQgc2hvdWxkIHJlcG9ydCBhbGwgZXJyb3JzIHRocm91Z2ggdGhlXG4gICAqIHJldHVybmVkIGNvbnRleHQuZXJyb3JzIG9iamVjdCwgcHJvcGVybHkgYXNzb2NpYXRpbmcgZXJyb3JzIHRvIHRoZWlyIGVycm9yXG4gICAqIGJvdW5kYXJ5LiAgQWRkaXRpb25hbGx5LCBpdCB0cmFja3MgX2RlZXBlc3RSZW5kZXJlZEJvdW5kYXJ5SWQgd2hpY2ggY2FuIGJlXG4gICAqIHVzZWQgdG8gZW11bGF0ZSBSZWFjdCBlcnJvciBib3VuZGFyaWVzIGR1cmluZyBTU3IgYnkgcGVyZm9ybWluZyBhIHNlY29uZFxuICAgKiBwYXNzIG9ubHkgZG93biB0byB0aGUgYm91bmRhcnlJZC5cbiAgICpcbiAgICogVGhlIG9uZSBleGNlcHRpb24gd2hlcmUgd2UgZG8gbm90IHJldHVybiBhIFN0YXRpY0hhbmRsZXJDb250ZXh0IGlzIHdoZW4gYVxuICAgKiByZWRpcmVjdCByZXNwb25zZSBpcyByZXR1cm5lZCBvciB0aHJvd24gZnJvbSBhbnkgYWN0aW9uL2xvYWRlci4gIFdlXG4gICAqIHByb3BhZ2F0ZSB0aGF0IG91dCBhbmQgcmV0dXJuIHRoZSByYXcgUmVzcG9uc2Ugc28gdGhlIEhUVFAgc2VydmVyIGNhblxuICAgKiByZXR1cm4gaXQgZGlyZWN0bHkuXG4gICAqL1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHJlcXVlc3QsIF90ZW1wMikge1xuICAgIGxldCB7XG4gICAgICByZXF1ZXN0Q29udGV4dFxuICAgIH0gPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyO1xuICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBsZXQgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oXCJcIiwgY3JlYXRlUGF0aCh1cmwpLCBudWxsLCBcImRlZmF1bHRcIik7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBsb2NhdGlvbiwgYmFzZW5hbWUpOyAvLyBTU1Igc3VwcG9ydHMgSEVBRCByZXF1ZXN0cyB3aGlsZSBTUEEgZG9lc24ndFxuXG4gICAgaWYgKCFpc1ZhbGlkTWV0aG9kKG1ldGhvZCkgJiYgbWV0aG9kICE9PSBcIkhFQURcIikge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kXG4gICAgICB9KTtcbiAgICAgIGxldCB7XG4gICAgICAgIG1hdGNoZXM6IG1ldGhvZE5vdEFsbG93ZWRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXM6IG1ldGhvZE5vdEFsbG93ZWRNYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzQ29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgICAgbGV0IHtcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1c0NvZGU6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5SW1wbChyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQpO1xuXG4gICAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IC8vIFdoZW4gcmV0dXJuaW5nIFN0YXRpY0hhbmRsZXJDb250ZXh0LCB3ZSBwYXRjaCBiYWNrIGluIHRoZSBsb2NhdGlvbiBoZXJlXG4gICAgLy8gc2luY2Ugd2UgbmVlZCBpdCBmb3IgUmVhY3QgQ29udGV4dC4gIEJ1dCB0aGlzIGhlbHBzIGtlZXAgb3VyIHN1Ym1pdCBhbmRcbiAgICAvLyBsb2FkUm91dGVEYXRhIG9wZXJhdGluZyBvbiBhIFJlcXVlc3QgaW5zdGVhZCBvZiBhIExvY2F0aW9uXG5cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGJhc2VuYW1lXG4gICAgfSwgcmVzdWx0KTtcbiAgfVxuICAvKipcbiAgICogVGhlIHF1ZXJ5Um91dGUoKSBtZXRob2QgaXMgaW50ZW5kZWQgZm9yIHRhcmdldGVkIHJvdXRlIHJlcXVlc3RzLCBlaXRoZXJcbiAgICogZm9yIGZldGNoID9fZGF0YSByZXF1ZXN0cyBvciByZXNvdXJjZSByb3V0ZSByZXF1ZXN0cy4gIEluIHRoaXMgY2FzZSwgd2VcbiAgICogYXJlIG9ubHkgZXZlciBjYWxsaW5nIGEgc2luZ2xlIGFjdGlvbiBvciBsb2FkZXIsIGFuZCB3ZSBhcmUgcmV0dXJuaW5nIHRoZVxuICAgKiByZXR1cm5lZCB2YWx1ZSBkaXJlY3RseS4gIEluIG1vc3QgY2FzZXMsIHRoaXMgd2lsbCBiZSBhIFJlc3BvbnNlIHJldHVybmVkXG4gICAqIGZyb20gdGhlIGFjdGlvbi9sb2FkZXIsIGJ1dCBpdCBtYXkgYmUgYSBwcmltaXRpdmUgb3Igb3RoZXIgdmFsdWUgYXMgd2VsbCAtXG4gICAqIGFuZCBpbiBzdWNoIGNhc2VzIHRoZSBjYWxsaW5nIGNvbnRleHQgc2hvdWxkIGhhbmRsZSB0aGF0IGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBXZSBkbyByZXNwZWN0IHRoZSB0aHJvdy9yZXR1cm4gZGlmZmVyZW50aWF0aW9uLCBzbyBpZiBhbiBhY3Rpb24vbG9hZGVyXG4gICAqIHRocm93cywgdGhlbiB0aGlzIG1ldGhvZCB3aWxsIHRocm93IHRoZSB2YWx1ZS4gIFRoaXMgaXMgaW1wb3J0YW50IHNvIHdlXG4gICAqIGNhbiBkbyBwcm9wZXIgYm91bmRhcnkgaWRlbnRpZmljYXRpb24gaW4gUmVtaXggd2hlcmUgYSB0aHJvd24gUmVzcG9uc2VcbiAgICogbXVzdCBnbyB0byB0aGUgQ2F0Y2ggQm91bmRhcnkgYnV0IGEgcmV0dXJuZWQgUmVzcG9uc2UgaXMgaGFwcHktcGF0aC5cbiAgICpcbiAgICogT25lIHRoaW5nIHRvIG5vdGUgaXMgdGhhdCBhbnkgUm91dGVyLWluaXRpYXRlZCBFcnJvcnMgdGhhdCBtYWtlIHNlbnNlXG4gICAqIHRvIGFzc29jaWF0ZSB3aXRoIGEgc3RhdHVzIGNvZGUgd2lsbCBiZSB0aHJvd24gYXMgYW4gRXJyb3JSZXNwb25zZVxuICAgKiBpbnN0YW5jZSB3aGljaCBpbmNsdWRlIHRoZSByYXcgRXJyb3IsIHN1Y2ggdGhhdCB0aGUgY2FsbGluZyBjb250ZXh0IGNhblxuICAgKiBzZXJpYWxpemUgdGhlIGVycm9yIGFzIHRoZXkgc2VlIGZpdCB3aGlsZSBpbmNsdWRpbmcgdGhlIHByb3BlciByZXNwb25zZVxuICAgKiBjb2RlLiAgRXhhbXBsZXMgaGVyZSBhcmUgNDA0IGFuZCA0MDUgZXJyb3JzIHRoYXQgb2NjdXIgcHJpb3IgdG8gcmVhY2hpbmdcbiAgICogYW55IHVzZXItZGVmaW5lZCBsb2FkZXJzLlxuICAgKi9cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Um91dGUocmVxdWVzdCwgX3RlbXAzKSB7XG4gICAgbGV0IHtcbiAgICAgIHJvdXRlSWQsXG4gICAgICByZXF1ZXN0Q29udGV4dFxuICAgIH0gPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzO1xuICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBsZXQgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oXCJcIiwgY3JlYXRlUGF0aCh1cmwpLCBudWxsLCBcImRlZmF1bHRcIik7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBsb2NhdGlvbiwgYmFzZW5hbWUpOyAvLyBTU1Igc3VwcG9ydHMgSEVBRCByZXF1ZXN0cyB3aGlsZSBTUEEgZG9lc24ndFxuXG4gICAgaWYgKCFpc1ZhbGlkTWV0aG9kKG1ldGhvZCkgJiYgbWV0aG9kICE9PSBcIkhFQURcIiAmJiBtZXRob2QgIT09IFwiT1BUSU9OU1wiKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2RcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoID0gcm91dGVJZCA/IG1hdGNoZXMuZmluZChtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpIDogZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pO1xuXG4gICAgaWYgKHJvdXRlSWQgJiYgIW1hdGNoKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMywge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHJvdXRlSWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoKSB7XG4gICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciBoaXQgSSBkb24ndCB0aGluaz9cbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5SW1wbChyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIG1hdGNoKTtcblxuICAgIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbGV0IGVycm9yID0gcmVzdWx0LmVycm9ycyA/IE9iamVjdC52YWx1ZXMocmVzdWx0LmVycm9ycylbMF0gOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSWYgd2UgZ290IGJhY2sgcmVzdWx0LmVycm9ycywgdGhhdCBtZWFucyB0aGUgbG9hZGVyL2FjdGlvbiB0aHJld1xuICAgICAgLy8gX3NvbWV0aGluZ18gdGhhdCB3YXNuJ3QgYSBSZXNwb25zZSwgYnV0IGl0J3Mgbm90IGd1YXJhbnRlZWQvcmVxdWlyZWRcbiAgICAgIC8vIHRvIGJlIGFuIGBpbnN0YW5jZW9mIEVycm9yYCBlaXRoZXIsIHNvIHdlIGhhdmUgdG8gdXNlIHRocm93IGhlcmUgdG9cbiAgICAgIC8vIHByZXNlcnZlIHRoZSBcImVycm9yXCIgc3RhdGUgb3V0c2lkZSBvZiBxdWVyeUltcGwuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IC8vIFBpY2sgb2ZmIHRoZSByaWdodCBzdGF0ZSB2YWx1ZSB0byByZXR1cm5cblxuXG4gICAgaWYgKHJlc3VsdC5hY3Rpb25EYXRhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZXN1bHQuYWN0aW9uRGF0YSlbMF07XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5sb2FkZXJEYXRhKSB7XG4gICAgICB2YXIgX3Jlc3VsdCRhY3RpdmVEZWZlcnJlO1xuXG4gICAgICBsZXQgZGF0YSA9IE9iamVjdC52YWx1ZXMocmVzdWx0LmxvYWRlckRhdGEpWzBdO1xuXG4gICAgICBpZiAoKF9yZXN1bHQkYWN0aXZlRGVmZXJyZSA9IHJlc3VsdC5hY3RpdmVEZWZlcnJlZHMpICE9IG51bGwgJiYgX3Jlc3VsdCRhY3RpdmVEZWZlcnJlW21hdGNoLnJvdXRlLmlkXSkge1xuICAgICAgICBkYXRhW1VOU0FGRV9ERUZFUlJFRF9TWU1CT0xdID0gcmVzdWx0LmFjdGl2ZURlZmVycmVkc1ttYXRjaC5yb3V0ZS5pZF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoKSB7XG4gICAgaW52YXJpYW50KHJlcXVlc3Quc2lnbmFsLCBcInF1ZXJ5KCkvcXVlcnlSb3V0ZSgpIHJlcXVlc3RzIG11c3QgY29udGFpbiBhbiBBYm9ydENvbnRyb2xsZXIgc2lnbmFsXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChpc011dGF0aW9uTWV0aG9kKHJlcXVlc3QubWV0aG9kLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBzdWJtaXQocmVxdWVzdCwgbWF0Y2hlcywgcm91dGVNYXRjaCB8fCBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbiksIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoICE9IG51bGwpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbG9hZFJvdXRlRGF0YShyZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCk7XG4gICAgICByZXR1cm4gaXNSZXNwb25zZShyZXN1bHQpID8gcmVzdWx0IDogX2V4dGVuZHMoe30sIHJlc3VsdCwge1xuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgdGhyZXcvcmV0dXJuZWQgYSBSZXNwb25zZSBpbiBjYWxsTG9hZGVyT3JBY3Rpb24sIHdlIHRocm93XG4gICAgICAvLyBpdCB0byBiYWlsIG91dCBhbmQgdGhlbiByZXR1cm4gb3IgdGhyb3cgaGVyZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSB1c2VyXG4gICAgICAvLyByZXR1cm5lZCBvciB0aHJld1xuICAgICAgaWYgKGlzUXVlcnlSb3V0ZVJlc3BvbnNlKGUpKSB7XG4gICAgICAgIGlmIChlLnR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IgJiYgIWlzUmVkaXJlY3RSZXNwb25zZShlLnJlc3BvbnNlKSkge1xuICAgICAgICAgIHRocm93IGUucmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZS5yZXNwb25zZTtcbiAgICAgIH0gLy8gUmVkaXJlY3RzIGFyZSBhbHdheXMgcmV0dXJuZWQgc2luY2UgdGhleSBkb24ndCBwcm9wYWdhdGUgdG8gY2F0Y2hcbiAgICAgIC8vIGJvdW5kYXJpZXNcblxuXG4gICAgICBpZiAoaXNSZWRpcmVjdFJlc3BvbnNlKGUpKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdChyZXF1ZXN0LCBtYXRjaGVzLCBhY3Rpb25NYXRjaCwgcmVxdWVzdENvbnRleHQsIGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghYWN0aW9uTWF0Y2gucm91dGUuYWN0aW9uICYmICFhY3Rpb25NYXRjaC5yb3V0ZS5sYXp5KSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICBwYXRobmFtZTogbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUsXG4gICAgICAgIHJvdXRlSWQ6IGFjdGlvbk1hdGNoLnJvdXRlLmlkXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJhY3Rpb25cIiwgcmVxdWVzdCwgYWN0aW9uTWF0Y2gsIG1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCBiYXNlbmFtZSwgdHJ1ZSwgaXNSb3V0ZVJlcXVlc3QsIHJlcXVlc3RDb250ZXh0KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgbGV0IG1ldGhvZCA9IGlzUm91dGVSZXF1ZXN0ID8gXCJxdWVyeVJvdXRlXCIgOiBcInF1ZXJ5XCI7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXRob2QgKyBcIigpIGNhbGwgYWJvcnRlZFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBVaGhoaCAtIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiwgd2Ugc2hvdWxkIGFsd2F5cyB0aHJvdyB0aGVzZSBmcm9tXG4gICAgICAvLyBjYWxsTG9hZGVyT3JBY3Rpb24sIGJ1dCB0aGUgdHlwZSBuYXJyb3dpbmcgaGVyZSBrZWVwcyBUUyBoYXBweSBhbmQgd2VcbiAgICAgIC8vIGNhbiBnZXQgYmFjayBvbiB0aGUgXCJ0aHJvdyBhbGwgcmVkaXJlY3QgcmVzcG9uc2VzXCIgdHJhaW4gaGVyZSBzaG91bGRcbiAgICAgIC8vIHRoaXMgZXZlciBoYXBwZW4gOi9cbiAgICAgIHRocm93IG5ldyBSZXNwb25zZShudWxsLCB7XG4gICAgICAgIHN0YXR1czogcmVzdWx0LnN0YXR1cyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIExvY2F0aW9uOiByZXN1bHQubG9jYXRpb25cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgdHlwZTogXCJkZWZlci1hY3Rpb25cIlxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgIC8vIE5vdGU6IFRoaXMgc2hvdWxkIG9ubHkgYmUgbm9uLVJlc3BvbnNlIHZhbHVlcyBpZiB3ZSBnZXQgaGVyZSwgc2luY2VcbiAgICAgIC8vIGlzUm91dGVSZXF1ZXN0IHNob3VsZCB0aHJvdyBhbnkgUmVzcG9uc2UgcmVjZWl2ZWQgaW4gY2FsbExvYWRlck9yQWN0aW9uXG4gICAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF0Y2hlczogW2FjdGlvbk1hdGNoXSxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IHtcbiAgICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZGF0YVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgIC8vIE5vdGU6IHN0YXR1c0NvZGUgKyBoZWFkZXJzIGFyZSB1bnVzZWQgaGVyZSBzaW5jZSBxdWVyeVJvdXRlIHdpbGxcbiAgICAgICAgLy8gcmV0dXJuIHRoZSByYXcgUmVzcG9uc2Ugb3IgdmFsdWVcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTdG9yZSBvZmYgdGhlIHBlbmRpbmcgZXJyb3IgLSB3ZSB1c2UgaXQgdG8gZGV0ZXJtaW5lIHdoaWNoIGxvYWRlcnNcbiAgICAgIC8vIHRvIGNhbGwgYW5kIHdpbGwgY29tbWl0IGl0IHdoZW4gd2UgY29tcGxldGUgdGhlIG5hdmlnYXRpb25cbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCBhY3Rpb25NYXRjaC5yb3V0ZS5pZCk7XG4gICAgICBsZXQgY29udGV4dCA9IGF3YWl0IGxvYWRSb3V0ZURhdGEocmVxdWVzdCwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIHVuZGVmaW5lZCwge1xuICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgfSk7IC8vIGFjdGlvbiBzdGF0dXMgY29kZXMgdGFrZSBwcmVjZWRlbmNlIG92ZXIgbG9hZGVyIHN0YXR1cyBjb2Rlc1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICAgICAgc3RhdHVzQ29kZTogaXNSb3V0ZUVycm9yUmVzcG9uc2UocmVzdWx0LmVycm9yKSA/IHJlc3VsdC5lcnJvci5zdGF0dXMgOiA1MDAsXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IF9leHRlbmRzKHt9LCByZXN1bHQuaGVhZGVycyA/IHtcbiAgICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuaGVhZGVyc1xuICAgICAgICB9IDoge30pXG4gICAgICB9KTtcbiAgICB9IC8vIENyZWF0ZSBhIEdFVCByZXF1ZXN0IGZvciB0aGUgbG9hZGVyc1xuXG5cbiAgICBsZXQgbG9hZGVyUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QudXJsLCB7XG4gICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMsXG4gICAgICByZWRpcmVjdDogcmVxdWVzdC5yZWRpcmVjdCxcbiAgICAgIHNpZ25hbDogcmVxdWVzdC5zaWduYWxcbiAgICB9KTtcbiAgICBsZXQgY29udGV4dCA9IGF3YWl0IGxvYWRSb3V0ZURhdGEobG9hZGVyUmVxdWVzdCwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dCwgcmVzdWx0LnN0YXR1c0NvZGUgPyB7XG4gICAgICBzdGF0dXNDb2RlOiByZXN1bHQuc3RhdHVzQ29kZVxuICAgIH0gOiB7fSwge1xuICAgICAgYWN0aW9uRGF0YToge1xuICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZGF0YVxuICAgICAgfSxcbiAgICAgIGFjdGlvbkhlYWRlcnM6IF9leHRlbmRzKHt9LCByZXN1bHQuaGVhZGVycyA/IHtcbiAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmhlYWRlcnNcbiAgICAgIH0gOiB7fSlcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRSb3V0ZURhdGEocmVxdWVzdCwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIHJvdXRlTWF0Y2gsIHBlbmRpbmdBY3Rpb25FcnJvcikge1xuICAgIGxldCBpc1JvdXRlUmVxdWVzdCA9IHJvdXRlTWF0Y2ggIT0gbnVsbDsgLy8gU2hvcnQgY2lyY3VpdCBpZiB3ZSBoYXZlIG5vIGxvYWRlcnMgdG8gcnVuIChxdWVyeVJvdXRlKCkpXG5cbiAgICBpZiAoaXNSb3V0ZVJlcXVlc3QgJiYgIShyb3V0ZU1hdGNoICE9IG51bGwgJiYgcm91dGVNYXRjaC5yb3V0ZS5sb2FkZXIpICYmICEocm91dGVNYXRjaCAhPSBudWxsICYmIHJvdXRlTWF0Y2gucm91dGUubGF6eSkpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZDogcm91dGVNYXRjaCA9PSBudWxsID8gdm9pZCAwIDogcm91dGVNYXRjaC5yb3V0ZS5pZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3RNYXRjaGVzID0gcm91dGVNYXRjaCA/IFtyb3V0ZU1hdGNoXSA6IGdldExvYWRlck1hdGNoZXNVbnRpbEJvdW5kYXJ5KG1hdGNoZXMsIE9iamVjdC5rZXlzKHBlbmRpbmdBY3Rpb25FcnJvciB8fCB7fSlbMF0pO1xuICAgIGxldCBtYXRjaGVzVG9Mb2FkID0gcmVxdWVzdE1hdGNoZXMuZmlsdGVyKG0gPT4gbS5yb3V0ZS5sb2FkZXIgfHwgbS5yb3V0ZS5sYXp5KTsgLy8gU2hvcnQgY2lyY3VpdCBpZiB3ZSBoYXZlIG5vIGxvYWRlcnMgdG8gcnVuIChxdWVyeSgpKVxuXG4gICAgaWYgKG1hdGNoZXNUb0xvYWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVzLFxuICAgICAgICAvLyBBZGQgYSBudWxsIGZvciBhbGwgbWF0Y2hlZCByb3V0ZXMgZm9yIHByb3BlciByZXZhbGlkYXRpb24gb24gdGhlIGNsaWVudFxuICAgICAgICBsb2FkZXJEYXRhOiBtYXRjaGVzLnJlZHVjZSgoYWNjLCBtKSA9PiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICAgIFttLnJvdXRlLmlkXTogbnVsbFxuICAgICAgICB9KSwge30pLFxuICAgICAgICBlcnJvcnM6IHBlbmRpbmdBY3Rpb25FcnJvciB8fCBudWxsLFxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbLi4ubWF0Y2hlc1RvTG9hZC5tYXAobWF0Y2ggPT4gY2FsbExvYWRlck9yQWN0aW9uKFwibG9hZGVyXCIsIHJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgYmFzZW5hbWUsIHRydWUsIGlzUm91dGVSZXF1ZXN0LCByZXF1ZXN0Q29udGV4dCkpXSk7XG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgbGV0IG1ldGhvZCA9IGlzUm91dGVSZXF1ZXN0ID8gXCJxdWVyeVJvdXRlXCIgOiBcInF1ZXJ5XCI7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgXCIoKSBjYWxsIGFib3J0ZWRcIik7XG4gICAgfSAvLyBQcm9jZXNzIGFuZCBjb21taXQgb3V0cHV0IGZyb20gbG9hZGVyc1xuXG5cbiAgICBsZXQgYWN0aXZlRGVmZXJyZWRzID0gbmV3IE1hcCgpO1xuICAgIGxldCBjb250ZXh0ID0gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nQWN0aW9uRXJyb3IsIGFjdGl2ZURlZmVycmVkcyk7IC8vIEFkZCBhIG51bGwgZm9yIGFueSBub24tbG9hZGVyIG1hdGNoZXMgZm9yIHByb3BlciByZXZhbGlkYXRpb24gb24gdGhlIGNsaWVudFxuXG4gICAgbGV0IGV4ZWN1dGVkTG9hZGVycyA9IG5ldyBTZXQobWF0Y2hlc1RvTG9hZC5tYXAobWF0Y2ggPT4gbWF0Y2gucm91dGUuaWQpKTtcbiAgICBtYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgaWYgKCFleGVjdXRlZExvYWRlcnMuaGFzKG1hdGNoLnJvdXRlLmlkKSkge1xuICAgICAgICBjb250ZXh0LmxvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICBhY3RpdmVEZWZlcnJlZHM6IGFjdGl2ZURlZmVycmVkcy5zaXplID4gMCA/IE9iamVjdC5mcm9tRW50cmllcyhhY3RpdmVEZWZlcnJlZHMuZW50cmllcygpKSA6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGF0YVJvdXRlcyxcbiAgICBxdWVyeSxcbiAgICBxdWVyeVJvdXRlXG4gIH07XG59IC8vI2VuZHJlZ2lvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBIZWxwZXJzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIEdpdmVuIGFuIGV4aXN0aW5nIFN0YXRpY0hhbmRsZXJDb250ZXh0IGFuZCBhbiBlcnJvciB0aHJvd24gYXQgcmVuZGVyIHRpbWUsXG4gKiBwcm92aWRlIGFuIHVwZGF0ZWQgU3RhdGljSGFuZGxlckNvbnRleHQgc3VpdGFibGUgZm9yIGEgc2Vjb25kIFNTUiByZW5kZXJcbiAqL1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNDb250ZXh0RnJvbUVycm9yKHJvdXRlcywgY29udGV4dCwgZXJyb3IpIHtcbiAgbGV0IG5ld0NvbnRleHQgPSBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgIHN0YXR1c0NvZGU6IDUwMCxcbiAgICBlcnJvcnM6IHtcbiAgICAgIFtjb250ZXh0Ll9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkIHx8IHJvdXRlc1swXS5pZF06IGVycm9yXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmV3Q29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNTdWJtaXNzaW9uTmF2aWdhdGlvbihvcHRzKSB7XG4gIHJldHVybiBvcHRzICE9IG51bGwgJiYgXCJmb3JtRGF0YVwiIGluIG9wdHM7XG59IC8vIE5vcm1hbGl6ZSBuYXZpZ2F0aW9uIG9wdGlvbnMgYnkgY29udmVydGluZyBmb3JtTWV0aG9kPUdFVCBmb3JtRGF0YSBvYmplY3RzIHRvXG4vLyBVUkxTZWFyY2hQYXJhbXMgc28gdGhleSBiZWhhdmUgaWRlbnRpY2FsbHkgdG8gbGlua3Mgd2l0aCBxdWVyeSBwYXJhbXNcblxuXG5mdW5jdGlvbiBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnModG8sIGZ1dHVyZSwgb3B0cywgaXNGZXRjaGVyKSB7XG4gIGlmIChpc0ZldGNoZXIgPT09IHZvaWQgMCkge1xuICAgIGlzRmV0Y2hlciA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhdGggPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pOyAvLyBSZXR1cm4gbG9jYXRpb24gdmVyYmF0aW0gb24gbm9uLXN1Ym1pc3Npb24gbmF2aWdhdGlvbnNcblxuICBpZiAoIW9wdHMgfHwgIWlzU3VibWlzc2lvbk5hdmlnYXRpb24ob3B0cykpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aFxuICAgIH07XG4gIH1cblxuICBpZiAob3B0cy5mb3JtTWV0aG9kICYmICFpc1ZhbGlkTWV0aG9kKG9wdHMuZm9ybU1ldGhvZCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aCxcbiAgICAgIGVycm9yOiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2Q6IG9wdHMuZm9ybU1ldGhvZFxuICAgICAgfSlcbiAgICB9O1xuICB9IC8vIENyZWF0ZSBhIFN1Ym1pc3Npb24gb24gbm9uLUdFVCBuYXZpZ2F0aW9uc1xuXG5cbiAgbGV0IHN1Ym1pc3Npb247XG5cbiAgaWYgKG9wdHMuZm9ybURhdGEpIHtcbiAgICBsZXQgZm9ybU1ldGhvZCA9IG9wdHMuZm9ybU1ldGhvZCB8fCBcImdldFwiO1xuICAgIHN1Ym1pc3Npb24gPSB7XG4gICAgICBmb3JtTWV0aG9kOiBmdXR1cmUudjdfbm9ybWFsaXplRm9ybU1ldGhvZCA/IGZvcm1NZXRob2QudG9VcHBlckNhc2UoKSA6IGZvcm1NZXRob2QudG9Mb3dlckNhc2UoKSxcbiAgICAgIGZvcm1BY3Rpb246IHN0cmlwSGFzaEZyb21QYXRoKHBhdGgpLFxuICAgICAgZm9ybUVuY1R5cGU6IG9wdHMgJiYgb3B0cy5mb3JtRW5jVHlwZSB8fCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgZm9ybURhdGE6IG9wdHMuZm9ybURhdGFcbiAgICB9O1xuXG4gICAgaWYgKGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3VibWlzc2lvblxuICAgICAgfTtcbiAgICB9XG4gIH0gLy8gRmxhdHRlbiBzdWJtaXNzaW9uIG9udG8gVVJMU2VhcmNoUGFyYW1zIGZvciBHRVQgc3VibWlzc2lvbnNcblxuXG4gIGxldCBwYXJzZWRQYXRoID0gcGFyc2VQYXRoKHBhdGgpO1xuICBsZXQgc2VhcmNoUGFyYW1zID0gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMob3B0cy5mb3JtRGF0YSk7IC8vIFNpbmNlIGZldGNoZXIgR0VUIHN1Ym1pc3Npb25zIG9ubHkgcnVuIGEgc2luZ2xlIGxvYWRlciAoYXMgb3Bwb3NlZCB0b1xuICAvLyBuYXZpZ2F0aW9uIEdFVCBzdWJtaXNzaW9ucyB3aGljaCBydW4gYWxsIGxvYWRlcnMpLCB3ZSBuZWVkIHRvIHByZXNlcnZlXG4gIC8vIGFueSBpbmNvbWluZyA/aW5kZXggcGFyYW1zXG5cbiAgaWYgKGlzRmV0Y2hlciAmJiBwYXJzZWRQYXRoLnNlYXJjaCAmJiBoYXNOYWtlZEluZGV4UXVlcnkocGFyc2VkUGF0aC5zZWFyY2gpKSB7XG4gICAgc2VhcmNoUGFyYW1zLmFwcGVuZChcImluZGV4XCIsIFwiXCIpO1xuICB9XG5cbiAgcGFyc2VkUGF0aC5zZWFyY2ggPSBcIj9cIiArIHNlYXJjaFBhcmFtcztcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjcmVhdGVQYXRoKHBhcnNlZFBhdGgpLFxuICAgIHN1Ym1pc3Npb25cbiAgfTtcbn0gLy8gRmlsdGVyIG91dCBhbGwgcm91dGVzIGJlbG93IGFueSBjYXVnaHQgZXJyb3IgYXMgdGhleSBhcmVuJ3QgZ29pbmcgdG9cbi8vIHJlbmRlciBzbyB3ZSBkb24ndCBuZWVkIHRvIGxvYWQgdGhlbVxuXG5cbmZ1bmN0aW9uIGdldExvYWRlck1hdGNoZXNVbnRpbEJvdW5kYXJ5KG1hdGNoZXMsIGJvdW5kYXJ5SWQpIHtcbiAgbGV0IGJvdW5kYXJ5TWF0Y2hlcyA9IG1hdGNoZXM7XG5cbiAgaWYgKGJvdW5kYXJ5SWQpIHtcbiAgICBsZXQgaW5kZXggPSBtYXRjaGVzLmZpbmRJbmRleChtID0+IG0ucm91dGUuaWQgPT09IGJvdW5kYXJ5SWQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIGJvdW5kYXJ5TWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoMCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZGFyeU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoZXNUb0xvYWQoaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIHN1Ym1pc3Npb24sIGxvY2F0aW9uLCBpc1JldmFsaWRhdGlvblJlcXVpcmVkLCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcywgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLCBmZXRjaExvYWRNYXRjaGVzLCByb3V0ZXNUb1VzZSwgYmFzZW5hbWUsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpIHtcbiAgbGV0IGFjdGlvblJlc3VsdCA9IHBlbmRpbmdFcnJvciA/IE9iamVjdC52YWx1ZXMocGVuZGluZ0Vycm9yKVswXSA6IHBlbmRpbmdBY3Rpb25EYXRhID8gT2JqZWN0LnZhbHVlcyhwZW5kaW5nQWN0aW9uRGF0YSlbMF0gOiB1bmRlZmluZWQ7XG4gIGxldCBjdXJyZW50VXJsID0gaGlzdG9yeS5jcmVhdGVVUkwoc3RhdGUubG9jYXRpb24pO1xuICBsZXQgbmV4dFVybCA9IGhpc3RvcnkuY3JlYXRlVVJMKGxvY2F0aW9uKTtcbiAgbGV0IGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlID0gLy8gRm9yY2VkIHJldmFsaWRhdGlvbiBkdWUgdG8gc3VibWlzc2lvbiwgdXNlUmV2YWxpZGF0ZSwgb3IgWC1SZW1peC1SZXZhbGlkYXRlXG4gIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgfHwgLy8gQ2xpY2tlZCB0aGUgc2FtZSBsaW5rLCByZXN1Ym1pdHRlZCBhIEdFVCBmb3JtXG4gIGN1cnJlbnRVcmwudG9TdHJpbmcoKSA9PT0gbmV4dFVybC50b1N0cmluZygpIHx8IC8vIFNlYXJjaCBwYXJhbXMgYWZmZWN0IGFsbCBsb2FkZXJzXG4gIGN1cnJlbnRVcmwuc2VhcmNoICE9PSBuZXh0VXJsLnNlYXJjaDsgLy8gUGljayBuYXZpZ2F0aW9uIG1hdGNoZXMgdGhhdCBhcmUgbmV0LW5ldyBvciBxdWFsaWZ5IGZvciByZXZhbGlkYXRpb25cblxuICBsZXQgYm91bmRhcnlJZCA9IHBlbmRpbmdFcnJvciA/IE9iamVjdC5rZXlzKHBlbmRpbmdFcnJvcilbMF0gOiB1bmRlZmluZWQ7XG4gIGxldCBib3VuZGFyeU1hdGNoZXMgPSBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBib3VuZGFyeUlkKTtcbiAgbGV0IG5hdmlnYXRpb25NYXRjaGVzID0gYm91bmRhcnlNYXRjaGVzLmZpbHRlcigobWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgaWYgKG1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIC8vIFdlIGhhdmVuJ3QgbG9hZGVkIHRoaXMgcm91dGUgeWV0IHNvIHdlIGRvbid0IGtub3cgaWYgaXQncyBnb3QgYSBsb2FkZXIhXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2gucm91dGUubG9hZGVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIEFsd2F5cyBjYWxsIHRoZSBsb2FkZXIgb24gbmV3IHJvdXRlIGluc3RhbmNlcyBhbmQgcGVuZGluZyBkZWZlciBjYW5jZWxsYXRpb25zXG5cblxuICAgIGlmIChpc05ld0xvYWRlcihzdGF0ZS5sb2FkZXJEYXRhLCBzdGF0ZS5tYXRjaGVzW2luZGV4XSwgbWF0Y2gpIHx8IGNhbmNlbGxlZERlZmVycmVkUm91dGVzLnNvbWUoaWQgPT4gaWQgPT09IG1hdGNoLnJvdXRlLmlkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBUaGlzIGlzIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGZvciB3aGVuIHdlIHJldmFsaWRhdGUuICBJZiB0aGUgcm91dGVcbiAgICAvLyBwcm92aWRlcyBpdCdzIG93biBpbXBsZW1lbnRhdGlvbiwgdGhlbiB3ZSBnaXZlIHRoZW0gZnVsbCBjb250cm9sIGJ1dFxuICAgIC8vIHByb3ZpZGUgdGhpcyB2YWx1ZSBzbyB0aGV5IGNhbiBsZXZlcmFnZSBpdCBpZiBuZWVkZWQgYWZ0ZXIgdGhleSBjaGVja1xuICAgIC8vIHRoZWlyIG93biBzcGVjaWZpYyB1c2UgY2FzZXNcblxuXG4gICAgbGV0IGN1cnJlbnRSb3V0ZU1hdGNoID0gc3RhdGUubWF0Y2hlc1tpbmRleF07XG4gICAgbGV0IG5leHRSb3V0ZU1hdGNoID0gbWF0Y2g7XG4gICAgcmV0dXJuIHNob3VsZFJldmFsaWRhdGVMb2FkZXIobWF0Y2gsIF9leHRlbmRzKHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICBjdXJyZW50UGFyYW1zOiBjdXJyZW50Um91dGVNYXRjaC5wYXJhbXMsXG4gICAgICBuZXh0VXJsLFxuICAgICAgbmV4dFBhcmFtczogbmV4dFJvdXRlTWF0Y2gucGFyYW1zXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgYWN0aW9uUmVzdWx0LFxuICAgICAgZGVmYXVsdFNob3VsZFJldmFsaWRhdGU6IGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlIHx8IGlzTmV3Um91dGVJbnN0YW5jZShjdXJyZW50Um91dGVNYXRjaCwgbmV4dFJvdXRlTWF0Y2gpXG4gICAgfSkpO1xuICB9KTsgLy8gUGljayBmZXRjaGVyLmxvYWRzIHRoYXQgbmVlZCB0byBiZSByZXZhbGlkYXRlZFxuXG4gIGxldCByZXZhbGlkYXRpbmdGZXRjaGVycyA9IFtdO1xuICBmZXRjaExvYWRNYXRjaGVzLmZvckVhY2goKGYsIGtleSkgPT4ge1xuICAgIC8vIERvbid0IHJldmFsaWRhdGUgaWYgZmV0Y2hlciB3b24ndCBiZSBwcmVzZW50IGluIHRoZSBzdWJzZXF1ZW50IHJlbmRlclxuICAgIGlmICghbWF0Y2hlcy5zb21lKG0gPT4gbS5yb3V0ZS5pZCA9PT0gZi5yb3V0ZUlkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmZXRjaGVyTWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBmLnBhdGgsIGJhc2VuYW1lKTsgLy8gSWYgdGhlIGZldGNoZXIgcGF0aCBubyBsb25nZXIgbWF0Y2hlcywgcHVzaCBpdCBpbiB3aXRoIG51bGwgbWF0Y2hlcyBzb1xuICAgIC8vIHdlIGNhbiB0cmlnZ2VyIGEgNDA0IGluIGNhbGxMb2FkZXJzQW5kTWF5YmVSZXNvbHZlRGF0YVxuXG4gICAgaWYgKCFmZXRjaGVyTWF0Y2hlcykge1xuICAgICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMucHVzaChfZXh0ZW5kcyh7XG4gICAgICAgIGtleVxuICAgICAgfSwgZiwge1xuICAgICAgICBtYXRjaGVzOiBudWxsLFxuICAgICAgICBtYXRjaDogbnVsbFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmZXRjaGVyTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChmZXRjaGVyTWF0Y2hlcywgZi5wYXRoKTtcblxuICAgIGlmIChjYW5jZWxsZWRGZXRjaGVyTG9hZHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMucHVzaChfZXh0ZW5kcyh7XG4gICAgICAgIGtleSxcbiAgICAgICAgbWF0Y2hlczogZmV0Y2hlck1hdGNoZXMsXG4gICAgICAgIG1hdGNoOiBmZXRjaGVyTWF0Y2hcbiAgICAgIH0sIGYpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJldmFsaWRhdGluZyBmZXRjaGVycyBhcmUgZGVjb3VwbGVkIGZyb20gdGhlIHJvdXRlIG1hdGNoZXMgc2luY2UgdGhleVxuICAgIC8vIGhpdCBhIHN0YXRpYyBocmVmLCBzbyB0aGV5IF9hbHdheXNfIGNoZWNrIHNob3VsZFJldmFsaWRhdGUgYW5kIHRoZVxuICAgIC8vIGRlZmF1bHQgaXMgc3RyaWN0bHkgaWYgYSByZXZhbGlkYXRpb24gaXMgZXhwbGljaXRseSByZXF1aXJlZCAoYWN0aW9uXG4gICAgLy8gc3VibWlzc2lvbnMsIHVzZVJldmFsaWRhdG9yLCBYLVJlbWl4LVJldmFsaWRhdGUpLlxuXG5cbiAgICBsZXQgc2hvdWxkUmV2YWxpZGF0ZSA9IHNob3VsZFJldmFsaWRhdGVMb2FkZXIoZmV0Y2hlck1hdGNoLCBfZXh0ZW5kcyh7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgY3VycmVudFBhcmFtczogc3RhdGUubWF0Y2hlc1tzdGF0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtcyxcbiAgICAgIG5leHRVcmwsXG4gICAgICBuZXh0UGFyYW1zOiBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucGFyYW1zXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgYWN0aW9uUmVzdWx0LFxuICAgICAgZGVmYXVsdFNob3VsZFJldmFsaWRhdGVcbiAgICB9KSk7XG5cbiAgICBpZiAoc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMucHVzaChfZXh0ZW5kcyh7XG4gICAgICAgIGtleSxcbiAgICAgICAgbWF0Y2hlczogZmV0Y2hlck1hdGNoZXMsXG4gICAgICAgIG1hdGNoOiBmZXRjaGVyTWF0Y2hcbiAgICAgIH0sIGYpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW25hdmlnYXRpb25NYXRjaGVzLCByZXZhbGlkYXRpbmdGZXRjaGVyc107XG59XG5cbmZ1bmN0aW9uIGlzTmV3TG9hZGVyKGN1cnJlbnRMb2FkZXJEYXRhLCBjdXJyZW50TWF0Y2gsIG1hdGNoKSB7XG4gIGxldCBpc05ldyA9IC8vIFthXSAtPiBbYSwgYl1cbiAgIWN1cnJlbnRNYXRjaCB8fCAvLyBbYSwgYl0gLT4gW2EsIGNdXG4gIG1hdGNoLnJvdXRlLmlkICE9PSBjdXJyZW50TWF0Y2gucm91dGUuaWQ7IC8vIEhhbmRsZSB0aGUgY2FzZSB0aGF0IHdlIGRvbid0IGhhdmUgZGF0YSBmb3IgYSByZS11c2VkIHJvdXRlLCBwb3RlbnRpYWxseVxuICAvLyBmcm9tIGEgcHJpb3IgZXJyb3Igb3IgZnJvbSBhIGNhbmNlbGxlZCBwZW5kaW5nIGRlZmVycmVkXG5cbiAgbGV0IGlzTWlzc2luZ0RhdGEgPSBjdXJyZW50TG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0gPT09IHVuZGVmaW5lZDsgLy8gQWx3YXlzIGxvYWQgaWYgdGhpcyBpcyBhIG5ldC1uZXcgcm91dGUgb3Igd2UgZG9uJ3QgeWV0IGhhdmUgZGF0YVxuXG4gIHJldHVybiBpc05ldyB8fCBpc01pc3NpbmdEYXRhO1xufVxuXG5mdW5jdGlvbiBpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudE1hdGNoLCBtYXRjaCkge1xuICBsZXQgY3VycmVudFBhdGggPSBjdXJyZW50TWF0Y2gucm91dGUucGF0aDtcbiAgcmV0dXJuICgvLyBwYXJhbSBjaGFuZ2UgZm9yIHRoaXMgbWF0Y2gsIC91c2Vycy8xMjMgLT4gL3VzZXJzLzQ1NlxuICAgIGN1cnJlbnRNYXRjaC5wYXRobmFtZSAhPT0gbWF0Y2gucGF0aG5hbWUgfHwgLy8gc3BsYXQgcGFyYW0gY2hhbmdlZCwgd2hpY2ggaXMgbm90IHByZXNlbnQgaW4gbWF0Y2gucGF0aFxuICAgIC8vIGUuZy4gL2ZpbGVzL2ltYWdlcy9hdmF0YXIuanBnIC0+IGZpbGVzL2ZpbmFuY2VzLnhsc1xuICAgIGN1cnJlbnRQYXRoICE9IG51bGwgJiYgY3VycmVudFBhdGguZW5kc1dpdGgoXCIqXCIpICYmIGN1cnJlbnRNYXRjaC5wYXJhbXNbXCIqXCJdICE9PSBtYXRjaC5wYXJhbXNbXCIqXCJdXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFJldmFsaWRhdGVMb2FkZXIobG9hZGVyTWF0Y2gsIGFyZykge1xuICBpZiAobG9hZGVyTWF0Y2gucm91dGUuc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgIGxldCByb3V0ZUNob2ljZSA9IGxvYWRlck1hdGNoLnJvdXRlLnNob3VsZFJldmFsaWRhdGUoYXJnKTtcblxuICAgIGlmICh0eXBlb2Ygcm91dGVDaG9pY2UgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXR1cm4gcm91dGVDaG9pY2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZy5kZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZTtcbn1cbi8qKlxuICogRXhlY3V0ZSByb3V0ZS5sYXp5KCkgbWV0aG9kcyB0byBsYXppbHkgbG9hZCByb3V0ZSBtb2R1bGVzIChsb2FkZXIsIGFjdGlvbixcbiAqIHNob3VsZFJldmFsaWRhdGUpIGFuZCB1cGRhdGUgdGhlIHJvdXRlTWFuaWZlc3QgaW4gcGxhY2Ugd2hpY2ggc2hhcmVzIG9iamVjdHNcbiAqIHdpdGggZGF0YVJvdXRlcyBzbyB0aG9zZSBnZXQgdXBkYXRlZCBhcyB3ZWxsLlxuICovXG5cblxuYXN5bmMgZnVuY3Rpb24gbG9hZExhenlSb3V0ZU1vZHVsZShyb3V0ZSwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgbWFuaWZlc3QpIHtcbiAgaWYgKCFyb3V0ZS5sYXp5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGxhenlSb3V0ZSA9IGF3YWl0IHJvdXRlLmxhenkoKTsgLy8gSWYgdGhlIGxhenkgcm91dGUgZnVuY3Rpb24gd2FzIGV4ZWN1dGVkIGFuZCByZW1vdmVkIGJ5IGFub3RoZXIgcGFyYWxsZWxcbiAgLy8gY2FsbCB0aGVuIHdlIGNhbiByZXR1cm4gLSBmaXJzdCBsYXp5KCkgdG8gZmluaXNoIHdpbnMgYmVjYXVzZSB0aGUgcmV0dXJuXG4gIC8vIHZhbHVlIG9mIGxhenkgaXMgZXhwZWN0ZWQgdG8gYmUgc3RhdGljXG5cbiAgaWYgKCFyb3V0ZS5sYXp5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHJvdXRlVG9VcGRhdGUgPSBtYW5pZmVzdFtyb3V0ZS5pZF07XG4gIGludmFyaWFudChyb3V0ZVRvVXBkYXRlLCBcIk5vIHJvdXRlIGZvdW5kIGluIG1hbmlmZXN0XCIpOyAvLyBVcGRhdGUgdGhlIHJvdXRlIGluIHBsYWNlLiAgVGhpcyBzaG91bGQgYmUgc2FmZSBiZWNhdXNlIHRoZXJlJ3Mgbm8gd2F5XG4gIC8vIHdlIGNvdWxkIHlldCBiZSBzaXR0aW5nIG9uIHRoaXMgcm91dGUgYXMgd2UgY2FuJ3QgZ2V0IHRoZXJlIHdpdGhvdXRcbiAgLy8gcmVzb2x2aW5nIGxhenkoKSBmaXJzdC5cbiAgLy9cbiAgLy8gVGhpcyBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgSE1SIFwidXBkYXRlXCIgdXNlLWNhc2Ugd2hlcmUgd2UgbWF5IGFjdGl2ZWx5IGJlXG4gIC8vIG9uIHRoZSByb3V0ZSBiZWluZyB1cGRhdGVkLiAgVGhlIG1haW4gY29uY2VybiBib2lscyBkb3duIHRvIFwiZG9lcyB0aGlzXG4gIC8vIG11dGF0aW9uIGFmZmVjdCBhbnkgb25nb2luZyBuYXZpZ2F0aW9ucyBvciBhbnkgY3VycmVudCBzdGF0ZS5tYXRjaGVzXG4gIC8vIHZhbHVlcz9cIi4gIElmIG5vdCwgaXQgc2hvdWxkIGJlIHNhZmUgdG8gdXBkYXRlIGluIHBsYWNlLlxuXG4gIGxldCByb3V0ZVVwZGF0ZXMgPSB7fTtcblxuICBmb3IgKGxldCBsYXp5Um91dGVQcm9wZXJ0eSBpbiBsYXp5Um91dGUpIHtcbiAgICBsZXQgc3RhdGljUm91dGVWYWx1ZSA9IHJvdXRlVG9VcGRhdGVbbGF6eVJvdXRlUHJvcGVydHldO1xuICAgIGxldCBpc1Byb3BlcnR5U3RhdGljYWxseURlZmluZWQgPSBzdGF0aWNSb3V0ZVZhbHVlICE9PSB1bmRlZmluZWQgJiYgLy8gVGhpcyBwcm9wZXJ0eSBpc24ndCBzdGF0aWMgc2luY2UgaXQgc2hvdWxkIGFsd2F5cyBiZSB1cGRhdGVkIGJhc2VkXG4gICAgLy8gb24gdGhlIHJvdXRlIHVwZGF0ZXNcbiAgICBsYXp5Um91dGVQcm9wZXJ0eSAhPT0gXCJoYXNFcnJvckJvdW5kYXJ5XCI7XG4gICAgd2FybmluZyghaXNQcm9wZXJ0eVN0YXRpY2FsbHlEZWZpbmVkLCBcIlJvdXRlIFxcXCJcIiArIHJvdXRlVG9VcGRhdGUuaWQgKyBcIlxcXCIgaGFzIGEgc3RhdGljIHByb3BlcnR5IFxcXCJcIiArIGxhenlSb3V0ZVByb3BlcnR5ICsgXCJcXFwiIFwiICsgXCJkZWZpbmVkIGJ1dCBpdHMgbGF6eSBmdW5jdGlvbiBpcyBhbHNvIHJldHVybmluZyBhIHZhbHVlIGZvciB0aGlzIHByb3BlcnR5LiBcIiArIChcIlRoZSBsYXp5IHJvdXRlIHByb3BlcnR5IFxcXCJcIiArIGxhenlSb3V0ZVByb3BlcnR5ICsgXCJcXFwiIHdpbGwgYmUgaWdub3JlZC5cIikpO1xuXG4gICAgaWYgKCFpc1Byb3BlcnR5U3RhdGljYWxseURlZmluZWQgJiYgIWltbXV0YWJsZVJvdXRlS2V5cy5oYXMobGF6eVJvdXRlUHJvcGVydHkpKSB7XG4gICAgICByb3V0ZVVwZGF0ZXNbbGF6eVJvdXRlUHJvcGVydHldID0gbGF6eVJvdXRlW2xhenlSb3V0ZVByb3BlcnR5XTtcbiAgICB9XG4gIH0gLy8gTXV0YXRlIHRoZSByb3V0ZSB3aXRoIHRoZSBwcm92aWRlZCB1cGRhdGVzLiAgRG8gdGhpcyBmaXJzdCBzbyB3ZSBwYXNzXG4gIC8vIHRoZSB1cGRhdGVkIHZlcnNpb24gdG8gZGV0ZWN0RXJyb3JCb3VuZGFyeVxuXG5cbiAgT2JqZWN0LmFzc2lnbihyb3V0ZVRvVXBkYXRlLCByb3V0ZVVwZGF0ZXMpOyAvLyBNdXRhdGUgdGhlIGBoYXNFcnJvckJvdW5kYXJ5YCBwcm9wZXJ0eSBvbiB0aGUgcm91dGUgYmFzZWQgb24gdGhlIHJvdXRlXG4gIC8vIHVwZGF0ZXMgYW5kIHJlbW92ZSB0aGUgYGxhenlgIGZ1bmN0aW9uIHNvIHdlIGRvbid0IHJlc29sdmUgdGhlIGxhenlcbiAgLy8gcm91dGUgYWdhaW4uXG5cbiAgT2JqZWN0LmFzc2lnbihyb3V0ZVRvVXBkYXRlLCB7XG4gICAgLy8gVG8ga2VlcCB0aGluZ3MgZnJhbWV3b3JrIGFnbm9zdGljLCB3ZSB1c2UgdGhlIHByb3ZpZGVkXG4gICAgLy8gYGRldGVjdEVycm9yQm91bmRhcnlgIGZ1bmN0aW9uIHRvIHNldCB0aGUgYGhhc0Vycm9yQm91bmRhcnlgIHJvdXRlXG4gICAgLy8gcHJvcGVydHkgc2luY2UgdGhlIGxvZ2ljIHdpbGwgZGlmZmVyIGJldHdlZW4gZnJhbWV3b3Jrcy5cbiAgICBoYXNFcnJvckJvdW5kYXJ5OiBkZXRlY3RFcnJvckJvdW5kYXJ5KF9leHRlbmRzKHt9LCByb3V0ZVRvVXBkYXRlKSksXG4gICAgbGF6eTogdW5kZWZpbmVkXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjYWxsTG9hZGVyT3JBY3Rpb24odHlwZSwgcmVxdWVzdCwgbWF0Y2gsIG1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCBiYXNlbmFtZSwgaXNTdGF0aWNSZXF1ZXN0LCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQpIHtcbiAgaWYgKGJhc2VuYW1lID09PSB2b2lkIDApIHtcbiAgICBiYXNlbmFtZSA9IFwiL1wiO1xuICB9XG5cbiAgaWYgKGlzU3RhdGljUmVxdWVzdCA9PT0gdm9pZCAwKSB7XG4gICAgaXNTdGF0aWNSZXF1ZXN0ID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNSb3V0ZVJlcXVlc3QgPT09IHZvaWQgMCkge1xuICAgIGlzUm91dGVSZXF1ZXN0ID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcmVzdWx0VHlwZTtcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IG9uUmVqZWN0O1xuXG4gIGxldCBydW5IYW5kbGVyID0gaGFuZGxlciA9PiB7XG4gICAgLy8gU2V0dXAgYSBwcm9taXNlIHdlIGNhbiByYWNlIGFnYWluc3Qgc28gdGhhdCBhYm9ydCBzaWduYWxzIHNob3J0IGNpcmN1aXRcbiAgICBsZXQgcmVqZWN0O1xuICAgIGxldCBhYm9ydFByb21pc2UgPSBuZXcgUHJvbWlzZSgoXywgcikgPT4gcmVqZWN0ID0gcik7XG5cbiAgICBvblJlamVjdCA9ICgpID0+IHJlamVjdCgpO1xuXG4gICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uUmVqZWN0KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtoYW5kbGVyKHtcbiAgICAgIHJlcXVlc3QsXG4gICAgICBwYXJhbXM6IG1hdGNoLnBhcmFtcyxcbiAgICAgIGNvbnRleHQ6IHJlcXVlc3RDb250ZXh0XG4gICAgfSksIGFib3J0UHJvbWlzZV0pO1xuICB9O1xuXG4gIHRyeSB7XG4gICAgbGV0IGhhbmRsZXIgPSBtYXRjaC5yb3V0ZVt0eXBlXTtcblxuICAgIGlmIChtYXRjaC5yb3V0ZS5sYXp5KSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAvLyBSdW4gc3RhdGljYWxseSBkZWZpbmVkIGhhbmRsZXIgaW4gcGFyYWxsZWwgd2l0aCBsYXp5KClcbiAgICAgICAgbGV0IHZhbHVlcyA9IGF3YWl0IFByb21pc2UuYWxsKFtydW5IYW5kbGVyKGhhbmRsZXIpLCBsb2FkTGF6eVJvdXRlTW9kdWxlKG1hdGNoLnJvdXRlLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCBtYW5pZmVzdCldKTtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWVzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTG9hZCBsYXp5IHJvdXRlIG1vZHVsZSwgdGhlbiBydW4gYW55IHJldHVybmVkIGhhbmRsZXJcbiAgICAgICAgYXdhaXQgbG9hZExhenlSb3V0ZU1vZHVsZShtYXRjaC5yb3V0ZSwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgbWFuaWZlc3QpO1xuICAgICAgICBoYW5kbGVyID0gbWF0Y2gucm91dGVbdHlwZV07XG5cbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAvLyBIYW5kbGVyIHN0aWxsIHJ1biBldmVuIGlmIHdlIGdvdCBpbnRlcnJ1cHRlZCB0byBtYWludGFpbiBjb25zaXN0ZW5jeVxuICAgICAgICAgIC8vIHdpdGggdW4tYWJvcnRhYmxlIGJlaGF2aW9yIG9mIGhhbmRsZXIgZXhlY3V0aW9uIG9uIG5vbi1sYXp5IG9yXG4gICAgICAgICAgLy8gcHJldmlvdXNseS1sYXp5LWxvYWRlZCByb3V0ZXNcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCBydW5IYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiYWN0aW9uXCIpIHtcbiAgICAgICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICAgIHBhdGhuYW1lOiBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgICAgIHJvdXRlSWQ6IG1hdGNoLnJvdXRlLmlkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbGF6eSgpIHJvdXRlIGhhcyBubyBsb2FkZXIgdG8gcnVuLiAgU2hvcnQgY2lyY3VpdCBoZXJlIHNvIHdlIGRvbid0XG4gICAgICAgICAgLy8gaGl0IHRoZSBpbnZhcmlhbnQgYmVsb3cgdGhhdCBlcnJvcnMgb24gcmV0dXJuaW5nIHVuZGVmaW5lZC5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnZhcmlhbnQoaGFuZGxlciwgXCJDb3VsZCBub3QgZmluZCB0aGUgXCIgKyB0eXBlICsgXCIgdG8gcnVuIG9uIHRoZSBcXFwiXCIgKyBtYXRjaC5yb3V0ZS5pZCArIFwiXFxcIiByb3V0ZVwiKTtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHJ1bkhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxuXG4gICAgaW52YXJpYW50KHJlc3VsdCAhPT0gdW5kZWZpbmVkLCBcIllvdSBkZWZpbmVkIFwiICsgKHR5cGUgPT09IFwiYWN0aW9uXCIgPyBcImFuIGFjdGlvblwiIDogXCJhIGxvYWRlclwiKSArIFwiIGZvciByb3V0ZSBcIiArIChcIlxcXCJcIiArIG1hdGNoLnJvdXRlLmlkICsgXCJcXFwiIGJ1dCBkaWRuJ3QgcmV0dXJuIGFueXRoaW5nIGZyb20geW91ciBgXCIgKyB0eXBlICsgXCJgIFwiKSArIFwiZnVuY3Rpb24uIFBsZWFzZSByZXR1cm4gYSB2YWx1ZSBvciBgbnVsbGAuXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzdWx0VHlwZSA9IFJlc3VsdFR5cGUuZXJyb3I7XG4gICAgcmVzdWx0ID0gZTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAob25SZWplY3QpIHtcbiAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvblJlamVjdCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgIGxldCBzdGF0dXMgPSByZXN1bHQuc3RhdHVzOyAvLyBQcm9jZXNzIHJlZGlyZWN0c1xuXG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzQ29kZXMuaGFzKHN0YXR1cykpIHtcbiAgICAgIGxldCBsb2NhdGlvbiA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpO1xuICAgICAgaW52YXJpYW50KGxvY2F0aW9uLCBcIlJlZGlyZWN0cyByZXR1cm5lZC90aHJvd24gZnJvbSBsb2FkZXJzL2FjdGlvbnMgbXVzdCBoYXZlIGEgTG9jYXRpb24gaGVhZGVyXCIpOyAvLyBTdXBwb3J0IHJlbGF0aXZlIHJvdXRpbmcgaW4gaW50ZXJuYWwgcmVkaXJlY3RzXG5cbiAgICAgIGlmICghQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QobG9jYXRpb24pKSB7XG4gICAgICAgIGxldCBhY3RpdmVNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgwLCBtYXRjaGVzLmluZGV4T2YobWF0Y2gpICsgMSk7XG4gICAgICAgIGxldCByb3V0ZVBhdGhuYW1lcyA9IGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKGFjdGl2ZU1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRMb2NhdGlvbiA9IHJlc29sdmVUbyhsb2NhdGlvbiwgcm91dGVQYXRobmFtZXMsIG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lKTtcbiAgICAgICAgaW52YXJpYW50KGNyZWF0ZVBhdGgocmVzb2x2ZWRMb2NhdGlvbiksIFwiVW5hYmxlIHRvIHJlc29sdmUgcmVkaXJlY3QgbG9jYXRpb246IFwiICsgbG9jYXRpb24pOyAvLyBQcmVwZW5kIHRoZSBiYXNlbmFtZSB0byB0aGUgcmVkaXJlY3QgbG9jYXRpb24gaWYgd2UgaGF2ZSBvbmVcblxuICAgICAgICBpZiAoYmFzZW5hbWUpIHtcbiAgICAgICAgICBsZXQgcGF0aCA9IHJlc29sdmVkTG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgICAgcmVzb2x2ZWRMb2NhdGlvbi5wYXRobmFtZSA9IHBhdGggPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoXSk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhdGlvbiA9IGNyZWF0ZVBhdGgocmVzb2x2ZWRMb2NhdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKCFpc1N0YXRpY1JlcXVlc3QpIHtcbiAgICAgICAgLy8gU3RyaXAgb2ZmIHRoZSBwcm90b2NvbCtvcmlnaW4gZm9yIHNhbWUtb3JpZ2luICsgc2FtZS1iYXNlbmFtZSBhYnNvbHV0ZVxuICAgICAgICAvLyByZWRpcmVjdHMuIElmIHRoaXMgaXMgYSBzdGF0aWMgcmVxdWVzdCwgd2UgY2FuIGxldCBpdCBnbyBiYWNrIHRvIHRoZVxuICAgICAgICAvLyBicm93c2VyIGFzLWlzXG4gICAgICAgIGxldCBjdXJyZW50VXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgICAgIGxldCB1cmwgPSBsb2NhdGlvbi5zdGFydHNXaXRoKFwiLy9cIikgPyBuZXcgVVJMKGN1cnJlbnRVcmwucHJvdG9jb2wgKyBsb2NhdGlvbikgOiBuZXcgVVJMKGxvY2F0aW9uKTtcbiAgICAgICAgbGV0IGlzU2FtZUJhc2VuYW1lID0gc3RyaXBCYXNlbmFtZSh1cmwucGF0aG5hbWUsIGJhc2VuYW1lKSAhPSBudWxsO1xuXG4gICAgICAgIGlmICh1cmwub3JpZ2luID09PSBjdXJyZW50VXJsLm9yaWdpbiAmJiBpc1NhbWVCYXNlbmFtZSkge1xuICAgICAgICAgIGxvY2F0aW9uID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCArIHVybC5oYXNoO1xuICAgICAgICB9XG4gICAgICB9IC8vIERvbid0IHByb2Nlc3MgcmVkaXJlY3RzIGluIHRoZSByb3V0ZXIgZHVyaW5nIHN0YXRpYyByZXF1ZXN0cyByZXF1ZXN0cy5cbiAgICAgIC8vIEluc3RlYWQsIHRocm93IHRoZSBSZXNwb25zZSBhbmQgbGV0IHRoZSBzZXJ2ZXIgaGFuZGxlIGl0IHdpdGggYW4gSFRUUFxuICAgICAgLy8gcmVkaXJlY3QuICBXZSBhbHNvIHVwZGF0ZSB0aGUgTG9jYXRpb24gaGVhZGVyIGluIHBsYWNlIGluIHRoaXMgZmxvdyBzb1xuICAgICAgLy8gYmFzZW5hbWUgYW5kIHJlbGF0aXZlIHJvdXRpbmcgaXMgdGFrZW4gaW50byBhY2NvdW50XG5cblxuICAgICAgaWYgKGlzU3RhdGljUmVxdWVzdCkge1xuICAgICAgICByZXN1bHQuaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCBsb2NhdGlvbik7XG4gICAgICAgIHRocm93IHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5yZWRpcmVjdCxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgcmV2YWxpZGF0ZTogcmVzdWx0LmhlYWRlcnMuZ2V0KFwiWC1SZW1peC1SZXZhbGlkYXRlXCIpICE9PSBudWxsXG4gICAgICB9O1xuICAgIH0gLy8gRm9yIFNTUiBzaW5nbGUtcm91dGUgcmVxdWVzdHMsIHdlIHdhbnQgdG8gaGFuZCBSZXNwb25zZXMgYmFjayBkaXJlY3RseVxuICAgIC8vIHdpdGhvdXQgdW53cmFwcGluZy4gIFdlIGRvIHRoaXMgd2l0aCB0aGUgUXVlcnlSb3V0ZVJlc3BvbnNlIHdyYXBwZXJcbiAgICAvLyBpbnRlcmZhY2Ugc28gd2UgY2FuIGtub3cgd2hldGhlciBpdCB3YXMgcmV0dXJuZWQgb3IgdGhyb3duXG5cblxuICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICAgIHRocm93IHtcbiAgICAgICAgdHlwZTogcmVzdWx0VHlwZSB8fCBSZXN1bHRUeXBlLmRhdGEsXG4gICAgICAgIHJlc3BvbnNlOiByZXN1bHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpOyAvLyBDaGVjayBiZXR3ZWVuIHdvcmQgYm91bmRhcmllcyBpbnN0ZWFkIG9mIHN0YXJ0c1dpdGgoKSBkdWUgdG8gdGhlIGxhc3RcbiAgICAvLyBwYXJhZ3JhcGggb2YgaHR0cHM6Ly9odHRwd2cub3JnL3NwZWNzL3JmYzkxMTAuaHRtbCNmaWVsZC5jb250ZW50LXR5cGVcblxuICAgIGlmIChjb250ZW50VHlwZSAmJiAvXFxiYXBwbGljYXRpb25cXC9qc29uXFxiLy50ZXN0KGNvbnRlbnRUeXBlKSkge1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBhd2FpdCByZXN1bHQudGV4dCgpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHRUeXBlID09PSBSZXN1bHRUeXBlLmVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiByZXN1bHRUeXBlLFxuICAgICAgICBlcnJvcjogbmV3IEVycm9yUmVzcG9uc2Uoc3RhdHVzLCByZXN1bHQuc3RhdHVzVGV4dCwgZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHJlc3VsdC5oZWFkZXJzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgICBkYXRhLFxuICAgICAgc3RhdHVzQ29kZTogcmVzdWx0LnN0YXR1cyxcbiAgICAgIGhlYWRlcnM6IHJlc3VsdC5oZWFkZXJzXG4gICAgfTtcbiAgfVxuXG4gIGlmIChyZXN1bHRUeXBlID09PSBSZXN1bHRUeXBlLmVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHJlc3VsdFR5cGUsXG4gICAgICBlcnJvcjogcmVzdWx0XG4gICAgfTtcbiAgfVxuXG4gIGlmIChpc0RlZmVycmVkRGF0YShyZXN1bHQpKSB7XG4gICAgdmFyIF9yZXN1bHQkaW5pdCwgX3Jlc3VsdCRpbml0MjtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBSZXN1bHRUeXBlLmRlZmVycmVkLFxuICAgICAgZGVmZXJyZWREYXRhOiByZXN1bHQsXG4gICAgICBzdGF0dXNDb2RlOiAoX3Jlc3VsdCRpbml0ID0gcmVzdWx0LmluaXQpID09IG51bGwgPyB2b2lkIDAgOiBfcmVzdWx0JGluaXQuc3RhdHVzLFxuICAgICAgaGVhZGVyczogKChfcmVzdWx0JGluaXQyID0gcmVzdWx0LmluaXQpID09IG51bGwgPyB2b2lkIDAgOiBfcmVzdWx0JGluaXQyLmhlYWRlcnMpICYmIG5ldyBIZWFkZXJzKHJlc3VsdC5pbml0LmhlYWRlcnMpXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgIGRhdGE6IHJlc3VsdFxuICB9O1xufSAvLyBVdGlsaXR5IG1ldGhvZCBmb3IgY3JlYXRpbmcgdGhlIFJlcXVlc3QgaW5zdGFuY2VzIGZvciBsb2FkZXJzL2FjdGlvbnMgZHVyaW5nXG4vLyBjbGllbnQtc2lkZSBuYXZpZ2F0aW9ucyBhbmQgZmV0Y2hlcy4gIER1cmluZyBTU1Igd2Ugd2lsbCBhbHdheXMgaGF2ZSBhXG4vLyBSZXF1ZXN0IGluc3RhbmNlIGZyb20gdGhlIHN0YXRpYyBoYW5kbGVyIChxdWVyeS9xdWVyeVJvdXRlKVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGhpc3RvcnksIGxvY2F0aW9uLCBzaWduYWwsIHN1Ym1pc3Npb24pIHtcbiAgbGV0IHVybCA9IGhpc3RvcnkuY3JlYXRlVVJMKHN0cmlwSGFzaEZyb21QYXRoKGxvY2F0aW9uKSkudG9TdHJpbmcoKTtcbiAgbGV0IGluaXQgPSB7XG4gICAgc2lnbmFsXG4gIH07XG5cbiAgaWYgKHN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgbGV0IHtcbiAgICAgIGZvcm1NZXRob2QsXG4gICAgICBmb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhXG4gICAgfSA9IHN1Ym1pc3Npb247IC8vIERpZG4ndCB0aGluayB3ZSBuZWVkZWQgdGhpcyBidXQgaXQgdHVybnMgb3V0IHVubGlrZSBvdGhlciBtZXRob2RzLCBwYXRjaFxuICAgIC8vIHdvbid0IGJlIHByb3Blcmx5IG5vcm1hbGl6ZWQgdG8gdXBwZXJjYXNlIGFuZCByZXN1bHRzIGluIGEgNDA1IGVycm9yLlxuICAgIC8vIFNlZTogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbWV0aG9kXG5cbiAgICBpbml0Lm1ldGhvZCA9IGZvcm1NZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICBpbml0LmJvZHkgPSBmb3JtRW5jVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiA/IGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKGZvcm1EYXRhKSA6IGZvcm1EYXRhO1xuICB9IC8vIENvbnRlbnQtVHlwZSBpcyBpbmZlcnJlZCAoaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2RvbS1yZXF1ZXN0KVxuXG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KHVybCwgaW5pdCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKGZvcm1EYXRhKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2NvbnZlcnRpbmctYW4tZW50cnktbGlzdC10by1hLWxpc3Qtb2YtbmFtZS12YWx1ZS1wYWlyc1xuICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSBpbnN0YW5jZW9mIEZpbGUgPyB2YWx1ZS5uYW1lIDogdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHNlYXJjaFBhcmFtcztcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nRXJyb3IsIGFjdGl2ZURlZmVycmVkcykge1xuICAvLyBGaWxsIGluIGxvYWRlckRhdGEvZXJyb3JzIGZyb20gb3VyIGxvYWRlcnNcbiAgbGV0IGxvYWRlckRhdGEgPSB7fTtcbiAgbGV0IGVycm9ycyA9IG51bGw7XG4gIGxldCBzdGF0dXNDb2RlO1xuICBsZXQgZm91bmRFcnJvciA9IGZhbHNlO1xuICBsZXQgbG9hZGVySGVhZGVycyA9IHt9OyAvLyBQcm9jZXNzIGxvYWRlciByZXN1bHRzIGludG8gc3RhdGUubG9hZGVyRGF0YS9zdGF0ZS5lcnJvcnNcblxuICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCwgaW5kZXgpID0+IHtcbiAgICBsZXQgaWQgPSBtYXRjaGVzVG9Mb2FkW2luZGV4XS5yb3V0ZS5pZDtcbiAgICBpbnZhcmlhbnQoIWlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSwgXCJDYW5ub3QgaGFuZGxlIHJlZGlyZWN0IHJlc3VsdHMgaW4gcHJvY2Vzc0xvYWRlckRhdGFcIik7XG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBMb29rIHVwd2FyZHMgZnJvbSB0aGUgbWF0Y2hlZCByb3V0ZSBmb3IgdGhlIGNsb3Nlc3QgYW5jZXN0b3JcbiAgICAgIC8vIGVycm9yIGJvdW5kYXJ5LCBkZWZhdWx0aW5nIHRvIHRoZSByb290IG1hdGNoXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgaWQpO1xuICAgICAgbGV0IGVycm9yID0gcmVzdWx0LmVycm9yOyAvLyBJZiB3ZSBoYXZlIGEgcGVuZGluZyBhY3Rpb24gZXJyb3IsIHdlIHJlcG9ydCBpdCBhdCB0aGUgaGlnaGVzdC1yb3V0ZVxuICAgICAgLy8gdGhhdCB0aHJvd3MgYSBsb2FkZXIgZXJyb3IsIGFuZCB0aGVuIGNsZWFyIGl0IG91dCB0byBpbmRpY2F0ZSB0aGF0XG4gICAgICAvLyBpdCB3YXMgY29uc3VtZWRcblxuICAgICAgaWYgKHBlbmRpbmdFcnJvcikge1xuICAgICAgICBlcnJvciA9IE9iamVjdC52YWx1ZXMocGVuZGluZ0Vycm9yKVswXTtcbiAgICAgICAgcGVuZGluZ0Vycm9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBlcnJvcnMgPSBlcnJvcnMgfHwge307IC8vIFByZWZlciBoaWdoZXIgZXJyb3IgdmFsdWVzIGlmIGxvd2VyIGVycm9ycyBidWJibGUgdG8gdGhlIHNhbWUgYm91bmRhcnlcblxuICAgICAgaWYgKGVycm9yc1tib3VuZGFyeU1hdGNoLnJvdXRlLmlkXSA9PSBudWxsKSB7XG4gICAgICAgIGVycm9yc1tib3VuZGFyeU1hdGNoLnJvdXRlLmlkXSA9IGVycm9yO1xuICAgICAgfSAvLyBDbGVhciBvdXIgYW55IHByaW9yIGxvYWRlckRhdGEgZm9yIHRoZSB0aHJvd2luZyByb3V0ZVxuXG5cbiAgICAgIGxvYWRlckRhdGFbaWRdID0gdW5kZWZpbmVkOyAvLyBPbmNlIHdlIGZpbmQgb3VyIGZpcnN0IChoaWdoZXN0KSBlcnJvciwgd2Ugc2V0IHRoZSBzdGF0dXMgY29kZSBhbmRcbiAgICAgIC8vIHByZXZlbnQgZGVlcGVyIHN0YXR1cyBjb2RlcyBmcm9tIG92ZXJyaWRpbmdcblxuICAgICAgaWYgKCFmb3VuZEVycm9yKSB7XG4gICAgICAgIGZvdW5kRXJyb3IgPSB0cnVlO1xuICAgICAgICBzdGF0dXNDb2RlID0gaXNSb3V0ZUVycm9yUmVzcG9uc2UocmVzdWx0LmVycm9yKSA/IHJlc3VsdC5lcnJvci5zdGF0dXMgOiA1MDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQuaGVhZGVycykge1xuICAgICAgICBsb2FkZXJIZWFkZXJzW2lkXSA9IHJlc3VsdC5oZWFkZXJzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgIGFjdGl2ZURlZmVycmVkcy5zZXQoaWQsIHJlc3VsdC5kZWZlcnJlZERhdGEpO1xuICAgICAgICBsb2FkZXJEYXRhW2lkXSA9IHJlc3VsdC5kZWZlcnJlZERhdGEuZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRlckRhdGFbaWRdID0gcmVzdWx0LmRhdGE7XG4gICAgICB9IC8vIEVycm9yIHN0YXR1cyBjb2RlcyBhbHdheXMgb3ZlcnJpZGUgc3VjY2VzcyBzdGF0dXMgY29kZXMsIGJ1dCBpZiBhbGxcbiAgICAgIC8vIGxvYWRlcnMgYXJlIHN1Y2Nlc3NmdWwgd2UgdGFrZSB0aGUgZGVlcGVzdCBzdGF0dXMgY29kZS5cblxuXG4gICAgICBpZiAocmVzdWx0LnN0YXR1c0NvZGUgIT0gbnVsbCAmJiByZXN1bHQuc3RhdHVzQ29kZSAhPT0gMjAwICYmICFmb3VuZEVycm9yKSB7XG4gICAgICAgIHN0YXR1c0NvZGUgPSByZXN1bHQuc3RhdHVzQ29kZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgIGxvYWRlckhlYWRlcnNbaWRdID0gcmVzdWx0LmhlYWRlcnM7XG4gICAgICB9XG4gICAgfVxuICB9KTsgLy8gSWYgd2UgZGlkbid0IGNvbnN1bWUgdGhlIHBlbmRpbmcgYWN0aW9uIGVycm9yIChpLmUuLCBhbGwgbG9hZGVyc1xuICAvLyByZXNvbHZlZCksIHRoZW4gY29uc3VtZSBpdCBoZXJlLiAgQWxzbyBjbGVhciBvdXQgYW55IGxvYWRlckRhdGEgZm9yIHRoZVxuICAvLyB0aHJvd2luZyByb3V0ZVxuXG4gIGlmIChwZW5kaW5nRXJyb3IpIHtcbiAgICBlcnJvcnMgPSBwZW5kaW5nRXJyb3I7XG4gICAgbG9hZGVyRGF0YVtPYmplY3Qua2V5cyhwZW5kaW5nRXJyb3IpWzBdXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9hZGVyRGF0YSxcbiAgICBlcnJvcnMsXG4gICAgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSB8fCAyMDAsXG4gICAgbG9hZGVySGVhZGVyc1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0Vycm9yLCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcykge1xuICBsZXQge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzXG4gIH0gPSBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHBlbmRpbmdFcnJvciwgYWN0aXZlRGVmZXJyZWRzKTsgLy8gUHJvY2VzcyByZXN1bHRzIGZyb20gb3VyIHJldmFsaWRhdGluZyBmZXRjaGVyc1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQge1xuICAgICAga2V5LFxuICAgICAgbWF0Y2hcbiAgICB9ID0gcmV2YWxpZGF0aW5nRmV0Y2hlcnNbaW5kZXhdO1xuICAgIGludmFyaWFudChmZXRjaGVyUmVzdWx0cyAhPT0gdW5kZWZpbmVkICYmIGZldGNoZXJSZXN1bHRzW2luZGV4XSAhPT0gdW5kZWZpbmVkLCBcIkRpZCBub3QgZmluZCBjb3JyZXNwb25kaW5nIGZldGNoZXIgcmVzdWx0XCIpO1xuICAgIGxldCByZXN1bHQgPSBmZXRjaGVyUmVzdWx0c1tpbmRleF07IC8vIFByb2Nlc3MgZmV0Y2hlciBub24tcmVkaXJlY3QgZXJyb3JzXG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgbWF0Y2ggPT0gbnVsbCA/IHZvaWQgMCA6IG1hdGNoLnJvdXRlLmlkKTtcblxuICAgICAgaWYgKCEoZXJyb3JzICYmIGVycm9yc1tib3VuZGFyeU1hdGNoLnJvdXRlLmlkXSkpIHtcbiAgICAgICAgZXJyb3JzID0gX2V4dGVuZHMoe30sIGVycm9ycywge1xuICAgICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5mZXRjaGVycy5kZWxldGUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU2hvdWxkIG5ldmVyIGdldCBoZXJlLCByZWRpcmVjdHMgc2hvdWxkIGdldCBwcm9jZXNzZWQgYWJvdmUsIGJ1dCB3ZVxuICAgICAgLy8ga2VlcCB0aGlzIHRvIHR5cGUgbmFycm93IHRvIGEgc3VjY2VzcyByZXN1bHQgaW4gdGhlIGVsc2VcbiAgICAgIGludmFyaWFudChmYWxzZSwgXCJVbmhhbmRsZWQgZmV0Y2hlciByZXZhbGlkYXRpb24gcmVkaXJlY3RcIik7XG4gICAgfSBlbHNlIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFNob3VsZCBuZXZlciBnZXQgaGVyZSwgZGVmZXJyZWQgZGF0YSBzaG91bGQgYmUgYXdhaXRlZCBmb3IgZmV0Y2hlcnNcbiAgICAgIC8vIGluIHJlc29sdmVEZWZlcnJlZFJlc3VsdHNcbiAgICAgIGludmFyaWFudChmYWxzZSwgXCJVbmhhbmRsZWQgZmV0Y2hlciBkZWZlcnJlZCBkYXRhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZG9uZUZldGNoZXIgPSB7XG4gICAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlTG9hZGVyRGF0YShsb2FkZXJEYXRhLCBuZXdMb2FkZXJEYXRhLCBtYXRjaGVzLCBlcnJvcnMpIHtcbiAgbGV0IG1lcmdlZExvYWRlckRhdGEgPSBfZXh0ZW5kcyh7fSwgbmV3TG9hZGVyRGF0YSk7XG5cbiAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgIGxldCBpZCA9IG1hdGNoLnJvdXRlLmlkO1xuXG4gICAgaWYgKG5ld0xvYWRlckRhdGEuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICBpZiAobmV3TG9hZGVyRGF0YVtpZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtZXJnZWRMb2FkZXJEYXRhW2lkXSA9IG5ld0xvYWRlckRhdGFbaWRdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9hZGVyRGF0YVtpZF0gIT09IHVuZGVmaW5lZCAmJiBtYXRjaC5yb3V0ZS5sb2FkZXIpIHtcbiAgICAgIC8vIFByZXNlcnZlIGV4aXN0aW5nIGtleXMgbm90IGluY2x1ZGVkIGluIG5ld0xvYWRlckRhdGEgYW5kIHdoZXJlIGEgbG9hZGVyXG4gICAgICAvLyB3YXNuJ3QgcmVtb3ZlZCBieSBITVJcbiAgICAgIG1lcmdlZExvYWRlckRhdGFbaWRdID0gbG9hZGVyRGF0YVtpZF07XG4gICAgfVxuXG4gICAgaWYgKGVycm9ycyAmJiBlcnJvcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAvLyBEb24ndCBrZWVwIGFueSBsb2FkZXIgZGF0YSBiZWxvdyB0aGUgYm91bmRhcnlcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZWRMb2FkZXJEYXRhO1xufSAvLyBGaW5kIHRoZSBuZWFyZXN0IGVycm9yIGJvdW5kYXJ5LCBsb29raW5nIHVwd2FyZHMgZnJvbSB0aGUgbGVhZiByb3V0ZSAob3IgdGhlXG4vLyByb3V0ZSBzcGVjaWZpZWQgYnkgcm91dGVJZCkgZm9yIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGVycm9yIGJvdW5kYXJ5LFxuLy8gZGVmYXVsdGluZyB0byB0aGUgcm9vdCBtYXRjaFxuXG5cbmZ1bmN0aW9uIGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgcm91dGVJZCkge1xuICBsZXQgZWxpZ2libGVNYXRjaGVzID0gcm91dGVJZCA/IG1hdGNoZXMuc2xpY2UoMCwgbWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSArIDEpIDogWy4uLm1hdGNoZXNdO1xuICByZXR1cm4gZWxpZ2libGVNYXRjaGVzLnJldmVyc2UoKS5maW5kKG0gPT4gbS5yb3V0ZS5oYXNFcnJvckJvdW5kYXJ5ID09PSB0cnVlKSB8fCBtYXRjaGVzWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKHJvdXRlcykge1xuICAvLyBQcmVmZXIgYSByb290IGxheW91dCByb3V0ZSBpZiBwcmVzZW50LCBvdGhlcndpc2Ugc2hpbSBpbiBhIHJvdXRlIG9iamVjdFxuICBsZXQgcm91dGUgPSByb3V0ZXMuZmluZChyID0+IHIuaW5kZXggfHwgIXIucGF0aCB8fCByLnBhdGggPT09IFwiL1wiKSB8fCB7XG4gICAgaWQ6IFwiX19zaGltLWVycm9yLXJvdXRlX19cIlxuICB9O1xuICByZXR1cm4ge1xuICAgIG1hdGNoZXM6IFt7XG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgcGF0aG5hbWU6IFwiXCIsXG4gICAgICBwYXRobmFtZUJhc2U6IFwiXCIsXG4gICAgICByb3V0ZVxuICAgIH1dLFxuICAgIHJvdXRlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEludGVybmFsUm91dGVyRXJyb3Ioc3RhdHVzLCBfdGVtcDQpIHtcbiAgbGV0IHtcbiAgICBwYXRobmFtZSxcbiAgICByb3V0ZUlkLFxuICAgIG1ldGhvZCxcbiAgICB0eXBlXG4gIH0gPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0O1xuICBsZXQgc3RhdHVzVGV4dCA9IFwiVW5rbm93biBTZXJ2ZXIgRXJyb3JcIjtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiVW5rbm93biBAcmVtaXgtcnVuL3JvdXRlciBlcnJvclwiO1xuXG4gIGlmIChzdGF0dXMgPT09IDQwMCkge1xuICAgIHN0YXR1c1RleHQgPSBcIkJhZCBSZXF1ZXN0XCI7XG5cbiAgICBpZiAobWV0aG9kICYmIHBhdGhuYW1lICYmIHJvdXRlSWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG1hZGUgYSBcIiArIG1ldGhvZCArIFwiIHJlcXVlc3QgdG8gXFxcIlwiICsgcGF0aG5hbWUgKyBcIlxcXCIgYnV0IFwiICsgKFwiZGlkIG5vdCBwcm92aWRlIGEgYGxvYWRlcmAgZm9yIHJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIsIFwiKSArIFwic28gdGhlcmUgaXMgbm8gd2F5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC5cIjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGVmZXItYWN0aW9uXCIpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiZGVmZXIoKSBpcyBub3Qgc3VwcG9ydGVkIGluIGFjdGlvbnNcIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJGb3JiaWRkZW5cIjtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIlJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIgZG9lcyBub3QgbWF0Y2ggVVJMIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiXCI7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDQpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJOb3QgRm91bmRcIjtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIk5vIHJvdXRlIG1hdGNoZXMgVVJMIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiXCI7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDUpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJNZXRob2QgTm90IEFsbG93ZWRcIjtcblxuICAgIGlmIChtZXRob2QgJiYgcGF0aG5hbWUgJiYgcm91dGVJZCkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJZb3UgbWFkZSBhIFwiICsgbWV0aG9kLnRvVXBwZXJDYXNlKCkgKyBcIiByZXF1ZXN0IHRvIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiIGJ1dCBcIiArIChcImRpZCBub3QgcHJvdmlkZSBhbiBgYWN0aW9uYCBmb3Igcm91dGUgXFxcIlwiICsgcm91dGVJZCArIFwiXFxcIiwgXCIpICsgXCJzbyB0aGVyZSBpcyBubyB3YXkgdG8gaGFuZGxlIHRoZSByZXF1ZXN0LlwiO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIkludmFsaWQgcmVxdWVzdCBtZXRob2QgXFxcIlwiICsgbWV0aG9kLnRvVXBwZXJDYXNlKCkgKyBcIlxcXCJcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yUmVzcG9uc2Uoc3RhdHVzIHx8IDUwMCwgc3RhdHVzVGV4dCwgbmV3IEVycm9yKGVycm9yTWVzc2FnZSksIHRydWUpO1xufSAvLyBGaW5kIGFueSByZXR1cm5lZCByZWRpcmVjdCBlcnJvcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGxvd2VzdCBtYXRjaFxuXG5cbmZ1bmN0aW9uIGZpbmRSZWRpcmVjdChyZXN1bHRzKSB7XG4gIGZvciAobGV0IGkgPSByZXN1bHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcEhhc2hGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXJzZWRQYXRoID0gdHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgocGF0aCkgOiBwYXRoO1xuICByZXR1cm4gY3JlYXRlUGF0aChfZXh0ZW5kcyh7fSwgcGFyc2VkUGF0aCwge1xuICAgIGhhc2g6IFwiXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBpc0hhc2hDaGFuZ2VPbmx5KGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCAhPT0gYi5oYXNoO1xufVxuXG5mdW5jdGlvbiBpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnR5cGUgPT09IFJlc3VsdFR5cGUuZGVmZXJyZWQ7XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3JSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcjtcbn1cblxuZnVuY3Rpb24gaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIChyZXN1bHQgJiYgcmVzdWx0LnR5cGUpID09PSBSZXN1bHRUeXBlLnJlZGlyZWN0O1xufVxuXG5mdW5jdGlvbiBpc0RlZmVycmVkRGF0YSh2YWx1ZSkge1xuICBsZXQgZGVmZXJyZWQgPSB2YWx1ZTtcbiAgcmV0dXJuIGRlZmVycmVkICYmIHR5cGVvZiBkZWZlcnJlZCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZGVmZXJyZWQuZGF0YSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZGVmZXJyZWQuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGRlZmVycmVkLmNhbmNlbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBkZWZlcnJlZC5yZXNvbHZlRGF0YSA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG5mdW5jdGlvbiBpc1Jlc3BvbnNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS5zdGF0dXMgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHZhbHVlLnN0YXR1c1RleHQgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlLmhlYWRlcnMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLmJvZHkgIT09IFwidW5kZWZpbmVkXCI7XG59XG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3RSZXNwb25zZShyZXN1bHQpIHtcbiAgaWYgKCFpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgc3RhdHVzID0gcmVzdWx0LnN0YXR1cztcbiAgbGV0IGxvY2F0aW9uID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIik7XG4gIHJldHVybiBzdGF0dXMgPj0gMzAwICYmIHN0YXR1cyA8PSAzOTkgJiYgbG9jYXRpb24gIT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNRdWVyeVJvdXRlUmVzcG9uc2Uob2JqKSB7XG4gIHJldHVybiBvYmogJiYgaXNSZXNwb25zZShvYmoucmVzcG9uc2UpICYmIChvYmoudHlwZSA9PT0gUmVzdWx0VHlwZS5kYXRhIHx8IFJlc3VsdFR5cGUuZXJyb3IpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gdmFsaWRSZXF1ZXN0TWV0aG9kcy5oYXMobWV0aG9kLnRvTG93ZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBpc011dGF0aW9uTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gdmFsaWRNdXRhdGlvbk1ldGhvZHMuaGFzKG1ldGhvZC50b0xvd2VyQ2FzZSgpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgc2lnbmFsLCBpc0ZldGNoZXIsIGN1cnJlbnRMb2FkZXJEYXRhKSB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXN1bHRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2luZGV4XTtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaGVzVG9Mb2FkW2luZGV4XTsgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG1hdGNoLCB0aGVuIHdlIGNhbiBoYXZlIGEgZGVmZXJyZWQgcmVzdWx0IHRvIGRvXG4gICAgLy8gYW55dGhpbmcgd2l0aC4gIFRoaXMgaXMgZm9yIHJldmFsaWRhdGluZyBmZXRjaGVycyB3aGVyZSB0aGUgcm91dGUgd2FzXG4gICAgLy8gcmVtb3ZlZCBkdXJpbmcgSE1SXG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudE1hdGNoID0gY3VycmVudE1hdGNoZXMuZmluZChtID0+IG0ucm91dGUuaWQgPT09IG1hdGNoLnJvdXRlLmlkKTtcbiAgICBsZXQgaXNSZXZhbGlkYXRpbmdMb2FkZXIgPSBjdXJyZW50TWF0Y2ggIT0gbnVsbCAmJiAhaXNOZXdSb3V0ZUluc3RhbmNlKGN1cnJlbnRNYXRjaCwgbWF0Y2gpICYmIChjdXJyZW50TG9hZGVyRGF0YSAmJiBjdXJyZW50TG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0pICE9PSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpICYmIChpc0ZldGNoZXIgfHwgaXNSZXZhbGlkYXRpbmdMb2FkZXIpKSB7XG4gICAgICAvLyBOb3RlOiB3ZSBkbyBub3QgaGF2ZSB0byB0b3VjaCBhY3RpdmVEZWZlcnJlZHMgaGVyZSBzaW5jZSB3ZSByYWNlIHRoZW1cbiAgICAgIC8vIGFnYWluc3QgdGhlIHNpZ25hbCBpbiByZXNvbHZlRGVmZXJyZWREYXRhIGFuZCB0aGV5J2xsIGdldCBhYm9ydGVkXG4gICAgICAvLyB0aGVyZSBpZiBuZWVkZWRcbiAgICAgIGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBzaWduYWwsIGlzRmV0Y2hlcikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSByZXN1bHQgfHwgcmVzdWx0c1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZXNvbHZlRGVmZXJyZWREYXRhKHJlc3VsdCwgc2lnbmFsLCB1bndyYXApIHtcbiAgaWYgKHVud3JhcCA9PT0gdm9pZCAwKSB7XG4gICAgdW53cmFwID0gZmFsc2U7XG4gIH1cblxuICBsZXQgYWJvcnRlZCA9IGF3YWl0IHJlc3VsdC5kZWZlcnJlZERhdGEucmVzb2x2ZURhdGEoc2lnbmFsKTtcblxuICBpZiAoYWJvcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh1bndyYXApIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgICBkYXRhOiByZXN1bHQuZGVmZXJyZWREYXRhLnVud3JhcHBlZERhdGFcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSGFuZGxlIGFueSBUcmFja2VkUHJvbWlzZS5fZXJyb3IgdmFsdWVzIGVuY291bnRlcmVkIHdoaWxlIHVud3JhcHBpbmdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgIGRhdGE6IHJlc3VsdC5kZWZlcnJlZERhdGEuZGF0YVxuICB9O1xufVxuXG5mdW5jdGlvbiBoYXNOYWtlZEluZGV4UXVlcnkoc2VhcmNoKSB7XG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCkuZ2V0QWxsKFwiaW5kZXhcIikuc29tZSh2ID0+IHYgPT09IFwiXCIpO1xufSAvLyBOb3RlOiBUaGlzIHNob3VsZCBtYXRjaCB0aGUgZm9ybWF0IGV4cG9ydGVkIGJ5IHVzZU1hdGNoZXMsIHNvIGlmIHlvdSBjaGFuZ2Vcbi8vIHRoaXMgcGxlYXNlIGFsc28gY2hhbmdlIHRoYXQgOikgIEV2ZW50dWFsbHkgd2UnbGwgRFJZIHRoaXMgdXBcblxuXG5mdW5jdGlvbiBjcmVhdGVVc2VNYXRjaGVzTWF0Y2gobWF0Y2gsIGxvYWRlckRhdGEpIHtcbiAgbGV0IHtcbiAgICByb3V0ZSxcbiAgICBwYXRobmFtZSxcbiAgICBwYXJhbXNcbiAgfSA9IG1hdGNoO1xuICByZXR1cm4ge1xuICAgIGlkOiByb3V0ZS5pZCxcbiAgICBwYXRobmFtZSxcbiAgICBwYXJhbXMsXG4gICAgZGF0YTogbG9hZGVyRGF0YVtyb3V0ZS5pZF0sXG4gICAgaGFuZGxlOiByb3V0ZS5oYW5kbGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pIHtcbiAgbGV0IHNlYXJjaCA9IHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbikuc2VhcmNoIDogbG9jYXRpb24uc2VhcmNoO1xuXG4gIGlmIChtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUuaW5kZXggJiYgaGFzTmFrZWRJbmRleFF1ZXJ5KHNlYXJjaCB8fCBcIlwiKSkge1xuICAgIC8vIFJldHVybiB0aGUgbGVhZiBpbmRleCByb3V0ZSB3aGVuIGluZGV4IGlzIHByZXNlbnRcbiAgICByZXR1cm4gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICB9IC8vIE90aGVyd2lzZSBncmFiIHRoZSBkZWVwZXN0IFwicGF0aCBjb250cmlidXRpbmdcIiBtYXRjaCAoaWdub3JpbmcgaW5kZXggYW5kXG4gIC8vIHBhdGhsZXNzIGxheW91dCByb3V0ZXMpXG5cblxuICBsZXQgcGF0aE1hdGNoZXMgPSBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKTtcbiAgcmV0dXJuIHBhdGhNYXRjaGVzW3BhdGhNYXRjaGVzLmxlbmd0aCAtIDFdO1xufSAvLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQWJvcnRlZERlZmVycmVkRXJyb3IsIEFjdGlvbiwgRXJyb3JSZXNwb25zZSwgSURMRV9CTE9DS0VSLCBJRExFX0ZFVENIRVIsIElETEVfTkFWSUdBVElPTiwgVU5TQUZFX0RFRkVSUkVEX1NZTUJPTCwgRGVmZXJyZWREYXRhIGFzIFVOU0FGRV9EZWZlcnJlZERhdGEsIGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMgYXMgVU5TQUZFX2NvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMsIGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzIGFzIFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcywgaW52YXJpYW50IGFzIFVOU0FGRV9pbnZhcmlhbnQsIHdhcm5pbmcgYXMgVU5TQUZFX3dhcm5pbmcsIGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgY3JlYXRlUGF0aCwgY3JlYXRlUm91dGVyLCBjcmVhdGVTdGF0aWNIYW5kbGVyLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBnZXRTdGF0aWNDb250ZXh0RnJvbUVycm9yLCBnZXRUb1BhdGhuYW1lLCBpc0RlZmVycmVkRGF0YSwgaXNSb3V0ZUVycm9yUmVzcG9uc2UsIGpvaW5QYXRocywganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgbm9ybWFsaXplUGF0aG5hbWUsIHBhcnNlUGF0aCwgcmVkaXJlY3QsIHJlc29sdmVQYXRoLCByZXNvbHZlVG8sIHN0cmlwQmFzZW5hbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi9NYWluSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcclxuaW1wb3J0IFNlY3Rpb25zIGZyb20gXCIuL1NlY3Rpb25zXCJcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIlxyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiXHJcbmltcG9ydCBDb250YWN0VVMgZnJvbSBcIi4vQ29udGFjdFVTXCJcclxuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9QcmljZXNcIlxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPE1haW5IZWFkZXIgLz5cclxuICAgICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbnMgLz5cclxuICAgICAgICAgICAgPENvbnRhY3RVUyAvPlxyXG4gICAgICAgICAgICA8VE9QIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCIvKipcbiAqIFJlYWN0IFJvdXRlciBET00gdjYuMTAuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVTlNBRkVfZGV0ZWN0RXJyb3JCb3VuZGFyeSwgUm91dGVyLCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIHVzZUhyZWYsIHVzZVJlc29sdmVkUGF0aCwgdXNlTG9jYXRpb24sIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCB1c2VOYXZpZ2F0ZSwgY3JlYXRlUGF0aCwgVU5TQUZFX1JvdXRlQ29udGV4dCwgdXNlTWF0Y2hlcywgdXNlTmF2aWdhdGlvbiwgdW5zdGFibGVfdXNlQmxvY2tlciwgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBd2FpdCwgTWVtb3J5Um91dGVyLCBOYXZpZ2F0ZSwgTmF2aWdhdGlvblR5cGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVyUHJvdmlkZXIsIFJvdXRlcywgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0LCBVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCwgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBVTlNBRkVfUm91dGVDb250ZXh0LCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVuZGVyTWF0Y2hlcywgcmVzb2x2ZVBhdGgsIHVuc3RhYmxlX3VzZUJsb2NrZXIsIHVzZUFjdGlvbkRhdGEsIHVzZUFzeW5jRXJyb3IsIHVzZUFzeW5jVmFsdWUsIHVzZUhyZWYsIHVzZUluUm91dGVyQ29udGV4dCwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvbiwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVJldmFsaWRhdG9yLCB1c2VSb3V0ZUVycm9yLCB1c2VSb3V0ZUxvYWRlckRhdGEsIHVzZVJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgRXJyb3JSZXNwb25zZSwgc3RyaXBCYXNlbmFtZSwgVU5TQUZFX3dhcm5pbmcsIFVOU0FGRV9pbnZhcmlhbnQsIGpvaW5QYXRocyB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuY29uc3QgZGVmYXVsdE1ldGhvZCA9IFwiZ2V0XCI7XG5jb25zdCBkZWZhdWx0RW5jVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5mdW5jdGlvbiBpc0h0bWxFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdC50YWdOYW1lID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNCdXR0b25FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiYnV0dG9uXCI7XG59XG5mdW5jdGlvbiBpc0Zvcm1FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiZm9ybVwiO1xufVxuZnVuY3Rpb24gaXNJbnB1dEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAhdGFyZ2V0IHx8IHRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJiAvLyBMZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBJZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICA7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IHVzaW5nIHRoZSBnaXZlbiBpbml0aWFsaXplci5cbiAqXG4gKiBUaGlzIGlzIGlkZW50aWNhbCB0byBgbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0KWAgZXhjZXB0IGl0IGFsc29cbiAqIHN1cHBvcnRzIGFycmF5cyBhcyB2YWx1ZXMgaW4gdGhlIG9iamVjdCBmb3JtIG9mIHRoZSBpbml0aWFsaXplclxuICogaW5zdGVhZCBvZiBqdXN0IHN0cmluZ3MuIFRoaXMgaXMgY29udmVuaWVudCB3aGVuIHlvdSBuZWVkIG11bHRpcGxlXG4gKiB2YWx1ZXMgZm9yIGEgZ2l2ZW4ga2V5LCBidXQgZG9uJ3Qgd2FudCB0byB1c2UgYW4gYXJyYXkgaW5pdGlhbGl6ZXIuXG4gKlxuICogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2Y6XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gKiAgICAgWydzb3J0JywgJ25hbWUnXSxcbiAqICAgICBbJ3NvcnQnLCAncHJpY2UnXVxuICogICBdKTtcbiAqXG4gKiB5b3UgY2FuIGRvOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh7XG4gKiAgICAgc29ydDogWyduYW1lJywgJ3ByaWNlJ11cbiAqICAgfSk7XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoUGFyYW1zKGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModHlwZW9mIGluaXQgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShpbml0KSB8fCBpbml0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID8gaW5pdCA6IE9iamVjdC5rZXlzKGluaXQpLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gaW5pdFtrZXldO1xuICAgIHJldHVybiBtZW1vLmNvbmNhdChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCh2ID0+IFtrZXksIHZdKSA6IFtba2V5LCB2YWx1ZV1dKTtcbiAgfSwgW10pKTtcbn1cbmZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uU2VhcmNoLCBkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMobG9jYXRpb25TZWFyY2gpO1xuXG4gIGlmIChkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIGRlZmF1bHRTZWFyY2hQYXJhbXMua2V5cygpKSB7XG4gICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoa2V5KSkge1xuICAgICAgICBkZWZhdWx0U2VhcmNoUGFyYW1zLmdldEFsbChrZXkpLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG5mdW5jdGlvbiBnZXRGb3JtU3VibWlzc2lvbkluZm8odGFyZ2V0LCBkZWZhdWx0QWN0aW9uLCBvcHRpb25zKSB7XG4gIGxldCBtZXRob2Q7XG4gIGxldCBhY3Rpb247XG4gIGxldCBlbmNUeXBlO1xuICBsZXQgZm9ybURhdGE7XG5cbiAgaWYgKGlzRm9ybUVsZW1lbnQodGFyZ2V0KSkge1xuICAgIGxldCBzdWJtaXNzaW9uVHJpZ2dlciA9IG9wdGlvbnMuc3VibWlzc2lvblRyaWdnZXI7XG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgZGVmYXVsdEFjdGlvbjtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIpIHx8IGRlZmF1bHRFbmNUeXBlO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG5cbiAgICBpZiAoc3VibWlzc2lvblRyaWdnZXIgJiYgc3VibWlzc2lvblRyaWdnZXIubmFtZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKHN1Ym1pc3Npb25UcmlnZ2VyLm5hbWUsIHN1Ym1pc3Npb25UcmlnZ2VyLnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCdXR0b25FbGVtZW50KHRhcmdldCkgfHwgaXNJbnB1dEVsZW1lbnQodGFyZ2V0KSAmJiAodGFyZ2V0LnR5cGUgPT09IFwic3VibWl0XCIgfHwgdGFyZ2V0LnR5cGUgPT09IFwiaW1hZ2VcIikpIHtcbiAgICBsZXQgZm9ybSA9IHRhcmdldC5mb3JtO1xuXG4gICAgaWYgKGZvcm0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBhIDxidXR0b24+IG9yIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiPiB3aXRob3V0IGEgPGZvcm0+XCIpO1xuICAgIH0gLy8gPGJ1dHRvbj4vPGlucHV0IHR5cGU9XCJzdWJtaXRcIj4gbWF5IG92ZXJyaWRlIGF0dHJpYnV0ZXMgb2YgPGZvcm0+XG5cblxuICAgIG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwibWV0aG9kXCIpIHx8IGRlZmF1bHRNZXRob2Q7XG4gICAgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1hY3Rpb25cIikgfHwgZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgZGVmYXVsdEFjdGlvbjtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtZW5jdHlwZVwiKSB8fCBmb3JtLmdldEF0dHJpYnV0ZShcImVuY3R5cGVcIikgfHwgZGVmYXVsdEVuY1R5cGU7XG4gICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7IC8vIEluY2x1ZGUgbmFtZSArIHZhbHVlIGZyb20gYSA8YnV0dG9uPiwgYXBwZW5kaW5nIGluIGNhc2UgdGhlIGJ1dHRvbiBuYW1lXG4gICAgLy8gbWF0Y2hlcyBhbiBleGlzdGluZyBpbnB1dCBuYW1lXG5cbiAgICBpZiAodGFyZ2V0Lm5hbWUpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXQubmFtZSwgdGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNIdG1sRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBlbGVtZW50IHRoYXQgaXMgbm90IDxmb3JtPiwgPGJ1dHRvbj4sIG9yIFwiICsgXCI8aW5wdXQgdHlwZT1cXFwic3VibWl0fGltYWdlXFxcIj5cIik7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgZGVmYXVsdE1ldGhvZDtcbiAgICBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBkZWZhdWx0QWN0aW9uO1xuICAgIGVuY1R5cGUgPSBvcHRpb25zLmVuY1R5cGUgfHwgZGVmYXVsdEVuY1R5cGU7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIGZvcm1EYXRhID0gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IFtuYW1lLCB2YWx1ZV0gb2YgdGFyZ2V0KSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHRhcmdldCkpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdGFyZ2V0W25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCB7XG4gICAgcHJvdG9jb2wsXG4gICAgaG9zdFxuICB9ID0gd2luZG93LmxvY2F0aW9uO1xuICBsZXQgdXJsID0gbmV3IFVSTChhY3Rpb24sIHByb3RvY29sICsgXCIvL1wiICsgaG9zdCk7XG4gIHJldHVybiB7XG4gICAgdXJsLFxuICAgIG1ldGhvZDogbWV0aG9kLnRvTG93ZXJDYXNlKCksXG4gICAgZW5jVHlwZSxcbiAgICBmb3JtRGF0YVxuICB9O1xufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJvbkNsaWNrXCIsIFwicmVsYXRpdmVcIiwgXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJzdGF0ZVwiLCBcInRhcmdldFwiLCBcInRvXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdLFxuICAgICAgX2V4Y2x1ZGVkMiA9IFtcImFyaWEtY3VycmVudFwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJlbmRcIiwgXCJzdHlsZVwiLCBcInRvXCIsIFwiY2hpbGRyZW5cIl0sXG4gICAgICBfZXhjbHVkZWQzID0gW1wicmVsb2FkRG9jdW1lbnRcIiwgXCJyZXBsYWNlXCIsIFwibWV0aG9kXCIsIFwiYWN0aW9uXCIsIFwib25TdWJtaXRcIiwgXCJmZXRjaGVyS2V5XCIsIFwicm91dGVJZFwiLCBcInJlbGF0aXZlXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdO1xuZnVuY3Rpb24gY3JlYXRlQnJvd3NlclJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSxcbiAgICBoaXN0b3J5OiBjcmVhdGVCcm93c2VySGlzdG9yeSh7XG4gICAgICB3aW5kb3c6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMud2luZG93XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogKG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaHlkcmF0aW9uRGF0YSkgfHwgcGFyc2VIeWRyYXRpb25EYXRhKCksXG4gICAgcm91dGVzLFxuICAgIGRldGVjdEVycm9yQm91bmRhcnk6IFVOU0FGRV9kZXRlY3RFcnJvckJvdW5kYXJ5XG4gIH0pLmluaXRpYWxpemUoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hSb3V0ZXIocm91dGVzLCBvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgIGJhc2VuYW1lOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmJhc2VuYW1lLFxuICAgIGZ1dHVyZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5mdXR1cmUsXG4gICAgaGlzdG9yeTogY3JlYXRlSGFzaEhpc3Rvcnkoe1xuICAgICAgd2luZG93OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLndpbmRvd1xuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEpIHx8IHBhcnNlSHlkcmF0aW9uRGF0YSgpLFxuICAgIHJvdXRlcyxcbiAgICBkZXRlY3RFcnJvckJvdW5kYXJ5OiBVTlNBRkVfZGV0ZWN0RXJyb3JCb3VuZGFyeVxuICB9KS5pbml0aWFsaXplKCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHlkcmF0aW9uRGF0YSgpIHtcbiAgdmFyIF93aW5kb3c7XG5cbiAgbGV0IHN0YXRlID0gKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93Ll9fc3RhdGljUm91dGVySHlkcmF0aW9uRGF0YTtcblxuICBpZiAoc3RhdGUgJiYgc3RhdGUuZXJyb3JzKSB7XG4gICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgIGVycm9yczogZGVzZXJpYWxpemVFcnJvcnMoc3RhdGUuZXJyb3JzKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9ycyhlcnJvcnMpIHtcbiAgaWYgKCFlcnJvcnMpIHJldHVybiBudWxsO1xuICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGVycm9ycyk7XG4gIGxldCBzZXJpYWxpemVkID0ge307XG5cbiAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBlbnRyaWVzKSB7XG4gICAgLy8gSGV5IHlvdSEgIElmIHlvdSBjaGFuZ2UgdGhpcywgcGxlYXNlIGNoYW5nZSB0aGUgY29ycmVzcG9uZGluZyBsb2dpYyBpblxuICAgIC8vIHNlcmlhbGl6ZUVycm9ycyBpbiByZWFjdC1yb3V0ZXItZG9tL3NlcnZlci50c3ggOilcbiAgICBpZiAodmFsICYmIHZhbC5fX3R5cGUgPT09IFwiUm91dGVFcnJvclJlc3BvbnNlXCIpIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IG5ldyBFcnJvclJlc3BvbnNlKHZhbC5zdGF0dXMsIHZhbC5zdGF0dXNUZXh0LCB2YWwuZGF0YSwgdmFsLmludGVybmFsID09PSB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbCAmJiB2YWwuX190eXBlID09PSBcIkVycm9yXCIpIHtcbiAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcih2YWwubWVzc2FnZSk7IC8vIFdpcGUgYXdheSB0aGUgY2xpZW50LXNpZGUgc3RhY2sgdHJhY2UuICBOb3RoaW5nIHRvIGZpbGwgaXQgaW4gd2l0aFxuICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBzZXJpYWxpemUgU1NSIHN0YWNrIHRyYWNlcyBmb3Igc2VjdXJpdHkgcmVhc29uc1xuXG4gICAgICBlcnJvci5zdGFjayA9IFwiXCI7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVkO1xufVxuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICovXG5cblxuZnVuY3Rpb24gQnJvd3NlclJvdXRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgICAgIHdpbmRvdyxcbiAgICAgIHY1Q29tcGF0OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIGZvciB1c2UgaW4gd2ViIGJyb3dzZXJzLiBTdG9yZXMgdGhlIGxvY2F0aW9uIGluIHRoZSBoYXNoXG4gKiBwb3J0aW9uIG9mIHRoZSBVUkwgc28gaXQgaXMgbm90IHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqL1xuXG5mdW5jdGlvbiBIYXNoUm91dGVyKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmMjtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gICAgICB3aW5kb3csXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG4vKipcbiAqIEEgYDxSb3V0ZXI+YCB0aGF0IGFjY2VwdHMgYSBwcmUtaW5zdGFudGlhdGVkIGhpc3Rvcnkgb2JqZWN0LiBJdCdzIGltcG9ydGFudFxuICogdG8gbm90ZSB0aGF0IHVzaW5nIHlvdXIgb3duIGhpc3Rvcnkgb2JqZWN0IGlzIGhpZ2hseSBkaXNjb3VyYWdlZCBhbmQgbWF5IGFkZFxuICogdHdvIHZlcnNpb25zIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdG8geW91ciBidW5kbGVzIHVubGVzcyB5b3UgdXNlIHRoZSBzYW1lXG4gKiB2ZXJzaW9uIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdGhhdCBSZWFjdCBSb3V0ZXIgdXNlcyBpbnRlcm5hbGx5LlxuICovXG5cbmZ1bmN0aW9uIEhpc3RvcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBoaXN0b3J5XG4gIH0gPSBfcmVmMztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhpc3RvcnlSb3V0ZXIuZGlzcGxheU5hbWUgPSBcInVuc3RhYmxlX0hpc3RvcnlSb3V0ZXJcIjtcbn1cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBBQlNPTFVURV9VUkxfUkVHRVggPSAvXig/OlthLXpdW2EtejAtOSsuLV0qOnxcXC9cXC8pL2k7XG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG5jb25zdCBMaW5rID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua1dpdGhSZWYoX3JlZjQsIHJlZikge1xuICBsZXQge1xuICAgIG9uQ2xpY2ssXG4gICAgcmVsYXRpdmUsXG4gICAgcmVsb2FkRG9jdW1lbnQsXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgdG8sXG4gICAgcHJldmVudFNjcm9sbFJlc2V0XG4gIH0gPSBfcmVmNCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgX2V4Y2x1ZGVkKTtcblxuICBsZXQge1xuICAgIGJhc2VuYW1lXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7IC8vIFJlbmRlcmVkIGludG8gPGEgaHJlZj4gZm9yIGFic29sdXRlIFVSTHNcblxuICBsZXQgYWJzb2x1dGVIcmVmO1xuICBsZXQgaXNFeHRlcm5hbCA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgJiYgQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QodG8pKSB7XG4gICAgLy8gUmVuZGVyIHRoZSBhYnNvbHV0ZSBocmVmIHNlcnZlci0gYW5kIGNsaWVudC1zaWRlXG4gICAgYWJzb2x1dGVIcmVmID0gdG87IC8vIE9ubHkgY2hlY2sgZm9yIGV4dGVybmFsIG9yaWdpbnMgY2xpZW50LXNpZGVcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGxldCBjdXJyZW50VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICBsZXQgdGFyZ2V0VXJsID0gdG8uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgdG8pIDogbmV3IFVSTCh0byk7XG4gICAgICBsZXQgcGF0aCA9IHN0cmlwQmFzZW5hbWUodGFyZ2V0VXJsLnBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRVcmwub3JpZ2luID09PSBjdXJyZW50VXJsLm9yaWdpbiAmJiBwYXRoICE9IG51bGwpIHtcbiAgICAgICAgLy8gU3RyaXAgdGhlIHByb3RvY29sL29yaWdpbi9iYXNlbmFtZSBmb3Igc2FtZS1vcmlnaW4gYWJzb2x1dGUgVVJMc1xuICAgICAgICB0byA9IHBhdGggKyB0YXJnZXRVcmwuc2VhcmNoICsgdGFyZ2V0VXJsLmhhc2g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0V4dGVybmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVuZGVyZWQgaW50byA8YSBocmVmPiBmb3IgcmVsYXRpdmUgVVJMc1xuXG5cbiAgbGV0IGhyZWYgPSB1c2VIcmVmKHRvLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBpbnRlcm5hbE9uQ2xpY2sgPSB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCB7XG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHJlbGF0aXZlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBpbnRlcm5hbE9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnRcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaHJlZjogYWJzb2x1dGVIcmVmIHx8IGhyZWYsXG4gICAgICBvbkNsaWNrOiBpc0V4dGVybmFsIHx8IHJlbG9hZERvY3VtZW50ID8gb25DbGljayA6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiByZWYsXG4gICAgICB0YXJnZXQ6IHRhcmdldFxuICAgIH0pKVxuICApO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTGluay5kaXNwbGF5TmFtZSA9IFwiTGlua1wiO1xufVxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xuXG5cbmNvbnN0IE5hdkxpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZMaW5rV2l0aFJlZihfcmVmNSwgcmVmKSB7XG4gIGxldCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnRQcm9wID0gXCJwYWdlXCIsXG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCA9IFwiXCIsXG4gICAgZW5kID0gZmFsc2UsXG4gICAgc3R5bGU6IHN0eWxlUHJvcCxcbiAgICB0byxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIF9leGNsdWRlZDIpO1xuXG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmU6IHJlc3QucmVsYXRpdmVcbiAgfSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZXJTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgdG9QYXRobmFtZSA9IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihwYXRoKS5wYXRobmFtZSA6IHBhdGgucGF0aG5hbWU7XG4gIGxldCBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gIGxldCBuZXh0TG9jYXRpb25QYXRobmFtZSA9IHJvdXRlclN0YXRlICYmIHJvdXRlclN0YXRlLm5hdmlnYXRpb24gJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiA/IHJvdXRlclN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24ucGF0aG5hbWUgOiBudWxsO1xuXG4gIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgIGxvY2F0aW9uUGF0aG5hbWUgPSBsb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbmV4dExvY2F0aW9uUGF0aG5hbWUgPSBuZXh0TG9jYXRpb25QYXRobmFtZSA/IG5leHRMb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICAgIHRvUGF0aG5hbWUgPSB0b1BhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBsZXQgaXNBY3RpdmUgPSBsb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbG9jYXRpb25QYXRobmFtZS5zdGFydHNXaXRoKHRvUGF0aG5hbWUpICYmIGxvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCI7XG4gIGxldCBpc1BlbmRpbmcgPSBuZXh0TG9jYXRpb25QYXRobmFtZSAhPSBudWxsICYmIChuZXh0TG9jYXRpb25QYXRobmFtZSA9PT0gdG9QYXRobmFtZSB8fCAhZW5kICYmIG5leHRMb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCIpO1xuICBsZXQgYXJpYUN1cnJlbnQgPSBpc0FjdGl2ZSA/IGFyaWFDdXJyZW50UHJvcCA6IHVuZGVmaW5lZDtcbiAgbGV0IGNsYXNzTmFtZTtcblxuICBpZiAodHlwZW9mIGNsYXNzTmFtZVByb3AgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVByb3Aoe1xuICAgICAgaXNBY3RpdmUsXG4gICAgICBpc1BlbmRpbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY2xhc3NOYW1lIHByb3AgaXMgbm90IGEgZnVuY3Rpb24sIHdlIHVzZSBhIGRlZmF1bHQgYGFjdGl2ZWBcbiAgICAvLyBjbGFzcyBmb3IgPE5hdkxpbmsgLz5zIHRoYXQgYXJlIGFjdGl2ZS4gSW4gdjUgYGFjdGl2ZWAgd2FzIHRoZSBkZWZhdWx0XG4gICAgLy8gdmFsdWUgZm9yIGBhY3RpdmVDbGFzc05hbWVgLCBidXQgd2UgYXJlIHJlbW92aW5nIHRoYXQgQVBJIGFuZCBjYW4gc3RpbGxcbiAgICAvLyB1c2UgdGhlIG9sZCBkZWZhdWx0IGJlaGF2aW9yIGZvciBhIGNsZWFuZXIgdXBncmFkZSBwYXRoIGFuZCBrZWVwIHRoZVxuICAgIC8vIHNpbXBsZSBzdHlsaW5nIHJ1bGVzIHdvcmtpbmcgYXMgdGhleSBjdXJyZW50bHkgZG8uXG4gICAgY2xhc3NOYW1lID0gW2NsYXNzTmFtZVByb3AsIGlzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGwsIGlzUGVuZGluZyA/IFwicGVuZGluZ1wiIDogbnVsbF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgbGV0IHN0eWxlID0gdHlwZW9mIHN0eWxlUHJvcCA9PT0gXCJmdW5jdGlvblwiID8gc3R5bGVQcm9wKHtcbiAgICBpc0FjdGl2ZSxcbiAgICBpc1BlbmRpbmdcbiAgfSkgOiBzdHlsZVByb3A7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB0bzogdG9cbiAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oe1xuICAgIGlzQWN0aXZlLFxuICAgIGlzUGVuZGluZ1xuICB9KSA6IGNoaWxkcmVuKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdkxpbmsuZGlzcGxheU5hbWUgPSBcIk5hdkxpbmtcIjtcbn1cbi8qKlxuICogQSBgQHJlbWl4LXJ1bi9yb3V0ZXJgLWF3YXJlIGA8Zm9ybT5gLiBJdCBiZWhhdmVzIGxpa2UgYSBub3JtYWwgZm9ybSBleGNlcHRcbiAqIHRoYXQgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIHNlcnZlciBpcyB3aXRoIGBmZXRjaGAgaW5zdGVhZCBvZiBuZXcgZG9jdW1lbnRcbiAqIHJlcXVlc3RzLCBhbGxvd2luZyBjb21wb25lbnRzIHRvIGFkZCBuaWNlciBVWCB0byB0aGUgcGFnZSBhcyB0aGUgZm9ybSBpc1xuICogc3VibWl0dGVkIGFuZCByZXR1cm5zIHdpdGggZGF0YS5cbiAqL1xuXG5cbmNvbnN0IEZvcm0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm0uZGlzcGxheU5hbWUgPSBcIkZvcm1cIjtcbn1cblxuY29uc3QgRm9ybUltcGwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoX3JlZjYsIGZvcndhcmRlZFJlZikgPT4ge1xuICBsZXQge1xuICAgIHJlbG9hZERvY3VtZW50LFxuICAgIHJlcGxhY2UsXG4gICAgbWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgICBhY3Rpb24sXG4gICAgb25TdWJtaXQsXG4gICAgZmV0Y2hlcktleSxcbiAgICByb3V0ZUlkLFxuICAgIHJlbGF0aXZlLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICB9ID0gX3JlZjYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY2LCBfZXhjbHVkZWQzKTtcblxuICBsZXQgc3VibWl0ID0gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgbGV0IGZvcm1NZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gXCJnZXRcIiA/IFwiZ2V0XCIgOiBcInBvc3RcIjtcbiAgbGV0IGZvcm1BY3Rpb24gPSB1c2VGb3JtQWN0aW9uKGFjdGlvbiwge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuXG4gIGxldCBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIG9uU3VibWl0ICYmIG9uU3VibWl0KGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHN1Ym1pdHRlciA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnN1Ym1pdHRlcjtcbiAgICBsZXQgc3VibWl0TWV0aG9kID0gKHN1Ym1pdHRlciA9PSBudWxsID8gdm9pZCAwIDogc3VibWl0dGVyLmdldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIikpIHx8IG1ldGhvZDtcbiAgICBzdWJtaXQoc3VibWl0dGVyIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQsIHtcbiAgICAgIG1ldGhvZDogc3VibWl0TWV0aG9kLFxuICAgICAgcmVwbGFjZSxcbiAgICAgIHJlbGF0aXZlLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBmb3J3YXJkZWRSZWYsXG4gICAgbWV0aG9kOiBmb3JtTWV0aG9kLFxuICAgIGFjdGlvbjogZm9ybUFjdGlvbixcbiAgICBvblN1Ym1pdDogcmVsb2FkRG9jdW1lbnQgPyBvblN1Ym1pdCA6IHN1Ym1pdEhhbmRsZXJcbiAgfSwgcHJvcHMpKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm1JbXBsLmRpc3BsYXlOYW1lID0gXCJGb3JtSW1wbFwiO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCB3aWxsIGVtdWxhdGUgdGhlIGJyb3dzZXIncyBzY3JvbGwgcmVzdG9yYXRpb24gb24gbG9jYXRpb25cbiAqIGNoYW5nZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBTY3JvbGxSZXN0b3JhdGlvbihfcmVmNykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfcmVmNztcbiAgdXNlU2Nyb2xsUmVzdG9yYXRpb24oe1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTY3JvbGxSZXN0b3JhdGlvbi5kaXNwbGF5TmFtZSA9IFwiU2Nyb2xsUmVzdG9yYXRpb25cIjtcbn0gLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIEhvb2tzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbnZhciBEYXRhUm91dGVySG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVySG9vaykge1xuICBEYXRhUm91dGVySG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZVN1Ym1pdEltcGxcIl0gPSBcInVzZVN1Ym1pdEltcGxcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VGZXRjaGVyXCJdID0gXCJ1c2VGZXRjaGVyXCI7XG59KShEYXRhUm91dGVySG9vayB8fCAoRGF0YVJvdXRlckhvb2sgPSB7fSkpO1xuXG52YXIgRGF0YVJvdXRlclN0YXRlSG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VGZXRjaGVyc1wiXSA9IFwidXNlRmV0Y2hlcnNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0KTtcbiAgIWN0eCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gY3R4O1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyU3RhdGUoaG9va05hbWUpIHtcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gICFzdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gc3RhdGU7XG59XG4vKipcbiAqIEhhbmRsZXMgdGhlIGNsaWNrIGJlaGF2aW9yIGZvciByb3V0ZXIgYDxMaW5rPmAgY29tcG9uZW50cy4gVGhpcyBpcyB1c2VmdWwgaWZcbiAqIHlvdSBuZWVkIHRvIGNyZWF0ZSBjdXN0b20gYDxMaW5rPmAgY29tcG9uZW50cyB3aXRoIHRoZSBzYW1lIGNsaWNrIGJlaGF2aW9yIHdlXG4gKiB1c2UgaW4gb3VyIGV4cG9ydGVkIGA8TGluaz5gLlxuICovXG5cblxuZnVuY3Rpb24gdXNlTGlua0NsaWNrSGFuZGxlcih0bywgX3RlbXApIHtcbiAgbGV0IHtcbiAgICB0YXJnZXQsXG4gICAgcmVwbGFjZTogcmVwbGFjZVByb3AsXG4gICAgc3RhdGUsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICBpZiAoc2hvdWxkUHJvY2Vzc0xpbmtDbGljayhldmVudCwgdGFyZ2V0KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gSWYgdGhlIFVSTCBoYXNuJ3QgY2hhbmdlZCwgYSByZWd1bGFyIDxhPiB3aWxsIGRvIGEgcmVwbGFjZSBpbnN0ZWFkIG9mXG4gICAgICAvLyBhIHB1c2gsIHNvIGRvIHRoZSBzYW1lIGhlcmUgdW5sZXNzIHRoZSByZXBsYWNlIHByb3AgaXMgZXhwbGljaXRseSBzZXRcblxuICAgICAgbGV0IHJlcGxhY2UgPSByZXBsYWNlUHJvcCAhPT0gdW5kZWZpbmVkID8gcmVwbGFjZVByb3AgOiBjcmVhdGVQYXRoKGxvY2F0aW9uKSA9PT0gY3JlYXRlUGF0aChwYXRoKTtcbiAgICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHJlcGxhY2UsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIHJlbGF0aXZlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHBhdGgsIHJlcGxhY2VQcm9wLCBzdGF0ZSwgdGFyZ2V0LCB0bywgcHJldmVudFNjcm9sbFJlc2V0LCByZWxhdGl2ZV0pO1xufVxuLyoqXG4gKiBBIGNvbnZlbmllbnQgd3JhcHBlciBmb3IgcmVhZGluZyBhbmQgd3JpdGluZyBzZWFyY2ggcGFyYW1ldGVycyB2aWEgdGhlXG4gKiBVUkxTZWFyY2hQYXJhbXMgaW50ZXJmYWNlLlxuICovXG5cbmZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyh0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSBcInVuZGVmaW5lZFwiLCBcIllvdSBjYW5ub3QgdXNlIHRoZSBgdXNlU2VhcmNoUGFyYW1zYCBob29rIGluIGEgYnJvd3NlciB0aGF0IGRvZXMgbm90IFwiICsgXCJzdXBwb3J0IHRoZSBVUkxTZWFyY2hQYXJhbXMgQVBJLiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IEludGVybmV0IFwiICsgXCJFeHBsb3JlciAxMSwgd2UgcmVjb21tZW5kIHlvdSBsb2FkIGEgcG9seWZpbGwgc3VjaCBhcyBcIiArIFwiaHR0cHM6Ly9naXRodWIuY29tL3VuZ2FwL3VybC1zZWFyY2gtcGFyYW1zXFxuXFxuXCIgKyBcIklmIHlvdSdyZSB1bnN1cmUgaG93IHRvIGxvYWQgcG9seWZpbGxzLCB3ZSByZWNvbW1lbmQgeW91IGNoZWNrIG91dCBcIiArIFwiaHR0cHM6Ly9wb2x5ZmlsbC5pby92My8gd2hpY2ggcHJvdmlkZXMgc29tZSByZWNvbW1lbmRhdGlvbnMgYWJvdXQgaG93IFwiICsgXCJ0byBsb2FkIHBvbHlmaWxscyBvbmx5IGZvciB1c2VycyB0aGF0IG5lZWQgdGhlbSwgaW5zdGVhZCBvZiBmb3IgZXZlcnkgXCIgKyBcInVzZXIuXCIpIDogdm9pZCAwO1xuICBsZXQgZGVmYXVsdFNlYXJjaFBhcmFtc1JlZiA9IFJlYWN0LnVzZVJlZihjcmVhdGVTZWFyY2hQYXJhbXMoZGVmYXVsdEluaXQpKTtcbiAgbGV0IGhhc1NldFNlYXJjaFBhcmFtc1JlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IC8vIE9ubHkgbWVyZ2UgaW4gdGhlIGRlZmF1bHRzIGlmIHdlIGhhdmVuJ3QgeWV0IGNhbGxlZCBzZXRTZWFyY2hQYXJhbXMuXG4gIC8vIE9uY2Ugd2UgY2FsbCB0aGF0IHdlIHdhbnQgdGhvc2UgdG8gdGFrZSBwcmVjZWRlbmNlLCBvdGhlcndpc2UgeW91IGNhbid0XG4gIC8vIHJlbW92ZSBhIHBhcmFtIHdpdGggc2V0U2VhcmNoUGFyYW1zKHt9KSBpZiBpdCBoYXMgYW4gaW5pdGlhbCB2YWx1ZVxuICBnZXRTZWFyY2hQYXJhbXNGb3JMb2NhdGlvbihsb2NhdGlvbi5zZWFyY2gsIGhhc1NldFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50ID8gbnVsbCA6IGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCksIFtsb2NhdGlvbi5zZWFyY2hdKTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IHNldFNlYXJjaFBhcmFtcyA9IFJlYWN0LnVzZUNhbGxiYWNrKChuZXh0SW5pdCwgbmF2aWdhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgbmV3U2VhcmNoUGFyYW1zID0gY3JlYXRlU2VhcmNoUGFyYW1zKHR5cGVvZiBuZXh0SW5pdCA9PT0gXCJmdW5jdGlvblwiID8gbmV4dEluaXQoc2VhcmNoUGFyYW1zKSA6IG5leHRJbml0KTtcbiAgICBoYXNTZXRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgbmF2aWdhdGUoXCI/XCIgKyBuZXdTZWFyY2hQYXJhbXMsIG5hdmlnYXRlT3B0aW9ucyk7XG4gIH0sIFtuYXZpZ2F0ZSwgc2VhcmNoUGFyYW1zXSk7XG4gIHJldHVybiBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBwcm9ncmFtbWF0aWNhbGx5IHN1Ym1pdCBhIGZvcm0gKG9yXG4gKiBzb21lIGFyYml0cmFyeSBkYXRhKSB0byB0aGUgc2VydmVyLlxuICovXG5cbmZ1bmN0aW9uIHVzZVN1Ym1pdCgpIHtcbiAgcmV0dXJuIHVzZVN1Ym1pdEltcGwoKTtcbn1cblxuZnVuY3Rpb24gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VTdWJtaXRJbXBsKTtcbiAgbGV0IGRlZmF1bHRBY3Rpb24gPSB1c2VGb3JtQWN0aW9uKCk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBhcmUgY2FsbGluZyBzdWJtaXQgZHVyaW5nIHRoZSBzZXJ2ZXIgcmVuZGVyLiBcIiArIFwiVHJ5IGNhbGxpbmcgc3VibWl0IHdpdGhpbiBhIGB1c2VFZmZlY3RgIG9yIGNhbGxiYWNrIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIGxldCB7XG4gICAgICBtZXRob2QsXG4gICAgICBlbmNUeXBlLFxuICAgICAgZm9ybURhdGEsXG4gICAgICB1cmxcbiAgICB9ID0gZ2V0Rm9ybVN1Ym1pc3Npb25JbmZvKHRhcmdldCwgZGVmYXVsdEFjdGlvbiwgb3B0aW9ucyk7XG4gICAgbGV0IGhyZWYgPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgIGxldCBvcHRzID0ge1xuICAgICAgcmVwbGFjZTogb3B0aW9ucy5yZXBsYWNlLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRpb25zLnByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybU1ldGhvZDogbWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGU6IGVuY1R5cGVcbiAgICB9O1xuXG4gICAgaWYgKGZldGNoZXJLZXkpIHtcbiAgICAgICEocm91dGVJZCAhPSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVJZCBhdmFpbGFibGUgZm9yIHVzZUZldGNoZXIoKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgcm91dGVyLmZldGNoKGZldGNoZXJLZXksIHJvdXRlSWQsIGhyZWYsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUoaHJlZiwgb3B0cyk7XG4gICAgfVxuICB9LCBbZGVmYXVsdEFjdGlvbiwgcm91dGVyLCBmZXRjaGVyS2V5LCByb3V0ZUlkXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUZvcm1BY3Rpb24oYWN0aW9uLCBfdGVtcDIpIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgcm91dGVDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlQ29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRm9ybUFjdGlvbiBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBbbWF0Y2hdID0gcm91dGVDb250ZXh0Lm1hdGNoZXMuc2xpY2UoLTEpOyAvLyBTaGFsbG93IGNsb25lIHBhdGggc28gd2UgY2FuIG1vZGlmeSBpdCBiZWxvdywgb3RoZXJ3aXNlIHdlIG1vZGlmeSB0aGVcbiAgLy8gb2JqZWN0IHJlZmVyZW5jZWQgYnkgdXNlTWVtbyBpbnNpZGUgdXNlUmVzb2x2ZWRQYXRoXG5cbiAgbGV0IHBhdGggPSBfZXh0ZW5kcyh7fSwgdXNlUmVzb2x2ZWRQYXRoKGFjdGlvbiA/IGFjdGlvbiA6IFwiLlwiLCB7XG4gICAgcmVsYXRpdmVcbiAgfSkpOyAvLyBQcmV2aW91c2x5IHdlIHNldCB0aGUgZGVmYXVsdCBhY3Rpb24gdG8gXCIuXCIuIFRoZSBwcm9ibGVtIHdpdGggdGhpcyBpcyB0aGF0XG4gIC8vIGB1c2VSZXNvbHZlZFBhdGgoXCIuXCIpYCBleGNsdWRlcyBzZWFyY2ggcGFyYW1zIGFuZCB0aGUgaGFzaCBvZiB0aGUgcmVzb2x2ZWRcbiAgLy8gVVJMLiBUaGlzIGlzIHRoZSBpbnRlbmRlZCBiZWhhdmlvciBvZiB3aGVuIFwiLlwiIGlzIHNwZWNpZmljYWxseSBwcm92aWRlZCBhc1xuICAvLyB0aGUgZm9ybSBhY3Rpb24sIGJ1dCBpbmNvbnNpc3RlbnQgdy8gYnJvd3NlcnMgd2hlbiB0aGUgYWN0aW9uIGlzIG9taXR0ZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVtaXgvaXNzdWVzLzkyN1xuXG5cbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICBpZiAoYWN0aW9uID09IG51bGwpIHtcbiAgICAvLyBTYWZlIHRvIHdyaXRlIHRvIHRoZXNlIGRpcmVjdGx5IGhlcmUgc2luY2UgaWYgYWN0aW9uIHdhcyB1bmRlZmluZWQsIHdlXG4gICAgLy8gd291bGQgaGF2ZSBjYWxsZWQgdXNlUmVzb2x2ZWRQYXRoKFwiLlwiKSB3aGljaCB3aWxsIG5ldmVyIGluY2x1ZGUgYSBzZWFyY2hcbiAgICAvLyBvciBoYXNoXG4gICAgcGF0aC5zZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgcGF0aC5oYXNoID0gbG9jYXRpb24uaGFzaDsgLy8gV2hlbiBncmFiYmluZyBzZWFyY2ggcGFyYW1zIGZyb20gdGhlIFVSTCwgcmVtb3ZlIHRoZSBhdXRvbWF0aWNhbGx5XG4gICAgLy8gaW5zZXJ0ZWQgP2luZGV4IHBhcmFtIHNvIHdlIG1hdGNoIHRoZSB1c2VSZXNvbHZlZFBhdGggc2VhcmNoIGJlaGF2aW9yXG4gICAgLy8gd2hpY2ggd291bGQgbm90IGluY2x1ZGUgP2luZGV4XG5cbiAgICBpZiAobWF0Y2gucm91dGUuaW5kZXgpIHtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhdGguc2VhcmNoKTtcbiAgICAgIHBhcmFtcy5kZWxldGUoXCJpbmRleFwiKTtcbiAgICAgIHBhdGguc2VhcmNoID0gcGFyYW1zLnRvU3RyaW5nKCkgPyBcIj9cIiArIHBhcmFtcy50b1N0cmluZygpIDogXCJcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoKCFhY3Rpb24gfHwgYWN0aW9uID09PSBcIi5cIikgJiYgbWF0Y2gucm91dGUuaW5kZXgpIHtcbiAgICBwYXRoLnNlYXJjaCA9IHBhdGguc2VhcmNoID8gcGF0aC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sIFwiP2luZGV4JlwiKSA6IFwiP2luZGV4XCI7XG4gIH0gLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAvLyB0byBjcmVhdGluZyB0aGUgZm9ybSBhY3Rpb24uICBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIGp1c3QgdXNlXG4gIC8vIHRoZSByYXcgYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoZVxuICAvLyBwcmVzZW5jZSBvZiBhIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgYWN0aW9uc1xuXG5cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIHBhdGgucGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVBhdGgocGF0aCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZldGNoZXJGb3JtKGZldGNoZXJLZXksIHJvdXRlSWQpIHtcbiAgbGV0IEZldGNoZXJGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgcmVmOiByZWYsXG4gICAgICBmZXRjaGVyS2V5OiBmZXRjaGVyS2V5LFxuICAgICAgcm91dGVJZDogcm91dGVJZFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIEZldGNoZXJGb3JtLmRpc3BsYXlOYW1lID0gXCJmZXRjaGVyLkZvcm1cIjtcbiAgfVxuXG4gIHJldHVybiBGZXRjaGVyRm9ybTtcbn1cblxubGV0IGZldGNoZXJJZCA9IDA7XG4vKipcbiAqIEludGVyYWN0cyB3aXRoIHJvdXRlIGxvYWRlcnMgYW5kIGFjdGlvbnMgd2l0aG91dCBjYXVzaW5nIGEgbmF2aWdhdGlvbi4gR3JlYXRcbiAqIGZvciBhbnkgaW50ZXJhY3Rpb24gdGhhdCBzdGF5cyBvbiB0aGUgc2FtZSBwYWdlLlxuICovXG5cbmZ1bmN0aW9uIHVzZUZldGNoZXIoKSB7XG4gIHZhciBfcm91dGUkbWF0Y2hlcztcblxuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlRmV0Y2hlcik7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX1JvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCByb3V0ZUlkID0gKF9yb3V0ZSRtYXRjaGVzID0gcm91dGUubWF0Y2hlc1tyb3V0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdKSA9PSBudWxsID8gdm9pZCAwIDogX3JvdXRlJG1hdGNoZXMucm91dGUuaWQ7XG4gICEocm91dGVJZCAhPSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXFxcImlkXFxcIlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgW2ZldGNoZXJLZXldID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gU3RyaW5nKCsrZmV0Y2hlcklkKSk7XG4gIGxldCBbRm9ybV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgIXJvdXRlSWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIk5vIHJvdXRlSWQgYXZhaWxhYmxlIGZvciBmZXRjaGVyLkZvcm0oKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJldHVybiBjcmVhdGVGZXRjaGVyRm9ybShmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgfSk7XG4gIGxldCBbbG9hZF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBocmVmID0+IHtcbiAgICAhcm91dGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZXIgYXZhaWxhYmxlIGZvciBmZXRjaGVyLmxvYWQoKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICFyb3V0ZUlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5sb2FkKClcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByb3V0ZXIuZmV0Y2goZmV0Y2hlcktleSwgcm91dGVJZCwgaHJlZik7XG4gIH0pO1xuICBsZXQgc3VibWl0ID0gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgbGV0IGZldGNoZXIgPSByb3V0ZXIuZ2V0RmV0Y2hlcihmZXRjaGVyS2V5KTtcbiAgbGV0IGZldGNoZXJXaXRoQ29tcG9uZW50cyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gX2V4dGVuZHMoe1xuICAgIEZvcm0sXG4gICAgc3VibWl0LFxuICAgIGxvYWRcbiAgfSwgZmV0Y2hlciksIFtmZXRjaGVyLCBGb3JtLCBzdWJtaXQsIGxvYWRdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJcyB0aGlzIGJ1c3RlZCB3aGVuIHRoZSBSZWFjdCB0ZWFtIGdldHMgcmVhbCB3ZWlyZCBhbmQgY2FsbHMgZWZmZWN0c1xuICAgIC8vIHR3aWNlIG9uIG1vdW50PyAgV2UgcmVhbGx5IGp1c3QgbmVlZCB0byBnYXJiYWdlIGNvbGxlY3QgaGVyZSB3aGVuIHRoaXNcbiAgICAvLyBmZXRjaGVyIGlzIG5vIGxvbmdlciBhcm91bmQuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcm91dGVyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIGZldGNoZXIgYXZhaWxhYmxlIHRvIGNsZWFuIHVwIGZyb20gdXNlRmV0Y2hlcigpXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5kZWxldGVGZXRjaGVyKGZldGNoZXJLZXkpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIsIGZldGNoZXJLZXldKTtcbiAgcmV0dXJuIGZldGNoZXJXaXRoQ29tcG9uZW50cztcbn1cbi8qKlxuICogUHJvdmlkZXMgYWxsIGZldGNoZXJzIGN1cnJlbnRseSBvbiB0aGUgcGFnZS4gVXNlZnVsIGZvciBsYXlvdXRzIGFuZCBwYXJlbnRcbiAqIHJvdXRlcyB0aGF0IG5lZWQgdG8gcHJvdmlkZSBwZW5kaW5nL29wdGltaXN0aWMgVUkgcmVnYXJkaW5nIHRoZSBmZXRjaC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VGZXRjaGVycygpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlRmV0Y2hlcnMpO1xuICByZXR1cm4gWy4uLnN0YXRlLmZldGNoZXJzLnZhbHVlcygpXTtcbn1cbmNvbnN0IFNDUk9MTF9SRVNUT1JBVElPTl9TVE9SQUdFX0tFWSA9IFwicmVhY3Qtcm91dGVyLXNjcm9sbC1wb3NpdGlvbnNcIjtcbmxldCBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IHt9O1xuLyoqXG4gKiBXaGVuIHJlbmRlcmVkIGluc2lkZSBhIFJvdXRlclByb3ZpZGVyLCB3aWxsIHJlc3RvcmUgc2Nyb2xsIHBvc2l0aW9ucyBvbiBuYXZpZ2F0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHVzZVNjcm9sbFJlc3RvcmF0aW9uKF90ZW1wMykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzO1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU2Nyb2xsUmVzdG9yYXRpb24pO1xuICBsZXQge1xuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbixcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVNjcm9sbFJlc3RvcmF0aW9uKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKCk7XG4gIGxldCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGlvbigpOyAvLyBUcmlnZ2VyIG1hbnVhbCBzY3JvbGwgcmVzdG9yYXRpb24gd2hpbGUgd2UncmUgYWN0aXZlXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBTYXZlIHBvc2l0aW9ucyBvbiBwYWdlaGlkZVxuXG4gIHVzZVBhZ2VIaWRlKFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIGxldCBrZXkgPSAoZ2V0S2V5ID8gZ2V0S2V5KGxvY2F0aW9uLCBtYXRjaGVzKSA6IG51bGwpIHx8IGxvY2F0aW9uLmtleTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV0gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXkgfHwgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZFNjcm9sbFBvc2l0aW9ucykpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gIH0sIFtzdG9yYWdlS2V5LCBnZXRLZXksIG5hdmlnYXRpb24uc3RhdGUsIGxvY2F0aW9uLCBtYXRjaGVzXSkpOyAvLyBSZWFkIGluIGFueSBzYXZlZCBzY3JvbGwgbG9jYXRpb25zXG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgc2Vzc2lvblBvc2l0aW9ucyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVkpO1xuXG4gICAgICAgIGlmIChzZXNzaW9uUG9zaXRpb25zKSB7XG4gICAgICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBKU09OLnBhcnNlKHNlc3Npb25Qb3NpdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7Ly8gbm8tb3AsIHVzZSBkZWZhdWx0IGVtcHR5IG9iamVjdFxuICAgICAgfVxuICAgIH0sIFtzdG9yYWdlS2V5XSk7IC8vIEVuYWJsZSBzY3JvbGwgcmVzdG9yYXRpb24gaW4gdGhlIHJvdXRlclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gPSByb3V0ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJvdXRlci5lbmFibGVTY3JvbGxSZXN0b3JhdGlvbihzYXZlZFNjcm9sbFBvc2l0aW9ucywgKCkgPT4gd2luZG93LnNjcm9sbFksIGdldEtleSk7XG4gICAgICByZXR1cm4gKCkgPT4gZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uICYmIGRpc2FibGVTY3JvbGxSZXN0b3JhdGlvbigpO1xuICAgIH0sIFtyb3V0ZXIsIGdldEtleV0pOyAvLyBSZXN0b3JlIHNjcm9sbGluZyB3aGVuIHN0YXRlLnJlc3RvcmVTY3JvbGxQb3NpdGlvbiBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gRXhwbGljaXQgZmFsc2UgbWVhbnMgZG9uJ3QgZG8gYW55dGhpbmcgKHVzZWQgZm9yIHN1Ym1pc3Npb25zKVxuICAgICAgaWYgKHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBiZWVuIGhlcmUgYmVmb3JlLCBzY3JvbGwgdG8gaXRcblxuXG4gICAgICBpZiAodHlwZW9mIHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyB0cnkgdG8gc2Nyb2xsIHRvIHRoZSBoYXNoXG5cblxuICAgICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9jYXRpb24uaGFzaC5zbGljZSgxKSk7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRG9uJ3QgcmVzZXQgaWYgdGhpcyBuYXZpZ2F0aW9uIG9wdGVkIG91dFxuXG5cbiAgICAgIGlmIChwcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBvdGhlcndpc2UgZ28gdG8gdGhlIHRvcCBvbiBuZXcgbG9jYXRpb25zXG5cblxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0sIFtsb2NhdGlvbiwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLCBwcmV2ZW50U2Nyb2xsUmVzZXRdKTtcbiAgfVxufVxuLyoqXG4gKiBTZXR1cCBhIGNhbGxiYWNrIHRvIGJlIGZpcmVkIG9uIHRoZSB3aW5kb3cncyBgYmVmb3JldW5sb2FkYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLlxuICpcbiAqIE5vdGU6IFRoZSBgY2FsbGJhY2tgIGFyZ3VtZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uIGNyZWF0ZWQgd2l0aFxuICogYFJlYWN0LnVzZUNhbGxiYWNrKClgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUJlZm9yZVVubG9hZChjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICB9O1xuICB9LCBbY2FsbGJhY2ssIGNhcHR1cmVdKTtcbn1cbi8qKlxuICogU2V0dXAgYSBjYWxsYmFjayB0byBiZSBmaXJlZCBvbiB0aGUgd2luZG93J3MgYHBhZ2VoaWRlYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLiAgVGhpcyBldmVudCBpcyBiZXR0ZXIgc3VwcG9ydGVkIHRoYW4gYmVmb3JldW5sb2FkIGFjcm9zcyBicm93c2Vycy5cbiAqXG4gKiBOb3RlOiBUaGUgYGNhbGxiYWNrYCBhcmd1bWVudCBzaG91bGQgYmUgYSBmdW5jdGlvbiBjcmVhdGVkIHdpdGhcbiAqIGBSZWFjdC51c2VDYWxsYmFjaygpYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VQYWdlSGlkZShjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgfTtcbiAgfSwgW2NhbGxiYWNrLCBjYXB0dXJlXSk7XG59XG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIHVzZUJsb2NrZXIgdG8gc2hvdyBhIHdpbmRvdy5jb25maXJtIHByb21wdCB0byB1c2VycyBpbnN0ZWFkXG4gKiBvZiBidWlsZGluZyBhIGN1c3RvbSBVSSB3aXRoIHVzZUJsb2NrZXIuXG4gKlxuICogV2FybmluZzogVGhpcyBoYXMgKmEgbG90IG9mIHJvdWdoIGVkZ2VzKiBhbmQgYmVoYXZlcyB2ZXJ5IGRpZmZlcmVudGx5IChhbmRcbiAqIHZlcnkgaW5jb3JyZWN0bHkgaW4gc29tZSBjYXNlcykgYWNyb3NzIGJyb3dzZXJzIGlmIHVzZXIgY2xpY2sgYWRkaXRpb25cbiAqIGJhY2svZm9yd2FyZCBuYXZpZ2F0aW9ucyB3aGlsZSB0aGUgY29uZmlybSBpcyBvcGVuLiAgVXNlIGF0IHlvdXIgb3duIHJpc2suXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VQcm9tcHQoX3JlZjgpIHtcbiAgbGV0IHtcbiAgICB3aGVuLFxuICAgIG1lc3NhZ2VcbiAgfSA9IF9yZWY4O1xuICBsZXQgYmxvY2tlciA9IHVuc3RhYmxlX3VzZUJsb2NrZXIod2hlbik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmICF3aGVuKSB7XG4gICAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgfVxuICB9LCBbYmxvY2tlciwgd2hlbl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChibG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIikge1xuICAgICAgbGV0IHByb2NlZWQgPSB3aW5kb3cuY29uZmlybShtZXNzYWdlKTtcblxuICAgICAgaWYgKHByb2NlZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChibG9ja2VyLnByb2NlZWQsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2tlci5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2Jsb2NrZXIsIG1lc3NhZ2VdKTtcbn1cbiAvLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgRm9ybSwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluaywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZVNjcm9sbFJlc3RvcmF0aW9uIGFzIFVOU0FGRV91c2VTY3JvbGxSZXN0b3JhdGlvbiwgY3JlYXRlQnJvd3NlclJvdXRlciwgY3JlYXRlSGFzaFJvdXRlciwgY3JlYXRlU2VhcmNoUGFyYW1zLCBIaXN0b3J5Um91dGVyIGFzIHVuc3RhYmxlX0hpc3RvcnlSb3V0ZXIsIHVzZVByb21wdCBhcyB1bnN0YWJsZV91c2VQcm9tcHQsIHVzZUJlZm9yZVVubG9hZCwgdXNlRmV0Y2hlciwgdXNlRmV0Y2hlcnMsIHVzZUZvcm1BY3Rpb24sIHVzZUxpbmtDbGlja0hhbmRsZXIsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIHY2LjEwLjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0IHsgVU5TQUZFX2ludmFyaWFudCwgam9pblBhdGhzLCBtYXRjaFBhdGgsIFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcywgVU5TQUZFX3dhcm5pbmcsIHJlc29sdmVUbywgcGFyc2VQYXRoLCBtYXRjaFJvdXRlcywgQWN0aW9uLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgc3RyaXBCYXNlbmFtZSwgQWJvcnRlZERlZmVycmVkRXJyb3IsIGNyZWF0ZVJvdXRlciB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBY3Rpb24gYXMgTmF2aWdhdGlvblR5cGUsIGNyZWF0ZVBhdGgsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZXNvbHZlUGF0aCB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuXG5mdW5jdGlvbiBpc1BvbHlmaWxsKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG5jb25zdCBpcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5pcyA6IGlzUG9seWZpbGw7IC8vIEludGVudGlvbmFsbHkgbm90IHVzaW5nIG5hbWVkIGltcG9ydHMgYmVjYXVzZSBSb2xsdXAgdXNlcyBkeW5hbWljXG4vLyBkaXNwYXRjaCBmb3IgQ29tbW9uSlMgaW50ZXJvcCBuYW1lZCBpbXBvcnRzLlxuXG5jb25zdCB7XG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUxheW91dEVmZmVjdCxcbiAgdXNlRGVidWdWYWx1ZVxufSA9IFJlYWN0O1xubGV0IGRpZFdhcm5PbGQxOEFscGhhID0gZmFsc2U7XG5sZXQgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSBmYWxzZTsgLy8gRGlzY2xhaW1lcjogVGhpcyBzaGltIGJyZWFrcyBtYW55IG9mIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3Ncbi8vIGJlY2F1c2Ugb2YgYSB2ZXJ5IHBhcnRpY3VsYXIgc2V0IG9mIGltcGxlbWVudGF0aW9uIGRldGFpbHMgYW5kIGFzc3VtcHRpb25zXG4vLyAtLSBjaGFuZ2UgYW55IG9uZSBvZiB0aGVtIGFuZCBpdCB3aWxsIGJyZWFrLiBUaGUgbW9zdCBpbXBvcnRhbnQgYXNzdW1wdGlvblxuLy8gaXMgdGhhdCB1cGRhdGVzIGFyZSBhbHdheXMgc3luY2hyb25vdXMsIGJlY2F1c2UgY29uY3VycmVudCByZW5kZXJpbmcgaXNcbi8vIG9ubHkgYXZhaWxhYmxlIGluIHZlcnNpb25zIG9mIFJlYWN0IHRoYXQgYWxzbyBoYXZlIGEgYnVpbHQtaW5cbi8vIHVzZVN5bmNFeHRlcm5hbFN0b3JlIEFQSS4gQW5kIHdlIG9ubHkgdXNlIHRoaXMgc2hpbSB3aGVuIHRoZSBidWlsdC1pbiBBUElcbi8vIGRvZXMgbm90IGV4aXN0LlxuLy9cbi8vIERvIG5vdCBhc3N1bWUgdGhhdCB0aGUgY2xldmVyIGhhY2tzIHVzZWQgYnkgdGhpcyBob29rIGFsc28gd29yayBpbiBnZW5lcmFsLlxuLy8gVGhlIHBvaW50IG9mIHRoaXMgc2hpbSBpcyB0byByZXBsYWNlIHRoZSBuZWVkIGZvciBoYWNrcyBieSBvdGhlciBsaWJyYXJpZXMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDIoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgLy8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuLy8gUmVhY3QgZG8gbm90IGV4cG9zZSBhIHdheSB0byBjaGVjayBpZiB3ZSdyZSBoeWRyYXRpbmcuIFNvIHVzZXJzIG9mIHRoZSBzaGltXG4vLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbi8vIGZyb20gYGdldFNuYXBzaG90YC5cbmdldFNlcnZlclNuYXBzaG90KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWRpZFdhcm5PbGQxOEFscGhhKSB7XG4gICAgICBpZiAoXCJzdGFydFRyYW5zaXRpb25cIiBpbiBSZWFjdCkge1xuICAgICAgICBkaWRXYXJuT2xkMThBbHBoYSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UgYXJlIHVzaW5nIGFuIG91dGRhdGVkLCBwcmUtcmVsZWFzZSBhbHBoYSBvZiBSZWFjdCAxOCB0aGF0IFwiICsgXCJkb2VzIG5vdCBzdXBwb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlLiBUaGUgXCIgKyBcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlIHNoaW0gd2lsbCBub3Qgd29yayBjb3JyZWN0bHkuIFVwZ3JhZGUgXCIgKyBcInRvIGEgbmV3ZXIgcHJlLXJlbGVhc2UuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZWFkIHRoZSBjdXJyZW50IHNuYXBzaG90IGZyb20gdGhlIHN0b3JlIG9uIGV2ZXJ5IHJlbmRlci4gQWdhaW4sIHRoaXNcbiAgLy8gYnJlYWtzIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3MgaGVyZSBiZWNhdXNlIG9mIHNwZWNpZmljXG4gIC8vIGltcGxlbWVudGF0aW9uIGRldGFpbHMsIG1vc3QgaW1wb3J0YW50bHkgdGhhdCB1cGRhdGVzIGFyZVxuICAvLyBhbHdheXMgc3luY2hyb25vdXMuXG5cblxuICBjb25zdCB2YWx1ZSA9IGdldFNuYXBzaG90KCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QpIHtcbiAgICAgIGNvbnN0IGNhY2hlZFZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICAgICAgaWYgKCFpcyh2YWx1ZSwgY2FjaGVkVmFsdWUpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcFwiKTtcbiAgICAgICAgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBCZWNhdXNlIHVwZGF0ZXMgYXJlIHN5bmNocm9ub3VzLCB3ZSBkb24ndCBxdWV1ZSB0aGVtLiBJbnN0ZWFkIHdlIGZvcmNlIGFcbiAgLy8gcmUtcmVuZGVyIHdoZW5ldmVyIHRoZSBzdWJzY3JpYmVkIHN0YXRlIGNoYW5nZXMgYnkgdXBkYXRpbmcgYW4gc29tZVxuICAvLyBhcmJpdHJhcnkgdXNlU3RhdGUgaG9vay4gVGhlbiwgZHVyaW5nIHJlbmRlciwgd2UgY2FsbCBnZXRTbmFwc2hvdCB0byByZWFkXG4gIC8vIHRoZSBjdXJyZW50IHZhbHVlLlxuICAvL1xuICAvLyBCZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IHVzZSB0aGUgc3RhdGUgcmV0dXJuZWQgYnkgdGhlIHVzZVN0YXRlIGhvb2ssIHdlXG4gIC8vIGNhbiBzYXZlIGEgYml0IG9mIG1lbW9yeSBieSBzdG9yaW5nIG90aGVyIHN0dWZmIGluIHRoYXQgc2xvdC5cbiAgLy9cbiAgLy8gVG8gaW1wbGVtZW50IHRoZSBlYXJseSBiYWlsb3V0LCB3ZSBuZWVkIHRvIHRyYWNrIHNvbWUgdGhpbmdzIG9uIGEgbXV0YWJsZVxuICAvLyBvYmplY3QuIFVzdWFsbHksIHdlIHdvdWxkIHB1dCB0aGF0IGluIGEgdXNlUmVmIGhvb2ssIGJ1dCB3ZSBjYW4gc3Rhc2ggaXQgaW5cbiAgLy8gb3VyIHVzZVN0YXRlIGhvb2sgaW5zdGVhZC5cbiAgLy9cbiAgLy8gVG8gZm9yY2UgYSByZS1yZW5kZXIsIHdlIGNhbGwgZm9yY2VVcGRhdGUoe2luc3R9KS4gVGhhdCB3b3JrcyBiZWNhdXNlIHRoZVxuICAvLyBuZXcgb2JqZWN0IGFsd2F5cyBmYWlscyBhbiBlcXVhbGl0eSBjaGVjay5cblxuXG4gIGNvbnN0IFt7XG4gICAgaW5zdFxuICB9LCBmb3JjZVVwZGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5zdDoge1xuICAgICAgdmFsdWUsXG4gICAgICBnZXRTbmFwc2hvdFxuICAgIH1cbiAgfSk7IC8vIFRyYWNrIHRoZSBsYXRlc3QgZ2V0U25hcHNob3QgZnVuY3Rpb24gd2l0aCBhIHJlZi4gVGhpcyBuZWVkcyB0byBiZSB1cGRhdGVkXG4gIC8vIGluIHRoZSBsYXlvdXQgcGhhc2Ugc28gd2UgY2FuIGFjY2VzcyBpdCBkdXJpbmcgdGhlIHRlYXJpbmcgY2hlY2sgdGhhdFxuICAvLyBoYXBwZW5zIG9uIHN1YnNjcmliZS5cblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICBpbnN0LmdldFNuYXBzaG90ID0gZ2V0U25hcHNob3Q7IC8vIFdoZW5ldmVyIGdldFNuYXBzaG90IG9yIHN1YnNjcmliZSBjaGFuZ2VzLCB3ZSBuZWVkIHRvIGNoZWNrIGluIHRoZVxuICAgIC8vIGNvbW1pdCBwaGFzZSBpZiB0aGVyZSB3YXMgYW4gaW50ZXJsZWF2ZWQgbXV0YXRpb24uIEluIGNvbmN1cnJlbnQgbW9kZVxuICAgIC8vIHRoaXMgY2FuIGhhcHBlbiBhbGwgdGhlIHRpbWUsIGJ1dCBldmVuIGluIHN5bmNocm9ub3VzIG1vZGUsIGFuIGVhcmxpZXJcbiAgICAvLyBlZmZlY3QgbWF5IGhhdmUgbXV0YXRlZCB0aGUgc3RvcmUuXG5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3RcbiAgICAgIH0pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtzdWJzY3JpYmUsIHZhbHVlLCBnZXRTbmFwc2hvdF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIHJpZ2h0IGJlZm9yZSBzdWJzY3JpYmluZy4gU3Vic2VxdWVudCBjaGFuZ2VzIHdpbGwgYmVcbiAgICAvLyBkZXRlY3RlZCBpbiB0aGUgc3Vic2NyaXB0aW9uIGhhbmRsZXIuXG4gICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICBpbnN0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdG9yZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIC8vIFRPRE86IEJlY2F1c2UgdGhlcmUgaXMgbm8gY3Jvc3MtcmVuZGVyZXIgQVBJIGZvciBiYXRjaGluZyB1cGRhdGVzLCBpdCdzXG4gICAgICAvLyB1cCB0byB0aGUgY29uc3VtZXIgb2YgdGhpcyBsaWJyYXJ5IHRvIHdyYXAgdGhlaXIgc3Vic2NyaXB0aW9uIGV2ZW50XG4gICAgICAvLyB3aXRoIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLiBTaG91bGQgd2UgdHJ5IHRvIGRldGVjdCB3aGVuIHRoaXMgaXNuJ3RcbiAgICAgIC8vIHRoZSBjYXNlIGFuZCBwcmludCBhIHdhcm5pbmcgaW4gZGV2ZWxvcG1lbnQ/XG4gICAgICAvLyBUaGUgc3RvcmUgY2hhbmdlZC4gQ2hlY2sgaWYgdGhlIHNuYXBzaG90IGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgdGltZSB3ZVxuICAgICAgLy8gcmVhZCBmcm9tIHRoZSBzdG9yZS5cbiAgICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgICAgaW5zdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9OyAvLyBTdWJzY3JpYmUgdG8gdGhlIHN0b3JlIGFuZCByZXR1cm4gYSBjbGVhbi11cCBmdW5jdGlvbi5cblxuXG4gICAgcmV0dXJuIHN1YnNjcmliZShoYW5kbGVTdG9yZUNoYW5nZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3N1YnNjcmliZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpIHtcbiAgY29uc3QgbGF0ZXN0R2V0U25hcHNob3QgPSBpbnN0LmdldFNuYXBzaG90O1xuICBjb25zdCBwcmV2VmFsdWUgPSBpbnN0LnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gbGF0ZXN0R2V0U25hcHNob3QoKTtcbiAgICByZXR1cm4gIWlzKHByZXZWYWx1ZSwgbmV4dFZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgLy8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuICAvLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbiAgLy8gd2lsbCBuZWVkIHRvIHRyYWNrIHRoYXQgdGhlbXNlbHZlcyBhbmQgcmV0dXJuIHRoZSBjb3JyZWN0IHZhbHVlXG4gIC8vIGZyb20gYGdldFNuYXBzaG90YC5cbiAgcmV0dXJuIGdldFNuYXBzaG90KCk7XG59XG5cbi8qKlxuICogSW5saW5lZCBpbnRvIHRoZSByZWFjdC1yb3V0ZXIgcmVwbyBzaW5jZSB1c2Utc3luYy1leHRlcm5hbC1zdG9yZSBkb2VzIG5vdFxuICogcHJvdmlkZSBhIFVNRC1jb21wYXRpYmxlIHBhY2thZ2UsIHNvIHdlIG5lZWQgdGhpcyB0byBiZSBhYmxlIHRvIGRpc3RyaWJ1dGVcbiAqIFVNRCByZWFjdC1yb3V0ZXIgYnVuZGxlc1xuICovXG5jb25zdCBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKTtcbmNvbnN0IGlzU2VydmVyRW52aXJvbm1lbnQgPSAhY2FuVXNlRE9NO1xuY29uc3Qgc2hpbSA9IGlzU2VydmVyRW52aXJvbm1lbnQgPyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxIDogdXNlU3luY0V4dGVybmFsU3RvcmUkMjtcbmNvbnN0IHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gXCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVwiIGluIFJlYWN0ID8gKG1vZHVsZSA9PiBtb2R1bGUudXNlU3luY0V4dGVybmFsU3RvcmUpKFJlYWN0KSA6IHNoaW07XG5cbmNvbnN0IERhdGFSb3V0ZXJDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGF0YVJvdXRlckNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkRhdGFSb3V0ZXJcIjtcbn1cblxuY29uc3QgRGF0YVJvdXRlclN0YXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkRhdGFSb3V0ZXJTdGF0ZVwiO1xufVxuXG5jb25zdCBBd2FpdENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBBd2FpdENvbnRleHQuZGlzcGxheU5hbWUgPSBcIkF3YWl0XCI7XG59XG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2aWdhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIk5hdmlnYXRpb25cIjtcbn1cblxuY29uc3QgTG9jYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTG9jYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJMb2NhdGlvblwiO1xufVxuXG5jb25zdCBSb3V0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIG91dGxldDogbnVsbCxcbiAgbWF0Y2hlczogW11cbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVcIjtcbn1cblxuY29uc3QgUm91dGVFcnJvckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZUVycm9yQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVFcnJvclwiO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnVsbCBocmVmIGZvciB0aGUgZ2l2ZW4gXCJ0b1wiIHZhbHVlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYnVpbGRpbmdcbiAqIGN1c3RvbSBsaW5rcyB0aGF0IGFyZSBhbHNvIGFjY2Vzc2libGUgYW5kIHByZXNlcnZlIHJpZ2h0LWNsaWNrIGJlaGF2aW9yLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLWhyZWZcbiAqL1xuXG5mdW5jdGlvbiB1c2VIcmVmKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VIcmVmKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIGhhc2gsXG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoXG4gIH0gPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgbGV0IGpvaW5lZFBhdGhuYW1lID0gcGF0aG5hbWU7IC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgLy8gdG8gY3JlYXRpbmcgdGhlIGhyZWYuICBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIGp1c3QgdXNlIHRoZSByYXdcbiAgLy8gYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoZSBwcmVzZW5jZVxuICAvLyBvZiBhIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgbGlua3NcblxuICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGhuYW1lXSk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLmNyZWF0ZUhyZWYoe1xuICAgIHBhdGhuYW1lOiBqb2luZWRQYXRobmFtZSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaFxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBhIDxSb3V0ZXI+LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLWluLXJvdXRlci1jb250ZXh0XG4gKi9cblxuZnVuY3Rpb24gdXNlSW5Sb3V0ZXJDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpICE9IG51bGw7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9jYXRpb24gb2JqZWN0LCB3aGljaCByZXByZXNlbnRzIHRoZSBjdXJyZW50IFVSTCBpbiB3ZWJcbiAqIGJyb3dzZXJzLlxuICpcbiAqIE5vdGU6IElmIHlvdSdyZSB1c2luZyB0aGlzIGl0IG1heSBtZWFuIHlvdSdyZSBkb2luZyBzb21lIG9mIHlvdXIgb3duXG4gKiBcInJvdXRpbmdcIiBpbiB5b3VyIGFwcCwgYW5kIHdlJ2QgbGlrZSB0byBrbm93IHdoYXQgeW91ciB1c2UgY2FzZSBpcy4gV2UgbWF5XG4gKiBiZSBhYmxlIHRvIHByb3ZpZGUgc29tZXRoaW5nIGhpZ2hlci1sZXZlbCB0byBiZXR0ZXIgc3VpdCB5b3VyIG5lZWRzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLWxvY2F0aW9uXG4gKi9cblxuZnVuY3Rpb24gdXNlTG9jYXRpb24oKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTG9jYXRpb24oKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLmxvY2F0aW9uO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gYWN0aW9uIHdoaWNoIGRlc2NyaWJlcyBob3cgdGhlIHJvdXRlciBjYW1lIHRvXG4gKiB0aGUgY3VycmVudCBsb2NhdGlvbiwgZWl0aGVyIGJ5IGEgcG9wLCBwdXNoLCBvciByZXBsYWNlIG9uIHRoZSBoaXN0b3J5IHN0YWNrLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW5hdmlnYXRpb24tdHlwZVxuICovXG5cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb25UeXBlKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLm5hdmlnYXRpb25UeXBlO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgUGF0aE1hdGNoIG9iamVjdCBpZiB0aGUgZ2l2ZW4gcGF0dGVybiBtYXRjaGVzIHRoZSBjdXJyZW50IFVSTC5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb21wb25lbnRzIHRoYXQgbmVlZCB0byBrbm93IFwiYWN0aXZlXCIgc3RhdGUsIGUuZy5cbiAqIDxOYXZMaW5rPi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1tYXRjaFxuICovXG5cbmZ1bmN0aW9uIHVzZU1hdGNoKHBhdHRlcm4pIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VNYXRjaCgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgcGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSksIFtwYXRobmFtZSwgcGF0dGVybl0pO1xufVxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIGZvciB0aGUgbmF2aWdhdGUoKSBmdW5jdGlvbiByZXR1cm5lZCBmcm9tIHVzZU5hdmlnYXRlKCkuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltcGVyYXRpdmUgbWV0aG9kIGZvciBjaGFuZ2luZyB0aGUgbG9jYXRpb24uIFVzZWQgYnkgPExpbms+cywgYnV0XG4gKiBtYXkgYWxzbyBiZSB1c2VkIGJ5IG90aGVyIGVsZW1lbnRzIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gdXNlTmF2aWdhdGUoKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTmF2aWdhdGUoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkoVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpKTtcbiAgbGV0IGFjdGl2ZVJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9KTtcbiAgbGV0IG5hdmlnYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBcIllvdSBzaG91bGQgY2FsbCBuYXZpZ2F0ZSgpIGluIGEgUmVhY3QudXNlRWZmZWN0KCksIG5vdCB3aGVuIFwiICsgXCJ5b3VyIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZC5cIikgOiB2b2lkIDA7XG4gICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbmF2aWdhdG9yLmdvKHRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLCBsb2NhdGlvblBhdGhuYW1lLCBvcHRpb25zLnJlbGF0aXZlID09PSBcInBhdGhcIik7IC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgICAvLyB0byBoYW5kaW5nIG9mZiB0byBoaXN0b3J5LiAgSWYgdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiB3ZVxuICAgIC8vIG5hdmlnYXRlIHRvIHRoZSByYXcgYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGxcbiAgICAvLyBjb250cm9sIG92ZXIgdGhlIHByZXNlbmNlIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBsaW5rc1xuXG4gICAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgICAgcGF0aC5wYXRobmFtZSA9IHBhdGgucGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoLnBhdGhuYW1lXSk7XG4gICAgfVxuXG4gICAgKCEhb3B0aW9ucy5yZXBsYWNlID8gbmF2aWdhdG9yLnJlcGxhY2UgOiBuYXZpZ2F0b3IucHVzaCkocGF0aCwgb3B0aW9ucy5zdGF0ZSwgb3B0aW9ucyk7XG4gIH0sIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWVdKTtcbiAgcmV0dXJuIG5hdmlnYXRlO1xufVxuY29uc3QgT3V0bGV0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250ZXh0IChpZiBwcm92aWRlZCkgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utb3V0bGV0LWNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VPdXRsZXRDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChPdXRsZXRDb250ZXh0KTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudCBmb3IgdGhlIGNoaWxkIHJvdXRlIGF0IHRoaXMgbGV2ZWwgb2YgdGhlIHJvdXRlXG4gKiBoaWVyYXJjaHkuIFVzZWQgaW50ZXJuYWxseSBieSA8T3V0bGV0PiB0byByZW5kZXIgY2hpbGQgcm91dGVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW91dGxldFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldChjb250ZXh0KSB7XG4gIGxldCBvdXRsZXQgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuXG4gIGlmIChvdXRsZXQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0bGV0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICB9LCBvdXRsZXQpO1xuICB9XG5cbiAgcmV0dXJuIG91dGxldDtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIG9mIHRoZSBkeW5hbWljIHBhcmFtcyBmcm9tIHRoZSBjdXJyZW50XG4gKiBVUkwgdGhhdCB3ZXJlIG1hdGNoZWQgYnkgdGhlIHJvdXRlIHBhdGguXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtcGFyYW1zXG4gKi9cblxuZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIHJldHVybiByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbn1cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhdGhuYW1lIG9mIHRoZSBnaXZlbiBgdG9gIHZhbHVlIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtcmVzb2x2ZWQtcGF0aFxuICovXG5cbmZ1bmN0aW9uIHVzZVJlc29sdmVkUGF0aCh0bywgX3RlbXAyKSB7XG4gIGxldCB7XG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDI7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkoVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlID09PSBcInBhdGhcIiksIFt0bywgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lLCByZWxhdGl2ZV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IG9mIHRoZSByb3V0ZSB0aGF0IG1hdGNoZWQgdGhlIGN1cnJlbnQgbG9jYXRpb24sIHByZXBhcmVkXG4gKiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHQgdG8gcmVuZGVyIHRoZSByZW1haW5kZXIgb2YgdGhlIHJvdXRlIHRyZWUuIFJvdXRlXG4gKiBlbGVtZW50cyBpbiB0aGUgdHJlZSBtdXN0IHJlbmRlciBhbiA8T3V0bGV0PiB0byByZW5kZXIgdGhlaXIgY2hpbGQgcm91dGUnc1xuICogZWxlbWVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1yb3V0ZXNcbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbkFyZykge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZVJvdXRlcygpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IGRhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXM6IHBhcmVudE1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBwYXJlbnRNYXRjaGVzW3BhcmVudE1hdGNoZXMubGVuZ3RoIC0gMV07XG4gIGxldCBwYXJlbnRQYXJhbXMgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbiAgbGV0IHBhcmVudFBhdGhuYW1lID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWUgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFBhdGhuYW1lQmFzZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lQmFzZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50Um91dGUgPSByb3V0ZU1hdGNoICYmIHJvdXRlTWF0Y2gucm91dGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vIFlvdSB3b24ndCBnZXQgYSB3YXJuaW5nIGFib3V0IDIgZGlmZmVyZW50IDxSb3V0ZXM+IHVuZGVyIGEgPFJvdXRlPlxuICAgIC8vIHdpdGhvdXQgYSB0cmFpbGluZyAqLCBidXQgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IHdhcm5pbmcgYW55d2F5IHNpbmNlIHdlXG4gICAgLy8gY2Fubm90IGV2ZW4gZ2l2ZSB0aGUgd2FybmluZyB1bmxlc3MgdGhleSBsYW5kIGF0IHRoZSBwYXJlbnQgcm91dGUuXG4gICAgLy9cbiAgICAvLyBFeGFtcGxlOlxuICAgIC8vXG4gICAgLy8gPFJvdXRlcz5cbiAgICAvLyAgIHsvKiBUaGlzIHJvdXRlIHBhdGggTVVTVCBlbmQgd2l0aCAvKiBiZWNhdXNlIG90aGVyd2lzZVxuICAgIC8vICAgICAgIGl0IHdpbGwgbmV2ZXIgbWF0Y2ggL2Jsb2cvcG9zdC8xMjMgKi99XG4gICAgLy8gICA8Um91dGUgcGF0aD1cImJsb2dcIiBlbGVtZW50PXs8QmxvZyAvPn0gLz5cbiAgICAvLyAgIDxSb3V0ZSBwYXRoPVwiYmxvZy9mZWVkXCIgZWxlbWVudD17PEJsb2dGZWVkIC8+fSAvPlxuICAgIC8vIDwvUm91dGVzPlxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gQmxvZygpIHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxSb3V0ZXM+XG4gICAgLy8gICAgICAgPFJvdXRlIHBhdGg9XCJwb3N0LzppZFwiIGVsZW1lbnQ9ezxQb3N0IC8+fSAvPlxuICAgIC8vICAgICA8L1JvdXRlcz5cbiAgICAvLyAgICk7XG4gICAgLy8gfVxuICAgIGxldCBwYXJlbnRQYXRoID0gcGFyZW50Um91dGUgJiYgcGFyZW50Um91dGUucGF0aCB8fCBcIlwiO1xuICAgIHdhcm5pbmdPbmNlKHBhcmVudFBhdGhuYW1lLCAhcGFyZW50Um91dGUgfHwgcGFyZW50UGF0aC5lbmRzV2l0aChcIipcIiksIFwiWW91IHJlbmRlcmVkIGRlc2NlbmRhbnQgPFJvdXRlcz4gKG9yIGNhbGxlZCBgdXNlUm91dGVzKClgKSBhdCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGhuYW1lICsgXCJcXFwiICh1bmRlciA8Um91dGUgcGF0aD1cXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiPikgYnV0IHRoZSBcIikgKyBcInBhcmVudCByb3V0ZSBwYXRoIGhhcyBubyB0cmFpbGluZyBcXFwiKlxcXCIuIFRoaXMgbWVhbnMgaWYgeW91IG5hdmlnYXRlIFwiICsgXCJkZWVwZXIsIHRoZSBwYXJlbnQgd29uJ3QgbWF0Y2ggYW55bW9yZSBhbmQgdGhlcmVmb3JlIHRoZSBjaGlsZCBcIiArIFwicm91dGVzIHdpbGwgbmV2ZXIgcmVuZGVyLlxcblxcblwiICsgKFwiUGxlYXNlIGNoYW5nZSB0aGUgcGFyZW50IDxSb3V0ZSBwYXRoPVxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCI+IHRvIDxSb3V0ZSBcIikgKyAoXCJwYXRoPVxcXCJcIiArIChwYXJlbnRQYXRoID09PSBcIi9cIiA/IFwiKlwiIDogcGFyZW50UGF0aCArIFwiLypcIikgKyBcIlxcXCI+LlwiKSk7XG4gIH1cblxuICBsZXQgbG9jYXRpb25Gcm9tQ29udGV4dCA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBsb2NhdGlvbjtcblxuICBpZiAobG9jYXRpb25BcmcpIHtcbiAgICB2YXIgX3BhcnNlZExvY2F0aW9uQXJnJHBhO1xuXG4gICAgbGV0IHBhcnNlZExvY2F0aW9uQXJnID0gdHlwZW9mIGxvY2F0aW9uQXJnID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uQXJnKSA6IGxvY2F0aW9uQXJnO1xuICAgICEocGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiB8fCAoKF9wYXJzZWRMb2NhdGlvbkFyZyRwYSA9IHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lKSA9PSBudWxsID8gdm9pZCAwIDogX3BhcnNlZExvY2F0aW9uQXJnJHBhLnN0YXJ0c1dpdGgocGFyZW50UGF0aG5hbWVCYXNlKSkpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJXaGVuIG92ZXJyaWRpbmcgdGhlIGxvY2F0aW9uIHVzaW5nIGA8Um91dGVzIGxvY2F0aW9uPmAgb3IgYHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKWAsIFwiICsgXCJ0aGUgbG9jYXRpb24gcGF0aG5hbWUgbXVzdCBiZWdpbiB3aXRoIHRoZSBwb3J0aW9uIG9mIHRoZSBVUkwgcGF0aG5hbWUgdGhhdCB3YXMgXCIgKyAoXCJtYXRjaGVkIGJ5IGFsbCBwYXJlbnQgcm91dGVzLiBUaGUgY3VycmVudCBwYXRobmFtZSBiYXNlIGlzIFxcXCJcIiArIHBhcmVudFBhdGhuYW1lQmFzZSArIFwiXFxcIiBcIikgKyAoXCJidXQgcGF0aG5hbWUgXFxcIlwiICsgcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUgKyBcIlxcXCIgd2FzIGdpdmVuIGluIHRoZSBgbG9jYXRpb25gIHByb3AuXCIpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxvY2F0aW9uID0gcGFyc2VkTG9jYXRpb25Bcmc7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbkZyb21Db250ZXh0O1xuICB9XG5cbiAgbGV0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCI7XG4gIGxldCByZW1haW5pbmdQYXRobmFtZSA9IHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKHBhcmVudFBhdGhuYW1lQmFzZS5sZW5ndGgpIHx8IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlcywge1xuICAgIHBhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcocGFyZW50Um91dGUgfHwgbWF0Y2hlcyAhPSBudWxsLCBcIk5vIHJvdXRlcyBtYXRjaGVkIGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBcIikgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcobWF0Y2hlcyA9PSBudWxsIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5lbGVtZW50ICE9PSB1bmRlZmluZWQgfHwgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLkNvbXBvbmVudCAhPT0gdW5kZWZpbmVkLCBcIk1hdGNoZWQgbGVhZiByb3V0ZSBhdCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIgKyBcImRvZXMgbm90IGhhdmUgYW4gZWxlbWVudCBvciBDb21wb25lbnQuIFRoaXMgbWVhbnMgaXQgd2lsbCByZW5kZXIgYW4gPE91dGxldCAvPiB3aXRoIGEgXCIgKyBcIm51bGwgdmFsdWUgYnkgZGVmYXVsdCByZXN1bHRpbmcgaW4gYW4gXFxcImVtcHR5XFxcIiBwYWdlLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzICYmIG1hdGNoZXMubWFwKG1hdGNoID0+IE9iamVjdC5hc3NpZ24oe30sIG1hdGNoLCB7XG4gICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRQYXJhbXMsIG1hdGNoLnBhcmFtcyksXG4gICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZV0pLFxuICAgIHBhdGhuYW1lQmFzZTogbWF0Y2gucGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhcmVudFBhdGhuYW1lQmFzZSA6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZUJhc2UpLnBhdGhuYW1lIDogbWF0Y2gucGF0aG5hbWVCYXNlXSlcbiAgfSkpLCBwYXJlbnRNYXRjaGVzLCBkYXRhUm91dGVyU3RhdGVDb250ZXh0IHx8IHVuZGVmaW5lZCk7IC8vIFdoZW4gYSB1c2VyIHBhc3NlcyBpbiBhIGBsb2NhdGlvbkFyZ2AsIHRoZSBhc3NvY2lhdGVkIHJvdXRlcyBuZWVkIHRvXG4gIC8vIGJlIHdyYXBwZWQgaW4gYSBuZXcgYExvY2F0aW9uQ29udGV4dC5Qcm92aWRlcmAgaW4gb3JkZXIgZm9yIGB1c2VMb2NhdGlvbmBcbiAgLy8gdG8gdXNlIHRoZSBzY29wZWQgbG9jYXRpb24gaW5zdGVhZCBvZiB0aGUgZ2xvYmFsIGxvY2F0aW9uLlxuXG5cbiAgaWYgKGxvY2F0aW9uQXJnICYmIHJlbmRlcmVkTWF0Y2hlcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGxvY2F0aW9uOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgICAgICBoYXNoOiBcIlwiLFxuICAgICAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgICAgIGtleTogXCJkZWZhdWx0XCJcbiAgICAgICAgfSwgbG9jYXRpb24pLFxuICAgICAgICBuYXZpZ2F0aW9uVHlwZTogQWN0aW9uLlBvcFxuICAgICAgfVxuICAgIH0sIHJlbmRlcmVkTWF0Y2hlcyk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZWRNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBEZWZhdWx0RXJyb3JDb21wb25lbnQoKSB7XG4gIGxldCBlcnJvciA9IHVzZVJvdXRlRXJyb3IoKTtcbiAgbGV0IG1lc3NhZ2UgPSBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikgPyBlcnJvci5zdGF0dXMgKyBcIiBcIiArIGVycm9yLnN0YXR1c1RleHQgOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgbGV0IHN0YWNrID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLnN0YWNrIDogbnVsbDtcbiAgbGV0IGxpZ2h0Z3JleSA9IFwicmdiYSgyMDAsMjAwLDIwMCwgMC41KVwiO1xuICBsZXQgcHJlU3R5bGVzID0ge1xuICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGdyZXlcbiAgfTtcbiAgbGV0IGNvZGVTdHlsZXMgPSB7XG4gICAgcGFkZGluZzogXCIycHggNHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGdyZXlcbiAgfTtcbiAgbGV0IGRldkluZm8gPSBudWxsO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBkZXZJbmZvID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlxcdUQ4M0RcXHVEQ0JGIEhleSBkZXZlbG9wZXIgXFx1RDgzRFxcdURDNEJcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIllvdSBjYW4gcHJvdmlkZSBhIHdheSBiZXR0ZXIgVVggdGhhbiB0aGlzIHdoZW4geW91ciBhcHAgdGhyb3dzIGVycm9ycyBieSBwcm92aWRpbmcgeW91ciBvd25cXHhBMFwiLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwge1xuICAgICAgc3R5bGU6IGNvZGVTdHlsZXNcbiAgICB9LCBcIkVycm9yQm91bmRhcnlcIiksIFwiIHByb3Agb25cXHhBMFwiLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwge1xuICAgICAgc3R5bGU6IGNvZGVTdHlsZXNcbiAgICB9LCBcIjxSb3V0ZT5cIikpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIlVuZXhwZWN0ZWQgQXBwbGljYXRpb24gRXJyb3IhXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgfVxuICB9LCBtZXNzYWdlKSwgc3RhY2sgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInByZVwiLCB7XG4gICAgc3R5bGU6IHByZVN0eWxlc1xuICB9LCBzdGFjaykgOiBudWxsLCBkZXZJbmZvKTtcbn1cblxuY2xhc3MgUmVuZGVyRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2NhdGlvbjogcHJvcHMubG9jYXRpb24sXG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAvLyBXaGVuIHdlIGdldCBpbnRvIGFuIGVycm9yIHN0YXRlLCB0aGUgdXNlciB3aWxsIGxpa2VseSBjbGljayBcImJhY2tcIiB0byB0aGVcbiAgICAvLyBwcmV2aW91cyBwYWdlIHRoYXQgZGlkbid0IGhhdmUgYW4gZXJyb3IuIEJlY2F1c2UgdGhpcyB3cmFwcyB0aGUgZW50aXJlXG4gICAgLy8gYXBwbGljYXRpb24sIHRoYXQgd2lsbCBoYXZlIG5vIGVmZmVjdC0tdGhlIGVycm9yIHBhZ2UgY29udGludWVzIHRvIGRpc3BsYXkuXG4gICAgLy8gVGhpcyBnaXZlcyB1cyBhIG1lY2hhbmlzbSB0byByZWNvdmVyIGZyb20gdGhlIGVycm9yIHdoZW4gdGhlIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAgLy9cbiAgICAvLyBXaGV0aGVyIHdlJ3JlIGluIGFuIGVycm9yIHN0YXRlIG9yIG5vdCwgd2UgdXBkYXRlIHRoZSBsb2NhdGlvbiBpbiBzdGF0ZVxuICAgIC8vIHNvIHRoYXQgd2hlbiB3ZSBhcmUgaW4gYW4gZXJyb3Igc3RhdGUsIGl0IGdldHMgcmVzZXQgd2hlbiBhIG5ldyBsb2NhdGlvblxuICAgIC8vIGNvbWVzIGluIGFuZCB0aGUgdXNlciByZWNvdmVycyBmcm9tIHRoZSBlcnJvci5cbiAgICBpZiAoc3RhdGUubG9jYXRpb24gIT09IHByb3BzLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogcHJvcHMuZXJyb3IsXG4gICAgICAgIGxvY2F0aW9uOiBwcm9wcy5sb2NhdGlvblxuICAgICAgfTtcbiAgICB9IC8vIElmIHdlJ3JlIG5vdCBjaGFuZ2luZyBsb2NhdGlvbnMsIHByZXNlcnZlIHRoZSBsb2NhdGlvbiBidXQgc3RpbGwgc3VyZmFjZVxuICAgIC8vIGFueSBuZXcgZXJyb3JzIHRoYXQgbWF5IGNvbWUgdGhyb3VnaC4gV2UgcmV0YWluIHRoZSBleGlzdGluZyBlcnJvciwgd2UgZG9cbiAgICAvLyB0aGlzIGJlY2F1c2UgdGhlIGVycm9yIHByb3ZpZGVkIGZyb20gdGhlIGFwcCBzdGF0ZSBtYXkgYmUgY2xlYXJlZCB3aXRob3V0XG4gICAgLy8gdGhlIGxvY2F0aW9uIGNoYW5naW5nLlxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHByb3BzLmVycm9yIHx8IHN0YXRlLmVycm9yLFxuICAgICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUmVhY3QgUm91dGVyIGNhdWdodCB0aGUgZm9sbG93aW5nIGVycm9yIGR1cmluZyByZW5kZXJcIiwgZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZXJyb3IgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnJvdXRlQ29udGV4dFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlRXJyb3JDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5lcnJvcixcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNvbXBvbmVudFxuICAgIH0pKSA6IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cblxufVxuXG5mdW5jdGlvbiBSZW5kZXJlZFJvdXRlKF9yZWYpIHtcbiAgbGV0IHtcbiAgICByb3V0ZUNvbnRleHQsXG4gICAgbWF0Y2gsXG4gICAgY2hpbGRyZW5cbiAgfSA9IF9yZWY7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpOyAvLyBUcmFjayBob3cgZGVlcCB3ZSBnb3QgaW4gb3VyIHJlbmRlciBwYXNzIHRvIGVtdWxhdGUgU1NSIGNvbXBvbmVudERpZENhdGNoXG4gIC8vIGluIGEgRGF0YVN0YXRpY1JvdXRlclxuXG4gIGlmIChkYXRhUm91dGVyQ29udGV4dCAmJiBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWMgJiYgZGF0YVJvdXRlckNvbnRleHQuc3RhdGljQ29udGV4dCAmJiAobWF0Y2gucm91dGUuZXJyb3JFbGVtZW50IHx8IG1hdGNoLnJvdXRlLkVycm9yQm91bmRhcnkpKSB7XG4gICAgZGF0YVJvdXRlckNvbnRleHQuc3RhdGljQ29udGV4dC5fZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCA9IG1hdGNoLnJvdXRlLmlkO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiByb3V0ZUNvbnRleHRcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzLCBwYXJlbnRNYXRjaGVzLCBkYXRhUm91dGVyU3RhdGUpIHtcbiAgaWYgKHBhcmVudE1hdGNoZXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlICE9IG51bGwgJiYgZGF0YVJvdXRlclN0YXRlLmVycm9ycykge1xuICAgICAgLy8gRG9uJ3QgYmFpbCBpZiB3ZSBoYXZlIGRhdGEgcm91dGVyIGVycm9ycyBzbyB3ZSBjYW4gcmVuZGVyIHRoZW0gaW4gdGhlXG4gICAgICAvLyBib3VuZGFyeS4gIFVzZSB0aGUgcHJlLW1hdGNoZWQgKG9yIHNoaW1tZWQpIG1hdGNoZXNcbiAgICAgIG1hdGNoZXMgPSBkYXRhUm91dGVyU3RhdGUubWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlbmRlcmVkTWF0Y2hlcyA9IG1hdGNoZXM7IC8vIElmIHdlIGhhdmUgZGF0YSBlcnJvcnMsIHRyaW0gbWF0Y2hlcyB0byB0aGUgaGlnaGVzdCBlcnJvciBib3VuZGFyeVxuXG4gIGxldCBlcnJvcnMgPSBkYXRhUm91dGVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IGRhdGFSb3V0ZXJTdGF0ZS5lcnJvcnM7XG5cbiAgaWYgKGVycm9ycyAhPSBudWxsKSB7XG4gICAgbGV0IGVycm9ySW5kZXggPSByZW5kZXJlZE1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCAmJiAoZXJyb3JzID09IG51bGwgPyB2b2lkIDAgOiBlcnJvcnNbbS5yb3V0ZS5pZF0pKTtcbiAgICAhKGVycm9ySW5kZXggPj0gMCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIkNvdWxkIG5vdCBmaW5kIGEgbWF0Y2hpbmcgcm91dGUgZm9yIHRoZSBjdXJyZW50IGVycm9yczogXCIgKyBlcnJvcnMpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcmVuZGVyZWRNYXRjaGVzID0gcmVuZGVyZWRNYXRjaGVzLnNsaWNlKDAsIE1hdGgubWluKHJlbmRlcmVkTWF0Y2hlcy5sZW5ndGgsIGVycm9ySW5kZXggKyAxKSk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZWRNYXRjaGVzLnJlZHVjZVJpZ2h0KChvdXRsZXQsIG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIGxldCBlcnJvciA9IG1hdGNoLnJvdXRlLmlkID8gZXJyb3JzID09IG51bGwgPyB2b2lkIDAgOiBlcnJvcnNbbWF0Y2gucm91dGUuaWRdIDogbnVsbDsgLy8gT25seSBkYXRhIHJvdXRlcnMgaGFuZGxlIGVycm9yc1xuXG4gICAgbGV0IGVycm9yRWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlKSB7XG4gICAgICBpZiAobWF0Y2gucm91dGUuRXJyb3JCb3VuZGFyeSkge1xuICAgICAgICBlcnJvckVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5LCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuZXJyb3JFbGVtZW50KSB7XG4gICAgICAgIGVycm9yRWxlbWVudCA9IG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRFcnJvckNvbXBvbmVudCwgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoZXMgPSBwYXJlbnRNYXRjaGVzLmNvbmNhdChyZW5kZXJlZE1hdGNoZXMuc2xpY2UoMCwgaW5kZXggKyAxKSk7XG5cbiAgICBsZXQgZ2V0Q2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSBvdXRsZXQ7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjaGlsZHJlbiA9IGVycm9yRWxlbWVudDtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuQ29tcG9uZW50KSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQobWF0Y2gucm91dGUuQ29tcG9uZW50LCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuZWxlbWVudCkge1xuICAgICAgICBjaGlsZHJlbiA9IG1hdGNoLnJvdXRlLmVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZW5kZXJlZFJvdXRlLCB7XG4gICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgcm91dGVDb250ZXh0OiB7XG4gICAgICAgICAgb3V0bGV0LFxuICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KTtcbiAgICB9OyAvLyBPbmx5IHdyYXAgaW4gYW4gZXJyb3IgYm91bmRhcnkgd2l0aGluIGRhdGEgcm91dGVyIHVzYWdlcyB3aGVuIHdlIGhhdmUgYW5cbiAgICAvLyBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudCBvbiB0aGlzIHJvdXRlLiAgT3RoZXJ3aXNlIGxldCBpdCBidWJibGUgdXAgdG9cbiAgICAvLyBhbiBhbmNlc3RvciBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudFxuXG5cbiAgICByZXR1cm4gZGF0YVJvdXRlclN0YXRlICYmIChtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5IHx8IG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudCB8fCBpbmRleCA9PT0gMCkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZW5kZXJFcnJvckJvdW5kYXJ5LCB7XG4gICAgICBsb2NhdGlvbjogZGF0YVJvdXRlclN0YXRlLmxvY2F0aW9uLFxuICAgICAgY29tcG9uZW50OiBlcnJvckVsZW1lbnQsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oKSxcbiAgICAgIHJvdXRlQ29udGV4dDoge1xuICAgICAgICBvdXRsZXQ6IG51bGwsXG4gICAgICAgIG1hdGNoZXNcbiAgICAgIH1cbiAgICB9KSA6IGdldENoaWxkcmVuKCk7XG4gIH0sIG51bGwpO1xufVxudmFyIERhdGFSb3V0ZXJIb29rO1xuXG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJIb29rKSB7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlQmxvY2tlclwiXSA9IFwidXNlQmxvY2tlclwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZVJldmFsaWRhdG9yXCJdID0gXCJ1c2VSZXZhbGlkYXRvclwiO1xufSkoRGF0YVJvdXRlckhvb2sgfHwgKERhdGFSb3V0ZXJIb29rID0ge30pKTtcblxudmFyIERhdGFSb3V0ZXJTdGF0ZUhvb2s7XG5cbihmdW5jdGlvbiAoRGF0YVJvdXRlclN0YXRlSG9vaykge1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlQmxvY2tlclwiXSA9IFwidXNlQmxvY2tlclwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTG9hZGVyRGF0YVwiXSA9IFwidXNlTG9hZGVyRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlQWN0aW9uRGF0YVwiXSA9IFwidXNlQWN0aW9uRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVFcnJvclwiXSA9IFwidXNlUm91dGVFcnJvclwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTmF2aWdhdGlvblwiXSA9IFwidXNlTmF2aWdhdGlvblwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVMb2FkZXJEYXRhXCJdID0gXCJ1c2VSb3V0ZUxvYWRlckRhdGFcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZU1hdGNoZXNcIl0gPSBcInVzZU1hdGNoZXNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVJldmFsaWRhdG9yXCJdID0gXCJ1c2VSZXZhbGlkYXRvclwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpO1xuICAhY3R4ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBjdHg7XG59XG5cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJTdGF0ZShob29rTmFtZSkge1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICAhc3RhdGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1c2VSb3V0ZUNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHJvdXRlO1xufVxuXG5mdW5jdGlvbiB1c2VDdXJyZW50Um91dGVJZChob29rTmFtZSkge1xuICBsZXQgcm91dGUgPSB1c2VSb3V0ZUNvbnRleHQoaG9va05hbWUpO1xuICBsZXQgdGhpc1JvdXRlID0gcm91dGUubWF0Y2hlc1tyb3V0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAhdGhpc1JvdXRlLnJvdXRlLmlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgaG9va05hbWUgKyBcIiBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXFxcImlkXFxcIlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gdGhpc1JvdXRlLnJvdXRlLmlkO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5hdmlnYXRpb24sIGRlZmF1bHRpbmcgdG8gYW4gXCJpZGxlXCIgbmF2aWdhdGlvbiB3aGVuXG4gKiBubyBuYXZpZ2F0aW9uIGlzIGluIHByb2dyZXNzXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VOYXZpZ2F0aW9uKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VOYXZpZ2F0aW9uKTtcbiAgcmV0dXJuIHN0YXRlLm5hdmlnYXRpb247XG59XG4vKipcbiAqIFJldHVybnMgYSByZXZhbGlkYXRlIGZ1bmN0aW9uIGZvciBtYW51YWxseSB0cmlnZ2VyaW5nIHJldmFsaWRhdGlvbiwgYXMgd2VsbFxuICogYXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYW55IG1hbnVhbCByZXZhbGlkYXRpb25zXG4gKi9cblxuZnVuY3Rpb24gdXNlUmV2YWxpZGF0b3IoKSB7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZVJldmFsaWRhdG9yKTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUmV2YWxpZGF0b3IpO1xuICByZXR1cm4ge1xuICAgIHJldmFsaWRhdGU6IGRhdGFSb3V0ZXJDb250ZXh0LnJvdXRlci5yZXZhbGlkYXRlLFxuICAgIHN0YXRlOiBzdGF0ZS5yZXZhbGlkYXRpb25cbiAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgYWN0aXZlIHJvdXRlIG1hdGNoZXMsIHVzZWZ1bCBmb3IgYWNjZXNzaW5nIGxvYWRlckRhdGEgZm9yXG4gKiBwYXJlbnQvY2hpbGQgcm91dGVzIG9yIHRoZSByb3V0ZSBcImhhbmRsZVwiIHByb3BlcnR5XG4gKi9cblxuZnVuY3Rpb24gdXNlTWF0Y2hlcygpIHtcbiAgbGV0IHtcbiAgICBtYXRjaGVzLFxuICAgIGxvYWRlckRhdGFcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZU1hdGNoZXMpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IG1hdGNoOyAvLyBOb3RlOiBUaGlzIHN0cnVjdHVyZSBtYXRjaGVzIHRoYXQgY3JlYXRlZCBieSBjcmVhdGVVc2VNYXRjaGVzTWF0Y2hcbiAgICAvLyBpbiB0aGUgQHJlbWl4LXJ1bi9yb3V0ZXIgLCBzbyBpZiB5b3UgY2hhbmdlIHRoaXMgcGxlYXNlIGFsc28gY2hhbmdlXG4gICAgLy8gdGhhdCA6KSAgRXZlbnR1YWxseSB3ZSdsbCBEUlkgdGhpcyB1cFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBtYXRjaC5yb3V0ZS5pZCxcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcGFyYW1zLFxuICAgICAgZGF0YTogbG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0sXG4gICAgICBoYW5kbGU6IG1hdGNoLnJvdXRlLmhhbmRsZVxuICAgIH07XG4gIH0pLCBbbWF0Y2hlcywgbG9hZGVyRGF0YV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsb2FkZXIgZGF0YSBmb3IgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgbG9hZGVyXG4gKi9cblxuZnVuY3Rpb24gdXNlTG9hZGVyRGF0YSgpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTG9hZGVyRGF0YSk7XG4gIGxldCByb3V0ZUlkID0gdXNlQ3VycmVudFJvdXRlSWQoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VMb2FkZXJEYXRhKTtcblxuICBpZiAoc3RhdGUuZXJyb3JzICYmIHN0YXRlLmVycm9yc1tyb3V0ZUlkXSAhPSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcihcIllvdSBjYW5ub3QgYHVzZUxvYWRlckRhdGFgIGluIGFuIGVycm9yRWxlbWVudCAocm91dGVJZDogXCIgKyByb3V0ZUlkICsgXCIpXCIpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbG9hZGVyRGF0YSBmb3IgdGhlIGdpdmVuIHJvdXRlSWRcbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZUxvYWRlckRhdGEocm91dGVJZCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUxvYWRlckRhdGEpO1xuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgYWN0aW9uIGRhdGEgZm9yIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGFjdGlvblxuICovXG5cbmZ1bmN0aW9uIHVzZUFjdGlvbkRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUFjdGlvbkRhdGEpO1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlQWN0aW9uRGF0YSBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKChzdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogc3RhdGUuYWN0aW9uRGF0YSkgfHwge30pWzBdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGVycm9yLCB3aGljaCBjb3VsZCBiZSBhIGxvYWRlci9hY3Rpb25cbiAqIGVycm9yIG9yIGEgcmVuZGVyIGVycm9yLiAgVGhpcyBpcyBpbnRlbmRlZCB0byBiZSBjYWxsZWQgZnJvbSB5b3VyXG4gKiBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudCB0byBkaXNwbGF5IGEgcHJvcGVyIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gdXNlUm91dGVFcnJvcigpIHtcbiAgdmFyIF9zdGF0ZSRlcnJvcnM7XG5cbiAgbGV0IGVycm9yID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUVycm9yQ29udGV4dCk7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlRXJyb3IpO1xuICBsZXQgcm91dGVJZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVFcnJvcik7IC8vIElmIHRoaXMgd2FzIGEgcmVuZGVyIGVycm9yLCB3ZSBwdXQgaXQgaW4gYSBSb3V0ZUVycm9yIGNvbnRleHQgaW5zaWRlXG4gIC8vIG9mIFJlbmRlckVycm9yQm91bmRhcnlcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH0gLy8gT3RoZXJ3aXNlIGxvb2sgZm9yIGVycm9ycyBmcm9tIG91ciBkYXRhIHJvdXRlciBzdGF0ZVxuXG5cbiAgcmV0dXJuIChfc3RhdGUkZXJyb3JzID0gc3RhdGUuZXJyb3JzKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGVycm9yc1tyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaGFwcHktcGF0aCBkYXRhIGZyb20gdGhlIG5lYXJlc3QgYW5jZXN0b3IgPEF3YWl0IC8+IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gdXNlQXN5bmNWYWx1ZSgpIHtcbiAgbGV0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChBd2FpdENvbnRleHQpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLl9kYXRhO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlcnJvciBmcm9tIHRoZSBuZWFyZXN0IGFuY2VzdG9yIDxBd2FpdCAvPiB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHVzZUFzeW5jRXJyb3IoKSB7XG4gIGxldCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQXdhaXRDb250ZXh0KTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB2b2lkIDAgOiB2YWx1ZS5fZXJyb3I7XG59XG5sZXQgYmxvY2tlcklkID0gMDtcbi8qKlxuICogQWxsb3cgdGhlIGFwcGxpY2F0aW9uIHRvIGJsb2NrIG5hdmlnYXRpb25zIHdpdGhpbiB0aGUgU1BBIGFuZCBwcmVzZW50IHRoZVxuICogdXNlciBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgdG8gY29uZmlybSB0aGUgbmF2aWdhdGlvbi4gIE1vc3RseSB1c2VkIHRvIGF2b2lkXG4gKiB1c2luZyBoYWxmLWZpbGxlZCBmb3JtIGRhdGEuICBUaGlzIGRvZXMgbm90IGhhbmRsZSBoYXJkLXJlbG9hZHMgb3JcbiAqIGNyb3NzLW9yaWdpbiBuYXZpZ2F0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiB1c2VCbG9ja2VyKHNob3VsZEJsb2NrKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VCbG9ja2VyKTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlQmxvY2tlcik7XG4gIGxldCBbYmxvY2tlcktleV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBTdHJpbmcoKytibG9ja2VySWQpKTtcbiAgbGV0IGJsb2NrZXJGdW5jdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFyZ3MgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygc2hvdWxkQmxvY2sgPT09IFwiZnVuY3Rpb25cIiA/ICEhc2hvdWxkQmxvY2soYXJncykgOiAhIXNob3VsZEJsb2NrO1xuICB9LCBbc2hvdWxkQmxvY2tdKTtcbiAgbGV0IGJsb2NrZXIgPSByb3V0ZXIuZ2V0QmxvY2tlcihibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb24pOyAvLyBDbGVhbnVwIG9uIHVubW91bnRcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gKCkgPT4gcm91dGVyLmRlbGV0ZUJsb2NrZXIoYmxvY2tlcktleSksIFtyb3V0ZXIsIGJsb2NrZXJLZXldKTsgLy8gUHJlZmVyIHRoZSBibG9ja2VyIGZyb20gc3RhdGUgc2luY2UgRGF0YVJvdXRlckNvbnRleHQgaXMgbWVtb2l6ZWQgc28gdGhpc1xuICAvLyBlbnN1cmVzIHdlIHVwZGF0ZSBvbiBibG9ja2VyIHN0YXRlIHVwZGF0ZXNcblxuICByZXR1cm4gc3RhdGUuYmxvY2tlcnMuZ2V0KGJsb2NrZXJLZXkpIHx8IGJsb2NrZXI7XG59XG5jb25zdCBhbHJlYWR5V2FybmVkID0ge307XG5cbmZ1bmN0aW9uIHdhcm5pbmdPbmNlKGtleSwgY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQgJiYgIWFscmVhZHlXYXJuZWRba2V5XSkge1xuICAgIGFscmVhZHlXYXJuZWRba2V5XSA9IHRydWU7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsc2UsIG1lc3NhZ2UpIDogdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBSZW1peCBSb3V0ZXIgaW5zdGFuY2UsIHJlbmRlciB0aGUgYXBwcm9wcmlhdGUgVUlcbiAqL1xuZnVuY3Rpb24gUm91dGVyUHJvdmlkZXIoX3JlZikge1xuICBsZXQge1xuICAgIGZhbGxiYWNrRWxlbWVudCxcbiAgICByb3V0ZXJcbiAgfSA9IF9yZWY7XG4gIGxldCBnZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHJvdXRlci5zdGF0ZSwgW3JvdXRlcl0pOyAvLyBTeW5jIHJvdXRlciBzdGF0ZSB0byBvdXIgY29tcG9uZW50IHN0YXRlIHRvIGZvcmNlIHJlLXJlbmRlcnNcblxuICBsZXQgc3RhdGUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShyb3V0ZXIuc3Vic2NyaWJlLCBnZXRTdGF0ZSwgLy8gV2UgaGF2ZSB0byBwcm92aWRlIHRoaXMgc28gUmVhY3RAMTggZG9lc24ndCBjb21wbGFpbiBkdXJpbmcgaHlkcmF0aW9uLFxuICAvLyBidXQgd2UgcGFzcyBvdXIgc2VyaWFsaXplZCBoeWRyYXRpb24gZGF0YSBpbnRvIHRoZSByb3V0ZXIgc28gc3RhdGUgaGVyZVxuICAvLyBpcyBhbHJlYWR5IHN5bmNlZCB3aXRoIHdoYXQgdGhlIHNlcnZlciBzYXdcbiAgZ2V0U3RhdGUpO1xuICBsZXQgbmF2aWdhdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUhyZWY6IHJvdXRlci5jcmVhdGVIcmVmLFxuICAgICAgZW5jb2RlTG9jYXRpb246IHJvdXRlci5lbmNvZGVMb2NhdGlvbixcbiAgICAgIGdvOiBuID0+IHJvdXRlci5uYXZpZ2F0ZShuKSxcbiAgICAgIHB1c2g6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSksXG4gICAgICByZXBsYWNlOiAodG8sIHN0YXRlLCBvcHRzKSA9PiByb3V0ZXIubmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pXG4gICAgfTtcbiAgfSwgW3JvdXRlcl0pO1xuICBsZXQgYmFzZW5hbWUgPSByb3V0ZXIuYmFzZW5hbWUgfHwgXCIvXCI7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICByb3V0ZXIsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogZmFsc2UsXG4gICAgYmFzZW5hbWVcbiAgfSksIFtyb3V0ZXIsIG5hdmlnYXRvciwgYmFzZW5hbWVdKTsgLy8gVGhlIGZyYWdtZW50IGFuZCB7bnVsbH0gaGVyZSBhcmUgaW1wb3J0YW50ISAgV2UgbmVlZCB0aGVtIHRvIGtlZXAgUmVhY3QgMTgnc1xuICAvLyB1c2VJZCBoYXBweSB3aGVuIHdlIGFyZSBzZXJ2ZXItcmVuZGVyaW5nIHNpbmNlIHdlIG1heSBoYXZlIGEgPHNjcmlwdD4gaGVyZVxuICAvLyBjb250YWluaW5nIHRoZSBoeWRyYXRlZCBzZXJ2ZXItc2lkZSBzdGF0aWNDb250ZXh0IChmcm9tIFN0YXRpY1JvdXRlclByb3ZpZGVyKS5cbiAgLy8gdXNlSWQgcmVsaWVzIG9uIHRoZSBjb21wb25lbnQgdHJlZSBzdHJ1Y3R1cmUgdG8gZ2VuZXJhdGUgZGV0ZXJtaW5pc3RpYyBpZCdzXG4gIC8vIHNvIHdlIG5lZWQgdG8gZW5zdXJlIGl0IHJlbWFpbnMgdGhlIHNhbWUgb24gdGhlIGNsaWVudCBldmVuIHRob3VnaFxuICAvLyB3ZSBkb24ndCBuZWVkIHRoZSA8c2NyaXB0PiB0YWdcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGRhdGFSb3V0ZXJDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3RhdGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IHJvdXRlci5iYXNlbmFtZSxcbiAgICBsb2NhdGlvbjogcm91dGVyLnN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiByb3V0ZXIuc3RhdGUuaGlzdG9yeUFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IG5hdmlnYXRvclxuICB9LCByb3V0ZXIuc3RhdGUuaW5pdGlhbGl6ZWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXMsIG51bGwpIDogZmFsbGJhY2tFbGVtZW50KSkpLCBudWxsKTtcbn1cblxuLyoqXG4gKiBBIDxSb3V0ZXI+IHRoYXQgc3RvcmVzIGFsbCBlbnRyaWVzIGluIG1lbW9yeS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlci1jb21wb25lbnRzL21lbW9yeS1yb3V0ZXJcbiAqL1xuZnVuY3Rpb24gTWVtb3J5Um91dGVyKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgaW5pdGlhbEVudHJpZXMsXG4gICAgaW5pdGlhbEluZGV4XG4gIH0gPSBfcmVmMjtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICAgIGluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEluZGV4LFxuICAgICAgdjVDb21wYXQ6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogTm90ZTogVGhpcyBBUEkgaXMgbW9zdGx5IHVzZWZ1bCBpbiBSZWFjdC5Db21wb25lbnQgc3ViY2xhc3NlcyB0aGF0IGFyZSBub3RcbiAqIGFibGUgdG8gdXNlIGhvb2tzLiBJbiBmdW5jdGlvbmFsIGNvbXBvbmVudHMsIHdlIHJlY29tbWVuZCB5b3UgdXNlIHRoZVxuICogYHVzZU5hdmlnYXRlYCBob29rIGluc3RlYWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL25hdmlnYXRlXG4gKi9cbmZ1bmN0aW9uIE5hdmlnYXRlKF9yZWYzKSB7XG4gIGxldCB7XG4gICAgdG8sXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICByZWxhdGl2ZVxuICB9ID0gX3JlZjM7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mXG4gIC8vIHRoZSByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwiPE5hdmlnYXRlPiBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyghUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCkuc3RhdGljLCBcIjxOYXZpZ2F0ZT4gbXVzdCBub3QgYmUgdXNlZCBvbiB0aGUgaW5pdGlhbCByZW5kZXIgaW4gYSA8U3RhdGljUm91dGVyPi4gXCIgKyBcIlRoaXMgaXMgYSBuby1vcCwgYnV0IHlvdSBzaG91bGQgbW9kaWZ5IHlvdXIgY29kZSBzbyB0aGUgPE5hdmlnYXRlPiBpcyBcIiArIFwib25seSBldmVyIHJlbmRlcmVkIGluIHJlc3BvbnNlIHRvIHNvbWUgdXNlciBpbnRlcmFjdGlvbiBvciBzdGF0ZSBjaGFuZ2UuXCIpIDogdm9pZCAwO1xuICBsZXQgZGF0YVJvdXRlclN0YXRlID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBdm9pZCBraWNraW5nIG9mZiBtdWx0aXBsZSBuYXZpZ2F0aW9ucyBpZiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGFcbiAgICAvLyBkYXRhLXJvdXRlciBuYXZpZ2F0aW9uLCBzaW5jZSBjb21wb25lbnRzIGdldCByZS1yZW5kZXJlZCB3aGVuIHdlIGVudGVyXG4gICAgLy8gYSBzdWJtaXR0aW5nL2xvYWRpbmcgc3RhdGVcbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlICYmIGRhdGFSb3V0ZXJTdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlICE9PSBcImlkbGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICByZXBsYWNlLFxuICAgICAgc3RhdGUsXG4gICAgICByZWxhdGl2ZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY2hpbGQgcm91dGUncyBlbGVtZW50LCBpZiB0aGVyZSBpcyBvbmUuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL291dGxldFxuICovXG5mdW5jdGlvbiBPdXRsZXQocHJvcHMpIHtcbiAgcmV0dXJuIHVzZU91dGxldChwcm9wcy5jb250ZXh0KTtcbn1cblxuLyoqXG4gKiBEZWNsYXJlcyBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkIGF0IGEgY2VydGFpbiBVUkwgcGF0aC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvcm91dGVcbiAqL1xuZnVuY3Rpb24gUm91dGUoX3Byb3BzKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiQSA8Um91dGU+IGlzIG9ubHkgZXZlciB0byBiZSB1c2VkIGFzIHRoZSBjaGlsZCBvZiA8Um91dGVzPiBlbGVtZW50LCBcIiArIFwibmV2ZXIgcmVuZGVyZWQgZGlyZWN0bHkuIFBsZWFzZSB3cmFwIHlvdXIgPFJvdXRlPiBpbiBhIDxSb3V0ZXM+LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBsb2NhdGlvbiBjb250ZXh0IGZvciB0aGUgcmVzdCBvZiB0aGUgYXBwLlxuICpcbiAqIE5vdGU6IFlvdSB1c3VhbGx5IHdvbid0IHJlbmRlciBhIDxSb3V0ZXI+IGRpcmVjdGx5LiBJbnN0ZWFkLCB5b3UnbGwgcmVuZGVyIGFcbiAqIHJvdXRlciB0aGF0IGlzIG1vcmUgc3BlY2lmaWMgdG8geW91ciBlbnZpcm9ubWVudCBzdWNoIGFzIGEgPEJyb3dzZXJSb3V0ZXI+XG4gKiBpbiB3ZWIgYnJvd3NlcnMgb3IgYSA8U3RhdGljUm91dGVyPiBmb3Igc2VydmVyIHJlbmRlcmluZy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlci1jb21wb25lbnRzL3JvdXRlclxuICovXG5mdW5jdGlvbiBSb3V0ZXIoX3JlZjQpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWVQcm9wID0gXCIvXCIsXG4gICAgY2hpbGRyZW4gPSBudWxsLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvblByb3AsXG4gICAgbmF2aWdhdGlvblR5cGUgPSBBY3Rpb24uUG9wLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3AgPSBmYWxzZVxuICB9ID0gX3JlZjQ7XG4gICEhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIllvdSBjYW5ub3QgcmVuZGVyIGEgPFJvdXRlcj4gaW5zaWRlIGFub3RoZXIgPFJvdXRlcj4uXCIgKyBcIiBZb3Ugc2hvdWxkIG5ldmVyIGhhdmUgbW9yZSB0aGFuIG9uZSBpbiB5b3VyIGFwcC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDsgLy8gUHJlc2VydmUgdHJhaWxpbmcgc2xhc2hlcyBvbiBiYXNlbmFtZSwgc28gd2UgY2FuIGxldCB0aGUgdXNlciBjb250cm9sXG4gIC8vIHRoZSBlbmZvcmNlbWVudCBvZiB0cmFpbGluZyBzbGFzaGVzIHRocm91Z2hvdXQgdGhlIGFwcFxuXG4gIGxldCBiYXNlbmFtZSA9IGJhc2VuYW1lUHJvcC5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKTtcbiAgbGV0IG5hdmlnYXRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3BcbiAgfSksIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCBzdGF0aWNQcm9wXSk7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvblByb3AgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsb2NhdGlvblByb3AgPSBwYXJzZVBhdGgobG9jYXRpb25Qcm9wKTtcbiAgfVxuXG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiLFxuICAgIHN0YXRlID0gbnVsbCxcbiAgICBrZXkgPSBcImRlZmF1bHRcIlxuICB9ID0gbG9jYXRpb25Qcm9wO1xuICBsZXQgbG9jYXRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRyYWlsaW5nUGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICBpZiAodHJhaWxpbmdQYXRobmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgcGF0aG5hbWU6IHRyYWlsaW5nUGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgaGFzaCxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGtleVxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb25UeXBlXG4gICAgfTtcbiAgfSwgW2Jhc2VuYW1lLCBwYXRobmFtZSwgc2VhcmNoLCBoYXNoLCBzdGF0ZSwga2V5LCBuYXZpZ2F0aW9uVHlwZV0pO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhsb2NhdGlvbkNvbnRleHQgIT0gbnVsbCwgXCI8Um91dGVyIGJhc2VuYW1lPVxcXCJcIiArIGJhc2VuYW1lICsgXCJcXFwiPiBpcyBub3QgYWJsZSB0byBtYXRjaCB0aGUgVVJMIFwiICsgKFwiXFxcIlwiICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoICsgXCJcXFwiIGJlY2F1c2UgaXQgZG9lcyBub3Qgc3RhcnQgd2l0aCB0aGUgXCIpICsgXCJiYXNlbmFtZSwgc28gdGhlIDxSb3V0ZXI+IHdvbid0IHJlbmRlciBhbnl0aGluZy5cIikgOiB2b2lkIDA7XG5cbiAgaWYgKGxvY2F0aW9uQ29udGV4dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbmF2aWdhdGlvbkNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHZhbHVlOiBsb2NhdGlvbkNvbnRleHRcbiAgfSkpO1xufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhIG5lc3RlZCB0cmVlIG9mIDxSb3V0ZT4gZWxlbWVudHMgdGhhdCByZW5kZXJzIHRoZSBicmFuY2hcbiAqIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vY29tcG9uZW50cy9yb3V0ZXNcbiAqL1xuZnVuY3Rpb24gUm91dGVzKF9yZWY1KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgbG9jYXRpb25cbiAgfSA9IF9yZWY1O1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTsgLy8gV2hlbiBpbiBhIERhdGFSb3V0ZXJDb250ZXh0IF93aXRob3V0XyBjaGlsZHJlbiwgd2UgdXNlIHRoZSByb3V0ZXIgcm91dGVzXG4gIC8vIGRpcmVjdGx5LiAgSWYgd2UgaGF2ZSBjaGlsZHJlbiwgdGhlbiB3ZSdyZSBpbiBhIGRlc2NlbmRhbnQgdHJlZSBhbmQgd2VcbiAgLy8gbmVlZCB0byB1c2UgY2hpbGQgcm91dGVzLlxuXG4gIGxldCByb3V0ZXMgPSBkYXRhUm91dGVyQ29udGV4dCAmJiAhY2hpbGRyZW4gPyBkYXRhUm91dGVyQ29udGV4dC5yb3V0ZXIucm91dGVzIDogY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgcmV0dXJuIHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdXNlIGZvciByZW5kZXJpbmcgbGF6aWx5IGxvYWRlZCBkYXRhIGZyb20gcmV0dXJuaW5nIGRlZmVyKClcbiAqIGluIGEgbG9hZGVyIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIEF3YWl0KF9yZWY2KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZXJyb3JFbGVtZW50LFxuICAgIHJlc29sdmVcbiAgfSA9IF9yZWY2O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRFcnJvckJvdW5kYXJ5LCB7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICBlcnJvckVsZW1lbnQ6IGVycm9yRWxlbWVudFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNvbHZlQXdhaXQsIG51bGwsIGNoaWxkcmVuKSk7XG59XG52YXIgQXdhaXRSZW5kZXJTdGF0dXM7XG5cbihmdW5jdGlvbiAoQXdhaXRSZW5kZXJTdGF0dXMpIHtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJwZW5kaW5nXCJdID0gMF0gPSBcInBlbmRpbmdcIjtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJzdWNjZXNzXCJdID0gMV0gPSBcInN1Y2Nlc3NcIjtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJlcnJvclwiXSA9IDJdID0gXCJlcnJvclwiO1xufSkoQXdhaXRSZW5kZXJTdGF0dXMgfHwgKEF3YWl0UmVuZGVyU3RhdHVzID0ge30pKTtcblxuY29uc3QgbmV2ZXJTZXR0bGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKCgpID0+IHt9KTtcblxuY2xhc3MgQXdhaXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCI8QXdhaXQ+IGNhdWdodCB0aGUgZm9sbG93aW5nIGVycm9yIGR1cmluZyByZW5kZXJcIiwgZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZXJyb3JFbGVtZW50LFxuICAgICAgcmVzb2x2ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBwcm9taXNlID0gbnVsbDtcbiAgICBsZXQgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcblxuICAgIGlmICghKHJlc29sdmUgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgLy8gRGlkbid0IGdldCBhIHByb21pc2UgLSBwcm92aWRlIGFzIGEgcmVzb2x2ZWQgcHJvbWlzZVxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2VzcztcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9kYXRhXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiByZXNvbHZlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcbiAgICAgIC8vIENhdWdodCBhIHJlbmRlciBlcnJvciwgcHJvdmlkZSBpdCBhcyBhIHJlamVjdGVkIHByb21pc2VcbiAgICAgIHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yO1xuICAgICAgbGV0IHJlbmRlckVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdCgpLmNhdGNoKCgpID0+IHt9KTsgLy8gQXZvaWQgdW5oYW5kbGVkIHJlamVjdGlvbiB3YXJuaW5nc1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHJlbmRlckVycm9yXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlc29sdmUuX3RyYWNrZWQpIHtcbiAgICAgIC8vIEFscmVhZHkgdHJhY2tlZCBwcm9taXNlIC0gY2hlY2sgY29udGVudHNcbiAgICAgIHByb21pc2UgPSByZXNvbHZlO1xuICAgICAgc3RhdHVzID0gcHJvbWlzZS5fZXJyb3IgIT09IHVuZGVmaW5lZCA/IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yIDogcHJvbWlzZS5fZGF0YSAhPT0gdW5kZWZpbmVkID8gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2VzcyA6IEF3YWl0UmVuZGVyU3RhdHVzLnBlbmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJhdyAodW50cmFja2VkKSBwcm9taXNlIC0gdHJhY2sgaXRcbiAgICAgIHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLnBlbmRpbmc7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBwcm9taXNlID0gcmVzb2x2ZS50aGVuKGRhdGEgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmUsIFwiX2RhdGFcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGRhdGFcbiAgICAgIH0pLCBlcnJvciA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGVycm9yXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgJiYgcHJvbWlzZS5fZXJyb3IgaW5zdGFuY2VvZiBBYm9ydGVkRGVmZXJyZWRFcnJvcikge1xuICAgICAgLy8gRnJlZXplIHRoZSBVSSBieSB0aHJvd2luZyBhIG5ldmVyIHJlc29sdmVkIHByb21pc2VcbiAgICAgIHRocm93IG5ldmVyU2V0dGxlZFByb21pc2U7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgJiYgIWVycm9yRWxlbWVudCkge1xuICAgICAgLy8gTm8gZXJyb3JFbGVtZW50LCB0aHJvdyB0byB0aGUgbmVhcmVzdCByb3V0ZS1sZXZlbCBlcnJvciBib3VuZGFyeVxuICAgICAgdGhyb3cgcHJvbWlzZS5fZXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IpIHtcbiAgICAgIC8vIFJlbmRlciB2aWEgb3VyIGVycm9yRWxlbWVudFxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvbWlzZSxcbiAgICAgICAgY2hpbGRyZW46IGVycm9yRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2Vzcykge1xuICAgICAgLy8gUmVuZGVyIGNoaWxkcmVuIHdpdGggcmVzb2x2ZWQgdmFsdWVcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHByb21pc2UsXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSk7XG4gICAgfSAvLyBUaHJvdyB0byB0aGUgc3VzcGVuc2UgYm91bmRhcnlcblxuXG4gICAgdGhyb3cgcHJvbWlzZTtcbiAgfVxuXG59XG4vKipcbiAqIEBwcml2YXRlXG4gKiBJbmRpcmVjdGlvbiB0byBsZXZlcmFnZSB1c2VBc3luY1ZhbHVlIGZvciBhIHJlbmRlci1wcm9wIEFQSSBvbiA8QXdhaXQ+XG4gKi9cblxuXG5mdW5jdGlvbiBSZXNvbHZlQXdhaXQoX3JlZjcpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjc7XG4gIGxldCBkYXRhID0gdXNlQXN5bmNWYWx1ZSgpO1xuICBsZXQgdG9SZW5kZXIgPSB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IGNoaWxkcmVuKGRhdGEpIDogY2hpbGRyZW47XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdG9SZW5kZXIpO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBVVElMU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIENyZWF0ZXMgYSByb3V0ZSBjb25maWcgZnJvbSBhIFJlYWN0IFwiY2hpbGRyZW5cIiBvYmplY3QsIHdoaWNoIGlzIHVzdWFsbHlcbiAqIGVpdGhlciBhIGA8Um91dGU+YCBlbGVtZW50IG9yIGFuIGFycmF5IG9mIHRoZW0uIFVzZWQgaW50ZXJuYWxseSBieVxuICogYDxSb3V0ZXM+YCB0byBjcmVhdGUgYSByb3V0ZSBjb25maWcgZnJvbSBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9jcmVhdGUtcm91dGVzLWZyb20tY2hpbGRyZW5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihjaGlsZHJlbiwgcGFyZW50UGF0aCkge1xuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFtdO1xuICB9XG5cbiAgbGV0IHJvdXRlcyA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIElnbm9yZSBub24tZWxlbWVudHMuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBtb3JlIGVhc2lseSBpbmxpbmVcbiAgICAgIC8vIGNvbmRpdGlvbmFscyBpbiB0aGVpciByb3V0ZSBjb25maWcuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHRyZWVQYXRoID0gWy4uLnBhcmVudFBhdGgsIGluZGV4XTtcblxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgICAvLyBUcmFuc3BhcmVudGx5IHN1cHBvcnQgUmVhY3QuRnJhZ21lbnQgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICAgIHJvdXRlcy5wdXNoLmFwcGx5KHJvdXRlcywgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4sIHRyZWVQYXRoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgIShlbGVtZW50LnR5cGUgPT09IFJvdXRlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiW1wiICsgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBlbGVtZW50LnR5cGUgOiBlbGVtZW50LnR5cGUubmFtZSkgKyBcIl0gaXMgbm90IGEgPFJvdXRlPiBjb21wb25lbnQuIEFsbCBjb21wb25lbnQgY2hpbGRyZW4gb2YgPFJvdXRlcz4gbXVzdCBiZSBhIDxSb3V0ZT4gb3IgPFJlYWN0LkZyYWdtZW50PlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEoIWVsZW1lbnQucHJvcHMuaW5kZXggfHwgIWVsZW1lbnQucHJvcHMuY2hpbGRyZW4pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJBbiBpbmRleCByb3V0ZSBjYW5ub3QgaGF2ZSBjaGlsZCByb3V0ZXMuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbGV0IHJvdXRlID0ge1xuICAgICAgaWQ6IGVsZW1lbnQucHJvcHMuaWQgfHwgdHJlZVBhdGguam9pbihcIi1cIiksXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBlbGVtZW50LnByb3BzLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbGVtZW50OiBlbGVtZW50LnByb3BzLmVsZW1lbnQsXG4gICAgICBDb21wb25lbnQ6IGVsZW1lbnQucHJvcHMuQ29tcG9uZW50LFxuICAgICAgaW5kZXg6IGVsZW1lbnQucHJvcHMuaW5kZXgsXG4gICAgICBwYXRoOiBlbGVtZW50LnByb3BzLnBhdGgsXG4gICAgICBsb2FkZXI6IGVsZW1lbnQucHJvcHMubG9hZGVyLFxuICAgICAgYWN0aW9uOiBlbGVtZW50LnByb3BzLmFjdGlvbixcbiAgICAgIGVycm9yRWxlbWVudDogZWxlbWVudC5wcm9wcy5lcnJvckVsZW1lbnQsXG4gICAgICBFcnJvckJvdW5kYXJ5OiBlbGVtZW50LnByb3BzLkVycm9yQm91bmRhcnksXG4gICAgICBoYXNFcnJvckJvdW5kYXJ5OiBlbGVtZW50LnByb3BzLkVycm9yQm91bmRhcnkgIT0gbnVsbCB8fCBlbGVtZW50LnByb3BzLmVycm9yRWxlbWVudCAhPSBudWxsLFxuICAgICAgc2hvdWxkUmV2YWxpZGF0ZTogZWxlbWVudC5wcm9wcy5zaG91bGRSZXZhbGlkYXRlLFxuICAgICAgaGFuZGxlOiBlbGVtZW50LnByb3BzLmhhbmRsZSxcbiAgICAgIGxhenk6IGVsZW1lbnQucHJvcHMubGF6eVxuICAgIH07XG5cbiAgICBpZiAoZWxlbWVudC5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgcm91dGUuY2hpbGRyZW4gPSBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgdHJlZVBhdGgpO1xuICAgIH1cblxuICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgfSk7XG4gIHJldHVybiByb3V0ZXM7XG59XG4vKipcbiAqIFJlbmRlcnMgdGhlIHJlc3VsdCBvZiBgbWF0Y2hSb3V0ZXMoKWAgaW50byBhIFJlYWN0IGVsZW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIHJldHVybiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzKTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0RXJyb3JCb3VuZGFyeShyb3V0ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHJvdXRlLkNvbXBvbmVudCAmJiByb3V0ZS5lbGVtZW50KSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYENvbXBvbmVudGAgYW5kIGBlbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gXCIgKyBcImBlbGVtZW50YCB3aWxsIGJlIGlnbm9yZWQuXCIpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZS5FcnJvckJvdW5kYXJ5ICYmIHJvdXRlLmVycm9yRWxlbWVudCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgaW5jbHVkZSBib3RoIGBFcnJvckJvdW5kYXJ5YCBhbmQgYGVycm9yRWxlbWVudGAgb24geW91ciByb3V0ZSAtIFwiICsgXCJgZXJyb3JFbGVtZW50YCB3aWxsIGJlIGlnbm9yZWQuXCIpIDogdm9pZCAwO1xuICAgIH1cbiAgfSAvLyBOb3RlOiB0aGlzIGNoZWNrIGFsc28gb2NjdXJzIGluIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiBzbyB1cGRhdGVcbiAgLy8gdGhlcmUgaWYgeW91IGNoYW5nZSB0aGlzXG5cblxuICByZXR1cm4gQm9vbGVhbihyb3V0ZS5FcnJvckJvdW5kYXJ5KSB8fCBCb29sZWFuKHJvdXRlLmVycm9yRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeVJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSxcbiAgICBoaXN0b3J5OiBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICAgIGluaXRpYWxFbnRyaWVzOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEluZGV4OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmluaXRpYWxJbmRleFxuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaHlkcmF0aW9uRGF0YSxcbiAgICByb3V0ZXMsXG4gICAgZGV0ZWN0RXJyb3JCb3VuZGFyeVxuICB9KS5pbml0aWFsaXplKCk7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IHsgQXdhaXQsIE1lbW9yeVJvdXRlciwgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVyUHJvdmlkZXIsIFJvdXRlcywgRGF0YVJvdXRlckNvbnRleHQgYXMgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0LCBEYXRhUm91dGVyU3RhdGVDb250ZXh0IGFzIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCBMb2NhdGlvbkNvbnRleHQgYXMgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgTmF2aWdhdGlvbkNvbnRleHQgYXMgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBSb3V0ZUNvbnRleHQgYXMgVU5TQUZFX1JvdXRlQ29udGV4dCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSBhcyBVTlNBRkVfZGV0ZWN0RXJyb3JCb3VuZGFyeSwgY3JlYXRlTWVtb3J5Um91dGVyLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4sIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiBhcyBjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMsIHJlbmRlck1hdGNoZXMsIHVzZUJsb2NrZXIgYXMgdW5zdGFibGVfdXNlQmxvY2tlciwgdXNlQWN0aW9uRGF0YSwgdXNlQXN5bmNFcnJvciwgdXNlQXN5bmNWYWx1ZSwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2FkZXJEYXRhLCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU1hdGNoZXMsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUmV2YWxpZGF0b3IsIHVzZVJvdXRlRXJyb3IsIHVzZVJvdXRlTG9hZGVyRGF0YSwgdXNlUm91dGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc0OTdhNmRjMWMwNGRkOWJkMWY5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJNYWluSGVhZGVyIiwiRm9vdGVyIiwiU2VjdGlvbnMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJQcmljZXMiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=