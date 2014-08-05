describe('Scope', function() {
  var crafty;

  beforeEach(function() {
    crafty = window.Crafty;
  });

  it('can be constructed and used as an object', function() {
    var scope = new crafty.Scope();
    scope.xProp = 1;

    expect(scope.xProp).toBe(1);
  });

  describe('digest', function() {
    var scope;

    beforeEach(function() {
      scope = new crafty.Scope();
    });

    it('calls the listener function of a watch on first digest', function() {
      var watchFn    = function() { return 'test'; };
      var listenerFn = jasmine.createSpy();
      scope.watch(watchFn, listenerFn);

      scope.digest();

      expect(listenerFn).toHaveBeenCalled();
    });

    it('calls the watch function with the scope as the argument', function() {
      var watchFn    = jasmine.createSpy();
      var listenerFn = function() {};
      scope.watch(watchFn, listenerFn);

      scope.digest();

      expect(watchFn).toHaveBeenCalledWith(scope);
    });   
  });
});