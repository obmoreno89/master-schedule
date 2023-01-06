var ks = Object.defineProperty,
  Ss = Object.defineProperties;
var Cs = Object.getOwnPropertyDescriptors;
var ye = Object.getOwnPropertySymbols;
var nt = Object.prototype.hasOwnProperty,
  it = Object.prototype.propertyIsEnumerable;
var ot = (s, a, l) =>
    a in s
      ? ks(s, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (s[a] = l),
  y = (s, a) => {
    for (var l in a || (a = {})) nt.call(a, l) && ot(s, l, a[l]);
    if (ye) for (var l of ye(a)) it.call(a, l) && ot(s, l, a[l]);
    return s;
  },
  $ = (s, a) => Ss(s, Cs(a));
var ke = (s, a) => {
  var l = {};
  for (var r in s) nt.call(s, r) && a.indexOf(r) < 0 && (l[r] = s[r]);
  if (s != null && ye)
    for (var r of ye(s)) a.indexOf(r) < 0 && it.call(s, r) && (l[r] = s[r]);
  return l;
};
import {
  r as Es,
  C as H,
  p as Ls,
  R as ve,
  a as o,
  j as e,
  b as zs,
  c as t,
  L as V,
  d as oe,
  e as G,
  f as z,
  u as ne,
  g as _,
  F as C,
  h as ct,
  N as ce,
  i as v,
  B as Ze,
  S as We,
  k as U,
  l as dt,
  m as Ms,
  n as mt,
  o as pt,
  q as _s,
  D as Ds,
  s as Os,
  P as Bs,
  t as Fs,
  v as P,
  w as Is,
  x as Ps,
  y as As,
  z as js,
} from './vendor.989a893a.js';
const Rs = function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === 'childList')
        for (const c of i.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && r(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerpolicy && (i.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = l(n);
    fetch(n.href, i);
  }
};
Rs();
const ue = () => Es('./src/css/tailwind.config.js');
H.register(Ls);
H.defaults.font.family = '"Inter", sans-serif';
H.defaults.font.weight = '500';
H.defaults.color = ue().theme.colors.slate[400];
H.defaults.scale.grid.color = ue().theme.colors.slate[100];
H.defaults.plugins.tooltip.titleColor = ue().theme.colors.slate[800];
H.defaults.plugins.tooltip.bodyColor = ue().theme.colors.slate[800];
H.defaults.plugins.tooltip.backgroundColor = ue().theme.colors.white;
H.defaults.plugins.tooltip.borderWidth = 1;
H.defaults.plugins.tooltip.borderColor = ue().theme.colors.slate[200];
H.defaults.plugins.tooltip.displayColors = !1;
H.defaults.plugins.tooltip.mode = 'nearest';
H.defaults.plugins.tooltip.intersect = !1;
H.defaults.plugins.tooltip.position = 'nearest';
H.defaults.plugins.tooltip.caretSize = 0;
H.defaults.plugins.tooltip.caretPadding = 20;
H.defaults.plugins.tooltip.cornerRadius = 4;
H.defaults.plugins.tooltip.padding = 8;
H.register({
  id: 'chartAreaPlugin',
  beforeDraw: (s) => {
    if (
      s.config.options.chartArea &&
      s.config.options.chartArea.backgroundColor
    ) {
      const a = s.canvas.getContext('2d'),
        { chartArea: l } = s;
      a.save(),
        (a.fillStyle = s.config.options.chartArea.backgroundColor),
        a.fillRect(l.left, l.top, l.right - l.left, l.bottom - l.top),
        a.restore();
    }
  },
});
var Ts = '/mp-pro/assets/eye.0d3b729a.svg',
  Hs = '/mp-pro/assets/eye-off.6e7093e8.svg',
  $s = '/mp-pro/assets/logoNide.117f302e.svg',
  qs = '/mp-pro/assets/logoMotors.0792df31.png',
  Vs = '/mp-pro/assets/error404.00654626.png',
  Gs = '/mp-pro/assets/nideMotors.4467e565.svg',
  Us = '/mp-pro/assets/favicon.cb2ffab6.svg',
  Zs = '/mp-pro/assets/smallArrowRight.d7538db4.svg',
  Ws = '/mp-pro/assets/plus.3f3f1a10.svg',
  Ys = '/mp-pro/assets/whitePlus.ecd7176a.svg',
  Js = '/mp-pro/assets/downArrow.7b40ba8d.svg',
  Ks = '/mp-pro/assets/dashboardIcon.af32cd91.svg',
  Qs = '/mp-pro/assets/alertCircle.7cd64e36.svg',
  Xs = '/mp-pro/assets/planningIcon.68c93da9.svg',
  ea = '/mp-pro/assets/administratorIcon.6c29ae57.svg',
  ta = '/mp-pro/assets/systemStatusIcon.53019752.svg',
  sa = '/mp-pro/assets/filter.c22be9cd.svg',
  aa = '/mp-pro/assets/pencilIcon.d7e6f4c7.svg',
  la = '/mp-pro/assets/garbageIcon.45688312.svg',
  ra = '/mp-pro/assets/arrow-up-circle.90bb94e4.svg',
  na = '/mp-pro/assets/arrow-down-circle.cf687c79.svg',
  ia = '/mp-pro/assets/chevrons-up.25a0e355.svg',
  oa = '/mp-pro/assets/chevrons-up.25a0e355.svg',
  ca = '/mp-pro/assets/check.f0ea4e9e.svg',
  da = '/mp-pro/assets/refresh.4a71a922.svg',
  ma = '/mp-pro/assets/warning.e2180f25.svg',
  pa = '/mp-pro/assets/circleDown.199d45f1.svg',
  ua = '/mp-pro/assets/arrow-right.da6112e1.svg',
  ha = '/mp-pro/assets/arrowLeft.0f365f85.svg',
  xa = '/mp-pro/assets/play.8126fbe8.svg',
  k = {
    openEye: Ts,
    closedEye: Hs,
    logoNide: $s,
    logoMotors: qs,
    error404: Vs,
    nideMotors: Gs,
    logoUsmotors: Us,
    smallArrowRight: Zs,
    plus: Ws,
    whitePlus: Ys,
    downArrow: Js,
    dashboardIcon: Ks,
    alertCircle: Qs,
    planningIcon: Xs,
    administratorIcon: ea,
    systemStatusIcon: ta,
    filter: sa,
    pencilIcon: aa,
    garbageIcon: la,
    arrowUpCircle: ra,
    arrowDownCircle: na,
    doubleUp: ia,
    doubleDown: oa,
    check: ca,
    refresh: da,
    warning: ma,
    circleDown: pa,
    arrowRight: ua,
    arrowLeft: ha,
    play: xa,
  };
const ut = ve.createContext({ parent: {} });
function fa() {
  const s = o.exports.useRef(!0);
  return (
    o.exports.useEffect(() => {
      s.current = !1;
    }, []),
    s.current
  );
}
function ht(f) {
  var x = f,
    {
      show: s,
      enter: a = '',
      enterStart: l = '',
      enterEnd: r = '',
      leave: n = '',
      leaveStart: i = '',
      leaveEnd: c = '',
      appear: d,
      unmountOnExit: m,
      tag: u = 'div',
      children: p,
    } = x,
    h = ke(x, [
      'show',
      'enter',
      'enterStart',
      'enterEnd',
      'leave',
      'leaveStart',
      'leaveEnd',
      'appear',
      'unmountOnExit',
      'tag',
      'children',
    ]);
  const b = a.split(' ').filter((B) => B.length),
    g = l.split(' ').filter((B) => B.length),
    E = r.split(' ').filter((B) => B.length),
    M = n.split(' ').filter((B) => B.length),
    N = i.split(' ').filter((B) => B.length),
    S = c.split(' ').filter((B) => B.length),
    L = m;
  function O(B, w) {
    w.length && B.classList.add(...w);
  }
  function R(B, w) {
    w.length && B.classList.remove(...w);
  }
  const I = ve.useRef(null);
  return e(zs, {
    appear: d,
    nodeRef: I,
    unmountOnExit: L,
    in: s,
    addEndListener: (B) => {
      I.current.addEventListener('transitionend', B, !1);
    },
    onEnter: () => {
      L || (I.current.style.display = null), O(I.current, [...b, ...g]);
    },
    onEntering: () => {
      R(I.current, g), O(I.current, E);
    },
    onEntered: () => {
      R(I.current, [...E, ...b]);
    },
    onExit: () => {
      O(I.current, [...M, ...N]);
    },
    onExiting: () => {
      R(I.current, N), O(I.current, S);
    },
    onExited: () => {
      R(I.current, [...S, ...M]), L || (I.current.style.display = 'none');
    },
    children: e(
      u,
      $(y({ ref: I }, h), {
        style: { display: L ? null : 'none' },
        children: p,
      })
    ),
  });
}
function D(r) {
  var n = r,
    { show: s, appear: a } = n,
    l = ke(n, ['show', 'appear']);
  const { parent: i } = o.exports.useContext(ut),
    c = fa();
  return s === void 0
    ? e(ht, y({ appear: i.appear || !i.isInitialRender, show: i.show }, l))
    : e(ut.Provider, {
        value: { parent: { show: s, isInitialRender: c, appear: a } },
        children: e(ht, y({ appear: a, show: s }, l)),
      });
}
function xt({ align: s }) {
  const [a, l] = o.exports.useState(!1),
    r = o.exports.useRef(null),
    n = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const i = ({ target: c }) => {
        !n.current ||
          !a ||
          n.current.contains(c) ||
          r.current.contains(c) ||
          l(!1);
      };
      return (
        document.addEventListener('click', i),
        () => document.removeEventListener('click', i)
      );
    }),
    o.exports.useEffect(() => {
      const i = ({ keyCode: c }) => {
        !a || c !== 27 || l(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }),
    t('div', {
      className: 'relative inline-flex',
      children: [
        t('button', {
          ref: r,
          className: `w-8 h-8 flex items-center justify-center hover:bg-slate-200 transition duration-150 rounded-full ${
            a && 'bg-slate-200'
          }`,
          'aria-haspopup': 'true',
          onClick: () => l(!a),
          'aria-expanded': a,
          children: [
            e('span', { className: 'sr-only', children: 'Necesitas ayuda?' }),
            e('img', { src: k.alertCircle, alt: 'Circulo alerta' }),
          ],
        }),
        e(D, {
          className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            s === 'right' ? 'right-0' : 'left-0'
          }`,
          show: a,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('div', {
            ref: n,
            onFocus: () => l(!0),
            onBlur: () => l(!1),
            children: [
              e('div', {
                className:
                  'text-xs font-semibold text-slate-600 uppercase pt-1.5 pb-2 px-4',
                children: 'Necesitas ayuda?',
              }),
              t('ul', {
                children: [
                  e('li', {
                    children: t(V, {
                      className:
                        'font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3',
                      to: '#0',
                      onClick: () => l(!a),
                      children: [
                        t('svg', {
                          className:
                            'w-3 h-3 fill-current text-slate-500 shrink-0 mr-2',
                          viewBox: '0 0 12 12',
                          children: [
                            e('rect', {
                              y: '3',
                              width: '12',
                              height: '9',
                              rx: '1',
                            }),
                            e('path', { d: 'M2 0h8v2H2z' }),
                          ],
                        }),
                        e('span', { children: 'Documentaci\xF3n' }),
                      ],
                    }),
                  }),
                  e('li', {
                    children: t(V, {
                      className:
                        'font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3',
                      to: '#0',
                      onClick: () => l(!a),
                      children: [
                        e('svg', {
                          className:
                            'w-3 h-3 fill-current text-slate-500 shrink-0 mr-2',
                          viewBox: '0 0 12 12',
                          children: e('path', {
                            d: 'M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z',
                          }),
                        }),
                        e('span', { children: 'Soporte' }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Se = (s, a, l) => {
    if (s.code === 'ERR_NETWORK')
      a(l({ code: 500, msg: 'internal server error', state: !0 }));
    else
      switch (s.response.status) {
        case 400: {
          a(l({ code: 400, msg: s.response.data.msg, state: !0 }));
          break;
        }
        case 401: {
          a(l({ code: 401, msg: s.response.statusText, state: !0 }));
          break;
        }
        case 404: {
          a(l({ code: 404, msg: s.response.statusText, state: !0 }));
          break;
        }
        case 500: {
          a(l({ code: 500, msg: 'internal server error', state: !0 }));
          break;
        }
      }
  },
  ft = { user: null, isCorrect: null, loading: !1, resetPassword: null },
  Ce = G('REVERT_ALL'),
  bt = oe({
    initialState: ft,
    name: 'auth',
    extraReducers: (s) => {
      s.addCase(Ce, () => ft);
    },
    reducers: {
      setUser: (s, a) => {
        s.user = a.payload;
      },
      setIsCorrect: (s, a) => {
        s.isCorrect = a.payload;
      },
      setLoading: (s, a) => {
        s.loading = a.payload;
      },
    },
  }),
  { setUser: ba, setIsCorrect: Q, setLoading: X } = bt.actions,
  Ee = (s) => s.auth.isCorrect,
  Le = (s) => s.auth.loading;
var va = bt.reducer;
const ga = (s, a) => (l) => {
    l(X(!0)),
      z
        .post('http://3.88.215.84/api/auth/login/', s)
        .then((r) => {
          l(X(!1)),
            r.data.status_code === 202 &&
              (l(ba(r.data)),
              sessionStorage.setItem('token', r.data.token),
              sessionStorage.setItem('email', r.data.email),
              sessionStorage.setItem('first_name', r.data.first_name),
              sessionStorage.setItem('id', r.data.id),
              l(Q(!1)),
              a('/mp-pro/'));
        })
        .catch((r) => {
          Se(r, l, Q), l(X(!1)), setTimeout(() => l(Ce()), 5e3);
        });
  },
  Na = (s) => () => {
    const a = sessionStorage.getItem('email'),
      l = sessionStorage.getItem('token'),
      r = { email: a };
    z.post('http://3.88.215.84/api/auth/logout/', r, {
      headers: { Authorization: `Token ${l}` },
    }).then((n) => {
      n.data.status_code === 200 &&
        (sessionStorage.clear(), s('/mp-pro/signin/'));
    });
  },
  vt = (s, a) => (l) => {
    l(X(!0)),
      z
        .post('http://3.88.215.84/api/auth/password-reset/send-code', s)
        .then((r) => {
          l(X(!1)),
            r.data.status_code === 200 &&
              (sessionStorage.setItem('code', r.data.code),
              sessionStorage.setItem('email', s.email),
              l(Q(!1)),
              a('/mp-pro/verification-code/'));
        })
        .catch((r) => {
          Se(r, l, Q), l(X(!1)), setTimeout(() => l(Ce()), 5e3);
        });
  },
  wa = (s, a) => (l) => {
    l(X(!0));
    const r = {
      email: sessionStorage.getItem('email'),
      user_code: parseInt(s.user_code),
    };
    z.post('http://3.88.215.84/api/auth/password-reset/verify-code', r)
      .then((n) => {
        l(X(!1)),
          n.data.status_code === 202 &&
            (sessionStorage.setItem('token', n.data.token),
            sessionStorage.setItem('email', n.data.email),
            l(Q(!1)),
            a('/mp-pro/confirm-password/'));
      })
      .catch(() => {
        l(Q(!0)), l(X(!1));
      });
  },
  ya = (s, a) => (l) => {
    l(X(!0));
    const r = sessionStorage.getItem('token'),
      n = { email: sessionStorage.getItem('email'), new_password: s.password };
    z.post('http://3.88.215.84/api/auth/password-reset/confirmation', n, {
      headers: { Authorization: `Token ${r}` },
    })
      .then((i) => {
        l(X(!1)),
          i.data.status_code === 200 &&
            (l(Q(!0)),
            setTimeout(() => {
              a('/mp-pro/signin/'), l(Q(!1));
            }, 3e3));
      })
      .catch(() => {
        l(Q(!1)), l(X(!1));
      });
  };
function gt({ align: s }) {
  const [a, l] = o.exports.useState(!1),
    r = sessionStorage.getItem('first_name'),
    n = ne(),
    i = _(),
    c = o.exports.useRef(null),
    d = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const m = ({ target: u }) => {
        !d.current ||
          !a ||
          d.current.contains(u) ||
          c.current.contains(u) ||
          l(!1);
      };
      return (
        document.addEventListener('click', m),
        () => document.removeEventListener('click', m)
      );
    }),
    o.exports.useEffect(() => {
      const m = ({ keyCode: u }) => {
        !a || u !== 27 || l(!1);
      };
      return (
        document.addEventListener('keydown', m),
        () => document.removeEventListener('keydown', m)
      );
    }),
    e(C, {
      children: t('div', {
        className: 'relative inline-flex',
        children: [
          e('button', {
            ref: c,
            className: 'inline-flex justify-center items-center group',
            'aria-haspopup': 'true',
            onClick: () => l(!a),
            'aria-expanded': a,
            children: t('div', {
              className: 'flex items-center truncate',
              children: [
                e('span', {
                  className:
                    'truncate ml-2 text-sm font-medium group-hover:text-slate-800',
                  children: r,
                }),
                e('svg', {
                  className:
                    'w-3 h-3 shrink-0 ml-1 fill-current text-slate-400',
                  viewBox: '0 0 12 12',
                  children: e('path', {
                    d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
                  }),
                }),
              ],
            }),
          }),
          e(D, {
            className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
              s === 'right' ? 'right-0' : 'left-0'
            }`,
            show: a,
            enter: 'transition ease-out duration-200 transform',
            enterStart: 'opacity-0 -translate-y-2',
            enterEnd: 'opacity-100 translate-y-0',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            children: t('div', {
              ref: d,
              onFocus: () => l(!0),
              onBlur: () => l(!1),
              children: [
                e('div', {
                  className: 'pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200',
                  children: e('div', {
                    className: 'font-medium text-slate-800',
                    children: r,
                  }),
                }),
                t('ul', {
                  children: [
                    e('li', {
                      children: e(V, {
                        className:
                          'font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3',
                        to: '/mp-pro/settings',
                        onClick: () => l(!a),
                        children: 'Configuraci\xF3n',
                      }),
                    }),
                    e('li', {
                      children: e('button', {
                        className:
                          'font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3',
                        onClick: () => {
                          l(!a), i(Na(n));
                        },
                        children: 'Cerrar sesi\xF3n',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
function Z({
  sidebarOpen: s,
  setSidebarOpen: a,
  icon: l,
  nameRoute: r,
  nameSubRoute: n,
}) {
  return e(C, {
    children: e('header', {
      className: 'sticky top-0 bg-white border-b  border-slate-200 z-30',
      children: e('div', {
        className: 'px-4 sm:px-6 lg:px-8',
        children: t('div', {
          className: 'flex items-center justify-between h-16 -mb-px',
          children: [
            t('figure', {
              className: 'flex space-x-3',
              children: [
                e('img', { src: l, alt: 'Caja' }),
                t('h5', {
                  className:
                    'capitalize font-semibold text-gray-400 flex space-x-3 tracking-tight',
                  children: [
                    r,
                    e('img', {
                      className: 'ml-3',
                      src: k.smallArrowRight,
                      alt: 'Flecha derecha',
                    }),
                    e('p', {
                      className: 'text-primary font-semibold tracking-tight',
                      children: n,
                    }),
                  ],
                }),
              ],
            }),
            e('div', {
              className: 'flex',
              children: t('button', {
                className: 'text-slate-500 hover:text-slate-600 lg:hidden',
                'aria-controls': 'sidebar',
                'aria-expanded': s,
                onClick: () => a(!s),
                children: [
                  e('span', { className: 'sr-only', children: 'Open sidebar' }),
                  t('svg', {
                    className: 'w-6 h-6 fill-current',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      e('rect', { x: '4', y: '5', width: '16', height: '2' }),
                      e('rect', { x: '4', y: '11', width: '16', height: '2' }),
                      e('rect', { x: '4', y: '17', width: '16', height: '2' }),
                    ],
                  }),
                ],
              }),
            }),
            t('div', {
              className: 'flex items-center space-x-3',
              children: [e(xt, { align: 'right' }), e(gt, { align: 'right' })],
            }),
          ],
        }),
      }),
    }),
  });
}
function ge({ children: s, activecondition: a }) {
  const [l, r] = o.exports.useState(a),
    n = () => {
      r(!l);
    };
  return e('li', {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${a && 'bg-white'}`,
    children: s(n, l),
  });
}
function W({ sidebarOpen: s, setSidebarOpen: a }) {
  const l = ct(),
    { pathname: r } = l,
    n = o.exports.useRef(null),
    i = o.exports.useRef(null),
    c = localStorage.getItem('sidebar-expanded'),
    [d, m] = o.exports.useState(c === null ? !1 : c === 'true');
  return (
    o.exports.useEffect(() => {
      const u = ({ target: p }) => {
        !i.current ||
          !n.current ||
          !s ||
          i.current.contains(p) ||
          n.current.contains(p) ||
          a(!1);
      };
      return (
        document.addEventListener('click', u),
        () => document.removeEventListener('click', u)
      );
    }),
    o.exports.useEffect(() => {
      const u = ({ keyCode: p }) => {
        !s || p !== 27 || a(!1);
      };
      return (
        document.addEventListener('keydown', u),
        () => document.removeEventListener('keydown', u)
      );
    }),
    o.exports.useEffect(() => {
      localStorage.setItem('sidebar-expanded', d),
        d
          ? document.querySelector('body').classList.add('sidebar-expanded')
          : document.querySelector('body').classList.remove('sidebar-expanded');
    }, [d]),
    t('div', {
      children: [
        e('div', {
          className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
            s ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`,
          'aria-hidden': 'true',
        }),
        t('div', {
          id: 'sidebar',
          ref: i,
          className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white border-r  border-slate-200 p-4 transition-all duration-200 ease-in-out ${
            s ? 'translate-x-0' : '-translate-x-64'
          }`,
          children: [
            t('div', {
              className: 'flex justify-between mb-10 pr-3 sm:px-2',
              children: [
                t('button', {
                  ref: n,
                  className: 'lg:hidden text-slate-500 hover:text-sideBar',
                  onClick: () => a(!s),
                  'aria-controls': 'sidebar',
                  'aria-expanded': s,
                  children: [
                    e('span', {
                      className: 'sr-only',
                      children: 'Close sidebar',
                    }),
                    e('svg', {
                      className: 'w-6 h-6 fill-current',
                      viewBox: '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: e('path', {
                        d: 'M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z',
                      }),
                    }),
                  ],
                }),
                e('figure', {
                  className: 'block',
                  children: e('img', {
                    src: k.logoNide,
                    alt: 'logo',
                    className: 'w-32',
                  }),
                }),
              ],
            }),
            e('div', {
              className: 'space-y-8',
              children: e('div', {
                children: t('ul', {
                  className: 'mt-3',
                  children: [
                    e(ge, {
                      activecondition:
                        r === '/mp-pro/' || r.includes('dashboard'),
                      children: (u) =>
                        e(V, {
                          to: '/mp-pro/',
                          className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                            r.includes('/mp-pro/') && 'hover:text-slate-200'
                          }`,
                          onClick: (p) => {
                            d ? u() : m(!0);
                          },
                          children: e('section', {
                            className: '',
                            children: e(ce, {
                              to: '/mp-pro/',
                              className: ({ isActive: p }) =>
                                'transition duration-150 truncate font-semibold text-sm flex items-center py-1 px-0 text-textSidebar hover:text-hoverTextSidebar space-x-[11px] ' +
                                (p ? '!text-primary' : ''),
                              children: ({ isActive: p }) =>
                                t(C, {
                                  children: [
                                    e('figure', {
                                      children: e('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: t('svg', {
                                          width: '24',
                                          height: '24',
                                          viewBox: '0 0 24 24',
                                          fill: 'none',
                                          children: [
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M10 3H3V10H10V3Z',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M21 3H14V10H21V3Z',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M21 14H14V21H21V14Z',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar ' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M10 14H3V21H10V14Z',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    e('span', { children: 'Dashboard' }),
                                  ],
                                }),
                            }),
                          }),
                        }),
                    }),
                    e(ge, {
                      activecondition: r.includes('planning'),
                      children: (u, p) =>
                        t(ve.Fragment, {
                          children: [
                            e(V, {
                              to: '#0',
                              className: `block text-textSidebar hover:text-primary truncate transition duration-150 ${
                                r.includes('planning') && ' !text-primary'
                              }`,
                              onClick: (h) => {
                                h.preventDefault(), d ? u() : m(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('figure', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        fill: 'none',
                                        children: [
                                          e('path', {
                                            className: `stroke-current text-textSidebar ${
                                              r.includes('planning') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z',
                                            strokeWidth: '2',
                                          }),
                                          e('path', {
                                            className: `stroke-current text-textSidebar ${
                                              r.includes('planning') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M3 9H21',
                                            strokeWidth: '2',
                                          }),
                                          e('path', {
                                            className: `stroke-current text-textSidebar ${
                                              r.includes('planning') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M9 21V9',
                                            strokeWidth: '2',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200  ',
                                        children: 'Planeaci\xF3n',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-sideBar ${
                                        p && 'transform rotate-180'
                                      }`,
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            e('div', {
                              className:
                                'lg:hidden lg:sidebar-expanded:block 2xl:block',
                              children: t('ul', {
                                className: `pl-9 mt-1 ${!p && 'hidden'}`,
                                children: [
                                  e('li', {
                                    className: 'mb-1 last:mb-0',
                                    children: e(ce, {
                                      end: !0,
                                      to: '/mp-pro/planning/plannings/',
                                      className: ({ isActive: h }) =>
                                        'block text-sideBar hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                        (h ? '!text-primary' : ''),
                                      children: e('span', {
                                        className: 'text-sm',
                                        children: 'Planeaciones',
                                      }),
                                    }),
                                  }),
                                  e('li', {
                                    className: 'mb-1 last:mb-0',
                                    children: e(ce, {
                                      end: !0,
                                      to: '/mp-pro/planning/capabilities/',
                                      className: ({ isActive: h }) =>
                                        'block hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                        (h ? '!text-primary' : ''),
                                      children: e('span', {
                                        className: 'text-sm',
                                        children: 'Capacidades',
                                      }),
                                    }),
                                  }),
                                  e('li', {
                                    className: 'mb-1 last:mb-0',
                                    children: e(ce, {
                                      end: !0,
                                      to: '/mp-pro/planning/calendar/',
                                      className: ({ isActive: h }) =>
                                        'block hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                        (h ? '!text-primary' : ''),
                                      children: e('span', {
                                        className:
                                          'text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ',
                                        children: 'Calendario',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(ge, {
                      activecondition: r.includes('management'),
                      children: (u, p) =>
                        t(ve.Fragment, {
                          children: [
                            e(V, {
                              to: '#0',
                              className: `block text-textSidebar hover:text-primary truncate transition duration-150 ${
                                r.includes('management') && ' !text-primary'
                              }`,
                              onClick: (h) => {
                                h.preventDefault(), d ? u() : m(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('figure', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        fill: 'none',
                                        children: [
                                          e('path', {
                                            className: `stroke-current text-textSidebar ${
                                              r.includes('management') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21',
                                            strokeWidth: '2',
                                          }),
                                          e('path', {
                                            className: `stroke-current text-textSidebar ${
                                              r.includes('management') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z',
                                            strokeWidth: '2',
                                          }),
                                          e('path', {
                                            className: `stroke-current text-textSidebar ${
                                              r.includes('management') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13',
                                            strokeWidth: '2',
                                          }),
                                          e('path', {
                                            className: `stroke-current text-textSidebar ${
                                              r.includes('management') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88',
                                            strokeWidth: '2',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Administraci\xF3n',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-sideBar ${
                                        p && 'transform rotate-180'
                                      }`,
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            e('div', {
                              className:
                                'lg:hidden lg:sidebar-expanded:block 2xl:block',
                              children: e('ul', {
                                className: `pl-9 mt-1 ${!p && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(ce, {
                                    end: !0,
                                    to: '/mp-pro/management/user/',
                                    className: ({ isActive: h }) =>
                                      'block text-textSidebar hover:text-primary transition duration-150 truncate ' +
                                      (h ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm  lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ',
                                      children: 'Usuarios',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(ge, {
                      activecondition:
                        r === '/mp-pro/system-status/' ||
                        r.includes('dashboard'),
                      children: (u) =>
                        e(V, {
                          to: '/mp-pro/system-status/',
                          className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                            r.includes('/mp-pro/state-system/') &&
                            'hover:text-slate-200'
                          }`,
                          onClick: () => {
                            d ? u() : m(!0);
                          },
                          children: e('section', {
                            className: '',
                            children: e(ce, {
                              to: '/mp-pro/system-status/',
                              className: ({ isActive: p }) =>
                                'transition duration-150 truncate font-semibold text-sm flex items-center py-1 px-0 text-textSidebar hover:text-hoverTextSidebar space-x-[11px] ' +
                                (p ? '!text-primary' : ''),
                              children: ({ isActive: p }) =>
                                t(C, {
                                  children: [
                                    e('figure', {
                                      children: e('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: t('svg', {
                                          width: '24',
                                          height: '24',
                                          viewBox: '0 0 24 24',
                                          fill: 'none',
                                          children: [
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M6 6H6.01',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar ' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M6 18H6.01',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    e('span', {
                                      children: 'Estado del sistema',
                                    }),
                                  ],
                                }),
                            }),
                          }),
                        }),
                    }),
                    e(ge, {
                      activecondition:
                        r === '/mp-pro/system-status/' ||
                        r.includes('dashboard'),
                      children: (u) =>
                        e(V, {
                          to: '/mp-pro/demo-gantt/',
                          className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                            r.includes('/mp-pro/state-system/') &&
                            'hover:text-slate-200'
                          }`,
                          onClick: () => {
                            d ? u() : m(!0);
                          },
                          children: e('section', {
                            className: '',
                            children: e(ce, {
                              to: '/mp-pro/demo-gantt/',
                              className: ({ isActive: p }) =>
                                'transition duration-150 truncate font-semibold text-sm flex items-center py-1 px-0 text-textSidebar hover:text-hoverTextSidebar space-x-[11px] ' +
                                (p ? '!text-primary' : ''),
                              children: ({ isActive: p }) =>
                                t(C, {
                                  children: [
                                    e('figure', {
                                      children: e('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: t('svg', {
                                          width: '24',
                                          height: '24',
                                          viewBox: '0 0 24 24',
                                          fill: 'none',
                                          children: [
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M6 6H6.01',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                            e('path', {
                                              className:
                                                'stroke-current text-textSidebar ' +
                                                (p ? '!text-primary' : ''),
                                              d: 'M6 18H6.01',
                                              stroke: '#231F20',
                                              strokeWidth: '2',
                                              strokeLinecap: 'round',
                                              strokeLinejoin: 'round',
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    e('span', { children: 'Demo gantt' }),
                                  ],
                                }),
                            }),
                          }),
                        }),
                    }),
                  ],
                }),
              }),
            }),
            e('div', {
              className:
                'pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto',
              children: e('div', {
                className: 'px-3 py-2',
                children: t('button', {
                  onClick: () => m(!d),
                  children: [
                    e('span', {
                      className: 'sr-only',
                      children: 'Expand / collapse sidebar',
                    }),
                    t('svg', {
                      className:
                        'w-6 h-6 fill-current sidebar-expanded:rotate-180',
                      viewBox: '0 0 24 24',
                      children: [
                        e('path', {
                          className: 'text-slate-600',
                          d: 'M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z',
                        }),
                        e('path', {
                          className: 'text-slate-600',
                          d: 'M3 23H1V1h2z',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function te({ icon: s, nameRoute: a, nameSubRoute: l, children: r }) {
  const [n, i] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden bg-white',
    children: [
      e(W, { sidebarOpen: n, setSidebarOpen: i }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden',
        children: [
          e(Z, {
            sidebarOpen: n,
            setSidebarOpen: i,
            icon: s,
            nameRoute: a,
            nameSubRoute: l,
          }),
          e('main', { className: 'h-screen bg-white', children: r }),
        ],
      }),
    ],
  });
}
function ze() {
  return e(C, {
    children: e('section', {
      className:
        'animate-pulse inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8 bg-slate-100',
      children: e('div', {
        className: 'p-7',
        children: e('div', {
          className: 'sm:flex sm:items-start',
          children: t('div', {
            className: 'text-center sm:mt-0 sm:ml-2 sm:text-left space-y-3',
            children: [
              e('div', {
                className:
                  'h-3 w-[200px] bg-slate-500 rounded text-sm leading-6 font-medium text-gray-400',
              }),
              e('div', {
                className:
                  'h-3 w-[150px] bg-slate-500 rounded text-sm leading-6 font-medium text-gray-400',
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
const ka = {
    totalNumberOfOrders: [],
    totalAmountOfOrders: [],
    ordersProgrammed: [],
    excessInventory: [],
    reload: !1,
    skeletonNumberOrders: !0,
    skeletonAmountOrders: !0,
    skeletonOrdersProgrammed: !0,
    skeletonExcessInventory: !0,
  },
  Nt = oe({
    initialState: ka,
    name: 'kpi',
    reducers: {
      setTotalNumberOfOrders: (s, a) => {
        s.totalNumberOfOrders = a.payload;
      },
      setTotalAmountOfOrders: (s, a) => {
        s.totalAmountOfOrders = a.payload;
      },
      setOrdersProgrammed: (s, a) => {
        s.ordersProgrammed = a.payload;
      },
      setExcessInventory: (s, a) => {
        s.excessInventory = a.payload;
      },
      setReload: (s, a) => {
        s.reload = !s.reload;
      },
      setSkeletonNumberOrders: (s, a) => {
        s.skeletonNumberOrders = a.reload;
      },
      setSkeletonAmountOrders: (s, a) => {
        s.skeletonAmountOrders = a.payload;
      },
      setSkeletonOrdersProgrammed: (s, a) => {
        s.skeletonOrdersProgrammed = a.payload;
      },
      setSkeletonExcessInventory: (s, a) => {
        s.skeletonExcessInventory = a.payload;
      },
    },
  }),
  {
    setTotalNumberOfOrders: Sa,
    setTotalAmountOfOrders: Ca,
    setOrdersProgrammed: Ea,
    setExcessInventory: La,
    setReload: Yn,
    setSkeletonNumberOrders: za,
    setSkeletonAmountOrders: Ma,
    setSkeletonOrdersProgrammed: _a,
    setSkeletonExcessInventory: Da,
  } = Nt.actions,
  Oa = (s) => s.kpi.totalNumberOfOrders,
  Ba = (s) => s.kpi.totalAmountOfOrders,
  Fa = (s) => s.kpi.ordersProgrammed,
  Ia = (s) => s.kpi.excessInventory,
  Pa = (s) => s.kpi.skeletonNumberOrders,
  Aa = (s) => s.kpi.skeletonAmountOrders,
  ja = (s) => s.kpi.skeletonOrdersProgrammed,
  Ra = (s) => s.kpi.skeletonExcessInventory;
var Ta = Nt.reducer;
const Ha = () => (s) => {
    z.get('http://3.88.215.84/api/kpis/orders-in-past-due')
      .then((a) => {
        a.status === 200 && (s(za(!1)), s(Sa(a.data)));
      })
      .catch((a) => console.log(a));
  },
  $a = () => (s) => {
    z.get('http://3.88.215.84/api/kpis/total-amount-orders-in-past-due')
      .then((a) => {
        a.status === 200 && (s(Ma(!1)), s(Ca(a.data)));
      })
      .catch((a) => console.log(a));
  },
  qa = () => (s) => {
    z.get('http://3.88.215.84/api/kpis/orders-without-ship-date')
      .then((a) => {
        a.status === 200 && (s(_a(!1)), s(Ea(a.data)));
      })
      .catch((a) => console.log(a));
  },
  Va = () => (s) => {
    z.get('http://3.88.215.84/api/kpis/excess-inventory')
      .then((a) => {
        a.status === 200 && (s(Da(!1)), s(La(a.data)));
      })
      .catch((a) => console.log(a));
  };
function Ga() {
  const s = _(),
    a = v(Oa),
    l = v(Ba),
    r = v(Fa),
    n = v(Ia),
    i = v(Pa),
    c = v(Aa),
    d = v(ja),
    m = v(Ra);
  return (
    o.exports.useEffect(() => {
      s(Ha()), s($a()), s(qa()), s(Va());
    }, []),
    e('div', {
      className: 'px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto',
      children: e('div', {
        className: 'max-w-full mx-4 py-0 sm:mx-auto sm:px-6 lg:px-0',
        children: t('div', {
          className: 'sm:flex sm:space-x-4',
          children: [
            i
              ? e(ze, {})
              : e('section', {
                  className:
                    'inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8',
                  children: e('div', {
                    className: 'bg-white p-5',
                    children: e('div', {
                      className: 'sm:flex sm:items-start',
                      children: t('div', {
                        className: 'text-center sm:mt-0 sm:ml-2 sm:text-left',
                        children: [
                          e('h3', {
                            className:
                              'text-sm leading-6 font-medium text-gray-400',
                            children: 'N\xFAmero de \xD3rdenes en PastDue',
                          }),
                          a.length
                            ? e('p', {
                                className: 'text-3xl font-bold text-black',
                                children: 'Sin datos',
                              })
                            : e('p', {
                                className: 'text-3xl font-bold text-black',
                                children: a.orders_in_past_due,
                              }),
                        ],
                      }),
                    }),
                  }),
                }),
            c
              ? e(ze, {})
              : e('section', {
                  className:
                    'inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8',
                  children: e('div', {
                    className: 'bg-white p-5',
                    children: e('div', {
                      className: 'sm:flex sm:items-start',
                      children: t('div', {
                        className: 'text-center sm:mt-0 sm:ml-2 sm:text-left',
                        children: [
                          e('h3', {
                            className:
                              'text-sm leading-6 font-medium text-gray-400',
                            children: 'Monto de ordenes en PastDue',
                          }),
                          l.length
                            ? e('p', {
                                className: 'text-3xl font-bold text-black',
                                children: 'Sin datos',
                              })
                            : e('p', {
                                className: 'text-3xl font-bold text-black',
                                children: l.total_amount_orders_in_past_due,
                              }),
                        ],
                      }),
                    }),
                  }),
                }),
            d
              ? e(ze, {})
              : e('section', {
                  className:
                    'inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8',
                  children: e('div', {
                    className: 'bg-white p-5',
                    children: e('div', {
                      className: 'sm:flex sm:items-start',
                      children: t('div', {
                        className: 'text-center sm:mt-0 sm:ml-2 sm:text-left',
                        children: [
                          e('h3', {
                            className:
                              'text-sm leading-6 font-medium text-gray-400',
                            children: 'Ordenes por programar',
                          }),
                          r.length
                            ? e('p', {
                                className: 'text-3xl font-bold text-black',
                                children: 'Sin datos',
                              })
                            : e('p', {
                                className: 'text-3xl font-bold text-black',
                                children: r.orders_without_ship_date,
                              }),
                        ],
                      }),
                    }),
                  }),
                }),
            m
              ? e(ze, {})
              : e('section', {
                  className:
                    'inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8',
                  children: e('div', {
                    className: 'bg-white p-5',
                    children: e('div', {
                      className: 'sm:flex sm:items-start',
                      children: t('div', {
                        className: 'text-center sm:mt-0 sm:ml-2 sm:text-left',
                        children: [
                          e('h3', {
                            className:
                              'text-sm leading-6 font-medium text-gray-400',
                            children: 'Excesos de inventario',
                          }),
                          !(n == null ? void 0 : n.length) > 0
                            ? t('p', {
                                className: 'text-3xl font-bold text-black',
                                children: [
                                  n.excess_inventory,
                                  ' ',
                                  e('span', { children: 'pz' }),
                                ],
                              })
                            : e('p', {
                                className: 'text-3xl font-bold text-black',
                                children: 'Sin datos',
                              }),
                        ],
                      }),
                    }),
                  }),
                }),
          ],
        }),
      }),
    })
  );
}
const wt = new Date();
console.log(wt);
const Ua = {
  style: 'font-size:20em',
  viewPreset: { base: 'weekAndDay', tickSize: 60 },
  weekStartDay: 1,
  dependencyIdField: 'sequenceNumber',
  bufferCoef: 2,
  visibleDate: { date: wt, block: 'center' },
  features: {
    rowReorder: !1,
    taskDragCreate: !1,
    taskEdit: !1,
    taskResize: !1,
    columnReorder: !1,
    contextMenu: !1,
    dependencyEdit: !1,
    filter: !1,
    indicators: !0,
    taskCopyPaste: !1,
    projectLines: { disabled: !0 },
    taskMenu: {
      items: {
        deleteTask: !1,
        add: !1,
        convertToMilestone: !1,
        indent: !1,
        outdent: !1,
      },
    },
    stickyCells: { contentSelector: '.myClassName' },
  },
  rowHeight: 40,
  height: 480,
  disabled: !0,
  columns: [
    { type: 'number', field: 'id', width: 5, text: 'No.' },
    { type: 'name', field: 'order', width: 30, text: 'Order' },
    { type: 'name', field: 'inventory_item', width: 30, text: 'Item' },
    { type: 'name', field: 'pline', width: 100, text: 'Product Line' },
    {
      type: 'date',
      field: 'schedule_ship_date',
      format: 'DD-MM-YYYY',
      width: 110,
      text: 'SSD',
    },
    { type: 'number', field: 'order_qty', width: 30, text: 'Cantidad' },
    {
      type: 'number',
      field: 'suggested_order',
      width: 30,
      text: 'Suggested Pieces',
    },
    { type: 'date', field: 'startDate', width: 110, text: 'Start Date' },
    { type: 'date', field: 'endDate', width: 110, text: 'End Date' },
  ],
};
function Za() {
  const s = o.exports.useRef();
  o.exports.useEffect(() => {
    s.current.instance.project.inlineData, a();
  }, []);
  const a = async () => {
    const l = await z.get(
        'http://3.88.215.84/api/gantt/list-order-planning?planning-id=mp-91'
      ),
      r = s.current.instance.project;
    (r.inlineData = l),
      (r.stm.autoRecord = !0),
      r.stm.enable(),
      await r.loadInlineData({
        eventsData: l.data.tasks.rows,
        calendarsData: l.data.calendars.rows,
        dependenciesData: l.data.tasks.dependencies,
      }),
      (r.calendar = 'general'),
      console.log(r.calendar);
  };
  return e(C, {
    children: e('div', {
      className: 'border-borderInput border rounded',
      children: e(
        Ze,
        y(
          {
            ref: s,
            pdfExportFeature: !0,
            enableDeleteKey: !1,
            taskRenderer: ({ taskRecord: l }) => ({
              tag: 'p',
              html: We.encodeHtml(l.name),
            }),
            taskNonWorkingTime: {
              tooltipTemplate({ startDate: l, endDate: r, iconCls: n }) {
                return `                   
                  <p class="b-nonworkingtime-tip-title">${
                    n ? `<i class="${n}"></i>` : ''
                  }Non-working time</p>
                  ${DateHelper.format(l, 'L')} - ${DateHelper.format(r, 'L')}
              `;
              },
            },
            nonWorkingTime: { disabled: !0 },
            percentBar: !0,
          },
          Ua
        )
      ),
    }),
  });
}
function Wa() {
  return t(te, {
    icon: k.dashboardIcon,
    nameRoute: 'Dashboard',
    nameSubRoute: 'Dashboard',
    children: [
      e(Ga, {}),
      e('section', { className: 'lg:px-8', children: e(Za, {}) }),
    ],
  });
}
function yt() {
  return (
    o.exports.useState(!1),
    e('div', {
      className: 'flex h-screen overflow-hidden',
      children: e('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: e('main', {
          children: e('div', {
            className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
            children: e('div', {
              className: 'max-w-2xl m-auto mt-16',
              children: t('div', {
                className: 'text-center px-4',
                children: [
                  e('div', {
                    className: 'inline-flex mb-8',
                    children: e('img', {
                      src: k.error404,
                      width: '176',
                      height: '176',
                      alt: '404 illustration',
                    }),
                  }),
                  e('div', {
                    className: 'mb-6',
                    children: 'Hmm... La pagina no existe!',
                  }),
                  e(V, {
                    to: 'mp-pro/',
                    className: 'btn bg-primary hover:bg-indigo-600 text-white',
                    children: 'Regresar',
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    })
  );
}
var Me = '/mp-pro/assets/auth-image.8881af3c.jpg';
function Y(s) {
  return e('div', {
    className: `${s.register ? 'w-[27rem]' : 'w-[28.5rem]'} ${
      s.calendar && 'w-[100%]'
    }  ${s.calendarEdit && 'w-[100%]'} ${s.update && 'w-[363px]'} ${
      s.createGroup && 'w-[440px]'
    }`,
    children: t('button', {
      className:
        'btn bg-primary hover:bg-indigo-600 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none h-12 w-full',
      disabled: !0,
      children: [
        e('svg', {
          className: 'animate-spin w-4 h-4 fill-current shrink-0',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z',
          }),
        }),
        e('span', { className: 'ml-2', children: s.loading }),
      ],
    }),
  });
}
function se(s) {
  return e('section', {
    className: ' mt-5',
    children: t('div', {
      className: 'bg-red-100 text-red-600 px-2 py-2 rounded flex',
      children: [
        e('svg', {
          className: 'w-3 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        }),
        e('span', { className: ' text-sm', children: s.message }),
      ],
    }),
  });
}
function Ya() {
  const s = _(),
    a = v(Ee),
    l = v(Le),
    r = ne(),
    [n, i] = o.exports.useState(!1),
    c = () => i(!n),
    d = (x) => {
      s(ga(x, r));
    },
    {
      register: m,
      handleSubmit: u,
      formState: { errors: p },
    } = U(),
    h = () =>
      l
        ? e('div', { children: e(Y, { loading: 'Iniciando' }) })
        : e('button', {
            type: 'submit',
            className:
              'btn bg-primary hover:bg-secondary text-white hover:text-primary font-semibold w-full h-12',
            children: 'Iniciar sesi\xF3n',
          }),
    f = () =>
      t(C, {
        children: [
          (a == null ? void 0 : a.state) === !0 &&
            (a == null ? void 0 : a.code) === 500 &&
            e(se, {
              message:
                ' Error de servidor. Por favor vuelva a intentarlo m\xE1s tarde.',
            }),
          (a == null ? void 0 : a.state) === !0 &&
            (a == null ? void 0 : a.code) === 400 &&
            e(se, { message: ' Correo o contrase\xF1a incorrectos.' }),
          (a == null ? void 0 : a.state) === !0 &&
            (a == null ? void 0 : a.code) === 401 &&
            e(se, { message: ' Correo o contrase\xF1a incorrectos.' }),
          (a == null ? void 0 : a.state) === !0 &&
            (a == null ? void 0 : a.code) === 404 &&
            e(se, {
              message:
                ' Error de servidor. Por favor vuelva a intentarlo m\xE1s tarde.',
            }),
        ],
      });
  return e('main', {
    className: 'bg-white',
    children: t('div', {
      className: 'relative md:flex',
      children: [
        e('div', {
          className: 'md:w-1/2',
          children: t('div', {
            className: 'min-h-screen h-full flex flex-col after:flex-1',
            children: [
              e('div', {
                className: 'flex-1',
                children: e('section', {
                  className:
                    'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                  children: e('figure', {
                    className:
                      'relative flex justify-between w-[29rem] mx-auto items-center mt-10',
                    children: e('img', {
                      src: k.logoNide,
                      alt: 'Logo',
                      className: 'w-36',
                    }),
                  }),
                }),
              }),
              t('div', {
                className: 'w-[29rem] mx-auto px-1 mt-14',
                children: [
                  t('h1', {
                    className: 'text-3xl text-slate-800 font-semibold mb-6',
                    children: [
                      'Hola de nuevo',
                      ' ',
                      e('p', {
                        className: 'text-sm font-normal',
                        children:
                          'Inicia sesi\xF3n para acceder al sistema MP Pro',
                      }),
                    ],
                  }),
                  t('form', {
                    onSubmit: u(d),
                    children: [
                      t('div', {
                        className: 'space-y-4',
                        children: [
                          t('div', {
                            children: [
                              e('label', {
                                className:
                                  'block text-sm font-semibold mb-1 text-black',
                                htmlFor: 'email',
                                children: 'Correo:',
                              }),
                              e(
                                'input',
                                y(
                                  {
                                    id: 'email',
                                    className: 'form-input w-full h-12',
                                    type: 'text',
                                    autoComplete: 'off',
                                  },
                                  m('email', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              p.email &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: p.email.message,
                                }),
                            ],
                          }),
                          t('div', {
                            className: 'relative',
                            children: [
                              e('label', {
                                className:
                                  'block text-sm font-semibold mb-1 text-black',
                                htmlFor: 'password',
                                children: 'Contrase\xF1a:',
                              }),
                              t('div', {
                                className:
                                  'focus-within:text-primary w-full h-12',
                                children: [
                                  e(
                                    'input',
                                    y(
                                      {
                                        maxLength: '35',
                                        className: 'form-input w-full h-12',
                                        type: n ? 'text' : 'password',
                                        autoComplete: 'off',
                                      },
                                      m('password', {
                                        required: {
                                          value: !0,
                                          message: 'El campo es requerido',
                                        },
                                      })
                                    )
                                  ),
                                  e('section', {
                                    className: 'relative',
                                    children: e('button', {
                                      type: 'button',
                                      className:
                                        'absolute inset-2 -top-10 left-auto flex items-center mr-2',
                                      children: n
                                        ? e('img', {
                                            onClick: c,
                                            src: k.openEye,
                                            alt: 'Ojo abierto',
                                          })
                                        : e('img', {
                                            onClick: c,
                                            src: k.closedEye,
                                            alt: 'Ojo cerrado',
                                          }),
                                    }),
                                  }),
                                ],
                              }),
                              p.password &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: p.password.message,
                                }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        className: 'flex flex-col mt-1',
                        children: [
                          e('div', {
                            className: 'text-right mb-8',
                            children: e(V, {
                              className: 'text-sm font-semibold text-black',
                              to: '/mp-pro/reset-password',
                              children: '\xBFOlvidaste tu contrase\xF1a?',
                            }),
                          }),
                          h(),
                        ],
                      }),
                    ],
                  }),
                  e('footer', { className: 'pt-5 mt-6', children: f() }),
                ],
              }),
            ],
          }),
        }),
        e('div', {
          className: 'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
          'aria-hidden': 'true',
          children: e('img', {
            className: 'object-cover object-center w-full h-full',
            src: Me,
            width: '760',
            height: '1024',
            alt: 'Authentication',
          }),
        }),
      ],
    }),
  });
}
function Ja() {
  const {
      register: s,
      handleSubmit: a,
      formState: { errors: l },
    } = U(),
    r = _(),
    n = ne(),
    i = v(Ee),
    c = v(Le);
  o.exports.useEffect(() => {
    r(Ce());
  }, []);
  const d = () => {
      sessionStorage.clear(), r(Q(!1));
    },
    m = (p) => r(vt(p, n)),
    u = () =>
      t(C, {
        children: [
          (i == null ? void 0 : i.state) === !0 &&
            (i == null ? void 0 : i.code) === 500 &&
            e(se, {
              message:
                ' Error de servidor. Por favor vuelva a intentarlo m\xE1s tarde.',
            }),
          (i == null ? void 0 : i.state) === !0 &&
            (i == null ? void 0 : i.code) === 400 &&
            e(se, {
              message: ' El correo no se encuentra en nuestra base de datos.',
            }),
          (i == null ? void 0 : i.state) === !0 &&
            (i == null ? void 0 : i.code) === 401 &&
            e(se, {
              message: ' El correo no se encuentra en nuestra base de datos.',
            }),
          (i == null ? void 0 : i.state) === !0 &&
            (i == null ? void 0 : i.code) === 404 &&
            e(se, {
              message:
                ' Error de servidor. Por favor vuelva a intentarlo m\xE1s tarde.',
            }),
        ],
      });
  return e('main', {
    className: 'bg-white',
    children: t('div', {
      className: 'relative md:flex',
      children: [
        e('div', {
          className: 'md:w-1/2',
          children: t('div', {
            className: 'min-h-screen h-full flex flex-col after:flex-1',
            children: [
              e('div', {
                className: 'flex-1 w-[29rem] mx-auto',
                children: e('div', {
                  className: 'flex items-center justify-between h-16',
                  children: e(V, {
                    className:
                      'relative flex justify-between w-full items-center',
                    to: '/mp-pro/signin',
                    onClick: d,
                    children: e('figure', {
                      className:
                        'relative flex justify-between w-full items-center mt-10',
                      children: e('img', {
                        src: k.logoNide,
                        alt: 'Logo',
                        className: 'w-36',
                      }),
                    }),
                  }),
                }),
              }),
              t('div', {
                className: 'mx-auto w-[29rem]',
                children: [
                  e('h1', {
                    className: 'text-3xl text-slate-800 font-semibold w-[80%]',
                    children: 'Ingresa tu correo electr\xF3nico',
                  }),
                  e('span', {
                    className: 'text-sm text-[#646C7D] block -mt-1',
                    children:
                      'Enviaremos un link de recuperaci\xF3n al correo que ingreses',
                  }),
                  t('form', {
                    onSubmit: a(m),
                    children: [
                      e('div', {
                        children: t('div', {
                          className: 'mt-7',
                          children: [
                            e('label', {
                              className:
                                'block text-sm font-semibold mb-1 text-black',
                              htmlFor: 'email',
                              children: 'Correo:',
                            }),
                            e(
                              'input',
                              y(
                                {
                                  autoComplete: 'off',
                                  className: 'form-input w-full h-12',
                                  type: 'email',
                                },
                                s('email', {
                                  required: {
                                    value: !0,
                                    message: 'El campo es requerido',
                                  },
                                  pattern: {
                                    value:
                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'El formato no es correcto',
                                  },
                                })
                              )
                            ),
                            l.email &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: l.email.message,
                              }),
                          ],
                        }),
                      }),
                      e('div', {
                        className: 'flex justify-end mt-8',
                        children: c
                          ? e(Y, { loading: 'Enviando' })
                          : e('button', {
                              type: 'submit',
                              className:
                                'btn bg-primary hover:bg-secondary hover:text-primary text-white font-bold whitespace-nowrap w-full h-12',
                              children: 'Enviar link de recuperaci\xF3n',
                            }),
                      }),
                    ],
                  }),
                  e('footer', { className: 'pt-5 mt-6', children: u() }),
                ],
              }),
            ],
          }),
        }),
        e('figure', {
          className: 'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
          'aria-hidden': 'true',
          children: e('img', {
            className: 'object-cover object-center w-full h-full',
            src: Me,
            width: '760',
            height: '1024',
            alt: 'Authentication',
          }),
        }),
      ],
    }),
  });
}
function Ka() {
  U();
  const [s, a] = o.exports.useState(new Array(6).fill('')),
    [l, r] = o.exports.useState(2),
    [n, i] = o.exports.useState(!1),
    c = _(),
    d = ne(),
    m = v(Ee),
    u = v(Le);
  o.exports.useEffect(() => {
    if (l) {
      const N = l > 0 && setInterval(() => r(l - 1), 1e3);
      return () => clearInterval(N);
    } else l === 0 && i(!0);
  }, [l]);
  const p = sessionStorage.getItem('email'),
    h = { email: p },
    f = sessionStorage.getItem('code'),
    x = { user_code: s.join('') },
    b = () => c(wa(x, d)),
    g = (N) => c(vt(N, d)),
    E = (N, S) => {
      if (isNaN(N.value)) return !1;
      a([...s.map((L, O) => (O === S ? N.value : L))]),
        N.nextSibling && N.nextSibling.focus();
    };
  return e('main', {
    className: 'bg-white',
    children: t('div', {
      className: 'relative md:flex',
      children: [
        e('div', {
          className: 'md:w-1/2',
          children: t('div', {
            className: 'min-h-screen h-full flex flex-col after:flex-1',
            children: [
              e('div', {
                className: 'flex-1 w-[29rem] mx-auto',
                children: e('div', {
                  className: 'flex items-center justify-between h-16',
                  children: e(V, {
                    className:
                      'relative flex justify-between w-full items-center',
                    to: '/mp-pro/signin',
                    onClick: () => {
                      sessionStorage.clear(), c(Q(!1));
                    },
                    children: e('figure', {
                      className:
                        'relative flex justify-between w-full items-center mt-10',
                      children: e('img', {
                        src: k.logoNide,
                        alt: 'Logo',
                        className: 'w-36',
                      }),
                    }),
                  }),
                }),
              }),
              t('div', {
                className: 'w-[29rem] mx-auto',
                children: [
                  e('article', {
                    children: t('h1', {
                      className: 'text-3xl text-slate-800 font-semibold mb-6',
                      children: [
                        'Ingresa el c\xF3digo de recuperaci\xF3n',
                        t('p', {
                          className: 'font-normal text-sm',
                          children: [
                            'Ingresa el c\xF3digo de 6 d\xEDgitos que enviamos a ',
                            e('span', {
                              className: 'text-primary',
                              children: p,
                            }),
                          ],
                        }),
                        e('span', {
                          className: 'text-sm text-red-500',
                          children: f,
                        }),
                      ],
                    }),
                  }),
                  t('form', {
                    children: [
                      e('div', {
                        className: 'space-y-4',
                        children: e('div', {
                          className:
                            'space-x-3 mt-5 flex justify-between items-center',
                          children: s.map((N, S) =>
                            e(
                              'input',
                              {
                                className:
                                  'form-input w-12 h-12 text-xl text-center font-semibold',
                                type: 'text',
                                name: 'otp',
                                maxLength: '1',
                                value: N,
                                onChange: (L) => E(L.target, S),
                                onFocus: (L) => L.target.select(),
                              },
                              S
                            )
                          ),
                        }),
                      }),
                      t('article', {
                        className:
                          'mt-6 flex flex-col justify-center items-center',
                        children: [
                          e('p', {
                            className:
                              'text-gray-400 text-sm font-medium text-black',
                            children: '\xBFNo lo recibiste?',
                          }),
                          n
                            ? e('div', {
                                children: e('button', {
                                  onClick: () => {
                                    g(h), i(!1), r(2);
                                  },
                                  className:
                                    'text-base font-semibold text-primary hover:text-slate-500',
                                  children: 'Solicitar nuevo c\xF3digo',
                                }),
                              })
                            : t('p', {
                                className:
                                  'text-center text-gray-400 font-semibold',
                                children: [
                                  'Tu c\xF3digo vence en: ',
                                  l,
                                  ' segundos',
                                ],
                              }),
                        ],
                      }),
                      e('div', {
                        className: 'flex justify-end mt-8',
                        children: u
                          ? e(Y, { loading: 'Enviando' })
                          : e('button', {
                              onClick: b,
                              type: 'button',
                              className:
                                'btn bg-primary hover:bg-secondary hover:text-primary text-white whitespace-nowrap w-full h-12',
                              children: 'Verificar c\xF3digo',
                            }),
                      }),
                    ],
                  }),
                  e('footer', {
                    className: 'pt-5 mt-6',
                    children:
                      m &&
                      e(se, {
                        message:
                          'El c\xF3digo es invalido, verifica que el codigo de verificaci\xF3n sea el correcto.',
                      }),
                  }),
                ],
              }),
            ],
          }),
        }),
        e('figure', {
          className: 'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
          'aria-hidden': 'true',
          children: e('img', {
            className: 'object-cover object-center w-full h-full',
            src: Me,
            width: '760',
            height: '1024',
            alt: 'Authentication',
          }),
        }),
      ],
    }),
  });
}
function Qa(s) {
  return e('section', {
    className: ' mt-5',
    children: t('div', {
      className: 'bg-green-100 text-green-600 px-2 py-2 rounded flex',
      children: [
        e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        }),
        e('span', { className: ' text-sm', children: s.message }),
      ],
    }),
  });
}
function Xa() {
  const {
      register: s,
      handleSubmit: a,
      reset: l,
      formState: { errors: r },
      getValues: n,
      watch: i,
    } = U(),
    c = _(),
    d = ne(),
    m = v(Ee),
    u = v(Le),
    [p, h] = o.exports.useState(!1),
    f = () => h(!p),
    [x, b] = o.exports.useState(!1),
    g = () => b(!x),
    E = (N) => {
      N.password === N.password2 && c(ya(N, d));
    };
  return (
    o.exports.useEffect(() => {
      m && l();
    }, [m]),
    e('main', {
      className: 'bg-white',
      children: t('div', {
        className: 'relative md:flex',
        children: [
          e('div', {
            className: 'md:w-1/2',
            children: t('div', {
              className: 'min-h-screen h-full flex flex-col after:flex-1',
              children: [
                e('div', {
                  className: 'flex-1 w-[29rem] mx-auto',
                  children: e('div', {
                    className: 'flex items-center justify-between h-16',
                    children: e(V, {
                      className:
                        'relative flex justify-between w-full items-center',
                      to: '/mp-pro/signin',
                      onClick: () => {
                        sessionStorage.clear(), c(Q(!1));
                      },
                      children: e('figure', {
                        className:
                          'relative flex justify-between w-full items-center mt-10',
                        children: e('img', {
                          src: k.logoNide,
                          alt: 'Logo',
                          className: 'w-36',
                        }),
                      }),
                    }),
                  }),
                }),
                t('div', {
                  className: 'mx-auto w-[29rem] mt-16',
                  children: [
                    e('h1', {
                      className: 'text-3xl text-slate-800 font-semibold mb-6',
                      children: 'Restablece tu contrase\xF1a',
                    }),
                    t('form', {
                      onSubmit: a(E),
                      children: [
                        t('div', {
                          className: 'space-y-4',
                          children: [
                            t('div', {
                              className: 'relative mb-6',
                              children: [
                                e('label', {
                                  className:
                                    'block text-sm font-semibold mb-1 text-black',
                                  htmlFor: 'password',
                                  children: 'Nueva contrase\xF1a:',
                                }),
                                t('div', {
                                  className:
                                    'focus-within:text-primary w-full h-12',
                                  children: [
                                    e(
                                      'input',
                                      y(
                                        {
                                          maxLength: '35',
                                          className: 'form-input w-full h-12',
                                          type: p ? 'text' : 'password',
                                          autoComplete: 'off',
                                        },
                                        s('password', {
                                          required: {
                                            value: !0,
                                            message: 'El campo es requerido',
                                          },
                                        })
                                      )
                                    ),
                                    e('section', {
                                      className: 'relative',
                                      children: e('button', {
                                        type: 'button',
                                        className:
                                          'absolute inset-2 -top-10 left-auto flex items-center mr-2',
                                        children: p
                                          ? e('img', {
                                              onClick: f,
                                              src: k.openEye,
                                              alt: 'Ojo abierto',
                                            })
                                          : e('img', {
                                              onClick: f,
                                              src: k.closedEye,
                                              alt: 'Ojo cerrado',
                                            }),
                                      }),
                                    }),
                                  ],
                                }),
                                r.password &&
                                  e('span', {
                                    className: 'text-red-500 text-sm',
                                    children: r.password.message,
                                  }),
                              ],
                            }),
                            t('div', {
                              className: 'relative',
                              children: [
                                e('label', {
                                  className:
                                    'block text-sm font-semibold mb-1 text-black',
                                  htmlFor: 'password2',
                                  children: 'Repite tu contrase\xF1a:',
                                }),
                                t('div', {
                                  className:
                                    'focus-within:text-primary w-full h-12',
                                  children: [
                                    e(
                                      'input',
                                      y(
                                        {
                                          maxLength: '35',
                                          className: 'form-input w-full h-12',
                                          type: x ? 'text' : 'password',
                                          autoComplete: 'off',
                                        },
                                        s('password2', {
                                          required: {
                                            value: !0,
                                            message: 'El campo es requerido',
                                          },
                                        })
                                      )
                                    ),
                                    e('section', {
                                      className: 'relative',
                                      children: e('button', {
                                        type: 'button',
                                        className:
                                          'absolute inset-2 -top-10 left-auto flex items-center mr-2',
                                        children: x
                                          ? e('img', {
                                              onClick: g,
                                              src: k.openEye,
                                              alt: 'Ojo abierto',
                                            })
                                          : e('img', {
                                              onClick: g,
                                              src: k.closedEye,
                                              alt: 'Ojo cerrado',
                                            }),
                                      }),
                                    }),
                                  ],
                                }),
                                r.password2 &&
                                  e('span', {
                                    className: 'text-red-500 text-sm',
                                    children: r.password2.message,
                                  }),
                                i('password2') !== i('password') &&
                                n('password2')
                                  ? e('span', {
                                      className: 'text-red-500 text-sm',
                                      children:
                                        'Las contrase\xF1as no coinciden',
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        e('div', {
                          className: 'flex justify-end mt-8',
                          children: u
                            ? e(Y, { loading: 'Enviando' })
                            : e('button', {
                                type: 'submit',
                                className:
                                  'btn bg-primary hover:bg-secondary hover:text-primary text-white whitespace-nowrap font-bold w-full h-12',
                                children: 'Restablecer contrase\xF1a',
                              }),
                        }),
                      ],
                    }),
                    e('footer', {
                      className: 'pt-5 mt-6',
                      children:
                        m &&
                        e(Qa, {
                          message:
                            'La contrase\xF1a se actualiz\xF3 correctamente. Aguarde y ser\xE1 redirigido.',
                        }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          e('figure', {
            className:
              'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
            'aria-hidden': 'true',
            children: e('img', {
              className: 'object-cover object-center w-full h-full',
              src: Me,
              width: '760',
              height: '1024',
              alt: 'Authentication',
            }),
          }),
        ],
      }),
    })
  );
}
function ae({ children: s }) {
  return sessionStorage.getItem('token') ? s : e(dt, { to: '/mp-pro/signin' });
}
function _e({ children: s }) {
  return sessionStorage.getItem('token') ? e(dt, { to: 'master-shedule/' }) : s;
}
var el = '/mp-pro/assets/status.b6af7574.png';
function kt({ children: s, className: a, type: l, open: r, setOpen: n }) {
  return e(C, {
    children:
      r &&
      e('div', {
        className: a,
        children: e('div', {
          className:
            'inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-white shadow-lg border border-slate-200 text-slate-600 font-semibold',
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  ((c) => {
                    switch (c) {
                      case 'warning':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-amber-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                          }),
                        });
                      case 'error':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-rose-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                          }),
                        });
                      case 'success':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-emerald-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
                          }),
                        });
                      default:
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-primary mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
                          }),
                        });
                    }
                  })(l),
                  e('div', { children: s }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => n(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
const tl = { statusList: [] },
  St = oe({
    initialState: tl,
    name: 'systemStatus',
    reducers: {
      setStatusList: (s, a) => {
        s.statusList = a.payload;
      },
    },
  }),
  { setStatusList: sl } = St.actions,
  al = (s) => s.systemStatus.statusList;
var ll = St.reducer;
const rl = () => (s) => {
  z.get('http://3.88.215.84/api/interfaces/list')
    .then((a) => {
      a.status === 200 && s(sl(a.data.interfaces));
    })
    .catch((a) => console.log(a));
};
function nl({ openStatusToast: s, setOpenStatusToast: a }) {
  const l = _(),
    r = v(al);
  o.exports.useEffect(() => {
    l(rl());
  }, []);
  const n = (i) => new Date(i).toLocaleDateString('es-ES');
  return t(C, {
    children: [
      t('section', {
        className: 'mb-5',
        children: [
          e('article', {
            children: e('h2', {
              className: 'text-2xl md:text-3xl text-slate-800 font-bold',
              children: 'Estado del sistema',
            }),
          }),
          e('figure', {
            className: 'flex justify-center items-center',
            children: e('img', {
              className: 'w-[230px]',
              src: el,
              alt: 'server',
            }),
          }),
        ],
      }),
      e('section', {
        className: 'flex items-center justify-center',
        children: e('div', {
          className: 'grid grid-cols-2 gap-4',
          children:
            r == null
              ? void 0
              : r.map((i, c) =>
                  t(
                    'article',
                    {
                      className:
                        'border border-borderInput rounded w-[500px] flex justify-between p-3',
                      children: [
                        t('div', {
                          children: [
                            e('h2', {
                              className: 'font-semibold text-2xl',
                              children: i.name,
                            }),
                            t('p', {
                              className: 'text-sm ',
                              children: [
                                'Ejecutado por ult.',
                                ' ',
                                n(
                                  i == null
                                    ? void 0
                                    : i.ORACLE_PROCESS_DATE_START
                                ),
                              ],
                            }),
                            t('button', {
                              onClick: () => {
                                a(!0),
                                  setTimeout(() => {
                                    a(!1);
                                  }, 5e3);
                              },
                              className:
                                'text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]',
                              children: [
                                e('img', { src: k.refresh, alt: 'Refresh' }),
                                e('span', {
                                  className: 'font-semibold text-primary',
                                  children: 'Volver a sincronizar',
                                }),
                              ],
                            }),
                          ],
                        }),
                        e('figure', {
                          children:
                            i.STATUS_CODE === '200'
                              ? e('img', { src: k.check, alt: 'Success' })
                              : i.STATUS_CODE === '500'
                              ? e('img', { src: k.warning, alt: 'Alerta' })
                              : e('img', { src: k.circleDown, alt: 'Peligro' }),
                        }),
                      ],
                    },
                    c
                  )
                ),
        }),
      }),
      e('section', {
        className: 'flex justify-end -mt-20',
        children: e(kt, {
          type: 'success',
          open: s,
          setOpen: a,
          className: 'animate-bounce',
          children: t('span', {
            className: 'flex flex-col',
            children: [
              'Sincronizando interfaz',
              ' ',
              e('span', {
                className: 'font-medium w-72',
                children:
                  'Te notificaremos por correo electr\xF3nico cuando el proceso finalice.',
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const il = () => {
    const [s, a] = o.exports.useState(!1);
    return e(te, {
      icon: k.administratorIcon,
      nameRoute: 'Estado del Sistema',
      nameSubRoute: 'Interfaces',
      children: t('div', {
        className: 'px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto',
        children: [
          e('div', {
            className:
              'sm:flex sm:justify-between sm:items-center pb-4 md:pb-2',
          }),
          e('section', {
            className: 'lg:px-8 pt-3 pb-8',
            children: e(nl, { openStatusToast: s, setOpenStatusToast: a }),
          }),
        ],
      }),
    });
  },
  Ct = (s, a, l) => {
    const r = [...s];
    let n;
    l === 'capabilities'
      ? (n = r.sort((i, c) =>
          i.product_line.name.toLowerCase() < c.product_line.name.toLowerCase()
            ? 1
            : i.product_line.name.toLowerCase() >
              c.product_line.name.toLowerCase()
            ? -1
            : 0
        ))
      : (n = r.sort((i, c) =>
          i.name.toLowerCase() < c.name.toLowerCase()
            ? 1
            : i.name.toLowerCase() > c.name.toLowerCase()
            ? -1
            : 0
        )),
      a(n);
  },
  Et = (s, a, l) => {
    const r = [...s];
    let n;
    l === 'capabilities'
      ? (n = r.sort((i, c) =>
          i.product_line.name.toLowerCase() > c.product_line.name.toLowerCase()
            ? 1
            : i.product_line.name.toLowerCase() <
              c.product_line.name.toLowerCase()
            ? -1
            : 0
        ))
      : (n = r.sort((i, c) =>
          i.name.toLowerCase() > c.name.toLowerCase()
            ? 1
            : i.name.toLowerCase() < c.name.toLowerCase()
            ? -1
            : 0
        )),
      a(n);
  },
  Ye = (s, a, l) => {
    const r = [...s];
    let n;
    l === 'capabilities'
      ? (n = r.sort((i, c) =>
          i.product_line.group.name.toLowerCase() <
          c.product_line.group.name.toLowerCase()
            ? 1
            : i.product_line.group.name.toLowerCase() >
              c.product_line.group.name.toLowerCase()
            ? -1
            : 0
        ))
      : l === 'productLine'
      ? (n = r.sort((i, c) =>
          i.group.name.toLowerCase() < c.group.name.toLowerCase()
            ? 1
            : i.group.name.toLowerCase() > c.group.name.toLowerCase()
            ? -1
            : 0
        ))
      : (n = r.sort((i, c) =>
          i.group.toLowerCase() < c.group.toLowerCase()
            ? 1
            : i.group.toLowerCase() > c.group.toLowerCase()
            ? -1
            : 0
        )),
      a(n);
  },
  Je = (s, a, l) => {
    const r = [...s];
    let n;
    l === 'capabilities'
      ? (n = r.sort((i, c) =>
          i.product_line.group.name.toLowerCase() >
          c.product_line.group.name.toLowerCase()
            ? 1
            : i.product_line.group.name.toLowerCase() <
              c.product_line.group.name.toLowerCase()
            ? -1
            : 0
        ))
      : l === 'productLine'
      ? (n = r.sort((i, c) =>
          i.group.name.toLowerCase() > c.group.name.toLowerCase()
            ? 1
            : i.group.name.toLowerCase() < c.group.name.toLowerCase()
            ? -1
            : 0
        ))
      : (n = r.sort((i, c) =>
          i.group.toLowerCase() > c.group.toLowerCase()
            ? 1
            : i.group.toLowerCase() < c.group.toLowerCase()
            ? -1
            : 0
        )),
      a(n);
  },
  De = (s, a, l) => {
    const n = [...s].sort((i, c) =>
      i[l].toLowerCase() < c[l].toLowerCase()
        ? 1
        : i[l].toLowerCase() > c[l].toLowerCase()
        ? -1
        : 0
    );
    a(n);
  },
  Oe = (s, a, l) => {
    const n = [...s].sort((i, c) =>
      i[l].toLowerCase() > c[l].toLowerCase()
        ? 1
        : i[l].toLowerCase() < c[l].toLowerCase()
        ? -1
        : 0
    );
    a(n);
  };
function Lt({ data: s, listHistory: a, setList: l }) {
  const [r, n] = o.exports.useState({ state: !1, asc: !1 }),
    [i, c] = o.exports.useState({ state: !1, asc: !1 });
  o.exports.useEffect(() => {
    r.state && (r.asc ? Oe(a, l, 'planning_id') : De(a, l, 'planning_id'));
  }, [r]),
    o.exports.useEffect(() => {
      i.state &&
        (i.asc
          ? Oe(a, l, 'user_id__first_name')
          : De(a, l, 'user_id__first_name'));
    }, [i]);
  const d = (m) => new Date(m).toLocaleDateString('es-ES');
  return e(C, {
    children: t('table', {
      className: 'table-auto w-full table',
      children: [
        e('thead', {
          className:
            'text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50',
          children: t('tr', {
            children: [
              e('th', {
                className: 'px-2 first:pl-5 cursor-pointer',
                onClick: () => {
                  n({ state: !0, asc: !r.asc });
                },
                children: t('div', {
                  className: 'flex items-center space-x-2',
                  children: [
                    e('div', {
                      className: 'font-semibold text-left',
                      children: 'ID de Planeaci\xF3n',
                    }),
                    e('img', {
                      src: r.asc ? k.doubleDown : k.doubleUp,
                      alt: 'Flecha abajo',
                      className: 'w-5',
                    }),
                  ],
                }),
              }),
              e('th', {
                className:
                  'px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer',
                onClick: () => {
                  c({ state: !0, asc: !i.asc });
                },
                children: t('div', {
                  className: 'flex items-center space-x-2',
                  children: [
                    e('div', {
                      className: 'font-semibold',
                      children: 'Planeador',
                    }),
                    e('img', {
                      src: i.asc ? k.doubleDown : k.doubleUp,
                      alt: 'Flecha abajo',
                      className: 'w-5',
                    }),
                  ],
                }),
              }),
              e('th', {
                className: 'px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                children: e('p', {
                  className: 'font-semibold text-center',
                  children: 'Grupos planeados',
                }),
              }),
              e('th', {
                className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                children: e('p', {
                  className: 'font-semibold text-center',
                  children: 'Fecha de planeaci\xF3n',
                }),
              }),
              e('th', {
                className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ',
                children: e('p', { className: 'font-semibold text-center' }),
              }),
            ],
          }),
        }),
        e('tbody', {
          className: 'text-sm divide-y divide-slate-200',
          children:
            s == null
              ? void 0
              : s.map((m, u) =>
                  t(
                    'tr',
                    {
                      children: [
                        e('td', {
                          className:
                            'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4',
                          children: e('p', {
                            className: 'font-medium text-primary  capitalize',
                            children: m == null ? void 0 : m.planning_id,
                          }),
                        }),
                        e('td', {
                          className:
                            'px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                          children: t('p', {
                            className: 'text-left font-semibold',
                            children: [
                              m == null ? void 0 : m.user_id__first_name,
                              ' ',
                              m == null ? void 0 : m.user_id__last_name,
                            ],
                          }),
                        }),
                        e('td', {
                          className:
                            'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                          children: e('p', {
                            className: 'text-center',
                            children: m == null ? void 0 : m.selected_groups,
                          }),
                        }),
                        e('td', {
                          className:
                            'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                          children: e('p', {
                            className: 'text-center',
                            children: d(m == null ? void 0 : m.date),
                          }),
                        }),
                        e('td', {
                          className:
                            'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                          children: e('figure', {
                            className: 'flex justify-end items-center',
                            children: e(V, {
                              to: `/mp-pro/planning/plannings/gantt/${m.id}`,
                              children: e('img', { src: k.play, alt: 'play' }),
                            }),
                          }),
                        }),
                      ],
                    },
                    u
                  )
                ),
        }),
      ],
    }),
  });
}
const zt = {
    orders: [],
    groups: [],
    sortOrder: [],
    planningsOption: [],
    typeSort: [],
    notFound: null,
    listHistory: [],
    loadListHistory: !0,
    search: [],
  },
  Mt = G('REVERT_ALL'),
  _t = G('REVERT_SEARCH'),
  Dt = oe({
    initialState: zt,
    name: 'planning',
    extraReducers: (s) => {
      s.addCase(Mt, () => zt),
        s.addCase(_t, (a, l) => {
          a.search = [];
        });
    },
    reducers: {
      setOrders: (s, a) => {
        s.orders = a.payload;
      },
      setGroups: (s, a) => {
        s.groups = a.payload;
      },
      setSortOrder: (s, a) => {
        s.sortOrder = a.payload;
      },
      setPlanningOption: (s, a) => {
        s.planningsOption = a.payload;
      },
      setTypeSort: (s, a) => {
        s.typeSort = a.payload;
      },
      setNotFound: (s, a) => {
        s.notFound = a.payload;
      },
      setListHistory: (s, a) => {
        s.listHistory = a.payload;
      },
      setLoadHistory: (s, a) => {
        s.loadListHistory = a.payload;
      },
      setSearch: (s, a) => {
        s.search = a.payload;
      },
    },
  }),
  {
    setOrders: ol,
    setGroups: Ot,
    setNotFound: cl,
    setSortOrder: dl,
    setListHistory: ml,
    setLoadHistory: Bt,
    setSearch: pl,
    setTypeSort: ul,
    setPlanningOption: hl,
  } = Dt.actions,
  xl = (s) => s.planning.orders,
  fl = (s) => s.planning.groups,
  bl = (s) => s.planning.notFound,
  Ft = (s) => s.planning.sortOrder,
  It = (s) => s.planning.listHistory,
  vl = (s) => s.planning.loadListHistory,
  gl = (s) => s.planning.search,
  Nl = (s) => s.planning.typeSort,
  wl = (s) => s.planning.planningsOption;
var yl = Dt.reducer;
const kl = (s) => (a) => {
    z.post('http://3.88.215.84/api/open-orders/list', s)
      .then((l) => {
        l.status === 200 && a(ol(l.data));
      })
      .catch((l) => Se(l, a, cl));
  },
  Sl = () => (s) => {
    z.get('http://3.88.215.84/api/planning/list-criteria')
      .then((a) => {
        a.status === 200 && s(dl(a.data.criteria));
      })
      .catch((a) => console.log(a));
  },
  Cl = () => (s) => {
    s(Bt(!0)),
      z
        .get('http://3.88.215.84/api/planning/list-history')
        .then((a) => {
          a.status === 200 && s(ml(a.data.history_planning));
        })
        .catch(() => {
          s(Bt(!1));
        });
  },
  El = (s, a, l) => (r) => {
    z.get(`http://3.88.215.84/api/planning/order-by?criteria-name=${s}`)
      .then((n) => {
        n.status === 200 && (a(!0), l(!1), r(ul(n.data)));
      })
      .catch((n) => console.log(n));
  },
  Be = () =>
    t('section', {
      className: 'justify-center items-center flex orders-table',
      children: [
        e('div', { className: 'loader' }),
        e('span', {
          className: 'ml-3 text-primary font-semibold',
          children: 'Cargando',
        }),
      ],
    });
function Ll({ setGroupOptionsPanel: s }) {
  const a = _(),
    l = v(It),
    r = v(vl),
    n = v(gl),
    [i, c] = o.exports.useState(v(It)),
    [d, m] = o.exports.useState(!1),
    [u, p] = o.exports.useState(!0);
  return (
    o.exports.useEffect(() => {
      a(Cl());
    }, []),
    o.exports.useEffect(() => {
      c(l);
    }, [l]),
    o.exports.useEffect(() => {
      p(r);
    }, [r]),
    t(C, {
      children: [
        t('section', {
          className: 'mb-5 flex justify-between',
          children: [
            e('div', {
              className: 'mb-4 sm:mb-0',
              children: e('h1', {
                className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                children: 'Planeaciones',
              }),
            }),
            t('div', {
              className: 'flex space-x-3',
              children: [
                e('input', {
                  className: 'form-input w-72',
                  placeholder: 'Buscar por ID...',
                  type: 'search',
                  onChange: (f) => {
                    if (f.target.value.length > 0) {
                      m(!0);
                      let x = i.filter((b) => {
                        if (
                          b.planning_id
                            .toString()
                            .toLowerCase()
                            .includes(f.target.value.toLowerCase())
                        )
                          return b;
                      });
                      a(pl(x));
                    } else a(_t()), m(!1);
                  },
                }),
                t('button', {
                  onClick: () => s(!0),
                  type: 'button',
                  className: 'btn bg-primary text-white w-54 space-x-2',
                  children: [
                    e('svg', {
                      className: 'w-4 h-4 fill-current opacity-50 shrink-0',
                      viewBox: '0 0 16 16',
                      children: e('path', {
                        d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
                      }),
                    }),
                    e('span', { children: 'Crear planeaci\xF3n ' }),
                  ],
                }),
              ],
            }),
          ],
        }),
        u
          ? (i == null ? void 0 : i.length) > 0
            ? e('section', {
                children: e('div', {
                  className:
                    'overflow-x-auto rounded-xl border border-slate-300 h-[550px]',
                  children: d
                    ? d && n.length > 0
                      ? e(Lt, { data: n, listHistory: l, setList: c })
                      : e('section', {
                          className: 'justify-center items-center flex h-96',
                          children: e('h2', {
                            className: 'font-semibold text-2xl',
                            children: 'Sin datos que mostrar',
                          }),
                        })
                    : e(Lt, { data: i, listHistory: l, setList: c }),
                }),
              })
            : e(Be, {})
          : e('section', {
              className: 'justify-center items-center flex h-96',
              children: e('h2', {
                className: 'font-semibold text-2xl',
                children: 'Sin datos que mostrar',
              }),
            }),
      ],
    })
  );
}
const zl = {
    groupList: [],
    groupEdit: [],
    groupDelete: [],
    producLines: [],
    plEdit: [],
    plDelete: [],
    loading: null,
    capabilitiesList: [],
    capabilitiesSearch: [],
    capabilitiesEdit: [],
    capabilitiesDelete: [],
    reload: !1,
    reloadCap: !1,
    error: !1,
    errorCapCreate: !1,
  },
  Fe = G('REVERT_SEARCH'),
  Ke = G('REVERT_GROUPEDIT'),
  Pt = G('REVERT_GROUPDELETE'),
  Ml = G('REVERT_PLEDIT'),
  _l = G('REVERT_PLIST'),
  At = G('REVERT_PLDELETE'),
  Ie = G('REVERT_ERROR'),
  jt = G('REVERT_CAPEDIT'),
  Rt = G('REVERT_CAPDELETE'),
  Tt = oe({
    initialState: zl,
    name: 'group',
    extraReducers: (s) => {
      s.addCase(Fe, (a, l) => {
        a.capabilitiesSearch = [];
      }),
        s.addCase(Ke, (a, l) => {
          a.groupEdit = [];
        }),
        s.addCase(Pt, (a, l) => {
          a.groupDelete = [];
        }),
        s.addCase(Ml, (a, l) => {
          a.plEdit = [];
        }),
        s.addCase(At, (a, l) => {
          a.plDelete = [];
        }),
        s.addCase(_l, (a, l) => {
          a.capabilitiesList = [];
        }),
        s.addCase(Ie, (a, l) => {
          (a.error = !1), (a.errorCapCreate = !1);
        }),
        s.addCase(jt, (a, l) => {
          a.capabilitiesEdit = [];
        }),
        s.addCase(Rt, (a, l) => {
          a.capabilitiesDelete = [];
        });
    },
    reducers: {
      setGroup: (s, a) => {
        s.groupList = a.payload;
      },
      setProductLines: (s, a) => {
        s.producLines = a.payload;
      },
      setLoading: (s, a) => {
        s.loading = a.payload;
      },
      setCapabilitiesList: (s, a) => {
        s.capabilitiesList = a.payload;
      },
      setCapabilitiesSearch: (s, a) => {
        s.capabilitiesSearch = a.payload;
      },
      setReload: (s, a) => {
        s.reload = !s.reload;
      },
      setReloadCap: (s, a) => {
        s.reloadCap = !s.reloadCap;
      },
      setGroupEdit: (s, a) => {
        s.groupEdit = a.payload;
      },
      setGroupDelete: (s, a) => {
        s.groupDelete = a.payload;
      },
      setPLEdit: (s, a) => {
        s.plEdit = a.payload;
      },
      setPLDelete: (s, a) => {
        s.plDelete = a.payload;
      },
      setError: (s, a) => {
        s.error = a.payload;
      },
      setErrorCapCreate: (s, a) => {
        s.errorCapCreate = a.payload;
      },
      setCapEdit: (s, a) => {
        s.capabilitiesEdit = a.payload;
      },
      setCapDelete: (s, a) => {
        s.capabilitiesDelete = a.payload;
      },
    },
  }),
  {
    setGroup: Dl,
    setProductLines: Ol,
    setLoading: A,
    setCapabilitiesList: Bl,
    setCapabilitiesSearch: Qe,
    setReload: de,
    setGroupEdit: Fl,
    setGroupDelete: Il,
    setPLEdit: Pl,
    setPLDelete: Al,
    setError: Ne,
    setCapEdit: jl,
    setCapDelete: Rl,
    setReloadCap: me,
    setErrorCapCreate: Ht,
  } = Tt.actions,
  we = (s) => s.group.groupList,
  Pe = (s) => s.group.producLines,
  he = (s) => s.group.loading,
  $t = (s) => s.group.capabilitiesList,
  Xe = (s) => s.group.capabilitiesSearch,
  qt = (s) => s.group.reload,
  Tl = (s) => s.group.reloadCap,
  Hl = (s) => s.group.groupEdit,
  $l = (s) => s.group.groupDelete,
  ql = (s) => s.group.plEdit,
  Vl = (s) => s.group.plDelete,
  et = (s) => s.group.error,
  Vt = (s) => s.group.errorCapCreate,
  Gl = (s) => s.group.capabilitiesEdit,
  Ul = (s) => s.group.capabilitiesDelete;
var Zl = Tt.reducer;
const tt = () => (s) => {
    z.get('http://3.88.215.84/api/capacities/list-groups')
      .then((a) => {
        s(Dl(a.data));
      })
      .catch((a) => console.log(a));
  },
  Wl = () => (s) => {
    z.get('http://3.88.215.84/api/capacities/list-product-line')
      .then((a) => {
        s(Ol(a.data));
      })
      .catch((a) => console.log(a));
  },
  Yl = (s, a, l) => (r) => {
    r(A(!0)),
      z
        .post('http://3.88.215.84/api/capacities/create-product-line', s)
        .then((n) => {
          n.status === 201 && (r(A(!1)), a(!1), l(), r(de()));
        })
        .catch((n) => {
          console.log(n), r(A(!1));
        });
  },
  Jl = (s, a, l) => (r) => {
    r(A(!0)),
      z
        .put(`http://3.88.215.84/api/capacities/update-product-line/${a}`, s)
        .then((n) => {
          n.status === 200 && (r(A(!1)), l(!1), r(de()), r(me()));
        })
        .catch((n) => {
          console.log(n), r(A(!1)), r(Ne(!0));
        });
  },
  Kl = (s, a) => (l) => {
    l(A(!0)),
      z
        .delete(`http://3.88.215.84/api/capacities/delete-product-line/${s}`)
        .then((r) => {
          r.status === 200 && (l(A(!1)), a(!1), l(de()), l(me()));
        })
        .catch((r) => {
          console.log(r), l(A(!1)), l(Ne(!0));
        });
  },
  Ql = () => (s) => {
    z.get('http://3.88.215.84/api/capacities/list-default-capacities')
      .then((a) => {
        s(Bl(a.data)), s(de());
      })
      .catch((a) => console.log(a));
  },
  Xl = (s, a, l) => (r) => {
    r(A(!0));
    const n = sessionStorage.getItem('id');
    z.post(`http://3.88.215.84/api/capacities/new-register-default/${n}/`, s)
      .then((i) => {
        i.status === 201 && (r(A(!1)), a(!1), l(), r(me()));
      })
      .catch(() => {
        r(A(!1)), r(Ht(!0));
      });
  },
  er = (s, a, l, r) => (n) => {
    const i = sessionStorage.getItem('token');
    n(A(!0)),
      z
        .put(
          `http://3.88.215.84/api/capacities/update-default-capacity/${a}/`,
          s,
          { headers: { Authorization: `Token ${i}` } }
        )
        .then((c) => {
          c.status === 201 && (n(A(!1)), l(!1), r(), n(me()));
        })
        .catch((c) => {
          n(A(!1)), n(Ne(!0));
        });
  },
  tr = (s, a) => (l) => {
    const r = sessionStorage.getItem('token');
    l(A(!0)),
      z
        .delete(
          `http://3.88.215.84/api/capacities/delete-default-capacity/${s}/`,
          { headers: { Authorization: `Token ${r}` } }
        )
        .then((n) => {
          n.status === 204 && (l(A(!1)), a(!1), l(me()));
        })
        .catch(() => {
          l(A(!1)), l(Ht(!0));
        });
  },
  sr = (s, a, l) => (r) => {
    r(A(!0)),
      z
        .post('http://3.88.215.84/api/capacities/new-group', s)
        .then((n) => {
          n.status === 200 && (r(A(!1)), a(!1), l(), r(de()));
        })
        .catch(() => {
          r(A(!1));
        });
  },
  ar = (s, a, l) => (r) => {
    r(A(!0)),
      z
        .put(`http://3.88.215.84/api/capacities/update-group/${a}/`, s)
        .then((n) => {
          n.status === 200 && (r(A(!1)), l(!1), r(de()), r(me()));
        })
        .catch(() => {
          r(A(!1)), r(Ne(!0));
        });
  },
  lr = (s, a) => (l) => {
    l(A(!0)),
      z
        .delete(`http://3.88.215.84/api/capacities/delete-group/${s}/`)
        .then((r) => {
          r.status === 204 && (l(A(!1)), a(!1), l(de()), l(me()));
        })
        .catch(() => {
          l(A(!1)), l(Ne(!0));
        });
  },
  rr = ({ setGroupOptionsPanel: s, groupOptionsPanel: a }) => {
    const l = _(),
      r = v(we),
      n = ne(),
      i = o.exports.useRef(null),
      c = o.exports.useRef(null);
    o.exports.useEffect(() => {
      l(tt()), l(Mt());
    }, []),
      o.exports.useEffect(() => {
        m(r);
      }, [r]);
    const [d, m] = o.exports.useState([]),
      [u, p] = o.exports.useState(!1),
      [h, f] = o.exports.useState(!1);
    o.exports.useEffect(() => {
      m(r);
    }, []),
      o.exports.useEffect(() => {
        u && setTimeout(() => p(!1), 5e3);
      }, [u]);
    const x = (g) => {
        g.preventDefault();
        const E = d.filter((M) => (M == null ? void 0 : M.isChecked) === !0);
        if (E.length > 0) {
          if (h) l(Ot('all'));
          else {
            let M = [];
            E.forEach((N) => {
              M.push(N.group);
            }),
              l(Ot(M));
          }
          n('/mp-pro/planning/plannings/orders/');
        } else p(!0);
      },
      b = (g) => {
        const { name: E, checked: M } = g.target;
        if (E === 'allSelect') {
          let N = d.map((S) => $(y({}, S), { isChecked: M }));
          m(N), f(!0);
        } else {
          let N = d.map((S) =>
            S.group === E ? $(y({}, S), { isChecked: M }) : S
          );
          m(N), f(!1);
        }
      };
    return (
      o.exports.useEffect(() => {
        const g = ({ keyCode: E }) => {
          !a || E !== 27 || s(!1);
        };
        return (
          document.addEventListener('keydown', g),
          () => document.removeEventListener('keydown', g)
        );
      }),
      t(C, {
        children: [
          e(D, {
            className:
              'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
            show: a,
            enter: 'transition ease-out duration-200',
            enterStart: 'opacity-0',
            enterEnd: 'opacity-100',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            'aria-hidden': 'true',
          }),
          e(D, {
            id: 'panelG',
            className:
              'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
            role: 'dialog',
            'aria-modal': 'true',
            show: a,
            enter: 'transition ease-in-out duration-500',
            enterStart: 'opacity-0 translate-x-4',
            enterEnd: 'opacity-100 translate-x-0',
            leave: 'transition ease-in-out duration-500',
            leaveStart: 'opacity-100 translate-x-0',
            leaveEnd: 'opacity-0 translate-x-4',
            children: t('div', {
              ref: c,
              className: `w-[480px] bg-white absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
                a ? 'translate-x-' : 'translate-x-full'
              }`,
              children: [
                t('section', {
                  className: 'mb-10 flex items-center justify-between',
                  children: [
                    e('h2', {
                      className:
                        'mt-4 ml-5 w-full font-bold text-black text-2xl',
                      children: 'Selecciona los grupos a planear',
                    }),
                    e('button', {
                      ref: i,
                      onClick: () => s(!1),
                      className: ' top-1 right-0 mt-4 mr-3 group p-1',
                      children: e('svg', {
                        className:
                          'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                        viewBox: '0 0 16 16',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: e('path', {
                          d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                        }),
                      }),
                    }),
                  ],
                }),
                e('section', {
                  children: t('form', {
                    children: [
                      t('div', {
                        className:
                          'h-[470px] 2xl:h-[460px] overflow-y-auto mb-8 ml-5',
                        children: [
                          e('div', {
                            className: 'mt-5 mb-7',
                            children: t('label', {
                              className: 'flex items-center',
                              children: [
                                e('input', {
                                  type: 'checkbox',
                                  className: 'form-checkbox',
                                  name: 'allSelect',
                                  checked:
                                    d.filter(
                                      (g) =>
                                        (g == null ? void 0 : g.isChecked) !==
                                        !0
                                    ).length < 1,
                                  onChange: b,
                                }),
                                e('span', {
                                  className:
                                    'text-base font-medium ml-2 text-black',
                                  children: 'Seleccionar todos',
                                }),
                              ],
                            }),
                          }),
                          e('div', {
                            children: d.map((g, E) =>
                              e(
                                'div',
                                {
                                  className: 'mb-7',
                                  children: t('label', {
                                    className: 'flex items-center',
                                    children: [
                                      e('input', {
                                        type: 'checkbox',
                                        className: 'form-checkbox',
                                        name: g == null ? void 0 : g.group,
                                        checked:
                                          (g == null ? void 0 : g.isChecked) ||
                                          !1,
                                        onChange: b,
                                      }),
                                      e('span', {
                                        className:
                                          'text-base font-medium ml-2 text-black',
                                        children: g.group,
                                      }),
                                    ],
                                  }),
                                },
                                E
                              )
                            ),
                          }),
                        ],
                      }),
                      e('div', {
                        className: 'flex justify-center',
                        children: t('button', {
                          onClick: x,
                          className:
                            'w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary ',
                          children: [
                            e('span', {
                              className: 'my-auto',
                              children: 'Continuar',
                            }),
                            e('img', {
                              src: k.arrowRight,
                              alt: 'icon-arrow-right',
                              className: 'my-auto ml-3 text-white',
                            }),
                          ],
                        }),
                      }),
                      u &&
                        e('div', {
                          className: 'flex justify-center mt-1',
                          children: e('span', {
                            className: 'font-semibold text-red-600',
                            children:
                              'Debe elegir al menos un grupo antes de continuar',
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  };
function nr() {
  const [s, a] = o.exports.useState(!1);
  return e(te, {
    icon: k.planningIcon,
    nameRoute: 'Planeaci\xF3n',
    nameSubRoute: 'Planeaciones',
    children: t('div', {
      className: 'px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto',
      children: [
        e('div', {
          className: 'lg:px-8 mt-5',
          children: e(Ll, { setGroupOptionsPanel: a, groupOptionsPanel: s }),
        }),
        e('section', {
          children: e(rr, { setGroupOptionsPanel: a, groupOptionsPanel: s }),
        }),
      ],
    }),
  });
}
const Gt = ({
  setTransactionPanelOpen: s,
  setGroupPanelOpen: a,
  capabilitiesList: l,
  setCapabilities: r,
  setCapabilitiesEditOpen: n,
  setOpenModalCapDelete: i,
}) => {
  const c = _(),
    [d, m] = o.exports.useState({ state: !1, asc: !1 }),
    [u, p] = o.exports.useState({ state: !1, asc: !1 });
  return (
    o.exports.useEffect(() => {
      d.state && (d.asc ? Et(l, r, 'capabilities') : Ct(l, r, 'capabilities'));
    }, [d]),
    o.exports.useEffect(() => {
      u.state && (u.asc ? Je(l, r, 'capabilities') : Ye(l, r, 'capabilities'));
    }, [u]),
    e(C, {
      children: t('table', {
        className: 'table-auto w-full table',
        children: [
          e('thead', {
            className:
              'text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50',
            children: t('tr', {
              children: [
                e('th', {
                  className: 'px-2 first:pl-5 w-1/4 cursor-pointer',
                  onClick: () => {
                    m({ state: !0, asc: !d.asc });
                  },
                  children: t('div', {
                    className: 'flex items-center space-x-10',
                    children: [
                      e('div', {
                        className: 'font-semibold text-left',
                        children: 'L\xEDnea de productos',
                      }),
                      e('img', {
                        src: d.asc ? k.doubleDown : k.doubleUp,
                        alt: 'Flecha abajo',
                        className: 'w-5',
                      }),
                    ],
                  }),
                }),
                e('th', {
                  className:
                    'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ',
                  children: e('p', {
                    className: 'font-semibold text-left',
                    children: 'Tipo',
                  }),
                }),
                e('th', {
                  className:
                    'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer ',
                  onClick: () => {
                    p({ state: !0, asc: !u.asc });
                  },
                  children: t('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                      e('p', {
                        className: 'font-semibold text-left',
                        children: 'Grupo',
                      }),
                      e('img', {
                        src: u.asc ? k.doubleDown : k.doubleUp,
                        alt: 'Flecha abajo',
                        className: 'w-5',
                      }),
                    ],
                  }),
                }),
                e('th', {
                  className: 'px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                  children: e('p', {
                    className: 'font-semibold text-center',
                    children: 'Pz/Hora',
                  }),
                }),
                e('th', {
                  className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                  children: e('p', {
                    className: 'font-semibold text-center',
                    children: 'Turno/Dia',
                  }),
                }),
                e('th', {
                  className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                  children: e('p', {
                    className: 'font-semibold text-center',
                    children: 'Pz/Dia',
                  }),
                }),
                e('th', {
                  className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                  children: e('p', {
                    className: 'font-semibold text-center',
                    children: 'Comentario',
                  }),
                }),
                e('th', {
                  className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                  children: e('p', {
                    className: 'font-semibold text-center w-5',
                  }),
                }),
              ],
            }),
          }),
          e('tbody', {
            className: 'text-sm divide-y divide-slate-200',
            children: l.map((h, f) =>
              t(
                'tr',
                {
                  children: [
                    e('td', {
                      onClick: (x) => {
                        x.stopPropagation(), s(!0);
                      },
                      className:
                        'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 cursor-pointer',
                      children: t('div', {
                        className: 'flex items-center space-x-10',
                        children: [
                          e('p', {
                            className:
                              'text-textTableItem font-medium  capitalize',
                            children: h.product_line.name,
                          }),
                          e('img', { src: k.downArrow, alt: 'Flecha abajo' }),
                        ],
                      }),
                    }),
                    e('td', {
                      className:
                        'px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                      children: e('p', {
                        className: 'text-left font-semibold',
                        children: h.type_name,
                      }),
                    }),
                    t('td', {
                      onClick: (x) => {
                        x.stopPropagation(), a(!0);
                      },
                      className:
                        'px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer flex space-x-3',
                      children: [
                        e('p', {
                          className: 'text-left font-semibold',
                          children: h.product_line.group.name,
                        }),
                        e('img', { src: k.downArrow, alt: 'Flecha abajo' }),
                      ],
                    }),
                    e('td', {
                      className:
                        'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                      children: e('p', {
                        className: 'text-center',
                        children: h.piece_per_hour,
                      }),
                    }),
                    e('td', {
                      className:
                        'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                      children: e('p', {
                        className: 'text-center',
                        children: h.shift_per_day,
                      }),
                    }),
                    e('td', {
                      className:
                        'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                      children: e('p', {
                        className: 'text-center',
                        children: h.piece_per_day,
                      }),
                    }),
                    e('td', {
                      className:
                        'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                      children: e('p', {
                        className: 'text-center',
                        children: h.comments,
                      }),
                    }),
                    e('td', {
                      className: 'last:pr-1 py-3 whitespace-nowrap',
                      children: t('figure', {
                        className: 'flex justify-start items-center space-x-3',
                        children: [
                          e('button', {
                            onClick: (x) => {
                              x.stopPropagation(), c(jl(h)), n(!0);
                            },
                            children: e('img', {
                              src: k.pencilIcon,
                              alt: 'Lapiz',
                            }),
                          }),
                          e('button', {
                            onClick: (x) => {
                              x.stopPropagation(), c(Rl(h)), i(!0);
                            },
                            children: e('img', {
                              src: k.garbageIcon,
                              alt: 'Basura',
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                f
              )
            ),
          }),
        ],
      }),
    })
  );
};
function ir({ capabilitiesPanelOpen: s, setCapabilitiesOpenPanel: a }) {
  const l = _(),
    r = v(he),
    n = v(Pe),
    i = v(Vt),
    {
      register: c,
      handleSubmit: d,
      reset: m,
      formState: { errors: u },
    } = U();
  o.exports.useEffect(() => {
    i &&
      setTimeout(() => {
        l(Ie());
      }, 4e3);
  }, [i]);
  const p = (f) => {
      l(Xl(f, a, m));
    },
    h = () =>
      r
        ? e('div', { children: e(Y, { loading: 'Creando', update: !0 }) })
        : e('button', {
            className:
              'btn bg-primary hover:bg-secondary hover:text-primary text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]',
            children: e('span', {
              className: 'ml-3 align-baseline',
              children: 'Crear capacidad',
            }),
          });
  return (
    o.exports.useEffect(() => {
      let f = {};
      (f.p_line_id = ''),
        (f.type_name = ''),
        (f.piece_per_hour = ''),
        (f.shift_per_day = ''),
        (f.piece_per_day = ''),
        (f.comments = ''),
        m(y({}, f));
    }, [m, s]),
    e(C, {
      children: t('form', {
        onSubmit: d(p),
        children: [
          t('section', {
            className: 'grid gap-5 md:grid-cols-1',
            children: [
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'p_line_id',
                    children: 'Lista de producto y grupo',
                  }),
                  t(
                    'select',
                    $(
                      y(
                        { className: 'form-select w-full' },
                        c('p_line_id', {
                          required: {
                            value: !0,
                            message: 'El campo es requerido',
                          },
                        })
                      ),
                      {
                        children: [
                          e('option', { value: '', children: 'Selecciona...' }),
                          n.map((f, x) =>
                            t(
                              'option',
                              {
                                value: f.id,
                                children: [f.name, ' - ', f.group.name],
                              },
                              x
                            )
                          ),
                        ],
                      }
                    )
                  ),
                  u.p_line_id &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: u.p_line_id.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'type_name',
                    children: 'Tipo',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      c('type_name', {
                        required: {
                          value: !1,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[a-zA-Z0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  u.type_name &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: u.type_name.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'piece_per_hour',
                    children: 'Piezas por hora',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      c('piece_per_hour', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  u.piece_per_hour &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: u.piece_per_hour.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'shift_per_day',
                    children: 'Turno por dia',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      c('shift_per_day', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  u.shift_per_day &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: u.shift_per_day.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'piece_per_day',
                    children: 'Piezas por dia',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      c('piece_per_day', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  u.piece_per_day &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: u.piece_per_day.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'comments',
                    children: 'Comentarios',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      c('comments', {
                        required: {
                          value: !1,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[a-zA-Z0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  u.comments &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: u.comments.message,
                    }),
                ],
              }),
            ],
          }),
          e('div', { className: 'mt-10 flex justify-center', children: h() }),
          i &&
            e('span', {
              className: 'text-red-500 text-sm font-bold',
              children: 'Ocurri\xF3 un error. Por favor vuelva a intentarlo.',
            }),
        ],
      }),
    })
  );
}
const or = ({ capabilitiesPanelOpen: s, setCapabilitiesOpenPanel: a }) =>
  e('div', {
    className: 'bg-white',
    children: e('div', {
      className: 'mt-6 px-3',
      children: e('section', {
        children: e(ir, {
          capabilitiesPanelOpen: s,
          setCapabilitiesOpenPanel: a,
        }),
      }),
    }),
  });
function cr({ capabilitiesPanelOpen: s, setCapabilitiesOpenPanel: a }) {
  const l = o.exports.useRef(null),
    r = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const n = ({ keyCode: i }) => {
        !s || i !== 27 || a(!1);
      };
      return (
        document.addEventListener('keydown', n),
        () => document.removeEventListener('keydown', n)
      );
    }, []),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: s,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: 'panelG',
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: s,
          enter: 'transition ease-in-out duration-500',
          enterStart: 'opacity-0 translate-x-4',
          enterEnd: 'opacity-100 translate-x-0',
          leave: 'transition ease-in-out duration-500',
          leaveStart: 'opacity-100 translate-x-0',
          leaveEnd: 'opacity-0 translate-x-4',
          children: e('div', {
            ref: r,
            className: ` absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
              s ? 'translate-x-' : 'translate-x-full'
            }`,
            children: t('div', {
              className:
                'top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 w-full sm:w-[390px] h-screen',
              children: [
                t('div', {
                  className: 'flex justify-between',
                  children: [
                    e('h2', {
                      className: 'mt-4 ml-4 w-48 font-bold text-black text-2xl',
                      children: 'Crear capacidad',
                    }),
                    e('button', {
                      ref: l,
                      onClick: () => a(!1),
                      className: ' top-0 right-0 mt-4 mr-3 group p-1',
                      children: e('svg', {
                        className:
                          'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                        viewBox: '0 0 16 16',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: e('path', {
                          d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                        }),
                      }),
                    }),
                  ],
                }),
                e('section', {
                  className: 'mb-5',
                  children: e(or, {
                    setCapabilitiesOpenPanel: a,
                    capabilitiesPanelOpen: s,
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function dr({ capabilitiesEditOpen: s, setCapabilitiesEditOpen: a }) {
  const l = _(),
    r = v(Gl),
    n = v(he),
    i = v(Pe),
    c = v(et),
    {
      register: d,
      handleSubmit: m,
      reset: u,
      formState: { errors: p },
    } = U(),
    h = (x) => {
      (x.piece_per_hour = x.piece_per_hour.toString()),
        (x.shift_per_day = x.shift_per_day.toString()),
        (x.piece_per_day = x.piece_per_day.toString()),
        l(er(x, r == null ? void 0 : r.id, a, u));
    },
    f = () =>
      n
        ? e('div', { children: e(Y, { loading: 'Modificando', update: !0 }) })
        : e('button', {
            className:
              'btn bg-primary hover:bg-secondary hover:text-primary text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]',
            children: e('span', {
              className: 'ml-3 align-baseline',
              children: 'Editar capacidad',
            }),
          });
  return (
    o.exports.useEffect(() => {
      var b;
      let x = {};
      (x.p_line_id =
        (b = r == null ? void 0 : r.product_line) == null ? void 0 : b.id),
        (x.type_name = r == null ? void 0 : r.type_name),
        (x.piece_per_hour = r.piece_per_hour),
        (x.shift_per_day = r.shift_per_day),
        (x.piece_per_day = r.piece_per_day),
        (x.comments = r == null ? void 0 : r.comments),
        u(y({}, x));
    }, [u, s]),
    e(C, {
      children: t('form', {
        onSubmit: m(h),
        children: [
          t('section', {
            className: 'grid gap-5 md:grid-cols-1',
            children: [
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'p_line_id',
                    children: 'Lista de producto y grupo',
                  }),
                  t(
                    'select',
                    $(
                      y(
                        { className: 'form-select w-full' },
                        d('p_line_id', {
                          required: {
                            value: !0,
                            message: 'El campo es requerido',
                          },
                        })
                      ),
                      {
                        children: [
                          e('option', { value: '', children: 'Selecciona...' }),
                          i.map((x, b) =>
                            t(
                              'option',
                              {
                                value: x.id,
                                children: [x.name, ' - ', x.group.name],
                              },
                              b
                            )
                          ),
                        ],
                      }
                    )
                  ),
                  p.p_line_id &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: p.p_line_id.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'type_name',
                    children: 'Tipo',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      d('type_name', {
                        required: {
                          value: !1,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[a-zA-Z0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  p.type_name &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: p.type_name.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'piece_per_hour',
                    children: 'Piezas por hora',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      d('piece_per_hour', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  p.piece_per_hour &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: p.piece_per_hour.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'shift_per_day',
                    children: 'Turno por dia',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      d('shift_per_day', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  p.shift_per_day &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: p.shift_per_day.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'piece_per_day',
                    children: 'Piezas por dia',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      d('piece_per_day', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  p.piece_per_day &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: p.piece_per_day.message,
                    }),
                ],
              }),
              t('div', {
                children: [
                  e('label', {
                    className: 'block text-sm font-semibold mb-1',
                    htmlFor: 'comments',
                    children: 'Comentarios',
                  }),
                  e(
                    'input',
                    y(
                      {
                        className: 'form-input w-full',
                        type: 'text',
                        autoComplete: 'off',
                      },
                      d('comments', {
                        required: {
                          value: !1,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[a-zA-Z0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  p.comments &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: p.comments.message,
                    }),
                ],
              }),
            ],
          }),
          e('div', { className: 'mt-10 flex justify-center', children: f() }),
          c &&
            e('span', {
              className: 'text-red-500 text-sm font-bold',
              children: 'Ocurri\xF3 un error. Por favor vuelva a intentarlo.',
            }),
        ],
      }),
    })
  );
}
const mr = ({ capabilitiesEditOpen: s, setCapabilitiesEditOpen: a }) =>
  e('div', {
    className: 'bg-white',
    children: e('div', {
      className: 'mt-6 px-3',
      children: e('section', {
        children: e(dr, {
          capabilitiesEditOpen: s,
          setCapabilitiesEditOpen: a,
        }),
      }),
    }),
  });
function pr({ capabilitiesEditOpen: s, setCapabilitiesEditOpen: a }) {
  const l = _(),
    r = o.exports.useRef(null),
    n = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const i = ({ keyCode: c }) => {
        !s || c !== 27 || a(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }, []),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: s,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: 'panelG',
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: s,
          enter: 'transition ease-in-out duration-500',
          enterStart: 'opacity-0 translate-x-4',
          enterEnd: 'opacity-100 translate-x-0',
          leave: 'transition ease-in-out duration-500',
          leaveStart: 'opacity-100 translate-x-0',
          leaveEnd: 'opacity-0 translate-x-4',
          children: e('div', {
            ref: n,
            className: `absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
              s ? 'translate-x-' : 'translate-x-full'
            }`,
            children: t('div', {
              className:
                'top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 w-full sm:w-[390px] h-screen',
              children: [
                t('div', {
                  className: 'flex justify-between',
                  children: [
                    e('h2', {
                      className: 'mt-4 ml-4 font-bold text-black text-2xl',
                      children: 'Editar capacidad',
                    }),
                    e('button', {
                      ref: r,
                      onClick: () => {
                        a(!1), l(jt());
                      },
                      className: ' top-0 right-0 mt-4 mr-3 group p-1',
                      children: e('svg', {
                        className:
                          'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                        viewBox: '0 0 16 16',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: e('path', {
                          d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                        }),
                      }),
                    }),
                  ],
                }),
                e('section', {
                  className: 'mb-5',
                  children: e(mr, {
                    setCapabilitiesEditOpen: a,
                    capabilitiesEditOpen: s,
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
const ur = ({
  setTransactionPanelOpen: s,
  setGroupPanelOpen: a,
  setCapabilitiesOpenPanel: l,
  capabilitiesPanelOpen: r,
  capabilitiesEditOpen: n,
  setCapabilitiesEditOpen: i,
  setOpenModalCapDelete: c,
}) => {
  const d = _(),
    [m, u] = o.exports.useState(v($t)),
    [p, h] = o.exports.useState(!1),
    f = v($t),
    x = v(Xe),
    b = v(Tl),
    g = (E) => {
      if (E.target.value.length > 0) {
        h(!0);
        let M = m.filter((N) => {
          if (
            N.product_line.name
              .toString()
              .toLowerCase()
              .includes(E.target.value.toLowerCase()) ||
            N.product_line.group.name
              .toString()
              .toLowerCase()
              .includes(E.target.value.toLowerCase())
          )
            return N;
        });
        d(Qe(M));
      } else d(Fe()), h(!1);
    };
  return (
    o.exports.useEffect(() => {
      d(Ql());
    }, [b]),
    o.exports.useEffect(() => {
      u(f);
    }, [f, b]),
    t('div', {
      className: 'bg-white',
      children: [
        t('section', {
          children: [
            e(cr, { setCapabilitiesOpenPanel: l, capabilitiesPanelOpen: r }),
            e(pr, { capabilitiesEditOpen: n, setCapabilitiesEditOpen: i }),
          ],
        }),
        t('div', {
          className: 'mt-6',
          children: [
            t('section', {
              className: 'flex justify-between mb-5',
              children: [
                e('div', {
                  className: 'mb-4 sm:mb-0',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Capacidades',
                  }),
                }),
                t('div', {
                  className: 'flex space-x-3',
                  children: [
                    e('input', {
                      className: 'form-input w-72',
                      placeholder: 'Buscar...',
                      type: 'search',
                      onChange: g,
                    }),
                    t('button', {
                      onClick: (E) => {
                        E.stopPropagation(), l(!0);
                      },
                      type: 'button',
                      className: 'btn bg-primary text-white w-54 space-x-2',
                      children: [
                        e('svg', {
                          className: 'w-4 h-4 fill-current opacity-50 shrink-0',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
                          }),
                        }),
                        e('span', { children: 'Crear capacidad' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (m == null ? void 0 : m.length) > 0
              ? e(C, {
                  children: e('div', {
                    className:
                      'overflow-x-auto rounded-xl border border-slate-300 h-[550px]',
                    children: p
                      ? p && x.length > 0
                        ? e(Gt, {
                            setTransactionPanelOpen: s,
                            setGroupPanelOpen: a,
                            capabilitiesList: x,
                            setCapabilities: u,
                            setCapabilitiesEditOpen: i,
                            setOpenModalCapDelete: c,
                          })
                        : e('section', {
                            className: 'justify-center items-center flex h-96',
                            children: e('h2', {
                              className: 'font-semibold text-2xl',
                              children: 'Sin datos que mostrar',
                            }),
                          })
                      : e(Gt, {
                          setTransactionPanelOpen: s,
                          setGroupPanelOpen: a,
                          capabilitiesList: m,
                          setCapabilities: u,
                          setCapabilitiesEditOpen: i,
                          setOpenModalCapDelete: c,
                        }),
                  }),
                })
              : e(C, { children: e(Be, {}) }),
          ],
        }),
      ],
    })
  );
};
function Ut({ totalPosts: s, postsPerPage: a, setCurrentPage: l }) {
  let r = [];
  for (let n = 1; n <= Math.ceil(s / a); n++) r.push(n);
  return e('div', {
    className: 'flex justify-center',
    children: e('nav', {
      className: 'flex space-x-2',
      role: 'navigation',
      'aria-label': 'Navigation',
      children: r.map((n, i) =>
        e('section', {
          className: 'text-sm font-bold  shadow-sm',
          children: e('div', {
            children: e(
              'button',
              {
                onClick: () => l(n),
                className:
                  ' items-center justify-center rounded leading-5 px-3.5 py-2 bg-white border border-slate-50 text-primary hover:bg-primary hover:text-white',
                children: n,
              },
              i
            ),
          }),
        })
      ),
    }),
  });
}
function Zt({
  buttonName: s,
  group: a,
  setOpenModalPL: l,
  setOpenModalGroup: r,
}) {
  return e('tr', {
    className: 'relative h-9',
    children: e('td', {
      className: 'absolute left-0 right-0 m-auto',
      children: t('div', {
        className: 'flex justify-center items-center h-8',
        children: [
          e('img', { className: '', src: k.plus, alt: 'Mas' }),
          e('button', {
            className: 'text-primary font-semibold',
            onClick: (n) => {
              n.stopPropagation(), a ? r(!0) : l(!0);
            },
            children: s,
          }),
        ],
      }),
    }),
  });
}
function Wt({
  setOpenModalPL: s,
  currentPost: a,
  productLines: l,
  setPl: r,
  setOpenModalPLEdit: n,
  setOpenModalPLDelete: i,
}) {
  const c = _(),
    [d, m] = o.exports.useState({ state: !1, asc: !1 }),
    [u, p] = o.exports.useState({ state: !1, asc: !1 });
  return (
    o.exports.useEffect(() => {
      d.state && (d.asc ? Et(l, r, 'productLine') : Ct(l, r, 'productLine'));
    }, [d]),
    o.exports.useEffect(() => {
      u.state && (u.asc ? Je(l, r, 'productLine') : Ye(l, r, 'productLine'));
    }, [u]),
    e(C, {
      children: t('table', {
        className: 'table-auto w-full',
        children: [
          e('thead', {
            className:
              'text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50',
            children: t('tr', {
              children: [
                e('th', {
                  className:
                    'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer w-2/4',
                  onClick: () => {
                    m({ state: !0, asc: !d.asc });
                  },
                  children: t('div', {
                    className: 'flex items-center space-x-3',
                    children: [
                      e('div', {
                        className: 'font-semibold text-left',
                        children: 'L\xEDnea de productos',
                      }),
                      e('img', {
                        src: d.asc ? k.doubleDown : k.doubleUp,
                        alt: 'Flecha abajo',
                        className: 'w-5',
                      }),
                    ],
                  }),
                }),
                e('th', {
                  className:
                    'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer w-1/4',
                  onClick: () => {
                    p({ state: !0, asc: !u.asc });
                  },
                  children: t('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                      e('p', {
                        className: 'font-semibold text-left',
                        children: 'Grupo',
                      }),
                      e('img', {
                        src: u.asc ? k.doubleDown : k.doubleUp,
                        alt: 'Flecha abajo',
                        className: 'w-5',
                      }),
                    ],
                  }),
                }),
                e('th', { className: 'py-3 w-2/4' }),
              ],
            }),
          }),
          t('tbody', {
            className: 'text-sm divide-y divide-slate-200',
            children: [
              e(Zt, {
                buttonName: 'Nueva l\xEDnea de producto',
                setOpenModalPL: s,
                group: !1,
              }),
              a.map((h, f) =>
                t(
                  'tr',
                  {
                    className: 'text-textTableItem',
                    children: [
                      e('td', {
                        className:
                          'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                        children: e('div', {
                          className: 'flex items-center',
                          children: e('p', {
                            className: 'capitalize',
                            children: h.name,
                          }),
                        }),
                      }),
                      e('td', {
                        className:
                          'px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                        children: e('p', {
                          className: 'text-left font-bold ',
                          children: h.group.name,
                        }),
                      }),
                      e('td', {
                        className:
                          'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                        children: t('figure', {
                          className: 'flex justify-end items-center space-x-3',
                          children: [
                            e('button', {
                              onClick: (x) => {
                                x.stopPropagation(), c(Pl(h)), n(!0);
                              },
                              children: e('img', {
                                src: k.pencilIcon,
                                alt: 'Lapiz',
                              }),
                            }),
                            e('button', {
                              onClick: (x) => {
                                x.stopPropagation(), c(Al(h)), i(!0);
                              },
                              children: e('img', {
                                src: k.garbageIcon,
                                alt: 'Basura',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  f
                )
              ),
            ],
          }),
        ],
      }),
    })
  );
}
const hr = ({
  setOpenModalPL: s,
  setOpenModalPLEdit: a,
  setOpenModalPLDelete: l,
}) => {
  const [r, n] = o.exports.useState(v(Pe)),
    [i, c] = o.exports.useState(!1),
    d = _(),
    m = v(Pe),
    u = v(qt),
    p = v(Xe);
  return (
    o.exports.useEffect(() => {
      d(Wl());
    }, [u]),
    o.exports.useEffect(() => {
      n(m);
    }, [m]),
    e('div', {
      className: 'bg-white',
      children: t('div', {
        className: 'mt-6 px-3',
        children: [
          e('div', {
            className: 'mb-3',
            children: e('input', {
              className: 'form-input w-full',
              placeholder: 'Buscar...',
              type: 'search',
              onChange: (f) => {
                if (f.target.value.length > 0) {
                  c(!0);
                  let x = r.filter((b) => {
                    if (
                      b.name
                        .toString()
                        .toLowerCase()
                        .includes(f.target.value.toLowerCase()) ||
                      b.group.name
                        .toString()
                        .toLowerCase()
                        .includes(f.target.value.toLowerCase())
                    )
                      return b;
                  });
                  d(Qe(x));
                } else d(Fe()), c(!1);
              },
            }),
          }),
          e('div', {
            className:
              'overflow-x-auto rounded-xl border border-slate-300 h-[500px]',
            children: i
              ? i && p.length > 0
                ? e(Wt, {
                    setOpenModalPL: s,
                    currentPost: p,
                    productLines: m,
                    setPl: n,
                    setOpenModalPLEdit: a,
                    setOpenModalPLDelete: l,
                  })
                : e('section', {
                    className: 'justify-center items-center flex h-96',
                    children: e('h2', {
                      className: 'font-semibold text-2xl',
                      children: 'Sin datos que mostrar',
                    }),
                  })
              : e(Wt, {
                  setOpenModalPL: s,
                  currentPost: r,
                  productLines: m,
                  setPl: n,
                  setOpenModalPLEdit: a,
                  setOpenModalPLDelete: l,
                }),
          }),
        ],
      }),
    })
  );
};
function xr({
  transactionPanelOpen: s,
  setTransactionPanelOpen: a,
  setOpenModalPL: l,
  setOpenModalPLEdit: r,
  setOpenModalPLDelete: n,
}) {
  const i = o.exports.useRef(null),
    c = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const d = ({ keyCode: m }) => {
        !s || m !== 27 || a(!1);
      };
      return (
        document.addEventListener('keydown', d),
        () => document.removeEventListener('keydown', d)
      );
    }),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: s,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: 'panelPL',
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: s,
          enter: 'transition ease-in-out duration-500',
          enterStart: 'opacity-0 translate-x-4',
          enterEnd: 'opacity-100 translate-x-0',
          leave: 'transition ease-in-out duration-500',
          leaveStart: 'opacity-100 translate-x-0',
          leaveEnd: 'opacity-0 translate-x-4',
          children: e('div', {
            ref: c,
            className: `absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
              s ? 'translate-x-' : 'translate-x-full'
            }`,
            children: t('div', {
              className:
                'top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 w-full sm:w-[390px] h-screen',
              children: [
                t('section', {
                  className: 'flex justify-between',
                  children: [
                    e('h2', {
                      className:
                        'mt-4 ml-4 w-full font-bold text-black text-2xl',
                      children: 'Linea de productos',
                    }),
                    e('button', {
                      ref: i,
                      onClick: () => a(!1),
                      className: 'mr-3 mt-4',
                      children: e('svg', {
                        className:
                          'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                        viewBox: '0 0 16 16',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: e('path', {
                          d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                        }),
                      }),
                    }),
                  ],
                }),
                e(hr, {
                  setOpenModalPL: l,
                  setOpenModalPLEdit: r,
                  setOpenModalPLDelete: n,
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function Yt({
  setOpenModalGroup: s,
  setOpenModalGroupEdit: a,
  setOpenModalGroupDelete: l,
  groups: r,
  setGroup: n,
}) {
  const i = _(),
    [c, d] = o.exports.useState({ state: !1, asc: !1 });
  return (
    o.exports.useEffect(() => {
      c.state && (c.asc ? Je(r, n, 'groups') : Ye(r, n, 'groups'));
    }, [c]),
    t('table', {
      className: 'table-fixed w-full table',
      children: [
        e('thead', {
          className:
            'text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50',
          children: t('tr', {
            children: [
              e('th', {
                className: 'px-5 py-3 w-2/4 cursor-pointer',
                onClick: () => {
                  d({ state: !0, asc: !c.asc });
                },
                children: t('div', {
                  className: 'flex items-center space-x-2',
                  children: [
                    e('div', {
                      className: 'font-semibold text-left',
                      children: 'Grupo',
                    }),
                    e('img', {
                      src: c.asc ? k.doubleDown : k.doubleUp,
                      alt: 'Flecha abajo',
                      className: 'w-5',
                    }),
                  ],
                }),
              }),
              e('th', {
                className: 'px-5 py-3 w-full',
                children: e('p', {
                  className: 'font-semibold text-left',
                  children: 'Comentarios',
                }),
              }),
              e('th', { className: 'py-3 w-2/4' }),
            ],
          }),
        }),
        t('tbody', {
          className: 'text-sm divide-y divide-slate-200',
          children: [
            e(Zt, {
              buttonName: 'Nuevo Grupo',
              group: !0,
              setOpenModalGroup: s,
            }),
            r.map((m, u) =>
              t(
                'tr',
                {
                  className: 'text-textTableItem',
                  children: [
                    e('td', {
                      className:
                        'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                      children: e('div', {
                        className: 'flex items-center',
                        children: e('p', {
                          className:
                            'text-textTableItem capitalize font-semibold',
                          children: m.group,
                        }),
                      }),
                    }),
                    e('td', {
                      className:
                        'px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                      children: e('p', {
                        className: 'text-left truncate ',
                        children: m.comments,
                      }),
                    }),
                    e('td', {
                      className:
                        'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                      children: t('figure', {
                        className: 'flex justify-end items-center space-x-3',
                        children: [
                          e('button', {
                            onClick: (p) => {
                              p.stopPropagation(), i(Fl(m)), a(!0);
                            },
                            children: e('img', {
                              src: k.pencilIcon,
                              alt: 'Lapiz',
                            }),
                          }),
                          e('button', {
                            onClick: (p) => {
                              p.stopPropagation(), i(Il(m)), l(!0);
                            },
                            children: e('img', {
                              src: k.garbageIcon,
                              alt: 'Basura',
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                u
              )
            ),
          ],
        }),
      ],
    })
  );
}
const fr = ({
  setOpenModalGroup: s,
  setOpenModalGroupEdit: a,
  setOpenModalGroupDelete: l,
}) => {
  const [r, n] = o.exports.useState(v(we)),
    [i, c] = o.exports.useState(!1),
    d = _(),
    m = v(Xe),
    u = v(we),
    p = v(qt);
  return (
    o.exports.useEffect(() => {
      d(tt());
    }, [p]),
    o.exports.useEffect(() => {
      n(u);
    }, [u]),
    e('div', {
      className: 'bg-white',
      children: t('div', {
        className: 'mt-6 px-3',
        children: [
          e('div', {
            className: 'mb-3',
            children: e('input', {
              className: 'form-input w-full',
              placeholder: 'Buscar...',
              type: 'search',
              onChange: (f) => {
                if (f.target.value.length > 0) {
                  c(!0);
                  let x = r.filter((b) => {
                    if (
                      b.group
                        .toString()
                        .toLowerCase()
                        .includes(f.target.value.toLowerCase())
                    )
                      return b;
                  });
                  d(Qe(x));
                } else d(Fe()), c(!1);
              },
            }),
          }),
          e('div', {
            className:
              'overflow-x-auto rounded-xl border border-slate-300 h-[500px]',
            children: i
              ? i && m.length > 0
                ? e(Yt, {
                    setOpenModalGroup: s,
                    setOpenModalGroupEdit: a,
                    setOpenModalGroupDelete: l,
                    groups: m,
                    setGroup: n,
                  })
                : e('section', {
                    className: 'justify-center items-center flex h-96',
                    children: e('h2', {
                      className: 'font-semibold text-2xl',
                      children: 'Sin datos que mostrar',
                    }),
                  })
              : e(Yt, {
                  setOpenModalGroup: s,
                  setOpenModalGroupEdit: a,
                  setOpenModalGroupDelete: l,
                  groups: r,
                  setGroup: n,
                }),
          }),
        ],
      }),
    })
  );
};
function br({
  setGroupPanelOpen: s,
  groupPanelOpen: a,
  setOpenModalGroup: l,
  setOpenModalGroupEdit: r,
  setOpenModalGroupDelete: n,
}) {
  const i = o.exports.useRef(null),
    c = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const d = ({ keyCode: m }) => {
        !a || m !== 27 || s(!1);
      };
      return (
        document.addEventListener('keydown', d),
        () => document.removeEventListener('keydown', d)
      );
    }),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: a,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: 'panelG',
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: a,
          enter: 'transition ease-in-out duration-500',
          enterStart: 'opacity-0 translate-x-4',
          enterEnd: 'opacity-100 translate-x-0',
          leave: 'transition ease-in-out duration-500',
          leaveStart: 'opacity-100 translate-x-0',
          leaveEnd: 'opacity-0 translate-x-4',
          children: e('div', {
            ref: c,
            className: `absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
              a ? 'translate-x-' : 'translate-x-full'
            }`,
            children: t('div', {
              className:
                'top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 w-full sm:w-[390px] h-screen',
              children: [
                e('h2', {
                  className: 'mt-4 ml-4 w-full font-bold text-black text-2xl',
                  children: 'Grupos',
                }),
                e('button', {
                  ref: i,
                  onClick: () => s(!1),
                  className: 'absolute top-0 right-0 mt-4 mr-3 group p-1',
                  children: e('svg', {
                    className:
                      'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                    viewBox: '0 0 16 16',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: e('path', {
                      d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                    }),
                  }),
                }),
                e(fr, {
                  setOpenModalGroup: l,
                  setOpenModalGroupEdit: r,
                  setOpenModalGroupDelete: n,
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function ie({ children: s, id: a, title: l, modalOpen: r, setModalOpen: n }) {
  const i = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const c = ({ target: d }) => {
        !r || i.current.contains(d) || n(!1);
      };
      return (
        document.addEventListener('click', c),
        () => document.removeEventListener('click', c)
      );
    }),
    o.exports.useEffect(() => {
      const c = ({ keyCode: d }) => {
        !r || d !== 27 || n(!1);
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
      );
    }),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: r,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: a,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: r,
          enter: 'transition ease-in-out duration-200',
          enterStart: 'opacity-0 translate-y-4',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-in-out duration-200',
          leaveStart: 'opacity-100 translate-y-0',
          leaveEnd: 'opacity-0 translate-y-4',
          children: t('div', {
            ref: i,
            className:
              'bg-white rounded shadow-lg overflow-auto max-w-lg w-[480px] h-[395px] max-h-full',
            children: [
              e('div', {
                className:
                  'pt-[25px] pr-[7px] pb-[20px] pl-[24px] border-slate-200',
                children: t('div', {
                  className: 'flex justify-between items-center',
                  children: [
                    e('div', {
                      className: 'font-bold text-slate-800 text-[24px]',
                      children: l,
                    }),
                    t('button', {
                      className: 'text-slate-400 hover:text-slate-500 mt-3',
                      onClick: (c) => {
                        c.stopPropagation(), n(!1);
                      },
                      children: [
                        e('div', { className: 'sr-only', children: 'Close' }),
                        e('svg', {
                          width: '32',
                          height: '32',
                          viewBox: '0 0 24 24',
                          children: e('path', {
                            d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s,
            ],
          }),
        }),
      ],
    })
  );
}
function vr({ openModalPL: s, setOpenModalPL: a }) {
  const {
      register: l,
      handleSubmit: r,
      reset: n,
      formState: { errors: i },
    } = U(),
    c = _(),
    d = v(we),
    m = v(he);
  o.exports.useEffect(() => {
    let p = {};
    (p.product_line = ''), (p.group_id = ''), n(y({}, p));
  }, [n, s]);
  const u = (p) => {
    c(Yl(p, a, n));
  };
  return (
    o.exports.useEffect(() => {
      c(tt());
    }, [c]),
    e(ie, {
      id: 'basic-modal',
      modalOpen: s,
      setModalOpen: () => a(!1),
      title: 'Agregar l\xEDnea de producto',
      children: e('div', {
        className: 'px-5 pt-4 pb-1',
        children: e('div', {
          className: 'text-sm',
          children: t('form', {
            onSubmit: r(u),
            children: [
              t('div', {
                className: 'space-y-2 -mt-3 mb-5',
                children: [
                  e('label', {
                    htmlFor: 'product_line',
                    className: 'text-[14px] font-semibold leading-[17px]',
                    children: 'Nombre de la l\xEDnea de producto',
                  }),
                  e(
                    'input',
                    y(
                      {
                        type: 'text',
                        className: 'w-full form-input h-12 border-slate-100',
                      },
                      l('product_line', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                      })
                    )
                  ),
                  i.product_line &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: i.product_line.message,
                    }),
                ],
              }),
              t('div', {
                className: 'space-y-2 mb-6',
                children: [
                  e('label', {
                    htmlFor: 'group_id',
                    className: 'text-[14px] font-semibold leading-[17px]',
                    children: 'Grupo asignado',
                  }),
                  t(
                    'select',
                    $(
                      y(
                        {
                          className: 'w-full form-select h-12 border-slate-100',
                        },
                        l('group_id', {
                          required: {
                            value: !0,
                            message: 'El campo es requerido',
                          },
                        })
                      ),
                      {
                        children: [
                          e('option', { value: '', children: 'Selecciona...' }),
                          d.map((p) =>
                            e(
                              'option',
                              { value: p.id, children: p.group },
                              p.id
                            )
                          ),
                        ],
                      }
                    )
                  ),
                  i.group_id &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: i.group_id.message,
                    }),
                ],
              }),
              m
                ? e(Y, { loading: 'Enviando' })
                : e('button', {
                    type: 'submit',
                    className:
                      'bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold',
                    children: 'Guardar l\xEDnea de producto',
                  }),
            ],
          }),
        }),
      }),
    })
  );
}
function gr({ openModalGroup: s, setOpenModalGroup: a }) {
  const {
      register: l,
      handleSubmit: r,
      reset: n,
      formState: { errors: i },
    } = U(),
    c = _(),
    d = v(he);
  return e(ie, {
    id: 'basic-modal',
    modalOpen: s,
    setModalOpen: () => a(!1),
    title: 'Agregar grupo',
    children: e('div', {
      className: 'px-5 pt-1 pb-1',
      children: e('div', {
        className: 'text-sm',
        children: t('form', {
          onSubmit: r((u) => {
            c(sr(u, a, n));
          }),
          children: [
            t('div', {
              className: 'space-y-2 mb-5',
              children: [
                e('label', {
                  htmlFor: 'group',
                  className:
                    'text-[14px] font-semibold leading-[17px] font-work',
                  children: 'Nombre del grupo',
                }),
                e(
                  'input',
                  y(
                    { type: 'text', className: 'w-full form-input h-12' },
                    l('group', {
                      required: { value: !0, message: 'El campo es requerido' },
                    })
                  )
                ),
                i.group &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: i.group.message,
                  }),
              ],
            }),
            t('div', {
              className: 'space-y-2 mb-5',
              children: [
                e('label', {
                  htmlFor: 'comments',
                  className: 'text-[14px] font-semibold leading-[17px]',
                  children: 'Descripci\xF3n',
                }),
                e(
                  'input',
                  y(
                    { type: 'text', className: 'w-full form-input h-12' },
                    l('comments', {
                      required: { value: !1, message: 'El campo es requerido' },
                    })
                  )
                ),
                i.comments &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: i.comments.message,
                  }),
              ],
            }),
            d
              ? e(Y, { loading: 'Creando', createGroup: !0 })
              : e('button', {
                  type: 'submit',
                  className:
                    'bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold',
                  children: 'Guardar grupo',
                }),
          ],
        }),
      }),
    }),
  });
}
function Nr({ openModalGroupEdit: s, setOpenModalGroupEdit: a }) {
  const {
      register: l,
      handleSubmit: r,
      reset: n,
      formState: { errors: i },
    } = U(),
    c = _(),
    d = v(he),
    m = v(Hl),
    u = v(et);
  return (
    o.exports.useEffect(() => {
      u &&
        setTimeout(() => {
          c(Ie());
        }, 4e3);
    }, [u]),
    o.exports.useEffect(() => {
      let h = {};
      (h.group = m == null ? void 0 : m.group),
        (h.comments = m == null ? void 0 : m.comments),
        n(y({}, h));
    }, [n, s]),
    e(ie, {
      id: 'basic-modal',
      modalOpen: s,
      setModalOpen: () => {
        c(Ke()), a(!1);
      },
      title: 'Editar grupo',
      children: s
        ? m &&
          e('div', {
            className: 'px-5 pt-1 pb-1',
            children: e('div', {
              className: 'text-sm',
              children: t('form', {
                onSubmit: r((h) => {
                  c(ar(h, m.id, a));
                }),
                children: [
                  t('div', {
                    className: 'space-y-2 mb-5',
                    children: [
                      e('label', {
                        htmlFor: 'group',
                        className:
                          'text-[14px] font-semibold leading-[17px] font-work',
                        children: 'Nombre del grupo',
                      }),
                      e(
                        'input',
                        y(
                          { type: 'text', className: 'w-full form-input h-12' },
                          l('group', {
                            required: {
                              value: !0,
                              message: 'El campo es requerido',
                            },
                          })
                        )
                      ),
                      i.group &&
                        e('span', {
                          className: 'text-red-500 text-sm',
                          children: i.group.message,
                        }),
                    ],
                  }),
                  t('div', {
                    className: 'space-y-2 mb-5',
                    children: [
                      e('label', {
                        htmlFor: 'comments',
                        className: 'text-[14px] font-semibold leading-[17px]',
                        children: 'Descripci\xF3n',
                      }),
                      e(
                        'input',
                        y(
                          { type: 'text', className: 'w-full form-input h-12' },
                          l('comments', {
                            required: {
                              value: !1,
                              message: 'El campo es requerido',
                            },
                          })
                        )
                      ),
                      i.comments &&
                        e('span', {
                          className: 'text-red-500 text-sm',
                          children: i.comments.message,
                        }),
                    ],
                  }),
                  d
                    ? e(Y, { loading: 'Creando', createGroup: !0 })
                    : e('button', {
                        type: 'submit',
                        className:
                          'bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold',
                        children: 'Editar grupo',
                      }),
                  u &&
                    e('span', {
                      className: 'text-red-500 text-sm font-bold',
                      children:
                        'Ocurri\xF3 un error. Por favor vuelva a intentarlo.',
                    }),
                ],
              }),
            }),
          })
        : e('p', { children: 'Cargando' }),
    })
  );
}
const wr = {
    datelist: [],
    loading: null,
    reload: !1,
    dateChosen: null,
    dateState: !1,
  },
  xe = G('REVERT_DATECHOSEN'),
  Jt = oe({
    initialState: wr,
    name: 'calendar',
    extraReducers: (s) => {
      s.addCase(xe, (a, l) => {
        (a.dateChosen = null), (a.dateState = !1);
      });
    },
    reducers: {
      setCalendar: (s, a) => {
        s.datelist = a.payload;
      },
      setLoading: (s, a) => {
        s.loading = a.payload;
      },
      setReload: (s, a) => {
        s.reload = !s.reload;
      },
      setDateChosen: (s, a) => {
        (s.dateChosen = a.payload), (s.dateState = !0);
      },
    },
  }),
  {
    setCalendar: yr,
    setLoading: fe,
    setReload: st,
    setDateChosen: kr,
  } = Jt.actions,
  Sr = (s) => s.calendar.datelist,
  Kt = (s) => s.calendar.loading,
  Cr = (s) => s.calendar.reload,
  Er = (s) => s.calendar.dateChosen,
  Lr = (s) => s.calendar.dateState;
var zr = Jt.reducer;
const Mr = () => (s) => {
    z.get('http://3.88.215.84/api/calendar/list-all-non-working-day')
      .then((a) => s(yr(a.data)))
      .catch((a) => console.log(a));
  },
  _r = (s, a, l) => (r) => {
    r(fe(!0));
    const n = sessionStorage.getItem('id');
    z.post(`http://3.88.215.84/api/calendar/register-non-working-day/${n}/`, s)
      .then((i) => {
        i.status === 201 && (r(fe(!1)), l(), r(st()), a(!1), r(xe()));
      })
      .catch((i) => {
        console.log(i), r(fe(!1));
      });
  },
  Dr = (s, a) => (l) => {
    z.delete(`http://3.88.215.84/api/calendar/delete-non-working-day/${s}/`)
      .then((r) => {
        r.status === 204 && (l(st()), a(!1));
      })
      .catch((r) => console.log(r));
  },
  Or = (s, a, l) => (r) => {
    r(fe(!0));
    const n = sessionStorage.getItem('idEvent');
    z.put(`http://3.88.215.84/api/calendar/update-non-working-day/${n}/`, s)
      .then((i) => {
        i.status === 200 && (r(st()), r(fe(!1)), a(!1)), l(!1);
      })
      .catch(() => r(fe(!1)));
  },
  Br = (s, a) => (l) => {
    l(kr(s)), a(!0);
  };
function le({ children: s, id: a, modalOpen: l, setModalOpen: r }) {
  const n = _(),
    i = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const c = ({ target: d }) => {
        !l || i.current.contains(d) || (r(!1), n(xe()));
      };
      return (
        document.addEventListener('click', c),
        () => document.removeEventListener('click', c)
      );
    }),
    o.exports.useEffect(() => {
      const c = ({ keyCode: d }) => {
        !l || d !== 27 || (r(!1), n(xe()));
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
      );
    }),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: l,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: a,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: l,
          enter: 'transition ease-in-out duration-200',
          enterStart: 'opacity-0 translate-y-4',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-in-out duration-200',
          leaveStart: 'opacity-100 translate-y-0',
          leaveEnd: 'opacity-0 translate-y-4',
          children: e('div', {
            ref: i,
            className:
              'bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full',
            children: s,
          }),
        }),
      ],
    })
  );
}
const Fr = {
    user: null,
    userIsOk: !1,
    userFail: null,
    userLoading: !1,
    roles: [],
    allUser: [],
    reload: !1,
    search: [],
  },
  at = G('REVERT_ALL'),
  Qt = G('REVERT_SEARCH'),
  Xt = oe({
    initialState: Fr,
    name: 'users',
    extraReducers: (s) => {
      s.addCase(at, (a, l) => {
        (a.user = null),
          (a.userIsOk = !1),
          (a.userFail = null),
          (a.userLoading = !1);
      }),
        s.addCase(Qt, (a, l) => {
          a.search = [];
        });
    },
    reducers: {
      setUser: (s, a) => {
        s.user = a.payload;
      },
      setUserIsOk: (s, a) => {
        s.userIsOk = a.payload;
      },
      setUserLoading: (s, a) => {
        s.userLoading = a.payload;
      },
      setUserFail: (s, a) => {
        s.userFail = a.payload;
      },
      setRoles: (s, a) => {
        s.roles = a.payload;
      },
      setAllUser: (s, a) => {
        s.allUser = a.payload;
      },
      setReload: (s, a) => {
        s.reload = !s.reload;
      },
      setSearch: (s, a) => {
        s.search = a.payload;
      },
    },
  }),
  {
    setUser: Ir,
    setUserIsOk: es,
    setUserLoading: be,
    setUserFail: ts,
    setRoles: Pr,
    setAllUser: Ar,
    setReload: lt,
    setSearch: jr,
  } = Xt.actions,
  Rr = (s) => s.users.userIsOk,
  ss = (s) => s.users.userLoading,
  Tr = (s) => s.users.userFail,
  as = (s) => s.users.roles,
  ls = (s) => s.users.allUser,
  Hr = (s) => s.users.reload,
  $r = (s) => s.users.search;
var qr = Xt.reducer;
const Vr = (s, a) => (l) => {
    const r = sessionStorage.getItem('token');
    l(be(!0)),
      z
        .post('http://3.88.215.84/api/auth/register/', s, {
          headers: { Authorization: `Token ${r}` },
        })
        .then((n) => {
          l(be(!1)),
            n.data.status_code === 201 &&
              (l(Ir(n.data)), l(ts(null)), l(es(!0)), l(lt()), a(!1));
        })
        .catch((n) => {
          Se(n, l, ts), l(es(!1)), l(be(!1)), setTimeout(() => l(at()), 3e3);
        });
  },
  rs = () => (s) => {
    z.get('http://3.88.215.84/api/auth/list-permissions')
      .then((a) => {
        s(Pr(a.data));
      })
      .catch((a) => console.log(a));
  },
  Gr = () => (s) => {
    z.get('http://3.88.215.84/api/auth/list-users')
      .then((a) => {
        s(Ar(a.data));
      })
      .catch((a) => console.log(a));
  },
  Ur = () => (s) => {
    const a = sessionStorage.getItem('token'),
      l = JSON.parse(sessionStorage.getItem('userDelete')).id;
    z.delete(`http://3.88.215.84/api/auth/delete-user/${l}`, {
      headers: { Authorization: `Token ${a}` },
    })
      .then(() => {
        s(lt()), sessionStorage.removeItem('userDelete');
      })
      .catch((r) => console.log(r));
  },
  Zr = (s, a) => (l) => {
    l(be(!0));
    const r = JSON.parse(sessionStorage.getItem('userEdit')).id;
    z.put(`http://3.88.215.84/api/auth/update-user-data/${r}`, s)
      .then(() => {
        l(be(!1)), a(!1), l(lt()), sessionStorage.removeItem('userEdit');
      })
      .catch(() => l(be(!1)));
  };
function Wr({ setOpenModalGroupDelete: s, openModalGroupDelete: a }) {
  var n;
  const l = _(),
    r = v($l);
  return e(le, {
    id: 'success-modal',
    modalOpen: a,
    setModalOpen: s,
    children: e('div', {
      className: 'p-5 flex space-x-4',
      children: t('div', {
        children: [
          t('div', {
            className: 'mb-2 flex justify-between items-center',
            children: [
              t('div', {
                className: 'text-lg font-bold text-slate-800 w-72',
                children: [
                  '\xBFEst\xE1s seguro de eliminar el grupo ',
                  (n = r == null ? void 0 : r.group) == null
                    ? void 0
                    : n.toUpperCase(),
                  ' ?',
                ],
              }),
              e('button', {
                onClick: (i) => {
                  i.stopPropagation(), l(Pt()), s(!1);
                },
                children: e('svg', {
                  className:
                    'w-5 h-5 fill-black group-hover:fill-slate-600 pointer-events-none',
                  viewBox: '0 0 16 16',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: e('path', {
                    d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                  }),
                }),
              }),
            ],
          }),
          e('div', {
            className: 'text-sm mb-10',
            children: e('div', {
              className: 'space-y-2',
              children: e('p', {
                children:
                  'Esta acci\xF3n no se puede revertir, est\xE1s a punto de eliminar el grupo y todos sus datos asociados.',
              }),
            }),
          }),
          e('div', {
            className: 'flex justify-center items-center',
            children: e('button', {
              onClick: (i) => {
                i.stopPropagation(), l(lr(r == null ? void 0 : r.id, s));
              },
              className: 'btn-lg bg-red-500 font-semibold text-white w-full',
              children: 'Eliminar Grupo',
            }),
          }),
        ],
      }),
    }),
  });
}
function Yr({ openModalPLEdit: s, setOpenModalPLEdit: a }) {
  const {
      register: l,
      handleSubmit: r,
      reset: n,
      formState: { errors: i },
    } = U(),
    c = _(),
    d = v(he),
    m = v(we),
    u = v(ql),
    p = v(et);
  return (
    o.exports.useEffect(() => {
      p &&
        setTimeout(() => {
          c(Ie());
        }, 4e3);
    }, [p]),
    o.exports.useEffect(() => {
      var x;
      let f = {};
      (f.product_line = u == null ? void 0 : u.name),
        (f.group_id =
          (x = u == null ? void 0 : u.group) == null ? void 0 : x.id),
        n(y({}, f));
    }, [n, s]),
    e(ie, {
      id: 'basic-modal',
      modalOpen: s,
      setModalOpen: () => {
        c(Ke()), a(!1);
      },
      title: 'Editar l\xEDnea de producto',
      children: s
        ? u &&
          e('div', {
            className: 'px-5 pt-4 pb-1',
            children: e('div', {
              className: 'text-sm',
              children: t('form', {
                onSubmit: r((f) => {
                  c(Jl(f, u.id, a));
                }),
                children: [
                  t('div', {
                    className: 'space-y-2 -mt-3 mb-5',
                    children: [
                      e('label', {
                        htmlFor: 'product_line',
                        className: 'text-[14px] font-semibold leading-[17px]',
                        children: 'Nombre de la l\xEDnea de producto',
                      }),
                      e(
                        'input',
                        y(
                          {
                            type: 'text',
                            className:
                              'w-full form-input h-12 border-slate-100',
                          },
                          l('product_line', {
                            required: {
                              value: !0,
                              message: 'El campo es requerido',
                            },
                          })
                        )
                      ),
                      i.product_line &&
                        e('span', {
                          className: 'text-red-500 text-sm',
                          children: i.product_line.message,
                        }),
                    ],
                  }),
                  t('div', {
                    className: 'space-y-2 mb-6',
                    children: [
                      e('label', {
                        htmlFor: 'group_id',
                        className: 'text-[14px] font-semibold leading-[17px]',
                        children: 'Grupo asignado',
                      }),
                      t(
                        'select',
                        $(
                          y(
                            {
                              className:
                                'w-full form-select h-12 border-slate-100',
                            },
                            l('group_id', {
                              required: {
                                value: !0,
                                message: 'El campo es requerido',
                              },
                            })
                          ),
                          {
                            children: [
                              e('option', {
                                value: '',
                                children: 'Selecciona...',
                              }),
                              m.map((f) =>
                                e(
                                  'option',
                                  { value: f.id, children: f.group },
                                  f.id
                                )
                              ),
                            ],
                          }
                        )
                      ),
                      i.group_id &&
                        e('span', {
                          className: 'text-red-500 text-sm',
                          children: i.group_id.message,
                        }),
                    ],
                  }),
                  d
                    ? e(Y, { loading: 'Enviando' })
                    : e('button', {
                        type: 'submit',
                        className:
                          'bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold',
                        children: 'Editar l\xEDnea de producto',
                      }),
                  p &&
                    e('span', {
                      className: 'text-red-500 text-sm font-bold',
                      children:
                        'Ocurri\xF3 un error. Por favor vuelva a intentarlo.',
                    }),
                ],
              }),
            }),
          })
        : e('p', { children: 'Cargando...' }),
    })
  );
}
function Jr({ setOpenModalPLDelete: s, openModalPLDelete: a }) {
  var n;
  const l = _(),
    r = v(Vl);
  return e(le, {
    id: 'success-modal',
    modalOpen: a,
    setModalOpen: s,
    children: e('div', {
      className: 'p-5 flex space-x-4',
      children: t('div', {
        children: [
          t('div', {
            className: 'mb-2 flex justify-between items-center',
            children: [
              t('div', {
                className: 'text-lg font-bold text-slate-800 w-72',
                children: [
                  '\xBFEst\xE1s seguro de eliminar la l\xEDnea de producto',
                  ' ',
                  (n = r == null ? void 0 : r.name) == null
                    ? void 0
                    : n.toUpperCase(),
                  '?',
                ],
              }),
              e('button', {
                onClick: (i) => {
                  i.stopPropagation(), l(At()), s(!1);
                },
                children: e('svg', {
                  className:
                    'w-5 h-5 fill-black group-hover:fill-slate-600 pointer-events-none',
                  viewBox: '0 0 16 16',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: e('path', {
                    d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                  }),
                }),
              }),
            ],
          }),
          e('div', {
            className: 'text-sm mb-10',
            children: e('div', {
              className: 'space-y-2',
              children: e('p', {
                children:
                  'Esta acci\xF3n no se puede revertir, est\xE1s a punto de eliminar la l\xEDnea de producto y todos sus datos asociados.',
              }),
            }),
          }),
          e('div', {
            className: 'flex justify-center items-center',
            children: e('button', {
              onClick: (i) => {
                i.stopPropagation(), l(Kl(r == null ? void 0 : r.id, s));
              },
              className: 'btn-lg bg-red-500 font-semibold text-white w-full',
              children: 'Eliminar l\xEDnea de producto',
            }),
          }),
        ],
      }),
    }),
  });
}
function Kr({ openModalCapDelete: s, setOpenModalCapDelete: a }) {
  var i, c, d, m, u;
  const l = _(),
    r = v(Ul),
    n = v(Vt);
  return e(le, {
    id: 'success-modal',
    modalOpen: s,
    setModalOpen: a,
    children: e('div', {
      className: 'p-5 flex space-x-4',
      children: t('div', {
        children: [
          t('div', {
            className: 'mb-2 flex justify-between items-center',
            children: [
              t('div', {
                className: 'text-lg font-bold text-slate-800 w-72',
                children: [
                  '\xBFEst\xE1s seguro de eliminar la capacidad',
                  ' ',
                  (c =
                    (i = r == null ? void 0 : r.product_line) == null
                      ? void 0
                      : i.name) == null
                    ? void 0
                    : c.toUpperCase(),
                  ' -',
                  ' ',
                  (u =
                    (m =
                      (d = r == null ? void 0 : r.product_line) == null
                        ? void 0
                        : d.group) == null
                      ? void 0
                      : m.name) == null
                    ? void 0
                    : u.toUpperCase(),
                  '?',
                ],
              }),
              e('button', {
                onClick: (p) => {
                  p.stopPropagation(), l(Rt()), a(!1);
                },
                children: e('svg', {
                  className:
                    'w-5 h-5 fill-black group-hover:fill-slate-600 pointer-events-none',
                  viewBox: '0 0 16 16',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: e('path', {
                    d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                  }),
                }),
              }),
            ],
          }),
          e('div', {
            className: 'text-sm mb-10',
            children: e('div', {
              className: 'space-y-2',
              children: e('p', {
                children:
                  'Esta acci\xF3n no se puede revertir, est\xE1s a punto de eliminar la capacidad y todos sus datos asociados.',
              }),
            }),
          }),
          e('div', {
            className: 'flex justify-center items-center',
            children: e('button', {
              onClick: (p) => {
                p.stopPropagation(), l(tr(r == null ? void 0 : r.id, a));
              },
              className: 'btn-lg bg-red-500 font-semibold text-white w-full',
              children: 'Eliminar Capacidad',
            }),
          }),
          n &&
            e('span', {
              className: 'text-red-500 text-sm font-bold',
              children: 'Ocurri\xF3 un error. Por favor vuelva a intentarlo.',
            }),
        ],
      }),
    }),
  });
}
function Qr() {
  const [s, a] = o.exports.useState(!1),
    [l, r] = o.exports.useState(!1),
    [n, i] = o.exports.useState(!1),
    [c, d] = o.exports.useState(!1),
    [m, u] = o.exports.useState(!1),
    [p, h] = o.exports.useState(!1),
    [f, x] = o.exports.useState(!1),
    [b, g] = o.exports.useState(!1),
    [E, M] = o.exports.useState(!1),
    [N, S] = o.exports.useState(!1),
    [L, O] = o.exports.useState(!1);
  return t(C, {
    children: [
      e(te, {
        icon: k.planningIcon,
        nameRoute: 'Planeaci\xF3n',
        nameSubRoute: 'Capacidades',
        children: t('div', {
          className: 'px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-6',
          children: [
            e('div', {
              className:
                'sm:flex sm:justify-between sm:items-center mb-4 md:mb-2',
            }),
            e('div', {
              className: 'lg:px-8',
              children: e(ur, {
                setTransactionPanelOpen: a,
                setGroupPanelOpen: r,
                capabilitiesPanelOpen: E,
                setCapabilitiesOpenPanel: M,
                capabilitiesEditOpen: N,
                setCapabilitiesEditOpen: S,
                setOpenModalCapDelete: O,
              }),
            }),
            e('div', { className: 'mt-4', children: e(Ut, {}) }),
            e(xr, {
              transactionPanelOpen: s,
              setTransactionPanelOpen: a,
              setOpenModalPL: i,
              setOpenModalPLEdit: x,
              setOpenModalPLDelete: g,
            }),
            e(br, {
              groupPanelOpen: l,
              setGroupPanelOpen: r,
              setOpenModalGroup: d,
              setOpenModalGroupEdit: u,
              setOpenModalGroupDelete: h,
            }),
          ],
        }),
      }),
      e(vr, { openModalPL: n, setOpenModalPL: i }),
      e(gr, { openModalGroup: c, setOpenModalGroup: d }),
      e(Nr, { openModalGroupEdit: m, setOpenModalGroupEdit: u }),
      e(Wr, { openModalGroupDelete: p, setOpenModalGroupDelete: h }),
      e(Yr, { openModalPLEdit: f, setOpenModalPLEdit: x }),
      e(Jr, { openModalPLDelete: b, setOpenModalPLDelete: g }),
      e(Kr, { openModalCapDelete: L, setOpenModalCapDelete: O }),
    ],
  });
}
function ns(i) {
  var c = i,
    { setDropdownOpen: s, dropdownOpen: a, children: l, align: r } = c,
    n = ke(c, ['setDropdownOpen', 'dropdownOpen', 'children', 'align']);
  const d = o.exports.useRef(null),
    m = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const u = ({ target: p }) => {
        !m.current ||
          !a ||
          m.current.contains(p) ||
          d.current.contains(p) ||
          s(!1);
      };
      return (
        document.addEventListener('click', u),
        () => document.removeEventListener('click', u)
      );
    }),
    o.exports.useEffect(() => {
      const u = ({ keyCode: p }) => {
        !a || p !== 27 || s(!1);
      };
      return (
        document.addEventListener('keydown', u),
        () => document.removeEventListener('keydown', u)
      );
    }),
    t(
      'div',
      $(y({}, n), {
        children: [
          t('button', {
            ref: d,
            className: `text-white hover:text-slate-200 rounded-full -mt-2 ${
              a && ' text-white'
            }`,
            'aria-haspopup': 'true',
            onClick: () => s(!a),
            'aria-expanded': a,
            children: [
              e('span', { className: 'sr-only', children: 'Menu' }),
              t('svg', {
                className: 'w-8 h-8 fill-current',
                viewBox: '0 0 32 32',
                children: [
                  e('circle', { cx: '16', cy: '16', r: '2' }),
                  e('circle', { cx: '10', cy: '16', r: '2' }),
                  e('circle', { cx: '22', cy: '16', r: '2' }),
                ],
              }),
            ],
          }),
          e(D, {
            show: a,
            tag: 'div',
            className: ` origin-top-right z-10 absolute top-full w-28 bg-white h-14 border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden -mt-4 ${
              r === 'right' ? 'right-0' : 'left-0'
            }`,
            enter: 'transition ease-out duration-200 transform',
            enterStart: 'opacity-0 -translate-y-2',
            enterEnd: 'opacity-100 translate-y-0',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            children: e('ul', {
              ref: m,
              onFocus: () => s(!0),
              onBlur: () => s(!1),
              children: l,
            }),
          }),
        ],
      })
    )
  );
}
function Ae({ children: s, id: a, title: l, modalOpen: r, setModalOpen: n }) {
  const i = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const c = ({ keyCode: d }) => {
        !r || d !== 27 || n(!1);
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
      );
    }),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: r,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: a,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: r,
          enter: 'transition ease-in-out duration-200',
          enterStart: 'opacity-0 translate-y-4',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-in-out duration-200',
          leaveStart: 'opacity-100 translate-y-0',
          leaveEnd: 'opacity-0 translate-y-4',
          children: e('div', {
            ref: i,
            className:
              'bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full',
            children: t('div', {
              className: 'p-5',
              children: [
                e('div', {
                  className: 'mb-2',
                  children: e('div', {
                    className: 'flex justify-between items-center',
                    children: e('div', {
                      className: 'text-lg font-semibold text-slate-800',
                      children: l,
                    }),
                  }),
                }),
                s,
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function Xr({
  setOpenModalCalendarEdit: s,
  openModalCalendarEdit: a,
  setReloadEvent: l,
  reloadEvent: r,
}) {
  const n = _(),
    i = sessionStorage.getItem('description'),
    c = v(Kt),
    {
      register: d,
      handleSubmit: m,
      reset: u,
      formState: { errors: p },
    } = U(),
    h = (f) => {
      const x = { description: f.description };
      n(Or(x, u, s));
    };
  return (
    o.exports.useEffect(() => {
      let f = {};
      (f.description = `${i}`), u(y({}, f));
    }, [u, i, r]),
    t(Ae, {
      id: 'success-modal',
      modalOpen: a,
      setModalOpen: s,
      children: [
        e('div', {
          className: 'pt-[20px] pr-[7px] pb-[20px] pl-[24px] border-slate-200',
          children: t('div', {
            className: 'flex justify-between items-center',
            children: [
              e('div', {
                className: 'font-bold text-slate-800 text-[24px]',
                children: 'Editar dia no laborable',
              }),
              t('button', {
                className: 'text-slate-400 hover:text-slate-500 mt-3',
                onClick: (f) => {
                  f.stopPropagation(), s(!1);
                },
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    width: '32',
                    height: '32',
                    viewBox: '0 0 24 24',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        e('div', {
          className: 'px-5 pt-4 pb-1',
          children: e('div', {
            className: 'text-sm',
            children: t('form', {
              onSubmit: m(h),
              children: [
                t('div', {
                  className: 'space-y-2 mb-5',
                  children: [
                    e('label', {
                      htmlFor: 'description',
                      className:
                        'text-[14px] font-semibold leading-[17px] text-black',
                      children: 'Descripci\xF3n',
                    }),
                    e(
                      'input',
                      y(
                        { type: 'text', className: 'w-full form-input' },
                        d('description', {
                          required: {
                            value: !0,
                            message: 'El campo es requerido',
                          },
                          pattern: {
                            value: /[a-zA-Z]/,
                            message: 'El formato no es correcto',
                          },
                        })
                      )
                    ),
                    p.description &&
                      e('span', {
                        className: 'text-red-500 text-sm',
                        children: p.description.message,
                      }),
                  ],
                }),
                e('div', {
                  children: c
                    ? e('div', {
                        className: 'mb-10  mt-20',
                        children: e(Y, {
                          loading: 'Enviando',
                          calendarEdit: !0,
                        }),
                      })
                    : e('button', {
                        type: 'submit',
                        className:
                          'bg-primary text-white w-full h-[51px] rounded mt-14 mb-6 font-semibold',
                        children: 'Editar dia no laborable',
                      }),
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function en({
  eventId: s,
  setOpenModalCalendarEdit: a,
  openModalCalendarEdit: l,
  description: r,
  setReloadEvent: n,
  reloadEvent: i,
}) {
  const [c, d] = o.exports.useState(!1),
    m = _();
  return t('div', {
    children: [
      t(ns, {
        dropdownOpen: c,
        setDropdownOpen: d,
        children: [
          e('li', {
            children: e('button', {
              onClick: (u) => {
                u.stopPropagation(),
                  a(!0),
                  sessionStorage.setItem('idEvent', s),
                  sessionStorage.setItem('description', r);
              },
              className:
                'font-medium text-sm text-slate-600 hover:text-slate-800 flex py-0 px-3',
              children: 'Editar',
            }),
          }),
          e('li', {
            children: e('button', {
              onClick: () => {
                m(Dr(s, d));
              },
              className:
                'font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3',
              children: 'Eliminar',
            }),
          }),
        ],
      }),
      e(Xr, {
        description: r,
        setOpenModalCalendarEdit: a,
        openModalCalendarEdit: l,
        setReloadEvent: n,
        reloadEvent: i,
      }),
    ],
  });
}
function tn({ setOpenModalCalendar: s }) {
  const [a, l] = o.exports.useState(!1),
    [r, n] = o.exports.useState(null),
    i = _(),
    c = v(Sr),
    d = v(Cr),
    m = new Date(),
    u = [
      'Enero',
      'Febrero',
      'Marzo',
      'April',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    p = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ];
  o.exports.useEffect(() => {
    i(Mr());
  }, [d]);
  const h = [],
    f = () => {
      c.forEach((F) => {
        const T = F.date.split('-'),
          q = T[2],
          ee = T[1],
          re = T[0];
        let pe = {
          eventStart: new Date(
            re,
            q == 1 ? ee - 1 : new Date(F.date).getMonth(),
            q
          ),
          eventName: `${F.description}`,
          eventColor: 'sky',
          id: `${F.id}`,
        };
        h.push(pe);
      });
    };
  o.exports.useEffect(() => {
    f();
  }, [d]),
    f();
  const [x, b] = o.exports.useState(m.getMonth()),
    [g, E] = o.exports.useState(m.getFullYear()),
    [M, N] = o.exports.useState([]),
    [S, L] = o.exports.useState([]),
    [O, R] = o.exports.useState([]),
    I = (F) => {
      const T = new Date(g, x, F);
      return m.toDateString() === T.toDateString();
    },
    j = (F) =>
      h.filter(
        (T) =>
          new Date(T.eventStart).toDateString() ===
          new Date(g, x, F).toDateString()
      ),
    B = (F) => {
      switch (F) {
        case 'sky':
          return 'text-white bg-green-600';
        case 'indigo':
          return 'text-white bg-primary';
        case 'yellow':
          return 'text-white bg-amber-500';
        case 'emerald':
          return 'text-white bg-emerald-500';
        case 'red':
          return 'text-white bg-rose-400';
        default:
          return '';
      }
    },
    w = () => {
      const F = new Date(g, x + 1, 0).getDate(),
        T = new Date(g, x).getDay();
      let q = [];
      for (let J = 1; J <= T; J++) q.push(J);
      const ee = new Date(g, x + 1, 0).getDay();
      let re = [];
      for (let J = 1; J < 7 - ee; J++) re.push(J);
      let pe = [];
      for (let J = 1; J <= F; J++) pe.push(J);
      L(q), R(re), N(pe);
    };
  o.exports.useEffect(() => {
    w();
  }, [c, x]);
  const Ve = (F, T) => {
      if (j(F).filter((ee) => ee).length > 0) i(xe());
      else {
        const ee = `${g}-${x + 1}-${F}`;
        i(Br(ee, s));
      }
    },
    Ge = () => {
      x === 11 ? (E(g + 1), b(0), w()) : (b(x + 1), w());
    },
    Ue = () => {
      x === 0 ? (E(g - 1), b(11), w()) : (b(x - 1), w());
    };
  return e('div', {
    className: 'flex  overflow-hidden',
    children: e('main', {
      children: t('div', {
        className: ' w-full max-w-9xl mx-auto',
        children: [
          t('div', {
            className: 'sm:flex sm:justify-between sm:items-center mb-4',
            children: [
              e('div', {
                className: 'mb-4 sm:mb-0',
                children: e('h1', {
                  className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                  children: e('span', { children: `${u[x]} ${g}` }),
                }),
              }),
              t('div', {
                className:
                  'grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2',
                children: [
                  t('button', {
                    className:
                      'btn px-2.5 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600 disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed',
                    disabled: !1,
                    onClick: () => {
                      Ue();
                    },
                    children: [
                      e('span', {
                        className: 'sr-only',
                        children: 'Previous month',
                      }),
                      e('wbr', {}),
                      e('svg', {
                        className: 'h-4 w-4 fill-current',
                        viewBox: '0 0 16 16',
                        children: e('path', {
                          d: 'M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z',
                        }),
                      }),
                    ],
                  }),
                  t('button', {
                    className:
                      'btn px-2.5 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600 disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed',
                    disabled: !1,
                    onClick: () => {
                      Ge();
                    },
                    children: [
                      e('span', {
                        className: 'sr-only',
                        children: 'Crear Dia no laborable',
                      }),
                      e('wbr', {}),
                      e('svg', {
                        className: 'h-4 w-4 fill-current',
                        viewBox: '0 0 16 16',
                        children: e('path', {
                          d: 'M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z',
                        }),
                      }),
                    ],
                  }),
                  t('button', {
                    onClick: (F) => {
                      F.stopPropagation(), s(!0);
                    },
                    className: 'btn bg-primary text-white',
                    children: [
                      e('svg', {
                        className: 'w-4 h-4 fill-current opacity-50 shrink-0',
                        viewBox: '0 0 16 16',
                        children: e('path', {
                          d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
                        }),
                      }),
                      e('span', {
                        className: 'hidden xs:block ml-2',
                        children: 'Crear Dia no laborable',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          t('div', {
            className:
              'border border-borderInput rounded shadow overflow-hidden ',
            children: [
              e('div', {
                className: 'grid grid-cols-7 gap-px border-b border-slate-200',
                children: p.map((F, T) =>
                  t(
                    'div',
                    {
                      className: 'px-1 py-3',
                      children: [
                        e('div', {
                          className:
                            'text-slate-500 text-sm font-medium text-center lg:hidden',
                          children: F.substring(0, 3),
                        }),
                        e('div', {
                          className:
                            'text-slate-500 text-sm font-medium text-center hidden lg:block',
                          children: F,
                        }),
                      ],
                    },
                    T
                  )
                ),
              }),
              t('div', {
                className: 'grid grid-cols-7 gap-px bg-slate-200 ',
                children: [
                  S.map((F, T) =>
                    e(
                      'div',
                      {
                        className: 'bg-slate-50 h-20 sm:h-28 lg:h-36',
                        children: e('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '100%',
                          height: '100%',
                          children: e('rect', {
                            width: '100%',
                            height: '100%',
                            fill: 'url(#stripes)',
                          }),
                        }),
                      },
                      T
                    )
                  ),
                  M.map((F, T) =>
                    e(
                      'div',
                      {
                        className:
                          ' bg-white h-20 sm:h-28 lg:h-36 overflow-hidden cursor-pointer',
                        onClick: (q) => {
                          q.stopPropagation(), Ve(F);
                        },
                        children: t('div', {
                          className: 'h-full flex flex-col justify-between',
                          children: [
                            e('div', {
                              className:
                                'grow flex flex-col  p-0.5 sm:p-1.5 overflow-hidden relative',
                              children: j(F).map((q, ee) =>
                                e(
                                  'section',
                                  {
                                    className: 'relative w-full mt-3',
                                    onClick: (re) => re.stopPropagation(),
                                    children: t('div', {
                                      className: `relative h-full py-0.5 rounded overflow-hidden ${B(
                                        q.eventColor
                                      )}`,
                                      children: [
                                        e('section', {
                                          className: 'absolute',
                                          children: e(en, {
                                            setOpenModalCalendarEdit: l,
                                            openModalCalendarEdit: a,
                                            eventId: q.id,
                                            description: q.eventName,
                                            setReloadEvent: n,
                                            reloadEvent: r,
                                          }),
                                        }),
                                        e('div', {
                                          className:
                                            'text-sm font-semibold text-center flex justify-center items-center h-20',
                                          children: q.eventName,
                                        }),
                                      ],
                                    }),
                                  },
                                  ee
                                )
                              ),
                            }),
                            e('div', {
                              className:
                                'flex justify-between items-center p-0.5 sm:p-1.5',
                              children: e('div', {
                                className: `inline-flex ml-auto w-6 h-6 items-center justify-center text-xs sm:text-sm font-semibold text-center ${
                                  I(F) && 'text-white bg-primary rounded-full'
                                }`,
                                children: F,
                              }),
                            }),
                          ],
                        }),
                      },
                      T
                    )
                  ),
                  O.map((F, T) =>
                    e(
                      'div',
                      {
                        className: 'bg-slate-50 h-20 sm:h-28 lg:h-36',
                        children: e('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '100%',
                          height: '100%',
                          children: e('rect', {
                            width: '100%',
                            height: '100%',
                            fill: 'url(#stripes)',
                          }),
                        }),
                      },
                      T
                    )
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function rt({ align: s, setValueDate: a, dateChosen: l }) {
  const r = new Date(Date.now());
  return t('div', {
    className: 'relative',
    children: [
      e(Ms, {
        className:
          'form-input pl-3 text-slate-500 hover:text-slate-600 font-medium focus:border-primary w-[472px]',
        options: {
          static: !0,
          monthSelectorType: 'static',
          dateFormat: 'Y-m-d',
          defaultDate: l || r,
          prevArrow:
            '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
          nextArrow:
            '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
          onReady: (i, c, d) => {
            d.element.value = c.replace('to', '-');
            const m = s || '';
            d.calendarContainer.classList.add(`flatpickr-${m}`), a(i);
          },
          onChange: (i, c, d) => {
            a(i);
          },
        },
      }),
      e('div', {
        className:
          'absolute inset-0 right-auto flex items-center pointer-events-none',
        children: e('svg', {
          className: 'w-4 h-4 fill-current text-slate-500 ml-[445px]',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z',
          }),
        }),
      }),
    ],
  });
}
function sn({ setOpenModalCalendar: s, openModalCalendar: a }) {
  const l = _(),
    [r, n] = o.exports.useState(null),
    i = v(Kt),
    c = v(Er),
    d = v(Lr),
    {
      register: m,
      handleSubmit: u,
      reset: p,
      formState: { errors: h },
    } = U();
  return t(le, {
    id: 'success-modal',
    modalOpen: a,
    setModalOpen: s,
    children: [
      e('div', {
        className: 'pt-[20px] pr-[7px] pb-[20px] pl-[24px] border-slate-200',
        children: t('div', {
          className: 'flex justify-between items-center',
          children: [
            e('div', {
              className: 'font-bold text-slate-800 text-[24px]',
              children: 'Agregar dia no laborable',
            }),
            t('button', {
              className: 'text-slate-400 hover:text-slate-500 mt-3',
              onClick: (x) => {
                x.stopPropagation(), l(xe()), s(!1);
              },
              children: [
                e('div', { className: 'sr-only', children: 'Close' }),
                e('svg', {
                  width: '32',
                  height: '32',
                  viewBox: '0 0 24 24',
                  children: e('path', {
                    d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      e('div', {
        className: 'px-5 pt-4 pb-1',
        children: e('div', {
          className: 'text-sm',
          children: t('form', {
            onSubmit: u((x) => {
              const b = new Date(r),
                g = b.getFullYear(),
                E = b.getMonth(),
                M = b.getDate(),
                N = { date: `${g}-${E + 1}-${M}`, description: x.description };
              l(_r(N, s, p));
            }),
            children: [
              t('div', {
                className: 'space-y-2 mb-5',
                children: [
                  e('label', {
                    htmlFor: 'description',
                    className: 'text-[14px] font-semibold leading-[17px]',
                    children: 'Descripci\xF3n',
                  }),
                  e(
                    'input',
                    y(
                      { type: 'text', className: 'w-full form-input' },
                      m('description', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                        pattern: {
                          value: /[a-zA-Z]/,
                          message: 'El formato no es correcto',
                        },
                      })
                    )
                  ),
                  h.description &&
                    e('span', {
                      className: 'text-red-500 text-sm',
                      children: h.description.message,
                    }),
                ],
              }),
              c &&
                e('div', {
                  className: 'absolute',
                  children: e(rt, { setValueDate: n, dateChosen: c }),
                }),
              !d &&
                e('div', {
                  className: 'absolute',
                  children: e(rt, { setValueDate: n }),
                }),
              e('div', {
                children: i
                  ? e('div', {
                      className: 'mb-10  mt-20',
                      children: e(Y, { loading: 'Enviando', calendar: !0 }),
                    })
                  : e('button', {
                      type: 'submit',
                      className:
                        'bg-primary text-white w-full h-[51px] rounded mt-14 mb-6 font-semibold',
                      children: 'Agregar dia no laborable',
                    }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function an() {
  const [s, a] = o.exports.useState(!1);
  return e(C, {
    children: e(te, {
      icon: k.planningIcon,
      nameRoute: 'Planeaci\xF3n',
      nameSubRoute: 'Calendario',
      children: t('div', {
        className: 'px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto',
        children: [
          e('div', {
            className:
              'sm:flex sm:justify-between sm:items-center mb-4 md:mb-2',
          }),
          t('section', {
            className: 'lg:px-8 mt-5 pb-10',
            children: [
              e(tn, { setOpenModalCalendar: a }),
              e(sn, { openModalCalendar: s, setOpenModalCalendar: a }),
            ],
          }),
        ],
      }),
    }),
  });
}
function ln({ setUserPanelOpen: s }) {
  var M, N, S, L, O, R, I;
  o.exports.useState(!1);
  const a = _(),
    l = v(as),
    r = v(ss);
  o.exports.useEffect(() => {
    a(rs());
  }, []);
  const n =
      (M = JSON.parse(sessionStorage.getItem('userEdit'))) == null
        ? void 0
        : M.first_name,
    i =
      (N = JSON.parse(sessionStorage.getItem('userEdit'))) == null
        ? void 0
        : N.last_name,
    c =
      (S = JSON.parse(sessionStorage.getItem('userEdit'))) == null
        ? void 0
        : S.email,
    d =
      (L = JSON.parse(sessionStorage.getItem('userEdit'))) == null
        ? void 0
        : L.nmc,
    m =
      (O = JSON.parse(sessionStorage.getItem('userEdit'))) == null
        ? void 0
        : O.telephone,
    u =
      (R = JSON.parse(sessionStorage.getItem('userEdit'))) == null
        ? void 0
        : R.position,
    p =
      (I = JSON.parse(sessionStorage.getItem('userEdit'))) == null
        ? void 0
        : I.role,
    {
      register: h,
      handleSubmit: f,
      reset: x,
      formState: { errors: b },
    } = U(),
    g = (j) => {
      a(Zr(j, s));
    };
  o.exports.useEffect(() => {
    let j = {};
    (j.first_name = `${n}`),
      (j.last_name = `${i}`),
      (j.email = `${c}`),
      (j.nmc = `${d}`),
      (j.telephone = `${m}`),
      (j.position = `${u}`),
      (j.role = `${p}`),
      x(y({}, j));
  }, [n]);
  const E = () =>
    r
      ? e('div', { children: e(Y, { loading: 'Creando', update: !0 }) })
      : t('button', {
          className:
            'btn bg-primary hover:bg-secondary hover:text-primary text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]',
          children: [
            e('svg', {
              className: 'w-4 h-4 fill-current shrink-0 mb-1',
              viewBox: '0 0 16 16',
              children: e('path', {
                d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
              }),
            }),
            e('span', {
              className: 'ml-3 align-baseline',
              children: 'Editar usuario',
            }),
          ],
        });
  return e(C, {
    children: t('form', {
      onSubmit: f(g),
      children: [
        t('section', {
          className: 'grid gap-5 md:grid-cols-1',
          children: [
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'first_name',
                  children: 'Nombre',
                }),
                e(
                  'input',
                  y(
                    {
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    h('first_name', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                b.first_name &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: b.first_name.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'last_name',
                  children: 'Apellido',
                }),
                e(
                  'input',
                  y(
                    {
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    h('last_name', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[a-zA-Z]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                b.last_name &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: b.last_name.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'email',
                  children: 'Email',
                }),
                e(
                  'input',
                  y(
                    {
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    h('email', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                b.email &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: b.email.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'nmc',
                  children: 'NMC',
                }),
                e(
                  'input',
                  y(
                    {
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    h('nmc', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                b.nmc &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: b.nmc.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'telephone',
                  children: 'Telefono',
                }),
                e(
                  'input',
                  y(
                    {
                      className: 'form-input w-full',
                      type: 'number',
                      autoComplete: 'off',
                    },
                    h('telephone', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                b.telephone &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: b.telephone.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'position',
                  children: 'Posici\xF3n',
                }),
                e(
                  'input',
                  y(
                    {
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    h('position', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                b.position &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: b.position.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  children: 'Rol',
                }),
                t(
                  'select',
                  $(
                    y(
                      { className: 'form-select w-full' },
                      h('role', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                      })
                    ),
                    {
                      children: [
                        e('option', {
                          value: '',
                          disabled: !0,
                          children: 'Selecciona...',
                        }),
                        l.map((j) =>
                          e('option', { value: j.id, children: j.role }, j.id)
                        ),
                      ],
                    }
                  )
                ),
                b.role &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: b.role.message,
                  }),
              ],
            }),
          ],
        }),
        e('div', { className: 'mt-10 flex justify-center', children: E() }),
      ],
    }),
  });
}
const rn = ({ setUserPanelOpen: s }) =>
  e('div', {
    className: 'bg-white',
    children: e('div', {
      className: 'mt-6 px-3',
      children: e('section', { children: e(ln, { setUserPanelOpen: s }) }),
    }),
  });
function nn({ userPanelOpen: s, setUserPanelOpen: a }) {
  const l = o.exports.useRef(null),
    r = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const n = ({ keyCode: i }) => {
        !s || i !== 27 || a(!1);
      };
      return (
        document.addEventListener('keydown', n),
        () => document.removeEventListener('keydown', n)
      );
    }, []),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: s,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: 'panelG',
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: s,
          enter: 'transition ease-in-out duration-500',
          enterStart: 'opacity-0 translate-x-4',
          enterEnd: 'opacity-100 translate-x-0',
          leave: 'transition ease-in-out duration-500',
          leaveStart: 'opacity-100 translate-x-0',
          leaveEnd: 'opacity-0 translate-x-4',
          children: e('div', {
            ref: r,
            className: `absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
              s ? 'translate-x-' : 'translate-x-full'
            }`,
            children: t('div', {
              className:
                'top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 w-full sm:w-[390px] h-screen',
              children: [
                e('h2', {
                  className: 'mt-4 ml-4 w-48 font-bold text-black text-2xl',
                  children: 'Editar Usuario',
                }),
                e('button', {
                  ref: l,
                  onClick: () => a(!1),
                  className: 'absolute top-0 right-0 mt-4 mr-3 group p-1',
                  children: e('svg', {
                    className:
                      'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                    viewBox: '0 0 16 16',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: e('path', {
                      d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                    }),
                  }),
                }),
                e(rn, { setUserPanelOpen: a }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function on({ setOpenModalUserDelete: s, openModalUserDelete: a }) {
  var i, c;
  const l = _(),
    r =
      (i = JSON.parse(sessionStorage.getItem('userDelete'))) == null
        ? void 0
        : i.first_name,
    n =
      (c = JSON.parse(sessionStorage.getItem('userDelete'))) == null
        ? void 0
        : c.last_name;
  return e(le, {
    id: 'success-modal',
    modalOpen: a,
    SetModalOpen: s,
    children: e('div', {
      className: 'p-5 flex space-x-4',
      children: t('div', {
        children: [
          t('div', {
            className: 'mb-2 flex justify-between items-center',
            children: [
              t('div', {
                className: 'text-lg font-bold text-slate-800 w-72',
                children: [
                  '\xBFEstas seguro de eliminar al usuario ',
                  r,
                  ' ',
                  n,
                  '?',
                ],
              }),
              e('button', {
                onClick: (d) => {
                  d.stopPropagation(), s(!1);
                },
                children: e('svg', {
                  className:
                    'w-5 h-5 fill-black group-hover:fill-slate-600 pointer-events-none',
                  viewBox: '0 0 16 16',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: e('path', {
                    d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                  }),
                }),
              }),
            ],
          }),
          e('div', {
            className: 'text-sm mb-10',
            children: e('div', {
              className: 'space-y-2',
              children: e('p', {
                children:
                  'Esta acci\xF3n no se puede revertir, est\xE1s a punto de eliminar el usuario y todos sus datos asociados.',
              }),
            }),
          }),
          e('div', {
            className: 'flex justify-center items-center',
            children: e('button', {
              onClick: (d) => {
                d.stopPropagation(), s(!1), l(Ur());
              },
              className: 'btn-lg bg-red-500 font-semibold text-white w-full',
              children: 'Eliminar Usuario',
            }),
          }),
        ],
      }),
    }),
  });
}
function is({
  dataUser: s,
  userPanelOpen: a,
  setUserPanelOpen: l,
  setOpenModalUserDelete: r,
  openModalUserDelete: n,
  setUser: i,
  selectUser: c,
}) {
  const [d, m] = o.exports.useState({ state: !1, asc: !1 }),
    [u, p] = o.exports.useState({ state: !1, asc: !1 });
  return (
    o.exports.useEffect(() => {
      d.state && (d.asc ? Oe(c, i, 'first_name') : De(c, i, 'first_name'));
    }, [d]),
    o.exports.useEffect(() => {
      u.state && (u.asc ? Oe(c, i, 'email') : De(c, i, 'email'));
    }, [u]),
    t(C, {
      children: [
        e(nn, { setUserPanelOpen: l, userPanelOpen: a }),
        e(on, { openModalUserDelete: n, setOpenModalUserDelete: r }),
        t('table', {
          className: 'table-auto w-full table',
          children: [
            e('thead', {
              className:
                'text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50',
              children: t('tr', {
                children: [
                  e('th', {
                    className: 'px-2 first:pl-5 cursor-pointer',
                    onClick: () => {
                      m({ state: !0, asc: !d.asc });
                    },
                    children: t('div', {
                      className: 'flex items-center space-x-2',
                      children: [
                        e('div', {
                          className: 'font-semibold text-left',
                          children: 'Nombre',
                        }),
                        e('img', {
                          src: d.asc ? k.doubleDown : k.doubleUp,
                          alt: 'Flecha abajo',
                          className: 'w-5',
                        }),
                      ],
                    }),
                  }),
                  e('th', {
                    className:
                      'px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer',
                    onClick: () => {
                      p({ state: !0, asc: !u.asc });
                    },
                    children: t('div', {
                      className: 'flex items-center space-x-2',
                      children: [
                        e('p', {
                          className: 'font-semibold text-left',
                          children: 'Email',
                        }),
                        e('img', {
                          src: u.asc ? k.doubleDown : k.doubleUp,
                          alt: 'Flecha abajo',
                          className: 'w-5',
                        }),
                      ],
                    }),
                  }),
                  e('th', {
                    className:
                      'px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                    children: e('p', {
                      className: 'font-semibold text-left',
                      children: 'NMC',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Tel\xE9fono',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Posici\xF3n',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ',
                    children: e('p', {
                      className: 'font-semibold text-center',
                    }),
                  }),
                ],
              }),
            }),
            e('tbody', {
              className: 'text-sm divide-y divide-slate-200',
              children: s.map((h, f) => {
                var x;
                return t(
                  'tr',
                  {
                    children: [
                      t('td', {
                        className:
                          'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4',
                        children: [
                          t('p', {
                            className:
                              'text-textTableItem font-medium  capitalize',
                            children: [
                              h == null ? void 0 : h.first_name,
                              ' ',
                              h == null ? void 0 : h.last_name,
                            ],
                          }),
                          e('span', {
                            className: 'text-primary',
                            children: (x = h.role) == null ? void 0 : x.name,
                          }),
                        ],
                      }),
                      e('td', {
                        className:
                          'px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                        children: e('p', {
                          className: 'text-left font-semibold',
                          children: h == null ? void 0 : h.email,
                        }),
                      }),
                      e('td', {
                        className:
                          'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                        children: e('p', {
                          className: 'text-left ',
                          children: h == null ? void 0 : h.nmc,
                        }),
                      }),
                      e('td', {
                        className:
                          'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                        children: e('p', {
                          className: 'text-center',
                          children: h == null ? void 0 : h.telephone,
                        }),
                      }),
                      e('td', {
                        className:
                          'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                        children: e('p', {
                          className: 'text-center',
                          children: h == null ? void 0 : h.position,
                        }),
                      }),
                      e('td', {
                        className:
                          'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                        children: t('figure', {
                          className: 'flex justify-end items-center space-x-3',
                          children: [
                            e('button', {
                              onClick: (b) => {
                                var E;
                                b.stopPropagation(), l(!0);
                                const g = {
                                  first_name: h == null ? void 0 : h.first_name,
                                  last_name: h == null ? void 0 : h.last_name,
                                  telephone: h == null ? void 0 : h.telephone,
                                  nmc: h == null ? void 0 : h.nmc,
                                  position: h == null ? void 0 : h.position,
                                  email: h == null ? void 0 : h.email,
                                  role:
                                    (E = h == null ? void 0 : h.role) == null
                                      ? void 0
                                      : E.id,
                                  id: h == null ? void 0 : h.id,
                                };
                                sessionStorage.setItem(
                                  'userEdit',
                                  JSON.stringify(g)
                                );
                              },
                              children: e('img', {
                                src: k.pencilIcon,
                                alt: 'Lapiz',
                              }),
                            }),
                            e('button', {
                              onClick: (b) => {
                                b.stopPropagation(), r(!0);
                                const g = {
                                  id: h.id,
                                  first_name: h.first_name,
                                  last_name: h.last_name,
                                };
                                sessionStorage.setItem(
                                  'userDelete',
                                  JSON.stringify(g)
                                );
                              },
                              children: e('img', {
                                src: k.garbageIcon,
                                alt: 'Basura',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  f
                );
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function cn({ usersCreateOpen: s, setUsersCreateOpen: a }) {
  const l = _(),
    r = v(Rr);
  v(Tr);
  const n = v(ss),
    i = v(as),
    [c, d] = o.exports.useState(!1),
    m = () => d(!c),
    {
      register: u,
      handleSubmit: p,
      reset: h,
      formState: { errors: f },
    } = U();
  o.exports.useEffect(() => {
    r && (h(), setTimeout(() => l(at()), 5e3));
  }, [r]),
    o.exports.useEffect(() => {
      l(rs());
    }, [l]),
    o.exports.useEffect(() => {
      s || h();
    }, [s]),
    o.exports.useEffect(() => {
      let g = {};
      (g.password = 'generic'), (g.role = ''), h(y({}, g));
    }, [h]);
  const x = (g) => {
      (g.role = parseInt(g.role, 10)), l(Vr(g, a));
    },
    b = () =>
      n
        ? e('div', { children: e(Y, { loading: 'Creando', register: !0 }) })
        : t('button', {
            className:
              'btn bg-primary hover:bg-secondary hover:text-primary text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]',
            children: [
              e('svg', {
                className: 'w-4 h-4 fill-current shrink-0 mb-1',
                viewBox: '0 0 16 16',
                children: e('path', {
                  d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
                }),
              }),
              e('span', {
                className: 'ml-3 align-baseline',
                children: 'A\xF1adir usuario',
              }),
            ],
          });
  return e(C, {
    children: t('form', {
      onSubmit: p(x),
      className: 'mt-16',
      children: [
        t('section', {
          className: 'grid gap-5 md:grid-cols-1',
          children: [
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'first_name',
                  children: 'Nombre',
                }),
                e(
                  'input',
                  y(
                    {
                      id: 'first_name',
                      className: 'form-input w-full',
                      type: 'text',
                      autoFocus: !0,
                      autoComplete: 'off',
                    },
                    u('first_name', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                f.first_name &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: f.first_name.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'last_name',
                  children: 'Apellido',
                }),
                e(
                  'input',
                  y(
                    {
                      id: 'last_name',
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    u('last_name', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[a-zA-Z]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                f.last_name &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: f.last_name.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'email',
                  children: 'Email',
                }),
                e(
                  'input',
                  y(
                    {
                      id: 'mandatory',
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    u('email', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                f.email &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: f.email.message,
                  }),
              ],
            }),
            t('div', {
              className: 'relative',
              children: [
                e('label', {
                  className: 'block text-sm font-medium mb-1',
                  htmlFor: 'password',
                  children: 'Contrase\xF1a',
                }),
                t('div', {
                  className: 'focus-within:text-primary ',
                  children: [
                    e(
                      'input',
                      y(
                        {
                          maxLength: '35',
                          className: 'form-input w-full',
                          type: c ? 'text' : 'password',
                          autoComplete: 'off',
                        },
                        u('password', {
                          required: {
                            value: !0,
                            message: 'El campo es requerido',
                          },
                        })
                      )
                    ),
                    e('section', {
                      className: 'relative ',
                      children: e('button', {
                        type: 'button',
                        className:
                          'absolute inset-2 -top-7 left-auto flex items-center',
                        children: c
                          ? e('img', {
                              onClick: m,
                              src: k.openEye,
                              alt: 'Ojo abierto',
                            })
                          : e('img', {
                              onClick: m,
                              src: k.closedEye,
                              alt: 'Ojo cerrado',
                            }),
                      }),
                    }),
                  ],
                }),
                f.password &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: f.password.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'nmc',
                  children: 'NMC',
                }),
                e(
                  'input',
                  y(
                    {
                      id: 'nmc',
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    u('nmc', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                f.nmc &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: f.nmc.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'telephone',
                  children: 'Telefono',
                }),
                e(
                  'input',
                  y(
                    {
                      id: 'telephone',
                      className: 'form-input w-full',
                      type: 'tel',
                      autoComplete: 'off',
                    },
                    u('telephone', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                f.telephone &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: f.telephone.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  htmlFor: 'position',
                  children: 'Posici\xF3n',
                }),
                e(
                  'input',
                  y(
                    {
                      id: 'position',
                      className: 'form-input w-full',
                      type: 'text',
                      autoComplete: 'off',
                    },
                    u('position', {
                      required: { value: !0, message: 'El campo es requerido' },
                      pattern: {
                        value: /[a-zA-Z0-9]/,
                        message: 'El formato no es correcto',
                      },
                    })
                  )
                ),
                f.position &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: f.position.message,
                  }),
              ],
            }),
            t('div', {
              children: [
                e('label', {
                  className: 'block text-sm font-semibold mb-1',
                  children: 'Rol',
                }),
                t(
                  'select',
                  $(
                    y(
                      { id: 'role', className: 'form-select w-full' },
                      u('role', {
                        required: {
                          value: !0,
                          message: 'El campo es requerido',
                        },
                      })
                    ),
                    {
                      children: [
                        e('option', {
                          value: '',
                          disabled: !0,
                          children: 'Selecciona...',
                        }),
                        i.map((g, E) =>
                          e('option', { value: g.id, children: g.role }, E)
                        ),
                      ],
                    }
                  )
                ),
                f.role &&
                  e('span', {
                    className: 'text-red-500 text-sm',
                    children: f.role.message,
                  }),
              ],
            }),
          ],
        }),
        e('div', { className: 'my-10 flex justify-center', children: b() }),
      ],
    }),
  });
}
const dn = ({ usersCreateOpen: s, setUsersCreateOpen: a }) => {
  const l = o.exports.useRef(null),
    r = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const n = ({ keyCode: i }) => {
        !s || i !== 27 || a(!1);
      };
      return (
        document.addEventListener('keydown', n),
        () => document.removeEventListener('keydown', n)
      );
    }, []),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: s,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: 'panelG',
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: s,
          enter: 'transition ease-in-out duration-500',
          enterStart: 'opacity-0 translate-x-4',
          enterEnd: 'opacity-100 translate-x-0',
          leave: 'transition ease-in-out duration-500',
          leaveStart: 'opacity-100 translate-x-0',
          leaveEnd: 'opacity-0 translate-x-4',
          children: e('div', {
            ref: r,
            className: `absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
              s ? 'translate-x-' : 'translate-x-full'
            }`,
            children: t('div', {
              className:
                'top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 w-full sm:w-[390px] h-screen',
              children: [
                t('div', {
                  className: 'user-sider-title',
                  children: [
                    e('h2', {
                      className:
                        'absolute top-0 left-4 mt-4 mr-3 group font-bold text-black text-2xl',
                      children: 'Crear Usuario',
                    }),
                    e('button', {
                      ref: l,
                      onClick: () => a(!1),
                      className: 'absolute top-0 right-0 mt-4 mr-3 group p-1',
                      children: e('svg', {
                        className:
                          'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                        viewBox: '0 0 16 16',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: e('path', {
                          d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                        }),
                      }),
                    }),
                  ],
                }),
                e('div', {
                  className: 'bg-white',
                  children: e('div', {
                    className: 'mt-6 px-3',
                    children: e('section', {
                      children: e(cn, {
                        usersCreateOpen: s,
                        setUsersCreateOpen: a,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
};
function mn({
  setUserPanelOpen: s,
  setOpenModalUserDelete: a,
  openModalUserDelete: l,
  userPanelOpen: r,
  usersCreateOpen: n,
  setUsersCreateOpen: i,
}) {
  const [c, d] = o.exports.useState(v(ls)),
    [m, u] = o.exports.useState(!1),
    p = _(),
    h = v(ls),
    f = v(Hr),
    x = v($r);
  o.exports.useEffect(() => {
    p(Gr());
  }, [f]),
    o.exports.useEffect(() => {
      d(h);
    }, [h]);
  const b = (g) => {
    if (g.target.value.length > 0) {
      u(!0);
      let E = c.filter((M) => {
        if (
          M.first_name
            .toString()
            .toLowerCase()
            .includes(g.target.value.toLowerCase()) ||
          M.last_name
            .toString()
            .toLowerCase()
            .includes(g.target.value.toLowerCase())
        )
          return M;
      });
      p(jr(E));
    } else p(Qt()), u(!1);
  };
  return t(C, {
    children: [
      e('section', {
        children: e(dn, { usersCreateOpen: n, setUsersCreateOpen: i }),
      }),
      (c == null ? void 0 : c.length) > 0
        ? t(C, {
            children: [
              t('section', {
                className: 'mb-5 flex justify-between',
                children: [
                  e('div', {
                    className: 'mb-4 sm:mb-0',
                    children: e('h1', {
                      className:
                        'text-2xl md:text-3xl text-slate-800 font-bold',
                      children: 'Usuarios',
                    }),
                  }),
                  t('div', {
                    className: 'flex space-x-3',
                    children: [
                      e('input', {
                        className: 'form-input w-72',
                        placeholder: 'Buscar...',
                        type: 'search',
                        onChange: b,
                      }),
                      t('button', {
                        onClick: (g) => {
                          g.stopPropagation(), i(!0);
                        },
                        type: 'button',
                        className: 'btn bg-primary text-white w-54 space-x-2',
                        children: [
                          e('svg', {
                            className:
                              'w-4 h-4 fill-current opacity-50 shrink-0',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
                            }),
                          }),
                          e('span', { children: 'Crear usuario' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e('section', {
                children: e('div', {
                  className:
                    'overflow-x-auto rounded-xl border border-slate-300 h-[550px]',
                  children: m
                    ? m && x.length > 0
                      ? e(is, {
                          userPanelOpen: r,
                          setUserPanelOpen: s,
                          setOpenModalUserDelete: a,
                          openModalUserDelete: l,
                          dataUser: x,
                          setUser: d,
                          selectUser: h,
                        })
                      : e('section', {
                          className: 'justify-center items-center flex h-96',
                          children: e('h2', {
                            className: 'font-semibold text-2xl',
                            children: 'Sin datos que mostrar',
                          }),
                        })
                    : e(is, {
                        userPanelOpen: r,
                        setUserPanelOpen: s,
                        setOpenModalUserDelete: a,
                        openModalUserDelete: l,
                        dataUser: c,
                        setUser: d,
                        selectUser: h,
                      }),
                }),
              }),
            ],
          })
        : e(C, { children: e(Be, {}) }),
    ],
  });
}
function pn() {
  const [s, a] = o.exports.useState(!1),
    [l, r] = o.exports.useState(!1),
    [n, i] = o.exports.useState(!1);
  return e(te, {
    icon: k.administratorIcon,
    nameRoute: 'Administraci\xF3n',
    nameSubRoute: 'Usuario',
    children: t('div', {
      className: 'px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-10',
      children: [
        e('div', {
          className: 'sm:flex sm:justify-between sm:items-center mb-4 md:mb-2',
        }),
        e('section', {
          className: 'lg:px-8 mt-5',
          children: e(mn, {
            setUserPanelOpen: a,
            setOpenModalUserDelete: r,
            openModalUserDelete: l,
            userPanelOpen: s,
            usersCreateOpen: n,
            setUsersCreateOpen: i,
          }),
        }),
      ],
    }),
  });
}
const os = new Date();
console.log(os);
const un = {
  style: 'font-size:0.85em',
  viewPreset: { base: 'weekAndDay', tickSize: 60 },
  weekStartDay: 1,
  dependencyIdField: 'sequenceNumber',
  bufferCoef: 2,
  visibleDate: { date: os, block: 'center' },
  features: {
    taskNonWorkingTime: {
      tooltipTemplate({ startDate: s, endDate: a, iconCls: l }) {
        return `                   
                <p class="b-nonworkingtime-tip-title">${
                  l ? `<i class="${l}"></i>` : ''
                }Non-working time</p>
                ${DateHelper.format(s, 'L')} - ${DateHelper.format(a, 'L')}
            `;
      },
    },
    dependencies: !0,
    dependencyEdit: {
      editorConfig: {
        items: { typeField: { label: 'Tipo de relaci\xF3n' } },
        bbar: {
          items: {
            deleteButton: { text: 'Eliminar', hidden: !1, cls: 'deletebtn' },
            saveButton: { text: 'Guardar', cls: 'save', hidden: !1 },
            cancelButton: { text: 'Cancelar', hidden: !1 },
          },
        },
      },
    },
    nonWorkingTime: { disabled: !0 },
    percentBar: !0,
    filter: !0,
    indicators: !0,
    taskCopyPaste: !1,
    projectLines: { disabled: !0 },
    taskEdit: !1,
    taskMenu: {
      items: {
        deleteTask: !1,
        add: !1,
        convertToMilestone: !1,
        indent: !1,
        outdent: !1,
      },
    },
    stickyCells: { contentSelector: '.myClassName' },
  },
  rowHeight: 40,
  height: 600,
  columns: [
    { type: 'number', field: 'id', width: 5, text: 'No.', readOnly: !0 },
    { type: 'name', field: 'order', width: 30, text: 'Order', readOnly: !0 },
    {
      type: 'name',
      field: 'inventory_item',
      width: 30,
      text: 'Item',
      readOnly: !0,
    },
    {
      type: 'name',
      field: 'pline',
      width: 100,
      text: 'Product Line',
      readOnly: !0,
    },
    {
      type: 'date',
      field: 'schedule_ship_date',
      format: 'DD-MM-YYYY',
      width: 110,
      text: 'SSD',
      readOnly: !0,
    },
    {
      type: 'number',
      field: 'order_qty',
      width: 30,
      text: 'Cantidad',
      readOnly: !0,
    },
    {
      type: 'number',
      field: 'suggested_order',
      width: 30,
      text: 'Suggested Pieces',
      readOnly: !0,
    },
    { type: 'date', field: 'startDate', width: 110, text: 'Start Date' },
    { type: 'date', field: 'endDate', width: 110, text: 'End Date' },
  ],
};
function hn() {
  mt();
  const s = o.exports.useRef();
  o.exports.useEffect(() => {
    console.log(s.current.instance);
    const p = s.current.instance.project.inlineData;
    console.log(p);
  }, []);
  const a = async () => {
    const p = await z.get(
        'http://3.88.215.84/api/gantt/list-order-planning?planning-id=mp-91'
      ),
      h = s.current.instance.project;
    (h.inlineData = p),
      (h.stm.autoRecord = !0),
      h.stm.enable(),
      await h.loadInlineData({
        eventsData: p.data.tasks.rows,
        calendarsData: p.data.calendars.rows,
        dependenciesData: p.data.tasks.dependencies,
      }),
      (h.calendar = 'general'),
      console.log(h.calendar);
  };
  o.exports.useEffect(() => {
    a();
  }, []);
  const l = () => {
      console.log('Undo'), s.current.instance.project.stm.undo();
    },
    r = () => {
      console.log('Redo'), s.current.instance.project.stm.redo();
    },
    n = () => {
      console.log('Zoom In'), s.current.instance.zoomIn();
    },
    i = () => {
      console.log('Zoom Out'), s.current.instance.zoomOut();
    },
    c = () => {
      console.log('Zoom to Fit'),
        s.current.instance.zoomToFit({ leftMargin: 50, rightMargin: 50 });
    },
    d = () => {
      console.log('Zoom to Fit'), s.current.instance.shiftPrevious();
    },
    m = () => {
      console.log('Zoom to Fit'), s.current.instance.shiftNext();
    },
    u = () => {
      console.log('Guardando planeaci\xF3n');
      const h = s.current.instance.project.inlineData;
      console.log(h);
    };
  return e(te, {
    icon: k.planningIcon,
    nameRoute: 'Planeaci\xF3n',
    nameSubRoute: 'Gantt',
    children: t('div', {
      className: 'px-4',
      children: [
        e(pt, {
          items: [
            {
              type: 'buttonGroup',
              items: [
                {
                  icon: 'b-fa b-fa-undo',
                  async onAction() {
                    l();
                  },
                },
                {
                  icon: 'b-fa b-fa-redo',
                  async onAction() {
                    r();
                  },
                },
              ],
            },
            {
              type: 'buttonGroup',
              items: [
                {
                  ref: 'zoomInButton',
                  icon: 'b-fa b-fa-search-plus',
                  tooltip: 'Zoom in',
                  onAction: n,
                },
                {
                  ref: 'zoomOutButton',
                  icon: 'b-fa b-fa-search-minus',
                  tooltip: 'Zoom out',
                  onAction: i,
                },
                {
                  ref: 'zoomToFitButton',
                  icon: 'b-fa b-fa-compress-arrows-alt',
                  tooltip: 'Zoom to fit',
                  onAction: c,
                },
                {
                  ref: 'previousButton',
                  icon: 'b-fa b-fa-angle-left',
                  tooltip: 'Previous time span',
                  onAction: d,
                },
                {
                  ref: 'nextButton',
                  icon: 'b-fa b-fa-angle-right',
                  tooltip: 'Next time span',
                  onAction: m,
                },
              ],
            },
            {
              text: 'Guardar planeaci\xF3n',
              icon: 'b-fa b-fa-save',
              cls: 'save',
              async onAction() {
                u();
              },
            },
          ],
        }),
        e('div', {
          className: 'border-borderInput border rounded',
          children: e(
            Ze,
            y(
              {
                ref: s,
                pdfExportFeature: !0,
                enableDeleteKey: !1,
                taskRenderer: ({ taskRecord: p }) => ({
                  tag: 'p',
                  html: We.encodeHtml(p.name),
                }),
              },
              un
            )
          ),
        }),
      ],
    }),
  });
}
const cs = new Date();
console.log(cs);
const xn = {
  style: 'font-size:0.85em',
  viewPreset: { base: 'weekAndDay', tickSize: 60 },
  weekStartDay: 1,
  dependencyIdField: 'sequenceNumber',
  bufferCoef: 2,
  visibleDate: { date: cs, block: 'center' },
  features: {
    taskNonWorkingTime: {
      tooltipTemplate({ startDate: s, endDate: a, iconCls: l }) {
        return `                   
                <p class="b-nonworkingtime-tip-title">${
                  l ? `<i class="${l}"></i>` : ''
                }Non-working time</p>
                ${DateHelper.format(s, 'L')} - ${DateHelper.format(a, 'L')}
            `;
      },
    },
    nonWorkingTime: { disabled: !0 },
    percentBar: !0,
    filter: !0,
    indicators: !0,
    taskCopyPaste: !1,
    projectLines: { disabled: !0 },
    dependencies: !0,
    dependencyEdit: {
      editorConfig: {
        items: { typeField: { label: 'Tipo de relaci\xF3n' } },
        bbar: {
          items: {
            deleteButton: { text: 'Eliminar', hidden: !1, cls: 'deletebtn' },
            saveButton: { text: 'Guardar', cls: 'save', hidden: !1 },
            cancelButton: { text: 'Cancelar', hidden: !1 },
          },
        },
      },
    },
    taskEdit: {
      items: {
        generalTab: { items: { percentDone: !1, effort: !1, divider: !1 } },
        notesTab: !1,
        predecessorsTab: !1,
        successorsTab: !1,
        resourcesTab: !1,
        advancedTab: !1,
      },
    },
    taskMenu: {
      items: {
        deleteTask: !1,
        add: !1,
        convertToMilestone: !1,
        indent: !1,
        outdent: !1,
      },
    },
    stickyCells: { contentSelector: '.myClassName' },
  },
  rowHeight: 40,
  height: 600,
  columns: [
    { type: 'number', field: 'id', width: 5, text: 'No.' },
    { type: 'name', field: 'order', width: 30, text: 'Order' },
    { type: 'name', field: 'inventory_item', width: 30, text: 'Item' },
    { type: 'name', field: 'pline', width: 100, text: 'Product Line' },
    {
      type: 'date',
      field: 'schedule_ship_date',
      format: 'DD-MM-YYYY',
      width: 110,
      text: 'SSD',
    },
    { type: 'number', field: 'order_qty', width: 30, text: 'Cantidad' },
    {
      type: 'number',
      field: 'suggested_order',
      width: 30,
      text: 'Suggested Pieces',
    },
    { type: 'date', field: 'startDate', width: 110, text: 'Start Date' },
    { type: 'date', field: 'endDate', width: 110, text: 'End Date' },
  ],
};
function fn() {
  const [s, a] = o.exports.useState(!1),
    { id: l } = mt(),
    r = o.exports.useRef();
  o.exports.useEffect(() => {
    console.log(r.current.instance);
    const x = r.current.instance.project.inlineData;
    console.log(x);
  }, []);
  const n = async () => {
    const x = await z.get(
        `http://3.88.215.84/api/gantt/list-order-planning?planning-id=mp-${l}`
      ),
      b = r.current.instance.project;
    (b.inlineData = x),
      (b.stm.autoRecord = !0),
      b.stm.enable(),
      await b.loadInlineData({
        eventsData: x.data.tasks.rows,
        calendarsData: x.data.calendars.rows,
        dependenciesData: x.data.tasks.dependencies.rows,
      }),
      (b.calendar = 'general');
  };
  o.exports.useEffect(() => {
    n();
  }, []);
  const i = () => {
      console.log('Undo'), r.current.instance.project.stm.undo();
    },
    c = () => {
      console.log('Redo'), r.current.instance.project.stm.redo();
    },
    d = () => {
      console.log('Zoom In'), r.current.instance.zoomIn();
    },
    m = () => {
      console.log('Zoom Out'), r.current.instance.zoomOut();
    },
    u = () => {
      console.log('Zoom to Fit'),
        r.current.instance.zoomToFit({ leftMargin: 50, rightMargin: 50 });
    },
    p = () => {
      console.log('Zoom to Fit'), r.current.instance.shiftPrevious();
    },
    h = () => {
      console.log('Zoom to Fit'), r.current.instance.shiftNext();
    },
    f = async () => {
      console.log('Guardando planeaci\xF3n');
      const b = r.current.instance.project.inlineData;
      console.log(b);
      const g = b.eventsData,
        E = b.dependenciesData;
      console.log(E), console.log(l);
      const M = { tasks: g, dependencies: E };
      await z
        .post(`http://3.88.215.84/api/planning/save-planning/${l}`, M)
        .then((N) => {
          N.status === 200
            ? (a(!0),
              setTimeout(() => {
                a(!1);
              }, 3e3),
              console.log(N))
            : console.log('Ocurri\xF3 un error: ' + N.status);
        })
        .catch((N) => console.log(N));
    };
  return t(te, {
    icon: k.planningIcon,
    nameRoute: 'Planeaci\xF3n',
    nameSubRoute: 'Gantt',
    children: [
      t('div', {
        className: 'px-4',
        children: [
          e(pt, {
            items: [
              {
                type: 'buttonGroup',
                items: [
                  {
                    icon: 'b-fa b-fa-undo',
                    async onAction() {
                      i();
                    },
                  },
                  {
                    icon: 'b-fa b-fa-redo',
                    async onAction() {
                      c();
                    },
                  },
                ],
              },
              {
                type: 'buttonGroup',
                items: [
                  {
                    ref: 'zoomInButton',
                    icon: 'b-fa b-fa-search-plus',
                    tooltip: 'Zoom in',
                    onAction: d,
                  },
                  {
                    ref: 'zoomOutButton',
                    icon: 'b-fa b-fa-search-minus',
                    tooltip: 'Zoom out',
                    onAction: m,
                  },
                  {
                    ref: 'zoomToFitButton',
                    icon: 'b-fa b-fa-compress-arrows-alt',
                    tooltip: 'Zoom to fit',
                    onAction: u,
                  },
                  {
                    ref: 'previousButton',
                    icon: 'b-fa b-fa-angle-left',
                    tooltip: 'Previous time span',
                    onAction: p,
                  },
                  {
                    ref: 'nextButton',
                    icon: 'b-fa b-fa-angle-right',
                    tooltip: 'Next time span',
                    onAction: h,
                  },
                ],
              },
              {
                text: 'Guardar planeaci\xF3n',
                icon: 'b-fa b-fa-save',
                cls: 'save',
                async onAction() {
                  f();
                },
              },
            ],
          }),
          e('div', {
            className: 'border-borderInput border rounded',
            children: e(
              Ze,
              y(
                {
                  ref: r,
                  pdfExportFeature: !0,
                  enableDeleteKey: !1,
                  taskRenderer: ({ taskRecord: x }) => ({
                    tag: 'p',
                    html: We.encodeHtml(x.name),
                  }),
                },
                xn
              )
            ),
          }),
        ],
      }),
      e('section', {
        className: 'flex justify-end -mt-20',
        children: t(kt, {
          type: 'success',
          open: s,
          setOpen: a,
          className: 'animate-bounce',
          children: [
            ' ',
            t('span', {
              className: 'flex flex-col',
              children: [
                ' ',
                'Planeaci\xF3n guardada',
                ' ',
                e('span', {
                  className: 'font-medium w-72',
                  children: 'Datos sincronizados exitosamente',
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function bn() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Button \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Appearances',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn bg-primary hover:bg-indigo-600 text-white',
                                  children: 'Primary',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300 text-primary',
                                  children: 'Secondary',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300 text-slate-600',
                                  children: 'Tertiary',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn bg-rose-500 hover:bg-rose-600 text-white',
                                  children: 'Danger',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300 text-rose-500',
                                  children: 'Danger',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn bg-emerald-500 hover:bg-emerald-600 text-white',
                                  children: 'Success',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300 text-emerald-500',
                                  children: 'Success',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'States',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn bg-primary hover:bg-indigo-600 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none',
                                  disabled: !0,
                                  children: 'Disabled',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: t('button', {
                                  className:
                                    'btn bg-primary hover:bg-indigo-600 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none',
                                  disabled: !0,
                                  children: [
                                    e('svg', {
                                      className:
                                        'animate-spin w-4 h-4 fill-current shrink-0',
                                      viewBox: '0 0 16 16',
                                      children: e('path', {
                                        d: 'M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z',
                                      }),
                                    }),
                                    e('span', {
                                      className: 'ml-2',
                                      children: 'Loading',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Sizes',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn-xs bg-primary hover:bg-indigo-600 text-white',
                                  children: 'Button',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                  children: 'Button',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn bg-primary hover:bg-indigo-600 text-white',
                                  children: 'Button',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn-lg bg-primary hover:bg-indigo-600 text-white',
                                  children: 'Button',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Buttons with an Icon',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: t('button', {
                                  className:
                                    'btn bg-primary hover:bg-indigo-600 text-white',
                                  children: [
                                    e('svg', {
                                      className:
                                        'w-4 h-4 fill-current opacity-50 shrink-0',
                                      viewBox: '0 0 16 16',
                                      children: e('path', {
                                        d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
                                      }),
                                    }),
                                    e('span', {
                                      className: 'ml-2',
                                      children: 'Add Event',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: t('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300 text-slate-600',
                                  children: [
                                    e('svg', {
                                      className:
                                        'w-4 h-4 fill-current text-slate-500 shrink-0',
                                      viewBox: '0 0 16 16',
                                      children: e('path', {
                                        d: 'M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z',
                                      }),
                                    }),
                                    e('span', {
                                      className: 'ml-2',
                                      children: 'Edit Content',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: t('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300 text-rose-500',
                                  children: [
                                    e('svg', {
                                      className:
                                        'w-4 h-4 fill-current shrink-0',
                                      viewBox: '0 0 16 16',
                                      children: e('path', {
                                        d: 'M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z',
                                      }),
                                    }),
                                    e('span', {
                                      className: 'ml-2',
                                      children: 'Delete',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Icon Buttons',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300',
                                  children: e('svg', {
                                    className:
                                      'w-4 h-4 fill-current text-slate-500 shrink-0',
                                    viewBox: '0 0 16 16',
                                    children: e('path', {
                                      d: 'M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z',
                                    }),
                                  }),
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300',
                                  children: e('svg', {
                                    className:
                                      'w-4 h-4 fill-current text-rose-500 shrink-0',
                                    viewBox: '0 0 16 16',
                                    children: e('path', {
                                      d: 'M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z',
                                    }),
                                  }),
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('button', {
                                  className:
                                    'btn border-slate-200 hover:border-slate-300',
                                  children: e('svg', {
                                    className:
                                      'w-4 h-4 fill-current text-primary shrink-0',
                                    viewBox: '0 0 16 16',
                                    children: e('path', {
                                      d: 'M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z',
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Button Groups',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: t('div', {
                                  className: 'flex flex-wrap -space-x-px',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-indigo-600 text-white rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-r-transparent',
                                      children: 'Weekly',
                                    }),
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-indigo-100 rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-r-transparent',
                                      children: 'Monthly',
                                    }),
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-indigo-100 rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-r-transparent',
                                      children: 'Yearly',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: t('div', {
                                  className: 'flex flex-wrap -space-x-px',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-slate-50 border-slate-200 hover:bg-slate-50 text-primary rounded-none first:rounded-l last:rounded-r',
                                      children: 'Weekly',
                                    }),
                                    e('button', {
                                      className:
                                        'btn bg-white border-slate-200 hover:bg-slate-50 text-slate-600 rounded-none first:rounded-l last:rounded-r',
                                      children: 'Monthly',
                                    }),
                                    e('button', {
                                      className:
                                        'btn bg-white border-slate-200 hover:bg-slate-50 text-slate-600 rounded-none first:rounded-l last:rounded-r',
                                      children: 'Yearly',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function K({ children: s, className: a, bg: l, size: r, position: n }) {
  const [i, c] = o.exports.useState(!1),
    d = (p) => {
      switch (p) {
        case 'right':
          return 'left-full top-1/2 transform -translate-y-1/2';
        case 'left':
          return 'right-full top-1/2 transform -translate-y-1/2';
        case 'bottom':
          return 'top-full left-1/2 transform -translate-x-1/2';
        default:
          return 'bottom-full left-1/2 transform -translate-x-1/2';
      }
    },
    m = (p) => {
      switch (p) {
        case 'lg':
          return 'min-w-72  p-3';
        case 'md':
          return 'min-w-56 p-3';
        case 'sm':
          return 'min-w-44 p-2';
        default:
          return 'p-2';
      }
    },
    u = (p) => {
      switch (p) {
        case 'right':
          return 'ml-2';
        case 'left':
          return 'mr-2';
        case 'bottom':
          return 'mt-2';
        default:
          return 'mb-2';
      }
    };
  return t('div', {
    className: `relative ${a}`,
    onMouseEnter: () => c(!0),
    onMouseLeave: () => c(!1),
    onFocus: () => c(!0),
    onBlur: () => c(!1),
    children: [
      e('button', {
        className: 'block',
        'aria-haspopup': 'true',
        'aria-expanded': i,
        onClick: (p) => p.preventDefault(),
        children: e('svg', {
          className: 'w-4 h-4 fill-current text-slate-400',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        }),
      }),
      e('div', {
        className: `z-10 absolute ${d(n)}`,
        children: e(D, {
          show: i,
          tag: 'div',
          className: `rounded overflow-hidden ${
            l === 'dark'
              ? 'bg-slate-800'
              : 'bg-white border border-slate-200 shadow-lg'
          } ${m(r)} ${u(n)}`,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: s,
        }),
      }),
    ],
  });
}
function vn() {
  const [s, a] = o.exports.useState(!1),
    [l, r] = o.exports.useState(!0),
    [n, i] = o.exports.useState(!1),
    [c, d] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Form \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Input Types',
                          }),
                          t('div', {
                            className: 'grid gap-5 md:grid-cols-3',
                            children: [
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'default',
                                      children: 'Default',
                                    }),
                                    e('input', {
                                      id: 'default',
                                      className: 'form-input w-full',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('div', {
                                      className:
                                        'flex items-center justify-between',
                                      children: [
                                        e('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          htmlFor: 'tooltip',
                                          children: 'W/ Tooltip',
                                        }),
                                        e(K, {
                                          className: 'ml-2',
                                          bg: 'dark',
                                          size: 'md',
                                          children: e('div', {
                                            className: 'text-sm text-slate-200',
                                            children:
                                              'Excepteur sint occaecat cupidata non proident, sunt.',
                                          }),
                                        }),
                                      ],
                                    }),
                                    e('input', {
                                      id: 'tooltip',
                                      className: 'form-input w-full',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'mandatory',
                                      children: [
                                        'Mandatory ',
                                        e('span', {
                                          className: 'text-rose-500',
                                          children: '*',
                                        }),
                                      ],
                                    }),
                                    e('input', {
                                      id: 'mandatory',
                                      className: 'form-input w-full',
                                      type: 'text',
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'prefix',
                                      children: 'W/ Prefix',
                                    }),
                                    t('div', {
                                      className: 'relative',
                                      children: [
                                        e('input', {
                                          id: 'prefix',
                                          className: 'form-input w-full pl-12',
                                          type: 'text',
                                        }),
                                        e('div', {
                                          className:
                                            'absolute inset-0 right-auto flex items-center pointer-events-none',
                                          children: e('span', {
                                            className:
                                              'text-sm text-slate-400 font-medium px-3',
                                            children: 'USD',
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'suffix',
                                      children: 'W/ Suffix',
                                    }),
                                    t('div', {
                                      className: 'relative',
                                      children: [
                                        e('input', {
                                          id: 'suffix',
                                          className: 'form-input w-full pr-8',
                                          type: 'text',
                                        }),
                                        e('div', {
                                          className:
                                            'absolute inset-0 left-auto flex items-center pointer-events-none',
                                          children: e('span', {
                                            className:
                                              'text-sm text-slate-400 font-medium px-3',
                                            children: '%',
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'placeholder',
                                      children: 'W/ Placeholder',
                                    }),
                                    e('input', {
                                      id: 'placeholder',
                                      className: 'form-input w-full',
                                      type: 'text',
                                      placeholder: 'Something cool...',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('form', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'icon',
                                      children: 'W/ Icon',
                                    }),
                                    t('div', {
                                      className: 'relative',
                                      children: [
                                        e('input', {
                                          id: 'icon',
                                          className: 'form-input w-full pl-9',
                                          type: 'text',
                                        }),
                                        e('div', {
                                          className:
                                            'absolute inset-0 right-auto flex items-center pointer-events-none',
                                          children: e('svg', {
                                            className:
                                              'w-4 h-4 fill-current text-slate-400 shrink-0 ml-3 mr-2',
                                            viewBox: '0 0 16 16',
                                            children: e('path', {
                                              d: 'M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z',
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('div', {
                                      children: [
                                        e('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          htmlFor: 'supporting-text',
                                          children: 'W/ Supporting Text',
                                        }),
                                        e('input', {
                                          id: 'supporting-text',
                                          className: 'form-input w-full',
                                          type: 'text',
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className: 'text-xs mt-1',
                                      children: 'Supporting text goes here!',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('form', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'form-search',
                                      children: 'Search',
                                    }),
                                    t('div', {
                                      className: 'relative',
                                      children: [
                                        e('input', {
                                          id: 'form-search',
                                          className: 'form-input w-full pl-9',
                                          type: 'search',
                                        }),
                                        e('button', {
                                          className:
                                            'absolute inset-0 right-auto group',
                                          type: 'submit',
                                          'aria-label': 'Search',
                                          children: t('svg', {
                                            className:
                                              'w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2',
                                            viewBox: '0 0 16 16',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            children: [
                                              e('path', {
                                                d: 'M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z',
                                              }),
                                              e('path', {
                                                d: 'M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Input Sizes',
                          }),
                          t('div', {
                            className: 'grid gap-5 md:grid-cols-3',
                            children: [
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'small',
                                      children: 'Small',
                                    }),
                                    e('input', {
                                      id: 'small',
                                      className: 'form-input w-full px-2 py-1',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'normal',
                                      children: 'Default',
                                    }),
                                    e('input', {
                                      id: 'normal',
                                      className: 'form-input w-full',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'large',
                                      children: 'Large',
                                    }),
                                    e('input', {
                                      id: 'large',
                                      className: 'form-input w-full px-4 py-3',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Input States',
                          }),
                          t('div', {
                            className: 'grid gap-5 md:grid-cols-3',
                            children: [
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'disabled',
                                      children: 'Disabled',
                                    }),
                                    e('input', {
                                      id: 'disabled',
                                      className:
                                        'form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed',
                                      type: 'text',
                                      placeholder: 'Something cool...',
                                      disabled: !0,
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('div', {
                                      children: [
                                        t('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          htmlFor: 'error',
                                          children: [
                                            'Error ',
                                            e('span', {
                                              className: 'text-rose-500',
                                              children: '*',
                                            }),
                                          ],
                                        }),
                                        e('input', {
                                          id: 'error',
                                          className:
                                            'form-input w-full border-rose-300',
                                          type: 'text',
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className: 'text-xs mt-1 text-rose-500',
                                      children: 'This field is required!',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('div', {
                                      children: [
                                        t('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          htmlFor: 'success',
                                          children: [
                                            'Success ',
                                            e('span', {
                                              className: 'text-rose-500',
                                              children: '*',
                                            }),
                                          ],
                                        }),
                                        e('input', {
                                          id: 'success',
                                          className:
                                            'form-input w-full border-emerald-300',
                                          type: 'text',
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className:
                                        'text-xs mt-1 text-emerald-500',
                                      children: 'Sounds good!',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Select',
                          }),
                          e('label', {
                            className: 'block text-sm font-medium mb-1',
                            htmlFor: 'country',
                            children: 'Country',
                          }),
                          t('select', {
                            id: 'country',
                            className: 'form-select',
                            children: [
                              e('option', { children: 'Italy' }),
                              e('option', { children: 'USA' }),
                              e('option', { children: 'United Kingdom' }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Checkbox',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-3',
                            children: [
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'checkbox',
                                      className: 'form-checkbox',
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Active',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'checkbox',
                                      className: 'form-checkbox',
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Selected',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'checkbox',
                                      className:
                                        'form-checkbox disabled:bg-slate-50',
                                      disabled: !0,
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Disabled',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Radio',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-3',
                            children: [
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'radio',
                                      name: 'radio-buttons',
                                      className: 'form-radio',
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Active',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'radio',
                                      name: 'radio-buttons',
                                      className: 'form-radio',
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Selected',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'radio',
                                      name: 'radio-buttons',
                                      className:
                                        'form-radio disabled:bg-slate-50',
                                      disabled: !0,
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Disabled',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Toggle Switch',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-3',
                            children: [
                              e('div', {
                                className: 'm-3 w-24',
                                children: t('div', {
                                  className: 'flex items-center',
                                  children: [
                                    t('div', {
                                      className: 'form-switch',
                                      children: [
                                        e('input', {
                                          type: 'checkbox',
                                          id: 'switch-1',
                                          className: 'sr-only',
                                          checked: l,
                                          onChange: () => r(!l),
                                        }),
                                        t('label', {
                                          className: 'bg-slate-400',
                                          htmlFor: 'switch-1',
                                          children: [
                                            e('span', {
                                              className: 'bg-white shadow-sm',
                                              'aria-hidden': 'true',
                                            }),
                                            e('span', {
                                              className: 'sr-only',
                                              children: 'Switch label',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm text-slate-400 italic ml-2',
                                      children: l ? 'On' : 'Off',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3 w-24',
                                children: t('div', {
                                  className: 'flex items-center',
                                  children: [
                                    t('div', {
                                      className: 'form-switch',
                                      children: [
                                        e('input', {
                                          type: 'checkbox',
                                          id: 'switch-2',
                                          className: 'sr-only',
                                          checked: n,
                                          onChange: () => i(!n),
                                        }),
                                        t('label', {
                                          className: 'bg-slate-400',
                                          htmlFor: 'switch-2',
                                          children: [
                                            e('span', {
                                              className: 'bg-white shadow-sm',
                                              'aria-hidden': 'true',
                                            }),
                                            e('span', {
                                              className: 'sr-only',
                                              children: 'Switch label',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm text-slate-400 italic ml-2',
                                      children: n ? 'On' : 'Off',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3 w-32',
                                children: t('div', {
                                  className: 'flex items-center',
                                  children: [
                                    t('div', {
                                      className: 'form-switch',
                                      children: [
                                        e('input', {
                                          type: 'checkbox',
                                          id: 'switch-3',
                                          className: 'sr-only',
                                          checked: c,
                                          onChange: () => d(!c),
                                          disabled: !0,
                                        }),
                                        t('label', {
                                          className: 'bg-slate-400',
                                          htmlFor: 'switch-3',
                                          children: [
                                            e('span', {
                                              className: 'bg-white shadow-sm',
                                              'aria-hidden': 'true',
                                            }),
                                            e('span', {
                                              className: 'sr-only',
                                              children: 'Switch label',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm text-slate-400 italic ml-2',
                                      children: 'Disabled',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function gn({ options: s }) {
  const [a, l] = o.exports.useState(!1),
    [r, n] = o.exports.useState(2),
    i = o.exports.useRef(null),
    c = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const d = ({ target: m }) => {
        !c.current ||
          !a ||
          c.current.contains(m) ||
          i.current.contains(m) ||
          l(!1);
      };
      return (
        document.addEventListener('click', d),
        () => document.removeEventListener('click', d)
      );
    }),
    o.exports.useEffect(() => {
      const d = ({ keyCode: m }) => {
        !a || m !== 27 || l(!1);
      };
      return (
        document.addEventListener('keydown', d),
        () => document.removeEventListener('keydown', d)
      );
    }),
    t('div', {
      className: 'relative inline-flex',
      children: [
        t('button', {
          ref: i,
          className:
            ' flex justify-center items-center space-x-5 w-14  bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
          'aria-label': 'Select date range',
          'aria-haspopup': 'true',
          onClick: () => l(!a),
          'aria-expanded': a,
          children: [
            e('span', {
              className: 'flex items-center',
              children: e('span', { children: s[r].period }),
            }),
            e('svg', {
              className: 'shrink-0 ml-1 fill-current text-slate-400',
              width: '11',
              height: '7',
              viewBox: '0 0 11 7',
              children: e('path', {
                d: 'M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z',
              }),
            }),
          ],
        }),
        e(D, {
          show: a,
          tag: 'div',
          className:
            'z-10 absolute top-full left-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1',
          enter: 'transition ease-out duration-100 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: e('div', {
            ref: c,
            className: 'font-medium text-sm text-slate-600',
            onFocus: () => l(!0),
            onBlur: () => l(!1),
            children: s.map((d) =>
              t(
                'button',
                {
                  tabIndex: '0',
                  className: `flex items-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer ${
                    d.id === r && 'text-primary'
                  }`,
                  onClick: () => {
                    n(d.id), l(!1);
                  },
                  children: [
                    e('svg', {
                      className: `shrink-0 mr-2 fill-current text-primary ${
                        d.id !== r && 'invisible'
                      }`,
                      width: '12',
                      height: '9',
                      viewBox: '0 0 12 9',
                      children: e('path', {
                        d: 'M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z',
                      }),
                    }),
                    e('span', { children: d.period }),
                  ],
                },
                d.id
              )
            ),
          }),
        }),
      ],
    })
  );
}
function Nn({ options: s }) {
  const [a, l] = o.exports.useState(!1),
    [r, n] = o.exports.useState(0),
    i = o.exports.useRef(null),
    c = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const d = ({ target: m }) => {
        !c.current ||
          !a ||
          c.current.contains(m) ||
          i.current.contains(m) ||
          l(!1);
      };
      return (
        document.addEventListener('click', d),
        () => document.removeEventListener('click', d)
      );
    }),
    o.exports.useEffect(() => {
      const d = ({ keyCode: m }) => {
        !a || m !== 27 || l(!1);
      };
      return (
        document.addEventListener('keydown', d),
        () => document.removeEventListener('keydown', d)
      );
    }),
    t('div', {
      className: 'relative inline-flex w-full text-textTableItem',
      children: [
        t('button', {
          ref: i,
          className:
            ' w-full flex justify-center space-x-16 items-center min-w-44',
          'aria-label': 'Select date range',
          'aria-haspopup': 'true',
          onClick: () => l(!a),
          'aria-expanded': a,
          children: [
            e('span', {
              className: 'flex items-center',
              children: e('span', { children: s[r].period }),
            }),
            e('svg', {
              className: 'shrink-0 ml-1 fill-current text-slate-400',
              width: '11',
              height: '7',
              viewBox: '0 0 11 7',
              children: e('path', {
                d: 'M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z',
              }),
            }),
          ],
        }),
        e(D, {
          show: a,
          tag: 'div',
          className:
            'z-10 absolute top-full left-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1',
          enter: 'transition ease-out duration-100 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: e('div', {
            ref: c,
            className:
              'font-medium text-sm text-slate-600 divide-y divide-slate-200',
            onFocus: () => l(!0),
            onBlur: () => l(!1),
            children: s.map((d) =>
              t(
                'button',
                {
                  tabIndex: '0',
                  className: `flex items-center justify-between w-full hover:bg-slate-50 py-2 px-3 cursor-pointer ${
                    d.id === r && 'text-primary'
                  }`,
                  onClick: () => {
                    n(d.id), l(!1);
                  },
                  children: [
                    e('span', { children: d.period }),
                    e('svg', {
                      className: `shrink-0 mr-2 fill-current text-primary ${
                        d.id !== r && 'invisible'
                      }`,
                      width: '12',
                      height: '9',
                      viewBox: '0 0 12 9',
                      children: e('path', {
                        d: 'M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z',
                      }),
                    }),
                  ],
                },
                d.id
              )
            ),
          }),
        }),
      ],
    })
  );
}
function wn({ align: s }) {
  const [a, l] = o.exports.useState(!1),
    r = o.exports.useRef(null),
    n = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const i = ({ target: c }) => {
        !n.current ||
          !a ||
          n.current.contains(c) ||
          r.current.contains(c) ||
          l(!1);
      };
      return (
        document.addEventListener('click', i),
        () => document.removeEventListener('click', i)
      );
    }),
    o.exports.useEffect(() => {
      const i = ({ keyCode: c }) => {
        !a || c !== 27 || l(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }),
    t('div', {
      className: 'relative inline-flex',
      children: [
        t('button', {
          ref: r,
          className:
            'btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
          'aria-haspopup': 'true',
          onClick: () => l(!a),
          'aria-expanded': a,
          children: [
            e('span', { className: 'sr-only', children: 'Filter' }),
            e('wbr', {}),
            e('svg', {
              className: 'w-4 h-4 fill-current',
              viewBox: '0 0 16 16',
              children: e('path', {
                d: 'M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z',
              }),
            }),
          ],
        }),
        e(D, {
          show: a,
          tag: 'div',
          className: `origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            s === 'right' ? 'right-0' : 'left-0'
          }`,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('div', {
            ref: n,
            children: [
              e('div', {
                className:
                  'text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4',
                children: 'Filters',
              }),
              t('ul', {
                className: 'mb-4',
                children: [
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Direct VS Indirect',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Real Time Value',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Top Channels',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Sales VS Refunds',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Last Order',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Total Spent',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e('div', {
                className: 'py-2 px-3 border-t border-slate-200 bg-slate-50',
                children: t('ul', {
                  className: 'flex items-center justify-between',
                  children: [
                    e('li', {
                      children: e('button', {
                        className:
                          'btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
                        children: 'Clear',
                      }),
                    }),
                    e('li', {
                      children: e('button', {
                        className:
                          'btn-xs bg-primary hover:bg-indigo-600 text-white',
                        onClick: () => l(!1),
                        onBlur: () => l(!1),
                        children: 'Apply',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function yn({ align: s }) {
  const [a, l] = o.exports.useState(!1),
    r = o.exports.useRef(null),
    n = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const i = ({ target: c }) => {
        !n.current ||
          !a ||
          n.current.contains(c) ||
          r.current.contains(c) ||
          l(!1);
      };
      return (
        document.addEventListener('click', i),
        () => document.removeEventListener('click', i)
      );
    }),
    o.exports.useEffect(() => {
      const i = ({ keyCode: c }) => {
        !a || c !== 27 || l(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }),
    t('div', {
      className: 'relative',
      children: [
        t('button', {
          ref: r,
          className: 'grow flex items-center truncate',
          'aria-haspopup': 'true',
          onClick: () => l(!a),
          'aria-expanded': a,
          children: [
            e('div', {
              className: 'truncate',
              children: e('span', {
                className: 'text-sm font-medium',
                children: 'Acme Inc.',
              }),
            }),
            e('svg', {
              className: 'w-3 h-3 shrink-0 ml-1 fill-current text-slate-400',
              viewBox: '0 0 12 12',
              children: e('path', {
                d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
              }),
            }),
          ],
        }),
        e(D, {
          className: `origin-top-right z-10 absolute top-full min-w-60 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            s === 'right' ? 'right-0' : 'left-0'
          }`,
          show: a,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('ul', {
            ref: n,
            onFocus: () => l(!0),
            onBlur: () => l(!1),
            children: [
              e('li', {
                children: e('a', {
                  className:
                    'font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3',
                  href: '#0',
                  onClick: () => l(!1),
                  children: t('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      e('div', {
                        className: 'grow flex items-center truncate',
                        children: e('div', {
                          className: 'truncate',
                          children: 'Acme Inc.',
                        }),
                      }),
                      e('svg', {
                        className:
                          'w-3 h-3 shrink-0 fill-current text-primary ml-1',
                        viewBox: '0 0 12 12',
                        children: e('path', {
                          d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              e('li', {
                children: e('a', {
                  className:
                    'font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3',
                  href: '#0',
                  onClick: () => l(!1),
                  children: e('div', {
                    className: 'flex items-center justify-between',
                    children: e('div', {
                      className: 'grow flex items-center truncate',
                      children: e('div', {
                        className: 'truncate',
                        children: 'Acme Limited',
                      }),
                    }),
                  }),
                }),
              }),
              e('li', {
                children: e('a', {
                  className:
                    'font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3',
                  href: '#0',
                  onClick: () => l(!1),
                  children: e('div', {
                    className: 'flex items-center justify-between',
                    children: e('div', {
                      className: 'grow flex items-center truncate',
                      children: e('div', {
                        className: 'truncate',
                        children: 'Acme Srl',
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function kn() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Dropdown \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8 mb-80',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Classic Dropdown',
                          }),
                          e(gn, {}),
                        ],
                      }),
                      t('div', {
                        className: 'w-80',
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Full-width Dropdown',
                          }),
                          e(Nn, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Filter',
                          }),
                          e(wn, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Profile',
                          }),
                          e(gt, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Switch Account',
                          }),
                          e(yn, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Help Center',
                          }),
                          e(xt, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Quick Selection',
                          }),
                          t(ns, {
                            className: 'relative inline-flex',
                            children: [
                              e('li', {
                                children: e('a', {
                                  className:
                                    'font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3',
                                  href: '#0',
                                  children: 'Option 1',
                                }),
                              }),
                              e('li', {
                                children: e('a', {
                                  className:
                                    'font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3',
                                  href: '#0',
                                  children: 'Option 2',
                                }),
                              }),
                              e('li', {
                                children: e('a', {
                                  className:
                                    'font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3',
                                  href: '#0',
                                  children: 'Remove',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          t('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: [
                              'Datepicker (built with',
                              ' ',
                              e('a', {
                                className: 'underline hover:no-underline',
                                href: 'https://github.com/flatpickr/flatpickr',
                                target: '_blank',
                                rel: 'noreferrer',
                                children: 'flatpickr',
                              }),
                              ')',
                            ],
                          }),
                          e(rt, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function je({ children: s, className: a, type: l, open: r, setOpen: n }) {
  const i = (d) => {
    switch (d) {
      case 'warning':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        });
      case 'error':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        });
      case 'success':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        });
      default:
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
          }),
        });
    }
  };
  return e(C, {
    children:
      r &&
      e('div', {
        className: a,
        children: e('div', {
          className: `px-4 py-2 rounded-sm text-sm text-white ${((d) => {
            switch (d) {
              case 'warning':
                return 'bg-amber-500';
              case 'error':
                return 'bg-rose-500';
              case 'success':
                return 'bg-emerald-500';
              default:
                return 'bg-primary';
            }
          })(l)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  i(l),
                  e('div', { className: 'font-medium', children: s }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => n(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function Re({ children: s, className: a, type: l, open: r, setOpen: n }) {
  const i = (d) => {
    switch (d) {
      case 'warning':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        });
      case 'error':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        });
      case 'success':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        });
      default:
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
          }),
        });
    }
  };
  return e(C, {
    children:
      r &&
      e('div', {
        className: a,
        children: e('div', {
          className: `px-4 py-2 rounded-sm text-sm border ${((d) => {
            switch (d) {
              case 'warning':
                return 'bg-amber-100 border-amber-200 text-amber-600';
              case 'error':
                return 'bg-rose-100 border-rose-200 text-rose-600';
              case 'success':
                return 'bg-emerald-100 border-emerald-200 text-emerald-600';
              default:
                return 'bg-indigo-100 border-indigo-200 text-primary';
            }
          })(l)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [i(l), e('div', { children: s })],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => n(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function Te({ children: s, className: a, type: l, open: r, setOpen: n }) {
  const i = (d) => {
    switch (d) {
      case 'warning':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        });
      case 'error':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        });
      case 'success':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        });
      default:
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
          }),
        });
    }
  };
  return e(C, {
    children:
      r &&
      e('div', {
        className: a,
        children: e('div', {
          className: `inline-flex min-w-80 px-4 py-2 rounded-sm text-sm text-white ${((
            d
          ) => {
            switch (d) {
              case 'warning':
                return 'bg-amber-500';
              case 'error':
                return 'bg-rose-500';
              case 'success':
                return 'bg-emerald-500';
              default:
                return 'bg-primary';
            }
          })(l)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  i(l),
                  e('div', { className: 'font-medium', children: s }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => n(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function He({ children: s, className: a, type: l, open: r, setOpen: n }) {
  const i = (d) => {
    switch (d) {
      case 'warning':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        });
      case 'error':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        });
      case 'success':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        });
      default:
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
          }),
        });
    }
  };
  return e(C, {
    children:
      r &&
      e('div', {
        className: a,
        children: e('div', {
          className: `inline-flex min-w-80 px-4 py-2 rounded-sm text-sm border ${((
            d
          ) => {
            switch (d) {
              case 'warning':
                return 'bg-amber-100 border-amber-200 text-amber-600';
              case 'error':
                return 'bg-rose-100 border-rose-200 text-rose-600';
              case 'success':
                return 'bg-emerald-100 border-emerald-200 text-emerald-600';
              default:
                return 'bg-indigo-100 border-indigo-200 text-primary';
            }
          })(l)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [i(l), e('div', { children: s })],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => n(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function $e({ children: s, className: a, type: l, open: r, setOpen: n }) {
  return e(C, {
    children:
      r &&
      e('div', {
        className: a,
        children: e('div', {
          className:
            'inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-white shadow-lg border border-slate-200 text-slate-600',
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  ((c) => {
                    switch (c) {
                      case 'warning':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-amber-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                          }),
                        });
                      case 'error':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-rose-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                          }),
                        });
                      case 'success':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-emerald-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
                          }),
                        });
                      default:
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-primary mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
                          }),
                        });
                    }
                  })(l),
                  e('div', { children: s }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => n(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function qe({ children: s, className: a, type: l, open: r, setOpen: n }) {
  return e(C, {
    children:
      r &&
      e('div', {
        className: a,
        children: t('div', {
          className:
            'inline-flex flex-col max-w-lg px-4 py-2 rounded-sm text-sm bg-white shadow-lg border border-slate-200 text-slate-600',
          children: [
            t('div', {
              className: 'flex w-full justify-between items-start',
              children: [
                t('div', {
                  className: 'flex',
                  children: [
                    ((c) => {
                      switch (c) {
                        case 'warning':
                          return e('svg', {
                            className:
                              'w-4 h-4 shrink-0 fill-current text-amber-500 mt-[3px] mr-3',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                            }),
                          });
                        case 'error':
                          return e('svg', {
                            className:
                              'w-4 h-4 shrink-0 fill-current text-rose-500 mt-[3px] mr-3',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                            }),
                          });
                        case 'success':
                          return e('svg', {
                            className:
                              'w-4 h-4 shrink-0 fill-current text-emerald-500 mt-[3px] mr-3',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
                            }),
                          });
                        default:
                          return e('svg', {
                            className:
                              'w-4 h-4 shrink-0 fill-current text-primary mt-[3px] mr-3',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
                            }),
                          });
                      }
                    })(l),
                    e('div', { children: s }),
                  ],
                }),
                t('button', {
                  className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                  onClick: () => n(!1),
                  children: [
                    e('div', { className: 'sr-only', children: 'Close' }),
                    e('svg', {
                      className: 'w-4 h-4 fill-current',
                      children: e('path', {
                        d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e('div', {
              className: 'text-right mt-1',
              children: e('a', {
                className: 'font-medium text-primary hover:text-indigo-600',
                href: '#0',
                children: 'Action ->',
              }),
            }),
          ],
        }),
      }),
  });
}
function Sn() {
  const [s, a] = o.exports.useState(!1),
    [l, r] = o.exports.useState(!0),
    [n, i] = o.exports.useState(!0),
    [c, d] = o.exports.useState(!0),
    [m, u] = o.exports.useState(!0),
    [p, h] = o.exports.useState(!0),
    [f, x] = o.exports.useState(!0),
    [b, g] = o.exports.useState(!0),
    [E, M] = o.exports.useState(!0),
    [N, S] = o.exports.useState(!0),
    [L, O] = o.exports.useState(!0),
    [R, I] = o.exports.useState(!0),
    [j, B] = o.exports.useState(!0),
    [w, Ve] = o.exports.useState(!0),
    [Ge, Ue] = o.exports.useState(!0),
    [F, T] = o.exports.useState(!0),
    [q, ee] = o.exports.useState(!0),
    [re, pe] = o.exports.useState(!0),
    [J, ds] = o.exports.useState(!0),
    [ms, ps] = o.exports.useState(!0),
    [us, hs] = o.exports.useState(!0),
    [xs, fs] = o.exports.useState(!0),
    [bs, vs] = o.exports.useState(!0),
    [gs, Ns] = o.exports.useState(!0),
    [ws, ys] = o.exports.useState(!0);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Alert & Banner \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Banner',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(je, {
                                type: 'warning',
                                open: l,
                                setOpen: r,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(je, {
                                type: 'success',
                                open: c,
                                setOpen: d,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(je, {
                                type: 'error',
                                open: n,
                                setOpen: i,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(je, {
                                open: m,
                                setOpen: u,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Banner 2',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(Re, {
                                type: 'warning',
                                open: p,
                                setOpen: h,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(Re, {
                                type: 'success',
                                open: b,
                                setOpen: g,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(Re, {
                                type: 'error',
                                open: f,
                                setOpen: x,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(Re, {
                                open: E,
                                setOpen: M,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Toast',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(Te, {
                                type: 'warning',
                                open: N,
                                setOpen: S,
                                children: 'A warning toast.',
                              }),
                              e(Te, {
                                type: 'success',
                                open: R,
                                setOpen: I,
                                children: 'A successful toast.',
                              }),
                              e(Te, {
                                type: 'error',
                                open: L,
                                setOpen: O,
                                children: 'A dangerous toast.',
                              }),
                              e(Te, {
                                open: j,
                                setOpen: B,
                                children: 'An informational toast.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Toast 2',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(He, {
                                type: 'warning',
                                open: w,
                                setOpen: Ve,
                                children: 'A warning toast.',
                              }),
                              e(He, {
                                type: 'success',
                                open: F,
                                setOpen: T,
                                children: 'A successful toast.',
                              }),
                              e(He, {
                                type: 'error',
                                open: Ge,
                                setOpen: Ue,
                                children: 'A dangerous toast.',
                              }),
                              e(He, {
                                open: q,
                                setOpen: ee,
                                children: 'An informational toast.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Toast 3',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e($e, {
                                type: 'warning',
                                open: re,
                                setOpen: pe,
                                children: 'A warning toast.',
                              }),
                              e($e, {
                                type: 'success',
                                open: ms,
                                setOpen: ps,
                                children: 'A successful toast.',
                              }),
                              e($e, {
                                type: 'error',
                                open: J,
                                setOpen: ds,
                                children: 'A dangerous toast.',
                              }),
                              e($e, {
                                open: us,
                                setOpen: hs,
                                children: 'An informational toast.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Notification',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              t(qe, {
                                type: 'warning',
                                open: xs,
                                setOpen: fs,
                                children: [
                                  e('div', {
                                    className:
                                      'font-medium text-slate-800 mb-1',
                                    children: 'Merged Pull Request',
                                  }),
                                  e('div', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.',
                                  }),
                                ],
                              }),
                              t(qe, {
                                type: 'success',
                                open: gs,
                                setOpen: Ns,
                                children: [
                                  e('div', {
                                    className:
                                      'font-medium text-slate-800 mb-1',
                                    children: 'Merged Pull Request',
                                  }),
                                  e('div', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.',
                                  }),
                                ],
                              }),
                              t(qe, {
                                type: 'error',
                                open: bs,
                                setOpen: vs,
                                children: [
                                  e('div', {
                                    className:
                                      'font-medium text-slate-800 mb-1',
                                    children: 'Merged Pull Request',
                                  }),
                                  e('div', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.',
                                  }),
                                ],
                              }),
                              t(qe, {
                                open: ws,
                                setOpen: ys,
                                children: [
                                  e('div', {
                                    className:
                                      'font-medium text-slate-800 mb-1',
                                    children: 'Merged Pull Request',
                                  }),
                                  e('div', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Cn({ children: s, id: a, title: l, modalOpen: r, setModalOpen: n }) {
  const i = o.exports.useRef(null);
  return (
    o.exports.useEffect(() => {
      const c = ({ target: d }) => {
        !r || i.current.contains(d) || n(!1);
      };
      return (
        document.addEventListener('click', c),
        () => document.removeEventListener('click', c)
      );
    }),
    o.exports.useEffect(() => {
      const c = ({ keyCode: d }) => {
        !r || d !== 27 || n(!1);
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
      );
    }),
    t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: r,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: a,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: r,
          enter: 'transition ease-in-out duration-200',
          enterStart: 'opacity-0 translate-y-4',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-in-out duration-200',
          leaveStart: 'opacity-100 translate-y-0',
          leaveEnd: 'opacity-0 translate-y-4',
          children: e('div', {
            ref: i,
            className:
              'bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full',
            children: t('div', {
              className: 'p-5',
              children: [
                e('div', {
                  className: 'mb-2',
                  children: t('div', {
                    className: 'flex justify-between items-center',
                    children: [
                      e('div', {
                        className: 'text-lg font-semibold text-slate-800',
                        children: l,
                      }),
                      t('button', {
                        className: 'text-slate-400 hover:text-slate-500',
                        onClick: (c) => {
                          c.stopPropagation(), n(!1);
                        },
                        children: [
                          e('div', { className: 'sr-only', children: 'Close' }),
                          e('svg', {
                            className: 'w-4 h-4 fill-current',
                            children: e('path', {
                              d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                s,
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function En() {
  const [s, a] = o.exports.useState(!1),
    [l, r] = o.exports.useState(!1),
    [n, i] = o.exports.useState(!1),
    [c, d] = o.exports.useState(!1),
    [m, u] = o.exports.useState(!1),
    [p, h] = o.exports.useState(!1),
    [f, x] = o.exports.useState(!1),
    [b, g] = o.exports.useState(!1),
    [E, M] = o.exports.useState(!1),
    [N, S] = o.exports.useState(!1),
    [L, O] = o.exports.useState(!1),
    [R, I] = o.exports.useState(!1),
    [j, B] = o.exports.useState(!1);
  return (
    o.exports.useState(!1),
    t('div', {
      className: 'flex h-screen overflow-hidden',
      children: [
        e(W, { sidebarOpen: s, setSidebarOpen: a }),
        t('div', {
          className:
            'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
          children: [
            e(Z, { sidebarOpen: s, setSidebarOpen: a }),
            e('main', {
              children: t('div', {
                className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
                children: [
                  e('div', {
                    className: 'mb-8',
                    children: e('h1', {
                      className:
                        'text-2xl md:text-3xl text-slate-800 font-bold',
                      children: 'Modal \u2728',
                    }),
                  }),
                  e('div', {
                    className: 'border-t border-slate-200',
                    children: t('div', {
                      className: 'space-y-8 mt-8',
                      children: [
                        t('div', {
                          children: [
                            e('h2', {
                              className:
                                'text-2xl text-slate-800 font-bold mb-6',
                              children: 'Basic',
                            }),
                            t('div', {
                              className: 'flex flex-wrap items-center -m-1.5',
                              children: [
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'basic-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), r(!0);
                                      },
                                      children: 'Basic Modal',
                                    }),
                                    t(ie, {
                                      id: 'basic-modal',
                                      modalOpen: l,
                                      setModalOpen: r,
                                      title: 'Basic Modal',
                                      children: [
                                        e('div', {
                                          className: 'px-5 pt-4 pb-1',
                                          children: t('div', {
                                            className: 'text-sm',
                                            children: [
                                              e('div', {
                                                className:
                                                  'font-medium text-slate-800 mb-2',
                                                children:
                                                  'Let\u2019s Talk Paragraph',
                                              }),
                                              t('div', {
                                                className: 'space-y-2',
                                                children: [
                                                  e('p', {
                                                    children:
                                                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        e('div', {
                                          className: 'px-5 py-4',
                                          children: t('div', {
                                            className:
                                              'flex flex-wrap justify-end space-x-2',
                                            children: [
                                              e('button', {
                                                className:
                                                  'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                onClick: (w) => {
                                                  w.stopPropagation(), r(!1);
                                                },
                                                children: 'Close',
                                              }),
                                              e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                children: 'I Understand',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'scrollbar-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), i(!0);
                                      },
                                      children: 'Modal w/ Scroll Bar',
                                    }),
                                    t(ie, {
                                      id: 'scrollbar-modal',
                                      modalOpen: n,
                                      setModalOpen: i,
                                      title: 'Modal w/ Scroll Bar',
                                      children: [
                                        e('div', {
                                          className: 'px-5 py-4',
                                          children: t('div', {
                                            className: 'text-sm',
                                            children: [
                                              e('div', {
                                                className:
                                                  'font-medium text-slate-800 mb-2',
                                                children:
                                                  'Let\u2019s Talk Paragraph',
                                              }),
                                              t('div', {
                                                className: 'space-y-2',
                                                children: [
                                                  e('p', {
                                                    children:
                                                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non.',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        e('div', {
                                          className:
                                            'sticky bottom-0 px-5 py-4 bg-white border-t border-slate-200',
                                          children: t('div', {
                                            className:
                                              'flex flex-wrap justify-end space-x-2',
                                            children: [
                                              e('button', {
                                                className:
                                                  'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                onClick: (w) => {
                                                  w.stopPropagation(), i(!1);
                                                },
                                                children: 'Close',
                                              }),
                                              e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                children: 'I Understand',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'cookies-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), d(!0);
                                      },
                                      children: 'Cookies',
                                    }),
                                    t(Cn, {
                                      id: 'cookies-modal',
                                      modalOpen: c,
                                      setModalOpen: d,
                                      title: 'We use cookies \u{1F36A}',
                                      children: [
                                        e('div', {
                                          className: 'text-sm mb-5',
                                          children: t('div', {
                                            className: 'space-y-2',
                                            children: [
                                              e('p', {
                                                children:
                                                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                              }),
                                              e('p', {
                                                children:
                                                  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                              }),
                                            ],
                                          }),
                                        }),
                                        t('div', {
                                          className:
                                            'flex flex-wrap justify-end space-x-2',
                                          children: [
                                            e('button', {
                                              className:
                                                'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                              onClick: (w) => {
                                                w.stopPropagation(), d(!1);
                                              },
                                              children: 'Decline',
                                            }),
                                            e('button', {
                                              className:
                                                'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                              onClick: (w) => {
                                                w.stopPropagation(), d(!1);
                                              },
                                              children: 'I Accept',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        t('div', {
                          children: [
                            e('h2', {
                              className:
                                'text-2xl text-slate-800 font-bold mb-6',
                              children: 'Feedback',
                            }),
                            t('div', {
                              className: 'flex flex-wrap items-center -m-1.5',
                              children: [
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'success-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), u(!0);
                                      },
                                      children: 'Success Modal',
                                    }),
                                    e(le, {
                                      id: 'success-modal',
                                      modalOpen: m,
                                      setModalOpen: u,
                                      children: t('div', {
                                        className: 'p-5 flex space-x-4',
                                        children: [
                                          e('div', {
                                            className:
                                              'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-emerald-100',
                                            children: e('svg', {
                                              className:
                                                'w-4 h-4 shrink-0 fill-current text-emerald-500',
                                              viewBox: '0 0 16 16',
                                              children: e('path', {
                                                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
                                              }),
                                            }),
                                          }),
                                          t('div', {
                                            children: [
                                              e('div', {
                                                className: 'mb-2',
                                                children: e('div', {
                                                  className:
                                                    'text-lg font-semibold text-slate-800',
                                                  children:
                                                    'Upgrade your Subscription?',
                                                }),
                                              }),
                                              e('div', {
                                                className: 'text-sm mb-10',
                                                children: e('div', {
                                                  className: 'space-y-2',
                                                  children: e('p', {
                                                    children:
                                                      'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                                  }),
                                                }),
                                              }),
                                              t('div', {
                                                className:
                                                  'flex flex-wrap justify-end space-x-2',
                                                children: [
                                                  e('button', {
                                                    className:
                                                      'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                    onClick: (w) => {
                                                      w.stopPropagation(),
                                                        u(!1);
                                                    },
                                                    children: 'Cancel',
                                                  }),
                                                  e('button', {
                                                    className:
                                                      'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                    children: 'Yes, Upgrade it',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'danger-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), h(!0);
                                      },
                                      children: 'Danger Modal',
                                    }),
                                    e(le, {
                                      id: 'danger-modal',
                                      modalOpen: p,
                                      setModalOpen: h,
                                      children: t('div', {
                                        className: 'p-5 flex space-x-4',
                                        children: [
                                          e('div', {
                                            className:
                                              'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100',
                                            children: e('svg', {
                                              className:
                                                'w-4 h-4 shrink-0 fill-current text-rose-500',
                                              viewBox: '0 0 16 16',
                                              children: e('path', {
                                                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                                              }),
                                            }),
                                          }),
                                          t('div', {
                                            children: [
                                              e('div', {
                                                className: 'mb-2',
                                                children: e('div', {
                                                  className:
                                                    'text-lg font-semibold text-slate-800',
                                                  children:
                                                    'Delete 1 customer?',
                                                }),
                                              }),
                                              e('div', {
                                                className: 'text-sm mb-10',
                                                children: e('div', {
                                                  className: 'space-y-2',
                                                  children: e('p', {
                                                    children:
                                                      'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                                  }),
                                                }),
                                              }),
                                              t('div', {
                                                className:
                                                  'flex flex-wrap justify-end space-x-2',
                                                children: [
                                                  e('button', {
                                                    className:
                                                      'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                    onClick: (w) => {
                                                      w.stopPropagation(),
                                                        h(!1);
                                                    },
                                                    children: 'Cancel',
                                                  }),
                                                  e('button', {
                                                    className:
                                                      'btn-sm bg-rose-500 hover:bg-rose-600 text-white',
                                                    children: 'Yes, Delete it',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'info-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), x(!0);
                                      },
                                      children: 'Info Modal',
                                    }),
                                    e(le, {
                                      id: 'info-modal',
                                      modalOpen: f,
                                      setModalOpen: x,
                                      children: t('div', {
                                        className: 'p-5 flex space-x-4',
                                        children: [
                                          e('div', {
                                            className:
                                              'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-100',
                                            children: e('svg', {
                                              className:
                                                'w-4 h-4 shrink-0 fill-current text-primary',
                                              viewBox: '0 0 16 16',
                                              children: e('path', {
                                                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
                                              }),
                                            }),
                                          }),
                                          t('div', {
                                            children: [
                                              e('div', {
                                                className: 'mb-2',
                                                children: e('div', {
                                                  className:
                                                    'text-lg font-semibold text-slate-800',
                                                  children: 'Create new Event?',
                                                }),
                                              }),
                                              e('div', {
                                                className: 'text-sm mb-10',
                                                children: e('div', {
                                                  className: 'space-y-2',
                                                  children: e('p', {
                                                    children:
                                                      'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                                  }),
                                                }),
                                              }),
                                              t('div', {
                                                className:
                                                  'flex flex-wrap justify-end space-x-2',
                                                children: [
                                                  e('button', {
                                                    className:
                                                      'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                    onClick: (w) => {
                                                      w.stopPropagation(),
                                                        x(!1);
                                                    },
                                                    children: 'Cancel',
                                                  }),
                                                  e('button', {
                                                    className:
                                                      'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                    children: 'Yes, Create it',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        t('div', {
                          children: [
                            e('h2', {
                              className:
                                'text-2xl text-slate-800 font-bold mb-6',
                              children: 'Product',
                            }),
                            t('div', {
                              className: 'flex flex-wrap items-center -m-1.5',
                              children: [
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'feedback-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), g(!0);
                                      },
                                      children: 'Send Feedback',
                                    }),
                                    t(ie, {
                                      id: 'feedback-modal',
                                      modalOpen: b,
                                      setModalOpen: g,
                                      title: 'Send Feedback',
                                      children: [
                                        t('div', {
                                          className: 'px-5 py-4',
                                          children: [
                                            e('div', {
                                              className: 'text-sm',
                                              children: e('div', {
                                                className:
                                                  'font-medium text-slate-800 mb-3',
                                                children:
                                                  'Let us know what you think \u{1F64C}',
                                              }),
                                            }),
                                            t('div', {
                                              className: 'space-y-3',
                                              children: [
                                                t('div', {
                                                  children: [
                                                    t('label', {
                                                      className:
                                                        'block text-sm font-medium mb-1',
                                                      htmlFor: 'name',
                                                      children: [
                                                        'Name ',
                                                        e('span', {
                                                          className:
                                                            'text-rose-500',
                                                          children: '*',
                                                        }),
                                                      ],
                                                    }),
                                                    e('input', {
                                                      id: 'name',
                                                      className:
                                                        'form-input w-full px-2 py-1',
                                                      type: 'text',
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                                t('div', {
                                                  children: [
                                                    t('label', {
                                                      className:
                                                        'block text-sm font-medium mb-1',
                                                      htmlFor: 'email',
                                                      children: [
                                                        'Email ',
                                                        e('span', {
                                                          className:
                                                            'text-rose-500',
                                                          children: '*',
                                                        }),
                                                      ],
                                                    }),
                                                    e('input', {
                                                      id: 'email',
                                                      className:
                                                        'form-input w-full px-2 py-1',
                                                      type: 'email',
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                                t('div', {
                                                  children: [
                                                    t('label', {
                                                      className:
                                                        'block text-sm font-medium mb-1',
                                                      htmlFor: 'feedback',
                                                      children: [
                                                        'Message ',
                                                        e('span', {
                                                          className:
                                                            'text-rose-500',
                                                          children: '*',
                                                        }),
                                                      ],
                                                    }),
                                                    e('textarea', {
                                                      id: 'feedback',
                                                      className:
                                                        'form-textarea w-full px-2 py-1',
                                                      rows: '4',
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e('div', {
                                          className:
                                            'px-5 py-4 border-t border-slate-200',
                                          children: t('div', {
                                            className:
                                              'flex flex-wrap justify-end space-x-2',
                                            children: [
                                              e('button', {
                                                className:
                                                  'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                onClick: (w) => {
                                                  w.stopPropagation(), g(!1);
                                                },
                                                children: 'Cancel',
                                              }),
                                              e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                children: 'Send',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'newsletter-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), M(!0);
                                      },
                                      children: 'Newsletter',
                                    }),
                                    t(Ae, {
                                      id: 'newsletter-modal',
                                      modalOpen: E,
                                      setModalOpen: M,
                                      children: [
                                        t('div', {
                                          className: 'mb-2 text-center',
                                          children: [
                                            e('div', {
                                              className: 'mb-3',
                                              children: t('svg', {
                                                className:
                                                  'inline-flex w-12 h-12 rounded-full shrink-0 fill-current',
                                                viewBox: '0 0 48 48',
                                                children: [
                                                  e('rect', {
                                                    className:
                                                      'text-indigo-100',
                                                    width: '48',
                                                    height: '48',
                                                    rx: '24',
                                                  }),
                                                  e('path', {
                                                    className:
                                                      'text-indigo-300',
                                                    d: 'M19 16h7a8 8 0 110 16h-7V16z',
                                                  }),
                                                  e('path', {
                                                    className: 'text-primary',
                                                    d: 'M26 24l-7-6v5h-8v2h8v5z',
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e('div', {
                                              className:
                                                'text-lg font-semibold text-slate-800',
                                              children:
                                                'Subscribe to the Newsletter!',
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className: 'text-center',
                                          children: [
                                            e('div', {
                                              className: 'text-sm mb-6',
                                              children:
                                                'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                            }),
                                            t('form', {
                                              className: 'flex max-w-sm m-auto',
                                              children: [
                                                t('div', {
                                                  className: 'grow mr-2',
                                                  children: [
                                                    e('label', {
                                                      htmlFor: 'subscribe-form',
                                                      className: 'sr-only',
                                                      children:
                                                        'Leave your Email',
                                                    }),
                                                    e('input', {
                                                      id: 'subscribe-form',
                                                      className:
                                                        'form-input w-full px-2 py-1',
                                                      type: 'email',
                                                    }),
                                                  ],
                                                }),
                                                e('button', {
                                                  type: 'submit',
                                                  className:
                                                    'btn-sm bg-primary hover:bg-indigo-600 text-white whitespace-nowrap',
                                                  children: 'Subscribe',
                                                }),
                                              ],
                                            }),
                                            e('div', {
                                              className:
                                                'text-xs text-slate-500 italic mt-3',
                                              children:
                                                'I respect your privacy. No spam. Unsubscribe at any time!',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'announcement-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), S(!0);
                                      },
                                      children: 'Announcement',
                                    }),
                                    t(Ae, {
                                      id: 'announcement-modal',
                                      modalOpen: N,
                                      setModalOpen: S,
                                      children: [
                                        t('div', {
                                          className: 'mb-2 text-center',
                                          children: [
                                            e('div', {
                                              className: 'inline-flex mb-2',
                                            }),
                                            e('div', {
                                              className:
                                                'text-lg font-semibold text-slate-800',
                                              children: 'You Unlocked Level 2!',
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className: 'text-center',
                                          children: [
                                            e('div', {
                                              className: 'text-sm mb-5',
                                              children:
                                                'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                            }),
                                            t('div', {
                                              className: 'space-y-3',
                                              children: [
                                                e('button', {
                                                  className:
                                                    'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                  children:
                                                    'Claim your Reward ->',
                                                }),
                                                e('div', {
                                                  children: e('a', {
                                                    className:
                                                      'font-medium text-sm text-primary hover:text-indigo-600',
                                                    href: '#0',
                                                    onClick: (w) => {
                                                      w.preventDefault(), S(!0);
                                                    },
                                                    children: 'Not Now!',
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'integration-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), O(!0);
                                      },
                                      children: 'Integration',
                                    }),
                                    t(Ae, {
                                      id: 'integration-modal',
                                      modalOpen: L,
                                      setModalOpen: O,
                                      children: [
                                        t('div', {
                                          className: 'mb-5 text-center',
                                          children: [
                                            t('div', {
                                              className:
                                                'inline-flex items-center justify-center space-x-3 mb-4',
                                              children: [
                                                t('svg', {
                                                  width: '48',
                                                  height: '48',
                                                  viewBox: '0 0 32 32',
                                                  children: [
                                                    t('defs', {
                                                      children: [
                                                        t('linearGradient', {
                                                          x1: '28.538%',
                                                          y1: '20.229%',
                                                          x2: '100%',
                                                          y2: '108.156%',
                                                          id: 'nl-a',
                                                          children: [
                                                            e('stop', {
                                                              stopColor:
                                                                '#A5B4FC',
                                                              stopOpacity: '0',
                                                              offset: '0%',
                                                            }),
                                                            e('stop', {
                                                              stopColor:
                                                                '#A5B4FC',
                                                              offset: '100%',
                                                            }),
                                                          ],
                                                        }),
                                                        t('linearGradient', {
                                                          x1: '88.638%',
                                                          y1: '29.267%',
                                                          x2: '22.42%',
                                                          y2: '100%',
                                                          id: 'nl-b',
                                                          children: [
                                                            e('stop', {
                                                              stopColor:
                                                                '#38BDF8',
                                                              stopOpacity: '0',
                                                              offset: '0%',
                                                            }),
                                                            e('stop', {
                                                              stopColor:
                                                                '#38BDF8',
                                                              offset: '100%',
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e('rect', {
                                                      fill: '#6366F1',
                                                      width: '32',
                                                      height: '32',
                                                      rx: '16',
                                                    }),
                                                    e('path', {
                                                      d: 'M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z',
                                                      fill: '#4F46E5',
                                                    }),
                                                    e('path', {
                                                      d: 'M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z',
                                                      fill: 'url(#nl-a)',
                                                    }),
                                                    e('path', {
                                                      d: 'M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z',
                                                      fill: 'url(#nl-b)',
                                                    }),
                                                  ],
                                                }),
                                                e('svg', {
                                                  className:
                                                    'h-4 w-4 fill-current text-slate-400',
                                                  viewBox: '0 0 16 16',
                                                  children: e('path', {
                                                    d: 'M5 3V0L0 4l5 4V5h8a1 1 0 000-2H5zM11 11H3a1 1 0 000 2h8v3l5-4-5-4v3z',
                                                  }),
                                                }),
                                                t('svg', {
                                                  width: '48',
                                                  height: '48',
                                                  viewBox: '0 0 48 48',
                                                  children: [
                                                    e('rect', {
                                                      fill: '#E0E7FF',
                                                      width: '48',
                                                      height: '48',
                                                      rx: '24',
                                                    }),
                                                    e('path', {
                                                      d: 'M34 24c0-1.38-1.126-2.5-2.515-2.5A2.507 2.507 0 0028.97 24c0 1.38 1.126 2.5 2.515 2.5A2.507 2.507 0 0034 24',
                                                      fill: '#34D399',
                                                    }),
                                                    e('path', {
                                                      d: 'M31.112 31.07a10.024 10.024 0 01-4.582 2.615c-.8.205-1.64.315-2.506.315a10.007 10.007 0 01-7.553-3.426A9.943 9.943 0 0114 24c0-2.517.932-4.816 2.471-6.574A10.007 10.007 0 0124.024 14a10.024 10.024 0 017.088 2.93l-3.544 3.535A5.003 5.003 0 0024.024 19a5.006 5.006 0 00-5.012 5l.001.13A5.007 5.007 0 0024.024 29c1.384 0 2.637-.56 3.544-1.465l3.544 3.536z',
                                                      fill: '#6366F1',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e('div', {
                                              className:
                                                'text-lg font-semibold text-slate-800',
                                              children:
                                                'Connect Mosaic with your Cruip account',
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className: 'text-sm mb-5',
                                          children: [
                                            e('div', {
                                              className:
                                                'font-medium text-slate-800 mb-3',
                                              children: 'Mosaic would like to:',
                                            }),
                                            t('ul', {
                                              className: 'space-y-2 mb-5',
                                              children: [
                                                t('li', {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    e('svg', {
                                                      className:
                                                        'w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2',
                                                      viewBox: '0 0 12 12',
                                                      children: e('path', {
                                                        d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                                                      }),
                                                    }),
                                                    e('div', {
                                                      children:
                                                        'Lorem ipsum dolor sit amet',
                                                    }),
                                                  ],
                                                }),
                                                t('li', {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    e('svg', {
                                                      className:
                                                        'w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2',
                                                      viewBox: '0 0 12 12',
                                                      children: e('path', {
                                                        d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                                                      }),
                                                    }),
                                                    e('div', {
                                                      children:
                                                        'Semper eget duis at tellus at urna',
                                                    }),
                                                  ],
                                                }),
                                                t('li', {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    e('svg', {
                                                      className:
                                                        'w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2',
                                                      viewBox: '0 0 12 12',
                                                      children: e('path', {
                                                        d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                                                      }),
                                                    }),
                                                    e('div', {
                                                      children:
                                                        'Lorem ipsum dolor sit amet',
                                                    }),
                                                  ],
                                                }),
                                                t('li', {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    e('svg', {
                                                      className:
                                                        'w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2',
                                                      viewBox: '0 0 12 12',
                                                      children: e('path', {
                                                        d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                                                      }),
                                                    }),
                                                    e('div', {
                                                      children:
                                                        'Suspendisse faucibus interdum',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            t('div', {
                                              className:
                                                'text-xs text-slate-500',
                                              children: [
                                                'By clicking on Allow access, you authorize Mosaic to use your information in accordance with its',
                                                ' ',
                                                e('a', {
                                                  className:
                                                    'text-primary hover:text-indigo-600',
                                                  href: '#0',
                                                  children: 'Privacy Policy',
                                                }),
                                                '. You can stop it at any time on the integrations page of your Mosaic account.',
                                              ],
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className:
                                            'flex flex-wrap justify-end space-x-2',
                                          children: [
                                            e('button', {
                                              className:
                                                'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                              onClick: (w) => {
                                                w.stopPropagation(), O(!1);
                                              },
                                              children: 'Cancel',
                                            }),
                                            e('button', {
                                              className:
                                                'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                              children: 'Allow Access',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'news-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), I(!0);
                                      },
                                      children: "What's New",
                                    }),
                                    t(le, {
                                      id: 'news-modal',
                                      modalOpen: R,
                                      setModalOpen: I,
                                      children: [
                                        e('div', {
                                          className: 'relative',
                                          children: t('button', {
                                            className:
                                              'absolute top-0 right-0 mt-5 mr-5 text-slate-50 hover:text-white',
                                            onClick: (w) => {
                                              w.stopPropagation(), I(!1);
                                            },
                                            children: [
                                              e('div', {
                                                className: 'sr-only',
                                                children: 'Close',
                                              }),
                                              e('svg', {
                                                className:
                                                  'w-4 h-4 fill-current',
                                                children: e('path', {
                                                  d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                        t('div', {
                                          className: 'p-5',
                                          children: [
                                            t('div', {
                                              className: 'mb-2',
                                              children: [
                                                e('div', {
                                                  className: 'mb-3',
                                                  children: e('div', {
                                                    className:
                                                      'text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1',
                                                    children: 'New on Mosaic',
                                                  }),
                                                }),
                                                e('div', {
                                                  className:
                                                    'text-lg font-semibold text-slate-800',
                                                  children:
                                                    'Help your team work faster with X \u{1F3C3}\u200D\u2642\uFE0F',
                                                }),
                                              ],
                                            }),
                                            e('div', {
                                              className: 'text-sm mb-5',
                                              children: t('div', {
                                                className: 'space-y-2',
                                                children: [
                                                  e('p', {
                                                    children:
                                                      'You might not be aware of this fact, but every frame, digital video, canvas, responsive design, and image often has a rectangular shape that is exceptionally precise in proportion (or ratio).',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'The ratio has to be well-defined to make shapes fit into different and distinct mediums, such as computer, movies, television and camera screens.',
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e('div', {
                                              className:
                                                'flex flex-wrap justify-end space-x-2',
                                              children: e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                onClick: (w) => {
                                                  w.stopPropagation(), I(!1);
                                                },
                                                children: 'Cool, I Got it',
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'feedback-modal',
                                      onClick: (w) => {
                                        w.stopPropagation(), B(!0);
                                      },
                                      children: 'Change your Plan',
                                    }),
                                    t(ie, {
                                      id: 'feedback-modal',
                                      modalOpen: j,
                                      setModalOpen: B,
                                      title: 'Change your Plan',
                                      children: [
                                        e('div', {
                                          className: 'px-5 pt-4 pb-1',
                                          children: t('div', {
                                            className: 'text-sm',
                                            children: [
                                              e('div', {
                                                className: 'mb-4',
                                                children:
                                                  'Upgrade or downgrade your plan:',
                                              }),
                                              t('ul', {
                                                className: 'space-y-2 mb-4',
                                                children: [
                                                  e('li', {
                                                    children: e('button', {
                                                      className:
                                                        'w-full h-full text-left py-3 px-4 rounded bg-white border-2 border-indigo-400 shadow-sm duration-150 ease-in-out',
                                                      children: t('div', {
                                                        className:
                                                          'flex items-center',
                                                        children: [
                                                          e('div', {
                                                            className:
                                                              'w-4 h-4 border-4 border-primary rounded-full mr-3',
                                                          }),
                                                          t('div', {
                                                            className: 'grow',
                                                            children: [
                                                              t('div', {
                                                                className:
                                                                  'flex flex-wrap items-center justify-between mb-0.5',
                                                                children: [
                                                                  t('span', {
                                                                    className:
                                                                      'font-medium text-slate-800',
                                                                    children: [
                                                                      'Mosaic Light',
                                                                      ' ',
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'text-xs italic text-slate-500 align-top',
                                                                          children:
                                                                            'Current Plan',
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }),
                                                                  t('span', {
                                                                    children: [
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'font-medium text-emerald-600',
                                                                          children:
                                                                            '$39.00',
                                                                        }
                                                                      ),
                                                                      '/mo',
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              e('div', {
                                                                className:
                                                                  'text-sm',
                                                                children:
                                                                  '2 MB \xB7 1 member \xB7 500 block limits',
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                  e('li', {
                                                    children: e('button', {
                                                      className:
                                                        'w-full h-full text-left py-3 px-4 rounded bg-white border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out',
                                                      children: t('div', {
                                                        className:
                                                          'flex items-center',
                                                        children: [
                                                          e('div', {
                                                            className:
                                                              'w-4 h-4 border-2 border-slate-300 rounded-full mr-3',
                                                          }),
                                                          t('div', {
                                                            className: 'grow',
                                                            children: [
                                                              t('div', {
                                                                className:
                                                                  'flex flex-wrap items-center justify-between mb-0.5',
                                                                children: [
                                                                  t('span', {
                                                                    className:
                                                                      'font-semibold text-slate-800',
                                                                    children: [
                                                                      'Mosaic Basic',
                                                                      ' ',
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'text-xs italic text-primary align-top',
                                                                          children:
                                                                            'Best Value \u2728',
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }),
                                                                  t('span', {
                                                                    children: [
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'font-medium text-emerald-600',
                                                                          children:
                                                                            '$59.00',
                                                                        }
                                                                      ),
                                                                      '/mo',
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              e('div', {
                                                                className:
                                                                  'text-sm',
                                                                children:
                                                                  '5 MB \xB7 2 members \xB7 1000 block limits',
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                  e('li', {
                                                    children: e('button', {
                                                      className:
                                                        'w-full h-full text-left py-3 px-4 rounded bg-white border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out',
                                                      children: t('div', {
                                                        className:
                                                          'flex items-center',
                                                        children: [
                                                          e('div', {
                                                            className:
                                                              'w-4 h-4 border-2 border-slate-300 rounded-full mr-3',
                                                          }),
                                                          t('div', {
                                                            className: 'grow',
                                                            children: [
                                                              t('div', {
                                                                className:
                                                                  'flex flex-wrap items-center justify-between mb-0.5',
                                                                children: [
                                                                  e('span', {
                                                                    className:
                                                                      'font-semibold text-slate-800',
                                                                    children:
                                                                      'Mosaic Plus',
                                                                  }),
                                                                  t('span', {
                                                                    children: [
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'font-medium text-emerald-600',
                                                                          children:
                                                                            '$79.00',
                                                                        }
                                                                      ),
                                                                      '/mo',
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              e('div', {
                                                                className:
                                                                  'text-sm',
                                                                children:
                                                                  '10 MB \xB7 5 members \xB7 Unlimited block limits',
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              e('div', {
                                                className:
                                                  'text-xs text-slate-500',
                                                children:
                                                  'Your workspace\u2019s Mosaic Light Plan is set to $39 per month and will renew on August 9, 2021.',
                                              }),
                                            ],
                                          }),
                                        }),
                                        e('div', {
                                          className: 'px-5 py-4',
                                          children: t('div', {
                                            className:
                                              'flex flex-wrap justify-end space-x-2',
                                            children: [
                                              e('button', {
                                                className:
                                                  'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                onClick: (w) => {
                                                  w.stopPropagation(), B(!1);
                                                },
                                                children: 'Cancel',
                                              }),
                                              e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                children: 'Change Plan',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Ln() {
  return t('div', {
    className: 'flex flex-col sm:flex-row sm:items-center sm:justify-between',
    children: [
      e('nav', {
        className: 'mb-4 sm:mb-0 sm:order-1',
        role: 'navigation',
        'aria-label': 'Navigation',
        children: t('ul', {
          className: 'flex justify-center',
          children: [
            e('li', {
              className: 'ml-3 first:ml-0',
              children: e('a', {
                className:
                  'btn bg-white border-slate-200 text-slate-300 cursor-not-allowed',
                href: '#0',
                disabled: !0,
                children: '<- Previous',
              }),
            }),
            e('li', {
              className: 'ml-3 first:ml-0',
              children: e('a', {
                className:
                  'btn bg-white border-slate-200 hover:border-slate-300 text-primary',
                href: '#0',
                children: 'Next ->',
              }),
            }),
          ],
        }),
      }),
      t('div', {
        className: 'text-sm text-slate-500 text-center sm:text-left',
        children: [
          'Showing ',
          e('span', { className: 'font-medium text-slate-600', children: '1' }),
          ' to ',
          e('span', {
            className: 'font-medium text-slate-600',
            children: '10',
          }),
          ' of ',
          e('span', {
            className: 'font-medium text-slate-600',
            children: '467',
          }),
          ' results',
        ],
      }),
    ],
  });
}
function zn() {
  return e('div', {
    children: t('nav', {
      className: 'flex justify-between',
      role: 'navigation',
      'aria-label': 'Navigation',
      children: [
        e('div', {
          className: 'flex-1 mr-2',
          children: t('a', {
            className:
              'btn bg-white border-slate-200 text-slate-300 cursor-not-allowed',
            href: '#0',
            disabled: !0,
            children: [
              '<-',
              e('span', {
                className: 'hidden sm:inline',
                children: '\xA0Previous',
              }),
            ],
          }),
        }),
        e('div', {
          className: 'grow text-center',
          children: t('ul', {
            className: 'inline-flex text-sm font-medium -space-x-px',
            children: [
              e('li', {
                children: e('span', {
                  className:
                    'inline-flex items-center justify-center rounded-full leading-5 px-2 py-2 bg-white border border-slate-200 text-primary shadow-sm',
                  children: e('span', { className: 'w-5', children: '1' }),
                }),
              }),
              e('li', {
                children: e('a', {
                  className:
                    'inline-flex items-center justify-center leading-5 px-2 py-2 text-slate-600 hover:text-primary border border-transparent',
                  href: '#0',
                  children: e('span', { className: 'w-5', children: '2' }),
                }),
              }),
              e('li', {
                children: e('a', {
                  className:
                    'inline-flex items-center justify-center leading-5 px-2 py-2 text-slate-600 hover:text-primary border border-transparent',
                  href: '#0',
                  children: e('span', { className: 'w-5', children: '3' }),
                }),
              }),
              e('li', {
                children: e('span', {
                  className:
                    'inline-flex items-center justify-center leading-5 px-2 py-2 text-slate-400',
                  children: '\u2026',
                }),
              }),
              e('li', {
                children: e('a', {
                  className:
                    'inline-flex items-center justify-center rounded-r leading-5 px-2 py-2 text-slate-600 hover:text-primary border border-transparent',
                  href: '#0',
                  children: e('span', { className: 'w-5', children: '9' }),
                }),
              }),
            ],
          }),
        }),
        e('div', {
          className: 'flex-1 text-right ml-2',
          children: t('a', {
            className:
              'btn bg-white border-slate-200 hover:border-slate-300 text-primary',
            href: '#0',
            children: [
              e('span', {
                className: 'hidden sm:inline',
                children: 'Next\xA0',
              }),
              '->',
            ],
          }),
        }),
      ],
    }),
  });
}
function Mn() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Pagination \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Option 1',
                          }),
                          e('div', {
                            className:
                              'px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm',
                            children: e(Ut, {}),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Option 2',
                          }),
                          e('div', {
                            className:
                              'px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm',
                            children: e(Ln, {}),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Option 3',
                          }),
                          e('div', {
                            className:
                              'px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm',
                            children: e(zn, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function _n() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Tabs \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Simple',
                          }),
                          e('div', {
                            className: 'mb-8 border-b border-slate-200',
                            children: t('ul', {
                              className:
                                'text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar',
                              children: [
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className: 'text-primary whitespace-nowrap',
                                    href: '#0',
                                    children: 'Account',
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                    href: '#0',
                                    children: 'Notifications',
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                    href: '#0',
                                    children: 'Integrations',
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                    href: '#0',
                                    children: 'Plans',
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                    href: '#0',
                                    children: 'Billing',
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Underline',
                          }),
                          t('div', {
                            className: 'relative mb-8',
                            children: [
                              e('div', {
                                className:
                                  'absolute bottom-0 w-full h-px bg-slate-200',
                                'aria-hidden': 'true',
                              }),
                              t('ul', {
                                className:
                                  'relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar',
                                children: [
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-primary whitespace-nowrap border-b-2 border-primary',
                                      href: '#0',
                                      children: 'Account',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                      href: '#0',
                                      children: 'Notifications',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                      href: '#0',
                                      children: 'Integrations',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                      href: '#0',
                                      children: 'Plans',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                      href: '#0',
                                      children: 'Billing',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Icons',
                          }),
                          e('div', {
                            className: 'mb-8 border-b border-slate-200',
                            children: t('ul', {
                              className:
                                'text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar',
                              children: [
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-primary whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z',
                                        }),
                                      }),
                                      e('span', { children: 'Account' }),
                                    ],
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8zM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1z',
                                        }),
                                      }),
                                      e('span', { children: 'Notifications' }),
                                    ],
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z',
                                        }),
                                      }),
                                      e('span', { children: 'Integrations' }),
                                    ],
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z',
                                        }),
                                      }),
                                      e('span', { children: 'Plans' }),
                                    ],
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M15 4c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h7c.6 0 1 .4 1 1v3h4zM2 3v1h7V2H3c-.6 0-1 .4-1 1zm12 11V6H2v7c0 .6.4 1 1 1h11zm-3-5h2v2h-2V9z',
                                        }),
                                      }),
                                      e('span', { children: 'Billing' }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Container',
                          }),
                          t('ul', {
                            className: 'flex flex-wrap -m-1',
                            children: [
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-primary text-white duration-150 ease-in-out',
                                  children: 'Account',
                                }),
                              }),
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out',
                                  children: 'Notifications',
                                }),
                              }),
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out',
                                  children: 'Integrations',
                                }),
                              }),
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out',
                                  children: 'Plans',
                                }),
                              }),
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out',
                                  children: 'Billing',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Dn() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Breadcrumb \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Slashes',
                          }),
                          e('div', {
                            className:
                              'px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm',
                            children: e('div', {
                              className: 'text-center',
                              children: t('ul', {
                                className:
                                  'inline-flex flex-wrap text-sm font-medium',
                                children: [
                                  e('li', {
                                    className:
                                      "after:content-['/'] last:after:hidden after:text-slate-400 after:px-2",
                                    children: e('a', {
                                      className:
                                        'text-slate-500 hover:text-primary',
                                      href: '#0',
                                      children: 'Home',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      "after:content-['/'] last:after:hidden after:text-slate-400 after:px-2",
                                    children: e('a', {
                                      className:
                                        'text-slate-500 hover:text-primary',
                                      href: '#0',
                                      children: 'Settings',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      "after:content-['/'] last:after:hidden after:text-slate-400 after:px-2",
                                    children: e('a', {
                                      className:
                                        'text-slate-500 hover:text-primary',
                                      href: '#0',
                                      children: 'Notifications',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Dots',
                          }),
                          e('div', {
                            className:
                              'px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm',
                            children: e('div', {
                              className: 'text-center',
                              children: t('ul', {
                                className:
                                  'inline-flex flex-wrap text-sm font-medium',
                                children: [
                                  e('li', {
                                    className:
                                      "after:content-['\xB7'] last:after:hidden after:text-slate-400 after:px-2",
                                    children: e('a', {
                                      className:
                                        'text-slate-500 hover:text-primary',
                                      href: '#0',
                                      children: 'Home',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      "after:content-['\xB7'] last:after:hidden after:text-slate-400 after:px-2",
                                    children: e('a', {
                                      className:
                                        'text-slate-500 hover:text-primary',
                                      href: '#0',
                                      children: 'Settings',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      "after:content-['\xB7'] last:after:hidden after:text-slate-400 after:px-2",
                                    children: e('a', {
                                      className:
                                        'text-slate-500 hover:text-primary',
                                      href: '#0',
                                      children: 'Notifications',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Chevrons',
                          }),
                          e('div', {
                            className:
                              'px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm',
                            children: e('div', {
                              className: 'text-center',
                              children: t('ul', {
                                className:
                                  'inline-flex flex-wrap text-sm font-medium',
                                children: [
                                  t('li', {
                                    className: 'flex items-center',
                                    children: [
                                      e('a', {
                                        className:
                                          'text-slate-500 hover:text-primary',
                                        href: '#0',
                                        children: 'Home',
                                      }),
                                      e('svg', {
                                        className:
                                          'h-4 w-4 fill-current text-slate-400 mx-3',
                                        viewBox: '0 0 16 16',
                                        children: e('path', {
                                          d: 'M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z',
                                        }),
                                      }),
                                    ],
                                  }),
                                  t('li', {
                                    className: 'flex items-center',
                                    children: [
                                      e('a', {
                                        className:
                                          'text-slate-500 hover:text-primary',
                                        href: '#0',
                                        children: 'Settings',
                                      }),
                                      e('svg', {
                                        className:
                                          'h-4 w-4 fill-current text-slate-400 mx-3',
                                        viewBox: '0 0 16 16',
                                        children: e('path', {
                                          d: 'M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z',
                                        }),
                                      }),
                                    ],
                                  }),
                                  e('li', {
                                    className: 'flex items-center',
                                    children: e('a', {
                                      className:
                                        'text-slate-500 hover:text-primary',
                                      href: '#0',
                                      children: 'Notifications',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function On() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Badge \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic Small',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Working on',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-sky-100 text-sky-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Exciting news',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Product',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-amber-100 text-amber-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Announcement',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Bug Fix',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Customer Stories',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-1',
                                  children: 'All Stories',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1',
                                  children: 'All Stories',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic Large',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Working on',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-sky-100 text-sky-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Exciting news',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Product',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-amber-100 text-amber-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Announcement',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Bug Fix',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Customer Stories',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-1',
                                  children: 'All Stories',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1',
                                  children: 'All Stories',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic with Icon',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: t('div', {
                                  className:
                                    'inline-flex items-center text-xs font-medium text-slate-100 bg-slate-700 rounded-full text-center px-2 py-0.5',
                                  children: [
                                    e('svg', {
                                      className:
                                        'w-3 h-3 shrink-0 fill-current text-amber-500 mr-1',
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z',
                                      }),
                                    }),
                                    e('span', { children: 'Special Offer' }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: t('div', {
                                  className:
                                    'inline-flex items-center text-sm font-medium text-slate-100 bg-slate-700 rounded-full text-center px-2 py-0.5',
                                  children: [
                                    e('svg', {
                                      className:
                                        'w-3 h-3 shrink-0 fill-current text-amber-500 mr-1',
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z',
                                      }),
                                    }),
                                    e('span', { children: 'Special Offer' }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic for Charts',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full',
                                  children: '+29%',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full',
                                  children: '-14%',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Bn() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Avatar \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic Avatars',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', { className: 'm-1.5' }),
                              e('div', { className: 'm-1.5' }),
                              e('div', { className: 'm-1.5' }),
                              e('div', { className: 'm-1.5' }),
                              e('div', { className: 'm-1.5' }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Avatars with Notification',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className: 'relative',
                                  children: e('div', {
                                    className:
                                      'absolute top-0 right-0 w-2 h-2 bg-rose-500 border-2 border-white rounded-full',
                                  }),
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className: 'relative',
                                  children: e('div', {
                                    className:
                                      'absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full',
                                  }),
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className: 'relative',
                                  children: e('div', {
                                    className:
                                      'absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full',
                                  }),
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className: 'relative',
                                  children: e('div', {
                                    className:
                                      'absolute top-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full',
                                  }),
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className: 'relative',
                                  children: e('div', {
                                    className:
                                      'absolute top-1 right-1 w-3 h-3 bg-rose-500 border-2 border-white rounded-full',
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Avatars with Placeholder Icon',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'flex items-center justify-center bg-slate-100 rounded-full w-6 h-6 text-[10px] font-semibold uppercase text-slate-500',
                                  children: 'MS',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'flex items-center justify-center bg-slate-100 rounded-full w-7 h-7 text-[10px] font-semibold uppercase text-slate-500',
                                  children: 'MS',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'flex items-center justify-center bg-slate-100 rounded-full w-8 h-8 text-xs font-semibold uppercase text-slate-500',
                                  children: 'MS',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'flex items-center justify-center bg-slate-100 rounded-full w-10 h-10 text-sm font-semibold uppercase text-slate-500',
                                  children: 'MS',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'flex items-center justify-center bg-slate-100 rounded-full w-16 h-16 text-lg font-semibold uppercase text-slate-500',
                                  children: 'MS',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Avatars Groups',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className: 'flex -space-x-3 -ml-0.5',
                                }),
                              }),
                              e('div', { className: 'm-1.5' }),
                              e('div', { className: 'm-1.5' }),
                              e('div', { className: 'm-1.5' }),
                              e('div', { className: 'm-1.5' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Fn() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Tooltip \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Tooltip Types',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-4',
                            children: [
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Label White',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      bg: 'dark',
                                      children: e('div', {
                                        className:
                                          'text-xs text-slate-200 whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Label Dark',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      size: 'md',
                                      children: e('div', {
                                        className: 'text-xs',
                                        children:
                                          'Excepteur sint occaecat cupidata non proident, sunt in.',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Basic White',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      size: 'md',
                                      bg: 'dark',
                                      children: e('div', {
                                        className: 'text-xs text-slate-200',
                                        children:
                                          'Excepteur sint occaecat cupidata non proident, sunt in.',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Basic Dark',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      size: 'lg',
                                      children: e('div', {
                                        className:
                                          'text-sm font-medium text-slate-500',
                                        children:
                                          'Excepteur sint occaecat cupidata non proident, sunt in.',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Large White',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      size: 'lg',
                                      bg: 'dark',
                                      children: e('div', {
                                        className:
                                          'text-sm font-medium text-slate-200',
                                        children:
                                          'Excepteur sint occaecat cupidata non proident, sunt in.',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Large Dark',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      size: 'lg',
                                      children: t('div', {
                                        className: 'text-xs',
                                        children: [
                                          e('div', {
                                            className:
                                              'font-medium text-slate-800 mb-0.5',
                                            children:
                                              'Let\u2019s Talk Paragraph',
                                          }),
                                          e('div', {
                                            children:
                                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          }),
                                        ],
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Rich White',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      size: 'lg',
                                      bg: 'dark',
                                      children: t('div', {
                                        className: 'text-xs',
                                        children: [
                                          e('div', {
                                            className:
                                              'font-medium text-slate-200 mb-0.5',
                                            children:
                                              'Let\u2019s Talk Paragraph',
                                          }),
                                          e('div', {
                                            className: 'text-slate-400',
                                            children:
                                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          }),
                                        ],
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Rich Dark',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Tooltip Position',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-4',
                            children: [
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Top',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      position: 'bottom',
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Bottom',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      position: 'left',
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Left',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(K, {
                                      position: 'right',
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Right',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function In(s) {
  const [a, l] = o.exports.useState(!1);
  return t('div', {
    className: 'px-5 py-4 rounded-sm border border-slate-200',
    children: [
      t('button', {
        className: 'flex items-center justify-between w-full group mb-1',
        'aria-expanded': a,
        onClick: () => l(!a),
        children: [
          e('div', {
            className: 'text-sm text-slate-800 font-medium',
            children: s.title,
          }),
          e('svg', {
            className: `w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${
              a && 'rotate-180'
            }`,
            viewBox: '0 0 32 32',
            children: e('path', {
              d: 'M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z',
            }),
          }),
        ],
      }),
      e('div', {
        className: `text-sm ${!a && 'hidden'}`,
        children: s.children,
      }),
    ],
  });
}
function Pn(s) {
  const [a, l] = o.exports.useState(!1);
  return t('tbody', {
    className: 'text-sm',
    children: [
      t('tr', {
        children: [
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: t('div', {
              className: 'flex items-center text-slate-800',
              children: [
                e('div', {
                  className:
                    'w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3',
                  children: e('img', {
                    className: 'rounded-full ml-1',
                    src: s.image,
                    width: '40',
                    height: '40',
                    alt: s.customer,
                  }),
                }),
                e('div', {
                  className: 'font-medium text-slate-800',
                  children: s.customer,
                }),
              ],
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left font-medium text-emerald-500',
              children: s.total,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className:
                'inline-flex font-medium bg-amber-100 text-amber-600 rounded-full text-center px-2.5 py-0.5',
              children: s.status,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-center', children: s.items }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left',
              children: s.location,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: t('div', {
              className: 'flex items-center',
              children: [
                e('svg', {
                  className:
                    'w-4 h-4 fill-current text-slate-400 shrink-0 mr-2',
                  viewBox: '0 0 16 16',
                  children: e('path', {
                    d: 'M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z',
                  }),
                }),
                e('div', { children: s.type }),
              ],
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px',
            children: e('div', {
              className: 'flex items-center',
              children: t('button', {
                className: `text-slate-400 hover:text-slate-500 transform ${
                  a && 'rotate-180'
                }`,
                'aria-expanded': a,
                onClick: () => l(!a),
                'aria-controls': `description-${s.id}`,
                children: [
                  e('span', { className: 'sr-only', children: 'Menu' }),
                  e('svg', {
                    className: 'w-8 h-8 fill-current',
                    viewBox: '0 0 32 32',
                    children: e('path', {
                      d: 'M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z',
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      e('tr', {
        id: `description-${s.id}`,
        role: 'region',
        className: `${!a && 'hidden'}`,
        children: e('td', {
          colSpan: '10',
          className: 'px-2 first:pl-5 last:pr-5 py-3',
          children: t('div', {
            className: 'flex items-center bg-slate-50 p-3 -mt-3',
            children: [
              e('svg', {
                className: 'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                children: e('path', {
                  d: 'M1 16h3c.3 0 .5-.1.7-.3l11-11c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-11 11c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1zm1-3.6l10-10L13.6 4l-10 10H2v-1.6z',
                }),
              }),
              e('div', { className: 'italic', children: s.description }),
            ],
          }),
        }),
      }),
    ],
  });
}
function An(s) {
  const [a, l] = o.exports.useState(!1);
  return t('tbody', {
    className: 'text-sm',
    children: [
      t('tr', {
        children: [
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: t('div', {
              className: 'flex items-center text-slate-800',
              children: [
                e('div', {
                  className:
                    'w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3',
                  children: e('img', {
                    className: 'rounded-full ml-1',
                    src: s.image,
                    width: '40',
                    height: '40',
                    alt: s.customer,
                  }),
                }),
                e('div', {
                  className: 'font-medium text-slate-800',
                  children: s.customer,
                }),
              ],
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-left', children: s.email }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left',
              children: s.location,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-left', children: s.date }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left text-emerald-500 font-medium',
              children: s.amount,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px',
            children: e('div', {
              className: 'flex items-center',
              children: t('button', {
                className: `text-slate-400 hover:text-slate-500 transform ${
                  a && 'rotate-180'
                }`,
                'aria-expanded': a,
                onClick: () => l(!a),
                'aria-controls': `description-${s.id}`,
                children: [
                  e('span', { className: 'sr-only', children: 'Menu' }),
                  e('svg', {
                    className: 'w-8 h-8 fill-current',
                    viewBox: '0 0 32 32',
                    children: e('path', {
                      d: 'M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z',
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      e('tr', {
        id: `description-${s.id}`,
        role: 'region',
        className: `${!a && 'hidden'}`,
        children: e('td', {
          colSpan: '10',
          className: 'px-2 first:pl-5 last:pr-5 py-3',
          children: t('div', {
            className: 'bg-slate-50 p-3 -mt-3',
            children: [
              t('div', {
                className: 'text-sm mb-3',
                children: [
                  e('div', {
                    className: 'font-medium text-slate-800 mb-1',
                    children: s.descriptionTitle,
                  }),
                  e('div', { children: s.descriptionBody }),
                ],
              }),
              e('button', {
                className: 'btn-xs bg-primary hover:bg-indigo-600 text-white',
                children: 'Approve',
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function jn() {
  const [s, a] = o.exports.useState(!1),
    l = [
      {
        id: '0',
        customer: 'Mark Cameron',
        total: '$129.00',
        status: 'Refunded',
        items: '1',
        location: '\u{1F1F2}\u{1F1FD} New Mexico, MX',
        type: 'Subscription',
        description:
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
    r = [
      {
        id: '0',
        image: Image01,
        customer: 'Mark Cameron',
        email: 'mark.cameron@app.com',
        location: '\u{1F1EC}\u{1F1E7} London, UK',
        date: '22/01/2021',
        amount: '+249.88',
        descriptionTitle: 'Excepteur sint occaecat cupidatat.',
        descriptionBody:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ];
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Accordion \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic Accordion',
                          }),
                          e(In, {
                            title: 'Accordion Title',
                            children:
                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Table Row with Accordion',
                          }),
                          e('div', {
                            className: 'rounded-sm border border-slate-200',
                            children: e('div', {
                              className: 'overflow-x-auto',
                              children: e('table', {
                                className:
                                  'table-auto w-full divide-y divide-slate-200',
                                children: l.map((n) =>
                                  e(
                                    Pn,
                                    {
                                      id: n.id,
                                      image: n.image,
                                      customer: n.customer,
                                      total: n.total,
                                      status: n.status,
                                      items: n.items,
                                      location: n.location,
                                      type: n.type,
                                      description: n.description,
                                    },
                                    n.id
                                  )
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Rich Table Row with Accordion',
                          }),
                          e('div', {
                            className: 'rounded-sm border border-slate-200',
                            children: e('div', {
                              className: 'overflow-x-auto',
                              children: e('table', {
                                className:
                                  'table-auto w-full divide-y divide-slate-200',
                                children: r.map((n) =>
                                  e(
                                    An,
                                    {
                                      id: n.id,
                                      image: n.image,
                                      customer: n.customer,
                                      email: n.email,
                                      location: n.location,
                                      date: n.date,
                                      amount: n.amount,
                                      descriptionTitle: n.descriptionTitle,
                                      descriptionBody: n.descriptionBody,
                                    },
                                    n.id
                                  )
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Rn() {
  const [s, a] = o.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(W, { sidebarOpen: s, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(Z, { sidebarOpen: s, setSidebarOpen: a }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Icons \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      e('div', {
                        className: 'text-sm',
                        children:
                          'If you need more icons than what we currently support in Mosaic, check out these great packs \u{1F447}',
                      }),
                      t('div', {
                        children: [
                          t('div', {
                            className: 'flex items-start space-x-3 mb-6',
                            children: [
                              e('h2', {
                                className: 'text-2xl text-slate-800 font-bold',
                                children: 'Nucleo',
                              }),
                              e('div', {
                                className:
                                  'text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1',
                                children: 'Recommended',
                              }),
                            ],
                          }),
                          t('div', {
                            className:
                              'px-6 py-8 bg-slate-800 rounded-sm text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center',
                            children: [
                              e('div', {
                                className:
                                  'text-slate-300 mb-4 xl:mb-0 max-w-lg mx-auto xl:mx-0 2xl:max-w-none',
                                children:
                                  '99% of the icons used in Mosaic come from Nucleo; a huge library of 3K+ vector icons!',
                              }),
                              t('div', {
                                className: 'inline-flex space-x-3',
                                children: [
                                  e('a', {
                                    className:
                                      'btn bg-primary hover:bg-indigo-600 text-white',
                                    href: 'https://nucleoapp.com/pricing',
                                    target: '_blank',
                                    rel: 'noreferrer',
                                    children: 'Buy Nucleo',
                                  }),
                                  e('a', {
                                    className:
                                      'btn bg-slate-700 hover:bg-slate-600 text-white',
                                    href: 'https://nucleoapp.com/free-icons',
                                    target: '_blank',
                                    rel: 'noreferrer',
                                    children: 'Download Free Pack',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          t('div', {
                            className: 'flex items-start space-x-3 mb-6',
                            children: [
                              e('h2', {
                                className: 'text-2xl text-slate-800 font-bold',
                                children: 'Tabler Icons',
                              }),
                              e('div', {
                                className:
                                  'text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1',
                                children: 'Free Alternative',
                              }),
                            ],
                          }),
                          t('div', {
                            className:
                              'px-6 py-8 bg-slate-800 rounded-sm text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center',
                            children: [
                              e('div', {
                                className:
                                  'text-slate-300 mb-4 xl:mb-0 max-w-lg mx-auto xl:mx-0 2xl:max-w-none',
                                children:
                                  'A set of 1250+ icons that are visually consistent with the style used in Mosaic!',
                              }),
                              e('div', {
                                className: 'inline-flex space-x-3',
                                children: e('a', {
                                  className:
                                    'btn bg-primary hover:bg-indigo-600 text-white',
                                  href: 'https://tablericons.com/',
                                  target: '_blank',
                                  rel: 'noreferrer',
                                  children: 'Download Tabler Icons',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Tn = ({
    ordersPanelOpen: s,
    setOrdersPanelOpen: a,
    setChooseOption: l,
    setPlanningCapabilities: r,
    orders: n,
  }) => {
    const c = (() => {
        const N = o.exports.useRef({}).current;
        return (
          o.exports.useEffect(() => {
            const S = document.createElement('div');
            return (
              (S.style.position = 'absolute'),
              (S.style.pointerEvents = 'none'),
              (S.style.top = '0'),
              (S.style.width = '100%'),
              (S.style.height = '100%'),
              (N.elt = S),
              document.body.appendChild(S),
              () => {
                document.body.removeChild(S);
              }
            );
          }, [N]),
          (S) =>
            (L, ...O) => {
              const R = S(L, ...O);
              return L.draggableProps.style.position === 'fixed'
                ? _s.exports.createPortal(R, N.elt)
                : R;
            }
        );
      })(),
      d = o.exports.useRef(null),
      m = o.exports.useRef(null),
      u = ne(),
      p = _(),
      h = v(Ft),
      f = v(wl),
      [x, b] = o.exports.useState(v(Ft));
    o.exports.useState(null),
      o.exports.useEffect(() => {
        p(Sl());
      }, []),
      o.exports.useEffect(() => {
        const N = h.map((S) =>
          $(y({}, S), { state: 'Selecciona una opci\xF3n' })
        );
        b(N);
      }, [h]),
      o.exports.useEffect(() => {
        var I, j;
        const N = h.filter((B) => B.name === f.name),
          S =
            x == null
              ? void 0
              : x.findIndex((B) => {
                  var w;
                  return (
                    (B == null ? void 0 : B.id) ===
                    ((w = N[0]) == null ? void 0 : w.id)
                  );
                });
        let L = [...N],
          O = {
            name: (I = L[0]) == null ? void 0 : I.name,
            id: (j = L[0]) == null ? void 0 : j.id,
            state: f == null ? void 0 : f.form_apply,
          };
        const R = [...x];
        (R[S] = O), b(R);
      }, [f]),
      o.exports.useEffect(() => {
        const N = ({ keyCode: S }) => {
          !s || S !== 27 || a(!1);
        };
        return (
          document.addEventListener('keydown', N),
          () => document.removeEventListener('keydown', N)
        );
      });
    const g = async () => {
        const N = { orders: n, selected_groups: ['B2'], criteria: ['A'] },
          S = sessionStorage.getItem('token');
        console.log(N),
          await z
            .post('http://3.88.215.84/api/planning/list', N, {
              headers: { Authorization: `Token ${S}` },
            })
            .then((L) => {
              L.status === 200
                ? console.log(L)
                : console.log('Ocurri\xF3 un error: ' + L.status);
            })
            .catch((L) => console.log(L));
      },
      E = () => {
        console.log(n), g(), u('/mp-pro/demo-gantt/');
      },
      M = (N, S, L) => {
        const O = [...N],
          [R] = O.splice(S, 1);
        return O.splice(L, 0, R), O;
      };
    return t(C, {
      children: [
        e(D, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: s,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(D, {
          id: 'panelG',
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: s,
          enter: 'transition ease-in-out duration-500',
          enterStart: 'opacity-0 translate-x-4',
          enterEnd: 'opacity-100 translate-x-0',
          leave: 'transition ease-in-out duration-500',
          leaveStart: 'opacity-100 translate-x-0',
          leaveEnd: 'opacity-0 translate-x-4',
          children: t('div', {
            ref: m,
            className: `w-[480px] bg-white absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
              s ? 'translate-x-' : 'translate-x-full'
            }`,
            children: [
              t('section', {
                className: 'mb-5 flex items-center',
                children: [
                  t('div', {
                    className: 'flex ml-5 w-full',
                    children: [
                      e('button', {
                        onClick: () => {
                          a(!1), r(!0);
                        },
                        className: 'mt-[17px]',
                        children: e('img', {
                          src: k.arrowLeft,
                          alt: '',
                          className: 'w-8',
                        }),
                      }),
                      e('h2', {
                        className: 'mt-4 ml-5 font-bold text-black text-2xl',
                        children: 'Elegir criterios de ordenamiento',
                      }),
                    ],
                  }),
                  e('button', {
                    ref: d,
                    onClick: () => a(!1),
                    className: ' top-1 right-0 mt-4 mr-4 group p-1',
                    children: e('svg', {
                      className:
                        'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                      viewBox: '0 0 16 16',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: e('path', {
                        d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                      }),
                    }),
                  }),
                ],
              }),
              e(Ds, {
                style: (N, S) => $(y({}, S), { position: 'static' }),
                onDragEnd: (N) => {
                  const { source: S, destination: L } = N;
                  !L ||
                    (S.index === L.index && S.droppableId === L.droppableId) ||
                    b((O) => M(O, S.index, L.index));
                },
                children: e('div', {
                  className: 'top-16 bg-white h-screen',
                  children: t('section', {
                    className: 'mx-5 pt-4 2xl:pt-8',
                    children: [
                      e(Os, {
                        droppableId: 'data',
                        children: (N) =>
                          t(
                            'ul',
                            $(y({}, N.droppableProps), {
                              ref: N.innerRef,
                              children: [
                                x == null
                                  ? void 0
                                  : x.map((S, L) =>
                                      e(
                                        Bs,
                                        {
                                          draggableId: S.id.toString(),
                                          index: L,
                                          children: c((O) =>
                                            t(
                                              'li',
                                              $(
                                                y(
                                                  $(y({}, O.draggableProps), {
                                                    ref: O.innerRef,
                                                  }),
                                                  O.dragHandleProps
                                                ),
                                                {
                                                  className:
                                                    'border rounded border-slate-300 flex py-4 mb-4 justify-between items-center ',
                                                  children: [
                                                    t('div', {
                                                      className: 'flex',
                                                      children: [
                                                        t('svg', {
                                                          className:
                                                            'w-6 h-6 fill-slate-300 my-auto mx-3',
                                                          viewBox: '0 0 24 24',
                                                          xmlns:
                                                            'http://www.w3.org/2000/svg',
                                                          children: [
                                                            e('rect', {
                                                              x: '4',
                                                              y: '5',
                                                              width: '16',
                                                              height: '2',
                                                            }),
                                                            e('rect', {
                                                              x: '4',
                                                              y: '11',
                                                              width: '16',
                                                              height: '2',
                                                            }),
                                                            e('rect', {
                                                              x: '4',
                                                              y: '17',
                                                              width: '16',
                                                              height: '2',
                                                            }),
                                                          ],
                                                        }),
                                                        t('div', {
                                                          className:
                                                            'flex flex-col w-flil',
                                                          children: [
                                                            e('span', {
                                                              className:
                                                                'text-base font-semibold text-black',
                                                              children:
                                                                S == null
                                                                  ? void 0
                                                                  : S.name,
                                                            }),
                                                            e('div', {
                                                              children: e(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'text-sm text-primary font-medium bg-secondary px-2 py-1 rounded',
                                                                  children:
                                                                    S == null
                                                                      ? void 0
                                                                      : S.state,
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e('div', {
                                                      className: 'my-auto',
                                                      children: e('img', {
                                                        onClick: () => {
                                                          p(El(S.name, l, a));
                                                        },
                                                        src: k.smallArrowRight,
                                                        alt: 'small-arrow-right',
                                                        className:
                                                          'mx-3 cursor-pointer',
                                                      }),
                                                    }),
                                                  ],
                                                }
                                              )
                                            )
                                          ),
                                        },
                                        S.id
                                      )
                                    ),
                                N.placeholder,
                              ],
                            })
                          ),
                      }),
                      e('button', {
                        onClick: () => {
                          E();
                        },
                        className:
                          'h-12 bg-primary text-white rounded w-full text-base font-semibold 2xl:mt-6 hover:bg-secondary hover:text-primary',
                        children: 'Ir a la planeaci\xF3n de \xF3rdenes',
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Hn = ({ orders: s }) => {
    const a = (r) => {
        try {
          return r.toString().includes('.') ? r.toFixed(2) : r;
        } catch {
          return r;
        }
      },
      l = (r) => new Date(r).toLocaleDateString('es-ES');
    return e(C, {
      children: e('div', {
        className:
          'border border-slate-300 rounded-xl orders-table overflow-x-auto',
        children: t('table', {
          className: 'table-auto w-full table rounded-xl',
          children: [
            e('thead', {
              className:
                'text-[14px] text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50',
              children: t('tr', {
                children: [
                  e('th', {
                    className: 'px-2 first:pl-5 w-1/4',
                    children: e('div', {
                      className: 'flex items-center space-x-10',
                      children: e('div', {
                        className: 'font-semibold text-left',
                        children: 'Order',
                      }),
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Tipo de orden',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ',
                    children: e('div', {
                      className: 'flex items-center space-x-2',
                      children: e('p', {
                        className: 'font-semibold text-center',
                        children: 'Item',
                      }),
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Cantidad',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Total de la orden',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'L\xEDnea de producto',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Order date',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Request date',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Promise date',
                    }),
                  }),
                  e('th', {
                    className:
                      'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5',
                    children: e('p', {
                      className: 'font-semibold text-center',
                      children: 'Schedule Ship date',
                    }),
                  }),
                ],
              }),
            }),
            e('tbody', {
              className: 'text-sm divide-y divide-slate-200',
              children:
                s == null
                  ? void 0
                  : s.map((r, n) =>
                      t(
                        'tr',
                        {
                          children: [
                            e('td', {
                              className:
                                'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5',
                              children: t('div', {
                                className: 'flex flex-col',
                                children: [
                                  e('p', {
                                    className:
                                      'font-medium capitalize text-slate-400 text-sm',
                                    children: r.Order,
                                  }),
                                  e('p', {
                                    className:
                                      'text-textTableItem font-medium capitalize text-base',
                                    children: r.Customer,
                                  }),
                                  e('p', {
                                    className:
                                      'text-primary font-medium capitalize text-sm',
                                    children: r.Org,
                                  }),
                                ],
                              }),
                            }),
                            e('td', {
                              className:
                                'px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                              children: e('p', {
                                className: 'font-semibold text-sm',
                                children: r.Order_Type,
                              }),
                            }),
                            e('td', {
                              className:
                                'px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                              children: e('p', {
                                className: 'font-semibold text-sm',
                                children: r.Item_Name,
                              }),
                            }),
                            e('td', {
                              className:
                                'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                              children: e('p', {
                                className: 'text-center text-sm',
                                children: r.OrdQty,
                              }),
                            }),
                            e('td', {
                              className:
                                'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                              children: e('p', {
                                className: 'text-sm text-center',
                                children: a(r == null ? void 0 : r.TotalOrder),
                              }),
                            }),
                            e('td', {
                              className:
                                'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                              children: e('p', {
                                className: 'text-center text-sm',
                                children: r.Pline,
                              }),
                            }),
                            e('td', {
                              className:
                                'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                              children: e('p', {
                                className: 'text-center text-sm',
                                children: l(
                                  r == null ? void 0 : r.Date_Ordered
                                ),
                              }),
                            }),
                            e('td', {
                              className:
                                'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400',
                              children: e('p', {
                                className: 'text-center text-sm',
                                children: l(
                                  r == null ? void 0 : r.Request_Date
                                ),
                              }),
                            }),
                            e('td', {
                              className:
                                'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium',
                              children: e('p', {
                                className: 'text-center text-sm',
                                children: l(
                                  r == null ? void 0 : r.Promise_Date
                                ),
                              }),
                            }),
                            e('td', {
                              className:
                                'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400',
                              children: e('p', {
                                className: 'text-center text-sm',
                                children: l(
                                  r == null ? void 0 : r.Schedule_Ship_Date
                                ),
                              }),
                            }),
                          ],
                        },
                        n
                      )
                    ),
            }),
          ],
        }),
      }),
    });
  },
  $n = ({
    planningCapabilities: s,
    setPlanningCapabilities: a,
    setOrdersPanelOpen: l,
  }) => {
    const r = o.exports.useRef(null),
      n = o.exports.useRef(null);
    return (
      o.exports.useEffect(() => {
        const i = ({ keyCode: c }) => {
          !s || c !== 27 || a(!1);
        };
        return (
          document.addEventListener('keydown', i),
          () => document.removeEventListener('keydown', i)
        );
      }),
      t(C, {
        children: [
          e(D, {
            className:
              'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
            show: s,
            enter: 'transition ease-out duration-200',
            enterStart: 'opacity-0',
            enterEnd: 'opacity-100',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            'aria-hidden': 'true',
          }),
          e(D, {
            id: 'panelG',
            className:
              'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
            role: 'dialog',
            'aria-modal': 'true',
            show: s,
            enter: 'transition ease-in-out duration-500',
            enterStart: 'opacity-0 translate-x-4',
            enterEnd: 'opacity-100 translate-x-0',
            leave: 'transition ease-in-out duration-500',
            leaveStart: 'opacity-100 translate-x-0',
            leaveEnd: 'opacity-0 translate-x-4',
            children: t('div', {
              ref: n,
              className: `w-[480px] bg-white absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
                s ? 'translate-x-' : 'translate-x-full'
              }`,
              children: [
                t('section', {
                  className: 'mb-10',
                  children: [
                    e('h2', {
                      className:
                        'mt-4 ml-5 w-full font-bold text-black text-2xl',
                      children: 'Capacidades',
                    }),
                    e('button', {
                      ref: r,
                      onClick: () => a(!1),
                      className: 'absolute top-1 right-0 mt-4 mr-3 group p-1',
                      children: e('svg', {
                        className:
                          'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                        viewBox: '0 0 16 16',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: e('path', {
                          d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                        }),
                      }),
                    }),
                  ],
                }),
                t('section', {
                  className: 'flex flex-col justify-center px-5',
                  children: [
                    e('div', {
                      className:
                        'mt-5 border border-borderInput h-14 items-center flex px-3 rounded',
                      children: t('label', {
                        className: 'flex items-center',
                        children: [
                          e('input', {
                            checked: !0,
                            type: 'checkbox',
                            className: 'form-checkbox',
                            name: 'allSelect',
                          }),
                          e('span', {
                            className:
                              'text-base font-semibold ml-2 text-black',
                            children: 'Capacidad base (Por defecto)',
                          }),
                        ],
                      }),
                    }),
                    e('div', {
                      className:
                        'mt-5 mb-20 border border-borderInput h-14 items-center flex px-3 rounded',
                      children: t('label', {
                        className: 'flex items-center',
                        children: [
                          e('input', {
                            type: 'checkbox',
                            className: 'form-checkbox',
                            name: 'allSelect',
                          }),
                          e('span', {
                            className:
                              'text-base font-semibold ml-2 text-black',
                            children: 'Capacidad Personalizada (Avanzado)',
                          }),
                        ],
                      }),
                    }),
                    e('div', {
                      className: 'flex justify-center',
                      children: e('button', {
                        onClick: () => {
                          a(!1), l(!0);
                        },
                        className:
                          'w-80 h-12 bg-primary rounded text-white text-base flex justify-center items-center hover:bg-secondary hover:text-primary',
                        children: 'Siguiente',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  qn = ({ chooseOption: s, setChooseOption: a, setOrdersPanelOpen: l }) => {
    const r = _(),
      n = v(Nl),
      i = o.exports.useRef(null),
      c = o.exports.useRef(null);
    return (
      o.exports.useEffect(() => {
        const d = ({ keyCode: m }) => {
          !s || m !== 27 || a(!1);
        };
        return (
          document.addEventListener('keydown', d),
          () => document.removeEventListener('keydown', d)
        );
      }),
      t(C, {
        children: [
          e(D, {
            className:
              'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
            show: s,
            enter: 'transition ease-out duration-200',
            enterStart: 'opacity-0',
            enterEnd: 'opacity-100',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            'aria-hidden': 'true',
          }),
          e(D, {
            id: 'panelG',
            className:
              'fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6',
            role: 'dialog',
            'aria-modal': 'true',
            show: s,
            enter: 'transition ease-in-out duration-500',
            enterStart: 'opacity-0 translate-x-4',
            enterEnd: 'opacity-100 translate-x-0',
            leave: 'transition ease-in-out duration-500',
            leaveStart: 'opacity-100 translate-x-0',
            leaveEnd: 'opacity-0 translate-x-4',
            children: t('div', {
              ref: c,
              className: `w-[480px] bg-white absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
                s ? 'translate-x-' : 'translate-x-full'
              }`,
              children: [
                t('section', {
                  className: 'mb-10 flex items-center justify-between  ',
                  children: [
                    t('div', {
                      className: 'flex ml-5  ',
                      children: [
                        e('button', {
                          onClick: () => {
                            a(!1), l(!0);
                          },
                          className: 'mt-[17px]',
                          children: e('img', {
                            src: k.arrowLeft,
                            alt: '',
                            className: 'w-8',
                          }),
                        }),
                        e('h2', {
                          className:
                            'mt-4 ml-5 w-full font-bold text-black text-2xl',
                          children: 'Selecciona una opci\xF3n',
                        }),
                      ],
                    }),
                    e('button', {
                      ref: i,
                      onClick: () => a(!1),
                      className: ' top-1 right-0 mt-4 mr-3 group p-1',
                      children: e('svg', {
                        className:
                          'w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none',
                        viewBox: '0 0 16 16',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: e('path', {
                          d: 'm7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z',
                        }),
                      }),
                    }),
                  ],
                }),
                e('section', {
                  children: e('section', {
                    className: 'w-full px-5 pt-4 2xl:pt-8',
                    children: e('ul', {
                      children: n.map((d, m) =>
                        e(
                          'li',
                          {
                            onClick: () => {
                              r(hl(d)), a(!1), l(!0);
                            },
                            className:
                              'border rounded border-slate-300 flex py-4 mb-4 justify-between items-center cursor-pointer',
                            children: e('div', {
                              className: 'flex',
                              children: t('div', {
                                className: 'flex flex-col w-flil px-5',
                                children: [
                                  e('span', {
                                    className:
                                      'text-base font-semibold text-black',
                                    children: d.name,
                                  }),
                                  e('div', {
                                    children: e('span', {
                                      className:
                                        'text-sm text-primary font-medium bg-secondary px-1 py-1 rounded',
                                      children: d.form_apply,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          },
                          m
                        )
                      ),
                    }),
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Vn = ({}) => {
    const s = _(),
      a = ne(),
      [l, r] = o.exports.useState(!1),
      [n, i] = o.exports.useState(!1),
      [c, d] = o.exports.useState(!1),
      m = v(xl),
      u = v(fl),
      p = v(bl);
    return (
      o.exports.useEffect(() => {
        s(kl({ group: u }));
      }, [u]),
      o.exports.useEffect(() => {
        u.length === 0 && a('/mp-pro/planning/plannings/');
      }, [u]),
      e(te, {
        icon: k.planningIcon,
        nameRoute: 'Planeaci\xF3n',
        nameSubRoute: 'Ordenes',
        children: e('div', {
          className: 'px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto',
          children: t('section', {
            className: 'lg:px-8',
            children: [
              t('header', {
                className: 'flex flex-1 py-5 justify-between',
                children: [
                  e('h2', {
                    className: 'text-3xl font-semibold text-black my-auto',
                    children: '\xD3rdenes a planear',
                  }),
                  !p &&
                    (m == null ? void 0 : m.length) > 0 &&
                    t('p', {
                      className: 'my-auto mb-1 font-medium',
                      children: [
                        'Total de \xF3rdenes:',
                        ' ',
                        e('span', {
                          className: 'font-bold text-primary',
                          children: m == null ? void 0 : m.length,
                        }),
                      ],
                    }),
                ],
              }),
              t('main', {
                children: [
                  p
                    ? e('section', {
                        className:
                          'justify-center items-center flex orders-table',
                        children: e('h2', {
                          className: 'font-semibold text-2xl',
                          children: 'Sin datos para mostrar',
                        }),
                      })
                    : (m == null ? void 0 : m.length) > 0
                    ? e(Hn, { orders: m })
                    : e(Be, {}),
                  t('div', {
                    className: 'flex justify-end py-5',
                    children: [
                      e(V, {
                        to: '/mp-pro/planning/plannings/',
                        children: e('button', {
                          className:
                            'border border-slate-300 rounded w-64 h-12 text-base font-semibold mr-6',
                          children: 'Cancelar',
                        }),
                      }),
                      t('button', {
                        onClick: () => {
                          i(!0);
                        },
                        className: `w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary ${
                          p && 'cursor-not-allowed'
                        }`,
                        disabled: !!p,
                        children: [
                          e('span', {
                            className: 'my-auto',
                            children: 'Continuar',
                          }),
                          e('img', {
                            src: k.arrowRight,
                            alt: 'icon-arrow-right',
                            className: 'my-auto ml-3 text-white',
                          }),
                        ],
                      }),
                    ],
                  }),
                  e('section', {
                    children: e($n, {
                      planningCapabilities: n,
                      setPlanningCapabilities: i,
                      setOrdersPanelOpen: r,
                    }),
                  }),
                  e('section', {
                    children: e(Tn, {
                      ordersPanelOpen: l,
                      setOrdersPanelOpen: r,
                      setChooseOption: d,
                      setPlanningCapabilities: i,
                      orders: m,
                    }),
                  }),
                  e('section', {
                    children: e(qn, {
                      chooseOption: c,
                      setChooseOption: d,
                      setOrdersPanelOpen: r,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  };
function Gn() {
  const s = ct();
  return (
    o.exports.useEffect(() => {
      (document.querySelector('html').style.scrollBehavior = 'auto'),
        window.scroll({ top: 0 }),
        (document.querySelector('html').style.scrollBehavior = '');
    }, [s.pathname]),
    e(C, {
      children: t(Fs, {
        children: [
          e(P, {
            exact: !0,
            path: 'mp-pro/',
            element: e(ae, { children: e(Wa, {}) }),
          }),
          e(P, {
            path: 'mp-pro/signin',
            element: e(_e, { children: e(Ya, {}) }),
          }),
          e(P, {
            path: 'mp-pro/reset-password',
            element: e(_e, { children: e(Ja, {}) }),
          }),
          e(P, {
            path: '/mp-pro/verification-code/',
            element: e(_e, { children: e(Ka, {}) }),
          }),
          e(P, {
            path: '/mp-pro/confirm-password/',
            element: e(_e, { children: e(Xa, {}) }),
          }),
          e(P, {
            path: '/mp-pro/system-status/',
            element: e(ae, { children: e(il, {}) }),
          }),
          e(P, {
            path: '/mp-pro/planning/plannings/',
            element: e(ae, { children: e(nr, {}) }),
          }),
          e(P, {
            path: '/mp-pro/planning/plannings/orders/',
            element: e(ae, { children: e(Vn, {}) }),
          }),
          e(P, {
            path: '/mp-pro/planning/capabilities/',
            element: e(ae, { children: e(Qr, {}) }),
          }),
          e(P, {
            path: '/mp-pro/planning/calendar/',
            element: e(ae, { children: e(an, {}) }),
          }),
          e(P, {
            path: '/mp-pro/management/user/',
            element: e(ae, { children: e(pn, {}) }),
          }),
          e(P, {
            path: '/mp-pro/demo-gantt/',
            element: e(ae, { children: e(hn, {}) }),
          }),
          e(P, {
            path: '/mp-pro/planning/plannings/gantt/:id',
            element: e(ae, { children: e(fn, {}) }),
          }),
          e(P, { path: '/utility/404', element: e(yt, {}) }),
          e(P, { path: '/component/button', element: e(bn, {}) }),
          e(P, { path: '/component/form', element: e(vn, {}) }),
          e(P, { path: '/component/dropdown', element: e(kn, {}) }),
          e(P, { path: '/component/alert', element: e(Sn, {}) }),
          e(P, { path: '/component/modal', element: e(En, {}) }),
          e(P, { path: '/component/pagination', element: e(Mn, {}) }),
          e(P, { path: '/component/tabs', element: e(_n, {}) }),
          e(P, { path: '/component/breadcrumb', element: e(Dn, {}) }),
          e(P, { path: '/component/badge', element: e(On, {}) }),
          e(P, { path: '/component/avatar', element: e(Bn, {}) }),
          e(P, { path: '/component/tooltip', element: e(Fn, {}) }),
          e(P, { path: '/component/accordion', element: e(jn, {}) }),
          e(P, { path: '/component/icons', element: e(Rn, {}) }),
          e(P, { path: '*', element: e(yt, {}) }),
        ],
      }),
    })
  );
}
const Un = Is({
  reducer: {
    auth: va,
    users: qr,
    group: Zl,
    calendar: zr,
    planning: yl,
    kpi: Ta,
    systemStatus: ll,
  },
});
Ps.render(
  e(ve.StrictMode, {
    children: e(As, { children: e(js, { store: Un, children: e(Gn, {}) }) }),
  }),
  document.getElementById('root')
);
