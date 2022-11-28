var Ge = Object.defineProperty,
  Ke = Object.defineProperties;
var Xe = Object.getOwnPropertyDescriptors;
var G = Object.getOwnPropertySymbols;
var fe = Object.prototype.hasOwnProperty,
  ve = Object.prototype.propertyIsEnumerable;
var be = (l, a, s) =>
    a in l
      ? Ge(l, a, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (l[a] = s),
  H = (l, a) => {
    for (var s in a || (a = {})) fe.call(a, s) && be(l, s, a[s]);
    if (G) for (var s of G(a)) ve.call(a, s) && be(l, s, a[s]);
    return l;
  },
  he = (l, a) => Ke(l, Xe(a));
var K = (l, a) => {
  var s = {};
  for (var r in l) fe.call(l, r) && a.indexOf(r) < 0 && (s[r] = l[r]);
  if (l != null && G)
    for (var r of G(l)) a.indexOf(r) < 0 && ve.call(l, r) && (s[r] = l[r]);
  return s;
};
import {
  r as Qe,
  C as N,
  p as et,
  R as O,
  a as n,
  j as e,
  b as tt,
  F as y,
  c as t,
  L as k,
  u as ue,
  N as S,
  d as lt,
  e as _,
  f as Z,
  g as Y,
  h as j,
  i as X,
  k as Ne,
  l as at,
  m as st,
  n as b,
  o as rt,
  q as it,
  B as nt,
  P as ct,
} from './vendor.f5e6f246.js';
const dt = function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const c of i)
      if (c.type === 'childList')
        for (const o of c.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(i) {
    const c = {};
    return (
      i.integrity && (c.integrity = i.integrity),
      i.referrerpolicy && (c.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (c.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (c.credentials = 'omit')
        : (c.credentials = 'same-origin'),
      c
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const c = s(i);
    fetch(i.href, c);
  }
};
dt();
const U = () => Qe('./src/css/tailwind.config.js');
N.register(et);
N.defaults.font.family = '"Inter", sans-serif';
N.defaults.font.weight = '500';
N.defaults.color = U().theme.colors.slate[400];
N.defaults.scale.grid.color = U().theme.colors.slate[100];
N.defaults.plugins.tooltip.titleColor = U().theme.colors.slate[800];
N.defaults.plugins.tooltip.bodyColor = U().theme.colors.slate[800];
N.defaults.plugins.tooltip.backgroundColor = U().theme.colors.white;
N.defaults.plugins.tooltip.borderWidth = 1;
N.defaults.plugins.tooltip.borderColor = U().theme.colors.slate[200];
N.defaults.plugins.tooltip.displayColors = !1;
N.defaults.plugins.tooltip.mode = 'nearest';
N.defaults.plugins.tooltip.intersect = !1;
N.defaults.plugins.tooltip.position = 'nearest';
N.defaults.plugins.tooltip.caretSize = 0;
N.defaults.plugins.tooltip.caretPadding = 20;
N.defaults.plugins.tooltip.cornerRadius = 4;
N.defaults.plugins.tooltip.padding = 8;
N.register({
  id: 'chartAreaPlugin',
  beforeDraw: (l) => {
    if (
      l.config.options.chartArea &&
      l.config.options.chartArea.backgroundColor
    ) {
      const a = l.canvas.getContext('2d'),
        { chartArea: s } = l;
      a.save(),
        (a.fillStyle = l.config.options.chartArea.backgroundColor),
        a.fillRect(s.left, s.top, s.right - s.left, s.bottom - s.top),
        a.restore();
    }
  },
});
var ot = '/assets/openEye.ebf6ab42.svg',
  mt = '/assets/closedEye.805dfff2.svg',
  ht = '/assets/logoNide.c7f82b90.jpeg',
  ut = '/assets/logoMotors.0792df31.png',
  D = { openEye: ot, closedEye: mt, logoNide: ht, logoMotors: ut };
const ge = O.createContext({ parent: {} });
function pt() {
  const l = n.exports.useRef(!0);
  return (
    n.exports.useEffect(() => {
      l.current = !1;
    }, []),
    l.current
  );
}
function we(C) {
  var M = C,
    {
      show: l,
      enter: a = '',
      enterStart: s = '',
      enterEnd: r = '',
      leave: i = '',
      leaveStart: c = '',
      leaveEnd: o = '',
      appear: d,
      unmountOnExit: x,
      tag: u = 'div',
      children: m,
    } = M,
    h = K(M, [
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
  const q = a.split(' ').filter((f) => f.length),
    F = s.split(' ').filter((f) => f.length),
    R = r.split(' ').filter((f) => f.length),
    T = i.split(' ').filter((f) => f.length),
    W = c.split(' ').filter((f) => f.length),
    P = o.split(' ').filter((f) => f.length),
    $ = x;
  function A(f, p) {
    p.length && f.classList.add(...p);
  }
  function I(f, p) {
    p.length && f.classList.remove(...p);
  }
  const v = O.useRef(null);
  return e(tt, {
    appear: d,
    nodeRef: v,
    unmountOnExit: $,
    in: l,
    addEndListener: (f) => {
      v.current.addEventListener('transitionend', f, !1);
    },
    onEnter: () => {
      $ || (v.current.style.display = null), A(v.current, [...q, ...F]);
    },
    onEntering: () => {
      I(v.current, F), A(v.current, R);
    },
    onEntered: () => {
      I(v.current, [...R, ...q]);
    },
    onExit: () => {
      A(v.current, [...T, ...W]);
    },
    onExiting: () => {
      I(v.current, W), A(v.current, P);
    },
    onExited: () => {
      I(v.current, [...P, ...T]), $ || (v.current.style.display = 'none');
    },
    children: e(
      u,
      he(H({ ref: v }, h), {
        style: { display: $ ? null : 'none' },
        children: m,
      })
    ),
  });
}
function g(r) {
  var i = r,
    { show: l, appear: a } = i,
    s = K(i, ['show', 'appear']);
  const { parent: c } = n.exports.useContext(ge),
    o = pt();
  return l === void 0
    ? e(we, H({ appear: c.appear || !c.isInitialRender, show: c.show }, s))
    : e(ge.Provider, {
        value: { parent: { show: l, isInitialRender: o, appear: a } },
        children: e(we, H({ appear: a, show: l }, s)),
      });
}
function ye({
  align: l,
  nameDropDown: a,
  opcion1: s,
  opcion2: r,
  opcion3: i,
  opcion4: c,
  opcion5: o,
}) {
  const [d, x] = n.exports.useState(!1),
    u = n.exports.useRef(null),
    m = n.exports.useRef(null),
    h = () => x(!d);
  return (
    n.exports.useEffect(() => {
      const C = ({ target: M }) => {
        !m.current ||
          !d ||
          m.current.contains(M) ||
          u.current.contains(M) ||
          x(!1);
      };
      return (
        document.addEventListener('click', C),
        () => document.removeEventListener('click', C)
      );
    }),
    n.exports.useEffect(() => {
      const C = ({ keyCode: M }) => {
        !d || M !== 27 || x(!1);
      };
      return (
        document.addEventListener('keydown', C),
        () => document.removeEventListener('keydown', C)
      );
    }),
    e(y, {
      children: t('div', {
        className: 'relative inline-flex',
        children: [
          e('button', {
            ref: u,
            className: 'inline-flex justify-center items-center group',
            'aria-haspopup': 'true',
            onClick: () => x(!d),
            'aria-expanded': d,
            children: t('div', {
              className: 'flex items-center truncate',
              children: [
                e('span', {
                  className:
                    'truncate ml-2 text-sm font-medium group-hover:text-slate-800',
                  children: a,
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
          e(g, {
            className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
              l === 'right' ? 'right-0' : 'left-0'
            }`,
            show: d,
            enter: 'transition ease-out duration-200 transform',
            enterStart: 'opacity-0 -translate-y-2',
            enterEnd: 'opacity-100 translate-y-0',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            children: e('div', {
              ref: m,
              onFocus: () => x(!0),
              onBlur: () => x(!1),
              children: e('ul', {
                children: t('li', {
                  children: [
                    e(k, {
                      className:
                        'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                      to: '/mp-pro/settings',
                      onClick: h,
                      children: s,
                    }),
                    e(k, {
                      className:
                        'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                      to: '/mp-pro/settings',
                      onClick: h,
                      children: r,
                    }),
                    e(k, {
                      className:
                        'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                      to: '/mp-pro/settings',
                      onClick: h,
                      children: i,
                    }),
                    e(k, {
                      className:
                        'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                      to: '/mp-pro/settings',
                      onClick: h,
                      children: c,
                    }),
                    e(k, {
                      className:
                        'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                      to: '/mp-pro/settings',
                      onClick: h,
                      children: o,
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
    })
  );
}
function V({ children: l, activecondition: a }) {
  const [s, r] = n.exports.useState(a),
    i = () => {
      r(!s);
    };
  return e('div', {
    className: 'lg:hidden',
    children: e('li', {
      className: `lg:absolute px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        a && ' lg:bg-white '
      }`,
      children: l(i, s),
    }),
  });
}
function xt({ sidebarOpen: l, setSidebarOpen: a }) {
  const s = ue(),
    { pathname: r } = s,
    i = n.exports.useRef(null),
    c = n.exports.useRef(null),
    o = localStorage.getItem('sidebar-expanded'),
    [d, x] = n.exports.useState(o === null ? !1 : o === 'true');
  return (
    n.exports.useEffect(() => {
      const u = ({ target: m }) => {
        !c.current ||
          !i.current ||
          !l ||
          c.current.contains(m) ||
          i.current.contains(m) ||
          a(!1);
      };
      return (
        document.addEventListener('click', u),
        () => document.removeEventListener('click', u)
      );
    }),
    n.exports.useEffect(() => {
      const u = ({ keyCode: m }) => {
        !l || m !== 27 || a(!1);
      };
      return (
        document.addEventListener('keydown', u),
        () => document.removeEventListener('keydown', u)
      );
    }),
    n.exports.useEffect(() => {
      localStorage.setItem('sidebar-expanded', d),
        d
          ? document.querySelector('body').classList.add('sidebar-expanded')
          : document.querySelector('body').classList.remove('sidebar-expanded');
    }, [d]),
    t('div', {
      children: [
        e('div', {
          className: `fixed inset-0 bg-slate-900  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
            l ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`,
          'aria-hidden': 'true',
        }),
        t('div', {
          id: 'sidebar',
          ref: c,
          className: `flex flex-col absolute lg:static z-40 left-0 top-0 lg:translate-x-0 transform md:h-screen lg:h-16 no-scrollbar lg:w-full bg-slate-800 lg:bg-white p-4 transition-all duration-200 ease-in-out lg:mb-10 ${
            l ? 'translate-x-0' : '-translate-x-64'
          }`,
          children: [
            e('div', {
              className: 'mb-10 lg:mb-0 sm:px-2',
              children: t('button', {
                ref: i,
                className: 'lg:hidden text-slate-500 hover:text-slate-400',
                onClick: () => a(!l),
                'aria-controls': 'sidebar',
                'aria-expanded': l,
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
            }),
            e('div', {
              children: t('div', {
                className: 'lg:flex lg:space-x-10',
                children: [
                  t('ul', {
                    className: 'lg:flex lg:items-center space-x-10',
                    children: [
                      t('section', {
                        className: 'flex md:invisible lg:visible',
                        children: [
                          e('figure', {
                            className: 'flex items-center',
                            children: t('svg', {
                              className: 'shrink-0 h-6 w-6',
                              viewBox: '0 0 24 24',
                              children: [
                                e('path', {
                                  className: 'fill-current text-slate-400 ',
                                  d: 'M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z',
                                }),
                                e('path', {
                                  className: 'fill-current text-slate-600 ',
                                  d: 'M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z',
                                }),
                                e('path', {
                                  className: 'fill-current text-slate-400 ',
                                  d: 'M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z',
                                }),
                              ],
                            }),
                          }),
                          e(ye, {
                            opcion1: 'opcion1',
                            opcion2: 'opcion2',
                            opcion3: 'opcion3',
                            opcion4: 'opcion4',
                            opcion5: 'opcion5',
                            nameDropDown: 'Dashboard',
                          }),
                        ],
                      }),
                      e(V, {
                        activecondition:
                          r === '/mp-pro/' || r.includes('dashboard'),
                        children: (u, m) =>
                          t(O.Fragment, {
                            children: [
                              e('a', {
                                href: '#0',
                                className: ` text-slate-200 lg:text-slate-900 hover:text-white lg:hover:text-slate-400 truncate transition duration-150 ${
                                  (r === '/mp-pro/' ||
                                    r.includes('dashboard')) &&
                                  'hover:text-slate-200'
                                }`,
                                onClick: (h) => {
                                  h.preventDefault(), d ? u() : x(!0);
                                },
                                children: t('div', {
                                  className:
                                    'flex items-center justify-between ',
                                  children: [
                                    t('div', {
                                      className: 'flex items-center',
                                      children: [
                                        t('svg', {
                                          className: 'shrink-0 h-6 w-6',
                                          viewBox: '0 0 24 24',
                                          children: [
                                            e('path', {
                                              className: `fill-current text-slate-400 ${
                                                r.includes('ecommerce') &&
                                                'text-indigo-300'
                                              }`,
                                              d: 'M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z',
                                            }),
                                            e('path', {
                                              className: `fill-current text-slate-700 ${
                                                r.includes('ecommerce') &&
                                                '!text-indigo-600'
                                              }`,
                                              d: 'M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z',
                                            }),
                                            e('path', {
                                              className: `fill-current text-slate-600 ${
                                                r.includes('ecommerce') &&
                                                'text-primary'
                                              }`,
                                              d: 'M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z',
                                            }),
                                          ],
                                        }),
                                        e('span', {
                                          className:
                                            'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                          children: 'Dashboard',
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className: 'flex shrink-0 ml-2',
                                      children: e('svg', {
                                        className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                          m && 'transform rotate-180'
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
                                  className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                  children: [
                                    e('li', {
                                      className: 'mb-1 last:mb-0',
                                      children: e(S, {
                                        end: !0,
                                        to: '/mp-pro/',
                                        className: ({ isActive: h }) =>
                                          'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400  lg:text-slate-500 transition duration-150 truncate ' +
                                          (h ? '!text-primary' : ''),
                                        children: e('span', {
                                          className:
                                            'text-sm font-medium lg:opacity-0  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                          children: 'Main',
                                        }),
                                      }),
                                    }),
                                    e('li', {
                                      className: 'mb-1 last:mb-0',
                                      children: e(S, {
                                        end: !0,
                                        to: '/dashboard/analytics',
                                        className: ({ isActive: h }) =>
                                          'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                          (h ? '!text-primary' : ''),
                                        children: e('span', {
                                          className:
                                            'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                          children: 'Analytics',
                                        }),
                                      }),
                                    }),
                                    e('li', {
                                      className: 'mb-1 last:mb-0',
                                      children: e(S, {
                                        end: !0,
                                        to: '/dashboard/fintech',
                                        className: ({ isActive: h }) =>
                                          'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                          (h ? '!text-primary' : ''),
                                        children: e('span', {
                                          className:
                                            'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                          children: 'Fintech',
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  t('ul', {
                    className: 'lg:flex lg:items-center space-x-10',
                    children: [
                      t('section', {
                        className: 'flex md:invisible lg:visible',
                        children: [
                          e('figure', {
                            className: 'flex items-center',
                            children: t('svg', {
                              className: 'shrink-0 h-6 w-6',
                              viewBox: '0 0 24 24',
                              children: [
                                e('path', {
                                  className: `fill-current text-slate-400 ${
                                    r.includes('ecommerce') && 'text-indigo-300'
                                  }`,
                                  d: 'M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z',
                                }),
                                e('path', {
                                  className: `fill-current text-slate-700 ${
                                    r.includes('ecommerce') &&
                                    '!text-indigo-600'
                                  }`,
                                  d: 'M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z',
                                }),
                                e('path', {
                                  className: `fill-current text-slate-600 ${
                                    r.includes('ecommerce') && 'text-primary'
                                  }`,
                                  d: 'M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z',
                                }),
                              ],
                            }),
                          }),
                          e(ye, {
                            opcion1: 'opcion1',
                            opcion2: 'opcion2',
                            opcion3: 'opcion3',
                            opcion4: 'opcion4',
                            opcion5: 'opcion5',
                            nameDropDown: 'Dashboard',
                          }),
                        ],
                      }),
                      e(V, {
                        activecondition:
                          r === '/mp-pro/' || r.includes('dashboard'),
                        children: (u, m) =>
                          t(O.Fragment, {
                            children: [
                              e('a', {
                                href: '#0',
                                className: ` text-slate-200 lg:text-slate-900 hover:text-white lg:hover:text-slate-400 truncate transition duration-150 ${
                                  (r === '/mp-pro/' ||
                                    r.includes('dashboard')) &&
                                  'hover:text-slate-200'
                                }`,
                                onClick: (h) => {
                                  h.preventDefault(), d ? u() : x(!0);
                                },
                                children: t('div', {
                                  className:
                                    'flex items-center justify-between ',
                                  children: [
                                    t('div', {
                                      className: 'flex items-center',
                                      children: [
                                        t('svg', {
                                          className: 'shrink-0 h-6 w-6',
                                          viewBox: '0 0 24 24',
                                          children: [
                                            e('path', {
                                              className: `fill-current text-slate-400 ${
                                                (r === '/mp-pro/' ||
                                                  r.includes('dashboard')) &&
                                                '!text-primary'
                                              }`,
                                              d: 'M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z',
                                            }),
                                            e('path', {
                                              className: `fill-current text-slate-600 ${
                                                (r === '/mp-pro/' ||
                                                  r.includes('dashboard')) &&
                                                'text-secondary'
                                              }`,
                                              d: 'M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z',
                                            }),
                                            e('path', {
                                              className: `fill-current text-slate-400 ${
                                                (r === '/mp-pro/' ||
                                                  r.includes('dashboard')) &&
                                                'text-white'
                                              }`,
                                              d: 'M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z',
                                            }),
                                          ],
                                        }),
                                        e('span', {
                                          className:
                                            'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                          children: 'Dashboard',
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className: 'flex shrink-0 ml-2',
                                      children: e('svg', {
                                        className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                          m && 'transform rotate-180'
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
                                  className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                  children: [
                                    e('li', {
                                      className: 'mb-1 last:mb-0',
                                      children: e(S, {
                                        end: !0,
                                        to: '/mp-pro/',
                                        className: ({ isActive: h }) =>
                                          'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400  lg:text-slate-500 transition duration-150 truncate ' +
                                          (h ? '!text-primary' : ''),
                                        children: e('span', {
                                          className:
                                            'text-sm font-medium lg:opacity-0  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                          children: 'Main',
                                        }),
                                      }),
                                    }),
                                    e('li', {
                                      className: 'mb-1 last:mb-0',
                                      children: e(S, {
                                        end: !0,
                                        to: '/dashboard/analytics',
                                        className: ({ isActive: h }) =>
                                          'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                          (h ? '!text-primary' : ''),
                                        children: e('span', {
                                          className:
                                            'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                          children: 'Analytics',
                                        }),
                                      }),
                                    }),
                                    e('li', {
                                      className: 'mb-1 last:mb-0',
                                      children: e(S, {
                                        end: !0,
                                        to: '/dashboard/fintech',
                                        className: ({ isActive: h }) =>
                                          'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                          (h ? '!text-primary' : ''),
                                        children: e('span', {
                                          className:
                                            'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                          children: 'Fintech',
                                        }),
                                      }),
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
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function L({ sidebarOpen: l, setSidebarOpen: a }) {
  const s = ue(),
    { pathname: r } = s,
    i = n.exports.useRef(null),
    c = n.exports.useRef(null),
    o = localStorage.getItem('sidebar-expanded'),
    [d, x] = n.exports.useState(o === null ? !1 : o === 'true');
  return (
    n.exports.useEffect(() => {
      const u = ({ target: m }) => {
        !c.current ||
          !i.current ||
          !l ||
          c.current.contains(m) ||
          i.current.contains(m) ||
          a(!1);
      };
      return (
        document.addEventListener('click', u),
        () => document.removeEventListener('click', u)
      );
    }),
    n.exports.useEffect(() => {
      const u = ({ keyCode: m }) => {
        !l || m !== 27 || a(!1);
      };
      return (
        document.addEventListener('keydown', u),
        () => document.removeEventListener('keydown', u)
      );
    }),
    n.exports.useEffect(() => {
      localStorage.setItem('sidebar-expanded', d),
        d
          ? document.querySelector('body').classList.add('sidebar-expanded')
          : document.querySelector('body').classList.remove('sidebar-expanded');
    }, [d]),
    t('div', {
      children: [
        e('div', {
          className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
            l ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`,
          'aria-hidden': 'true',
        }),
        t('div', {
          id: 'sidebar',
          ref: c,
          className: `flex flex-col absolute z-40 left-0 top-0  lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
            l ? 'translate-x-0' : '-translate-x-64'
          }`,
          children: [
            t('div', {
              className: 'flex justify-between mb-10 pr-3 sm:px-2',
              children: [
                t('button', {
                  ref: i,
                  className: 'lg:hidden text-slate-500 hover:text-slate-400',
                  onClick: () => a(!l),
                  'aria-controls': 'sidebar',
                  'aria-expanded': l,
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
                d
                  ? e('figure', {
                      className: 'block w-46',
                      children: e('img', { src: D.logoMotors, alt: 'Logo' }),
                    })
                  : e('figure', {
                      className: 'block',
                      children: e('img', { src: D.logoMotors, alt: 'Logo' }),
                    }),
              ],
            }),
            e('div', {
              className: 'space-y-8',
              children: e('div', {
                children: t('ul', {
                  className: 'mt-3',
                  children: [
                    e(V, {
                      activecondition: r === '/' || r.includes('dashboard'),
                      children: (u, m) =>
                        t(O.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                (r === '/' || r.includes('dashboard')) &&
                                'hover:text-slate-200'
                              }`,
                              onClick: (h) => {
                                h.preventDefault(), d ? u() : x(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              (r === '/' ||
                                                r.includes('dashboard')) &&
                                              '!text-primary'
                                            }`,
                                            d: 'M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              (r === '/' ||
                                                r.includes('dashboard')) &&
                                              'text-secondary'
                                            }`,
                                            d: 'M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              (r === '/' ||
                                                r.includes('dashboard')) &&
                                              'text-white'
                                            }`,
                                            d: 'M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Dashboard',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
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
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: [
                                  e('li', {
                                    className: 'mb-1 last:mb-0',
                                    children: e(S, {
                                      end: !0,
                                      to: '/',
                                      className: ({ isActive: h }) =>
                                        'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                        (h ? '!text-primary' : ''),
                                      children: e('span', {
                                        className:
                                          'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Main',
                                      }),
                                    }),
                                  }),
                                  e('li', {
                                    className: 'mb-1 last:mb-0',
                                    children: e(S, {
                                      end: !0,
                                      to: '/dashboard/analytics',
                                      className: ({ isActive: h }) =>
                                        'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                        (h ? '!text-primary' : ''),
                                      children: e('span', {
                                        className:
                                          'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Analytics',
                                      }),
                                    }),
                                  }),
                                  e('li', {
                                    className: 'mb-1 last:mb-0',
                                    children: e(S, {
                                      end: !0,
                                      to: '/dashboard/fintech',
                                      className: ({ isActive: h }) =>
                                        'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                        (h ? '!text-primary' : ''),
                                      children: e('span', {
                                        className:
                                          'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Fintech',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(V, {
                      activecondition: r.includes('ecommerce'),
                      children: (u, m) =>
                        t(O.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                r.includes('ecommerce') &&
                                'hover:text-slate-200'
                              }`,
                              onClick: (h) => {
                                h.preventDefault(), d ? u() : x(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              r.includes('ecommerce') &&
                                              'text-indigo-300'
                                            }`,
                                            d: 'M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-700 ${
                                              r.includes('ecommerce') &&
                                              '!text-indigo-600'
                                            }`,
                                            d: 'M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              r.includes('ecommerce') &&
                                              'text-primary'
                                            }`,
                                            d: 'M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'E-Commerce',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
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
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(S, {
                                    end: !0,
                                    to: '/ecommerce/customers',
                                    className: ({ isActive: h }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (h ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'Customers',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(V, {
                      activecondition: r.includes('community'),
                      children: (u, m) =>
                        t(O.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                r.includes('community') &&
                                'hover:text-slate-200'
                              }`,
                              onClick: (h) => {
                                h.preventDefault(), d ? u() : x(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              r.includes('community') &&
                                              'text-primary'
                                            }`,
                                            d: 'M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              r.includes('community') &&
                                              'text-secondary'
                                            }`,
                                            d: 'M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Community',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
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
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(S, {
                                    end: !0,
                                    to: '/community/users-tabs',
                                    className: ({ isActive: h }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (h ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'Users - Tabs',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(V, {
                      activecondition: r.includes('finance'),
                      children: (u, m) =>
                        t(O.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                r.includes('finance') && 'hover:text-slate-200'
                              }`,
                              onClick: (h) => {
                                h.preventDefault(), d ? u() : x(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              r.includes('finance') &&
                                              'text-indigo-300'
                                            }`,
                                            d: 'M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-700 ${
                                              r.includes('finance') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              r.includes('finance') &&
                                              'text-indigo-600'
                                            }`,
                                            d: 'M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Finance',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
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
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(S, {
                                    end: !0,
                                    to: '/finance/cards',
                                    className: ({ isActive: h }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (h ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'Cards',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(V, {
                      activecondition: r.includes('job'),
                      children: (u, m) =>
                        t(O.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                r.includes('job') && 'hover:text-slate-200'
                              }`,
                              onClick: (h) => {
                                h.preventDefault(), d ? u() : x(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-700 ${
                                              r.includes('job') &&
                                              '!text-indigo-600'
                                            }`,
                                            d: 'M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              r.includes('job') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              r.includes('job') &&
                                              '!text-indigo-300'
                                            }`,
                                            d: 'M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Job Board',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
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
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(S, {
                                    end: !0,
                                    to: '/job/job-listing',
                                    className: ({ isActive: h }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (h ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'Listing',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(V, {
                      activecondition: r.includes('tasks'),
                      children: (u, m) =>
                        t(O.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                r.includes('tasks') && 'hover:text-slate-200'
                              }`,
                              onClick: (h) => {
                                h.preventDefault(), d ? u() : x(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              r.includes('tasks') &&
                                              'text-primary'
                                            }`,
                                            d: 'M8 1v2H3v19h18V3h-5V1h7v23H1V1z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              r.includes('tasks') &&
                                              'text-primary'
                                            }`,
                                            d: 'M1 1h22v23H1z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              r.includes('tasks') &&
                                              'text-indigo-300'
                                            }`,
                                            d: 'M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Tasks',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
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
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(S, {
                                    end: !0,
                                    to: '/tasks/kanban',
                                    className: ({ isActive: h }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (h ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'Kanban',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
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
                  onClick: () => x(!d),
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
                          className: 'text-slate-400',
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
function ke({ align: l }) {
  const [a, s] = n.exports.useState(!1),
    r = n.exports.useRef(null),
    i = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const c = ({ target: o }) => {
        !i.current ||
          !a ||
          i.current.contains(o) ||
          r.current.contains(o) ||
          s(!1);
      };
      return (
        document.addEventListener('click', c),
        () => document.removeEventListener('click', c)
      );
    }),
    n.exports.useEffect(() => {
      const c = ({ keyCode: o }) => {
        !a || o !== 27 || s(!1);
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
      );
    }),
    t('div', {
      className: 'relative inline-flex',
      children: [
        t('button', {
          ref: r,
          className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
            a && 'bg-slate-200'
          }`,
          'aria-haspopup': 'true',
          onClick: () => s(!a),
          'aria-expanded': a,
          children: [
            e('span', { className: 'sr-only', children: 'Need help?' }),
            e('svg', {
              className: 'w-4 h-4',
              viewBox: '0 0 16 16',
              xmlns: 'http://www.w3.org/2000/svg',
              children: e('path', {
                className: 'fill-current text-slate-500',
                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
              }),
            }),
          ],
        }),
        e(g, {
          className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            l === 'right' ? 'right-0' : 'left-0'
          }`,
          show: a,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('div', {
            ref: i,
            onFocus: () => s(!0),
            onBlur: () => s(!1),
            children: [
              e('div', {
                className:
                  'text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4',
                children: 'Need help?',
              }),
              t('ul', {
                children: [
                  e('li', {
                    children: t(k, {
                      className:
                        'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                      to: '#0',
                      onClick: () => s(!a),
                      children: [
                        t('svg', {
                          className:
                            'w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2',
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
                        e('span', { children: 'Documentation' }),
                      ],
                    }),
                  }),
                  e('li', {
                    children: t(k, {
                      className:
                        'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                      to: '#0',
                      onClick: () => s(!a),
                      children: [
                        e('svg', {
                          className:
                            'w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2',
                          viewBox: '0 0 12 12',
                          children: e('path', {
                            d: 'M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z',
                          }),
                        }),
                        e('span', { children: 'Support Site' }),
                      ],
                    }),
                  }),
                  e('li', {
                    children: t(k, {
                      className:
                        'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                      to: '#0',
                      onClick: () => s(!a),
                      children: [
                        e('svg', {
                          className:
                            'w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2',
                          viewBox: '0 0 12 12',
                          children: e('path', {
                            d: 'M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z',
                          }),
                        }),
                        e('span', { children: 'Contact us' }),
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
const ft = { user: null, isCorrect: !1, loading: !1, resetPassword: null },
  Se = lt({
    initialState: ft,
    name: 'auth',
    reducers: {
      setUser: (l, a) => {
        l.user = a.payload;
      },
      setIsCorrect: (l, a) => {
        l.isCorrect = a.payload;
      },
      setLoading: (l, a) => {
        l.loading = a.payload;
      },
    },
  }),
  { setUser: vt, setIsCorrect: E, setLoading: B } = Se.actions,
  bt = (l) => l.auth.user,
  Q = (l) => l.auth.isCorrect,
  ee = (l) => l.auth.loading;
var Nt = Se.reducer;
const gt = (l, a) => (s) => {
    s(B(!0)),
      _.post('http://44.211.175.241/api/auth/login/', l)
        .then((r) => {
          s(B(!1)),
            r.data.status_code === 202 &&
              (s(vt(r.data)),
              localStorage.setItem('token', r.data.token),
              localStorage.setItem('email', r.data.email),
              localStorage.setItem('first_name', r.data.first_name),
              s(E(!1)),
              a('/mp-pro/'));
        })
        .catch(() => {
          s(E(!0)), s(B(!1));
        });
  },
  wt = (l) => () => {
    const a = localStorage.getItem('email'),
      s = localStorage.getItem('token'),
      r = { email: a };
    _.post('http://44.211.175.241/api/auth/logout/', r, {
      headers: { Authorization: `token ${s}` },
    }).then((i) => {
      i.data.status_code === 200 &&
        (localStorage.clear(), l('/mp-pro/signin/'));
    });
  },
  yt = (l, a) => (s) => {
    s(B(!0)),
      _.post('http://44.211.175.241/api/auth/password-reset/send-code', l)
        .then((r) => {
          s(B(!1)),
            r.data.status_code === 200 &&
              (sessionStorage.setItem('code', r.data.code),
              sessionStorage.setItem('email', l.email),
              s(E(!1)),
              a('/mp-pro/verification-code/'));
        })
        .catch(() => {
          s(E(!0)), s(B(!1));
        });
  },
  kt = (l, a) => (s) => {
    s(B(!0));
    const r = {
      email: sessionStorage.getItem('email'),
      user_code: parseInt(l.user_code),
    };
    _.post('http://44.211.175.241/api/auth/password-reset/verify-code', r)
      .then((i) => {
        s(B(!1)),
          i.data.status_code === 202 &&
            (sessionStorage.setItem('token', i.data.token),
            sessionStorage.setItem('email', i.data.email),
            s(E(!1)),
            a('/mp-pro/confirm-password/'));
      })
      .catch(() => {
        s(E(!0)), s(B(!1));
      });
  },
  St = (l, a) => (s) => {
    s(B(!0));
    const r = sessionStorage.getItem('token'),
      i = { email: sessionStorage.getItem('email'), new_password: l.password };
    _.post('http://44.211.175.241/api/auth/password-reset/confirmation', i, {
      headers: { Authorization: `token ${r}` },
    })
      .then((c) => {
        s(B(!1)),
          c.data.status_code === 200 &&
            (s(E(!0)),
            setTimeout(() => {
              a('/mp-pro/signin/'), s(E(!1));
            }, 3e3));
      })
      .catch(() => {
        s(E(!1)), s(B(!1));
      });
  };
function Le({ align: l, props: a }) {
  const [s, r] = n.exports.useState(!1),
    i = Z(),
    c = Y(),
    o = n.exports.useRef(null),
    d = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const x = ({ target: u }) => {
        !d.current ||
          !s ||
          d.current.contains(u) ||
          o.current.contains(u) ||
          r(!1);
      };
      return (
        document.addEventListener('click', x),
        () => document.removeEventListener('click', x)
      );
    }),
    n.exports.useEffect(() => {
      const x = ({ keyCode: u }) => {
        !s || u !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', x),
        () => document.removeEventListener('keydown', x)
      );
    }),
    e(y, {
      children: t('div', {
        className: 'relative inline-flex',
        children: [
          e('button', {
            ref: o,
            className: 'inline-flex justify-center items-center group',
            'aria-haspopup': 'true',
            onClick: () => r(!s),
            'aria-expanded': s,
            children: t('div', {
              className: 'flex items-center truncate',
              children: [
                e('span', {
                  className:
                    'truncate ml-2 text-sm font-medium group-hover:text-slate-800',
                  children: 'Master Schedule',
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
          e(g, {
            className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
              l === 'right' ? 'right-0' : 'left-0'
            }`,
            show: s,
            enter: 'transition ease-out duration-200 transform',
            enterStart: 'opacity-0 -translate-y-2',
            enterEnd: 'opacity-100 translate-y-0',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            children: t('div', {
              ref: d,
              onFocus: () => r(!0),
              onBlur: () => r(!1),
              children: [
                t('div', {
                  className: 'pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200',
                  children: [
                    e('div', {
                      className: 'font-medium text-slate-800',
                      children: ' Master Schedule',
                    }),
                    e('div', {
                      className: 'text-xs text-slate-500 italic',
                      children: 'Administrator',
                    }),
                  ],
                }),
                t('ul', {
                  children: [
                    e('li', {
                      children: e(k, {
                        className:
                          'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                        to: '/mp-pro/settings',
                        onClick: () => r(!s),
                        children: 'Configuraci\xF3n',
                      }),
                    }),
                    e('li', {
                      children: e('button', {
                        className:
                          'font-medium text-sm text-primary hover:text-indigo-600 flex items-center py-1 px-3',
                        onClick: () => {
                          r(!s), c(wt(i));
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
function w({ sidebarOpen: l, setSidebarOpen: a }) {
  return (
    n.exports.useState(!1),
    e(y, {
      children: e('header', {
        className: 'sticky top-0 bg-white border-b border-slate-200 z-30',
        children: e('div', {
          className: 'px-4 sm:px-6 lg:px-8',
          children: t('div', {
            className: 'flex items-center justify-between h-16 -mb-px',
            children: [
              e('div', { children: 'NIDE | MP-PRO' }),
              e('div', {
                className: 'flex',
                children: t('button', {
                  className: 'text-slate-500 hover:text-slate-600 lg:hidden',
                  'aria-controls': 'sidebar',
                  'aria-expanded': l,
                  onClick: () => a(!l),
                  children: [
                    e('span', {
                      className: 'sr-only',
                      children: 'Open sidebar',
                    }),
                    t('svg', {
                      className: 'w-6 h-6 fill-current',
                      viewBox: '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        e('rect', { x: '4', y: '5', width: '16', height: '2' }),
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
                  ],
                }),
              }),
              t('div', {
                className: 'flex items-center space-x-3',
                children: [
                  e(ke, { align: 'right' }),
                  e('hr', { className: 'w-px h-6 bg-slate-200 mx-3' }),
                  e(Le, { align: 'right' }),
                ],
              }),
            ],
          }),
        }),
      }),
    })
  );
}
function Lt() {
  const [l, a] = n.exports.useState(!1);
  return e('div', {
    className: 'flex h-screen overflow-hidden ',
    children: t('div', {
      className:
        'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden',
      children: [
        e(w, { sidebarOpen: l, setSidebarOpen: a }),
        e('main', {
          children: e('div', {
            children: e(xt, { sidebarOpen: l, setSidebarOpen: a }),
          }),
        }),
      ],
    }),
  });
}
var Mt = '/assets/404-illustration.a20d59b6.svg';
function Me() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
          e('main', {
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
                        src: Mt,
                        width: '176',
                        height: '176',
                        alt: '404 illustration',
                      }),
                    }),
                    e('div', {
                      className: 'mb-6',
                      children: 'Hmm... La pagina no existe!',
                    }),
                    e(k, {
                      to: 'mp-pro/',
                      className:
                        'btn bg-primary hover:bg-indigo-600 text-white',
                      children: 'Regresar',
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
var te = '/assets/auth-image.b4a9973b.jpg';
function le(l) {
  return e('div', {
    className: 'm-1.5',
    children: t('button', {
      className:
        'btn bg-primary hover:bg-indigo-600 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none',
      disabled: !0,
      children: [
        e('svg', {
          className: 'animate-spin w-4 h-4 fill-current shrink-0',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z',
          }),
        }),
        e('span', { className: 'ml-2', children: l.loading }),
      ],
    }),
  });
}
function pe(l) {
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
        e('span', { className: ' text-sm', children: l.message }),
      ],
    }),
  });
}
function zt() {
  const l = Y();
  j(bt);
  const a = j(Q),
    s = j(ee),
    r = Z(),
    [i, c] = n.exports.useState(!1),
    o = () => c(!i),
    d = (C) => {
      l(gt(C, r));
    },
    {
      register: x,
      handleSubmit: u,
      formState: { errors: m },
    } = X(),
    h = () =>
      s
        ? e('div', { children: e(le, { loading: 'cargando' }) })
        : e('button', {
            type: 'submit',
            className:
              'btn bg-primary hover:bg-secondary hover:text-primary text-white ml-3',
            children: 'Iniciar sesi\xF3n',
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
                children: e('div', {
                  className:
                    'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                  children: e('figure', {
                    className: 'block',
                    children: e('img', {
                      src: D.logoNide,
                      alt: 'Logo',
                      className: 'w-36',
                    }),
                  }),
                }),
              }),
              t('div', {
                className: 'w-96 mx-auto px-4 py-8',
                children: [
                  e('h1', {
                    className: 'text-3xl text-slate-800 font-bold mb-6',
                    children: 'Bienvenido de nuevo',
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
                                className: 'block text-sm font-medium mb-1',
                                htmlFor: 'email',
                                children: 'Correo electr\xF3nico',
                              }),
                              e(
                                'input',
                                H(
                                  {
                                    id: 'email',
                                    className: 'form-input w-full',
                                    type: 'email',
                                    autoComplete: 'off',
                                  },
                                  x('email', {
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
                              m.email &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: m.email.message,
                                }),
                            ],
                          }),
                          t('div', {
                            className: 'relative',
                            children: [
                              e('label', {
                                className: 'block text-sm font-semibold mb-1',
                                htmlFor: 'password',
                                children: 'Contrase\xF1a:',
                              }),
                              t('div', {
                                className: 'focus-within:text-primary ',
                                children: [
                                  e(
                                    'input',
                                    H(
                                      {
                                        maxLength: '35',
                                        className: 'form-input w-full',
                                        type: i ? 'text' : 'password',
                                        autoComplete: 'off',
                                      },
                                      x('password', {
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
                                        'absolute inset-2 -top-7 left-auto flex items-center ',
                                      children: i
                                        ? e('img', {
                                            onClick: o,
                                            src: D.openEye,
                                            alt: 'Ojo abierto',
                                          })
                                        : e('img', {
                                            onClick: o,
                                            src: D.closedEye,
                                            alt: 'Ojo cerrado',
                                          }),
                                    }),
                                  }),
                                ],
                              }),
                              m.password &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: m.password.message,
                                }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        className: 'flex items-center justify-between mt-6',
                        children: [
                          e('div', {
                            className: 'mr-1',
                            children: e(k, {
                              className: 'text-sm underline hover:no-underline',
                              to: '/mp-pro/reset-password',
                              children: '\xBFOlvidaste la contrase\xF1a?',
                            }),
                          }),
                          h(),
                        ],
                      }),
                    ],
                  }),
                  e('footer', {
                    className: 'pt-5 mt-6 border-t border-slate-200',
                    children:
                      a &&
                      e(pe, {
                        message:
                          'El correo no se encuentra en nuestra base de datos.',
                      }),
                  }),
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
            src: te,
            width: '760',
            height: '1024',
            alt: 'Authentication',
          }),
        }),
      ],
    }),
  });
}
function Ct() {
  const {
      register: l,
      handleSubmit: a,
      formState: { errors: s },
    } = X(),
    r = Y(),
    i = Z(),
    c = j(Q),
    o = j(ee),
    d = () => {
      sessionStorage.clear(), r(E(!1));
    },
    x = (u) => r(yt(u, i));
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
                children: e('div', {
                  className:
                    'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                  children: e(k, {
                    className: 'block',
                    to: '/mp-pro/signin',
                    onClick: d,
                    children: e('img', {
                      src: D.logoNide,
                      alt: 'Logo',
                      className: 'w-36',
                    }),
                  }),
                }),
              }),
              t('div', {
                className: 'max-w-sm mx-auto px-4 py-8',
                children: [
                  e('h1', {
                    className: 'text-3xl text-slate-800 font-bold mb-6',
                    children: 'Restablece tu contrase\xF1a',
                  }),
                  t('form', {
                    onSubmit: a(x),
                    children: [
                      e('div', {
                        className: 'space-y-4',
                        children: t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              htmlFor: 'email',
                              children: [
                                'Correo electr\xF3nico',
                                ' ',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e(
                              'input',
                              H(
                                {
                                  autoComplete: 'off',
                                  className: 'form-input w-full',
                                  type: 'email',
                                },
                                l('email', {
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
                            s.email &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: s.email.message,
                              }),
                          ],
                        }),
                      }),
                      e('div', {
                        className: 'flex justify-end mt-6',
                        children: o
                          ? e(le, { loading: 'Enviando' })
                          : e('button', {
                              type: 'submit',
                              className:
                                'btn bg-primary hover:bg-indigo-600 text-white whitespace-nowrap',
                              children: 'Enviar link',
                            }),
                      }),
                    ],
                  }),
                  e('footer', {
                    className: 'pt-5 mt-6 border-t border-slate-200',
                    children:
                      c &&
                      e(pe, {
                        message:
                          'El correo no se encuentra en nuestra base de datos.',
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
            src: te,
            width: '760',
            height: '1024',
            alt: 'Authentication',
          }),
        }),
      ],
    }),
  });
}
function Et() {
  const {
      register: l,
      handleSubmit: a,
      formState: { errors: s },
    } = X(),
    r = Y(),
    i = Z(),
    c = j(Q),
    o = j(ee),
    d = () => {
      sessionStorage.clear(), r(E(!1));
    },
    x = sessionStorage.getItem('email'),
    u = sessionStorage.getItem('code'),
    m = (h) => r(kt(h, i));
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
                children: e('div', {
                  className:
                    'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                  children: e(k, {
                    className: 'block',
                    to: '/mp-pro/signin',
                    onClick: d,
                    children: e('img', {
                      src: D.logoNide,
                      alt: 'Logo',
                      className: 'w-36',
                    }),
                  }),
                }),
              }),
              t('div', {
                className: 'max-w-sm mx-auto px-4 py-8',
                children: [
                  e('article', {
                    children: t('h1', {
                      className: 'text-3xl text-slate-800 font-bold mb-6',
                      children: [
                        'Verifica el codigo',
                        t('p', {
                          className: 'font-normal text-sm',
                          children: [
                            'Ingresa el c\xF3digo que te hicimos llegar al correo electr\xF3nico ',
                            e('span', { className: 'font-bold', children: x }),
                          ],
                        }),
                        e('span', {
                          className: 'text-sm text-red-500',
                          children: u,
                        }),
                      ],
                    }),
                  }),
                  t('form', {
                    onSubmit: a(m),
                    children: [
                      e('div', {
                        className: 'space-y-4',
                        children: t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              htmlFor: 'email',
                              children: [
                                'Codigo de verificaci\xF3n',
                                ' ',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e(
                              'input',
                              H(
                                {
                                  autoComplete: 'off',
                                  className: 'form-input w-full',
                                  type: 'text',
                                },
                                l('user_code', {
                                  required: {
                                    value: !0,
                                    message: 'El campo es requerido',
                                  },
                                })
                              )
                            ),
                            s.user_code &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: s.user_code.message,
                              }),
                          ],
                        }),
                      }),
                      e('div', {
                        className: 'flex justify-end mt-6',
                        children: o
                          ? e(le, { loading: 'Enviando' })
                          : e('button', {
                              type: 'submit',
                              className:
                                'btn bg-primary hover:bg-indigo-600 text-white whitespace-nowrap',
                              children: 'Enviar link',
                            }),
                      }),
                    ],
                  }),
                  e('footer', {
                    className: 'pt-5 mt-6 border-t border-slate-200',
                    children:
                      c &&
                      e(pe, {
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
            src: te,
            width: '760',
            height: '1024',
            alt: 'Authentication',
          }),
        }),
      ],
    }),
  });
}
function Bt(l) {
  return e('section', {
    className: ' mt-5',
    children: t('div', {
      className: 'bg-green-100 text-green-600 px-2 py-2 rounded flex',
      children: [
        e('svg', {
          className: 'w-3 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        }),
        e('span', { className: ' text-sm', children: l.message }),
      ],
    }),
  });
}
function Ot() {
  const {
      register: l,
      handleSubmit: a,
      formState: { errors: s },
    } = X(),
    r = Y(),
    i = Z(),
    c = (u) => r(St(u, i)),
    o = j(Q),
    d = j(ee);
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
                children: e('div', {
                  className:
                    'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                  children: e(k, {
                    className: 'block',
                    to: '/mp-pro/signin',
                    onClick: () => {
                      sessionStorage.clear(), r(E(!1));
                    },
                    children: e('img', {
                      src: D.logoNide,
                      alt: 'Logo',
                      className: 'w-36',
                    }),
                  }),
                }),
              }),
              t('div', {
                className: 'max-w-sm mx-auto px-4 py-8',
                children: [
                  e('h1', {
                    className: 'text-3xl text-slate-800 font-bold mb-6',
                    children: 'Ingresa la nueva contrase\xF1a',
                  }),
                  t('form', {
                    onSubmit: a(c),
                    children: [
                      e('div', {
                        className: 'space-y-4',
                        children: t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              htmlFor: 'password',
                              children: [
                                'Nueva contrase\xF1a ',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e(
                              'input',
                              H(
                                {
                                  autoComplete: 'off',
                                  className: 'form-input w-full',
                                  type: 'password',
                                },
                                l('password', {
                                  required: {
                                    value: !0,
                                    message: 'El campo es requerido',
                                  },
                                })
                              )
                            ),
                            s.email &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: s.email.message,
                              }),
                          ],
                        }),
                      }),
                      e('div', {
                        className: 'flex justify-end mt-6',
                        children: d
                          ? e(le, { loading: 'Enviando' })
                          : e('button', {
                              type: 'submit',
                              className:
                                'btn bg-primary hover:bg-indigo-600 text-white whitespace-nowrap',
                              children: 'Cambiar',
                            }),
                      }),
                    ],
                  }),
                  e('footer', {
                    className: 'pt-5 mt-6 border-t border-slate-200',
                    children:
                      o &&
                      e(Bt, {
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
          className: 'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
          'aria-hidden': 'true',
          children: e('img', {
            className: 'object-cover object-center w-full h-full',
            src: te,
            width: '760',
            height: '1024',
            alt: 'Authentication',
          }),
        }),
      ],
    }),
  });
}
function At({ children: l }) {
  return localStorage.getItem('token') ? l : e(Ne, { to: '/mp-pro/signin' });
}
function ae({ children: l }) {
  return localStorage.getItem('token') ? e(Ne, { to: 'master-shedule/' }) : l;
}
function Ht() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
function z({ children: l, className: a, bg: s, size: r, position: i }) {
  const [c, o] = n.exports.useState(!1),
    d = (m) => {
      switch (m) {
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
    x = (m) => {
      switch (m) {
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
    u = (m) => {
      switch (m) {
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
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    onFocus: () => o(!0),
    onBlur: () => o(!1),
    children: [
      e('button', {
        className: 'block',
        'aria-haspopup': 'true',
        'aria-expanded': c,
        onClick: (m) => m.preventDefault(),
        children: e('svg', {
          className: 'w-4 h-4 fill-current text-slate-400',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        }),
      }),
      e('div', {
        className: `z-10 absolute ${d(i)}`,
        children: e(g, {
          show: c,
          tag: 'div',
          className: `rounded overflow-hidden ${
            s === 'dark'
              ? 'bg-slate-800'
              : 'bg-white border border-slate-200 shadow-lg'
          } ${x(r)} ${u(i)}`,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: l,
        }),
      }),
    ],
  });
}
function jt() {
  const [l, a] = n.exports.useState(!1),
    [s, r] = n.exports.useState(!0),
    [i, c] = n.exports.useState(!1),
    [o, d] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
                                        e(z, {
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
                                          checked: s,
                                          onChange: () => r(!s),
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
                                      children: s ? 'On' : 'Off',
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
                                          checked: i,
                                          onChange: () => c(!i),
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
                                      children: i ? 'On' : 'Off',
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
                                          checked: o,
                                          onChange: () => d(!o),
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
function Ft() {
  const l = [
      { id: 0, period: 'Today' },
      { id: 1, period: 'Last 7 Days' },
      { id: 2, period: 'Last Month' },
      { id: 3, period: 'Last 12 Months' },
      { id: 4, period: 'All Time' },
    ],
    [a, s] = n.exports.useState(!1),
    [r, i] = n.exports.useState(2),
    c = n.exports.useRef(null),
    o = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const d = ({ target: x }) => {
        !o.current ||
          !a ||
          o.current.contains(x) ||
          c.current.contains(x) ||
          s(!1);
      };
      return (
        document.addEventListener('click', d),
        () => document.removeEventListener('click', d)
      );
    }),
    n.exports.useEffect(() => {
      const d = ({ keyCode: x }) => {
        !a || x !== 27 || s(!1);
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
          ref: c,
          className:
            'btn justify-between min-w-44 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
          'aria-label': 'Select date range',
          'aria-haspopup': 'true',
          onClick: () => s(!a),
          'aria-expanded': a,
          children: [
            e('span', {
              className: 'flex items-center',
              children: e('span', { children: l[r].period }),
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
        e(g, {
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
            ref: o,
            className: 'font-medium text-sm text-slate-600',
            onFocus: () => s(!0),
            onBlur: () => s(!1),
            children: l.map((d) =>
              t(
                'button',
                {
                  tabIndex: '0',
                  className: `flex items-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer ${
                    d.id === r && 'text-primary'
                  }`,
                  onClick: () => {
                    i(d.id), s(!1);
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
function Pt() {
  const l = [
      { id: 0, period: 'Most Popular' },
      { id: 1, period: 'Newest' },
      { id: 2, period: 'Lowest Price' },
      { id: 3, period: 'Highest Price' },
    ],
    [a, s] = n.exports.useState(!1),
    [r, i] = n.exports.useState(0),
    c = n.exports.useRef(null),
    o = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const d = ({ target: x }) => {
        !o.current ||
          !a ||
          o.current.contains(x) ||
          c.current.contains(x) ||
          s(!1);
      };
      return (
        document.addEventListener('click', d),
        () => document.removeEventListener('click', d)
      );
    }),
    n.exports.useEffect(() => {
      const d = ({ keyCode: x }) => {
        !a || x !== 27 || s(!1);
      };
      return (
        document.addEventListener('keydown', d),
        () => document.removeEventListener('keydown', d)
      );
    }),
    t('div', {
      className: 'relative inline-flex w-full',
      children: [
        t('button', {
          ref: c,
          className:
            'btn w-full justify-between min-w-44 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
          'aria-label': 'Select date range',
          'aria-haspopup': 'true',
          onClick: () => s(!a),
          'aria-expanded': a,
          children: [
            e('span', {
              className: 'flex items-center',
              children: e('span', { children: l[r].period }),
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
        e(g, {
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
            ref: o,
            className:
              'font-medium text-sm text-slate-600 divide-y divide-slate-200',
            onFocus: () => s(!0),
            onBlur: () => s(!1),
            children: l.map((d) =>
              t(
                'button',
                {
                  tabIndex: '0',
                  className: `flex items-center justify-between w-full hover:bg-slate-50 py-2 px-3 cursor-pointer ${
                    d.id === r && 'text-primary'
                  }`,
                  onClick: () => {
                    i(d.id), s(!1);
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
function $t({ align: l }) {
  const [a, s] = n.exports.useState(!1),
    r = n.exports.useRef(null),
    i = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const c = ({ target: o }) => {
        !i.current ||
          !a ||
          i.current.contains(o) ||
          r.current.contains(o) ||
          s(!1);
      };
      return (
        document.addEventListener('click', c),
        () => document.removeEventListener('click', c)
      );
    }),
    n.exports.useEffect(() => {
      const c = ({ keyCode: o }) => {
        !a || o !== 27 || s(!1);
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
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
          onClick: () => s(!a),
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
        e(g, {
          show: a,
          tag: 'div',
          className: `origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            l === 'right' ? 'right-0' : 'left-0'
          }`,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('div', {
            ref: i,
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
                        onClick: () => s(!1),
                        onBlur: () => s(!1),
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
function It({ align: l }) {
  const [a, s] = n.exports.useState(!1),
    r = n.exports.useRef(null),
    i = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const c = ({ target: o }) => {
        !i.current ||
          !a ||
          i.current.contains(o) ||
          r.current.contains(o) ||
          s(!1);
      };
      return (
        document.addEventListener('click', c),
        () => document.removeEventListener('click', c)
      );
    }),
    n.exports.useEffect(() => {
      const c = ({ keyCode: o }) => {
        !a || o !== 27 || s(!1);
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
      );
    }),
    t('div', {
      className: 'relative',
      children: [
        t('button', {
          ref: r,
          className: 'grow flex items-center truncate',
          'aria-haspopup': 'true',
          onClick: () => s(!a),
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
        e(g, {
          className: `origin-top-right z-10 absolute top-full min-w-60 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            l === 'right' ? 'right-0' : 'left-0'
          }`,
          show: a,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('ul', {
            ref: i,
            onFocus: () => s(!0),
            onBlur: () => s(!1),
            children: [
              e('li', {
                children: e('a', {
                  className:
                    'font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3',
                  href: '#0',
                  onClick: () => s(!1),
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
                  onClick: () => s(!1),
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
                  onClick: () => s(!1),
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
function Dt(r) {
  var i = r,
    { children: l, align: a } = i,
    s = K(i, ['children', 'align']);
  const [c, o] = n.exports.useState(!1),
    d = n.exports.useRef(null),
    x = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const u = ({ target: m }) => {
        !x.current ||
          !c ||
          x.current.contains(m) ||
          d.current.contains(m) ||
          o(!1);
      };
      return (
        document.addEventListener('click', u),
        () => document.removeEventListener('click', u)
      );
    }),
    n.exports.useEffect(() => {
      const u = ({ keyCode: m }) => {
        !c || m !== 27 || o(!1);
      };
      return (
        document.addEventListener('keydown', u),
        () => document.removeEventListener('keydown', u)
      );
    }),
    t(
      'div',
      he(H({}, s), {
        children: [
          t('button', {
            ref: d,
            className: `bg-white text-slate-400 hover:text-slate-500 rounded-full ${
              c && 'bg-slate-100 text-slate-500'
            }`,
            'aria-haspopup': 'true',
            onClick: () => o(!c),
            'aria-expanded': c,
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
          e(g, {
            show: c,
            tag: 'div',
            className: `origin-top-right z-10 absolute top-full min-w-36 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
              a === 'right' ? 'right-0' : 'left-0'
            }`,
            enter: 'transition ease-out duration-200 transform',
            enterStart: 'opacity-0 -translate-y-2',
            enterEnd: 'opacity-100 translate-y-0',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            children: e('ul', {
              ref: x,
              onFocus: () => o(!0),
              onBlur: () => o(!1),
              children: l,
            }),
          }),
        ],
      })
    )
  );
}
function Vt({ align: l }) {
  const a = {
    mode: 'range',
    static: !0,
    monthSelectorType: 'static',
    dateFormat: 'M j, Y',
    defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
    prevArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (s, r, i) => {
      i.element.value = r.replace('to', '-');
      const c = l || '';
      i.calendarContainer.classList.add(`flatpickr-${c}`);
    },
    onChange: (s, r, i) => {
      i.element.value = r.replace('to', '-');
    },
  };
  return t('div', {
    className: 'relative',
    children: [
      e(at, {
        className:
          'form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60',
        options: a,
      }),
      e('div', {
        className:
          'absolute inset-0 right-auto flex items-center pointer-events-none',
        children: e('svg', {
          className: 'w-4 h-4 fill-current text-slate-500 ml-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z',
          }),
        }),
      }),
    ],
  });
}
function Tt() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
                          e(Ft, {}),
                        ],
                      }),
                      t('div', {
                        className: 'w-80',
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Full-width Dropdown',
                          }),
                          e(Pt, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Filter',
                          }),
                          e($t, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Profile',
                          }),
                          e(Le, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Switch Account',
                          }),
                          e(It, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Help Center',
                          }),
                          e(ke, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Quick Selection',
                          }),
                          t(Dt, {
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
                          e(Vt, {}),
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
function se({ children: l, className: a, type: s, open: r, setOpen: i }) {
  const c = (d) => {
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
  return e(y, {
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
          })(s)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  c(s),
                  e('div', { className: 'font-medium', children: l }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => i(!1),
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
function re({ children: l, className: a, type: s, open: r, setOpen: i }) {
  const c = (d) => {
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
  return e(y, {
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
          })(s)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [c(s), e('div', { children: l })],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => i(!1),
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
function ie({ children: l, className: a, type: s, open: r, setOpen: i }) {
  const c = (d) => {
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
  return e(y, {
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
          })(s)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  c(s),
                  e('div', { className: 'font-medium', children: l }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => i(!1),
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
function ne({ children: l, className: a, type: s, open: r, setOpen: i }) {
  const c = (d) => {
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
  return e(y, {
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
          })(s)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [c(s), e('div', { children: l })],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => i(!1),
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
function ce({ children: l, className: a, type: s, open: r, setOpen: i }) {
  return e(y, {
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
                  ((o) => {
                    switch (o) {
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
                  })(s),
                  e('div', { children: l }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => i(!1),
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
function de({ children: l, className: a, type: s, open: r, setOpen: i }) {
  return e(y, {
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
                    ((o) => {
                      switch (o) {
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
                    })(s),
                    e('div', { children: l }),
                  ],
                }),
                t('button', {
                  className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                  onClick: () => i(!1),
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
function qt() {
  const [l, a] = n.exports.useState(!1),
    [s, r] = n.exports.useState(!0),
    [i, c] = n.exports.useState(!0),
    [o, d] = n.exports.useState(!0),
    [x, u] = n.exports.useState(!0),
    [m, h] = n.exports.useState(!0),
    [C, M] = n.exports.useState(!0),
    [q, F] = n.exports.useState(!0),
    [R, T] = n.exports.useState(!0),
    [W, P] = n.exports.useState(!0),
    [$, A] = n.exports.useState(!0),
    [I, v] = n.exports.useState(!0),
    [J, f] = n.exports.useState(!0),
    [p, ze] = n.exports.useState(!0),
    [Ce, Ee] = n.exports.useState(!0),
    [Be, Oe] = n.exports.useState(!0),
    [Ae, He] = n.exports.useState(!0),
    [je, Fe] = n.exports.useState(!0),
    [Pe, $e] = n.exports.useState(!0),
    [Ie, De] = n.exports.useState(!0),
    [Ve, Te] = n.exports.useState(!0),
    [qe, Re] = n.exports.useState(!0),
    [We, Ue] = n.exports.useState(!0),
    [_e, Ze] = n.exports.useState(!0),
    [Ye, Je] = n.exports.useState(!0);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
                              e(se, {
                                type: 'warning',
                                open: s,
                                setOpen: r,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(se, {
                                type: 'success',
                                open: o,
                                setOpen: d,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(se, {
                                type: 'error',
                                open: i,
                                setOpen: c,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(se, {
                                open: x,
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
                              e(re, {
                                type: 'warning',
                                open: m,
                                setOpen: h,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(re, {
                                type: 'success',
                                open: q,
                                setOpen: F,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(re, {
                                type: 'error',
                                open: C,
                                setOpen: M,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(re, {
                                open: R,
                                setOpen: T,
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
                              e(ie, {
                                type: 'warning',
                                open: W,
                                setOpen: P,
                                children: 'A warning toast.',
                              }),
                              e(ie, {
                                type: 'success',
                                open: I,
                                setOpen: v,
                                children: 'A successful toast.',
                              }),
                              e(ie, {
                                type: 'error',
                                open: $,
                                setOpen: A,
                                children: 'A dangerous toast.',
                              }),
                              e(ie, {
                                open: J,
                                setOpen: f,
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
                              e(ne, {
                                type: 'warning',
                                open: p,
                                setOpen: ze,
                                children: 'A warning toast.',
                              }),
                              e(ne, {
                                type: 'success',
                                open: Be,
                                setOpen: Oe,
                                children: 'A successful toast.',
                              }),
                              e(ne, {
                                type: 'error',
                                open: Ce,
                                setOpen: Ee,
                                children: 'A dangerous toast.',
                              }),
                              e(ne, {
                                open: Ae,
                                setOpen: He,
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
                              e(ce, {
                                type: 'warning',
                                open: je,
                                setOpen: Fe,
                                children: 'A warning toast.',
                              }),
                              e(ce, {
                                type: 'success',
                                open: Ie,
                                setOpen: De,
                                children: 'A successful toast.',
                              }),
                              e(ce, {
                                type: 'error',
                                open: Pe,
                                setOpen: $e,
                                children: 'A dangerous toast.',
                              }),
                              e(ce, {
                                open: Ve,
                                setOpen: Te,
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
                              t(de, {
                                type: 'warning',
                                open: qe,
                                setOpen: Re,
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
                              t(de, {
                                type: 'success',
                                open: _e,
                                setOpen: Ze,
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
                              t(de, {
                                type: 'error',
                                open: We,
                                setOpen: Ue,
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
                              t(de, {
                                open: Ye,
                                setOpen: Je,
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
function oe({ children: l, id: a, title: s, modalOpen: r, setModalOpen: i }) {
  const c = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const o = ({ target: d }) => {
        !r || c.current.contains(d) || i(!1);
      };
      return (
        document.addEventListener('click', o),
        () => document.removeEventListener('click', o)
      );
    }),
    n.exports.useEffect(() => {
      const o = ({ keyCode: d }) => {
        !r || d !== 27 || i(!1);
      };
      return (
        document.addEventListener('keydown', o),
        () => document.removeEventListener('keydown', o)
      );
    }),
    t(y, {
      children: [
        e(g, {
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
        e(g, {
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
            ref: c,
            className:
              'bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full',
            children: [
              e('div', {
                className: 'px-5 py-3 border-b border-slate-200',
                children: t('div', {
                  className: 'flex justify-between items-center',
                  children: [
                    e('div', {
                      className: 'font-semibold text-slate-800',
                      children: s,
                    }),
                    t('button', {
                      className: 'text-slate-400 hover:text-slate-500',
                      onClick: (o) => {
                        o.stopPropagation(), i(!1);
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
              l,
            ],
          }),
        }),
      ],
    })
  );
}
function Rt({ children: l, id: a, title: s, modalOpen: r, setModalOpen: i }) {
  const c = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const o = ({ target: d }) => {
        !r || c.current.contains(d) || i(!1);
      };
      return (
        document.addEventListener('click', o),
        () => document.removeEventListener('click', o)
      );
    }),
    n.exports.useEffect(() => {
      const o = ({ keyCode: d }) => {
        !r || d !== 27 || i(!1);
      };
      return (
        document.addEventListener('keydown', o),
        () => document.removeEventListener('keydown', o)
      );
    }),
    t(y, {
      children: [
        e(g, {
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
        e(g, {
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
            ref: c,
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
                        children: s,
                      }),
                      t('button', {
                        className: 'text-slate-400 hover:text-slate-500',
                        onClick: (o) => {
                          o.stopPropagation(), i(!1);
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
                l,
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function me({ children: l, id: a, modalOpen: s, setModalOpen: r }) {
  const i = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const c = ({ target: o }) => {
        !s || i.current.contains(o) || r(!1);
      };
      return (
        document.addEventListener('click', c),
        () => document.removeEventListener('click', c)
      );
    }),
    n.exports.useEffect(() => {
      const c = ({ keyCode: o }) => {
        !s || o !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
      );
    }),
    t(y, {
      children: [
        e(g, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: s,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(g, {
          id: a,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: s,
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
            children: l,
          }),
        }),
      ],
    })
  );
}
function xe({ children: l, id: a, modalOpen: s, setModalOpen: r }) {
  const i = n.exports.useRef(null);
  return (
    n.exports.useEffect(() => {
      const c = ({ target: o }) => {
        !s || i.current.contains(o) || r(!1);
      };
      return (
        document.addEventListener('click', c),
        () => document.removeEventListener('click', c)
      );
    }),
    n.exports.useEffect(() => {
      const c = ({ keyCode: o }) => {
        !s || o !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', c),
        () => document.removeEventListener('keydown', c)
      );
    }),
    t(y, {
      children: [
        e(g, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: s,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(g, {
          id: a,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: s,
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
            children: e('div', {
              className: 'p-6',
              children: t('div', {
                className: 'relative',
                children: [
                  t('button', {
                    className:
                      'absolute top-0 right-0 text-slate-400 hover:text-slate-500',
                    onClick: (c) => {
                      c.stopPropagation(), r(!1);
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
                  l,
                ],
              }),
            }),
          }),
        }),
      ],
    })
  );
}
function Wt() {
  const [l, a] = n.exports.useState(!1),
    [s, r] = n.exports.useState(!1),
    [i, c] = n.exports.useState(!1),
    [o, d] = n.exports.useState(!1),
    [x, u] = n.exports.useState(!1),
    [m, h] = n.exports.useState(!1),
    [C, M] = n.exports.useState(!1),
    [q, F] = n.exports.useState(!1),
    [R, T] = n.exports.useState(!1),
    [W, P] = n.exports.useState(!1),
    [$, A] = n.exports.useState(!1),
    [I, v] = n.exports.useState(!1),
    [J, f] = n.exports.useState(!1);
  return (
    n.exports.useState(!1),
    t('div', {
      className: 'flex h-screen overflow-hidden',
      children: [
        e(L, { sidebarOpen: l, setSidebarOpen: a }),
        t('div', {
          className:
            'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
          children: [
            e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
                                      onClick: (p) => {
                                        p.stopPropagation(), r(!0);
                                      },
                                      children: 'Basic Modal',
                                    }),
                                    t(oe, {
                                      id: 'basic-modal',
                                      modalOpen: s,
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
                                                onClick: (p) => {
                                                  p.stopPropagation(), r(!1);
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
                                      onClick: (p) => {
                                        p.stopPropagation(), c(!0);
                                      },
                                      children: 'Modal w/ Scroll Bar',
                                    }),
                                    t(oe, {
                                      id: 'scrollbar-modal',
                                      modalOpen: i,
                                      setModalOpen: c,
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
                                                onClick: (p) => {
                                                  p.stopPropagation(), c(!1);
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
                                      onClick: (p) => {
                                        p.stopPropagation(), d(!0);
                                      },
                                      children: 'Cookies',
                                    }),
                                    t(Rt, {
                                      id: 'cookies-modal',
                                      modalOpen: o,
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
                                              onClick: (p) => {
                                                p.stopPropagation(), d(!1);
                                              },
                                              children: 'Decline',
                                            }),
                                            e('button', {
                                              className:
                                                'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                              onClick: (p) => {
                                                p.stopPropagation(), d(!1);
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
                                      onClick: (p) => {
                                        p.stopPropagation(), u(!0);
                                      },
                                      children: 'Success Modal',
                                    }),
                                    e(me, {
                                      id: 'success-modal',
                                      modalOpen: x,
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
                                                    onClick: (p) => {
                                                      p.stopPropagation(),
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
                                      onClick: (p) => {
                                        p.stopPropagation(), h(!0);
                                      },
                                      children: 'Danger Modal',
                                    }),
                                    e(me, {
                                      id: 'danger-modal',
                                      modalOpen: m,
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
                                                    onClick: (p) => {
                                                      p.stopPropagation(),
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
                                      onClick: (p) => {
                                        p.stopPropagation(), M(!0);
                                      },
                                      children: 'Info Modal',
                                    }),
                                    e(me, {
                                      id: 'info-modal',
                                      modalOpen: C,
                                      setModalOpen: M,
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
                                                    onClick: (p) => {
                                                      p.stopPropagation(),
                                                        M(!1);
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
                                      onClick: (p) => {
                                        p.stopPropagation(), F(!0);
                                      },
                                      children: 'Send Feedback',
                                    }),
                                    t(oe, {
                                      id: 'feedback-modal',
                                      modalOpen: q,
                                      setModalOpen: F,
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
                                                onClick: (p) => {
                                                  p.stopPropagation(), F(!1);
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
                                      onClick: (p) => {
                                        p.stopPropagation(), T(!0);
                                      },
                                      children: 'Newsletter',
                                    }),
                                    t(xe, {
                                      id: 'newsletter-modal',
                                      modalOpen: R,
                                      setModalOpen: T,
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
                                      onClick: (p) => {
                                        p.stopPropagation(), P(!0);
                                      },
                                      children: 'Announcement',
                                    }),
                                    t(xe, {
                                      id: 'announcement-modal',
                                      modalOpen: W,
                                      setModalOpen: P,
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
                                                    onClick: (p) => {
                                                      p.preventDefault(), P(!0);
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
                                      onClick: (p) => {
                                        p.stopPropagation(), A(!0);
                                      },
                                      children: 'Integration',
                                    }),
                                    t(xe, {
                                      id: 'integration-modal',
                                      modalOpen: $,
                                      setModalOpen: A,
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
                                              onClick: (p) => {
                                                p.stopPropagation(), A(!1);
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
                                      onClick: (p) => {
                                        p.stopPropagation(), v(!0);
                                      },
                                      children: "What's New",
                                    }),
                                    t(me, {
                                      id: 'news-modal',
                                      modalOpen: I,
                                      setModalOpen: v,
                                      children: [
                                        e('div', {
                                          className: 'relative',
                                          children: t('button', {
                                            className:
                                              'absolute top-0 right-0 mt-5 mr-5 text-slate-50 hover:text-white',
                                            onClick: (p) => {
                                              p.stopPropagation(), v(!1);
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
                                                onClick: (p) => {
                                                  p.stopPropagation(), v(!1);
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
                                      onClick: (p) => {
                                        p.stopPropagation(), f(!0);
                                      },
                                      children: 'Change your Plan',
                                    }),
                                    t(oe, {
                                      id: 'feedback-modal',
                                      modalOpen: J,
                                      setModalOpen: f,
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
                                                onClick: (p) => {
                                                  p.stopPropagation(), f(!1);
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
function Ut() {
  return e('div', {
    className: 'flex justify-center',
    children: t('nav', {
      className: 'flex',
      role: 'navigation',
      'aria-label': 'Navigation',
      children: [
        e('div', {
          className: 'mr-2',
          children: t('span', {
            className:
              'inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 text-slate-300',
            children: [
              e('span', { className: 'sr-only', children: 'Previous' }),
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
        }),
        t('ul', {
          className: 'inline-flex text-sm font-medium -space-x-px shadow-sm',
          children: [
            e('li', {
              children: e('span', {
                className:
                  'inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-slate-200 text-primary',
                children: '1',
              }),
            }),
            e('li', {
              children: e('a', {
                className:
                  'inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-primary border border-slate-200 text-slate-600 hover:text-white',
                href: '#0',
                children: '2',
              }),
            }),
            e('li', {
              children: e('a', {
                className:
                  'inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-primary border border-slate-200 text-slate-600 hover:text-white',
                href: '#0',
                children: '3',
              }),
            }),
            e('li', {
              children: e('span', {
                className:
                  'inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-400',
                children: '\u2026',
              }),
            }),
            e('li', {
              children: e('a', {
                className:
                  'inline-flex items-center justify-center rounded-r leading-5 px-3.5 py-2 bg-white hover:bg-primary border border-slate-200 text-slate-600 hover:text-white',
                href: '#0',
                children: '9',
              }),
            }),
          ],
        }),
        e('div', {
          className: 'ml-2',
          children: t('a', {
            href: '#0',
            className:
              'inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-primary border border-slate-200 text-slate-600 hover:text-white shadow-sm',
            children: [
              e('span', { className: 'sr-only', children: 'Next' }),
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
        }),
      ],
    }),
  });
}
function _t() {
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
function Zt() {
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
function Yt() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
                            children: e(_t, {}),
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
                            children: e(Zt, {}),
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
function Jt() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
function Gt() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
function Kt() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
function Xt() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
function Qt() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
                                    e(z, {
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
function el(l) {
  const [a, s] = n.exports.useState(!1);
  return t('div', {
    className: 'px-5 py-4 rounded-sm border border-slate-200',
    children: [
      t('button', {
        className: 'flex items-center justify-between w-full group mb-1',
        'aria-expanded': a,
        onClick: () => s(!a),
        children: [
          e('div', {
            className: 'text-sm text-slate-800 font-medium',
            children: l.title,
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
        children: l.children,
      }),
    ],
  });
}
function tl(l) {
  const [a, s] = n.exports.useState(!1);
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
                    src: l.image,
                    width: '40',
                    height: '40',
                    alt: l.customer,
                  }),
                }),
                e('div', {
                  className: 'font-medium text-slate-800',
                  children: l.customer,
                }),
              ],
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left font-medium text-emerald-500',
              children: l.total,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className:
                'inline-flex font-medium bg-amber-100 text-amber-600 rounded-full text-center px-2.5 py-0.5',
              children: l.status,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-center', children: l.items }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left',
              children: l.location,
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
                e('div', { children: l.type }),
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
                onClick: () => s(!a),
                'aria-controls': `description-${l.id}`,
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
        id: `description-${l.id}`,
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
              e('div', { className: 'italic', children: l.description }),
            ],
          }),
        }),
      }),
    ],
  });
}
function ll(l) {
  const [a, s] = n.exports.useState(!1);
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
                    src: l.image,
                    width: '40',
                    height: '40',
                    alt: l.customer,
                  }),
                }),
                e('div', {
                  className: 'font-medium text-slate-800',
                  children: l.customer,
                }),
              ],
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-left', children: l.email }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left',
              children: l.location,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-left', children: l.date }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left text-emerald-500 font-medium',
              children: l.amount,
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
                onClick: () => s(!a),
                'aria-controls': `description-${l.id}`,
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
        id: `description-${l.id}`,
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
                    children: l.descriptionTitle,
                  }),
                  e('div', { children: l.descriptionBody }),
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
function al() {
  const [l, a] = n.exports.useState(!1),
    s = [
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
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
                          e(el, {
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
                                children: s.map((i) =>
                                  e(
                                    tl,
                                    {
                                      id: i.id,
                                      image: i.image,
                                      customer: i.customer,
                                      total: i.total,
                                      status: i.status,
                                      items: i.items,
                                      location: i.location,
                                      type: i.type,
                                      description: i.description,
                                    },
                                    i.id
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
                                children: r.map((i) =>
                                  e(
                                    ll,
                                    {
                                      id: i.id,
                                      image: i.image,
                                      customer: i.customer,
                                      email: i.email,
                                      location: i.location,
                                      date: i.date,
                                      amount: i.amount,
                                      descriptionTitle: i.descriptionTitle,
                                      descriptionBody: i.descriptionBody,
                                    },
                                    i.id
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
function sl() {
  const [l, a] = n.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(L, { sidebarOpen: l, setSidebarOpen: a }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(w, { sidebarOpen: l, setSidebarOpen: a }),
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
function rl() {
  const l = ue();
  return (
    n.exports.useEffect(() => {
      (document.querySelector('html').style.scrollBehavior = 'auto'),
        window.scroll({ top: 0 }),
        (document.querySelector('html').style.scrollBehavior = '');
    }, [l.pathname]),
    e(y, {
      children: t(st, {
        children: [
          e(b, {
            exact: !0,
            path: 'mp-pro/',
            element: e(At, { children: e(Lt, {}) }),
          }),
          e(b, {
            path: 'mp-pro/signin',
            element: e(ae, { children: e(zt, {}) }),
          }),
          e(b, {
            path: 'mp-pro/reset-password',
            element: e(ae, { children: e(Ct, {}) }),
          }),
          e(b, {
            path: '/mp-pro/verification-code/',
            element: e(ae, { children: e(Et, {}) }),
          }),
          e(b, {
            path: '/mp-pro/confirm-password/',
            element: e(ae, { children: e(Ot, {}) }),
          }),
          e(b, { path: '/utility/404', element: e(Me, {}) }),
          e(b, { path: '/component/button', element: e(Ht, {}) }),
          e(b, { path: '/component/form', element: e(jt, {}) }),
          e(b, { path: '/component/dropdown', element: e(Tt, {}) }),
          e(b, { path: '/component/alert', element: e(qt, {}) }),
          e(b, { path: '/component/modal', element: e(Wt, {}) }),
          e(b, { path: '/component/pagination', element: e(Yt, {}) }),
          e(b, { path: '/component/tabs', element: e(Jt, {}) }),
          e(b, { path: '/component/breadcrumb', element: e(Gt, {}) }),
          e(b, { path: '/component/badge', element: e(Kt, {}) }),
          e(b, { path: '/component/avatar', element: e(Xt, {}) }),
          e(b, { path: '/component/tooltip', element: e(Qt, {}) }),
          e(b, { path: '/component/accordion', element: e(al, {}) }),
          e(b, { path: '/component/icons', element: e(sl, {}) }),
          e(b, { path: '*', element: e(Me, {}) }),
        ],
      }),
    })
  );
}
const il = rt({ reducer: { auth: Nt } });
it.render(
  e(O.StrictMode, {
    children: e(nt, { children: e(ct, { store: il, children: e(rl, {}) }) }),
  }),
  document.getElementById('root')
);
