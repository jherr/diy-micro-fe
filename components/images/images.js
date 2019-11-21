global.diy.registerComponent('images', {
  create(node, { store }) {
    store.images.subscribe({
      next: (images) => node.innerHTML = images.join(', '),
    })
    node.innerHTML = '<div>Images go here!</div>';
  },
});
