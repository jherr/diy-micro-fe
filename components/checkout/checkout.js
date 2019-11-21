import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Checkout = ({ store }) => {
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    store.productId.subscribe({
      next: (val) => setProductId(val),
    });
  }, []);

  const onSetImages = () => {
    store.images.next([
      'foo',
      'bar',
      'baz'
    ]);
  };

  return (
    <div>
      <h2>Checkout!</h2>
      <div>ProductID: {productId}</div>
      <div>
        <button onClick={onSetImages}>
          Set Images
        </button>
      </div>
    </div>
  );
};

global.diy.registerComponent('checkout', {
  create(node, props) {
    return ReactDOM.render(<Checkout {...props} />, node);
  },
});
