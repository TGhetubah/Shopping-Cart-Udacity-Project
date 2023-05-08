function _0x4681(_0x1d20d4, _0x515002) {
  const _0x57f567 = _0x57f5();
  return (
    (_0x4681 = function (_0x4681e8, _0x562c2d) {
      _0x4681e8 = _0x4681e8 - 0x10b;
      let _0x407526 = _0x57f567[_0x4681e8];
      return _0x407526;
    }),
    _0x4681(_0x1d20d4, _0x515002)
  );
}
const _0x1b8065 = _0x4681;
(function (_0xabd43f, _0x2cf3cf) {
  const _0x1e99ce = _0x4681,
    _0x9cdd63 = _0xabd43f();
  while (!![]) {
    try {
      const _0x1fc61b =
        (-parseInt(_0x1e99ce(0x113)) / 0x1) *
          (parseInt(_0x1e99ce(0x119)) / 0x2) +
        parseInt(_0x1e99ce(0x11f)) / 0x3 +
        -parseInt(_0x1e99ce(0x112)) / 0x4 +
        -parseInt(_0x1e99ce(0x11a)) / 0x5 +
        (parseInt(_0x1e99ce(0x10c)) / 0x6) *
          (parseInt(_0x1e99ce(0x10d)) / 0x7) +
        (parseInt(_0x1e99ce(0x118)) / 0x8) *
          (-parseInt(_0x1e99ce(0x11b)) / 0x9) +
        (parseInt(_0x1e99ce(0x116)) / 0xa) * (parseInt(_0x1e99ce(0x11d)) / 0xb);
      if (_0x1fc61b === _0x2cf3cf) break;
      else _0x9cdd63['push'](_0x9cdd63['shift']());
    } catch (_0x4911de) {
      _0x9cdd63['push'](_0x9cdd63['shift']());
    }
  }
})(_0x57f5, 0x9fb11);
const products = [
  {
    name: 'Cherry',
    price: 0xa,
    quantity: 0x0,
    productId: 0x1,
    image: 'assets/images/cherry.jpg',
  },
  {
    name: 'Orange',
    price: 0xf,
    quantity: 0x0,
    productId: 0x2,
    image: _0x1b8065(0x10f),
  },
  {
    name: 'Strawberry',
    price: 0x14,
    quantity: 0x0,
    productId: 0x3,
    image: _0x1b8065(0x115),
  },
];
let cart = [];
const getProductById = (_0x884b32) =>
  products[_0x1b8065(0x117)](
    (_0x15ed5d) => _0x15ed5d[_0x1b8065(0x110)] === _0x884b32
  );
function addProductToCart(_0x2272d7) {
  const _0x39c8de = _0x1b8065;
  let _0xe8b471 = getProductById(_0x2272d7);
  (_0xe8b471[_0x39c8de(0x11e)] += 0x1),
    !cart[_0x39c8de(0x111)](_0xe8b471) && cart['push'](_0xe8b471);
}
function increaseQuantity(_0x34dad6) {
  let _0x81c15a = getProductById(_0x34dad6);
  _0x81c15a['quantity'] += 0x1;
}
function decreaseQuantity(_0x556b40) {
  const _0x38916c = _0x1b8065;
  let _0x3c4904 = products[_0x38916c(0x117)](
    (_0x9c51d) => _0x9c51d[_0x38916c(0x110)] === _0x556b40
  );
  (_0x3c4904['quantity'] -= 0x1),
    _0x3c4904['quantity'] === 0x0 && removeProductFromCart(_0x556b40);
}
function removeProductFromCart(_0x21bab6) {
  const _0x81954 = _0x1b8065;
  let _0x4a39ad = getProductById(_0x21bab6);
  (_0x4a39ad['quantity'] = 0x0),
    cart['splice'](cart[_0x81954(0x10e)](_0x4a39ad), 0x1);
}
function cartTotal() {
  const _0x528c90 = _0x1b8065;
  let _0x256c2c = 0x0;
  return (
    cart[_0x528c90(0x10b)]((_0x598ac4) => {
      const _0x5cce4b = _0x528c90;
      _0x256c2c += _0x598ac4[_0x5cce4b(0x11c)] * _0x598ac4[_0x5cce4b(0x11e)];
    }),
    _0x256c2c
  );
}
function emptyCart() {
  cart = [];
}
let totalPaid = 0x0;
function pay(_0x20aec1) {
  totalPaid += _0x20aec1;
  const _0x43e6a3 = cartTotal(),
    _0x1ba9fa = totalPaid - _0x43e6a3;
  return _0x1ba9fa >= 0x0 && (totalPaid = 0x0), _0x1ba9fa;
}
function _0x57f5() {
  const _0x5b8461 = [
    'assets/images/orange.jpg',
    'productId',
    'includes',
    '4960104KCkQoC',
    '608375GlxiJZ',
    'exports',
    'assets/images/strawberry.jpg',
    '28218290unkUWt',
    'find',
    '976ftPtAw',
    '2DBsyvu',
    '3599315HFiTCm',
    '64710EQQFYx',
    'price',
    '11COFtOQ',
    'quantity',
    '2578002ceewaF',
    'forEach',
    '6DLmTEi',
    '2928646wbKijb',
    'indexOf',
  ];
  _0x57f5 = function () {
    return _0x5b8461;
  };
  return _0x57f5();
}
module[_0x1b8065(0x114)] = {
  products: products,
  cart: cart,
  addProductToCart: addProductToCart,
  increaseQuantity: increaseQuantity,
  decreaseQuantity: decreaseQuantity,
  removeProductFromCart: removeProductFromCart,
  cartTotal: cartTotal,
  pay: pay,
  emptyCart: emptyCart,
};