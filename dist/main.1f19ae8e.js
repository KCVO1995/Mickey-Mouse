// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var css = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n*::before, *::after {box-sizing: border-box;}\n\nbody{\n    background-color: #c33;\n}\n.mickey{\n    top: 10px;\n    position: relative;\n    width: 850px;\n    height: 890px;\n}\n.mickey * {\n    position: absolute;\n}\n.head {\n    background-color: #000;\n    width: 520px;\n    height: 525px;\n    border-radius: 50%;\n    left: 170px;\n    top: 210px;\n}\n.ear {\n    background-color: #000;\n    height: 350px;\n    width: 280px;\n    border-radius: 50%;\n    top: 0;\n}\n.ear.left {\n    left: 50px;\n    transform: rotate(20deg);\n}\n.ear.right {\n    right: 50px;\n    transform: rotate(-20deg);\n}\n\n.face {\n    position: relative;\n    width: 520px;\n    height: 530px;\n    z-index: 1;\n}\n.face .front {\n    background-color: #fff;\n    width: 215px;\n    height: 380px;\n    border-radius: 50%;\n    top: 35px;\n}\n.face .front.left {\n    left: 65px;\n}\n.face .front.right {\n    right: 65px;\n}\n\n.face .cheek {\n    background-color: #fff;\n    width: 150px;\n    height: 270px;\n    top: 260px;\n    border-radius: 50%;\n    border: 5px solid #000;\n    border-bottom: 0px solid #000;\n}\n.face .cheek.left {\n    left: 20px;\n    border-right: 0px solid #000;\n    transform: rotate(-45deg);\n}\n.face .cheek.right {\n    border-left: 0px solid #000;\n    right: 20px;\n    transform: rotate(45deg);\n}\n.face .chin {\n    background-color: #fff;\n    width: 180px;\n    height: 100px;\n    border-bottom: 5px solid #000;\n    border-radius: 50%;\n    left: 170px;\n    top: 440px;\n}\n.face .mouth-wrapper {\n    width: 420px;\n    height: 190px;\n    left: 50px;\n    top: 335px;\n    overflow: hidden;\n}\n.face .mouth-wrapper .mouth {\n    background-color: #000;\n    border-width: 5px 10px;\n    border-style: solid;\n    border-radius: 50%;\n    width: 155px;\n    height: 200px;\n    left: 132.5px;\n    bottom: 0px;\n    overflow: hidden;\n}\n.face .mouth-wrapper .mouth .tong1 {\n    width: 100px;\n    height: 100px;\n    background-color: #f00;\n    border-radius: 50%;\n    bottom: -50px;\n    left: -10px;\n}\n.face .mouth-wrapper .mouth .tong2 {\n    width: 100px;\n    height: 100px;\n    background-color: #f00;\n    border-radius: 50%;\n    border-top: 5px solid #000;\n    bottom: -45px;\n    right: -10px;\n}\n.face .mouth-wrapper .lip {\n    width: 380px;\n    height: 280px;\n    bottom: 70px; \n    background-color: #fff;\n    border-radius: 50%;\n    left: 20px;\n    border-bottom: 10px solid #000;\n}\n\n.face .mouth-wrapper .line {\n    width: 50px;\n    height: 20px;\n    border-radius: 50%;\n    border-top: 5px solid #000;\n    top: 5px;\n}\n.face .mouth-wrapper .line.left {\n    left: 0px;\n    transform: rotate(-20deg);\n}\n.face .mouth-wrapper .line.right {\n    right: 0px;\n    transform: rotate(20deg);\n}\n\n.eyes {\n    width: 160px;\n    height: 190px;\n    left: 180px;\n    top: 130px;\n}\n.eyes .eye {\n    width: 75px;\n    height: 180px;\n    border-width: 3px 7px;\n    border-radius: 50%;\n    border-style: solid;\n    overflow: hidden;\n}\n.eyes .eye.left {\n    left: 0;\n    transform: rotate(-5deg);\n}\n.eyes .eye.right {\n    right: 0;\n    transform: rotate(5deg);\n}\n.eyes .eye.left .pupil {\n    width: 35px;\n    height: 65px;\n    background-color: #000;\n    border-radius: 50%;\n    bottom: 0px;\n    left: 15px;\n    transform: rotate(-5deg);\n}\n.eyes .eye.right .pupil {\n    width: 35px;\n    height: 65px;\n    background-color: #000;\n    border-radius: 50%;\n    bottom: 0px;\n    right: 15px;\n    transform: rotate(5deg);\n}\n@keyframes lEyelidTop {\n    0%{\n        top: -135px;\n    }\n    4%{\n        top: 0px;\n    }\n    8%{\n        top: -135px;\n    }\n    100%{\n        top: -135px;\n    }\n}\n.eyes .eyelidTop {\n    width: 60px;\n    height: 130px;\n    border-bottom: 4px solid #000;\n    background-color: #f5f5f5;\n    top: -135px;\n    animation-delay: 0.1s;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    animation-name: lEyelidTop;\n    animation-play-state: running;\n    animation-timing-function: linear;\n}\n@keyframes lEyelidBottom {\n    0% {\n        bottom: -45px;\n    }\n\n    4% {\n        bottom: 0;\n    }\n\n    8% {\n        bottom: -45px;\n    }\n\n    100% {\n        bottom: -45px;\n    }\n}\n.eyes .eyelidBottom {\n    width: 60px;\n    height: 45px;\n    border-top: 4px solid #000;\n    background-color: #f5f5f5;\n    bottom: -45px;\n    animation-delay: 0.1s;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    animation-name: lEyelidBottom;\n    animation-play-state: running;\n    animation-timing-function: linear;\n}\n\n.topNose {\n    width: 140px;\n    height: 50px;\n    left: 190px;\n    border-top: 8px solid #000;\n    border-radius: 50%;\n    top: 290px;\n    background-color: #fff;\n}\n@keyframes rotatingNose {\n    0%{\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(5deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n.nose {\n    width: 155px;\n    height: 85px;\n    border-radius: 50%;\n    background-color: #000;\n    left: 182.5px;\n    top: 320px;\n}\n.nose:hover {    \n    animation-duration: 120ms;\n    animation-name: rotatingNose;\n    animation-play-state: running;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n\n}";
var n = 0;
var time = 200;

var run = function run() {
  if (n >= css.length) {
    window.clearInterval(id);
    return;
  }

  n += 1;
  code.innerText = css.substr(0, n);
  styleCss.innerHTML = css.substr(0, n);
  code.scrollTop = 100000;
};

var id = setInterval(run, time);
var speeds = {
  '200': 1,
  '100': 2,
  '50': 3,
  '25': 4,
  '12.5': 5,
  '6.25': 6
};

var resetSpeed = function resetSpeed() {
  for (key in speeds) {
    speed.innerText = '速度: ' + speeds[time];
  }

  window.clearInterval(id);
  id = setInterval(run, time);
};

speedUp.onclick = function () {
  if (time > 10) {
    time /= 2;
    resetSpeed();
  }
};

speedDown.onclick = function () {
  if (time < 200) {
    time *= 2;
    resetSpeed();
  }
};
},{}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "8129" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map