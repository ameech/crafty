(function() {
  var Crafty = {};

  Crafty.Scope = function() {
    this._watchers = [];
  }

  Crafty.Scope.prototype.watch = function(watchFn, listenerFn) {
    this._watchers.push({
      watch  : watchFn,
      listen : listenerFn
    });
  }

  Crafty.Scope.prototype.digest = function() {
    var self = this;
    this._watchers.forEach(function(watcher) {
      watcher.watch(self);
      watcher.listen();
    });
  }

  window.Crafty = Crafty;
})();