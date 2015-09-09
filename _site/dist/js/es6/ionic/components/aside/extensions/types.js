import {Aside} from 'ionic/components/aside/aside';
import {CSS} from 'ionic/util/dom';
const asideManipulator = {
  setSliding(sliding) {
    this.aside.domElement.classList[sliding ? 'add' : 'remove']('no-transition');
  },
  setOpen(open) {
    this.aside.domElement.classList[open ? 'add' : 'remove']('open');
  },
  setTransform(t) {
    this.aside.domElement.style[CSS.transform] = t;
  }
};
const contentManipulator = {
  setSliding(sliding) {
    this.aside.contentElement.classList[sliding ? 'add' : 'remove']('no-transition');
  },
  setOpen(open) {
    this.aside.contentElement.classList[open ? 'add' : 'remove'](`aside-open-${this.aside.side}`);
  },
  setTransform(t) {
    this.aside.contentElement.style[CSS.transform] = t;
  }
};
export class AsideType {
  constructor(aside) {
    this.aside = aside;
    setTimeout(() => {
      aside.contentElement.classList.add('aside-content');
    });
  }
}
Object.defineProperty(AsideType, "parameters", {get: function() {
    return [[Aside]];
  }});
export class AsideTypeOverlay extends AsideType {
  setSliding(sliding) {
    asideManipulator.setSliding.call(this, sliding);
  }
  setOpen(open) {
    asideManipulator.setOpen.call(this, open);
  }
  setTransform(t) {
    asideManipulator.setTransform.call(this, t);
  }
}
export class AsideTypePush extends AsideType {
  setSliding(sliding) {
    asideManipulator.setSliding.call(this, sliding);
    contentManipulator.setSliding.call(this, sliding);
  }
  setOpen(open) {
    asideManipulator.setOpen.call(this, open);
    contentManipulator.setOpen.call(this, open);
  }
  setTransform(t) {
    asideManipulator.setTransform.call(this, t);
    contentManipulator.setTransform.call(this, t);
  }
}
export class AsideTypeReveal extends AsideType {
  setSliding(sliding) {
    contentManipulator.setSliding.call(this, sliding);
  }
  setOpen(sliding) {
    contentManipulator.setOpen.call(this, sliding);
  }
  setTransform(t) {
    contentManipulator.setTransform.call(this, t);
  }
}
