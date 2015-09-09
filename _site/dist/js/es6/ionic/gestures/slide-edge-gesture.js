import {SlideGesture} from 'ionic/gestures/slide-gesture';
import * as util from 'ionic/util';
export class SlideEdgeGesture extends SlideGesture {
  constructor(element, opts = {}) {
    util.defaults(opts, {
      edge: 'left',
      threshold: 50
    });
    super(element, opts);
    this.edges = opts.edge.split(' ');
    this.threshold = opts.threshold;
  }
  canStart(ev) {
    this._containerRect = this.getContainerDimensions();
    return this.edges.every((edge) => this._checkEdge(edge, ev.gesture.center));
  }
  getContainerDimensions() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  _checkEdge(edge, pos) {
    switch (edge) {
      case 'left':
        return pos.x <= this._containerRect.left + this.threshold;
      case 'right':
        return pos.x >= this._containerRect.width - this.threshold;
      case 'top':
        return pos.y <= this._containerRect.top + this.threshold;
      case 'bottom':
        return pos.y >= this._containerRect.height - this.threshold;
    }
  }
}
Object.defineProperty(SlideEdgeGesture, "parameters", {get: function() {
    return [[Element], [Object]];
  }});
