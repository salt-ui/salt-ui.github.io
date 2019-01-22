(function() {
  register({
    ver: 1,
    path: "",
    name: "sw.pwa.js"
  });

  /* = = = = = = = = = =
   *    - 功能函数 -    |
   * - - - - - - - - - */

  function emitUpdate(data) {
    var event = document.createEvent("Event");
    event.initEvent("sw.update", true, true);
    event.data = data;
    window.dispatchEvent(event);
  }

  function register(config) {
    if ("serviceWorker" in navigator) {
      var swUrl = config.path + "/" + config.name + "?v=" + config.ver;
      navigator.serviceWorker
        .register(swUrl)
        .then(function(registration) {
          if (config && config.onRegster) {
            config.onRegster(registration);
          }

          registration.onupdatefound = function() {
            var installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }
            installingWorker.onstatechange = function() {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  _print("更新内容已安装。");

                  if (config && config.onUpdate) {
                    config.onUpdate(registration);
                  }
                } else {
                  _print("离线内容已缓存。");

                  if (config && config.onSuccess) {
                    config.onSuccess(registration);
                  }
                }
              }
            };
          };
        })
        .catch(function(error) {
          console.error("serviceWorker注册期间发生错误:", error);
        });
    }
  }

  function unregister() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.unregister();
      });
    }
  }

  function _print(args) {
    var _console;

    (_console = console).log.apply(
      _console,
      [
        "%c regSW ",
        "background: #0f0; color: #555; padding: 2px 0.5em; " +
          "border-radius: 0.5em;"
      ].concat([args])
    );
  }
})();
