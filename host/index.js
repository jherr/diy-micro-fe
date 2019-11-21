import { BehaviorSubject } from 'rxjs';

global.diy = {
  store: {
    productId: new BehaviorSubject(65343),
    images: new BehaviorSubject([]),
  },
  components: {},
  loadComponents() {
    Object.keys(this.components).forEach(name => {
      document.querySelectorAll(`diy-component[name='${name}']`).forEach(el => {
        if (!el.getAttribute('data-loaded')) {
          const props = {
            store: this.store,
          };
          Array.from(el.attributes).forEach(attr => {
            props[attr.name] = attr.value;
          });
          this.components[name].create(
            el,
            props,
          );
          el.setAttribute('data-loaded', 'true');          
        }
      });
    });
  },
  registerComponent(name, info) {
    this.components[name] = info;
    this.loadComponents();
  },
};
