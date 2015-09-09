System.register('ionic/gestures/gesture', ['ionic/util', 'ionic/gestures/hammer'], function (_export) {
  'use strict';

  var util, Hammer, Gesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_ionicGesturesHammer) {
      Hammer = _ionicGesturesHammer.Hammer;
    }],
    execute: function () {
      Gesture = (function () {
        function Gesture(element) {
          var opts = arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, Gesture);

          util.defaults(opts, { domEvents: true });
          this.element = element;
          this.direction = opts.direction || 'x';
          opts.direction = this.direction === 'x' ? Hammer.DIRECTION_HORIZONTAL : Hammer.DIRECTION_VERTICAL;
          this._options = opts;
          this._callbacks = {};
        }

        _createClass(Gesture, [{
          key: 'options',
          value: function options() {
            var opts = arguments[0] === undefined ? {} : arguments[0];

            util.extend(this._options, opts);
          }
        }, {
          key: 'on',
          value: function on(type, cb) {
            this.hammertime.on(type, util.noop);
            (this._callbacks[type] || (this._callbacks[type] = [])).push(cb);
            this.element.addEventListener(type, cb);
          }
        }, {
          key: 'listen',
          value: function listen() {
            this.hammertime = Hammer(this.element, this._options);
          }
        }, {
          key: 'unlisten',
          value: function unlisten() {
            this.hammertime.destroy();
            this.hammertime = null;
            for (var type in this._callbacks) {
              for (var i = 0; i < this._callbacks[type].length; i++) {
                this.element.removeEventListener(type, this._callbacks[type][i]);
              }
            }
            this._callbacks = {};
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.unlisten();
          }
        }]);

        return Gesture;
      })();

      _export('Gesture', Gesture);
    }
  };
});