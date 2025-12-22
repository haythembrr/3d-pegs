var ll = Object.defineProperty;
var hl = (r, e, t) => e in r ? ll(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => hl(r, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Kr = "160", Kn = { ROTATE: 0, DOLLY: 1, PAN: 2 }, $n = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, ul = 0, ga = 1, dl = 2, gc = 1, fl = 2, ln = 3, pn = 0, Lt = 1, Kt = 2, bn = 0, gi = 1, _a = 2, xa = 3, va = 4, pl = 5, On = 100, ml = 101, gl = 102, Ma = 103, ya = 104, _l = 200, xl = 201, vl = 202, Ml = 203, Ur = 204, Nr = 205, yl = 206, Sl = 207, El = 208, Tl = 209, bl = 210, Al = 211, wl = 212, Rl = 213, Pl = 214, Cl = 0, Ll = 1, Il = 2, Ls = 3, Dl = 4, Ul = 5, Nl = 6, Ol = 7, _c = 0, Fl = 1, Bl = 2, An = 0, zl = 1, Hl = 2, kl = 3, Gl = 4, Vl = 5, Wl = 6, Sa = "attached", Xl = "detached", xc = 300, vi = 301, Mi = 302, Or = 303, Fr = 304, zs = 306, yi = 1e3, Bt = 1001, Is = 1002, _t = 1003, Br = 1004, Ps = 1005, Ct = 1006, vc = 1007, Vn = 1008, wn = 1009, jl = 1010, ql = 1011, $r = 1012, Mc = 1013, En = 1014, un = 1015, ji = 1016, yc = 1017, Sc = 1018, Hn = 1020, Yl = 1021, zt = 1023, Kl = 1024, $l = 1025, kn = 1026, Si = 1027, Zl = 1028, Ec = 1029, Jl = 1030, Tc = 1031, bc = 1033, Ys = 33776, Ks = 33777, $s = 33778, Zs = 33779, Ea = 35840, Ta = 35841, ba = 35842, Aa = 35843, Ac = 36196, wa = 37492, Ra = 37496, Pa = 37808, Ca = 37809, La = 37810, Ia = 37811, Da = 37812, Ua = 37813, Na = 37814, Oa = 37815, Fa = 37816, Ba = 37817, za = 37818, Ha = 37819, ka = 37820, Ga = 37821, Js = 36492, Va = 36494, Wa = 36495, Ql = 36283, Xa = 36284, ja = 36285, qa = 36286, qi = 2300, Ei = 2301, Qs = 2302, Ya = 2400, Ka = 2401, $a = 2402, eh = 2500, th = 0, wc = 1, zr = 2, Rc = 3e3, Gn = 3001, nh = 3200, ih = 3201, Pc = 0, sh = 1, Ht = "", it = "srgb", dt = "srgb-linear", Zr = "display-p3", Hs = "display-p3-linear", Ds = "linear", nt = "srgb", Us = "rec709", Ns = "p3", Zn = 7680, Za = 519, rh = 512, ah = 513, oh = 514, Cc = 515, ch = 516, lh = 517, hh = 518, uh = 519, Hr = 35044, Ja = "300 es", kr = 1035, dn = 2e3, Os = 2001;
class qn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const bt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Qa = 1234567;
const Gi = Math.PI / 180, Ti = 180 / Math.PI;
function Xt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (bt[r & 255] + bt[r >> 8 & 255] + bt[r >> 16 & 255] + bt[r >> 24 & 255] + "-" + bt[e & 255] + bt[e >> 8 & 255] + "-" + bt[e >> 16 & 15 | 64] + bt[e >> 24 & 255] + "-" + bt[t & 63 | 128] + bt[t >> 8 & 255] + "-" + bt[t >> 16 & 255] + bt[t >> 24 & 255] + bt[n & 255] + bt[n >> 8 & 255] + bt[n >> 16 & 255] + bt[n >> 24 & 255]).toLowerCase();
}
function yt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Jr(r, e) {
  return (r % e + e) % e;
}
function dh(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function fh(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Vi(r, e, t) {
  return (1 - t) * r + t * e;
}
function ph(r, e, t, n) {
  return Vi(r, e, 1 - Math.exp(-t * n));
}
function mh(r, e = 1) {
  return e - Math.abs(Jr(r, e * 2) - e);
}
function gh(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function _h(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function xh(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function vh(r, e) {
  return r + Math.random() * (e - r);
}
function Mh(r) {
  return r * (0.5 - Math.random());
}
function yh(r) {
  r !== void 0 && (Qa = r);
  let e = Qa += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Sh(r) {
  return r * Gi;
}
function Eh(r) {
  return r * Ti;
}
function Gr(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Th(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Fs(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function bh(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), p = s((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, c * u, c * d, o * l);
      break;
    case "YZY":
      r.set(c * d, o * h, c * u, o * l);
      break;
    case "ZXZ":
      r.set(c * u, c * d, o * h, o * l);
      break;
    case "XZX":
      r.set(o * h, c * g, c * p, o * l);
      break;
    case "YXY":
      r.set(c * p, o * h, c * g, o * l);
      break;
    case "ZYZ":
      r.set(c * g, c * p, o * h, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function $t(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Qe(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Lc = {
  DEG2RAD: Gi,
  RAD2DEG: Ti,
  generateUUID: Xt,
  clamp: yt,
  euclideanModulo: Jr,
  mapLinear: dh,
  inverseLerp: fh,
  lerp: Vi,
  damp: ph,
  pingpong: mh,
  smoothstep: gh,
  smootherstep: _h,
  randInt: xh,
  randFloat: vh,
  randFloatSpread: Mh,
  seededRandom: yh,
  degToRad: Sh,
  radToDeg: Eh,
  isPowerOfTwo: Gr,
  ceilPowerOfTwo: Th,
  floorPowerOfTwo: Fs,
  setQuaternionFromProperEuler: bh,
  normalize: Qe,
  denormalize: $t
};
class me {
  constructor(e = 0, t = 0) {
    me.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ve {
  constructor(e, t, n, i, s, a, o, c, l) {
    Ve.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l);
  }
  set(e, t, n, i, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], p = n[5], g = n[8], _ = i[0], m = i[3], f = i[6], M = i[1], x = i[4], A = i[7], L = i[2], P = i[5], w = i[8];
    return s[0] = a * _ + o * M + c * L, s[3] = a * m + o * x + c * P, s[6] = a * f + o * A + c * w, s[1] = l * _ + h * M + u * L, s[4] = l * m + h * x + u * P, s[7] = l * f + h * A + u * w, s[2] = d * _ + p * M + g * L, s[5] = d * m + p * x + g * P, s[8] = d * f + p * A + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - n * s * h + n * o * c + i * s * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = h * a - o * l, d = o * c - h * s, p = l * s - a * c, g = t * u + n * d + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * l - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = d * _, e[4] = (h * t - i * c) * _, e[5] = (i * s - o * t) * _, e[6] = p * _, e[7] = (n * c - l * t) * _, e[8] = (a * t - n * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(er.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(er.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(er.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const er = /* @__PURE__ */ new Ve();
function Ic(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
function Yi(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Ah() {
  const r = Yi("canvas");
  return r.style.display = "block", r;
}
const eo = {};
function Wi(r) {
  r in eo || (eo[r] = !0, console.warn(r));
}
const to = /* @__PURE__ */ new Ve().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), no = /* @__PURE__ */ new Ve().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), es = {
  [dt]: {
    transfer: Ds,
    primaries: Us,
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [it]: {
    transfer: nt,
    primaries: Us,
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [Hs]: {
    transfer: Ds,
    primaries: Ns,
    toReference: (r) => r.applyMatrix3(no),
    fromReference: (r) => r.applyMatrix3(to)
  },
  [Zr]: {
    transfer: nt,
    primaries: Ns,
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(no),
    fromReference: (r) => r.applyMatrix3(to).convertLinearToSRGB()
  }
}, wh = /* @__PURE__ */ new Set([dt, Hs]), Ze = {
  enabled: !0,
  _workingColorSpace: dt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!wh.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = es[e].toReference, i = es[t].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return es[r].primaries;
  },
  getTransfer: function(r) {
    return r === Ht ? Ds : es[r].transfer;
  }
};
function _i(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function tr(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Jn;
class Dc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Jn === void 0 && (Jn = Yi("canvas")), Jn.width = e.width, Jn.height = e.height;
      const n = Jn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Jn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Yi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = _i(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(_i(t[n] / 255) * 255) : t[n] = _i(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Rh = 0;
class Uc {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Rh++ }), this.uuid = Xt(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(nr(i[a].image)) : s.push(nr(i[a]));
      } else
        s = nr(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function nr(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Dc.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ph = 0;
class St extends qn {
  constructor(e = St.DEFAULT_IMAGE, t = St.DEFAULT_MAPPING, n = Bt, i = Bt, s = Ct, a = Vn, o = zt, c = wn, l = St.DEFAULT_ANISOTROPY, h = Ht) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ph++ }), this.uuid = Xt(), this.name = "", this.source = new Uc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new me(0, 0), this.repeat = new me(1, 1), this.center = new me(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ve(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === Gn ? it : Ht), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== xc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case yi:
          e.x = e.x - Math.floor(e.x);
          break;
        case Bt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Is:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case yi:
          e.y = e.y - Math.floor(e.y);
          break;
        case Bt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Is:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === it ? Gn : Rc;
  }
  set encoding(e) {
    Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Gn ? it : Ht;
  }
}
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = xc;
St.DEFAULT_ANISOTROPY = 1;
class et {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    et.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], p = c[5], g = c[9], _ = c[2], m = c[6], f = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + p + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (l + 1) / 2, A = (p + 1) / 2, L = (f + 1) / 2, P = (h + d) / 4, w = (u + _) / 4, W = (g + m) / 4;
      return x > A && x > L ? x < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), i = P / n, s = w / n) : A > L ? A < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(A), n = P / i, s = W / i) : L < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(L), n = w / s, i = W / s), this.set(n, i, s, t), this;
    }
    let M = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (m - g) / M, this.y = (u - _) / M, this.z = (d - h) / M, this.w = Math.acos((l + p + f - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ch extends qn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = !1, this.viewport = new et(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Gn ? it : Ht), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Ct,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new St(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Uc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Wn extends Ch {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Nc extends St {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = _t, this.minFilter = _t, this.wrapR = Bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Lh extends St {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = _t, this.minFilter = _t, this.wrapR = Bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Jt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[a + 0], p = s[a + 1], g = s[a + 2], _ = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || c !== d || l !== p || h !== g) {
      let m = 1 - o;
      const f = c * d + l * p + h * g + u * _, M = f >= 0 ? 1 : -1, x = 1 - f * f;
      if (x > Number.EPSILON) {
        const L = Math.sqrt(x), P = Math.atan2(L, f * M);
        m = Math.sin(m * P) / L, o = Math.sin(o * P) / L;
      }
      const A = o * M;
      if (c = c * m + d * A, l = l * m + p * A, h = h * m + g * A, u = u * m + _ * A, m === 1 - o) {
        const L = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= L, l *= L, h *= L, u *= L;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], p = s[a + 2], g = s[a + 3];
    return e[t] = o * g + h * u + c * p - l * d, e[t + 1] = c * g + h * d + l * u - o * p, e[t + 2] = l * g + h * p + o * d - c * u, e[t + 3] = h * g - o * u - c * d - l * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), u = o(s / 2), d = c(n / 2), p = c(i / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + l * p * g, this._y = l * p * u - d * h * g, this._z = l * h * g + d * p * u, this._w = l * h * u - d * p * g;
        break;
      case "YXZ":
        this._x = d * h * u + l * p * g, this._y = l * p * u - d * h * g, this._z = l * h * g - d * p * u, this._w = l * h * u + d * p * g;
        break;
      case "ZXY":
        this._x = d * h * u - l * p * g, this._y = l * p * u + d * h * g, this._z = l * h * g + d * p * u, this._w = l * h * u - d * p * g;
        break;
      case "ZYX":
        this._x = d * h * u - l * p * g, this._y = l * p * u + d * h * g, this._z = l * h * g - d * p * u, this._w = l * h * u + d * p * g;
        break;
      case "YZX":
        this._x = d * h * u + l * p * g, this._y = l * p * u + d * h * g, this._z = l * h * g - d * p * u, this._w = l * h * u - d * p * g;
        break;
      case "XZY":
        this._x = d * h * u - l * p * g, this._y = l * p * u - d * h * g, this._z = l * h * g + d * p * u, this._w = l * h * u + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - c) * p, this._y = (s - l) * p, this._z = (a - i) * p;
    } else if (n > o && n > u) {
      const p = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - c) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (s + l) / p;
    } else if (o > u) {
      const p = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - l) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (c + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / p, this._x = (s + l) / p, this._y = (c + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(yt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + a * o + i * l - s * c, this._y = i * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * s + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(io.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(io.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * i - o * n), h = 2 * (o * t - s * i), u = 2 * (s * n - a * t);
    return this.x = t + c * l + a * u - o * h, this.y = n + c * h + o * l - s * u, this.z = i + c * u + s * h - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = i * c - s * o, this.y = s * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return ir.copy(this).projectOnVector(e), this.sub(ir);
  }
  reflect(e) {
    return this.sub(ir.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ir = /* @__PURE__ */ new R(), io = /* @__PURE__ */ new Jt();
class vt {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, kt) : kt.fromBufferAttribute(s, a), kt.applyMatrix4(e.matrixWorld), this.expandByPoint(kt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ts.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ts.copy(n.boundingBox)), ts.applyMatrix4(e.matrixWorld), this.union(ts);
    }
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, kt), kt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Di), ns.subVectors(this.max, Di), Qn.subVectors(e.a, Di), ei.subVectors(e.b, Di), ti.subVectors(e.c, Di), gn.subVectors(ei, Qn), _n.subVectors(ti, ei), Cn.subVectors(Qn, ti);
    let t = [
      0,
      -gn.z,
      gn.y,
      0,
      -_n.z,
      _n.y,
      0,
      -Cn.z,
      Cn.y,
      gn.z,
      0,
      -gn.x,
      _n.z,
      0,
      -_n.x,
      Cn.z,
      0,
      -Cn.x,
      -gn.y,
      gn.x,
      0,
      -_n.y,
      _n.x,
      0,
      -Cn.y,
      Cn.x,
      0
    ];
    return !sr(t, Qn, ei, ti, ns) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !sr(t, Qn, ei, ti, ns)) ? !1 : (is.crossVectors(gn, _n), t = [is.x, is.y, is.z], sr(t, Qn, ei, ti, ns));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(kt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (nn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), nn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), nn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), nn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), nn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), nn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), nn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), nn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(nn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const nn = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], kt = /* @__PURE__ */ new R(), ts = /* @__PURE__ */ new vt(), Qn = /* @__PURE__ */ new R(), ei = /* @__PURE__ */ new R(), ti = /* @__PURE__ */ new R(), gn = /* @__PURE__ */ new R(), _n = /* @__PURE__ */ new R(), Cn = /* @__PURE__ */ new R(), Di = /* @__PURE__ */ new R(), ns = /* @__PURE__ */ new R(), is = /* @__PURE__ */ new R(), Ln = /* @__PURE__ */ new R();
function sr(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    Ln.fromArray(r, s);
    const o = i.x * Math.abs(Ln.x) + i.y * Math.abs(Ln.y) + i.z * Math.abs(Ln.z), c = e.dot(Ln), l = t.dot(Ln), h = n.dot(Ln);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const Ih = /* @__PURE__ */ new vt(), Ui = /* @__PURE__ */ new R(), rr = /* @__PURE__ */ new R();
class Qt {
  constructor(e = new R(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ih.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Ui.subVectors(e, this.center);
    const t = Ui.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ui, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (rr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ui.copy(e.center).add(rr)), this.expandByPoint(Ui.copy(e.center).sub(rr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const sn = /* @__PURE__ */ new R(), ar = /* @__PURE__ */ new R(), ss = /* @__PURE__ */ new R(), xn = /* @__PURE__ */ new R(), or = /* @__PURE__ */ new R(), rs = /* @__PURE__ */ new R(), cr = /* @__PURE__ */ new R();
class Ri {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, sn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = sn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (sn.copy(this.origin).addScaledVector(this.direction, t), sn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ar.copy(e).add(t).multiplyScalar(0.5), ss.copy(t).sub(e).normalize(), xn.copy(this.origin).sub(ar);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(ss), o = xn.dot(this.direction), c = -xn.dot(ss), l = xn.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, p, g;
    if (h > 0)
      if (u = a * c - o, d = a * o - c, g = s * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / h;
            u *= _, d *= _, p = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * c) + l;
      else
        d <= -g ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -c), s), p = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), p = -u * u + d * (d + 2 * c) + l);
    else
      d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(ar).addScaledVector(ss, d), p;
  }
  intersectSphere(e, t) {
    sn.subVectors(e.center, this.origin);
    const n = sn.dot(this.direction), i = sn.dot(sn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, sn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    or.subVectors(t, e), rs.subVectors(n, e), cr.crossVectors(or, rs);
    let a = this.direction.dot(cr), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    xn.subVectors(this.origin, e);
    const c = o * this.direction.dot(rs.crossVectors(xn, rs));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(or.cross(xn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * xn.dot(cr);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class We {
  constructor(e, t, n, i, s, a, o, c, l, h, u, d, p, g, _, m) {
    We.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l, h, u, d, p, g, _, m);
  }
  set(e, t, n, i, s, a, o, c, l, h, u, d, p, g, _, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = s, f[5] = a, f[9] = o, f[13] = c, f[2] = l, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = g, f[11] = _, f[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new We().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / ni.setFromMatrixColumn(e, 0).length(), s = 1 / ni.setFromMatrixColumn(e, 1).length(), a = 1 / ni.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * h, p = a * u, g = o * h, _ = o * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = p + g * l, t[5] = d - _ * l, t[9] = -o * c, t[2] = _ - d * l, t[6] = g + p * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const d = c * h, p = c * u, g = l * h, _ = l * u;
      t[0] = d + _ * o, t[4] = g * o - p, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = p * o - g, t[6] = _ + d * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const d = c * h, p = c * u, g = l * h, _ = l * u;
      t[0] = d - _ * o, t[4] = -a * u, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * h, t[9] = _ - d * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const d = a * h, p = a * u, g = o * h, _ = o * u;
      t[0] = c * h, t[4] = g * l - p, t[8] = d * l + _, t[1] = c * u, t[5] = _ * l + d, t[9] = p * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const d = a * c, p = a * l, g = o * c, _ = o * l;
      t[0] = c * h, t[4] = _ - d * u, t[8] = g * u + p, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = p * u + g, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = a * c, p = a * l, g = o * c, _ = o * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + _, t[5] = a * h, t[9] = p * u - g, t[2] = g * u - p, t[6] = o * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Dh, e, Uh);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Dt.subVectors(e, t), Dt.lengthSq() === 0 && (Dt.z = 1), Dt.normalize(), vn.crossVectors(n, Dt), vn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Dt.x += 1e-4 : Dt.z += 1e-4, Dt.normalize(), vn.crossVectors(n, Dt)), vn.normalize(), as.crossVectors(Dt, vn), i[0] = vn.x, i[4] = as.x, i[8] = Dt.x, i[1] = vn.y, i[5] = as.y, i[9] = Dt.y, i[2] = vn.z, i[6] = as.z, i[10] = Dt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], p = n[13], g = n[2], _ = n[6], m = n[10], f = n[14], M = n[3], x = n[7], A = n[11], L = n[15], P = i[0], w = i[4], W = i[8], S = i[12], T = i[1], H = i[5], q = i[9], se = i[13], I = i[2], B = i[6], G = i[10], j = i[14], X = i[3], V = i[7], K = i[11], te = i[15];
    return s[0] = a * P + o * T + c * I + l * X, s[4] = a * w + o * H + c * B + l * V, s[8] = a * W + o * q + c * G + l * K, s[12] = a * S + o * se + c * j + l * te, s[1] = h * P + u * T + d * I + p * X, s[5] = h * w + u * H + d * B + p * V, s[9] = h * W + u * q + d * G + p * K, s[13] = h * S + u * se + d * j + p * te, s[2] = g * P + _ * T + m * I + f * X, s[6] = g * w + _ * H + m * B + f * V, s[10] = g * W + _ * q + m * G + f * K, s[14] = g * S + _ * se + m * j + f * te, s[3] = M * P + x * T + A * I + L * X, s[7] = M * w + x * H + A * B + L * V, s[11] = M * W + x * q + A * G + L * K, s[15] = M * S + x * se + A * j + L * te, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], p = e[14], g = e[3], _ = e[7], m = e[11], f = e[15];
    return g * (+s * c * u - i * l * u - s * o * d + n * l * d + i * o * p - n * c * p) + _ * (+t * c * p - t * l * d + s * a * d - i * a * p + i * l * h - s * c * h) + m * (+t * l * u - t * o * p - s * a * u + n * a * p + s * o * h - n * l * h) + f * (-i * o * h - t * c * u + t * o * d + i * a * u - n * a * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], p = e[11], g = e[12], _ = e[13], m = e[14], f = e[15], M = u * m * l - _ * d * l + _ * c * p - o * m * p - u * c * f + o * d * f, x = g * d * l - h * m * l - g * c * p + a * m * p + h * c * f - a * d * f, A = h * _ * l - g * u * l + g * o * p - a * _ * p - h * o * f + a * u * f, L = g * u * c - h * _ * c - g * o * d + a * _ * d + h * o * m - a * u * m, P = t * M + n * x + i * A + s * L;
    if (P === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / P;
    return e[0] = M * w, e[1] = (_ * d * s - u * m * s - _ * i * p + n * m * p + u * i * f - n * d * f) * w, e[2] = (o * m * s - _ * c * s + _ * i * l - n * m * l - o * i * f + n * c * f) * w, e[3] = (u * c * s - o * d * s - u * i * l + n * d * l + o * i * p - n * c * p) * w, e[4] = x * w, e[5] = (h * m * s - g * d * s + g * i * p - t * m * p - h * i * f + t * d * f) * w, e[6] = (g * c * s - a * m * s - g * i * l + t * m * l + a * i * f - t * c * f) * w, e[7] = (a * d * s - h * c * s + h * i * l - t * d * l - a * i * p + t * c * p) * w, e[8] = A * w, e[9] = (g * u * s - h * _ * s - g * n * p + t * _ * p + h * n * f - t * u * f) * w, e[10] = (a * _ * s - g * o * s + g * n * l - t * _ * l - a * n * f + t * o * f) * w, e[11] = (h * o * s - a * u * s - h * n * l + t * u * l + a * n * p - t * o * p) * w, e[12] = L * w, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * m + t * u * m) * w, e[14] = (g * o * i - a * _ * i - g * n * c + t * _ * c + a * n * m - t * o * m) * w, e[15] = (a * u * i - h * o * i + h * n * c - t * u * c - a * n * d + t * o * d) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      h * o + n,
      h * c - i * a,
      0,
      l * c - i * o,
      h * c + i * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, u = o + o, d = s * l, p = s * h, g = s * u, _ = a * h, m = a * u, f = o * u, M = c * l, x = c * h, A = c * u, L = n.x, P = n.y, w = n.z;
    return i[0] = (1 - (_ + f)) * L, i[1] = (p + A) * L, i[2] = (g - x) * L, i[3] = 0, i[4] = (p - A) * P, i[5] = (1 - (d + f)) * P, i[6] = (m + M) * P, i[7] = 0, i[8] = (g + x) * w, i[9] = (m - M) * w, i[10] = (1 - (d + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = ni.set(i[0], i[1], i[2]).length();
    const a = ni.set(i[4], i[5], i[6]).length(), o = ni.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Gt.copy(this);
    const l = 1 / s, h = 1 / a, u = 1 / o;
    return Gt.elements[0] *= l, Gt.elements[1] *= l, Gt.elements[2] *= l, Gt.elements[4] *= h, Gt.elements[5] *= h, Gt.elements[6] *= h, Gt.elements[8] *= u, Gt.elements[9] *= u, Gt.elements[10] *= u, t.setFromRotationMatrix(Gt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = dn) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, g;
    if (o === dn)
      p = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === Os)
      p = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = dn) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - s), d = (t + e) * l, p = (n + i) * h;
    let g, _;
    if (o === dn)
      g = (a + s) * u, _ = -2 * u;
    else if (o === Os)
      g = s * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -p, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const ni = /* @__PURE__ */ new R(), Gt = /* @__PURE__ */ new We(), Dh = /* @__PURE__ */ new R(0, 0, 0), Uh = /* @__PURE__ */ new R(1, 1, 1), vn = /* @__PURE__ */ new R(), as = /* @__PURE__ */ new R(), Dt = /* @__PURE__ */ new R(), so = /* @__PURE__ */ new We(), ro = /* @__PURE__ */ new Jt();
class ks {
  constructor(e = 0, t = 0, n = 0, i = ks.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(yt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-yt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(yt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-yt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(yt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-yt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return so.makeRotationFromQuaternion(e), this.setFromRotationMatrix(so, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ro.setFromEuler(this), this.setFromQuaternion(ro, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ks.DEFAULT_ORDER = "XYZ";
class Qr {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Nh = 0;
const ao = /* @__PURE__ */ new R(), ii = /* @__PURE__ */ new Jt(), rn = /* @__PURE__ */ new We(), os = /* @__PURE__ */ new R(), Ni = /* @__PURE__ */ new R(), Oh = /* @__PURE__ */ new R(), Fh = /* @__PURE__ */ new Jt(), oo = /* @__PURE__ */ new R(1, 0, 0), co = /* @__PURE__ */ new R(0, 1, 0), lo = /* @__PURE__ */ new R(0, 0, 1), Bh = { type: "added" }, zh = { type: "removed" };
class rt extends qn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Nh++ }), this.uuid = Xt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = rt.DEFAULT_UP.clone();
    const e = new R(), t = new ks(), n = new Jt(), i = new R(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new We()
      },
      normalMatrix: {
        value: new Ve()
      }
    }), this.matrix = new We(), this.matrixWorld = new We(), this.matrixAutoUpdate = rt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Qr(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ii.setFromAxisAngle(e, t), this.quaternion.multiply(ii), this;
  }
  rotateOnWorldAxis(e, t) {
    return ii.setFromAxisAngle(e, t), this.quaternion.premultiply(ii), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(oo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(co, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(lo, e);
  }
  translateOnAxis(e, t) {
    return ao.copy(e).applyQuaternion(this.quaternion), this.position.add(ao.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(oo, e);
  }
  translateY(e) {
    return this.translateOnAxis(co, e);
  }
  translateZ(e) {
    return this.translateOnAxis(lo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(rn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? os.copy(e) : os.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Ni.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? rn.lookAt(Ni, os, this.up) : rn.lookAt(os, Ni, this.up), this.quaternion.setFromRotationMatrix(rn), i && (rn.extractRotation(i.matrixWorld), ii.setFromRotationMatrix(rn), this.quaternion.premultiply(ii.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Bh)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(zh)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), rn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), rn.multiply(e.parent.matrixWorld)), e.applyMatrix4(rn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, a = i.length; s < a; s++)
      i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ni, e, Oh), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ni, Fh, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
rt.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
rt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Vt = /* @__PURE__ */ new R(), an = /* @__PURE__ */ new R(), lr = /* @__PURE__ */ new R(), on = /* @__PURE__ */ new R(), si = /* @__PURE__ */ new R(), ri = /* @__PURE__ */ new R(), ho = /* @__PURE__ */ new R(), hr = /* @__PURE__ */ new R(), ur = /* @__PURE__ */ new R(), dr = /* @__PURE__ */ new R();
let cs = !1;
class Wt {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Vt.subVectors(e, t), i.cross(Vt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    Vt.subVectors(i, t), an.subVectors(n, t), lr.subVectors(e, t);
    const a = Vt.dot(Vt), o = Vt.dot(an), c = Vt.dot(lr), l = an.dot(an), h = an.dot(lr), u = a * l - o * o;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / u, p = (l * c - o * h) * d, g = (a * h - o * c) * d;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, on) === null ? !1 : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getUV(e, t, n, i, s, a, o, c) {
    return cs === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), cs = !0), this.getInterpolation(e, t, n, i, s, a, o, c);
  }
  static getInterpolation(e, t, n, i, s, a, o, c) {
    return this.getBarycoord(e, t, n, i, on) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, on.x), c.addScaledVector(a, on.y), c.addScaledVector(o, on.z), c);
  }
  static isFrontFacing(e, t, n, i) {
    return Vt.subVectors(n, t), an.subVectors(e, t), Vt.cross(an).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Vt.subVectors(this.c, this.b), an.subVectors(this.a, this.b), Vt.cross(an).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Wt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Wt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return cs === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), cs = !0), Wt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  getInterpolation(e, t, n, i, s) {
    return Wt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Wt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Wt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    si.subVectors(i, n), ri.subVectors(s, n), hr.subVectors(e, n);
    const c = si.dot(hr), l = ri.dot(hr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    ur.subVectors(e, i);
    const h = si.dot(ur), u = ri.dot(ur);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(si, a);
    dr.subVectors(e, s);
    const p = si.dot(dr), g = ri.dot(dr);
    if (g >= 0 && p <= g)
      return t.copy(s);
    const _ = p * l - c * g;
    if (_ <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(ri, o);
    const m = h * g - p * u;
    if (m <= 0 && u - h >= 0 && p - g >= 0)
      return ho.subVectors(s, i), o = (u - h) / (u - h + (p - g)), t.copy(i).addScaledVector(ho, o);
    const f = 1 / (m + _ + d);
    return a = _ * f, o = d * f, t.copy(n).addScaledVector(si, a).addScaledVector(ri, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Oc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Mn = { h: 0, s: 0, l: 0 }, ls = { h: 0, s: 0, l: 0 };
function fr(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class Ae {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = it) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ze.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Ze.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ze.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Ze.workingColorSpace) {
    if (e = Jr(e, 1), t = yt(t, 0, 1), n = yt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = fr(a, s, e + 1 / 3), this.g = fr(a, s, e), this.b = fr(a, s, e - 1 / 3);
    }
    return Ze.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = it) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = it) {
    const n = Oc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = _i(e.r), this.g = _i(e.g), this.b = _i(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = tr(e.r), this.g = tr(e.g), this.b = tr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = it) {
    return Ze.fromWorkingColorSpace(At.copy(this), e), Math.round(yt(At.r * 255, 0, 255)) * 65536 + Math.round(yt(At.g * 255, 0, 255)) * 256 + Math.round(yt(At.b * 255, 0, 255));
  }
  getHexString(e = it) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ze.workingColorSpace) {
    Ze.fromWorkingColorSpace(At.copy(this), t);
    const n = At.r, i = At.g, s = At.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = Ze.workingColorSpace) {
    return Ze.fromWorkingColorSpace(At.copy(this), t), e.r = At.r, e.g = At.g, e.b = At.b, e;
  }
  getStyle(e = it) {
    Ze.fromWorkingColorSpace(At.copy(this), e);
    const t = At.r, n = At.g, i = At.b;
    return e !== it ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Mn), this.setHSL(Mn.h + e, Mn.s + t, Mn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Mn), e.getHSL(ls);
    const n = Vi(Mn.h, ls.h, t), i = Vi(Mn.s, ls.s, t), s = Vi(Mn.l, ls.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const At = /* @__PURE__ */ new Ae();
Ae.NAMES = Oc;
let Hh = 0;
class Zt extends qn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Hh++ }), this.uuid = Xt(), this.name = "", this.type = "Material", this.blending = gi, this.side = pn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Ur, this.blendDst = Nr, this.blendEquation = On, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ae(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Ls, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Za, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Zn, this.stencilZFail = Zn, this.stencilZPass = Zn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== gi && (n.blending = this.blending), this.side !== pn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Ur && (n.blendSrc = this.blendSrc), this.blendDst !== Nr && (n.blendDst = this.blendDst), this.blendEquation !== On && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Ls && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Za && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Zn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Zn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Zn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Bn extends Zt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ae(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = _c, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ut = /* @__PURE__ */ new R(), hs = /* @__PURE__ */ new me();
class Et {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Hr, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = un, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        hs.fromBufferAttribute(this, t), hs.applyMatrix3(e), this.setXY(t, hs.x, hs.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = $t(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Qe(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), s = Qe(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Hr && (e.usage = this.usage), e;
  }
}
class Fc extends Et {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Bc extends Et {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class fn extends Et {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let kh = 0;
const Ot = /* @__PURE__ */ new We(), pr = /* @__PURE__ */ new rt(), ai = /* @__PURE__ */ new R(), Ut = /* @__PURE__ */ new vt(), Oi = /* @__PURE__ */ new vt(), gt = /* @__PURE__ */ new R();
class jt extends qn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: kh++ }), this.uuid = Xt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ic(e) ? Bc : Fc)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ve().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ot.makeRotationFromQuaternion(e), this.applyMatrix4(Ot), this;
  }
  rotateX(e) {
    return Ot.makeRotationX(e), this.applyMatrix4(Ot), this;
  }
  rotateY(e) {
    return Ot.makeRotationY(e), this.applyMatrix4(Ot), this;
  }
  rotateZ(e) {
    return Ot.makeRotationZ(e), this.applyMatrix4(Ot), this;
  }
  translate(e, t, n) {
    return Ot.makeTranslation(e, t, n), this.applyMatrix4(Ot), this;
  }
  scale(e, t, n) {
    return Ot.makeScale(e, t, n), this.applyMatrix4(Ot), this;
  }
  lookAt(e) {
    return pr.lookAt(e), pr.updateMatrix(), this.applyMatrix4(pr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ai).negate(), this.translate(ai.x, ai.y, ai.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new fn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new vt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Ut.setFromBufferAttribute(s), this.morphTargetsRelative ? (gt.addVectors(this.boundingBox.min, Ut.min), this.boundingBox.expandByPoint(gt), gt.addVectors(this.boundingBox.max, Ut.max), this.boundingBox.expandByPoint(gt)) : (this.boundingBox.expandByPoint(Ut.min), this.boundingBox.expandByPoint(Ut.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Qt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ut.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Oi.setFromBufferAttribute(o), this.morphTargetsRelative ? (gt.addVectors(Ut.min, Oi.min), Ut.expandByPoint(gt), gt.addVectors(Ut.max, Oi.max), Ut.expandByPoint(gt)) : (Ut.expandByPoint(Oi.min), Ut.expandByPoint(Oi.max));
        }
      Ut.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        gt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(gt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            gt.fromBufferAttribute(o, l), c && (ai.fromBufferAttribute(e, l), gt.add(ai)), i = Math.max(i, n.distanceToSquared(gt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Et(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let T = 0; T < o; T++)
      l[T] = new R(), h[T] = new R();
    const u = new R(), d = new R(), p = new R(), g = new me(), _ = new me(), m = new me(), f = new R(), M = new R();
    function x(T, H, q) {
      u.fromArray(i, T * 3), d.fromArray(i, H * 3), p.fromArray(i, q * 3), g.fromArray(a, T * 2), _.fromArray(a, H * 2), m.fromArray(a, q * 2), d.sub(u), p.sub(u), _.sub(g), m.sub(g);
      const se = 1 / (_.x * m.y - m.x * _.y);
      isFinite(se) && (f.copy(d).multiplyScalar(m.y).addScaledVector(p, -_.y).multiplyScalar(se), M.copy(p).multiplyScalar(_.x).addScaledVector(d, -m.x).multiplyScalar(se), l[T].add(f), l[H].add(f), l[q].add(f), h[T].add(M), h[H].add(M), h[q].add(M));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: n.length
    }]);
    for (let T = 0, H = A.length; T < H; ++T) {
      const q = A[T], se = q.start, I = q.count;
      for (let B = se, G = se + I; B < G; B += 3)
        x(
          n[B + 0],
          n[B + 1],
          n[B + 2]
        );
    }
    const L = new R(), P = new R(), w = new R(), W = new R();
    function S(T) {
      w.fromArray(s, T * 3), W.copy(w);
      const H = l[T];
      L.copy(H), L.sub(w.multiplyScalar(w.dot(H))).normalize(), P.crossVectors(W, H);
      const se = P.dot(h[T]) < 0 ? -1 : 1;
      c[T * 4] = L.x, c[T * 4 + 1] = L.y, c[T * 4 + 2] = L.z, c[T * 4 + 3] = se;
    }
    for (let T = 0, H = A.length; T < H; ++T) {
      const q = A[T], se = q.start, I = q.count;
      for (let B = se, G = se + I; B < G; B += 3)
        S(n[B + 0]), S(n[B + 1]), S(n[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Et(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new R(), s = new R(), a = new R(), o = new R(), c = new R(), l = new R(), h = new R(), u = new R();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), a.fromBufferAttribute(t, m), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, m), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      gt.fromBufferAttribute(e, t), gt.normalize(), e.setXYZ(t, gt.x, gt.y, gt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, d = new l.constructor(c.length * h);
      let p = 0, g = 0;
      for (let _ = 0, m = c.length; _ < m; _++) {
        o.isInterleavedBufferAttribute ? p = c[_] * o.data.stride + o.offset : p = c[_] * h;
        for (let f = 0; f < h; f++)
          d[g++] = l[p++];
      }
      return new Et(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new jt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], p = e(d, n);
        c.push(p);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const p = l[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, p = u.length; d < p; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const uo = /* @__PURE__ */ new We(), In = /* @__PURE__ */ new Ri(), us = /* @__PURE__ */ new Qt(), fo = /* @__PURE__ */ new R(), oi = /* @__PURE__ */ new R(), ci = /* @__PURE__ */ new R(), li = /* @__PURE__ */ new R(), mr = /* @__PURE__ */ new R(), ds = /* @__PURE__ */ new R(), fs = /* @__PURE__ */ new me(), ps = /* @__PURE__ */ new me(), ms = /* @__PURE__ */ new me(), po = /* @__PURE__ */ new R(), mo = /* @__PURE__ */ new R(), go = /* @__PURE__ */ new R(), gs = /* @__PURE__ */ new R(), _s = /* @__PURE__ */ new R();
class xt extends rt {
  constructor(e = new jt(), t = new Bn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ds.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], u = s[c];
        h !== 0 && (mr.fromBufferAttribute(u, e), a ? ds.addScaledVector(mr, h) : ds.addScaledVector(mr.sub(t), h));
      }
      t.add(ds);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), us.copy(n.boundingSphere), us.applyMatrix4(s), In.copy(e.ray).recast(e.near), !(us.containsPoint(In.origin) === !1 && (In.intersectSphere(us, fo) === null || In.origin.distanceToSquared(fo) > (e.far - e.near) ** 2)) && (uo.copy(s).invert(), In.copy(e.ray).applyMatrix4(uo), !(n.boundingBox !== null && In.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, In)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const m = d[g], f = a[m.materialIndex], M = Math.max(m.start, p.start), x = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let A = M, L = x; A < L; A += 3) {
            const P = o.getX(A), w = o.getX(A + 1), W = o.getX(A + 2);
            i = xs(this, f, e, n, l, h, u, P, w, W), i && (i.faceIndex = Math.floor(A / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), _ = Math.min(o.count, p.start + p.count);
        for (let m = g, f = _; m < f; m += 3) {
          const M = o.getX(m), x = o.getX(m + 1), A = o.getX(m + 2);
          i = xs(this, a, e, n, l, h, u, M, x, A), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const m = d[g], f = a[m.materialIndex], M = Math.max(m.start, p.start), x = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
          for (let A = M, L = x; A < L; A += 3) {
            const P = A, w = A + 1, W = A + 2;
            i = xs(this, f, e, n, l, h, u, P, w, W), i && (i.faceIndex = Math.floor(A / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), _ = Math.min(c.count, p.start + p.count);
        for (let m = g, f = _; m < f; m += 3) {
          const M = m, x = m + 1, A = m + 2;
          i = xs(this, a, e, n, l, h, u, M, x, A), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function Gh(r, e, t, n, i, s, a, o) {
  let c;
  if (e.side === Lt ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === pn, o), c === null) return null;
  _s.copy(o), _s.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(_s);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: _s.clone(),
    object: r
  };
}
function xs(r, e, t, n, i, s, a, o, c, l) {
  r.getVertexPosition(o, oi), r.getVertexPosition(c, ci), r.getVertexPosition(l, li);
  const h = Gh(r, e, t, n, oi, ci, li, gs);
  if (h) {
    i && (fs.fromBufferAttribute(i, o), ps.fromBufferAttribute(i, c), ms.fromBufferAttribute(i, l), h.uv = Wt.getInterpolation(gs, oi, ci, li, fs, ps, ms, new me())), s && (fs.fromBufferAttribute(s, o), ps.fromBufferAttribute(s, c), ms.fromBufferAttribute(s, l), h.uv1 = Wt.getInterpolation(gs, oi, ci, li, fs, ps, ms, new me()), h.uv2 = h.uv1), a && (po.fromBufferAttribute(a, o), mo.fromBufferAttribute(a, c), go.fromBufferAttribute(a, l), h.normal = Wt.getInterpolation(gs, oi, ci, li, po, mo, go, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: c,
      c: l,
      normal: new R(),
      materialIndex: 0
    };
    Wt.getNormal(oi, ci, li, u.normal), h.face = u;
  }
  return h;
}
class $i extends jt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], u = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new fn(l, 3)), this.setAttribute("normal", new fn(h, 3)), this.setAttribute("uv", new fn(u, 2));
    function g(_, m, f, M, x, A, L, P, w, W, S) {
      const T = A / w, H = L / W, q = A / 2, se = L / 2, I = P / 2, B = w + 1, G = W + 1;
      let j = 0, X = 0;
      const V = new R();
      for (let K = 0; K < G; K++) {
        const te = K * H - se;
        for (let le = 0; le < B; le++) {
          const k = le * T - q;
          V[_] = k * M, V[m] = te * x, V[f] = I, l.push(V.x, V.y, V.z), V[_] = 0, V[m] = 0, V[f] = P > 0 ? 1 : -1, h.push(V.x, V.y, V.z), u.push(le / w), u.push(1 - K / W), j += 1;
        }
      }
      for (let K = 0; K < W; K++)
        for (let te = 0; te < w; te++) {
          const le = d + te + B * K, k = d + te + B * (K + 1), Y = d + (te + 1) + B * (K + 1), ce = d + (te + 1) + B * K;
          c.push(le, k, ce), c.push(k, Y, ce), X += 6;
        }
      o.addGroup(p, X, S), p += X, d += j;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new $i(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function bi(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Rt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = bi(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Vh(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function zc(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : Ze.workingColorSpace;
}
const Wh = { clone: bi, merge: Rt };
var Xh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, jh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Xn extends Zt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Xh, this.fragmentShader = jh, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1,
      // set to use shader texture LOD
      clipCullDistance: !1
      // set to use vertex shader clipping
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = bi(e.uniforms), this.uniformsGroups = Vh(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Hc extends rt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new We(), this.projectionMatrix = new We(), this.projectionMatrixInverse = new We(), this.coordinateSystem = dn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Pt extends Hc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ti * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Gi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ti * 2 * Math.atan(
      Math.tan(Gi * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Gi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const hi = -90, ui = 1;
class qh extends rt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Pt(hi, ui, e, t);
    i.layers = this.layers, this.add(i);
    const s = new Pt(hi, ui, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Pt(hi, ui, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Pt(hi, ui, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Pt(hi, ui, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Pt(hi, ui, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === dn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Os)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class kc extends St {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : vi, super(e, t, n, i, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Yh extends Wn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Gn ? it : Ht), this.texture = new kc(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ct;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new $i(5, 5, 5), s = new Xn({
      name: "CubemapFromEquirect",
      uniforms: bi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Lt,
      blending: bn
    });
    s.uniforms.tEquirect.value = t;
    const a = new xt(i, s), o = t.minFilter;
    return t.minFilter === Vn && (t.minFilter = Ct), new qh(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const gr = /* @__PURE__ */ new R(), Kh = /* @__PURE__ */ new R(), $h = /* @__PURE__ */ new Ve();
class hn {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = gr.subVectors(n, t).cross(Kh.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(gr), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || $h.getNormalMatrix(e), i = this.coplanarPoint(gr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Dn = /* @__PURE__ */ new Qt(), vs = /* @__PURE__ */ new R();
class ea {
  constructor(e = new hn(), t = new hn(), n = new hn(), i = new hn(), s = new hn(), a = new hn()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = dn) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], p = i[8], g = i[9], _ = i[10], m = i[11], f = i[12], M = i[13], x = i[14], A = i[15];
    if (n[0].setComponents(c - s, d - l, m - p, A - f).normalize(), n[1].setComponents(c + s, d + l, m + p, A + f).normalize(), n[2].setComponents(c + a, d + h, m + g, A + M).normalize(), n[3].setComponents(c - a, d - h, m - g, A - M).normalize(), n[4].setComponents(c - o, d - u, m - _, A - x).normalize(), t === dn)
      n[5].setComponents(c + o, d + u, m + _, A + x).normalize();
    else if (t === Os)
      n[5].setComponents(o, u, _, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Dn);
  }
  intersectsSprite(e) {
    return Dn.center.set(0, 0, 0), Dn.radius = 0.7071067811865476, Dn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Dn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (vs.x = i.normal.x > 0 ? e.max.x : e.min.x, vs.y = i.normal.y > 0 ? e.max.y : e.min.y, vs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(vs) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Gc() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function Zh(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, d = l.usage, p = u.byteLength, g = r.createBuffer();
    r.bindBuffer(h, g), r.bufferData(h, u, d), l.onUploadCallback();
    let _;
    if (u instanceof Float32Array)
      _ = r.FLOAT;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          _ = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      _ = r.SHORT;
    else if (u instanceof Uint32Array)
      _ = r.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      _ = r.INT;
    else if (u instanceof Int8Array)
      _ = r.BYTE;
    else if (u instanceof Uint8Array)
      _ = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      _ = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: g,
      type: _,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version,
      size: p
    };
  }
  function s(l, h, u) {
    const d = h.array, p = h._updateRange, g = h.updateRanges;
    if (r.bindBuffer(u, l), p.count === -1 && g.length === 0 && r.bufferSubData(u, 0, d), g.length !== 0) {
      for (let _ = 0, m = g.length; _ < m; _++) {
        const f = g[_];
        t ? r.bufferSubData(
          u,
          f.start * d.BYTES_PER_ELEMENT,
          d,
          f.start,
          f.count
        ) : r.bufferSubData(
          u,
          f.start * d.BYTES_PER_ELEMENT,
          d.subarray(f.start, f.start + f.count)
        );
      }
      h.clearUpdateRanges();
    }
    p.count !== -1 && (t ? r.bufferSubData(
      u,
      p.offset * d.BYTES_PER_ELEMENT,
      d,
      p.offset,
      p.count
    ) : r.bufferSubData(
      u,
      p.offset * d.BYTES_PER_ELEMENT,
      d.subarray(p.offset, p.offset + p.count)
    ), p.count = -1), h.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (r.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    if (u === void 0)
      n.set(l, i(l, h));
    else if (u.version < l.version) {
      if (u.size !== l.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      s(u.buffer, l, h), u.version = l.version;
    }
  }
  return {
    get: a,
    remove: o,
    update: c
  };
}
class ta extends jt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = e / o, d = t / c, p = [], g = [], _ = [], m = [];
    for (let f = 0; f < h; f++) {
      const M = f * d - a;
      for (let x = 0; x < l; x++) {
        const A = x * u - s;
        g.push(A, -M, 0), _.push(0, 0, 1), m.push(x / o), m.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++)
      for (let M = 0; M < o; M++) {
        const x = M + l * f, A = M + l * (f + 1), L = M + 1 + l * (f + 1), P = M + 1 + l * f;
        p.push(x, A, P), p.push(A, L, P);
      }
    this.setIndex(p), this.setAttribute("position", new fn(g, 3)), this.setAttribute("normal", new fn(_, 3)), this.setAttribute("uv", new fn(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ta(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Jh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Qh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, eu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, tu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, nu = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, iu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, su = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ru = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, au = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ou = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, cu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, lu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, hu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, uu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, du = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, fu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, pu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, mu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, gu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, _u = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, xu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, vu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Mu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, yu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Su = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Eu = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Tu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, bu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Au = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, wu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ru = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Pu = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Cu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Lu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Iu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Du = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Uu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Nu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ou = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Fu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Bu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, zu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Hu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, ku = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Gu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Vu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Wu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Xu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, ju = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, qu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Yu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Ku = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, $u = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Zu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Ju = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Qu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, ed = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, td = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, nd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, id = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, sd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, rd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, ad = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, od = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, cd = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ld = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, hd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, ud = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, dd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, fd = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, pd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, md = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, gd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, _d = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, vd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Md = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, yd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Sd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ed = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Td = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, bd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ad = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, wd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Rd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Pd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Cd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Ld = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Id = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Dd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Ud = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Nd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Od = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Fd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Bd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, zd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Hd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, kd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Gd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Vd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Wd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Xd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, jd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, qd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Yd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Kd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, $d = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Zd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Jd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Qd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ef = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, tf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, nf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, sf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, rf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, af = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, of = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, cf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, lf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, hf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, uf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, df = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, ff = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, mf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, _f = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, vf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Mf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, yf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Sf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Ef = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Af = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, wf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Rf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Cf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Lf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Be = {
  alphahash_fragment: Jh,
  alphahash_pars_fragment: Qh,
  alphamap_fragment: eu,
  alphamap_pars_fragment: tu,
  alphatest_fragment: nu,
  alphatest_pars_fragment: iu,
  aomap_fragment: su,
  aomap_pars_fragment: ru,
  batching_pars_vertex: au,
  batching_vertex: ou,
  begin_vertex: cu,
  beginnormal_vertex: lu,
  bsdfs: hu,
  iridescence_fragment: uu,
  bumpmap_pars_fragment: du,
  clipping_planes_fragment: fu,
  clipping_planes_pars_fragment: pu,
  clipping_planes_pars_vertex: mu,
  clipping_planes_vertex: gu,
  color_fragment: _u,
  color_pars_fragment: xu,
  color_pars_vertex: vu,
  color_vertex: Mu,
  common: yu,
  cube_uv_reflection_fragment: Su,
  defaultnormal_vertex: Eu,
  displacementmap_pars_vertex: Tu,
  displacementmap_vertex: bu,
  emissivemap_fragment: Au,
  emissivemap_pars_fragment: wu,
  colorspace_fragment: Ru,
  colorspace_pars_fragment: Pu,
  envmap_fragment: Cu,
  envmap_common_pars_fragment: Lu,
  envmap_pars_fragment: Iu,
  envmap_pars_vertex: Du,
  envmap_physical_pars_fragment: Xu,
  envmap_vertex: Uu,
  fog_vertex: Nu,
  fog_pars_vertex: Ou,
  fog_fragment: Fu,
  fog_pars_fragment: Bu,
  gradientmap_pars_fragment: zu,
  lightmap_fragment: Hu,
  lightmap_pars_fragment: ku,
  lights_lambert_fragment: Gu,
  lights_lambert_pars_fragment: Vu,
  lights_pars_begin: Wu,
  lights_toon_fragment: ju,
  lights_toon_pars_fragment: qu,
  lights_phong_fragment: Yu,
  lights_phong_pars_fragment: Ku,
  lights_physical_fragment: $u,
  lights_physical_pars_fragment: Zu,
  lights_fragment_begin: Ju,
  lights_fragment_maps: Qu,
  lights_fragment_end: ed,
  logdepthbuf_fragment: td,
  logdepthbuf_pars_fragment: nd,
  logdepthbuf_pars_vertex: id,
  logdepthbuf_vertex: sd,
  map_fragment: rd,
  map_pars_fragment: ad,
  map_particle_fragment: od,
  map_particle_pars_fragment: cd,
  metalnessmap_fragment: ld,
  metalnessmap_pars_fragment: hd,
  morphcolor_vertex: ud,
  morphnormal_vertex: dd,
  morphtarget_pars_vertex: fd,
  morphtarget_vertex: pd,
  normal_fragment_begin: md,
  normal_fragment_maps: gd,
  normal_pars_fragment: _d,
  normal_pars_vertex: xd,
  normal_vertex: vd,
  normalmap_pars_fragment: Md,
  clearcoat_normal_fragment_begin: yd,
  clearcoat_normal_fragment_maps: Sd,
  clearcoat_pars_fragment: Ed,
  iridescence_pars_fragment: Td,
  opaque_fragment: bd,
  packing: Ad,
  premultiplied_alpha_fragment: wd,
  project_vertex: Rd,
  dithering_fragment: Pd,
  dithering_pars_fragment: Cd,
  roughnessmap_fragment: Ld,
  roughnessmap_pars_fragment: Id,
  shadowmap_pars_fragment: Dd,
  shadowmap_pars_vertex: Ud,
  shadowmap_vertex: Nd,
  shadowmask_pars_fragment: Od,
  skinbase_vertex: Fd,
  skinning_pars_vertex: Bd,
  skinning_vertex: zd,
  skinnormal_vertex: Hd,
  specularmap_fragment: kd,
  specularmap_pars_fragment: Gd,
  tonemapping_fragment: Vd,
  tonemapping_pars_fragment: Wd,
  transmission_fragment: Xd,
  transmission_pars_fragment: jd,
  uv_pars_fragment: qd,
  uv_pars_vertex: Yd,
  uv_vertex: Kd,
  worldpos_vertex: $d,
  background_vert: Zd,
  background_frag: Jd,
  backgroundCube_vert: Qd,
  backgroundCube_frag: ef,
  cube_vert: tf,
  cube_frag: nf,
  depth_vert: sf,
  depth_frag: rf,
  distanceRGBA_vert: af,
  distanceRGBA_frag: of,
  equirect_vert: cf,
  equirect_frag: lf,
  linedashed_vert: hf,
  linedashed_frag: uf,
  meshbasic_vert: df,
  meshbasic_frag: ff,
  meshlambert_vert: pf,
  meshlambert_frag: mf,
  meshmatcap_vert: gf,
  meshmatcap_frag: _f,
  meshnormal_vert: xf,
  meshnormal_frag: vf,
  meshphong_vert: Mf,
  meshphong_frag: yf,
  meshphysical_vert: Sf,
  meshphysical_frag: Ef,
  meshtoon_vert: Tf,
  meshtoon_frag: bf,
  points_vert: Af,
  points_frag: wf,
  shadow_vert: Rf,
  shadow_frag: Pf,
  sprite_vert: Cf,
  sprite_frag: Lf
}, re = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ve() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ve() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ve() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ve() },
    normalScale: { value: /* @__PURE__ */ new me(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ve() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ae(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ve() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ve() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new me(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ve() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ve() },
    alphaTest: { value: 0 }
  }
}, Yt = {
  basic: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.fog
    ]),
    vertexShader: Be.meshbasic_vert,
    fragmentShader: Be.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) }
      }
    ]),
    vertexShader: Be.meshlambert_vert,
    fragmentShader: Be.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) },
        specular: { value: /* @__PURE__ */ new Ae(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Be.meshphong_vert,
    fragmentShader: Be.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.roughnessmap,
      re.metalnessmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Be.meshphysical_vert,
    fragmentShader: Be.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.gradientmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) }
      }
    ]),
    vertexShader: Be.meshtoon_vert,
    fragmentShader: Be.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Be.meshmatcap_vert,
    fragmentShader: Be.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Rt([
      re.points,
      re.fog
    ]),
    vertexShader: Be.points_vert,
    fragmentShader: Be.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Be.linedashed_vert,
    fragmentShader: Be.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.displacementmap
    ]),
    vertexShader: Be.depth_vert,
    fragmentShader: Be.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Be.meshnormal_vert,
    fragmentShader: Be.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Rt([
      re.sprite,
      re.fog
    ]),
    vertexShader: Be.sprite_vert,
    fragmentShader: Be.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ve() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Be.background_vert,
    fragmentShader: Be.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Be.backgroundCube_vert,
    fragmentShader: Be.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Be.cube_vert,
    fragmentShader: Be.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Be.equirect_vert,
    fragmentShader: Be.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Rt([
      re.common,
      re.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Be.distanceRGBA_vert,
    fragmentShader: Be.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Rt([
      re.lights,
      re.fog,
      {
        color: { value: /* @__PURE__ */ new Ae(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Be.shadow_vert,
    fragmentShader: Be.shadow_frag
  }
};
Yt.physical = {
  uniforms: /* @__PURE__ */ Rt([
    Yt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ve() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ve() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new me(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ve() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ve() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ve() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ae(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ve() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ve() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ve() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new me() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ve() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ae(0) },
      specularColor: { value: /* @__PURE__ */ new Ae(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ve() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ve() },
      anisotropyVector: { value: /* @__PURE__ */ new me() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ve() }
    }
  ]),
  vertexShader: Be.meshphysical_vert,
  fragmentShader: Be.meshphysical_frag
};
const Ms = { r: 0, b: 0, g: 0 };
function If(r, e, t, n, i, s, a) {
  const o = new Ae(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, p = null;
  function g(m, f) {
    let M = !1, x = f.isScene === !0 ? f.background : null;
    x && x.isTexture && (x = (f.backgroundBlurriness > 0 ? t : e).get(x)), x === null ? _(o, c) : x && x.isColor && (_(x, 1), M = !0);
    const A = r.xr.getEnvironmentBlendMode();
    A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || M) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), x && (x.isCubeTexture || x.mapping === zs) ? (h === void 0 && (h = new xt(
      new $i(1, 1, 1),
      new Xn({
        name: "BackgroundCubeMaterial",
        uniforms: bi(Yt.backgroundCube.uniforms),
        vertexShader: Yt.backgroundCube.vertexShader,
        fragmentShader: Yt.backgroundCube.fragmentShader,
        side: Lt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(L, P, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = f.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, h.material.toneMapped = Ze.getTransfer(x.colorSpace) !== nt, (u !== x || d !== x.version || p !== r.toneMapping) && (h.material.needsUpdate = !0, u = x, d = x.version, p = r.toneMapping), h.layers.enableAll(), m.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new xt(
      new ta(2, 2),
      new Xn({
        name: "BackgroundMaterial",
        uniforms: bi(Yt.background.uniforms),
        vertexShader: Yt.background.vertexShader,
        fragmentShader: Yt.background.fragmentShader,
        side: pn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, l.material.toneMapped = Ze.getTransfer(x.colorSpace) !== nt, x.matrixAutoUpdate === !0 && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || d !== x.version || p !== r.toneMapping) && (l.material.needsUpdate = !0, u = x, d = x.version, p = r.toneMapping), l.layers.enableAll(), m.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function _(m, f) {
    m.getRGB(Ms, zc(r)), n.buffers.color.setClear(Ms.r, Ms.g, Ms.b, f, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(m, f = 1) {
      o.set(m), c = f, _(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(m) {
      c = m, _(o, c);
    },
    render: g
  };
}
function Df(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, c = m(null);
  let l = c, h = !1;
  function u(I, B, G, j, X) {
    let V = !1;
    if (a) {
      const K = _(j, G, B);
      l !== K && (l = K, p(l.object)), V = f(I, j, G, X), V && M(I, j, G, X);
    } else {
      const K = B.wireframe === !0;
      (l.geometry !== j.id || l.program !== G.id || l.wireframe !== K) && (l.geometry = j.id, l.program = G.id, l.wireframe = K, V = !0);
    }
    X !== null && t.update(X, r.ELEMENT_ARRAY_BUFFER), (V || h) && (h = !1, W(I, B, G, j), X !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(X).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function p(I) {
    return n.isWebGL2 ? r.bindVertexArray(I) : s.bindVertexArrayOES(I);
  }
  function g(I) {
    return n.isWebGL2 ? r.deleteVertexArray(I) : s.deleteVertexArrayOES(I);
  }
  function _(I, B, G) {
    const j = G.wireframe === !0;
    let X = o[I.id];
    X === void 0 && (X = {}, o[I.id] = X);
    let V = X[B.id];
    V === void 0 && (V = {}, X[B.id] = V);
    let K = V[j];
    return K === void 0 && (K = m(d()), V[j] = K), K;
  }
  function m(I) {
    const B = [], G = [], j = [];
    for (let X = 0; X < i; X++)
      B[X] = 0, G[X] = 0, j[X] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: G,
      attributeDivisors: j,
      object: I,
      attributes: {},
      index: null
    };
  }
  function f(I, B, G, j) {
    const X = l.attributes, V = B.attributes;
    let K = 0;
    const te = G.getAttributes();
    for (const le in te)
      if (te[le].location >= 0) {
        const Y = X[le];
        let ce = V[le];
        if (ce === void 0 && (le === "instanceMatrix" && I.instanceMatrix && (ce = I.instanceMatrix), le === "instanceColor" && I.instanceColor && (ce = I.instanceColor)), Y === void 0 || Y.attribute !== ce || ce && Y.data !== ce.data) return !0;
        K++;
      }
    return l.attributesNum !== K || l.index !== j;
  }
  function M(I, B, G, j) {
    const X = {}, V = B.attributes;
    let K = 0;
    const te = G.getAttributes();
    for (const le in te)
      if (te[le].location >= 0) {
        let Y = V[le];
        Y === void 0 && (le === "instanceMatrix" && I.instanceMatrix && (Y = I.instanceMatrix), le === "instanceColor" && I.instanceColor && (Y = I.instanceColor));
        const ce = {};
        ce.attribute = Y, Y && Y.data && (ce.data = Y.data), X[le] = ce, K++;
      }
    l.attributes = X, l.attributesNum = K, l.index = j;
  }
  function x() {
    const I = l.newAttributes;
    for (let B = 0, G = I.length; B < G; B++)
      I[B] = 0;
  }
  function A(I) {
    L(I, 0);
  }
  function L(I, B) {
    const G = l.newAttributes, j = l.enabledAttributes, X = l.attributeDivisors;
    G[I] = 1, j[I] === 0 && (r.enableVertexAttribArray(I), j[I] = 1), X[I] !== B && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](I, B), X[I] = B);
  }
  function P() {
    const I = l.newAttributes, B = l.enabledAttributes;
    for (let G = 0, j = B.length; G < j; G++)
      B[G] !== I[G] && (r.disableVertexAttribArray(G), B[G] = 0);
  }
  function w(I, B, G, j, X, V, K) {
    K === !0 ? r.vertexAttribIPointer(I, B, G, X, V) : r.vertexAttribPointer(I, B, G, j, X, V);
  }
  function W(I, B, G, j) {
    if (n.isWebGL2 === !1 && (I.isInstancedMesh || j.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const X = j.attributes, V = G.getAttributes(), K = B.defaultAttributeValues;
    for (const te in V) {
      const le = V[te];
      if (le.location >= 0) {
        let k = X[te];
        if (k === void 0 && (te === "instanceMatrix" && I.instanceMatrix && (k = I.instanceMatrix), te === "instanceColor" && I.instanceColor && (k = I.instanceColor)), k !== void 0) {
          const Y = k.normalized, ce = k.itemSize, ve = t.get(k);
          if (ve === void 0) continue;
          const _e = ve.buffer, Ie = ve.type, De = ve.bytesPerElement, be = n.isWebGL2 === !0 && (Ie === r.INT || Ie === r.UNSIGNED_INT || k.gpuType === Mc);
          if (k.isInterleavedBufferAttribute) {
            const Xe = k.data, N = Xe.stride, Mt = k.offset;
            if (Xe.isInstancedInterleavedBuffer) {
              for (let Se = 0; Se < le.locationSize; Se++)
                L(le.location + Se, Xe.meshPerAttribute);
              I.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = Xe.meshPerAttribute * Xe.count);
            } else
              for (let Se = 0; Se < le.locationSize; Se++)
                A(le.location + Se);
            r.bindBuffer(r.ARRAY_BUFFER, _e);
            for (let Se = 0; Se < le.locationSize; Se++)
              w(
                le.location + Se,
                ce / le.locationSize,
                Ie,
                Y,
                N * De,
                (Mt + ce / le.locationSize * Se) * De,
                be
              );
          } else {
            if (k.isInstancedBufferAttribute) {
              for (let Xe = 0; Xe < le.locationSize; Xe++)
                L(le.location + Xe, k.meshPerAttribute);
              I.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = k.meshPerAttribute * k.count);
            } else
              for (let Xe = 0; Xe < le.locationSize; Xe++)
                A(le.location + Xe);
            r.bindBuffer(r.ARRAY_BUFFER, _e);
            for (let Xe = 0; Xe < le.locationSize; Xe++)
              w(
                le.location + Xe,
                ce / le.locationSize,
                Ie,
                Y,
                ce * De,
                ce / le.locationSize * Xe * De,
                be
              );
          }
        } else if (K !== void 0) {
          const Y = K[te];
          if (Y !== void 0)
            switch (Y.length) {
              case 2:
                r.vertexAttrib2fv(le.location, Y);
                break;
              case 3:
                r.vertexAttrib3fv(le.location, Y);
                break;
              case 4:
                r.vertexAttrib4fv(le.location, Y);
                break;
              default:
                r.vertexAttrib1fv(le.location, Y);
            }
        }
      }
    }
    P();
  }
  function S() {
    q();
    for (const I in o) {
      const B = o[I];
      for (const G in B) {
        const j = B[G];
        for (const X in j)
          g(j[X].object), delete j[X];
        delete B[G];
      }
      delete o[I];
    }
  }
  function T(I) {
    if (o[I.id] === void 0) return;
    const B = o[I.id];
    for (const G in B) {
      const j = B[G];
      for (const X in j)
        g(j[X].object), delete j[X];
      delete B[G];
    }
    delete o[I.id];
  }
  function H(I) {
    for (const B in o) {
      const G = o[B];
      if (G[I.id] === void 0) continue;
      const j = G[I.id];
      for (const X in j)
        g(j[X].object), delete j[X];
      delete G[I.id];
    }
  }
  function q() {
    se(), h = !0, l !== c && (l = c, p(l.object));
  }
  function se() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: q,
    resetDefaultState: se,
    dispose: S,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: H,
    initAttributes: x,
    enableAttribute: A,
    disableUnusedAttributes: P
  };
}
function Uf(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(h) {
    s = h;
  }
  function o(h, u) {
    r.drawArrays(s, h, u), t.update(u, s, 1);
  }
  function c(h, u, d) {
    if (d === 0) return;
    let p, g;
    if (i)
      p = r, g = "drawArraysInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", p === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[g](s, h, u, d), t.update(u, s, d);
  }
  function l(h, u, d) {
    if (d === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let g = 0; g < d; g++)
        this.render(h[g], u[g]);
    else {
      p.multiDrawArraysWEBGL(s, h, 0, u, 0, d);
      let g = 0;
      for (let _ = 0; _ < d; _++)
        g += u[_];
      t.update(g, s, 1);
    }
  }
  this.setMode = a, this.render = o, this.renderInstances = c, this.renderMultiDraw = l;
}
function Nf(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(w) {
    if (w === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), p = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), _ = r.getParameter(r.MAX_VERTEX_ATTRIBS), m = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), f = r.getParameter(r.MAX_VARYING_VECTORS), M = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), x = d > 0, A = a || e.has("OES_texture_float"), L = x && A, P = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: m,
    maxVaryings: f,
    maxFragmentUniforms: M,
    vertexTextures: x,
    floatFragmentTextures: A,
    floatVertexTextures: L,
    maxSamples: P
  };
}
function Of(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new hn(), o = new Ve(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const p = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = u.length, p;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, p) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, f = r.get(u);
    if (!i || g === null || g.length === 0 || s && !m)
      s ? h(null) : l();
    else {
      const M = s ? 0 : n, x = M * 4;
      let A = f.clippingState || null;
      c.value = A, A = h(g, d, x, p);
      for (let L = 0; L !== x; ++L)
        A[L] = t[L];
      f.clippingState = A, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, p, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = c.value, g !== !0 || m === null) {
        const f = p + _ * 4, M = d.matrixWorldInverse;
        o.getNormalMatrix(M), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let x = 0, A = p; x !== _; ++x, A += 4)
          a.copy(u[x]).applyMatrix4(M, o), a.normal.toArray(m, A), m[A + 3] = a.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function Ff(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Or ? a.mapping = vi : o === Fr && (a.mapping = Mi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Or || o === Fr)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Yh(c.height / 2);
            return l.fromEquirectangularTexture(r, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class na extends Hc {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const pi = 4, _o = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Fn = 20, _r = /* @__PURE__ */ new na(), xo = /* @__PURE__ */ new Ae();
let xr = null, vr = 0, Mr = 0;
const Nn = (1 + Math.sqrt(5)) / 2, di = 1 / Nn, vo = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, Nn, di),
  /* @__PURE__ */ new R(0, Nn, -di),
  /* @__PURE__ */ new R(di, 0, Nn),
  /* @__PURE__ */ new R(-di, 0, Nn),
  /* @__PURE__ */ new R(Nn, di, 0),
  /* @__PURE__ */ new R(-Nn, di, 0)
];
class Mo {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    xr = this._renderer.getRenderTarget(), vr = this._renderer.getActiveCubeFace(), Mr = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Eo(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = So(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(xr, vr, Mr), e.scissorTest = !1, ys(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === vi || e.mapping === Mi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), xr = this._renderer.getRenderTarget(), vr = this._renderer.getActiveCubeFace(), Mr = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Ct,
      minFilter: Ct,
      generateMipmaps: !1,
      type: ji,
      format: zt,
      colorSpace: dt,
      depthBuffer: !1
    }, i = yo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = yo(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Bf(s)), this._blurMaterial = zf(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new xt(this._lodPlanes[0], e);
    this._renderer.compile(t, _r);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Pt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(xo), h.toneMapping = An, h.autoClear = !1;
    const p = new Bn({
      name: "PMREM.Background",
      side: Lt,
      depthWrite: !1,
      depthTest: !1
    }), g = new xt(new $i(), p);
    let _ = !1;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, _ = !0) : (p.color.copy(xo), _ = !0);
    for (let f = 0; f < 6; f++) {
      const M = f % 3;
      M === 0 ? (o.up.set(0, c[f], 0), o.lookAt(l[f], 0, 0)) : M === 1 ? (o.up.set(0, 0, c[f]), o.lookAt(0, l[f], 0)) : (o.up.set(0, c[f], 0), o.lookAt(0, 0, l[f]));
      const x = this._cubeSize;
      ys(i, M * x, f > 2 ? x : 0, x, x), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === vi || e.mapping === Mi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Eo()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = So());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new xt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    ys(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, _r);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = vo[(i - 1) % vo.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new xt(this._lodPlanes[i], l), d = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Fn - 1), _ = s / g, m = isFinite(s) ? 1 + Math.floor(h * _) : Fn;
    m > Fn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);
    const f = [];
    let M = 0;
    for (let w = 0; w < Fn; ++w) {
      const W = w / _, S = Math.exp(-W * W / 2);
      f.push(S), w === 0 ? M += S : w < m && (M += 2 * S);
    }
    for (let w = 0; w < f.length; w++)
      f[w] = f[w] / M;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: x } = this;
    d.dTheta.value = g, d.mipInt.value = x - n;
    const A = this._sizeLods[i], L = 3 * A * (i > x - pi ? i - x + pi : 0), P = 4 * (this._cubeSize - A);
    ys(t, L, P, 3 * A, 2 * A), c.setRenderTarget(t), c.render(u, _r);
  }
}
function Bf(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - pi + 1 + _o.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - pi ? c = _o[a - r + pi - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, g = 6, _ = 3, m = 2, f = 1, M = new Float32Array(_ * g * p), x = new Float32Array(m * g * p), A = new Float32Array(f * g * p);
    for (let P = 0; P < p; P++) {
      const w = P % 3 * 2 / 3 - 1, W = P > 2 ? 0 : -1, S = [
        w,
        W,
        0,
        w + 2 / 3,
        W,
        0,
        w + 2 / 3,
        W + 1,
        0,
        w,
        W,
        0,
        w + 2 / 3,
        W + 1,
        0,
        w,
        W + 1,
        0
      ];
      M.set(S, _ * g * P), x.set(d, m * g * P);
      const T = [P, P, P, P, P, P];
      A.set(T, f * g * P);
    }
    const L = new jt();
    L.setAttribute("position", new Et(M, _)), L.setAttribute("uv", new Et(x, m)), L.setAttribute("faceIndex", new Et(A, f)), e.push(L), i > pi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function yo(r, e, t) {
  const n = new Wn(r, e, t);
  return n.texture.mapping = zs, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ys(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function zf(r, e, t) {
  const n = new Float32Array(Fn), i = new R(0, 1, 0);
  return new Xn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Fn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: ia(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function So() {
  return new Xn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ia(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Eo() {
  return new Xn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ia(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: bn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ia() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Hf(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Or || c === Fr, h = c === vi || c === Mi;
      if (l || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let u = e.get(o);
          return t === null && (t = new Mo(r)), u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const u = o.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new Mo(r));
              const d = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function kf(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Gf(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const _ = d.morphAttributes[g];
      for (let m = 0, f = _.length; m < f; m++)
        e.remove(_[m]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const p = s.get(d);
    p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const g in d)
      e.update(d[g], r.ARRAY_BUFFER);
    const p = u.morphAttributes;
    for (const g in p) {
      const _ = p[g];
      for (let m = 0, f = _.length; m < f; m++)
        e.update(_[m], r.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], p = u.index, g = u.attributes.position;
    let _ = 0;
    if (p !== null) {
      const M = p.array;
      _ = p.version;
      for (let x = 0, A = M.length; x < A; x += 3) {
        const L = M[x + 0], P = M[x + 1], w = M[x + 2];
        d.push(L, P, P, w, w, L);
      }
    } else if (g !== void 0) {
      const M = g.array;
      _ = g.version;
      for (let x = 0, A = M.length / 3 - 1; x < A; x += 3) {
        const L = x + 0, P = x + 1, w = x + 2;
        d.push(L, P, P, w, w, L);
      }
    } else
      return;
    const m = new (Ic(d) ? Bc : Fc)(d, 1);
    m.version = _;
    const f = s.get(u);
    f && e.remove(f), s.set(u, m);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const p = u.index;
      p !== null && d.version < p.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function Vf(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(p) {
    s = p;
  }
  let o, c;
  function l(p) {
    o = p.type, c = p.bytesPerElement;
  }
  function h(p, g) {
    r.drawElements(s, g, o, p * c), t.update(g, s, 1);
  }
  function u(p, g, _) {
    if (_ === 0) return;
    let m, f;
    if (i)
      m = r, f = "drawElementsInstanced";
    else if (m = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", m === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    m[f](s, g, o, p * c, _), t.update(g, s, _);
  }
  function d(p, g, _) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let f = 0; f < _; f++)
        this.render(p[f] / c, g[f]);
    else {
      m.multiDrawElementsWEBGL(s, g, 0, o, p, 0, _);
      let f = 0;
      for (let M = 0; M < _; M++)
        f += g[M];
      t.update(f, s, 1);
    }
  }
  this.setMode = a, this.setIndex = l, this.render = h, this.renderInstances = u, this.renderMultiDraw = d;
}
function Wf(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function Xf(r, e) {
  return r[0] - e[0];
}
function jf(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function qf(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new et(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, h, u) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = p !== void 0 ? p.length : 0;
      let _ = s.get(h);
      if (_ === void 0 || _.count !== g) {
        let I = function() {
          q.dispose(), s.delete(h), h.removeEventListener("dispose", I);
        };
        _ !== void 0 && _.texture.dispose();
        const M = h.morphAttributes.position !== void 0, x = h.morphAttributes.normal !== void 0, A = h.morphAttributes.color !== void 0, L = h.morphAttributes.position || [], P = h.morphAttributes.normal || [], w = h.morphAttributes.color || [];
        let W = 0;
        M === !0 && (W = 1), x === !0 && (W = 2), A === !0 && (W = 3);
        let S = h.attributes.position.count * W, T = 1;
        S > e.maxTextureSize && (T = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
        const H = new Float32Array(S * T * 4 * g), q = new Nc(H, S, T, g);
        q.type = un, q.needsUpdate = !0;
        const se = W * 4;
        for (let B = 0; B < g; B++) {
          const G = L[B], j = P[B], X = w[B], V = S * T * 4 * B;
          for (let K = 0; K < G.count; K++) {
            const te = K * se;
            M === !0 && (a.fromBufferAttribute(G, K), H[V + te + 0] = a.x, H[V + te + 1] = a.y, H[V + te + 2] = a.z, H[V + te + 3] = 0), x === !0 && (a.fromBufferAttribute(j, K), H[V + te + 4] = a.x, H[V + te + 5] = a.y, H[V + te + 6] = a.z, H[V + te + 7] = 0), A === !0 && (a.fromBufferAttribute(X, K), H[V + te + 8] = a.x, H[V + te + 9] = a.y, H[V + te + 10] = a.z, H[V + te + 11] = X.itemSize === 4 ? a.w : 1);
          }
        }
        _ = {
          count: g,
          texture: q,
          size: new me(S, T)
        }, s.set(h, _), h.addEventListener("dispose", I);
      }
      let m = 0;
      for (let M = 0; M < d.length; M++)
        m += d[M];
      const f = h.morphTargetsRelative ? 1 : 1 - m;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", f), u.getUniforms().setValue(r, "morphTargetInfluences", d), u.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const p = d === void 0 ? 0 : d.length;
      let g = n[h.id];
      if (g === void 0 || g.length !== p) {
        g = [];
        for (let x = 0; x < p; x++)
          g[x] = [x, 0];
        n[h.id] = g;
      }
      for (let x = 0; x < p; x++) {
        const A = g[x];
        A[0] = x, A[1] = d[x];
      }
      g.sort(jf);
      for (let x = 0; x < 8; x++)
        x < p && g[x][1] ? (o[x][0] = g[x][0], o[x][1] = g[x][1]) : (o[x][0] = Number.MAX_SAFE_INTEGER, o[x][1] = 0);
      o.sort(Xf);
      const _ = h.morphAttributes.position, m = h.morphAttributes.normal;
      let f = 0;
      for (let x = 0; x < 8; x++) {
        const A = o[x], L = A[0], P = A[1];
        L !== Number.MAX_SAFE_INTEGER && P ? (_ && h.getAttribute("morphTarget" + x) !== _[L] && h.setAttribute("morphTarget" + x, _[L]), m && h.getAttribute("morphNormal" + x) !== m[L] && h.setAttribute("morphNormal" + x, m[L]), i[x] = P, f += P) : (_ && h.hasAttribute("morphTarget" + x) === !0 && h.deleteAttribute("morphTarget" + x), m && h.hasAttribute("morphNormal" + x) === !0 && h.deleteAttribute("morphNormal" + x), i[x] = 0);
      }
      const M = h.morphTargetsRelative ? 1 : 1 - f;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", M), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function Yf(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    if (i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (t.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class Vc extends St {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    if (h = h !== void 0 ? h : kn, h !== kn && h !== Si)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === kn && (n = En), n === void 0 && h === Si && (n = Hn), super(null, i, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : _t, this.minFilter = c !== void 0 ? c : _t, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Wc = /* @__PURE__ */ new St(), Xc = /* @__PURE__ */ new Vc(1, 1);
Xc.compareFunction = Cc;
const jc = /* @__PURE__ */ new Nc(), qc = /* @__PURE__ */ new Lh(), Yc = /* @__PURE__ */ new kc(), To = [], bo = [], Ao = new Float32Array(16), wo = new Float32Array(9), Ro = new Float32Array(4);
function Pi(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = To[i];
  if (s === void 0 && (s = new Float32Array(i), To[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function ft(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function pt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function Gs(r, e) {
  let t = bo[e];
  t === void 0 && (t = new Int32Array(e), bo[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function Kf(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function $f(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    r.uniform2fv(this.addr, e), pt(t, e);
  }
}
function Zf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ft(t, e)) return;
    r.uniform3fv(this.addr, e), pt(t, e);
  }
}
function Jf(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    r.uniform4fv(this.addr, e), pt(t, e);
  }
}
function Qf(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    Ro.set(n), r.uniformMatrix2fv(this.addr, !1, Ro), pt(t, n);
  }
}
function ep(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    wo.set(n), r.uniformMatrix3fv(this.addr, !1, wo), pt(t, n);
  }
}
function tp(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    Ao.set(n), r.uniformMatrix4fv(this.addr, !1, Ao), pt(t, n);
  }
}
function np(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function ip(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    r.uniform2iv(this.addr, e), pt(t, e);
  }
}
function sp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    r.uniform3iv(this.addr, e), pt(t, e);
  }
}
function rp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    r.uniform4iv(this.addr, e), pt(t, e);
  }
}
function ap(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function op(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    r.uniform2uiv(this.addr, e), pt(t, e);
  }
}
function cp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    r.uniform3uiv(this.addr, e), pt(t, e);
  }
}
function lp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    r.uniform4uiv(this.addr, e), pt(t, e);
  }
}
function hp(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  const s = this.type === r.SAMPLER_2D_SHADOW ? Xc : Wc;
  t.setTexture2D(e || s, i);
}
function up(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || qc, i);
}
function dp(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Yc, i);
}
function fp(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || jc, i);
}
function pp(r) {
  switch (r) {
    case 5126:
      return Kf;
    case 35664:
      return $f;
    case 35665:
      return Zf;
    case 35666:
      return Jf;
    case 35674:
      return Qf;
    case 35675:
      return ep;
    case 35676:
      return tp;
    case 5124:
    case 35670:
      return np;
    case 35667:
    case 35671:
      return ip;
    case 35668:
    case 35672:
      return sp;
    case 35669:
    case 35673:
      return rp;
    case 5125:
      return ap;
    case 36294:
      return op;
    case 36295:
      return cp;
    case 36296:
      return lp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return hp;
    case 35679:
    case 36299:
    case 36307:
      return up;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return dp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return fp;
  }
}
function mp(r, e) {
  r.uniform1fv(this.addr, e);
}
function gp(r, e) {
  const t = Pi(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function _p(r, e) {
  const t = Pi(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function xp(r, e) {
  const t = Pi(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function vp(r, e) {
  const t = Pi(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Mp(r, e) {
  const t = Pi(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function yp(r, e) {
  const t = Pi(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Sp(r, e) {
  r.uniform1iv(this.addr, e);
}
function Ep(r, e) {
  r.uniform2iv(this.addr, e);
}
function Tp(r, e) {
  r.uniform3iv(this.addr, e);
}
function bp(r, e) {
  r.uniform4iv(this.addr, e);
}
function Ap(r, e) {
  r.uniform1uiv(this.addr, e);
}
function wp(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Rp(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Pp(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Cp(r, e, t) {
  const n = this.cache, i = e.length, s = Gs(t, i);
  ft(n, s) || (r.uniform1iv(this.addr, s), pt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Wc, s[a]);
}
function Lp(r, e, t) {
  const n = this.cache, i = e.length, s = Gs(t, i);
  ft(n, s) || (r.uniform1iv(this.addr, s), pt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || qc, s[a]);
}
function Ip(r, e, t) {
  const n = this.cache, i = e.length, s = Gs(t, i);
  ft(n, s) || (r.uniform1iv(this.addr, s), pt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || Yc, s[a]);
}
function Dp(r, e, t) {
  const n = this.cache, i = e.length, s = Gs(t, i);
  ft(n, s) || (r.uniform1iv(this.addr, s), pt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || jc, s[a]);
}
function Up(r) {
  switch (r) {
    case 5126:
      return mp;
    case 35664:
      return gp;
    case 35665:
      return _p;
    case 35666:
      return xp;
    case 35674:
      return vp;
    case 35675:
      return Mp;
    case 35676:
      return yp;
    case 5124:
    case 35670:
      return Sp;
    case 35667:
    case 35671:
      return Ep;
    case 35668:
    case 35672:
      return Tp;
    case 35669:
    case 35673:
      return bp;
    case 5125:
      return Ap;
    case 36294:
      return wp;
    case 36295:
      return Rp;
    case 36296:
      return Pp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Cp;
    case 35679:
    case 36299:
    case 36307:
      return Lp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ip;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Dp;
  }
}
class Np {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = pp(t.type);
  }
}
class Op {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Up(t.type);
  }
}
class Fp {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const yr = /(\w+)(\])?(\[|\.)?/g;
function Po(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function Bp(r, e, t) {
  const n = r.name, i = n.length;
  for (yr.lastIndex = 0; ; ) {
    const s = yr.exec(n), a = yr.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      Po(t, l === void 0 ? new Np(o, r, e) : new Op(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Fp(o), Po(t, u)), t = u;
    }
  }
}
class Cs {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      Bp(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Co(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const zp = 37297;
let Hp = 0;
function kp(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Gp(r) {
  const e = Ze.getPrimaries(Ze.workingColorSpace), t = Ze.getPrimaries(r);
  let n;
  switch (e === t ? n = "" : e === Ns && t === Us ? n = "LinearDisplayP3ToLinearSRGB" : e === Us && t === Ns && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case dt:
    case Hs:
      return [n, "LinearTransferOETF"];
    case it:
    case Zr:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function Lo(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + kp(r.getShaderSource(e), a);
  } else
    return i;
}
function Vp(r, e) {
  const t = Gp(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Wp(r, e) {
  let t;
  switch (e) {
    case zl:
      t = "Linear";
      break;
    case Hl:
      t = "Reinhard";
      break;
    case kl:
      t = "OptimizedCineon";
      break;
    case Gl:
      t = "ACESFilmic";
      break;
    case Wl:
      t = "AgX";
      break;
    case Vl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Xp(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(mi).join(`
`);
}
function jp(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(mi).join(`
`);
}
function qp(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Yp(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function mi(r) {
  return r !== "";
}
function Io(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Do(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Kp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Vr(r) {
  return r.replace(Kp, Zp);
}
const $p = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function Zp(r, e) {
  let t = Be[e];
  if (t === void 0) {
    const n = $p.get(e);
    if (n !== void 0)
      t = Be[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Vr(t);
}
const Jp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Uo(r) {
  return r.replace(Jp, Qp);
}
function Qp(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function No(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function em(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === gc ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === fl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === ln && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function tm(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case vi:
      case Mi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case zs:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function nm(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case Mi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function im(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case _c:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Fl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Bl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function sm(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function rm(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = em(t), l = tm(t), h = nm(t), u = im(t), d = sm(t), p = t.isWebGL2 ? "" : Xp(t), g = jp(t), _ = qp(s), m = i.createProgram();
  let f, M, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(mi).join(`
`), f.length > 0 && (f += `
`), M = [
    p,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(mi).join(`
`), M.length > 0 && (M += `
`)) : (f = [
    No(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(mi).join(`
`), M = [
    p,
    No(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== An ? "#define TONE_MAPPING" : "",
    t.toneMapping !== An ? Be.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== An ? Wp("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Be.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Vp("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(mi).join(`
`)), a = Vr(a), a = Io(a, t), a = Do(a, t), o = Vr(o), o = Io(o, t), o = Do(o, t), a = Uo(a), o = Uo(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, f = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, M = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === Ja ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Ja ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + M);
  const A = x + f + a, L = x + M + o, P = Co(i, i.VERTEX_SHADER, A), w = Co(i, i.FRAGMENT_SHADER, L);
  i.attachShader(m, P), i.attachShader(m, w), t.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m);
  function W(q) {
    if (r.debug.checkShaderErrors) {
      const se = i.getProgramInfoLog(m).trim(), I = i.getShaderInfoLog(P).trim(), B = i.getShaderInfoLog(w).trim();
      let G = !0, j = !0;
      if (i.getProgramParameter(m, i.LINK_STATUS) === !1)
        if (G = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, m, P, w);
        else {
          const X = Lo(i, P, "vertex"), V = Lo(i, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, i.VALIDATE_STATUS) + `

Program Info Log: ` + se + `
` + X + `
` + V
          );
        }
      else se !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", se) : (I === "" || B === "") && (j = !1);
      j && (q.diagnostics = {
        runnable: G,
        programLog: se,
        vertexShader: {
          log: I,
          prefix: f
        },
        fragmentShader: {
          log: B,
          prefix: M
        }
      });
    }
    i.deleteShader(P), i.deleteShader(w), S = new Cs(i, m), T = Yp(i, m);
  }
  let S;
  this.getUniforms = function() {
    return S === void 0 && W(this), S;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && W(this), T;
  };
  let H = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return H === !1 && (H = i.getProgramParameter(m, zp)), H;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Hp++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = P, this.fragmentShader = w, this;
}
let am = 0;
class om {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new cm(e), t.set(e, n)), n;
  }
}
class cm {
  constructor(e) {
    this.id = am++, this.code = e, this.usedTimes = 0;
  }
}
function lm(r, e, t, n, i, s, a) {
  const o = new Qr(), c = new om(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(S) {
    return S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, T, H, q, se) {
    const I = q.fog, B = se.geometry, G = S.isMeshStandardMaterial ? q.environment : null, j = (S.isMeshStandardMaterial ? t : e).get(S.envMap || G), X = j && j.mapping === zs ? j.image.height : null, V = g[S.type];
    S.precision !== null && (p = i.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
    const K = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, te = K !== void 0 ? K.length : 0;
    let le = 0;
    B.morphAttributes.position !== void 0 && (le = 1), B.morphAttributes.normal !== void 0 && (le = 2), B.morphAttributes.color !== void 0 && (le = 3);
    let k, Y, ce, ve;
    if (V) {
      const ct = Yt[V];
      k = ct.vertexShader, Y = ct.fragmentShader;
    } else
      k = S.vertexShader, Y = S.fragmentShader, c.update(S), ce = c.getVertexShaderID(S), ve = c.getFragmentShaderID(S);
    const _e = r.getRenderTarget(), Ie = se.isInstancedMesh === !0, De = se.isBatchedMesh === !0, be = !!S.map, Xe = !!S.matcap, N = !!j, Mt = !!S.aoMap, Se = !!S.lightMap, Pe = !!S.bumpMap, pe = !!S.normalMap, tt = !!S.displacementMap, Ne = !!S.emissiveMap, E = !!S.metalnessMap, v = !!S.roughnessMap, U = S.anisotropy > 0, Q = S.clearcoat > 0, Z = S.iridescence > 0, ee = S.sheen > 0, ge = S.transmission > 0, oe = U && !!S.anisotropyMap, fe = Q && !!S.clearcoatMap, Te = Q && !!S.clearcoatNormalMap, Oe = Q && !!S.clearcoatRoughnessMap, $ = Z && !!S.iridescenceMap, $e = Z && !!S.iridescenceThicknessMap, ze = ee && !!S.sheenColorMap, Ce = ee && !!S.sheenRoughnessMap, ye = !!S.specularMap, he = !!S.specularColorMap, b = !!S.specularIntensityMap, ne = ge && !!S.transmissionMap, xe = ge && !!S.thicknessMap, de = !!S.gradientMap, J = !!S.alphaMap, C = S.alphaTest > 0, ie = !!S.alphaHash, ae = !!S.extensions, we = !!B.attributes.uv1, Ee = !!B.attributes.uv2, je = !!B.attributes.uv3;
    let qe = An;
    return S.toneMapped && (_e === null || _e.isXRRenderTarget === !0) && (qe = r.toneMapping), {
      isWebGL2: h,
      shaderID: V,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: k,
      fragmentShader: Y,
      defines: S.defines,
      customVertexShaderID: ce,
      customFragmentShaderID: ve,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: p,
      batching: De,
      instancing: Ie,
      instancingColor: Ie && se.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: _e === null ? r.outputColorSpace : _e.isXRRenderTarget === !0 ? _e.texture.colorSpace : dt,
      map: be,
      matcap: Xe,
      envMap: N,
      envMapMode: N && j.mapping,
      envMapCubeUVHeight: X,
      aoMap: Mt,
      lightMap: Se,
      bumpMap: Pe,
      normalMap: pe,
      displacementMap: d && tt,
      emissiveMap: Ne,
      normalMapObjectSpace: pe && S.normalMapType === sh,
      normalMapTangentSpace: pe && S.normalMapType === Pc,
      metalnessMap: E,
      roughnessMap: v,
      anisotropy: U,
      anisotropyMap: oe,
      clearcoat: Q,
      clearcoatMap: fe,
      clearcoatNormalMap: Te,
      clearcoatRoughnessMap: Oe,
      iridescence: Z,
      iridescenceMap: $,
      iridescenceThicknessMap: $e,
      sheen: ee,
      sheenColorMap: ze,
      sheenRoughnessMap: Ce,
      specularMap: ye,
      specularColorMap: he,
      specularIntensityMap: b,
      transmission: ge,
      transmissionMap: ne,
      thicknessMap: xe,
      gradientMap: de,
      opaque: S.transparent === !1 && S.blending === gi,
      alphaMap: J,
      alphaTest: C,
      alphaHash: ie,
      combine: S.combine,
      //
      mapUv: be && _(S.map.channel),
      aoMapUv: Mt && _(S.aoMap.channel),
      lightMapUv: Se && _(S.lightMap.channel),
      bumpMapUv: Pe && _(S.bumpMap.channel),
      normalMapUv: pe && _(S.normalMap.channel),
      displacementMapUv: tt && _(S.displacementMap.channel),
      emissiveMapUv: Ne && _(S.emissiveMap.channel),
      metalnessMapUv: E && _(S.metalnessMap.channel),
      roughnessMapUv: v && _(S.roughnessMap.channel),
      anisotropyMapUv: oe && _(S.anisotropyMap.channel),
      clearcoatMapUv: fe && _(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Te && _(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Oe && _(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: $ && _(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: $e && _(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: ze && _(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Ce && _(S.sheenRoughnessMap.channel),
      specularMapUv: ye && _(S.specularMap.channel),
      specularColorMapUv: he && _(S.specularColorMap.channel),
      specularIntensityMapUv: b && _(S.specularIntensityMap.channel),
      transmissionMapUv: ne && _(S.transmissionMap.channel),
      thicknessMapUv: xe && _(S.thicknessMap.channel),
      alphaMapUv: J && _(S.alphaMap.channel),
      //
      vertexTangents: !!B.attributes.tangent && (pe || U),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4,
      vertexUv1s: we,
      vertexUv2s: Ee,
      vertexUv3s: je,
      pointsUvs: se.isPoints === !0 && !!B.attributes.uv && (be || J),
      fog: !!I,
      useFog: S.fog === !0,
      fogExp2: I && I.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: se.isSkinnedMesh === !0,
      morphTargets: B.morphAttributes.position !== void 0,
      morphNormals: B.morphAttributes.normal !== void 0,
      morphColors: B.morphAttributes.color !== void 0,
      morphTargetsCount: te,
      morphTextureStride: le,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: r.shadowMap.enabled && H.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: qe,
      useLegacyLights: r._useLegacyLights,
      decodeVideoTexture: be && S.map.isVideoTexture === !0 && Ze.getTransfer(S.map.colorSpace) === nt,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === Kt,
      flipSided: S.side === Lt,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionDerivatives: ae && S.extensions.derivatives === !0,
      extensionFragDepth: ae && S.extensions.fragDepth === !0,
      extensionDrawBuffers: ae && S.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ae && S.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: ae && S.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
  }
  function f(S) {
    const T = [];
    if (S.shaderID ? T.push(S.shaderID) : (T.push(S.customVertexShaderID), T.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const H in S.defines)
        T.push(H), T.push(S.defines[H]);
    return S.isRawShaderMaterial === !1 && (M(T, S), x(T, S), T.push(r.outputColorSpace)), T.push(S.customProgramCacheKey), T.join();
  }
  function M(S, T) {
    S.push(T.precision), S.push(T.outputColorSpace), S.push(T.envMapMode), S.push(T.envMapCubeUVHeight), S.push(T.mapUv), S.push(T.alphaMapUv), S.push(T.lightMapUv), S.push(T.aoMapUv), S.push(T.bumpMapUv), S.push(T.normalMapUv), S.push(T.displacementMapUv), S.push(T.emissiveMapUv), S.push(T.metalnessMapUv), S.push(T.roughnessMapUv), S.push(T.anisotropyMapUv), S.push(T.clearcoatMapUv), S.push(T.clearcoatNormalMapUv), S.push(T.clearcoatRoughnessMapUv), S.push(T.iridescenceMapUv), S.push(T.iridescenceThicknessMapUv), S.push(T.sheenColorMapUv), S.push(T.sheenRoughnessMapUv), S.push(T.specularMapUv), S.push(T.specularColorMapUv), S.push(T.specularIntensityMapUv), S.push(T.transmissionMapUv), S.push(T.thicknessMapUv), S.push(T.combine), S.push(T.fogExp2), S.push(T.sizeAttenuation), S.push(T.morphTargetsCount), S.push(T.morphAttributeCount), S.push(T.numDirLights), S.push(T.numPointLights), S.push(T.numSpotLights), S.push(T.numSpotLightMaps), S.push(T.numHemiLights), S.push(T.numRectAreaLights), S.push(T.numDirLightShadows), S.push(T.numPointLightShadows), S.push(T.numSpotLightShadows), S.push(T.numSpotLightShadowsWithMaps), S.push(T.numLightProbes), S.push(T.shadowMapType), S.push(T.toneMapping), S.push(T.numClippingPlanes), S.push(T.numClipIntersection), S.push(T.depthPacking);
  }
  function x(S, T) {
    o.disableAll(), T.isWebGL2 && o.enable(0), T.supportsVertexTextures && o.enable(1), T.instancing && o.enable(2), T.instancingColor && o.enable(3), T.matcap && o.enable(4), T.envMap && o.enable(5), T.normalMapObjectSpace && o.enable(6), T.normalMapTangentSpace && o.enable(7), T.clearcoat && o.enable(8), T.iridescence && o.enable(9), T.alphaTest && o.enable(10), T.vertexColors && o.enable(11), T.vertexAlphas && o.enable(12), T.vertexUv1s && o.enable(13), T.vertexUv2s && o.enable(14), T.vertexUv3s && o.enable(15), T.vertexTangents && o.enable(16), T.anisotropy && o.enable(17), T.alphaHash && o.enable(18), T.batching && o.enable(19), S.push(o.mask), o.disableAll(), T.fog && o.enable(0), T.useFog && o.enable(1), T.flatShading && o.enable(2), T.logarithmicDepthBuffer && o.enable(3), T.skinning && o.enable(4), T.morphTargets && o.enable(5), T.morphNormals && o.enable(6), T.morphColors && o.enable(7), T.premultipliedAlpha && o.enable(8), T.shadowMapEnabled && o.enable(9), T.useLegacyLights && o.enable(10), T.doubleSided && o.enable(11), T.flipSided && o.enable(12), T.useDepthPacking && o.enable(13), T.dithering && o.enable(14), T.transmission && o.enable(15), T.sheen && o.enable(16), T.opaque && o.enable(17), T.pointsUvs && o.enable(18), T.decodeVideoTexture && o.enable(19), S.push(o.mask);
  }
  function A(S) {
    const T = g[S.type];
    let H;
    if (T) {
      const q = Yt[T];
      H = Wh.clone(q.uniforms);
    } else
      H = S.uniforms;
    return H;
  }
  function L(S, T) {
    let H;
    for (let q = 0, se = l.length; q < se; q++) {
      const I = l[q];
      if (I.cacheKey === T) {
        H = I, ++H.usedTimes;
        break;
      }
    }
    return H === void 0 && (H = new rm(r, T, S, s), l.push(H)), H;
  }
  function P(S) {
    if (--S.usedTimes === 0) {
      const T = l.indexOf(S);
      l[T] = l[l.length - 1], l.pop(), S.destroy();
    }
  }
  function w(S) {
    c.remove(S);
  }
  function W() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: f,
    getUniforms: A,
    acquireProgram: L,
    releaseProgram: P,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: W
  };
}
function hm() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function um(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Oo(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Fo() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, p, g, _, m) {
    let f = r[e];
    return f === void 0 ? (f = {
      id: u.id,
      object: u,
      geometry: d,
      material: p,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: _,
      group: m
    }, r[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = _, f.group = m), e++, f;
  }
  function o(u, d, p, g, _, m) {
    const f = a(u, d, p, g, _, m);
    p.transmission > 0 ? n.push(f) : p.transparent === !0 ? i.push(f) : t.push(f);
  }
  function c(u, d, p, g, _, m) {
    const f = a(u, d, p, g, _, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === !0 ? i.unshift(f) : t.unshift(f);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || um), n.length > 1 && n.sort(d || Oo), i.length > 1 && i.sort(d || Oo);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const p = r[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function dm() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new Fo(), r.set(n, [a])) : i >= s.length ? (a = new Fo(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function fm() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new Ae()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new Ae(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new Ae(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new Ae(),
            groundColor: new Ae()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ae(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function pm() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let mm = 0;
function gm(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function _m(r, e) {
  const t = new fm(), n = pm(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let h = 0; h < 9; h++) i.probe.push(new R());
  const s = new R(), a = new We(), o = new We();
  function c(h, u) {
    let d = 0, p = 0, g = 0;
    for (let q = 0; q < 9; q++) i.probe[q].set(0, 0, 0);
    let _ = 0, m = 0, f = 0, M = 0, x = 0, A = 0, L = 0, P = 0, w = 0, W = 0, S = 0;
    h.sort(gm);
    const T = u === !0 ? Math.PI : 1;
    for (let q = 0, se = h.length; q < se; q++) {
      const I = h[q], B = I.color, G = I.intensity, j = I.distance, X = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight)
        d += B.r * G * T, p += B.g * G * T, g += B.b * G * T;
      else if (I.isLightProbe) {
        for (let V = 0; V < 9; V++)
          i.probe[V].addScaledVector(I.sh.coefficients[V], G);
        S++;
      } else if (I.isDirectionalLight) {
        const V = t.get(I);
        if (V.color.copy(I.color).multiplyScalar(I.intensity * T), I.castShadow) {
          const K = I.shadow, te = n.get(I);
          te.shadowBias = K.bias, te.shadowNormalBias = K.normalBias, te.shadowRadius = K.radius, te.shadowMapSize = K.mapSize, i.directionalShadow[_] = te, i.directionalShadowMap[_] = X, i.directionalShadowMatrix[_] = I.shadow.matrix, A++;
        }
        i.directional[_] = V, _++;
      } else if (I.isSpotLight) {
        const V = t.get(I);
        V.position.setFromMatrixPosition(I.matrixWorld), V.color.copy(B).multiplyScalar(G * T), V.distance = j, V.coneCos = Math.cos(I.angle), V.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), V.decay = I.decay, i.spot[f] = V;
        const K = I.shadow;
        if (I.map && (i.spotLightMap[w] = I.map, w++, K.updateMatrices(I), I.castShadow && W++), i.spotLightMatrix[f] = K.matrix, I.castShadow) {
          const te = n.get(I);
          te.shadowBias = K.bias, te.shadowNormalBias = K.normalBias, te.shadowRadius = K.radius, te.shadowMapSize = K.mapSize, i.spotShadow[f] = te, i.spotShadowMap[f] = X, P++;
        }
        f++;
      } else if (I.isRectAreaLight) {
        const V = t.get(I);
        V.color.copy(B).multiplyScalar(G), V.halfWidth.set(I.width * 0.5, 0, 0), V.halfHeight.set(0, I.height * 0.5, 0), i.rectArea[M] = V, M++;
      } else if (I.isPointLight) {
        const V = t.get(I);
        if (V.color.copy(I.color).multiplyScalar(I.intensity * T), V.distance = I.distance, V.decay = I.decay, I.castShadow) {
          const K = I.shadow, te = n.get(I);
          te.shadowBias = K.bias, te.shadowNormalBias = K.normalBias, te.shadowRadius = K.radius, te.shadowMapSize = K.mapSize, te.shadowCameraNear = K.camera.near, te.shadowCameraFar = K.camera.far, i.pointShadow[m] = te, i.pointShadowMap[m] = X, i.pointShadowMatrix[m] = I.shadow.matrix, L++;
        }
        i.point[m] = V, m++;
      } else if (I.isHemisphereLight) {
        const V = t.get(I);
        V.skyColor.copy(I.color).multiplyScalar(G * T), V.groundColor.copy(I.groundColor).multiplyScalar(G * T), i.hemi[x] = V, x++;
      }
    }
    M > 0 && (e.isWebGL2 ? r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = re.LTC_FLOAT_1, i.rectAreaLTC2 = re.LTC_FLOAT_2) : (i.rectAreaLTC1 = re.LTC_HALF_1, i.rectAreaLTC2 = re.LTC_HALF_2) : r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = re.LTC_FLOAT_1, i.rectAreaLTC2 = re.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = re.LTC_HALF_1, i.rectAreaLTC2 = re.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = p, i.ambient[2] = g;
    const H = i.hash;
    (H.directionalLength !== _ || H.pointLength !== m || H.spotLength !== f || H.rectAreaLength !== M || H.hemiLength !== x || H.numDirectionalShadows !== A || H.numPointShadows !== L || H.numSpotShadows !== P || H.numSpotMaps !== w || H.numLightProbes !== S) && (i.directional.length = _, i.spot.length = f, i.rectArea.length = M, i.point.length = m, i.hemi.length = x, i.directionalShadow.length = A, i.directionalShadowMap.length = A, i.pointShadow.length = L, i.pointShadowMap.length = L, i.spotShadow.length = P, i.spotShadowMap.length = P, i.directionalShadowMatrix.length = A, i.pointShadowMatrix.length = L, i.spotLightMatrix.length = P + w - W, i.spotLightMap.length = w, i.numSpotLightShadowsWithMaps = W, i.numLightProbes = S, H.directionalLength = _, H.pointLength = m, H.spotLength = f, H.rectAreaLength = M, H.hemiLength = x, H.numDirectionalShadows = A, H.numPointShadows = L, H.numSpotShadows = P, H.numSpotMaps = w, H.numLightProbes = S, i.version = mm++);
  }
  function l(h, u) {
    let d = 0, p = 0, g = 0, _ = 0, m = 0;
    const f = u.matrixWorldInverse;
    for (let M = 0, x = h.length; M < x; M++) {
      const A = h[M];
      if (A.isDirectionalLight) {
        const L = i.directional[d];
        L.direction.setFromMatrixPosition(A.matrixWorld), s.setFromMatrixPosition(A.target.matrixWorld), L.direction.sub(s), L.direction.transformDirection(f), d++;
      } else if (A.isSpotLight) {
        const L = i.spot[g];
        L.position.setFromMatrixPosition(A.matrixWorld), L.position.applyMatrix4(f), L.direction.setFromMatrixPosition(A.matrixWorld), s.setFromMatrixPosition(A.target.matrixWorld), L.direction.sub(s), L.direction.transformDirection(f), g++;
      } else if (A.isRectAreaLight) {
        const L = i.rectArea[_];
        L.position.setFromMatrixPosition(A.matrixWorld), L.position.applyMatrix4(f), o.identity(), a.copy(A.matrixWorld), a.premultiply(f), o.extractRotation(a), L.halfWidth.set(A.width * 0.5, 0, 0), L.halfHeight.set(0, A.height * 0.5, 0), L.halfWidth.applyMatrix4(o), L.halfHeight.applyMatrix4(o), _++;
      } else if (A.isPointLight) {
        const L = i.point[p];
        L.position.setFromMatrixPosition(A.matrixWorld), L.position.applyMatrix4(f), p++;
      } else if (A.isHemisphereLight) {
        const L = i.hemi[m];
        L.direction.setFromMatrixPosition(A.matrixWorld), L.direction.transformDirection(f), m++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Bo(r, e) {
  const t = new _m(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o
  };
}
function xm(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let c;
    return o === void 0 ? (c = new Bo(r, e), t.set(s, [c])) : a >= o.length ? (c = new Bo(r, e), o.push(c)) : c = o[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class vm extends Zt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = nh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Mm extends Zt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ym = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Sm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Em(r, e, t) {
  let n = new ea();
  const i = new me(), s = new me(), a = new et(), o = new vm({ depthPacking: ih }), c = new Mm(), l = {}, h = t.maxTextureSize, u = { [pn]: Lt, [Lt]: pn, [Kt]: Kt }, d = new Xn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new me() },
      radius: { value: 4 }
    },
    vertexShader: ym,
    fragmentShader: Sm
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new jt();
  g.setAttribute(
    "position",
    new Et(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new xt(g, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = gc;
  let f = this.type;
  this.render = function(P, w, W) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || P.length === 0) return;
    const S = r.getRenderTarget(), T = r.getActiveCubeFace(), H = r.getActiveMipmapLevel(), q = r.state;
    q.setBlending(bn), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(!0), q.setScissorTest(!1);
    const se = f !== ln && this.type === ln, I = f === ln && this.type !== ln;
    for (let B = 0, G = P.length; B < G; B++) {
      const j = P[B], X = j.shadow;
      if (X === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
      i.copy(X.mapSize);
      const V = X.getFrameExtents();
      if (i.multiply(V), s.copy(X.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / V.x), i.x = s.x * V.x, X.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / V.y), i.y = s.y * V.y, X.mapSize.y = s.y)), X.map === null || se === !0 || I === !0) {
        const te = this.type !== ln ? { minFilter: _t, magFilter: _t } : {};
        X.map !== null && X.map.dispose(), X.map = new Wn(i.x, i.y, te), X.map.texture.name = j.name + ".shadowMap", X.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(X.map), r.clear();
      const K = X.getViewportCount();
      for (let te = 0; te < K; te++) {
        const le = X.getViewport(te);
        a.set(
          s.x * le.x,
          s.y * le.y,
          s.x * le.z,
          s.y * le.w
        ), q.viewport(a), X.updateMatrices(j, te), n = X.getFrustum(), A(w, W, X.camera, j, this.type);
      }
      X.isPointLightShadow !== !0 && this.type === ln && M(X, W), X.needsUpdate = !1;
    }
    f = this.type, m.needsUpdate = !1, r.setRenderTarget(S, T, H);
  };
  function M(P, w) {
    const W = e.update(_);
    d.defines.VSM_SAMPLES !== P.blurSamples && (d.defines.VSM_SAMPLES = P.blurSamples, p.defines.VSM_SAMPLES = P.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), P.mapPass === null && (P.mapPass = new Wn(i.x, i.y)), d.uniforms.shadow_pass.value = P.map.texture, d.uniforms.resolution.value = P.mapSize, d.uniforms.radius.value = P.radius, r.setRenderTarget(P.mapPass), r.clear(), r.renderBufferDirect(w, null, W, d, _, null), p.uniforms.shadow_pass.value = P.mapPass.texture, p.uniforms.resolution.value = P.mapSize, p.uniforms.radius.value = P.radius, r.setRenderTarget(P.map), r.clear(), r.renderBufferDirect(w, null, W, p, _, null);
  }
  function x(P, w, W, S) {
    let T = null;
    const H = W.isPointLight === !0 ? P.customDistanceMaterial : P.customDepthMaterial;
    if (H !== void 0)
      T = H;
    else if (T = W.isPointLight === !0 ? c : o, r.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const q = T.uuid, se = w.uuid;
      let I = l[q];
      I === void 0 && (I = {}, l[q] = I);
      let B = I[se];
      B === void 0 && (B = T.clone(), I[se] = B, w.addEventListener("dispose", L)), T = B;
    }
    if (T.visible = w.visible, T.wireframe = w.wireframe, S === ln ? T.side = w.shadowSide !== null ? w.shadowSide : w.side : T.side = w.shadowSide !== null ? w.shadowSide : u[w.side], T.alphaMap = w.alphaMap, T.alphaTest = w.alphaTest, T.map = w.map, T.clipShadows = w.clipShadows, T.clippingPlanes = w.clippingPlanes, T.clipIntersection = w.clipIntersection, T.displacementMap = w.displacementMap, T.displacementScale = w.displacementScale, T.displacementBias = w.displacementBias, T.wireframeLinewidth = w.wireframeLinewidth, T.linewidth = w.linewidth, W.isPointLight === !0 && T.isMeshDistanceMaterial === !0) {
      const q = r.properties.get(T);
      q.light = W;
    }
    return T;
  }
  function A(P, w, W, S, T) {
    if (P.visible === !1) return;
    if (P.layers.test(w.layers) && (P.isMesh || P.isLine || P.isPoints) && (P.castShadow || P.receiveShadow && T === ln) && (!P.frustumCulled || n.intersectsObject(P))) {
      P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, P.matrixWorld);
      const se = e.update(P), I = P.material;
      if (Array.isArray(I)) {
        const B = se.groups;
        for (let G = 0, j = B.length; G < j; G++) {
          const X = B[G], V = I[X.materialIndex];
          if (V && V.visible) {
            const K = x(P, V, S, T);
            P.onBeforeShadow(r, P, w, W, se, K, X), r.renderBufferDirect(W, null, se, K, P, X), P.onAfterShadow(r, P, w, W, se, K, X);
          }
        }
      } else if (I.visible) {
        const B = x(P, I, S, T);
        P.onBeforeShadow(r, P, w, W, se, B, null), r.renderBufferDirect(W, null, se, B, P, null), P.onAfterShadow(r, P, w, W, se, B, null);
      }
    }
    const q = P.children;
    for (let se = 0, I = q.length; se < I; se++)
      A(q[se], w, W, S, T);
  }
  function L(P) {
    P.target.removeEventListener("dispose", L);
    for (const W in l) {
      const S = l[W], T = P.target.uuid;
      T in S && (S[T].dispose(), delete S[T]);
    }
  }
}
function Tm(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let C = !1;
    const ie = new et();
    let ae = null;
    const we = new et(0, 0, 0, 0);
    return {
      setMask: function(Ee) {
        ae !== Ee && !C && (r.colorMask(Ee, Ee, Ee, Ee), ae = Ee);
      },
      setLocked: function(Ee) {
        C = Ee;
      },
      setClear: function(Ee, je, qe, at, ct) {
        ct === !0 && (Ee *= at, je *= at, qe *= at), ie.set(Ee, je, qe, at), we.equals(ie) === !1 && (r.clearColor(Ee, je, qe, at), we.copy(ie));
      },
      reset: function() {
        C = !1, ae = null, we.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let C = !1, ie = null, ae = null, we = null;
    return {
      setTest: function(Ee) {
        Ee ? De(r.DEPTH_TEST) : be(r.DEPTH_TEST);
      },
      setMask: function(Ee) {
        ie !== Ee && !C && (r.depthMask(Ee), ie = Ee);
      },
      setFunc: function(Ee) {
        if (ae !== Ee) {
          switch (Ee) {
            case Cl:
              r.depthFunc(r.NEVER);
              break;
            case Ll:
              r.depthFunc(r.ALWAYS);
              break;
            case Il:
              r.depthFunc(r.LESS);
              break;
            case Ls:
              r.depthFunc(r.LEQUAL);
              break;
            case Dl:
              r.depthFunc(r.EQUAL);
              break;
            case Ul:
              r.depthFunc(r.GEQUAL);
              break;
            case Nl:
              r.depthFunc(r.GREATER);
              break;
            case Ol:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          ae = Ee;
        }
      },
      setLocked: function(Ee) {
        C = Ee;
      },
      setClear: function(Ee) {
        we !== Ee && (r.clearDepth(Ee), we = Ee);
      },
      reset: function() {
        C = !1, ie = null, ae = null, we = null;
      }
    };
  }
  function a() {
    let C = !1, ie = null, ae = null, we = null, Ee = null, je = null, qe = null, at = null, ct = null;
    return {
      setTest: function(Ke) {
        C || (Ke ? De(r.STENCIL_TEST) : be(r.STENCIL_TEST));
      },
      setMask: function(Ke) {
        ie !== Ke && !C && (r.stencilMask(Ke), ie = Ke);
      },
      setFunc: function(Ke, ht, qt) {
        (ae !== Ke || we !== ht || Ee !== qt) && (r.stencilFunc(Ke, ht, qt), ae = Ke, we = ht, Ee = qt);
      },
      setOp: function(Ke, ht, qt) {
        (je !== Ke || qe !== ht || at !== qt) && (r.stencilOp(Ke, ht, qt), je = Ke, qe = ht, at = qt);
      },
      setLocked: function(Ke) {
        C = Ke;
      },
      setClear: function(Ke) {
        ct !== Ke && (r.clearStencil(Ke), ct = Ke);
      },
      reset: function() {
        C = !1, ie = null, ae = null, we = null, Ee = null, je = null, qe = null, at = null, ct = null;
      }
    };
  }
  const o = new i(), c = new s(), l = new a(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], m = null, f = !1, M = null, x = null, A = null, L = null, P = null, w = null, W = null, S = new Ae(0, 0, 0), T = 0, H = !1, q = null, se = null, I = null, B = null, G = null;
  const j = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = !1, V = 0;
  const K = r.getParameter(r.VERSION);
  K.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL (\d)/.exec(K)[1]), X = V >= 1) : K.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), X = V >= 2);
  let te = null, le = {};
  const k = r.getParameter(r.SCISSOR_BOX), Y = r.getParameter(r.VIEWPORT), ce = new et().fromArray(k), ve = new et().fromArray(Y);
  function _e(C, ie, ae, we) {
    const Ee = new Uint8Array(4), je = r.createTexture();
    r.bindTexture(C, je), r.texParameteri(C, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(C, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let qe = 0; qe < ae; qe++)
      n && (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ie, 0, r.RGBA, 1, 1, we, 0, r.RGBA, r.UNSIGNED_BYTE, Ee) : r.texImage2D(ie + qe, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, Ee);
    return je;
  }
  const Ie = {};
  Ie[r.TEXTURE_2D] = _e(r.TEXTURE_2D, r.TEXTURE_2D, 1), Ie[r.TEXTURE_CUBE_MAP] = _e(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Ie[r.TEXTURE_2D_ARRAY] = _e(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Ie[r.TEXTURE_3D] = _e(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), De(r.DEPTH_TEST), c.setFunc(Ls), Ne(!1), E(ga), De(r.CULL_FACE), pe(bn);
  function De(C) {
    d[C] !== !0 && (r.enable(C), d[C] = !0);
  }
  function be(C) {
    d[C] !== !1 && (r.disable(C), d[C] = !1);
  }
  function Xe(C, ie) {
    return p[C] !== ie ? (r.bindFramebuffer(C, ie), p[C] = ie, n && (C === r.DRAW_FRAMEBUFFER && (p[r.FRAMEBUFFER] = ie), C === r.FRAMEBUFFER && (p[r.DRAW_FRAMEBUFFER] = ie)), !0) : !1;
  }
  function N(C, ie) {
    let ae = _, we = !1;
    if (C)
      if (ae = g.get(ie), ae === void 0 && (ae = [], g.set(ie, ae)), C.isWebGLMultipleRenderTargets) {
        const Ee = C.texture;
        if (ae.length !== Ee.length || ae[0] !== r.COLOR_ATTACHMENT0) {
          for (let je = 0, qe = Ee.length; je < qe; je++)
            ae[je] = r.COLOR_ATTACHMENT0 + je;
          ae.length = Ee.length, we = !0;
        }
      } else
        ae[0] !== r.COLOR_ATTACHMENT0 && (ae[0] = r.COLOR_ATTACHMENT0, we = !0);
    else
      ae[0] !== r.BACK && (ae[0] = r.BACK, we = !0);
    we && (t.isWebGL2 ? r.drawBuffers(ae) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae));
  }
  function Mt(C) {
    return m !== C ? (r.useProgram(C), m = C, !0) : !1;
  }
  const Se = {
    [On]: r.FUNC_ADD,
    [ml]: r.FUNC_SUBTRACT,
    [gl]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    Se[Ma] = r.MIN, Se[ya] = r.MAX;
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && (Se[Ma] = C.MIN_EXT, Se[ya] = C.MAX_EXT);
  }
  const Pe = {
    [_l]: r.ZERO,
    [xl]: r.ONE,
    [vl]: r.SRC_COLOR,
    [Ur]: r.SRC_ALPHA,
    [bl]: r.SRC_ALPHA_SATURATE,
    [El]: r.DST_COLOR,
    [yl]: r.DST_ALPHA,
    [Ml]: r.ONE_MINUS_SRC_COLOR,
    [Nr]: r.ONE_MINUS_SRC_ALPHA,
    [Tl]: r.ONE_MINUS_DST_COLOR,
    [Sl]: r.ONE_MINUS_DST_ALPHA,
    [Al]: r.CONSTANT_COLOR,
    [wl]: r.ONE_MINUS_CONSTANT_COLOR,
    [Rl]: r.CONSTANT_ALPHA,
    [Pl]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function pe(C, ie, ae, we, Ee, je, qe, at, ct, Ke) {
    if (C === bn) {
      f === !0 && (be(r.BLEND), f = !1);
      return;
    }
    if (f === !1 && (De(r.BLEND), f = !0), C !== pl) {
      if (C !== M || Ke !== H) {
        if ((x !== On || P !== On) && (r.blendEquation(r.FUNC_ADD), x = On, P = On), Ke)
          switch (C) {
            case gi:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case _a:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case xa:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case va:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case gi:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case _a:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case xa:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case va:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        A = null, L = null, w = null, W = null, S.set(0, 0, 0), T = 0, M = C, H = Ke;
      }
      return;
    }
    Ee = Ee || ie, je = je || ae, qe = qe || we, (ie !== x || Ee !== P) && (r.blendEquationSeparate(Se[ie], Se[Ee]), x = ie, P = Ee), (ae !== A || we !== L || je !== w || qe !== W) && (r.blendFuncSeparate(Pe[ae], Pe[we], Pe[je], Pe[qe]), A = ae, L = we, w = je, W = qe), (at.equals(S) === !1 || ct !== T) && (r.blendColor(at.r, at.g, at.b, ct), S.copy(at), T = ct), M = C, H = !1;
  }
  function tt(C, ie) {
    C.side === Kt ? be(r.CULL_FACE) : De(r.CULL_FACE);
    let ae = C.side === Lt;
    ie && (ae = !ae), Ne(ae), C.blending === gi && C.transparent === !1 ? pe(bn) : pe(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), c.setFunc(C.depthFunc), c.setTest(C.depthTest), c.setMask(C.depthWrite), o.setMask(C.colorWrite);
    const we = C.stencilWrite;
    l.setTest(we), we && (l.setMask(C.stencilWriteMask), l.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), l.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), U(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? De(r.SAMPLE_ALPHA_TO_COVERAGE) : be(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ne(C) {
    q !== C && (C ? r.frontFace(r.CW) : r.frontFace(r.CCW), q = C);
  }
  function E(C) {
    C !== ul ? (De(r.CULL_FACE), C !== se && (C === ga ? r.cullFace(r.BACK) : C === dl ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : be(r.CULL_FACE), se = C;
  }
  function v(C) {
    C !== I && (X && r.lineWidth(C), I = C);
  }
  function U(C, ie, ae) {
    C ? (De(r.POLYGON_OFFSET_FILL), (B !== ie || G !== ae) && (r.polygonOffset(ie, ae), B = ie, G = ae)) : be(r.POLYGON_OFFSET_FILL);
  }
  function Q(C) {
    C ? De(r.SCISSOR_TEST) : be(r.SCISSOR_TEST);
  }
  function Z(C) {
    C === void 0 && (C = r.TEXTURE0 + j - 1), te !== C && (r.activeTexture(C), te = C);
  }
  function ee(C, ie, ae) {
    ae === void 0 && (te === null ? ae = r.TEXTURE0 + j - 1 : ae = te);
    let we = le[ae];
    we === void 0 && (we = { type: void 0, texture: void 0 }, le[ae] = we), (we.type !== C || we.texture !== ie) && (te !== ae && (r.activeTexture(ae), te = ae), r.bindTexture(C, ie || Ie[C]), we.type = C, we.texture = ie);
  }
  function ge() {
    const C = le[te];
    C !== void 0 && C.type !== void 0 && (r.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function oe() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function fe() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Te() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Oe() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function $() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function $e() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ze() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Ce() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ye() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function he() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function b(C) {
    ce.equals(C) === !1 && (r.scissor(C.x, C.y, C.z, C.w), ce.copy(C));
  }
  function ne(C) {
    ve.equals(C) === !1 && (r.viewport(C.x, C.y, C.z, C.w), ve.copy(C));
  }
  function xe(C, ie) {
    let ae = u.get(ie);
    ae === void 0 && (ae = /* @__PURE__ */ new WeakMap(), u.set(ie, ae));
    let we = ae.get(C);
    we === void 0 && (we = r.getUniformBlockIndex(ie, C.name), ae.set(C, we));
  }
  function de(C, ie) {
    const we = u.get(ie).get(C);
    h.get(ie) !== we && (r.uniformBlockBinding(ie, we, C.__bindingPointIndex), h.set(ie, we));
  }
  function J() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, te = null, le = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], m = null, f = !1, M = null, x = null, A = null, L = null, P = null, w = null, W = null, S = new Ae(0, 0, 0), T = 0, H = !1, q = null, se = null, I = null, B = null, G = null, ce.set(0, 0, r.canvas.width, r.canvas.height), ve.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: De,
    disable: be,
    bindFramebuffer: Xe,
    drawBuffers: N,
    useProgram: Mt,
    setBlending: pe,
    setMaterial: tt,
    setFlipSided: Ne,
    setCullFace: E,
    setLineWidth: v,
    setPolygonOffset: U,
    setScissorTest: Q,
    activeTexture: Z,
    bindTexture: ee,
    unbindTexture: ge,
    compressedTexImage2D: oe,
    compressedTexImage3D: fe,
    texImage2D: ye,
    texImage3D: he,
    updateUBOMapping: xe,
    uniformBlockBinding: de,
    texStorage2D: ze,
    texStorage3D: Ce,
    texSubImage2D: Te,
    texSubImage3D: Oe,
    compressedTexSubImage2D: $,
    compressedTexSubImage3D: $e,
    scissor: b,
    viewport: ne,
    reset: J
  };
}
function bm(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, v) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, v)
    ) : Yi("canvas");
  }
  function _(E, v, U, Q) {
    let Z = 1;
    if ((E.width > Q || E.height > Q) && (Z = Q / Math.max(E.width, E.height)), Z < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
        const ee = v ? Fs : Math.floor, ge = ee(Z * E.width), oe = ee(Z * E.height);
        u === void 0 && (u = g(ge, oe));
        const fe = U ? g(ge, oe) : u;
        return fe.width = ge, fe.height = oe, fe.getContext("2d").drawImage(E, 0, 0, ge, oe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + ge + "x" + oe + ")."), fe;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E;
  }
  function m(E) {
    return Gr(E.width) && Gr(E.height);
  }
  function f(E) {
    return o ? !1 : E.wrapS !== Bt || E.wrapT !== Bt || E.minFilter !== _t && E.minFilter !== Ct;
  }
  function M(E, v) {
    return E.generateMipmaps && v && E.minFilter !== _t && E.minFilter !== Ct;
  }
  function x(E) {
    r.generateMipmap(E);
  }
  function A(E, v, U, Q, Z = !1) {
    if (o === !1) return v;
    if (E !== null) {
      if (r[E] !== void 0) return r[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let ee = v;
    if (v === r.RED && (U === r.FLOAT && (ee = r.R32F), U === r.HALF_FLOAT && (ee = r.R16F), U === r.UNSIGNED_BYTE && (ee = r.R8)), v === r.RED_INTEGER && (U === r.UNSIGNED_BYTE && (ee = r.R8UI), U === r.UNSIGNED_SHORT && (ee = r.R16UI), U === r.UNSIGNED_INT && (ee = r.R32UI), U === r.BYTE && (ee = r.R8I), U === r.SHORT && (ee = r.R16I), U === r.INT && (ee = r.R32I)), v === r.RG && (U === r.FLOAT && (ee = r.RG32F), U === r.HALF_FLOAT && (ee = r.RG16F), U === r.UNSIGNED_BYTE && (ee = r.RG8)), v === r.RGBA) {
      const ge = Z ? Ds : Ze.getTransfer(Q);
      U === r.FLOAT && (ee = r.RGBA32F), U === r.HALF_FLOAT && (ee = r.RGBA16F), U === r.UNSIGNED_BYTE && (ee = ge === nt ? r.SRGB8_ALPHA8 : r.RGBA8), U === r.UNSIGNED_SHORT_4_4_4_4 && (ee = r.RGBA4), U === r.UNSIGNED_SHORT_5_5_5_1 && (ee = r.RGB5_A1);
    }
    return (ee === r.R16F || ee === r.R32F || ee === r.RG16F || ee === r.RG32F || ee === r.RGBA16F || ee === r.RGBA32F) && e.get("EXT_color_buffer_float"), ee;
  }
  function L(E, v, U) {
    return M(E, U) === !0 || E.isFramebufferTexture && E.minFilter !== _t && E.minFilter !== Ct ? Math.log2(Math.max(v.width, v.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? v.mipmaps.length : 1;
  }
  function P(E) {
    return E === _t || E === Br || E === Ps ? r.NEAREST : r.LINEAR;
  }
  function w(E) {
    const v = E.target;
    v.removeEventListener("dispose", w), S(v), v.isVideoTexture && h.delete(v);
  }
  function W(E) {
    const v = E.target;
    v.removeEventListener("dispose", W), H(v);
  }
  function S(E) {
    const v = n.get(E);
    if (v.__webglInit === void 0) return;
    const U = E.source, Q = d.get(U);
    if (Q) {
      const Z = Q[v.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && T(E), Object.keys(Q).length === 0 && d.delete(U);
    }
    n.remove(E);
  }
  function T(E) {
    const v = n.get(E);
    r.deleteTexture(v.__webglTexture);
    const U = E.source, Q = d.get(U);
    delete Q[v.__cacheKey], a.memory.textures--;
  }
  function H(E) {
    const v = E.texture, U = n.get(E), Q = n.get(v);
    if (Q.__webglTexture !== void 0 && (r.deleteTexture(Q.__webglTexture), a.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
      for (let Z = 0; Z < 6; Z++) {
        if (Array.isArray(U.__webglFramebuffer[Z]))
          for (let ee = 0; ee < U.__webglFramebuffer[Z].length; ee++) r.deleteFramebuffer(U.__webglFramebuffer[Z][ee]);
        else
          r.deleteFramebuffer(U.__webglFramebuffer[Z]);
        U.__webglDepthbuffer && r.deleteRenderbuffer(U.__webglDepthbuffer[Z]);
      }
    else {
      if (Array.isArray(U.__webglFramebuffer))
        for (let Z = 0; Z < U.__webglFramebuffer.length; Z++) r.deleteFramebuffer(U.__webglFramebuffer[Z]);
      else
        r.deleteFramebuffer(U.__webglFramebuffer);
      if (U.__webglDepthbuffer && r.deleteRenderbuffer(U.__webglDepthbuffer), U.__webglMultisampledFramebuffer && r.deleteFramebuffer(U.__webglMultisampledFramebuffer), U.__webglColorRenderbuffer)
        for (let Z = 0; Z < U.__webglColorRenderbuffer.length; Z++)
          U.__webglColorRenderbuffer[Z] && r.deleteRenderbuffer(U.__webglColorRenderbuffer[Z]);
      U.__webglDepthRenderbuffer && r.deleteRenderbuffer(U.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let Z = 0, ee = v.length; Z < ee; Z++) {
        const ge = n.get(v[Z]);
        ge.__webglTexture && (r.deleteTexture(ge.__webglTexture), a.memory.textures--), n.remove(v[Z]);
      }
    n.remove(v), n.remove(E);
  }
  let q = 0;
  function se() {
    q = 0;
  }
  function I() {
    const E = q;
    return E >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + i.maxTextures), q += 1, E;
  }
  function B(E) {
    const v = [];
    return v.push(E.wrapS), v.push(E.wrapT), v.push(E.wrapR || 0), v.push(E.magFilter), v.push(E.minFilter), v.push(E.anisotropy), v.push(E.internalFormat), v.push(E.format), v.push(E.type), v.push(E.generateMipmaps), v.push(E.premultiplyAlpha), v.push(E.flipY), v.push(E.unpackAlignment), v.push(E.colorSpace), v.join();
  }
  function G(E, v) {
    const U = n.get(E);
    if (E.isVideoTexture && tt(E), E.isRenderTargetTexture === !1 && E.version > 0 && U.__version !== E.version) {
      const Q = E.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ce(U, E, v);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, U.__webglTexture, r.TEXTURE0 + v);
  }
  function j(E, v) {
    const U = n.get(E);
    if (E.version > 0 && U.__version !== E.version) {
      ce(U, E, v);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, U.__webglTexture, r.TEXTURE0 + v);
  }
  function X(E, v) {
    const U = n.get(E);
    if (E.version > 0 && U.__version !== E.version) {
      ce(U, E, v);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, U.__webglTexture, r.TEXTURE0 + v);
  }
  function V(E, v) {
    const U = n.get(E);
    if (E.version > 0 && U.__version !== E.version) {
      ve(U, E, v);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, U.__webglTexture, r.TEXTURE0 + v);
  }
  const K = {
    [yi]: r.REPEAT,
    [Bt]: r.CLAMP_TO_EDGE,
    [Is]: r.MIRRORED_REPEAT
  }, te = {
    [_t]: r.NEAREST,
    [Br]: r.NEAREST_MIPMAP_NEAREST,
    [Ps]: r.NEAREST_MIPMAP_LINEAR,
    [Ct]: r.LINEAR,
    [vc]: r.LINEAR_MIPMAP_NEAREST,
    [Vn]: r.LINEAR_MIPMAP_LINEAR
  }, le = {
    [rh]: r.NEVER,
    [uh]: r.ALWAYS,
    [ah]: r.LESS,
    [Cc]: r.LEQUAL,
    [oh]: r.EQUAL,
    [hh]: r.GEQUAL,
    [ch]: r.GREATER,
    [lh]: r.NOTEQUAL
  };
  function k(E, v, U) {
    if (U ? (r.texParameteri(E, r.TEXTURE_WRAP_S, K[v.wrapS]), r.texParameteri(E, r.TEXTURE_WRAP_T, K[v.wrapT]), (E === r.TEXTURE_3D || E === r.TEXTURE_2D_ARRAY) && r.texParameteri(E, r.TEXTURE_WRAP_R, K[v.wrapR]), r.texParameteri(E, r.TEXTURE_MAG_FILTER, te[v.magFilter]), r.texParameteri(E, r.TEXTURE_MIN_FILTER, te[v.minFilter])) : (r.texParameteri(E, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(E, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (E === r.TEXTURE_3D || E === r.TEXTURE_2D_ARRAY) && r.texParameteri(E, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (v.wrapS !== Bt || v.wrapT !== Bt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(E, r.TEXTURE_MAG_FILTER, P(v.magFilter)), r.texParameteri(E, r.TEXTURE_MIN_FILTER, P(v.minFilter)), v.minFilter !== _t && v.minFilter !== Ct && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), v.compareFunction && (r.texParameteri(E, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(E, r.TEXTURE_COMPARE_FUNC, le[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (v.magFilter === _t || v.minFilter !== Ps && v.minFilter !== Vn || v.type === un && e.has("OES_texture_float_linear") === !1 || o === !1 && v.type === ji && e.has("OES_texture_half_float_linear") === !1) return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (r.texParameterf(E, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function Y(E, v) {
    let U = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, v.addEventListener("dispose", w));
    const Q = v.source;
    let Z = d.get(Q);
    Z === void 0 && (Z = {}, d.set(Q, Z));
    const ee = B(v);
    if (ee !== E.__cacheKey) {
      Z[ee] === void 0 && (Z[ee] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, U = !0), Z[ee].usedTimes++;
      const ge = Z[E.__cacheKey];
      ge !== void 0 && (Z[E.__cacheKey].usedTimes--, ge.usedTimes === 0 && T(v)), E.__cacheKey = ee, E.__webglTexture = Z[ee].texture;
    }
    return U;
  }
  function ce(E, v, U) {
    let Q = r.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (Q = r.TEXTURE_2D_ARRAY), v.isData3DTexture && (Q = r.TEXTURE_3D);
    const Z = Y(E, v), ee = v.source;
    t.bindTexture(Q, E.__webglTexture, r.TEXTURE0 + U);
    const ge = n.get(ee);
    if (ee.version !== ge.__version || Z === !0) {
      t.activeTexture(r.TEXTURE0 + U);
      const oe = Ze.getPrimaries(Ze.workingColorSpace), fe = v.colorSpace === Ht ? null : Ze.getPrimaries(v.colorSpace), Te = v.colorSpace === Ht || oe === fe ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Te);
      const Oe = f(v) && m(v.image) === !1;
      let $ = _(v.image, Oe, !1, i.maxTextureSize);
      $ = Ne(v, $);
      const $e = m($) || o, ze = s.convert(v.format, v.colorSpace);
      let Ce = s.convert(v.type), ye = A(v.internalFormat, ze, Ce, v.colorSpace, v.isVideoTexture);
      k(Q, v, $e);
      let he;
      const b = v.mipmaps, ne = o && v.isVideoTexture !== !0 && ye !== Ac, xe = ge.__version === void 0 || Z === !0, de = L(v, $, $e);
      if (v.isDepthTexture)
        ye = r.DEPTH_COMPONENT, o ? v.type === un ? ye = r.DEPTH_COMPONENT32F : v.type === En ? ye = r.DEPTH_COMPONENT24 : v.type === Hn ? ye = r.DEPTH24_STENCIL8 : ye = r.DEPTH_COMPONENT16 : v.type === un && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === kn && ye === r.DEPTH_COMPONENT && v.type !== $r && v.type !== En && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = En, Ce = s.convert(v.type)), v.format === Si && ye === r.DEPTH_COMPONENT && (ye = r.DEPTH_STENCIL, v.type !== Hn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Hn, Ce = s.convert(v.type))), xe && (ne ? t.texStorage2D(r.TEXTURE_2D, 1, ye, $.width, $.height) : t.texImage2D(r.TEXTURE_2D, 0, ye, $.width, $.height, 0, ze, Ce, null));
      else if (v.isDataTexture)
        if (b.length > 0 && $e) {
          ne && xe && t.texStorage2D(r.TEXTURE_2D, de, ye, b[0].width, b[0].height);
          for (let J = 0, C = b.length; J < C; J++)
            he = b[J], ne ? t.texSubImage2D(r.TEXTURE_2D, J, 0, 0, he.width, he.height, ze, Ce, he.data) : t.texImage2D(r.TEXTURE_2D, J, ye, he.width, he.height, 0, ze, Ce, he.data);
          v.generateMipmaps = !1;
        } else
          ne ? (xe && t.texStorage2D(r.TEXTURE_2D, de, ye, $.width, $.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, $.width, $.height, ze, Ce, $.data)) : t.texImage2D(r.TEXTURE_2D, 0, ye, $.width, $.height, 0, ze, Ce, $.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          ne && xe && t.texStorage3D(r.TEXTURE_2D_ARRAY, de, ye, b[0].width, b[0].height, $.depth);
          for (let J = 0, C = b.length; J < C; J++)
            he = b[J], v.format !== zt ? ze !== null ? ne ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, J, 0, 0, 0, he.width, he.height, $.depth, ze, he.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, J, ye, he.width, he.height, $.depth, 0, he.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ne ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, J, 0, 0, 0, he.width, he.height, $.depth, ze, Ce, he.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, J, ye, he.width, he.height, $.depth, 0, ze, Ce, he.data);
        } else {
          ne && xe && t.texStorage2D(r.TEXTURE_2D, de, ye, b[0].width, b[0].height);
          for (let J = 0, C = b.length; J < C; J++)
            he = b[J], v.format !== zt ? ze !== null ? ne ? t.compressedTexSubImage2D(r.TEXTURE_2D, J, 0, 0, he.width, he.height, ze, he.data) : t.compressedTexImage2D(r.TEXTURE_2D, J, ye, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ne ? t.texSubImage2D(r.TEXTURE_2D, J, 0, 0, he.width, he.height, ze, Ce, he.data) : t.texImage2D(r.TEXTURE_2D, J, ye, he.width, he.height, 0, ze, Ce, he.data);
        }
      else if (v.isDataArrayTexture)
        ne ? (xe && t.texStorage3D(r.TEXTURE_2D_ARRAY, de, ye, $.width, $.height, $.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, ze, Ce, $.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, ye, $.width, $.height, $.depth, 0, ze, Ce, $.data);
      else if (v.isData3DTexture)
        ne ? (xe && t.texStorage3D(r.TEXTURE_3D, de, ye, $.width, $.height, $.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, ze, Ce, $.data)) : t.texImage3D(r.TEXTURE_3D, 0, ye, $.width, $.height, $.depth, 0, ze, Ce, $.data);
      else if (v.isFramebufferTexture) {
        if (xe)
          if (ne)
            t.texStorage2D(r.TEXTURE_2D, de, ye, $.width, $.height);
          else {
            let J = $.width, C = $.height;
            for (let ie = 0; ie < de; ie++)
              t.texImage2D(r.TEXTURE_2D, ie, ye, J, C, 0, ze, Ce, null), J >>= 1, C >>= 1;
          }
      } else if (b.length > 0 && $e) {
        ne && xe && t.texStorage2D(r.TEXTURE_2D, de, ye, b[0].width, b[0].height);
        for (let J = 0, C = b.length; J < C; J++)
          he = b[J], ne ? t.texSubImage2D(r.TEXTURE_2D, J, 0, 0, ze, Ce, he) : t.texImage2D(r.TEXTURE_2D, J, ye, ze, Ce, he);
        v.generateMipmaps = !1;
      } else
        ne ? (xe && t.texStorage2D(r.TEXTURE_2D, de, ye, $.width, $.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ze, Ce, $)) : t.texImage2D(r.TEXTURE_2D, 0, ye, ze, Ce, $);
      M(v, $e) && x(Q), ge.__version = ee.version, v.onUpdate && v.onUpdate(v);
    }
    E.__version = v.version;
  }
  function ve(E, v, U) {
    if (v.image.length !== 6) return;
    const Q = Y(E, v), Z = v.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, E.__webglTexture, r.TEXTURE0 + U);
    const ee = n.get(Z);
    if (Z.version !== ee.__version || Q === !0) {
      t.activeTexture(r.TEXTURE0 + U);
      const ge = Ze.getPrimaries(Ze.workingColorSpace), oe = v.colorSpace === Ht ? null : Ze.getPrimaries(v.colorSpace), fe = v.colorSpace === Ht || ge === oe ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe);
      const Te = v.isCompressedTexture || v.image[0].isCompressedTexture, Oe = v.image[0] && v.image[0].isDataTexture, $ = [];
      for (let J = 0; J < 6; J++)
        !Te && !Oe ? $[J] = _(v.image[J], !1, !0, i.maxCubemapSize) : $[J] = Oe ? v.image[J].image : v.image[J], $[J] = Ne(v, $[J]);
      const $e = $[0], ze = m($e) || o, Ce = s.convert(v.format, v.colorSpace), ye = s.convert(v.type), he = A(v.internalFormat, Ce, ye, v.colorSpace), b = o && v.isVideoTexture !== !0, ne = ee.__version === void 0 || Q === !0;
      let xe = L(v, $e, ze);
      k(r.TEXTURE_CUBE_MAP, v, ze);
      let de;
      if (Te) {
        b && ne && t.texStorage2D(r.TEXTURE_CUBE_MAP, xe, he, $e.width, $e.height);
        for (let J = 0; J < 6; J++) {
          de = $[J].mipmaps;
          for (let C = 0; C < de.length; C++) {
            const ie = de[C];
            v.format !== zt ? Ce !== null ? b ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, C, 0, 0, ie.width, ie.height, Ce, ie.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, C, he, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : b ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, C, 0, 0, ie.width, ie.height, Ce, ye, ie.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, C, he, ie.width, ie.height, 0, Ce, ye, ie.data);
          }
        }
      } else {
        de = v.mipmaps, b && ne && (de.length > 0 && xe++, t.texStorage2D(r.TEXTURE_CUBE_MAP, xe, he, $[0].width, $[0].height));
        for (let J = 0; J < 6; J++)
          if (Oe) {
            b ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, $[J].width, $[J].height, Ce, ye, $[J].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, he, $[J].width, $[J].height, 0, Ce, ye, $[J].data);
            for (let C = 0; C < de.length; C++) {
              const ae = de[C].image[J].image;
              b ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, C + 1, 0, 0, ae.width, ae.height, Ce, ye, ae.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, C + 1, he, ae.width, ae.height, 0, Ce, ye, ae.data);
            }
          } else {
            b ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, 0, 0, Ce, ye, $[J]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, 0, he, Ce, ye, $[J]);
            for (let C = 0; C < de.length; C++) {
              const ie = de[C];
              b ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, C + 1, 0, 0, Ce, ye, ie.image[J]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + J, C + 1, he, Ce, ye, ie.image[J]);
            }
          }
      }
      M(v, ze) && x(r.TEXTURE_CUBE_MAP), ee.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    E.__version = v.version;
  }
  function _e(E, v, U, Q, Z, ee) {
    const ge = s.convert(U.format, U.colorSpace), oe = s.convert(U.type), fe = A(U.internalFormat, ge, oe, U.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const Oe = Math.max(1, v.width >> ee), $ = Math.max(1, v.height >> ee);
      Z === r.TEXTURE_3D || Z === r.TEXTURE_2D_ARRAY ? t.texImage3D(Z, ee, fe, Oe, $, v.depth, 0, ge, oe, null) : t.texImage2D(Z, ee, fe, Oe, $, 0, ge, oe, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, E), pe(v) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Q, Z, n.get(U).__webglTexture, 0, Pe(v)) : (Z === r.TEXTURE_2D || Z >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Q, Z, n.get(U).__webglTexture, ee), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Ie(E, v, U) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, E), v.depthBuffer && !v.stencilBuffer) {
      let Q = o === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
      if (U || pe(v)) {
        const Z = v.depthTexture;
        Z && Z.isDepthTexture && (Z.type === un ? Q = r.DEPTH_COMPONENT32F : Z.type === En && (Q = r.DEPTH_COMPONENT24));
        const ee = Pe(v);
        pe(v) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ee, Q, v.width, v.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, ee, Q, v.width, v.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, Q, v.width, v.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, E);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const Q = Pe(v);
      U && pe(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Q, r.DEPTH24_STENCIL8, v.width, v.height) : pe(v) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Q, r.DEPTH24_STENCIL8, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, v.width, v.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, E);
    } else {
      const Q = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let Z = 0; Z < Q.length; Z++) {
        const ee = Q[Z], ge = s.convert(ee.format, ee.colorSpace), oe = s.convert(ee.type), fe = A(ee.internalFormat, ge, oe, ee.colorSpace), Te = Pe(v);
        U && pe(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Te, fe, v.width, v.height) : pe(v) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Te, fe, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, fe, v.width, v.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function De(E, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, E), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), G(v.depthTexture, 0);
    const Q = n.get(v.depthTexture).__webglTexture, Z = Pe(v);
    if (v.depthTexture.format === kn)
      pe(v) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0);
    else if (v.depthTexture.format === Si)
      pe(v) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0, Z) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function be(E) {
    const v = n.get(E), U = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (U) throw new Error("target.depthTexture not supported in Cube render targets");
      De(v.__webglFramebuffer, E);
    } else if (U) {
      v.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer[Q]), v.__webglDepthbuffer[Q] = r.createRenderbuffer(), Ie(v.__webglDepthbuffer[Q], E, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer = r.createRenderbuffer(), Ie(v.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Xe(E, v, U) {
    const Q = n.get(E);
    v !== void 0 && _e(Q.__webglFramebuffer, E, E.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), U !== void 0 && be(E);
  }
  function N(E) {
    const v = E.texture, U = n.get(E), Q = n.get(v);
    E.addEventListener("dispose", W), E.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = r.createTexture()), Q.__version = v.version, a.memory.textures++);
    const Z = E.isWebGLCubeRenderTarget === !0, ee = E.isWebGLMultipleRenderTargets === !0, ge = m(E) || o;
    if (Z) {
      U.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++)
        if (o && v.mipmaps && v.mipmaps.length > 0) {
          U.__webglFramebuffer[oe] = [];
          for (let fe = 0; fe < v.mipmaps.length; fe++)
            U.__webglFramebuffer[oe][fe] = r.createFramebuffer();
        } else
          U.__webglFramebuffer[oe] = r.createFramebuffer();
    } else {
      if (o && v.mipmaps && v.mipmaps.length > 0) {
        U.__webglFramebuffer = [];
        for (let oe = 0; oe < v.mipmaps.length; oe++)
          U.__webglFramebuffer[oe] = r.createFramebuffer();
      } else
        U.__webglFramebuffer = r.createFramebuffer();
      if (ee)
        if (i.drawBuffers) {
          const oe = E.texture;
          for (let fe = 0, Te = oe.length; fe < Te; fe++) {
            const Oe = n.get(oe[fe]);
            Oe.__webglTexture === void 0 && (Oe.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && E.samples > 0 && pe(E) === !1) {
        const oe = ee ? v : [v];
        U.__webglMultisampledFramebuffer = r.createFramebuffer(), U.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, U.__webglMultisampledFramebuffer);
        for (let fe = 0; fe < oe.length; fe++) {
          const Te = oe[fe];
          U.__webglColorRenderbuffer[fe] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, U.__webglColorRenderbuffer[fe]);
          const Oe = s.convert(Te.format, Te.colorSpace), $ = s.convert(Te.type), $e = A(Te.internalFormat, Oe, $, Te.colorSpace, E.isXRRenderTarget === !0), ze = Pe(E);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, ze, $e, E.width, E.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + fe, r.RENDERBUFFER, U.__webglColorRenderbuffer[fe]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), E.depthBuffer && (U.__webglDepthRenderbuffer = r.createRenderbuffer(), Ie(U.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, Q.__webglTexture), k(r.TEXTURE_CUBE_MAP, v, ge);
      for (let oe = 0; oe < 6; oe++)
        if (o && v.mipmaps && v.mipmaps.length > 0)
          for (let fe = 0; fe < v.mipmaps.length; fe++)
            _e(U.__webglFramebuffer[oe][fe], E, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, fe);
        else
          _e(U.__webglFramebuffer[oe], E, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
      M(v, ge) && x(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ee) {
      const oe = E.texture;
      for (let fe = 0, Te = oe.length; fe < Te; fe++) {
        const Oe = oe[fe], $ = n.get(Oe);
        t.bindTexture(r.TEXTURE_2D, $.__webglTexture), k(r.TEXTURE_2D, Oe, ge), _e(U.__webglFramebuffer, E, Oe, r.COLOR_ATTACHMENT0 + fe, r.TEXTURE_2D, 0), M(Oe, ge) && x(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let oe = r.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (o ? oe = E.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(oe, Q.__webglTexture), k(oe, v, ge), o && v.mipmaps && v.mipmaps.length > 0)
        for (let fe = 0; fe < v.mipmaps.length; fe++)
          _e(U.__webglFramebuffer[fe], E, v, r.COLOR_ATTACHMENT0, oe, fe);
      else
        _e(U.__webglFramebuffer, E, v, r.COLOR_ATTACHMENT0, oe, 0);
      M(v, ge) && x(oe), t.unbindTexture();
    }
    E.depthBuffer && be(E);
  }
  function Mt(E) {
    const v = m(E) || o, U = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let Q = 0, Z = U.length; Q < Z; Q++) {
      const ee = U[Q];
      if (M(ee, v)) {
        const ge = E.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, oe = n.get(ee).__webglTexture;
        t.bindTexture(ge, oe), x(ge), t.unbindTexture();
      }
    }
  }
  function Se(E) {
    if (o && E.samples > 0 && pe(E) === !1) {
      const v = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], U = E.width, Q = E.height;
      let Z = r.COLOR_BUFFER_BIT;
      const ee = [], ge = E.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, oe = n.get(E), fe = E.isWebGLMultipleRenderTargets === !0;
      if (fe)
        for (let Te = 0; Te < v.length; Te++)
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Te, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Te, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, oe.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, oe.__webglFramebuffer);
      for (let Te = 0; Te < v.length; Te++) {
        ee.push(r.COLOR_ATTACHMENT0 + Te), E.depthBuffer && ee.push(ge);
        const Oe = oe.__ignoreDepthValues !== void 0 ? oe.__ignoreDepthValues : !1;
        if (Oe === !1 && (E.depthBuffer && (Z |= r.DEPTH_BUFFER_BIT), E.stencilBuffer && (Z |= r.STENCIL_BUFFER_BIT)), fe && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, oe.__webglColorRenderbuffer[Te]), Oe === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [ge]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [ge])), fe) {
          const $ = n.get(v[Te]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, $, 0);
        }
        r.blitFramebuffer(0, 0, U, Q, 0, 0, U, Q, Z, r.NEAREST), l && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, ee);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), fe)
        for (let Te = 0; Te < v.length; Te++) {
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Te, r.RENDERBUFFER, oe.__webglColorRenderbuffer[Te]);
          const Oe = n.get(v[Te]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, oe.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Te, r.TEXTURE_2D, Oe, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, oe.__webglMultisampledFramebuffer);
    }
  }
  function Pe(E) {
    return Math.min(i.maxSamples, E.samples);
  }
  function pe(E) {
    const v = n.get(E);
    return o && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function tt(E) {
    const v = a.render.frame;
    h.get(E) !== v && (h.set(E, v), E.update());
  }
  function Ne(E, v) {
    const U = E.colorSpace, Q = E.format, Z = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === kr || U !== dt && U !== Ht && (Ze.getTransfer(U) === nt ? o === !1 ? e.has("EXT_sRGB") === !0 && Q === zt ? (E.format = kr, E.minFilter = Ct, E.generateMipmaps = !1) : v = Dc.sRGBToLinear(v) : (Q !== zt || Z !== wn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", U)), v;
  }
  this.allocateTextureUnit = I, this.resetTextureUnits = se, this.setTexture2D = G, this.setTexture2DArray = j, this.setTexture3D = X, this.setTextureCube = V, this.rebindTextures = Xe, this.setupRenderTarget = N, this.updateRenderTargetMipmap = Mt, this.updateMultisampleRenderTarget = Se, this.setupDepthRenderbuffer = be, this.setupFrameBufferTexture = _e, this.useMultisampledRTT = pe;
}
function Am(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = Ht) {
    let o;
    const c = Ze.getTransfer(a);
    if (s === wn) return r.UNSIGNED_BYTE;
    if (s === yc) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === Sc) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === jl) return r.BYTE;
    if (s === ql) return r.SHORT;
    if (s === $r) return r.UNSIGNED_SHORT;
    if (s === Mc) return r.INT;
    if (s === En) return r.UNSIGNED_INT;
    if (s === un) return r.FLOAT;
    if (s === ji)
      return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === Yl) return r.ALPHA;
    if (s === zt) return r.RGBA;
    if (s === Kl) return r.LUMINANCE;
    if (s === $l) return r.LUMINANCE_ALPHA;
    if (s === kn) return r.DEPTH_COMPONENT;
    if (s === Si) return r.DEPTH_STENCIL;
    if (s === kr)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === Zl) return r.RED;
    if (s === Ec) return r.RED_INTEGER;
    if (s === Jl) return r.RG;
    if (s === Tc) return r.RG_INTEGER;
    if (s === bc) return r.RGBA_INTEGER;
    if (s === Ys || s === Ks || s === $s || s === Zs)
      if (c === nt)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === Ys) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Ks) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === $s) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Zs) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === Ys) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Ks) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === $s) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Zs) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Ea || s === Ta || s === ba || s === Aa)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === Ea) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Ta) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === ba) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Aa) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Ac)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === wa || s === Ra)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === wa) return c === nt ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === Ra) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Pa || s === Ca || s === La || s === Ia || s === Da || s === Ua || s === Na || s === Oa || s === Fa || s === Ba || s === za || s === Ha || s === ka || s === Ga)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === Pa) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Ca) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === La) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ia) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Da) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Ua) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Na) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Oa) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Fa) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Ba) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === za) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ha) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ka) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Ga) return c === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Js || s === Va || s === Wa)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === Js) return c === nt ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === Va) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === Wa) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === Ql || s === Xa || s === ja || s === qa)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === Js) return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === Xa) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === ja) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === qa) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Hn ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class wm extends Pt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class zn extends rt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Rm = { type: "move" };
class Sr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new zn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new zn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new zn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n), f = this._getHandJoint(l, _);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, g = 5e-3;
        l.inputState.pinching && d > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Rm)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new zn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Pm extends qn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, d = null, p = null, g = null;
    const _ = t.getContextAttributes();
    let m = null, f = null;
    const M = [], x = [], A = new me();
    let L = null;
    const P = new Pt();
    P.layers.enable(1), P.viewport = new et();
    const w = new Pt();
    w.layers.enable(2), w.viewport = new et();
    const W = [P, w], S = new wm();
    S.layers.enable(1), S.layers.enable(2);
    let T = null, H = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(k) {
      let Y = M[k];
      return Y === void 0 && (Y = new Sr(), M[k] = Y), Y.getTargetRaySpace();
    }, this.getControllerGrip = function(k) {
      let Y = M[k];
      return Y === void 0 && (Y = new Sr(), M[k] = Y), Y.getGripSpace();
    }, this.getHand = function(k) {
      let Y = M[k];
      return Y === void 0 && (Y = new Sr(), M[k] = Y), Y.getHandSpace();
    };
    function q(k) {
      const Y = x.indexOf(k.inputSource);
      if (Y === -1)
        return;
      const ce = M[Y];
      ce !== void 0 && (ce.update(k.inputSource, k.frame, l || a), ce.dispatchEvent({ type: k.type, data: k.inputSource }));
    }
    function se() {
      i.removeEventListener("select", q), i.removeEventListener("selectstart", q), i.removeEventListener("selectend", q), i.removeEventListener("squeeze", q), i.removeEventListener("squeezestart", q), i.removeEventListener("squeezeend", q), i.removeEventListener("end", se), i.removeEventListener("inputsourceschange", I);
      for (let k = 0; k < M.length; k++) {
        const Y = x[k];
        Y !== null && (x[k] = null, M[k].disconnect(Y));
      }
      T = null, H = null, e.setRenderTarget(m), p = null, d = null, u = null, i = null, f = null, le.stop(), n.isPresenting = !1, e.setPixelRatio(L), e.setSize(A.width, A.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(k) {
      s = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(k) {
      o = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(k) {
      l = k;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(k) {
      if (i = k, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", q), i.addEventListener("selectstart", q), i.addEventListener("selectend", q), i.addEventListener("squeeze", q), i.addEventListener("squeezestart", q), i.addEventListener("squeezeend", q), i.addEventListener("end", se), i.addEventListener("inputsourceschange", I), _.xrCompatible !== !0 && await t.makeXRCompatible(), L = e.getPixelRatio(), e.getSize(A), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const Y = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(i, t, Y), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), f = new Wn(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: zt,
              type: wn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let Y = null, ce = null, ve = null;
          _.depth && (ve = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Y = _.stencil ? Si : kn, ce = _.stencil ? Hn : En);
          const _e = {
            colorFormat: t.RGBA8,
            depthFormat: ve,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(_e), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), f = new Wn(
            d.textureWidth,
            d.textureHeight,
            {
              format: zt,
              type: wn,
              depthTexture: new Vc(d.textureWidth, d.textureHeight, ce, void 0, void 0, void 0, void 0, void 0, void 0, Y),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const Ie = e.properties.get(f);
          Ie.__ignoreDepthValues = d.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), le.setContext(i), le.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function I(k) {
      for (let Y = 0; Y < k.removed.length; Y++) {
        const ce = k.removed[Y], ve = x.indexOf(ce);
        ve >= 0 && (x[ve] = null, M[ve].disconnect(ce));
      }
      for (let Y = 0; Y < k.added.length; Y++) {
        const ce = k.added[Y];
        let ve = x.indexOf(ce);
        if (ve === -1) {
          for (let Ie = 0; Ie < M.length; Ie++)
            if (Ie >= x.length) {
              x.push(ce), ve = Ie;
              break;
            } else if (x[Ie] === null) {
              x[Ie] = ce, ve = Ie;
              break;
            }
          if (ve === -1) break;
        }
        const _e = M[ve];
        _e && _e.connect(ce);
      }
    }
    const B = new R(), G = new R();
    function j(k, Y, ce) {
      B.setFromMatrixPosition(Y.matrixWorld), G.setFromMatrixPosition(ce.matrixWorld);
      const ve = B.distanceTo(G), _e = Y.projectionMatrix.elements, Ie = ce.projectionMatrix.elements, De = _e[14] / (_e[10] - 1), be = _e[14] / (_e[10] + 1), Xe = (_e[9] + 1) / _e[5], N = (_e[9] - 1) / _e[5], Mt = (_e[8] - 1) / _e[0], Se = (Ie[8] + 1) / Ie[0], Pe = De * Mt, pe = De * Se, tt = ve / (-Mt + Se), Ne = tt * -Mt;
      Y.matrixWorld.decompose(k.position, k.quaternion, k.scale), k.translateX(Ne), k.translateZ(tt), k.matrixWorld.compose(k.position, k.quaternion, k.scale), k.matrixWorldInverse.copy(k.matrixWorld).invert();
      const E = De + tt, v = be + tt, U = Pe - Ne, Q = pe + (ve - Ne), Z = Xe * be / v * E, ee = N * be / v * E;
      k.projectionMatrix.makePerspective(U, Q, Z, ee, E, v), k.projectionMatrixInverse.copy(k.projectionMatrix).invert();
    }
    function X(k, Y) {
      Y === null ? k.matrixWorld.copy(k.matrix) : k.matrixWorld.multiplyMatrices(Y.matrixWorld, k.matrix), k.matrixWorldInverse.copy(k.matrixWorld).invert();
    }
    this.updateCamera = function(k) {
      if (i === null) return;
      S.near = w.near = P.near = k.near, S.far = w.far = P.far = k.far, (T !== S.near || H !== S.far) && (i.updateRenderState({
        depthNear: S.near,
        depthFar: S.far
      }), T = S.near, H = S.far);
      const Y = k.parent, ce = S.cameras;
      X(S, Y);
      for (let ve = 0; ve < ce.length; ve++)
        X(ce[ve], Y);
      ce.length === 2 ? j(S, P, w) : S.projectionMatrix.copy(P.projectionMatrix), V(k, S, Y);
    };
    function V(k, Y, ce) {
      ce === null ? k.matrix.copy(Y.matrixWorld) : (k.matrix.copy(ce.matrixWorld), k.matrix.invert(), k.matrix.multiply(Y.matrixWorld)), k.matrix.decompose(k.position, k.quaternion, k.scale), k.updateMatrixWorld(!0), k.projectionMatrix.copy(Y.projectionMatrix), k.projectionMatrixInverse.copy(Y.projectionMatrixInverse), k.isPerspectiveCamera && (k.fov = Ti * 2 * Math.atan(1 / k.projectionMatrix.elements[5]), k.zoom = 1);
    }
    this.getCamera = function() {
      return S;
    }, this.getFoveation = function() {
      if (!(d === null && p === null))
        return c;
    }, this.setFoveation = function(k) {
      c = k, d !== null && (d.fixedFoveation = k), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = k);
    };
    let K = null;
    function te(k, Y) {
      if (h = Y.getViewerPose(l || a), g = Y, h !== null) {
        const ce = h.views;
        p !== null && (e.setRenderTargetFramebuffer(f, p.framebuffer), e.setRenderTarget(f));
        let ve = !1;
        ce.length !== S.cameras.length && (S.cameras.length = 0, ve = !0);
        for (let _e = 0; _e < ce.length; _e++) {
          const Ie = ce[_e];
          let De = null;
          if (p !== null)
            De = p.getViewport(Ie);
          else {
            const Xe = u.getViewSubImage(d, Ie);
            De = Xe.viewport, _e === 0 && (e.setRenderTargetTextures(
              f,
              Xe.colorTexture,
              d.ignoreDepthValues ? void 0 : Xe.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let be = W[_e];
          be === void 0 && (be = new Pt(), be.layers.enable(_e), be.viewport = new et(), W[_e] = be), be.matrix.fromArray(Ie.transform.matrix), be.matrix.decompose(be.position, be.quaternion, be.scale), be.projectionMatrix.fromArray(Ie.projectionMatrix), be.projectionMatrixInverse.copy(be.projectionMatrix).invert(), be.viewport.set(De.x, De.y, De.width, De.height), _e === 0 && (S.matrix.copy(be.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), ve === !0 && S.cameras.push(be);
        }
      }
      for (let ce = 0; ce < M.length; ce++) {
        const ve = x[ce], _e = M[ce];
        ve !== null && _e !== void 0 && _e.update(ve, Y, l || a);
      }
      K && K(k, Y), Y.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Y }), g = null;
    }
    const le = new Gc();
    le.setAnimationLoop(te), this.setAnimationLoop = function(k) {
      K = k;
    }, this.dispose = function() {
    };
  }
}
function Cm(r, e) {
  function t(m, f) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, zc(r)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, M, x, A) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(m, f) : f.isMeshToonMaterial ? (s(m, f), u(m, f)) : f.isMeshPhongMaterial ? (s(m, f), h(m, f)) : f.isMeshStandardMaterial ? (s(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, A)) : f.isMeshMatcapMaterial ? (s(m, f), g(m, f)) : f.isMeshDepthMaterial ? s(m, f) : f.isMeshDistanceMaterial ? (s(m, f), _(m, f)) : f.isMeshNormalMaterial ? s(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? c(m, f, M, x) : f.isSpriteMaterial ? l(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Lt && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Lt && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const M = e.get(f).envMap;
    if (M && (m.envMap.value = M, m.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap) {
      m.lightMap.value = f.lightMap;
      const x = r._useLegacyLights === !0 ? Math.PI : 1;
      m.lightMapIntensity.value = f.lightMapIntensity * x, t(f.lightMap, m.lightMapTransform);
    }
    f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function o(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function c(m, f, M, x) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * M, m.scale.value = x * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function l(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function h(m, f) {
    m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function d(m, f) {
    m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), e.get(f).envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function p(m, f, M) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Lt && m.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = M.texture, m.transmissionSamplerSize.value.set(M.width, M.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function _(m, f) {
    const M = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(M.matrixWorld), m.nearDistance.value = M.shadow.camera.near, m.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Lm(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(M, x) {
    const A = x.program;
    n.uniformBlockBinding(M, A);
  }
  function l(M, x) {
    let A = i[M.id];
    A === void 0 && (g(M), A = h(M), i[M.id] = A, M.addEventListener("dispose", m));
    const L = x.program;
    n.updateUBOMapping(M, L);
    const P = e.render.frame;
    s[M.id] !== P && (d(M), s[M.id] = P);
  }
  function h(M) {
    const x = u();
    M.__bindingPointIndex = x;
    const A = r.createBuffer(), L = M.__size, P = M.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, A), r.bufferData(r.UNIFORM_BUFFER, L, P), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, x, A), A;
  }
  function u() {
    for (let M = 0; M < o; M++)
      if (a.indexOf(M) === -1)
        return a.push(M), M;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(M) {
    const x = i[M.id], A = M.uniforms, L = M.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, x);
    for (let P = 0, w = A.length; P < w; P++) {
      const W = Array.isArray(A[P]) ? A[P] : [A[P]];
      for (let S = 0, T = W.length; S < T; S++) {
        const H = W[S];
        if (p(H, P, S, L) === !0) {
          const q = H.__offset, se = Array.isArray(H.value) ? H.value : [H.value];
          let I = 0;
          for (let B = 0; B < se.length; B++) {
            const G = se[B], j = _(G);
            typeof G == "number" || typeof G == "boolean" ? (H.__data[0] = G, r.bufferSubData(r.UNIFORM_BUFFER, q + I, H.__data)) : G.isMatrix3 ? (H.__data[0] = G.elements[0], H.__data[1] = G.elements[1], H.__data[2] = G.elements[2], H.__data[3] = 0, H.__data[4] = G.elements[3], H.__data[5] = G.elements[4], H.__data[6] = G.elements[5], H.__data[7] = 0, H.__data[8] = G.elements[6], H.__data[9] = G.elements[7], H.__data[10] = G.elements[8], H.__data[11] = 0) : (G.toArray(H.__data, I), I += j.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, q, H.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function p(M, x, A, L) {
    const P = M.value, w = x + "_" + A;
    if (L[w] === void 0)
      return typeof P == "number" || typeof P == "boolean" ? L[w] = P : L[w] = P.clone(), !0;
    {
      const W = L[w];
      if (typeof P == "number" || typeof P == "boolean") {
        if (W !== P)
          return L[w] = P, !0;
      } else if (W.equals(P) === !1)
        return W.copy(P), !0;
    }
    return !1;
  }
  function g(M) {
    const x = M.uniforms;
    let A = 0;
    const L = 16;
    for (let w = 0, W = x.length; w < W; w++) {
      const S = Array.isArray(x[w]) ? x[w] : [x[w]];
      for (let T = 0, H = S.length; T < H; T++) {
        const q = S[T], se = Array.isArray(q.value) ? q.value : [q.value];
        for (let I = 0, B = se.length; I < B; I++) {
          const G = se[I], j = _(G), X = A % L;
          X !== 0 && L - X < j.boundary && (A += L - X), q.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = A, A += j.storage;
        }
      }
    }
    const P = A % L;
    return P > 0 && (A += L - P), M.__size = A, M.__cache = {}, this;
  }
  function _(M) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof M == "number" || typeof M == "boolean" ? (x.boundary = 4, x.storage = 4) : M.isVector2 ? (x.boundary = 8, x.storage = 8) : M.isVector3 || M.isColor ? (x.boundary = 16, x.storage = 12) : M.isVector4 ? (x.boundary = 16, x.storage = 16) : M.isMatrix3 ? (x.boundary = 48, x.storage = 48) : M.isMatrix4 ? (x.boundary = 64, x.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M), x;
  }
  function m(M) {
    const x = M.target;
    x.removeEventListener("dispose", m);
    const A = a.indexOf(x.__bindingPointIndex);
    a.splice(A, 1), r.deleteBuffer(i[x.id]), delete i[x.id], delete s[x.id];
  }
  function f() {
    for (const M in i)
      r.deleteBuffer(i[M]);
    a = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: f
  };
}
class Kc {
  constructor(e = {}) {
    const {
      canvas: t = Ah(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = a;
    const p = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, m = null;
    const f = [], M = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = it, this._useLegacyLights = !1, this.toneMapping = An, this.toneMappingExposure = 1;
    const x = this;
    let A = !1, L = 0, P = 0, w = null, W = -1, S = null;
    const T = new et(), H = new et();
    let q = null;
    const se = new Ae(0);
    let I = 0, B = t.width, G = t.height, j = 1, X = null, V = null;
    const K = new et(0, 0, B, G), te = new et(0, 0, B, G);
    let le = !1;
    const k = new ea();
    let Y = !1, ce = !1, ve = null;
    const _e = new We(), Ie = new me(), De = new R(), be = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Xe() {
      return w === null ? j : 1;
    }
    let N = n;
    function Mt(y, D) {
      for (let F = 0; F < y.length; F++) {
        const z = y[F], O = t.getContext(z, D);
        if (O !== null) return O;
      }
      return null;
    }
    try {
      const y = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Kr}`), t.addEventListener("webglcontextlost", J, !1), t.addEventListener("webglcontextrestored", C, !1), t.addEventListener("webglcontextcreationerror", ie, !1), N === null) {
        const D = ["webgl2", "webgl", "experimental-webgl"];
        if (x.isWebGL1Renderer === !0 && D.shift(), N = Mt(D, y), N === null)
          throw Mt(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && N instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), N.getShaderPrecisionFormat === void 0 && (N.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (y) {
      throw console.error("THREE.WebGLRenderer: " + y.message), y;
    }
    let Se, Pe, pe, tt, Ne, E, v, U, Q, Z, ee, ge, oe, fe, Te, Oe, $, $e, ze, Ce, ye, he, b, ne;
    function xe() {
      Se = new kf(N), Pe = new Nf(N, Se, e), Se.init(Pe), he = new Am(N, Se, Pe), pe = new Tm(N, Se, Pe), tt = new Wf(N), Ne = new hm(), E = new bm(N, Se, pe, Ne, Pe, he, tt), v = new Ff(x), U = new Hf(x), Q = new Zh(N, Pe), b = new Df(N, Se, Q, Pe), Z = new Gf(N, Q, tt, b), ee = new Yf(N, Z, Q, tt), ze = new qf(N, Pe, E), Oe = new Of(Ne), ge = new lm(x, v, U, Se, Pe, b, Oe), oe = new Cm(x, Ne), fe = new dm(), Te = new xm(Se, Pe), $e = new If(x, v, U, pe, ee, d, c), $ = new Em(x, ee, Pe), ne = new Lm(N, tt, Pe, pe), Ce = new Uf(N, Se, tt, Pe), ye = new Vf(N, Se, tt, Pe), tt.programs = ge.programs, x.capabilities = Pe, x.extensions = Se, x.properties = Ne, x.renderLists = fe, x.shadowMap = $, x.state = pe, x.info = tt;
    }
    xe();
    const de = new Pm(x, N);
    this.xr = de, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const y = Se.get("WEBGL_lose_context");
      y && y.loseContext();
    }, this.forceContextRestore = function() {
      const y = Se.get("WEBGL_lose_context");
      y && y.restoreContext();
    }, this.getPixelRatio = function() {
      return j;
    }, this.setPixelRatio = function(y) {
      y !== void 0 && (j = y, this.setSize(B, G, !1));
    }, this.getSize = function(y) {
      return y.set(B, G);
    }, this.setSize = function(y, D, F = !0) {
      if (de.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      B = y, G = D, t.width = Math.floor(y * j), t.height = Math.floor(D * j), F === !0 && (t.style.width = y + "px", t.style.height = D + "px"), this.setViewport(0, 0, y, D);
    }, this.getDrawingBufferSize = function(y) {
      return y.set(B * j, G * j).floor();
    }, this.setDrawingBufferSize = function(y, D, F) {
      B = y, G = D, j = F, t.width = Math.floor(y * F), t.height = Math.floor(D * F), this.setViewport(0, 0, y, D);
    }, this.getCurrentViewport = function(y) {
      return y.copy(T);
    }, this.getViewport = function(y) {
      return y.copy(K);
    }, this.setViewport = function(y, D, F, z) {
      y.isVector4 ? K.set(y.x, y.y, y.z, y.w) : K.set(y, D, F, z), pe.viewport(T.copy(K).multiplyScalar(j).floor());
    }, this.getScissor = function(y) {
      return y.copy(te);
    }, this.setScissor = function(y, D, F, z) {
      y.isVector4 ? te.set(y.x, y.y, y.z, y.w) : te.set(y, D, F, z), pe.scissor(H.copy(te).multiplyScalar(j).floor());
    }, this.getScissorTest = function() {
      return le;
    }, this.setScissorTest = function(y) {
      pe.setScissorTest(le = y);
    }, this.setOpaqueSort = function(y) {
      X = y;
    }, this.setTransparentSort = function(y) {
      V = y;
    }, this.getClearColor = function(y) {
      return y.copy($e.getClearColor());
    }, this.setClearColor = function() {
      $e.setClearColor.apply($e, arguments);
    }, this.getClearAlpha = function() {
      return $e.getClearAlpha();
    }, this.setClearAlpha = function() {
      $e.setClearAlpha.apply($e, arguments);
    }, this.clear = function(y = !0, D = !0, F = !0) {
      let z = 0;
      if (y) {
        let O = !1;
        if (w !== null) {
          const ue = w.texture.format;
          O = ue === bc || ue === Tc || ue === Ec;
        }
        if (O) {
          const ue = w.texture.type, Me = ue === wn || ue === En || ue === $r || ue === Hn || ue === yc || ue === Sc, Re = $e.getClearColor(), Le = $e.getClearAlpha(), He = Re.r, Ue = Re.g, Fe = Re.b;
          Me ? (p[0] = He, p[1] = Ue, p[2] = Fe, p[3] = Le, N.clearBufferuiv(N.COLOR, 0, p)) : (g[0] = He, g[1] = Ue, g[2] = Fe, g[3] = Le, N.clearBufferiv(N.COLOR, 0, g));
        } else
          z |= N.COLOR_BUFFER_BIT;
      }
      D && (z |= N.DEPTH_BUFFER_BIT), F && (z |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), N.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", J, !1), t.removeEventListener("webglcontextrestored", C, !1), t.removeEventListener("webglcontextcreationerror", ie, !1), fe.dispose(), Te.dispose(), Ne.dispose(), v.dispose(), U.dispose(), ee.dispose(), b.dispose(), ne.dispose(), ge.dispose(), de.dispose(), de.removeEventListener("sessionstart", ct), de.removeEventListener("sessionend", Ke), ve && (ve.dispose(), ve = null), ht.stop();
    };
    function J(y) {
      y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), A = !0;
    }
    function C() {
      console.log("THREE.WebGLRenderer: Context Restored."), A = !1;
      const y = tt.autoReset, D = $.enabled, F = $.autoUpdate, z = $.needsUpdate, O = $.type;
      xe(), tt.autoReset = y, $.enabled = D, $.autoUpdate = F, $.needsUpdate = z, $.type = O;
    }
    function ie(y) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage);
    }
    function ae(y) {
      const D = y.target;
      D.removeEventListener("dispose", ae), we(D);
    }
    function we(y) {
      Ee(y), Ne.remove(y);
    }
    function Ee(y) {
      const D = Ne.get(y).programs;
      D !== void 0 && (D.forEach(function(F) {
        ge.releaseProgram(F);
      }), y.isShaderMaterial && ge.releaseShaderCache(y));
    }
    this.renderBufferDirect = function(y, D, F, z, O, ue) {
      D === null && (D = be);
      const Me = O.isMesh && O.matrixWorld.determinant() < 0, Re = rl(y, D, F, z, O);
      pe.setMaterial(z, Me);
      let Le = F.index, He = 1;
      if (z.wireframe === !0) {
        if (Le = Z.getWireframeAttribute(F), Le === void 0) return;
        He = 2;
      }
      const Ue = F.drawRange, Fe = F.attributes.position;
      let lt = Ue.start * He, It = (Ue.start + Ue.count) * He;
      ue !== null && (lt = Math.max(lt, ue.start * He), It = Math.min(It, (ue.start + ue.count) * He)), Le !== null ? (lt = Math.max(lt, 0), It = Math.min(It, Le.count)) : Fe != null && (lt = Math.max(lt, 0), It = Math.min(It, Fe.count));
      const mt = It - lt;
      if (mt < 0 || mt === 1 / 0) return;
      b.setup(O, z, Re, F, Le);
      let tn, st = Ce;
      if (Le !== null && (tn = Q.get(Le), st = ye, st.setIndex(tn)), O.isMesh)
        z.wireframe === !0 ? (pe.setLineWidth(z.wireframeLinewidth * Xe()), st.setMode(N.LINES)) : st.setMode(N.TRIANGLES);
      else if (O.isLine) {
        let ke = z.linewidth;
        ke === void 0 && (ke = 1), pe.setLineWidth(ke * Xe()), O.isLineSegments ? st.setMode(N.LINES) : O.isLineLoop ? st.setMode(N.LINE_LOOP) : st.setMode(N.LINE_STRIP);
      } else O.isPoints ? st.setMode(N.POINTS) : O.isSprite && st.setMode(N.TRIANGLES);
      if (O.isBatchedMesh)
        st.renderMultiDraw(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount);
      else if (O.isInstancedMesh)
        st.renderInstances(lt, mt, O.count);
      else if (F.isInstancedBufferGeometry) {
        const ke = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, Ws = Math.min(F.instanceCount, ke);
        st.renderInstances(lt, mt, Ws);
      } else
        st.render(lt, mt);
    };
    function je(y, D, F) {
      y.transparent === !0 && y.side === Kt && y.forceSinglePass === !1 ? (y.side = Lt, y.needsUpdate = !0, Qi(y, D, F), y.side = pn, y.needsUpdate = !0, Qi(y, D, F), y.side = Kt) : Qi(y, D, F);
    }
    this.compile = function(y, D, F = null) {
      F === null && (F = y), m = Te.get(F), m.init(), M.push(m), F.traverseVisible(function(O) {
        O.isLight && O.layers.test(D.layers) && (m.pushLight(O), O.castShadow && m.pushShadow(O));
      }), y !== F && y.traverseVisible(function(O) {
        O.isLight && O.layers.test(D.layers) && (m.pushLight(O), O.castShadow && m.pushShadow(O));
      }), m.setupLights(x._useLegacyLights);
      const z = /* @__PURE__ */ new Set();
      return y.traverse(function(O) {
        const ue = O.material;
        if (ue)
          if (Array.isArray(ue))
            for (let Me = 0; Me < ue.length; Me++) {
              const Re = ue[Me];
              je(Re, F, O), z.add(Re);
            }
          else
            je(ue, F, O), z.add(ue);
      }), M.pop(), m = null, z;
    }, this.compileAsync = function(y, D, F = null) {
      const z = this.compile(y, D, F);
      return new Promise((O) => {
        function ue() {
          if (z.forEach(function(Me) {
            Ne.get(Me).currentProgram.isReady() && z.delete(Me);
          }), z.size === 0) {
            O(y);
            return;
          }
          setTimeout(ue, 10);
        }
        Se.get("KHR_parallel_shader_compile") !== null ? ue() : setTimeout(ue, 10);
      });
    };
    let qe = null;
    function at(y) {
      qe && qe(y);
    }
    function ct() {
      ht.stop();
    }
    function Ke() {
      ht.start();
    }
    const ht = new Gc();
    ht.setAnimationLoop(at), typeof self < "u" && ht.setContext(self), this.setAnimationLoop = function(y) {
      qe = y, de.setAnimationLoop(y), y === null ? ht.stop() : ht.start();
    }, de.addEventListener("sessionstart", ct), de.addEventListener("sessionend", Ke), this.render = function(y, D) {
      if (D !== void 0 && D.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (A === !0) return;
      y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), de.enabled === !0 && de.isPresenting === !0 && (de.cameraAutoUpdate === !0 && de.updateCamera(D), D = de.getCamera()), y.isScene === !0 && y.onBeforeRender(x, y, D, w), m = Te.get(y, M.length), m.init(), M.push(m), _e.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), k.setFromProjectionMatrix(_e), ce = this.localClippingEnabled, Y = Oe.init(this.clippingPlanes, ce), _ = fe.get(y, f.length), _.init(), f.push(_), qt(y, D, 0, x.sortObjects), _.finish(), x.sortObjects === !0 && _.sort(X, V), this.info.render.frame++, Y === !0 && Oe.beginShadows();
      const F = m.state.shadowsArray;
      if ($.render(F, y, D), Y === !0 && Oe.endShadows(), this.info.autoReset === !0 && this.info.reset(), $e.render(_, y), m.setupLights(x._useLegacyLights), D.isArrayCamera) {
        const z = D.cameras;
        for (let O = 0, ue = z.length; O < ue; O++) {
          const Me = z[O];
          ha(_, y, Me, Me.viewport);
        }
      } else
        ha(_, y, D);
      w !== null && (E.updateMultisampleRenderTarget(w), E.updateRenderTargetMipmap(w)), y.isScene === !0 && y.onAfterRender(x, y, D), b.resetDefaultState(), W = -1, S = null, M.pop(), M.length > 0 ? m = M[M.length - 1] : m = null, f.pop(), f.length > 0 ? _ = f[f.length - 1] : _ = null;
    };
    function qt(y, D, F, z) {
      if (y.visible === !1) return;
      if (y.layers.test(D.layers)) {
        if (y.isGroup)
          F = y.renderOrder;
        else if (y.isLOD)
          y.autoUpdate === !0 && y.update(D);
        else if (y.isLight)
          m.pushLight(y), y.castShadow && m.pushShadow(y);
        else if (y.isSprite) {
          if (!y.frustumCulled || k.intersectsSprite(y)) {
            z && De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);
            const Me = ee.update(y), Re = y.material;
            Re.visible && _.push(y, Me, Re, F, De.z, null);
          }
        } else if ((y.isMesh || y.isLine || y.isPoints) && (!y.frustumCulled || k.intersectsObject(y))) {
          const Me = ee.update(y), Re = y.material;
          if (z && (y.boundingSphere !== void 0 ? (y.boundingSphere === null && y.computeBoundingSphere(), De.copy(y.boundingSphere.center)) : (Me.boundingSphere === null && Me.computeBoundingSphere(), De.copy(Me.boundingSphere.center)), De.applyMatrix4(y.matrixWorld).applyMatrix4(_e)), Array.isArray(Re)) {
            const Le = Me.groups;
            for (let He = 0, Ue = Le.length; He < Ue; He++) {
              const Fe = Le[He], lt = Re[Fe.materialIndex];
              lt && lt.visible && _.push(y, Me, lt, F, De.z, Fe);
            }
          } else Re.visible && _.push(y, Me, Re, F, De.z, null);
        }
      }
      const ue = y.children;
      for (let Me = 0, Re = ue.length; Me < Re; Me++)
        qt(ue[Me], D, F, z);
    }
    function ha(y, D, F, z) {
      const O = y.opaque, ue = y.transmissive, Me = y.transparent;
      m.setupLightsView(F), Y === !0 && Oe.setGlobalState(x.clippingPlanes, F), ue.length > 0 && sl(O, ue, D, F), z && pe.viewport(T.copy(z)), O.length > 0 && Ji(O, D, F), ue.length > 0 && Ji(ue, D, F), Me.length > 0 && Ji(Me, D, F), pe.buffers.depth.setTest(!0), pe.buffers.depth.setMask(!0), pe.buffers.color.setMask(!0), pe.setPolygonOffset(!1);
    }
    function sl(y, D, F, z) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
        return;
      const ue = Pe.isWebGL2;
      ve === null && (ve = new Wn(1, 1, {
        generateMipmaps: !0,
        type: Se.has("EXT_color_buffer_half_float") ? ji : wn,
        minFilter: Vn,
        samples: ue ? 4 : 0
      })), x.getDrawingBufferSize(Ie), ue ? ve.setSize(Ie.x, Ie.y) : ve.setSize(Fs(Ie.x), Fs(Ie.y));
      const Me = x.getRenderTarget();
      x.setRenderTarget(ve), x.getClearColor(se), I = x.getClearAlpha(), I < 1 && x.setClearColor(16777215, 0.5), x.clear();
      const Re = x.toneMapping;
      x.toneMapping = An, Ji(y, F, z), E.updateMultisampleRenderTarget(ve), E.updateRenderTargetMipmap(ve);
      let Le = !1;
      for (let He = 0, Ue = D.length; He < Ue; He++) {
        const Fe = D[He], lt = Fe.object, It = Fe.geometry, mt = Fe.material, tn = Fe.group;
        if (mt.side === Kt && lt.layers.test(z.layers)) {
          const st = mt.side;
          mt.side = Lt, mt.needsUpdate = !0, ua(lt, F, z, It, mt, tn), mt.side = st, mt.needsUpdate = !0, Le = !0;
        }
      }
      Le === !0 && (E.updateMultisampleRenderTarget(ve), E.updateRenderTargetMipmap(ve)), x.setRenderTarget(Me), x.setClearColor(se, I), x.toneMapping = Re;
    }
    function Ji(y, D, F) {
      const z = D.isScene === !0 ? D.overrideMaterial : null;
      for (let O = 0, ue = y.length; O < ue; O++) {
        const Me = y[O], Re = Me.object, Le = Me.geometry, He = z === null ? Me.material : z, Ue = Me.group;
        Re.layers.test(F.layers) && ua(Re, D, F, Le, He, Ue);
      }
    }
    function ua(y, D, F, z, O, ue) {
      y.onBeforeRender(x, D, F, z, O, ue), y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), O.onBeforeRender(x, D, F, z, y, ue), O.transparent === !0 && O.side === Kt && O.forceSinglePass === !1 ? (O.side = Lt, O.needsUpdate = !0, x.renderBufferDirect(F, D, z, O, y, ue), O.side = pn, O.needsUpdate = !0, x.renderBufferDirect(F, D, z, O, y, ue), O.side = Kt) : x.renderBufferDirect(F, D, z, O, y, ue), y.onAfterRender(x, D, F, z, O, ue);
    }
    function Qi(y, D, F) {
      D.isScene !== !0 && (D = be);
      const z = Ne.get(y), O = m.state.lights, ue = m.state.shadowsArray, Me = O.state.version, Re = ge.getParameters(y, O.state, ue, D, F), Le = ge.getProgramCacheKey(Re);
      let He = z.programs;
      z.environment = y.isMeshStandardMaterial ? D.environment : null, z.fog = D.fog, z.envMap = (y.isMeshStandardMaterial ? U : v).get(y.envMap || z.environment), He === void 0 && (y.addEventListener("dispose", ae), He = /* @__PURE__ */ new Map(), z.programs = He);
      let Ue = He.get(Le);
      if (Ue !== void 0) {
        if (z.currentProgram === Ue && z.lightsStateVersion === Me)
          return fa(y, Re), Ue;
      } else
        Re.uniforms = ge.getUniforms(y), y.onBuild(F, Re, x), y.onBeforeCompile(Re, x), Ue = ge.acquireProgram(Re, Le), He.set(Le, Ue), z.uniforms = Re.uniforms;
      const Fe = z.uniforms;
      return (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Fe.clippingPlanes = Oe.uniform), fa(y, Re), z.needsLights = ol(y), z.lightsStateVersion = Me, z.needsLights && (Fe.ambientLightColor.value = O.state.ambient, Fe.lightProbe.value = O.state.probe, Fe.directionalLights.value = O.state.directional, Fe.directionalLightShadows.value = O.state.directionalShadow, Fe.spotLights.value = O.state.spot, Fe.spotLightShadows.value = O.state.spotShadow, Fe.rectAreaLights.value = O.state.rectArea, Fe.ltc_1.value = O.state.rectAreaLTC1, Fe.ltc_2.value = O.state.rectAreaLTC2, Fe.pointLights.value = O.state.point, Fe.pointLightShadows.value = O.state.pointShadow, Fe.hemisphereLights.value = O.state.hemi, Fe.directionalShadowMap.value = O.state.directionalShadowMap, Fe.directionalShadowMatrix.value = O.state.directionalShadowMatrix, Fe.spotShadowMap.value = O.state.spotShadowMap, Fe.spotLightMatrix.value = O.state.spotLightMatrix, Fe.spotLightMap.value = O.state.spotLightMap, Fe.pointShadowMap.value = O.state.pointShadowMap, Fe.pointShadowMatrix.value = O.state.pointShadowMatrix), z.currentProgram = Ue, z.uniformsList = null, Ue;
    }
    function da(y) {
      if (y.uniformsList === null) {
        const D = y.currentProgram.getUniforms();
        y.uniformsList = Cs.seqWithValue(D.seq, y.uniforms);
      }
      return y.uniformsList;
    }
    function fa(y, D) {
      const F = Ne.get(y);
      F.outputColorSpace = D.outputColorSpace, F.batching = D.batching, F.instancing = D.instancing, F.instancingColor = D.instancingColor, F.skinning = D.skinning, F.morphTargets = D.morphTargets, F.morphNormals = D.morphNormals, F.morphColors = D.morphColors, F.morphTargetsCount = D.morphTargetsCount, F.numClippingPlanes = D.numClippingPlanes, F.numIntersection = D.numClipIntersection, F.vertexAlphas = D.vertexAlphas, F.vertexTangents = D.vertexTangents, F.toneMapping = D.toneMapping;
    }
    function rl(y, D, F, z, O) {
      D.isScene !== !0 && (D = be), E.resetTextureUnits();
      const ue = D.fog, Me = z.isMeshStandardMaterial ? D.environment : null, Re = w === null ? x.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : dt, Le = (z.isMeshStandardMaterial ? U : v).get(z.envMap || Me), He = z.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, Ue = !!F.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Fe = !!F.morphAttributes.position, lt = !!F.morphAttributes.normal, It = !!F.morphAttributes.color;
      let mt = An;
      z.toneMapped && (w === null || w.isXRRenderTarget === !0) && (mt = x.toneMapping);
      const tn = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, st = tn !== void 0 ? tn.length : 0, ke = Ne.get(z), Ws = m.state.lights;
      if (Y === !0 && (ce === !0 || y !== S)) {
        const Nt = y === S && z.id === W;
        Oe.setState(z, y, Nt);
      }
      let ot = !1;
      z.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== Ws.state.version || ke.outputColorSpace !== Re || O.isBatchedMesh && ke.batching === !1 || !O.isBatchedMesh && ke.batching === !0 || O.isInstancedMesh && ke.instancing === !1 || !O.isInstancedMesh && ke.instancing === !0 || O.isSkinnedMesh && ke.skinning === !1 || !O.isSkinnedMesh && ke.skinning === !0 || O.isInstancedMesh && ke.instancingColor === !0 && O.instanceColor === null || O.isInstancedMesh && ke.instancingColor === !1 && O.instanceColor !== null || ke.envMap !== Le || z.fog === !0 && ke.fog !== ue || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== Oe.numPlanes || ke.numIntersection !== Oe.numIntersection) || ke.vertexAlphas !== He || ke.vertexTangents !== Ue || ke.morphTargets !== Fe || ke.morphNormals !== lt || ke.morphColors !== It || ke.toneMapping !== mt || Pe.isWebGL2 === !0 && ke.morphTargetsCount !== st) && (ot = !0) : (ot = !0, ke.__version = z.version);
      let Rn = ke.currentProgram;
      ot === !0 && (Rn = Qi(z, D, O));
      let pa = !1, Ii = !1, Xs = !1;
      const Tt = Rn.getUniforms(), Pn = ke.uniforms;
      if (pe.useProgram(Rn.program) && (pa = !0, Ii = !0, Xs = !0), z.id !== W && (W = z.id, Ii = !0), pa || S !== y) {
        Tt.setValue(N, "projectionMatrix", y.projectionMatrix), Tt.setValue(N, "viewMatrix", y.matrixWorldInverse);
        const Nt = Tt.map.cameraPosition;
        Nt !== void 0 && Nt.setValue(N, De.setFromMatrixPosition(y.matrixWorld)), Pe.logarithmicDepthBuffer && Tt.setValue(
          N,
          "logDepthBufFC",
          2 / (Math.log(y.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && Tt.setValue(N, "isOrthographic", y.isOrthographicCamera === !0), S !== y && (S = y, Ii = !0, Xs = !0);
      }
      if (O.isSkinnedMesh) {
        Tt.setOptional(N, O, "bindMatrix"), Tt.setOptional(N, O, "bindMatrixInverse");
        const Nt = O.skeleton;
        Nt && (Pe.floatVertexTextures ? (Nt.boneTexture === null && Nt.computeBoneTexture(), Tt.setValue(N, "boneTexture", Nt.boneTexture, E)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      O.isBatchedMesh && (Tt.setOptional(N, O, "batchingTexture"), Tt.setValue(N, "batchingTexture", O._matricesTexture, E));
      const js = F.morphAttributes;
      if ((js.position !== void 0 || js.normal !== void 0 || js.color !== void 0 && Pe.isWebGL2 === !0) && ze.update(O, F, Rn), (Ii || ke.receiveShadow !== O.receiveShadow) && (ke.receiveShadow = O.receiveShadow, Tt.setValue(N, "receiveShadow", O.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (Pn.envMap.value = Le, Pn.flipEnvMap.value = Le.isCubeTexture && Le.isRenderTargetTexture === !1 ? -1 : 1), Ii && (Tt.setValue(N, "toneMappingExposure", x.toneMappingExposure), ke.needsLights && al(Pn, Xs), ue && z.fog === !0 && oe.refreshFogUniforms(Pn, ue), oe.refreshMaterialUniforms(Pn, z, j, G, ve), Cs.upload(N, da(ke), Pn, E)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (Cs.upload(N, da(ke), Pn, E), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && Tt.setValue(N, "center", O.center), Tt.setValue(N, "modelViewMatrix", O.modelViewMatrix), Tt.setValue(N, "normalMatrix", O.normalMatrix), Tt.setValue(N, "modelMatrix", O.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Nt = z.uniformsGroups;
        for (let qs = 0, cl = Nt.length; qs < cl; qs++)
          if (Pe.isWebGL2) {
            const ma = Nt[qs];
            ne.update(ma, Rn), ne.bind(ma, Rn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Rn;
    }
    function al(y, D) {
      y.ambientLightColor.needsUpdate = D, y.lightProbe.needsUpdate = D, y.directionalLights.needsUpdate = D, y.directionalLightShadows.needsUpdate = D, y.pointLights.needsUpdate = D, y.pointLightShadows.needsUpdate = D, y.spotLights.needsUpdate = D, y.spotLightShadows.needsUpdate = D, y.rectAreaLights.needsUpdate = D, y.hemisphereLights.needsUpdate = D;
    }
    function ol(y) {
      return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return L;
    }, this.getActiveMipmapLevel = function() {
      return P;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(y, D, F) {
      Ne.get(y.texture).__webglTexture = D, Ne.get(y.depthTexture).__webglTexture = F;
      const z = Ne.get(y);
      z.__hasExternalTextures = !0, z.__hasExternalTextures && (z.__autoAllocateDepthBuffer = F === void 0, z.__autoAllocateDepthBuffer || Se.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(y, D) {
      const F = Ne.get(y);
      F.__webglFramebuffer = D, F.__useDefaultFramebuffer = D === void 0;
    }, this.setRenderTarget = function(y, D = 0, F = 0) {
      w = y, L = D, P = F;
      let z = !0, O = null, ue = !1, Me = !1;
      if (y) {
        const Le = Ne.get(y);
        Le.__useDefaultFramebuffer !== void 0 ? (pe.bindFramebuffer(N.FRAMEBUFFER, null), z = !1) : Le.__webglFramebuffer === void 0 ? E.setupRenderTarget(y) : Le.__hasExternalTextures && E.rebindTextures(y, Ne.get(y.texture).__webglTexture, Ne.get(y.depthTexture).__webglTexture);
        const He = y.texture;
        (He.isData3DTexture || He.isDataArrayTexture || He.isCompressedArrayTexture) && (Me = !0);
        const Ue = Ne.get(y).__webglFramebuffer;
        y.isWebGLCubeRenderTarget ? (Array.isArray(Ue[D]) ? O = Ue[D][F] : O = Ue[D], ue = !0) : Pe.isWebGL2 && y.samples > 0 && E.useMultisampledRTT(y) === !1 ? O = Ne.get(y).__webglMultisampledFramebuffer : Array.isArray(Ue) ? O = Ue[F] : O = Ue, T.copy(y.viewport), H.copy(y.scissor), q = y.scissorTest;
      } else
        T.copy(K).multiplyScalar(j).floor(), H.copy(te).multiplyScalar(j).floor(), q = le;
      if (pe.bindFramebuffer(N.FRAMEBUFFER, O) && Pe.drawBuffers && z && pe.drawBuffers(y, O), pe.viewport(T), pe.scissor(H), pe.setScissorTest(q), ue) {
        const Le = Ne.get(y.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + D, Le.__webglTexture, F);
      } else if (Me) {
        const Le = Ne.get(y.texture), He = D || 0;
        N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, Le.__webglTexture, F || 0, He);
      }
      W = -1;
    }, this.readRenderTargetPixels = function(y, D, F, z, O, ue, Me) {
      if (!(y && y.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Re = Ne.get(y).__webglFramebuffer;
      if (y.isWebGLCubeRenderTarget && Me !== void 0 && (Re = Re[Me]), Re) {
        pe.bindFramebuffer(N.FRAMEBUFFER, Re);
        try {
          const Le = y.texture, He = Le.format, Ue = Le.type;
          if (He !== zt && he.convert(He) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Fe = Ue === ji && (Se.has("EXT_color_buffer_half_float") || Pe.isWebGL2 && Se.has("EXT_color_buffer_float"));
          if (Ue !== wn && he.convert(Ue) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Ue === un && (Pe.isWebGL2 || Se.has("OES_texture_float") || Se.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Fe) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= y.width - z && F >= 0 && F <= y.height - O && N.readPixels(D, F, z, O, he.convert(He), he.convert(Ue), ue);
        } finally {
          const Le = w !== null ? Ne.get(w).__webglFramebuffer : null;
          pe.bindFramebuffer(N.FRAMEBUFFER, Le);
        }
      }
    }, this.copyFramebufferToTexture = function(y, D, F = 0) {
      const z = Math.pow(2, -F), O = Math.floor(D.image.width * z), ue = Math.floor(D.image.height * z);
      E.setTexture2D(D, 0), N.copyTexSubImage2D(N.TEXTURE_2D, F, 0, 0, y.x, y.y, O, ue), pe.unbindTexture();
    }, this.copyTextureToTexture = function(y, D, F, z = 0) {
      const O = D.image.width, ue = D.image.height, Me = he.convert(F.format), Re = he.convert(F.type);
      E.setTexture2D(F, 0), N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, F.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, F.unpackAlignment), D.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, z, y.x, y.y, O, ue, Me, Re, D.image.data) : D.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, z, y.x, y.y, D.mipmaps[0].width, D.mipmaps[0].height, Me, D.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, z, y.x, y.y, Me, Re, D.image), z === 0 && F.generateMipmaps && N.generateMipmap(N.TEXTURE_2D), pe.unbindTexture();
    }, this.copyTextureToTexture3D = function(y, D, F, z, O = 0) {
      if (x.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const ue = y.max.x - y.min.x + 1, Me = y.max.y - y.min.y + 1, Re = y.max.z - y.min.z + 1, Le = he.convert(z.format), He = he.convert(z.type);
      let Ue;
      if (z.isData3DTexture)
        E.setTexture3D(z, 0), Ue = N.TEXTURE_3D;
      else if (z.isDataArrayTexture || z.isCompressedArrayTexture)
        E.setTexture2DArray(z, 0), Ue = N.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, z.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, z.unpackAlignment);
      const Fe = N.getParameter(N.UNPACK_ROW_LENGTH), lt = N.getParameter(N.UNPACK_IMAGE_HEIGHT), It = N.getParameter(N.UNPACK_SKIP_PIXELS), mt = N.getParameter(N.UNPACK_SKIP_ROWS), tn = N.getParameter(N.UNPACK_SKIP_IMAGES), st = F.isCompressedTexture ? F.mipmaps[O] : F.image;
      N.pixelStorei(N.UNPACK_ROW_LENGTH, st.width), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, st.height), N.pixelStorei(N.UNPACK_SKIP_PIXELS, y.min.x), N.pixelStorei(N.UNPACK_SKIP_ROWS, y.min.y), N.pixelStorei(N.UNPACK_SKIP_IMAGES, y.min.z), F.isDataTexture || F.isData3DTexture ? N.texSubImage3D(Ue, O, D.x, D.y, D.z, ue, Me, Re, Le, He, st.data) : F.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), N.compressedTexSubImage3D(Ue, O, D.x, D.y, D.z, ue, Me, Re, Le, st.data)) : N.texSubImage3D(Ue, O, D.x, D.y, D.z, ue, Me, Re, Le, He, st), N.pixelStorei(N.UNPACK_ROW_LENGTH, Fe), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, lt), N.pixelStorei(N.UNPACK_SKIP_PIXELS, It), N.pixelStorei(N.UNPACK_SKIP_ROWS, mt), N.pixelStorei(N.UNPACK_SKIP_IMAGES, tn), O === 0 && z.generateMipmaps && N.generateMipmap(Ue), pe.unbindTexture();
    }, this.initTexture = function(y) {
      y.isCubeTexture ? E.setTextureCube(y, 0) : y.isData3DTexture ? E.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? E.setTexture2DArray(y, 0) : E.setTexture2D(y, 0), pe.unbindTexture();
    }, this.resetState = function() {
      L = 0, P = 0, w = null, pe.reset(), b.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return dn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Zr ? "display-p3" : "srgb", t.unpackColorSpace = Ze.workingColorSpace === Hs ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === it ? Gn : Rc;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Gn ? it : dt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Im extends Kc {
}
Im.prototype.isWebGL1Renderer = !0;
class Dm extends rt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class Um {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Hr, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = Xt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Xt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Xt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const wt = /* @__PURE__ */ new R();
class sa {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      wt.fromBufferAttribute(this, t), wt.applyMatrix4(e), this.setXYZ(t, wt.x, wt.y, wt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      wt.fromBufferAttribute(this, t), wt.applyNormalMatrix(e), this.setXYZ(t, wt.x, wt.y, wt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      wt.fromBufferAttribute(this, t), wt.transformDirection(e), this.setXYZ(t, wt.x, wt.y, wt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), s = Qe(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new Et(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new sa(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const zo = /* @__PURE__ */ new R(), Ho = /* @__PURE__ */ new et(), ko = /* @__PURE__ */ new et(), Nm = /* @__PURE__ */ new R(), Go = /* @__PURE__ */ new We(), Ss = /* @__PURE__ */ new R(), Er = /* @__PURE__ */ new Qt(), Vo = /* @__PURE__ */ new We(), Tr = /* @__PURE__ */ new Ri();
class Om extends xt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Sa, this.bindMatrix = new We(), this.bindMatrixInverse = new We(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new vt()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Ss), this.boundingBox.expandByPoint(Ss);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Qt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Ss), this.boundingSphere.expandByPoint(Ss);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Er.copy(this.boundingSphere), Er.applyMatrix4(i), e.ray.intersectsSphere(Er) !== !1 && (Vo.copy(i).invert(), Tr.copy(e.ray).applyMatrix4(Vo), !(this.boundingBox !== null && Tr.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Tr)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new et(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Sa ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Xl ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Ho.fromBufferAttribute(i.attributes.skinIndex, e), ko.fromBufferAttribute(i.attributes.skinWeight, e), zo.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = ko.getComponent(s);
      if (a !== 0) {
        const o = Ho.getComponent(s);
        Go.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Nm.copy(zo).applyMatrix4(Go), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class $c extends rt {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Fm extends St {
  constructor(e = null, t = 1, n = 1, i, s, a, o, c, l = _t, h = _t, u, d) {
    super(null, a, o, c, l, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Wo = /* @__PURE__ */ new We(), Bm = /* @__PURE__ */ new We();
class ra {
  constructor(e = [], t = []) {
    this.uuid = Xt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new We());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new We();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : Bm;
      Wo.multiplyMatrices(o, t[s]), Wo.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new ra(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Fm(t, e, e, zt, un);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new $c()), this.bones.push(a), this.boneInverses.push(new We().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Wr extends Et {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const fi = /* @__PURE__ */ new We(), Xo = /* @__PURE__ */ new We(), Es = [], jo = /* @__PURE__ */ new vt(), zm = /* @__PURE__ */ new We(), Fi = /* @__PURE__ */ new xt(), Bi = /* @__PURE__ */ new Qt();
class Hm extends xt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Wr(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, zm);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new vt()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, fi), jo.copy(e.boundingBox).applyMatrix4(fi), this.boundingBox.union(jo);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Qt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, fi), Bi.copy(e.boundingSphere).applyMatrix4(fi), this.boundingSphere.union(Bi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Fi.geometry = this.geometry, Fi.material = this.material, Fi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Bi.copy(this.boundingSphere), Bi.applyMatrix4(n), e.ray.intersectsSphere(Bi) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, fi), Xo.multiplyMatrices(n, fi), Fi.matrixWorld = Xo, Fi.raycast(e, Es);
        for (let a = 0, o = Es.length; a < o; a++) {
          const c = Es[a];
          c.instanceId = s, c.object = this, t.push(c);
        }
        Es.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Wr(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Zc extends Zt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ae(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const qo = /* @__PURE__ */ new R(), Yo = /* @__PURE__ */ new R(), Ko = /* @__PURE__ */ new We(), br = /* @__PURE__ */ new Ri(), Ts = /* @__PURE__ */ new Qt();
class aa extends rt {
  constructor(e = new jt(), t = new Zc()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        qo.fromBufferAttribute(t, i - 1), Yo.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += qo.distanceTo(Yo);
      e.setAttribute("lineDistance", new fn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ts.copy(n.boundingSphere), Ts.applyMatrix4(i), Ts.radius += s, e.ray.intersectsSphere(Ts) === !1) return;
    Ko.copy(i).invert(), br.copy(e.ray).applyMatrix4(Ko);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new R(), h = new R(), u = new R(), d = new R(), p = this.isLineSegments ? 2 : 1, g = n.index, m = n.attributes.position;
    if (g !== null) {
      const f = Math.max(0, a.start), M = Math.min(g.count, a.start + a.count);
      for (let x = f, A = M - 1; x < A; x += p) {
        const L = g.getX(x), P = g.getX(x + 1);
        if (l.fromBufferAttribute(m, L), h.fromBufferAttribute(m, P), br.distanceSqToSegment(l, h, d, u) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const W = e.ray.origin.distanceTo(d);
        W < e.near || W > e.far || t.push({
          distance: W,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const f = Math.max(0, a.start), M = Math.min(m.count, a.start + a.count);
      for (let x = f, A = M - 1; x < A; x += p) {
        if (l.fromBufferAttribute(m, x), h.fromBufferAttribute(m, x + 1), br.distanceSqToSegment(l, h, d, u) > c) continue;
        d.applyMatrix4(this.matrixWorld);
        const P = e.ray.origin.distanceTo(d);
        P < e.near || P > e.far || t.push({
          distance: P,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const $o = /* @__PURE__ */ new R(), Zo = /* @__PURE__ */ new R();
class km extends aa {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        $o.fromBufferAttribute(t, i), Zo.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + $o.distanceTo(Zo);
      e.setAttribute("lineDistance", new fn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Gm extends aa {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Jc extends Zt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ae(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Jo = /* @__PURE__ */ new We(), Xr = /* @__PURE__ */ new Ri(), bs = /* @__PURE__ */ new Qt(), As = /* @__PURE__ */ new R();
class Vm extends rt {
  constructor(e = new jt(), t = new Jc()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), bs.copy(n.boundingSphere), bs.applyMatrix4(i), bs.radius += s, e.ray.intersectsSphere(bs) === !1) return;
    Jo.copy(i).invert(), Xr.copy(e.ray).applyMatrix4(Jo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start), p = Math.min(l.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++) {
        const m = l.getX(g);
        As.fromBufferAttribute(u, m), Qo(As, m, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(u.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++)
        As.fromBufferAttribute(u, g), Qo(As, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Qo(r, e, t, n, i, s, a) {
  const o = Xr.distanceSqToPoint(r);
  if (o < t) {
    const c = new R();
    Xr.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a
    });
  }
}
class Ki extends Zt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ae(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ae(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Pc, this.normalScale = new me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class mn extends Ki {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new me(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return yt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ae(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ae(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ae(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function ws(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function Wm(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Xm(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function ec(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = r[o + c];
  }
  return i;
}
function Qc(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
      while (s !== void 0);
}
class Zi {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[s + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class jm extends Zi {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Ya,
      endingEnd: Ya
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Ka:
          s = e, o = 2 * t - n;
          break;
        case $a:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Ka:
          a = e, c = 2 * n - t;
          break;
        case $a:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, f = -d * m + 2 * d * _ - d * g, M = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, x = (-1 - p) * m + (1.5 + p) * _ + 0.5 * g, A = p * m - p * _;
    for (let L = 0; L !== o; ++L)
      s[L] = f * a[h + L] + M * a[l + L] + x * a[c + L] + A * a[u + L];
    return s;
  }
}
class qm extends Zi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d)
      s[d] = a[l + d] * u + a[c + d] * h;
    return s;
  }
}
class Ym extends Zi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class en {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = ws(t, this.TimeBufferType), this.values = ws(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: ws(e.times, Array),
        values: ws(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Ym(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new qm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new jm(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case qi:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ei:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Qs:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return qi;
      case this.InterpolantFactoryMethodLinear:
        return Ei;
      case this.InterpolantFactoryMethodSmooth:
        return Qs;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), e = !1;
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), e = !1;
        break;
      }
      a = c;
    }
    if (i !== void 0 && Wm(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Qs, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let c = !1;
      const l = e[o], h = e[o + 1];
      if (l !== h && (o !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const u = o * n, d = u - n, p = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[d + g] || _ !== t[p + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, d = a * n;
          for (let p = 0; p !== n; ++p)
            t[d + p] = t[u + p];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, c = a * n, l = 0; l !== n; ++l)
        t[c + l] = t[o + l];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
en.prototype.TimeBufferType = Float32Array;
en.prototype.ValueBufferType = Float32Array;
en.prototype.DefaultInterpolation = Ei;
class Ci extends en {
}
Ci.prototype.ValueTypeName = "bool";
Ci.prototype.ValueBufferType = Array;
Ci.prototype.DefaultInterpolation = qi;
Ci.prototype.InterpolantFactoryMethodLinear = void 0;
Ci.prototype.InterpolantFactoryMethodSmooth = void 0;
class el extends en {
}
el.prototype.ValueTypeName = "color";
class Ai extends en {
}
Ai.prototype.ValueTypeName = "number";
class Km extends Zi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let h = l + o; l !== h; l += 4)
      Jt.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class jn extends en {
  InterpolantFactoryMethodLinear(e) {
    return new Km(this.times, this.values, this.getValueSize(), e);
  }
}
jn.prototype.ValueTypeName = "quaternion";
jn.prototype.DefaultInterpolation = Ei;
jn.prototype.InterpolantFactoryMethodSmooth = void 0;
class Li extends en {
}
Li.prototype.ValueTypeName = "string";
Li.prototype.ValueBufferType = Array;
Li.prototype.DefaultInterpolation = qi;
Li.prototype.InterpolantFactoryMethodLinear = void 0;
Li.prototype.InterpolantFactoryMethodSmooth = void 0;
class wi extends en {
}
wi.prototype.ValueTypeName = "vector";
class $m {
  constructor(e, t = -1, n, i = eh) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Xt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(Jm(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(en.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let c = [], l = [];
      c.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), l.push(0, 1, 0);
      const h = Xm(c);
      c = ec(c, 1, h), l = ec(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(
        new Ai(
          ".morphTargetInfluences[" + t[o].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = l.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, p, g, _) {
      if (p.length !== 0) {
        const m = [], f = [];
        Qc(p, m, f, g), m.length !== 0 && _.push(new u(d, m, f));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let _ = 0; _ < d[g].morphTargets.length; _++)
                p[d[g].morphTargets[_]] = -1;
          for (const _ in p) {
            const m = [], f = [];
            for (let M = 0; M !== d[g].morphTargets.length; ++M) {
              const x = d[g];
              m.push(x.time), f.push(x.morphTarget === _ ? 1 : 0);
            }
            i.push(new Ai(".morphTargetInfluence[" + _ + "]", m, f));
          }
          c = p.length * a;
        } else {
          const p = ".bones[" + t[u].name + "]";
          n(
            wi,
            p + ".position",
            d,
            "pos",
            i
          ), n(
            jn,
            p + ".quaternion",
            d,
            "rot",
            i
          ), n(
            wi,
            p + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Zm(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Ai;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return wi;
    case "color":
      return el;
    case "quaternion":
      return jn;
    case "bool":
    case "boolean":
      return Ci;
    case "string":
      return Li;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Jm(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Zm(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    Qc(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Tn = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Qm {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const p = l[u], g = l[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return g;
      }
      return null;
    };
  }
}
const eg = /* @__PURE__ */ new Qm();
class Yn {
  constructor(e) {
    this.manager = e !== void 0 ? e : eg, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Yn.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const cn = {};
class tg extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Bs extends Yn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Tn.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (cn[e] !== void 0) {
      cn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    cn[e] = [], cn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = cn[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), p = d ? parseInt(d) : 0, g = p !== 0;
        let _ = 0;
        const m = new ReadableStream({
          start(f) {
            M();
            function M() {
              u.read().then(({ done: x, value: A }) => {
                if (x)
                  f.close();
                else {
                  _ += A.byteLength;
                  const L = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: p });
                  for (let P = 0, w = h.length; P < w; P++) {
                    const W = h[P];
                    W.onProgress && W.onProgress(L);
                  }
                  f.enqueue(A), M();
                }
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new tg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return l.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((l) => {
      Tn.add(e, l);
      const h = cn[e];
      delete cn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(l);
      }
    }).catch((l) => {
      const h = cn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete cn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onError && p.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class ng extends Yn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Tn.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = Yi("img");
    function c() {
      h(), Tn.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class ig extends Yn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new St(), a = new ng(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class Vs extends rt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ae(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const Ar = /* @__PURE__ */ new We(), tc = /* @__PURE__ */ new R(), nc = /* @__PURE__ */ new R();
class oa {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new me(512, 512), this.map = null, this.mapPass = null, this.matrix = new We(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ea(), this._frameExtents = new me(1, 1), this._viewportCount = 1, this._viewports = [
      new et(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    tc.setFromMatrixPosition(e.matrixWorld), t.position.copy(tc), nc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(nc), t.updateMatrixWorld(), Ar.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ar), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Ar);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class sg extends oa {
  constructor() {
    super(new Pt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Ti * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class rg extends Vs {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new sg();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const ic = /* @__PURE__ */ new We(), zi = /* @__PURE__ */ new R(), wr = /* @__PURE__ */ new R();
class ag extends oa {
  constructor() {
    super(new Pt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new me(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new et(2, 1, 1, 1),
      // negative X
      new et(0, 1, 1, 1),
      // positive Z
      new et(3, 1, 1, 1),
      // negative Z
      new et(1, 1, 1, 1),
      // positive Y
      new et(3, 0, 1, 1),
      // negative Y
      new et(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), zi.setFromMatrixPosition(e.matrixWorld), n.position.copy(zi), wr.copy(n.position), wr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(wr), n.updateMatrixWorld(), i.makeTranslation(-zi.x, -zi.y, -zi.z), ic.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ic);
  }
}
class og extends Vs {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new ag();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class cg extends oa {
  constructor() {
    super(new na(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class tl extends Vs {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt(), this.shadow = new cg();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class lg extends Vs {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Xi {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class hg extends Yn {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Tn.get(e);
    if (a !== void 0) {
      if (s.manager.itemStart(e), a.then) {
        a.then((l) => {
          t && t(l), s.manager.itemEnd(e);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const c = fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return Tn.add(e, l), t && t(l), s.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), Tn.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    Tn.add(e, c), s.manager.itemStart(e);
  }
}
const ca = "\\[\\]\\.:\\/", ug = new RegExp("[" + ca + "]", "g"), la = "[^" + ca + "]", dg = "[^" + ca.replace("\\.", "") + "]", fg = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", la), pg = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", dg), mg = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", la), gg = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", la), _g = new RegExp(
  "^" + fg + pg + mg + gg + "$"
), xg = ["material", "materials", "bones", "map"];
class vg {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Je.parseTrackName(t), this.node = Je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Je.Composite(e, t, n) : new Je(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(ug, "");
  }
  static parseTrackName(e) {
    const t = _g.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      xg.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const c = n(o.children);
          if (c) return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Je.Composite = vg;
Je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Je.prototype.GetterByBindingType = [
  Je.prototype._getValue_direct,
  Je.prototype._getValue_array,
  Je.prototype._getValue_arrayElement,
  Je.prototype._getValue_toArray
];
Je.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Je.prototype._setValue_direct,
    Je.prototype._setValue_direct_setNeedsUpdate,
    Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Je.prototype._setValue_array,
    Je.prototype._setValue_array_setNeedsUpdate,
    Je.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Je.prototype._setValue_arrayElement,
    Je.prototype._setValue_arrayElement_setNeedsUpdate,
    Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Je.prototype._setValue_fromArray,
    Je.prototype._setValue_fromArray_setNeedsUpdate,
    Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Rr {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Ri(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Qr(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return jr(e, this, n, t), n.sort(sc), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      jr(e[i], this, n, t);
    return n.sort(sc), n;
  }
}
function sc(r, e) {
  return r.distance - e.distance;
}
function jr(r, e, t, n) {
  if (r.layers.test(e.layers) && r.raycast(e, t), n === !0) {
    const i = r.children;
    for (let s = 0, a = i.length; s < a; s++)
      jr(i[s], e, t, !0);
  }
}
class rc {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(yt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ac = /* @__PURE__ */ new me();
class Mg {
  constructor(e = new me(1 / 0, 1 / 0), t = new me(-1 / 0, -1 / 0)) {
    this.isBox2 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = ac.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, ac).distanceTo(e);
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Kr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Kr);
const oc = { type: "change" }, Pr = { type: "start" }, cc = { type: "end" }, Rs = new Ri(), lc = new hn(), yg = Math.cos(70 * Lc.DEG2RAD);
class Sg extends qn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Kn.ROTATE, MIDDLE: Kn.DOLLY, RIGHT: Kn.PAN }, this.touches = { ONE: $n.ROTATE, TWO: $n.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(b) {
      b.addEventListener("keydown", Te), this._domElementKeyEvents = b;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", Te), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(oc), n.update(), s = i.NONE;
    }, this.update = function() {
      const b = new R(), ne = new Jt().setFromUnitVectors(e.up, new R(0, 1, 0)), xe = ne.clone().invert(), de = new R(), J = new Jt(), C = new R(), ie = 2 * Math.PI;
      return function(we = null) {
        const Ee = n.object.position;
        b.copy(Ee).sub(n.target), b.applyQuaternion(ne), o.setFromVector3(b), n.autoRotate && s === i.NONE && q(T(we)), n.enableDamping ? (o.theta += c.theta * n.dampingFactor, o.phi += c.phi * n.dampingFactor) : (o.theta += c.theta, o.phi += c.phi);
        let je = n.minAzimuthAngle, qe = n.maxAzimuthAngle;
        isFinite(je) && isFinite(qe) && (je < -Math.PI ? je += ie : je > Math.PI && (je -= ie), qe < -Math.PI ? qe += ie : qe > Math.PI && (qe -= ie), je <= qe ? o.theta = Math.max(je, Math.min(qe, o.theta)) : o.theta = o.theta > (je + qe) / 2 ? Math.max(je, o.theta) : Math.min(qe, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && P || n.object.isOrthographicCamera ? o.radius = K(o.radius) : o.radius = K(o.radius * l), b.setFromSpherical(o), b.applyQuaternion(xe), Ee.copy(n.target).add(b), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0));
        let at = !1;
        if (n.zoomToCursor && P) {
          let ct = null;
          if (n.object.isPerspectiveCamera) {
            const Ke = b.length();
            ct = K(Ke * l);
            const ht = Ke - ct;
            n.object.position.addScaledVector(A, ht), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const Ke = new R(L.x, L.y, 0);
            Ke.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), at = !0;
            const ht = new R(L.x, L.y, 0);
            ht.unproject(n.object), n.object.position.sub(ht).add(Ke), n.object.updateMatrixWorld(), ct = b.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          ct !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(ct).add(n.object.position) : (Rs.origin.copy(n.object.position), Rs.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(Rs.direction)) < yg ? e.lookAt(n.target) : (lc.setFromNormalAndCoplanarPoint(n.object.up, n.target), Rs.intersectPlane(lc, n.target))));
        } else n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), at = !0);
        return l = 1, P = !1, at || de.distanceToSquared(n.object.position) > a || 8 * (1 - J.dot(n.object.quaternion)) > a || C.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(oc), de.copy(n.object.position), J.copy(n.object.quaternion), C.copy(n.target), !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", $e), n.domElement.removeEventListener("pointerdown", E), n.domElement.removeEventListener("pointercancel", U), n.domElement.removeEventListener("wheel", ee), n.domElement.removeEventListener("pointermove", v), n.domElement.removeEventListener("pointerup", U), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Te), n._domElementKeyEvents = null);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const a = 1e-6, o = new rc(), c = new rc();
    let l = 1;
    const h = new R(), u = new me(), d = new me(), p = new me(), g = new me(), _ = new me(), m = new me(), f = new me(), M = new me(), x = new me(), A = new R(), L = new me();
    let P = !1;
    const w = [], W = {};
    let S = !1;
    function T(b) {
      return b !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * b : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function H(b) {
      const ne = Math.abs(b * 0.01);
      return Math.pow(0.95, n.zoomSpeed * ne);
    }
    function q(b) {
      c.theta -= b;
    }
    function se(b) {
      c.phi -= b;
    }
    const I = function() {
      const b = new R();
      return function(xe, de) {
        b.setFromMatrixColumn(de, 0), b.multiplyScalar(-xe), h.add(b);
      };
    }(), B = function() {
      const b = new R();
      return function(xe, de) {
        n.screenSpacePanning === !0 ? b.setFromMatrixColumn(de, 1) : (b.setFromMatrixColumn(de, 0), b.crossVectors(n.object.up, b)), b.multiplyScalar(xe), h.add(b);
      };
    }(), G = function() {
      const b = new R();
      return function(xe, de) {
        const J = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const C = n.object.position;
          b.copy(C).sub(n.target);
          let ie = b.length();
          ie *= Math.tan(n.object.fov / 2 * Math.PI / 180), I(2 * xe * ie / J.clientHeight, n.object.matrix), B(2 * de * ie / J.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (I(xe * (n.object.right - n.object.left) / n.object.zoom / J.clientWidth, n.object.matrix), B(de * (n.object.top - n.object.bottom) / n.object.zoom / J.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function j(b) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= b : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function X(b) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= b : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function V(b, ne) {
      if (!n.zoomToCursor)
        return;
      P = !0;
      const xe = n.domElement.getBoundingClientRect(), de = b - xe.left, J = ne - xe.top, C = xe.width, ie = xe.height;
      L.x = de / C * 2 - 1, L.y = -(J / ie) * 2 + 1, A.set(L.x, L.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function K(b) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, b));
    }
    function te(b) {
      u.set(b.clientX, b.clientY);
    }
    function le(b) {
      V(b.clientX, b.clientX), f.set(b.clientX, b.clientY);
    }
    function k(b) {
      g.set(b.clientX, b.clientY);
    }
    function Y(b) {
      d.set(b.clientX, b.clientY), p.subVectors(d, u).multiplyScalar(n.rotateSpeed);
      const ne = n.domElement;
      q(2 * Math.PI * p.x / ne.clientHeight), se(2 * Math.PI * p.y / ne.clientHeight), u.copy(d), n.update();
    }
    function ce(b) {
      M.set(b.clientX, b.clientY), x.subVectors(M, f), x.y > 0 ? j(H(x.y)) : x.y < 0 && X(H(x.y)), f.copy(M), n.update();
    }
    function ve(b) {
      _.set(b.clientX, b.clientY), m.subVectors(_, g).multiplyScalar(n.panSpeed), G(m.x, m.y), g.copy(_), n.update();
    }
    function _e(b) {
      V(b.clientX, b.clientY), b.deltaY < 0 ? X(H(b.deltaY)) : b.deltaY > 0 && j(H(b.deltaY)), n.update();
    }
    function Ie(b) {
      let ne = !1;
      switch (b.code) {
        case n.keys.UP:
          b.ctrlKey || b.metaKey || b.shiftKey ? se(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(0, n.keyPanSpeed), ne = !0;
          break;
        case n.keys.BOTTOM:
          b.ctrlKey || b.metaKey || b.shiftKey ? se(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(0, -n.keyPanSpeed), ne = !0;
          break;
        case n.keys.LEFT:
          b.ctrlKey || b.metaKey || b.shiftKey ? q(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(n.keyPanSpeed, 0), ne = !0;
          break;
        case n.keys.RIGHT:
          b.ctrlKey || b.metaKey || b.shiftKey ? q(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : G(-n.keyPanSpeed, 0), ne = !0;
          break;
      }
      ne && (b.preventDefault(), n.update());
    }
    function De(b) {
      if (w.length === 1)
        u.set(b.pageX, b.pageY);
      else {
        const ne = he(b), xe = 0.5 * (b.pageX + ne.x), de = 0.5 * (b.pageY + ne.y);
        u.set(xe, de);
      }
    }
    function be(b) {
      if (w.length === 1)
        g.set(b.pageX, b.pageY);
      else {
        const ne = he(b), xe = 0.5 * (b.pageX + ne.x), de = 0.5 * (b.pageY + ne.y);
        g.set(xe, de);
      }
    }
    function Xe(b) {
      const ne = he(b), xe = b.pageX - ne.x, de = b.pageY - ne.y, J = Math.sqrt(xe * xe + de * de);
      f.set(0, J);
    }
    function N(b) {
      n.enableZoom && Xe(b), n.enablePan && be(b);
    }
    function Mt(b) {
      n.enableZoom && Xe(b), n.enableRotate && De(b);
    }
    function Se(b) {
      if (w.length == 1)
        d.set(b.pageX, b.pageY);
      else {
        const xe = he(b), de = 0.5 * (b.pageX + xe.x), J = 0.5 * (b.pageY + xe.y);
        d.set(de, J);
      }
      p.subVectors(d, u).multiplyScalar(n.rotateSpeed);
      const ne = n.domElement;
      q(2 * Math.PI * p.x / ne.clientHeight), se(2 * Math.PI * p.y / ne.clientHeight), u.copy(d);
    }
    function Pe(b) {
      if (w.length === 1)
        _.set(b.pageX, b.pageY);
      else {
        const ne = he(b), xe = 0.5 * (b.pageX + ne.x), de = 0.5 * (b.pageY + ne.y);
        _.set(xe, de);
      }
      m.subVectors(_, g).multiplyScalar(n.panSpeed), G(m.x, m.y), g.copy(_);
    }
    function pe(b) {
      const ne = he(b), xe = b.pageX - ne.x, de = b.pageY - ne.y, J = Math.sqrt(xe * xe + de * de);
      M.set(0, J), x.set(0, Math.pow(M.y / f.y, n.zoomSpeed)), j(x.y), f.copy(M);
      const C = (b.pageX + ne.x) * 0.5, ie = (b.pageY + ne.y) * 0.5;
      V(C, ie);
    }
    function tt(b) {
      n.enableZoom && pe(b), n.enablePan && Pe(b);
    }
    function Ne(b) {
      n.enableZoom && pe(b), n.enableRotate && Se(b);
    }
    function E(b) {
      n.enabled !== !1 && (w.length === 0 && (n.domElement.setPointerCapture(b.pointerId), n.domElement.addEventListener("pointermove", v), n.domElement.addEventListener("pointerup", U)), ze(b), b.pointerType === "touch" ? Oe(b) : Q(b));
    }
    function v(b) {
      n.enabled !== !1 && (b.pointerType === "touch" ? $(b) : Z(b));
    }
    function U(b) {
      Ce(b), w.length === 0 && (n.domElement.releasePointerCapture(b.pointerId), n.domElement.removeEventListener("pointermove", v), n.domElement.removeEventListener("pointerup", U)), n.dispatchEvent(cc), s = i.NONE;
    }
    function Q(b) {
      let ne;
      switch (b.button) {
        case 0:
          ne = n.mouseButtons.LEFT;
          break;
        case 1:
          ne = n.mouseButtons.MIDDLE;
          break;
        case 2:
          ne = n.mouseButtons.RIGHT;
          break;
        default:
          ne = -1;
      }
      switch (ne) {
        case Kn.DOLLY:
          if (n.enableZoom === !1) return;
          le(b), s = i.DOLLY;
          break;
        case Kn.ROTATE:
          if (b.ctrlKey || b.metaKey || b.shiftKey) {
            if (n.enablePan === !1) return;
            k(b), s = i.PAN;
          } else {
            if (n.enableRotate === !1) return;
            te(b), s = i.ROTATE;
          }
          break;
        case Kn.PAN:
          if (b.ctrlKey || b.metaKey || b.shiftKey) {
            if (n.enableRotate === !1) return;
            te(b), s = i.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            k(b), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Pr);
    }
    function Z(b) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          Y(b);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          ce(b);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          ve(b);
          break;
      }
    }
    function ee(b) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (b.preventDefault(), n.dispatchEvent(Pr), _e(ge(b)), n.dispatchEvent(cc));
    }
    function ge(b) {
      const ne = b.deltaMode, xe = {
        clientX: b.clientX,
        clientY: b.clientY,
        deltaY: b.deltaY
      };
      switch (ne) {
        case 1:
          xe.deltaY *= 16;
          break;
        case 2:
          xe.deltaY *= 100;
          break;
      }
      return b.ctrlKey && !S && (xe.deltaY *= 10), xe;
    }
    function oe(b) {
      b.key === "Control" && (S = !0, document.addEventListener("keyup", fe, { passive: !0, capture: !0 }));
    }
    function fe(b) {
      b.key === "Control" && (S = !1, document.removeEventListener("keyup", fe, { passive: !0, capture: !0 }));
    }
    function Te(b) {
      n.enabled === !1 || n.enablePan === !1 || Ie(b);
    }
    function Oe(b) {
      switch (ye(b), w.length) {
        case 1:
          switch (n.touches.ONE) {
            case $n.ROTATE:
              if (n.enableRotate === !1) return;
              De(b), s = i.TOUCH_ROTATE;
              break;
            case $n.PAN:
              if (n.enablePan === !1) return;
              be(b), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case $n.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              N(b), s = i.TOUCH_DOLLY_PAN;
              break;
            case $n.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              Mt(b), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(Pr);
    }
    function $(b) {
      switch (ye(b), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Se(b), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          Pe(b), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          tt(b), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Ne(b), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function $e(b) {
      n.enabled !== !1 && b.preventDefault();
    }
    function ze(b) {
      w.push(b.pointerId);
    }
    function Ce(b) {
      delete W[b.pointerId];
      for (let ne = 0; ne < w.length; ne++)
        if (w[ne] == b.pointerId) {
          w.splice(ne, 1);
          return;
        }
    }
    function ye(b) {
      let ne = W[b.pointerId];
      ne === void 0 && (ne = new me(), W[b.pointerId] = ne), ne.set(b.pageX, b.pageY);
    }
    function he(b) {
      const ne = b.pointerId === w[0] ? w[1] : w[0];
      return W[ne];
    }
    n.domElement.addEventListener("contextmenu", $e), n.domElement.addEventListener("pointerdown", E), n.domElement.addEventListener("pointercancel", U), n.domElement.addEventListener("wheel", ee, { passive: !1 }), document.addEventListener("keydown", oe, { passive: !0, capture: !0 }), this.update();
  }
}
class Eg {
  constructor(e) {
    Ge(this, "scene");
    Ge(this, "camera");
    Ge(this, "renderer");
    Ge(this, "controls");
    Ge(this, "container");
    Ge(this, "animationId", null);
    this.container = e, this.scene = new Dm(), this.scene.background = new Ae(15790320);
    const t = e.clientWidth / e.clientHeight;
    this.camera = new Pt(50, t, 0.1, 1e3), this.camera.position.set(0, 0.5, 2), this.renderer = new Kc({
      antialias: !0,
      alpha: !1
    }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.outputColorSpace = it, e.appendChild(this.renderer.domElement), this.controls = new Sg(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.05, this.controls.maxPolarAngle = Math.PI / 2, this.controls.minDistance = 0.5, this.controls.maxDistance = 10, this.setupLighting(), window.addEventListener("resize", () => this.resize());
  }
  /**
   * Setup scene lighting
   */
  setupLighting() {
    const e = new lg(16777215, 0.6);
    this.scene.add(e);
    const t = new tl(16777215, 0.8);
    t.position.set(5, 10, 7.5), this.scene.add(t);
  }
  /**
   * Resize handler
   */
  resize() {
    const e = this.container.clientWidth, t = this.container.clientHeight;
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  /**
   * Add object to scene
   */
  addObject(e) {
    this.scene.add(e);
  }
  /**
   * Remove object from scene
   */
  removeObject(e) {
    this.scene.remove(e);
  }
  /**
   * Get intersected object from mouse event
   */
  getIntersectedObject(e) {
    const t = this.renderer.domElement.getBoundingClientRect(), n = (e.clientX - t.left) / t.width * 2 - 1, i = -((e.clientY - t.top) / t.height) * 2 + 1, s = new Rr();
    s.setFromCamera(new me(n, i), this.camera);
    const a = s.intersectObjects(this.scene.children, !0);
    return a.length > 0 ? a[0].object : null;
  }
  /**
   * Get intersection point with a plane (default XY plane Z=0)
   */
  getIntersectionWithPlane(e) {
    const t = this.renderer.domElement.getBoundingClientRect(), n = (e.clientX - t.left) / t.width * 2 - 1, i = -((e.clientY - t.top) / t.height) * 2 + 1, s = new Rr();
    s.setFromCamera(new me(n, i), this.camera);
    const a = new hn(new R(0, 0, 1), 0), o = new R();
    return s.ray.intersectPlane(a, o);
  }
  /**
   * Get intersection point with specific objects
   */
  getIntersectionWithObjects(e, t) {
    const n = this.renderer.domElement.getBoundingClientRect(), i = (e.clientX - n.left) / n.width * 2 - 1, s = -((e.clientY - n.top) / n.height) * 2 + 1, a = new Rr();
    a.setFromCamera(new me(i, s), this.camera);
    const o = a.intersectObjects(t, !0);
    return o.length > 0 ? o[0] : null;
  }
  /**
   * Create a ghost version of a model
   */
  createGhost(e) {
    const t = e.clone(!0);
    return t.traverse((n) => {
      if (n.raycast = () => {
      }, n instanceof xt) {
        const i = Array.isArray(n.material) ? n.material : [n.material];
        n.material = i.map((s) => {
          const a = s.clone();
          return a.transparent = !0, a.opacity = 0.6, a.depthWrite = !1, a.emissive = new Ae(65280), a.emissiveIntensity = 0.3, a.needsUpdate = !0, a;
        }), Array.isArray(n.material) || (n.material = n.material[0]);
      }
    }), t;
  }
  /**
   * Set ghost color for valid/invalid placement feedback
   */
  setGhostValid(e, t) {
    const n = t ? 65280 : 16711680;
    e.traverse((i) => {
      if (i instanceof xt && i.material) {
        const s = i.material;
        s.emissive && (s.emissive.setHex(n), s.emissiveIntensity = 0.4);
      }
    });
  }
  /**
   * Highlight an object (for selection)
   */
  highlightObject(e, t) {
    e.traverse((n) => {
      n instanceof xt && n.material && (Array.isArray(n.material) ? n.material : [n.material]).forEach((s) => {
        s instanceof Ki && (t ? (s.emissive = new Ae(29610), s.emissiveIntensity = 0.3) : (s.emissive = new Ae(0), s.emissiveIntensity = 0), s.needsUpdate = !0);
      });
    });
  }
  /**
   * Set drag valid/invalid visual feedback (green/red highlight)
   */
  setDragValid(e, t) {
    const n = t ? 65280 : 16711680;
    e.traverse((i) => {
      i instanceof xt && i.material && (Array.isArray(i.material) ? i.material : [i.material]).forEach((a) => {
        a instanceof Ki && (a.emissive = new Ae(n), a.emissiveIntensity = 0.4, a.needsUpdate = !0);
      });
    });
  }
  /**
   * Clone an object with unique materials (to prevent shared material issues)
   * This ensures each instance can be highlighted independently
   */
  cloneWithUniqueMaterials(e) {
    const t = e.clone(!0);
    return t.traverse((n) => {
      n instanceof xt && n.material && (Array.isArray(n.material) ? n.material = n.material.map((i) => i.clone()) : n.material = n.material.clone());
    }), t;
  }
  /**
   * Enable or disable orbit controls (for dragging)
   */
  setControlsEnabled(e) {
    this.controls.enabled = e;
  }
  /**
   * Get the canvas element for event binding
   */
  getCanvasElement() {
    return this.renderer.domElement;
  }
  /**
   * Start render loop
   */
  render() {
    const e = () => {
      this.animationId = requestAnimationFrame(e), this.controls.update(), this.renderer.render(this.scene, this.camera);
    };
    e();
  }
  /**
   * Stop render loop
   */
  stop() {
    this.animationId !== null && (cancelAnimationFrame(this.animationId), this.animationId = null);
  }
  /**
   * Get the scene
   */
  getScene() {
    return this.scene;
  }
  /**
   * Set camera to a specific preset view
   */
  setCameraPreset(e) {
    const n = this.controls.target.clone();
    let i = new R();
    switch (e) {
      case "front":
        i.set(0, 0, 1.5);
        break;
      case "side":
        i.set(1.5, 0, 0);
        break;
      case "top":
        i.set(0, 1.5, 0.1);
        break;
    }
    i.add(n), this.camera.position.copy(i), this.camera.lookAt(n), this.controls.update();
  }
  /**
   * Fit camera to view all objects in the list
   */
  fitCameraToSelection(e) {
    if (e.length === 0) return;
    const t = new vt();
    if (e.forEach((h) => t.expandByObject(h)), t.isEmpty()) return;
    const n = t.getSize(new R()), i = t.getCenter(new R()), a = Math.max(n.x, n.y, n.z) / (2 * Math.atan(Math.PI * this.camera.fov / 360)), o = a / this.camera.aspect, c = 1.2 * Math.max(a, o), l = this.camera.position.clone().sub(this.controls.target).normalize().multiplyScalar(c);
    this.camera.position.copy(i).add(l), this.controls.target.copy(i), this.camera.updateProjectionMatrix(), this.controls.update();
  }
  /**
   * Cleanup
   */
  dispose() {
    this.stop(), this.renderer.dispose(), this.controls.dispose(), this.container.contains(this.renderer.domElement) && this.container.removeChild(this.renderer.domElement);
  }
}
function hc(r, e) {
  if (e === th)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === zr || e === wc) {
    let t = r.getIndex();
    if (t === null) {
      const a = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          a.push(c);
        r.setIndex(a), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === zr)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class Tg extends Yn {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Pg(t);
    }), this.register(function(t) {
      return new Bg(t);
    }), this.register(function(t) {
      return new zg(t);
    }), this.register(function(t) {
      return new Hg(t);
    }), this.register(function(t) {
      return new Lg(t);
    }), this.register(function(t) {
      return new Ig(t);
    }), this.register(function(t) {
      return new Dg(t);
    }), this.register(function(t) {
      return new Ug(t);
    }), this.register(function(t) {
      return new Rg(t);
    }), this.register(function(t) {
      return new Ng(t);
    }), this.register(function(t) {
      return new Cg(t);
    }), this.register(function(t) {
      return new Fg(t);
    }), this.register(function(t) {
      return new Og(t);
    }), this.register(function(t) {
      return new Ag(t);
    }), this.register(function(t) {
      return new kg(t);
    }), this.register(function(t) {
      return new Gg(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const l = Xi.extractUrlBase(e);
      a = Xi.resolveURL(l, this.path);
    } else
      a = Xi.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new Bs(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, a, function(h) {
          t(h), s.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const a = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === nl) {
        try {
          a[Ye.KHR_BINARY_GLTF] = new Vg(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(a[Ye.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new n_(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const u = s.extensionsUsed[h], d = s.extensionsRequired || [];
        switch (u) {
          case Ye.KHR_MATERIALS_UNLIT:
            a[u] = new wg();
            break;
          case Ye.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new Wg(s, this.dracoLoader);
            break;
          case Ye.KHR_TEXTURE_TRANSFORM:
            a[u] = new Xg();
            break;
          case Ye.KHR_MESH_QUANTIZATION:
            a[u] = new jg();
            break;
          default:
            d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function bg() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const Ye = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Ag {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new Ae(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], dt);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new tl(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new og(h), l.distance = u;
        break;
      case "spot":
        l = new rg(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Sn(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return n._getNodeRef(t.cache, o, c);
    });
  }
}
class wg {
  constructor() {
    this.name = Ye.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Bn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ae(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], dt), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, it));
    }
    return Promise.all(i);
  }
}
class Rg {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class Pg {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new me(o, o);
    }
    return Promise.all(s);
  }
}
class Cg {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class Lg {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new Ae(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], dt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, it)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class Ig {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class Dg {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ae().setRGB(o[0], o[1], o[2], dt), Promise.all(s);
  }
}
class Ug {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class Ng {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ae().setRGB(o[0], o[1], o[2], dt), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, it)), Promise.all(s);
  }
}
class Og {
  constructor(e) {
    this.parser = e, this.name = Ye.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(s);
  }
}
class Fg {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class Bg {
  constructor(e) {
    this.parser = e, this.name = Ye.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class zg {
  constructor(e) {
    this.parser = e, this.name = Ye.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Hg {
  constructor(e) {
    this.parser = e, this.name = Ye.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class kg {
  constructor(e) {
    this.name = Ye.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(p), h, u, d, i.mode, i.filter), p;
        });
      });
    } else
      return null;
  }
}
class Gg {
  constructor(e) {
    this.name = Ye.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== Ft.TRIANGLES && l.mode !== Ft.TRIANGLE_STRIP && l.mode !== Ft.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((h) => (c[l] = h, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, p = [];
      for (const g of u) {
        const _ = new We(), m = new R(), f = new Jt(), M = new R(1, 1, 1), x = new Hm(g.geometry, g.material, d);
        for (let A = 0; A < d; A++)
          c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, A), c.ROTATION && f.fromBufferAttribute(c.ROTATION, A), c.SCALE && M.fromBufferAttribute(c.SCALE, A), x.setMatrixAt(A, _.compose(m, f, M));
        for (const A in c)
          if (A === "_COLOR_0") {
            const L = c[A];
            x.instanceColor = new Wr(L.array, L.itemSize, L.normalized);
          } else A !== "TRANSLATION" && A !== "ROTATION" && A !== "SCALE" && g.geometry.setAttribute(A, c[A]);
        rt.prototype.copy.call(x, g), this.parser.assignFinalMaterial(x), p.push(x);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const nl = "glTF", Hi = 12, uc = { JSON: 1313821514, BIN: 5130562 };
class Vg {
  constructor(e) {
    this.name = Ye.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Hi), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== nl)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Hi, s = new DataView(e, Hi);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const c = s.getUint32(a, !0);
      if (a += 4, c === uc.JSON) {
        const l = new Uint8Array(e, Hi + a, o);
        this.content = n.decode(l);
      } else if (c === uc.BIN) {
        const l = Hi + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Wg {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ye.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, c = {}, l = {};
    for (const h in a) {
      const u = qr[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = qr[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = xi[d.componentType];
        l[u] = p.name, c[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(p) {
          for (const g in p.attributes) {
            const _ = p.attributes[g], m = c[g];
            m !== void 0 && (_.normalized = m);
          }
          u(p);
        }, o, l, dt, d);
      });
    });
  }
}
class Xg {
  constructor() {
    this.name = Ye.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class jg {
  constructor() {
    this.name = Ye.KHR_MESH_QUANTIZATION;
  }
}
class il extends Zi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, h = i - t, u = (n - t) / h, d = u * u, p = d * u, g = e * l, _ = g - l, m = -2 * p + 3 * d, f = p - d, M = 1 - m, x = f - d + u;
    for (let A = 0; A !== o; A++) {
      const L = a[_ + A + o], P = a[_ + A + c] * h, w = a[g + A + o], W = a[g + A] * h;
      s[A] = M * L + x * P + m * w + f * W;
    }
    return s;
  }
}
const qg = new Jt();
class Yg extends il {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return qg.fromArray(s).normalize().toArray(s), s;
  }
}
const Ft = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, xi = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, dc = {
  9728: _t,
  9729: Ct,
  9984: Br,
  9985: vc,
  9986: Ps,
  9987: Vn
}, fc = {
  33071: Bt,
  33648: Is,
  10497: yi
}, Cr = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, qr = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, yn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Kg = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Ei,
  STEP: qi
}, Lr = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function $g(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new Ki({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: pn
  })), r.DefaultMaterial;
}
function Un(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Sn(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Zg(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [], o = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], u = l[1], d = l[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r;
  });
}
function Jg(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Qg(r) {
  let e;
  const t = r.extensions && r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ir(t.attributes) : e = r.indices + ":" + Ir(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + Ir(r.targets[n]);
  return e;
}
function Ir(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function Yr(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function e_(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const t_ = new We();
class n_ {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new bg(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new ig(this.options.manager) : this.textureLoader = new hg(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Bs(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Un(s, o, i), Sn(o, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (a, o) => {
      const c = this.associations.get(a);
      c != null && this.associations.set(o, c);
      for (const [l, h] of a.children.entries())
        s(h, o.children[l]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(Xi.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = Cr[i.type], o = xi[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new Et(l, a, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], c = Cr[i.type], l = xi[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, m;
      if (p && p !== u) {
        const f = Math.floor(d / p), M = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let x = t.cache.get(M);
        x || (_ = new l(o, f * p, i.count * p / h), x = new Um(_, p / h), t.cache.add(M, x)), m = new sa(x, c, d % p / h, g);
      } else
        o === null ? _ = new l(i.count * c) : _ = new l(o, d, i.count * c), m = new Et(_, c, g);
      if (i.sparse !== void 0) {
        const f = Cr.SCALAR, M = xi[i.sparse.indices.componentType], x = i.sparse.indices.byteOffset || 0, A = i.sparse.values.byteOffset || 0, L = new M(a[1], x, i.sparse.count * f), P = new l(a[2], A, i.sparse.count * c);
        o !== null && (m = new Et(m.array.slice(), m.itemSize, m.normalized));
        for (let w = 0, W = L.length; w < W; w++) {
          const S = L[w];
          if (m.setX(S, P[w * c]), c >= 2 && m.setY(S, P[w * c + 1]), c >= 3 && m.setZ(S, P[w * c + 2]), c >= 4 && m.setW(S, P[w * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = s.textures[e], o = s.images[t], c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const d = (s.samplers || {})[a.sampler] || {};
      return h.magFilter = dc[d.magFilter] || Ct, h.minFilter = dc[d.minFilter] || Vn, h.wrapS = fc[d.wrapS] || yi, h.wrapT = fc[d.wrapT] || yi, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let c = a.uri || "", l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function(u) {
        l = !0;
        const d = new Blob([u], { type: a.mimeType });
        return c = o.createObjectURL(d), c;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(u) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const m = new St(_);
          m.needsUpdate = !0, d(m);
        }), t.load(Xi.resolveURL(u, s.path), g, void 0, p);
      });
    }).then(function(u) {
      return l === !0 && o.revokeObjectURL(c), u.userData.mimeType = a.mimeType || e_(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[Ye.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Ye.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = s.associations.get(a);
          a = s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new Jc(), Zt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new Zc(), Zt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = n.clone(), s && (c.vertexColors = !0), a && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return Ki;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, c = s.extensions || {}, l = [];
    if (c[Ye.KHR_MATERIALS_UNLIT]) {
      const u = i[Ye.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), l.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new Ae(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], dt), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", u.baseColorTexture, it)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = Kt);
    const h = s.alphaMode || Lr.OPAQUE;
    if (h === Lr.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Lr.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== Bn && (l.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new me(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && a !== Bn && (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== Bn) {
      const u = s.emissiveFactor;
      o.emissive = new Ae().setRGB(u[0], u[1], u[2], dt);
    }
    return s.emissiveTexture !== void 0 && a !== Bn && l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, it)), Promise.all(l).then(function() {
      const u = new a(o);
      return s.name && (u.name = s.name), Sn(u, s), t.associations.set(u, { materials: e }), s.extensions && Un(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return pc(c, o, t);
      });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = Qg(l), u = i[h];
      if (u)
        a.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = pc(new jt(), l, t), i[h] = { primitive: l, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const h = a[c].material === void 0 ? $g(this.cache) : this.getDependency("material", a[c].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const _ = h[p], m = a[p];
        let f;
        const M = l[p];
        if (m.mode === Ft.TRIANGLES || m.mode === Ft.TRIANGLE_STRIP || m.mode === Ft.TRIANGLE_FAN || m.mode === void 0)
          f = s.isSkinnedMesh === !0 ? new Om(_, M) : new xt(_, M), f.isSkinnedMesh === !0 && f.normalizeSkinWeights(), m.mode === Ft.TRIANGLE_STRIP ? f.geometry = hc(f.geometry, wc) : m.mode === Ft.TRIANGLE_FAN && (f.geometry = hc(f.geometry, zr));
        else if (m.mode === Ft.LINES)
          f = new km(_, M);
        else if (m.mode === Ft.LINE_STRIP)
          f = new aa(_, M);
        else if (m.mode === Ft.LINE_LOOP)
          f = new Gm(_, M);
        else if (m.mode === Ft.POINTS)
          f = new Vm(_, M);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && Jg(f, s), f.name = t.createUniqueName(s.name || "mesh_" + e), Sn(f, s), m.extensions && Un(i, f, m), t.assignFinalMaterial(f), u.push(f);
      }
      for (let p = 0, g = u.length; p < g; p++)
        t.associations.set(u[p], {
          meshes: e,
          primitives: p
        });
      if (u.length === 1)
        return s.extensions && Un(i, u[0], s), u[0];
      const d = new zn();
      s.extensions && Un(i, d, s), t.associations.set(d, { meshes: e });
      for (let p = 0, g = u.length; p < g; p++)
        d.add(u[p]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Pt(Lc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new na(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Sn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), a = i, o = [], c = [];
      for (let l = 0, h = a.length; l < h; l++) {
        const u = a[l];
        if (u) {
          o.push(u);
          const d = new We();
          s !== null && d.fromArray(s.array, l * 16), c.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new ra(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], c = [], l = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const p = i.channels[u], g = i.samplers[p.sampler], _ = p.target, m = _.node, f = i.parameters !== void 0 ? i.parameters[g.input] : g.input, M = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", f)), c.push(this.getDependency("accessor", M)), l.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(u) {
      const d = u[0], p = u[1], g = u[2], _ = u[3], m = u[4], f = [];
      for (let M = 0, x = d.length; M < x; M++) {
        const A = d[M], L = p[M], P = g[M], w = _[M], W = m[M];
        if (A === void 0) continue;
        A.updateMatrix && A.updateMatrix();
        const S = n._createAnimationTracks(A, L, P, w, W);
        if (S)
          for (let T = 0; T < S.length; T++)
            f.push(S[T]);
      }
      return new $m(s, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            o.morphTargetInfluences[c] = i.weights[c];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let l = 0, h = o.length; l < h; l++)
      a.push(n.getDependency("node", o[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(a),
      c
    ]).then(function(l) {
      const h = l[0], u = l[1], d = l[2];
      d !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, t_);
      });
      for (let p = 0, g = u.length; p < g; p++)
        h.add(u[p]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && o.push(c), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, s.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      o.push(l);
    }), this.nodeCache[e] = Promise.all(o).then(function(l) {
      let h;
      if (s.isBone === !0 ? h = new $c() : l.length > 1 ? h = new zn() : l.length === 1 ? h = l[0] : h = new rt(), h !== l[0])
        for (let u = 0, d = l.length; u < d; u++)
          h.add(l[u]);
      if (s.name && (h.userData.name = s.name, h.name = a), Sn(h, s), s.extensions && Un(n, h, s), s.matrix !== void 0) {
        const u = new We();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new zn();
    n.name && (s.name = i.createUniqueName(n.name)), Sn(s, n), n.extensions && Un(t, s, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let h = 0, u = c.length; h < u; h++)
        s.add(c[h]);
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations)
          (d instanceof Zt || d instanceof St) && u.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return i.associations = l(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, c = [];
    yn[s.path] === yn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
    }) : c.push(o);
    let l;
    switch (yn[s.path]) {
      case yn.weights:
        l = Ai;
        break;
      case yn.rotation:
        l = jn;
        break;
      case yn.position:
      case yn.scale:
        l = wi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Ai;
            break;
          case 2:
          case 3:
          default:
            l = wi;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? Kg[i.interpolation] : Ei, u = this._getArrayFromAccessor(n);
    for (let d = 0, p = c.length; d < p; d++) {
      const g = new l(
        c[d] + "." + yn[s.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Yr(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof jn ? Yg : il;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function i_(r, e, t) {
  const n = e.attributes, i = new vt();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new R(c[0], c[1], c[2]),
        new R(l[0], l[1], l[2])
      ), o.normalized) {
        const h = Yr(xi[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new R(), c = new R();
    for (let l = 0, h = s.length; l < h; l++) {
      const u = s[l];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const _ = Yr(xi[d.componentType]);
            c.multiplyScalar(_);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new Qt();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function pc(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(c) {
      r.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = qr[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return Ze.workingColorSpace !== dt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`), Sn(r, e), i_(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Zg(r, e.targets, t) : r;
  });
}
const Dr = /* @__PURE__ */ new WeakMap();
class s_ extends Yn {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, n, i) {
    const s = new Bs(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, (a) => {
      this.parse(a, t, i);
    }, n, i);
  }
  parse(e, t, n = () => {
  }) {
    this.decodeDracoFile(e, t, null, null, it).catch(n);
  }
  decodeDracoFile(e, t, n, i, s = dt, a = () => {
  }) {
    const o = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: s
    };
    return this.decodeGeometry(e, o).then(t).catch(a);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (Dr.has(e)) {
      const c = Dr.get(e);
      if (c.key === n)
        return c.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const s = this.workerNextTaskID++, a = e.byteLength, o = this._getWorker(s, a).then((c) => (i = c, new Promise((l, h) => {
      i._callbacks[s] = { resolve: l, reject: h }, i.postMessage({ type: "decode", id: s, taskConfig: t, buffer: e }, [e]);
    }))).then((c) => this._createGeometry(c.geometry));
    return o.catch(() => !0).then(() => {
      i && s && this._releaseTask(i, s);
    }), Dr.set(e, {
      key: n,
      promise: o
    }), o;
  }
  _createGeometry(e) {
    const t = new jt();
    e.index && t.setIndex(new Et(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const i = e.attributes[n], s = i.name, a = i.array, o = i.itemSize, c = new Et(a, o);
      s === "color" && (this._assignVertexColorSpace(c, i.vertexColorSpace), c.normalized = !(a instanceof Float32Array)), t.setAttribute(s, c);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== it) return;
    const n = new Ae();
    for (let i = 0, s = e.count; i < s; i++)
      n.fromBufferAttribute(e, i).convertSRGBToLinear(), e.setXYZ(i, n.r, n.g, n.b);
  }
  _loadLibrary(e, t) {
    const n = new Bs(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((i, s) => {
      n.load(e, i, void 0, s);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
      const i = n[0];
      e || (this.decoderConfig.wasmBinary = n[1]);
      const s = r_.toString(), a = [
        "/* draco decoder */",
        i,
        "",
        "/* worker */",
        s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([a]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function(s) {
          const a = s.data;
          switch (a.type) {
            case "decode":
              i._callbacks[a.id].resolve(a);
              break;
            case "error":
              i._callbacks[a.id].reject(a);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + a.type + '"');
          }
        }, this.workerPool.push(i);
      } else
        this.workerPool.sort(function(i, s) {
          return i._taskLoad > s._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[e] = t, n._taskLoad += t, n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
  }
}
function r_() {
  let r, e;
  onmessage = function(a) {
    const o = a.data;
    switch (o.type) {
      case "init":
        r = o.decoderConfig, e = new Promise(function(h) {
          r.onModuleLoaded = function(u) {
            h({ draco: u });
          }, DracoDecoderModule(r);
        });
        break;
      case "decode":
        const c = o.buffer, l = o.taskConfig;
        e.then((h) => {
          const u = h.draco, d = new u.Decoder();
          try {
            const p = t(u, d, new Int8Array(c), l), g = p.attributes.map((_) => _.array.buffer);
            p.index && g.push(p.index.array.buffer), self.postMessage({ type: "decode", id: o.id, geometry: p }, g);
          } catch (p) {
            console.error(p), self.postMessage({ type: "error", id: o.id, error: p.message });
          } finally {
            u.destroy(d);
          }
        });
        break;
    }
  };
  function t(a, o, c, l) {
    const h = l.attributeIDs, u = l.attributeTypes;
    let d, p;
    const g = o.GetEncodedGeometryType(c);
    if (g === a.TRIANGULAR_MESH)
      d = new a.Mesh(), p = o.DecodeArrayToMesh(c, c.byteLength, d);
    else if (g === a.POINT_CLOUD)
      d = new a.PointCloud(), p = o.DecodeArrayToPointCloud(c, c.byteLength, d);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!p.ok() || d.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
    const _ = { index: null, attributes: [] };
    for (const m in h) {
      const f = self[u[m]];
      let M, x;
      if (l.useUniqueIDs)
        x = h[m], M = o.GetAttributeByUniqueId(d, x);
      else {
        if (x = o.GetAttributeId(d, a[h[m]]), x === -1) continue;
        M = o.GetAttribute(d, x);
      }
      const A = i(a, o, d, m, f, M);
      m === "color" && (A.vertexColorSpace = l.vertexColorSpace), _.attributes.push(A);
    }
    return g === a.TRIANGULAR_MESH && (_.index = n(a, o, d)), a.destroy(d), _;
  }
  function n(a, o, c) {
    const h = c.num_faces() * 3, u = h * 4, d = a._malloc(u);
    o.GetTrianglesUInt32Array(c, u, d);
    const p = new Uint32Array(a.HEAPF32.buffer, d, h).slice();
    return a._free(d), { array: p, itemSize: 1 };
  }
  function i(a, o, c, l, h, u) {
    const d = u.num_components(), g = c.num_points() * d, _ = g * h.BYTES_PER_ELEMENT, m = s(a, h), f = a._malloc(_);
    o.GetAttributeDataArrayForAllPoints(c, u, m, _, f);
    const M = new h(a.HEAPF32.buffer, f, g).slice();
    return a._free(f), {
      name: l,
      array: M,
      itemSize: d
    };
  }
  function s(a, o) {
    switch (o) {
      case Float32Array:
        return a.DT_FLOAT32;
      case Int8Array:
        return a.DT_INT8;
      case Int16Array:
        return a.DT_INT16;
      case Int32Array:
        return a.DT_INT32;
      case Uint8Array:
        return a.DT_UINT8;
      case Uint16Array:
        return a.DT_UINT16;
      case Uint32Array:
        return a.DT_UINT32;
    }
  }
}
const ki = {
  grid_spacing_mm: 40,
  grid_offset_mm: 20,
  slot_width_mm: 5,
  slot_height_mm: 15,
  border_margin_mm: 18
};
class a_ {
  constructor() {
    Ge(this, "loader");
    Ge(this, "cache");
    this.loader = new Tg(), this.cache = /* @__PURE__ */ new Map();
    const e = new s_();
    e.setDecoderPath("/path/to/draco/"), this.loader.setDRACOLoader(e);
  }
  /**
   * Load a GLB model from URL
   */
  async loadModel(e) {
    const t = this.cache.get(e);
    return t ? (console.log(`[ModelLoader] Loaded from cache: ${e}`), t) : new Promise((n, i) => {
      this.loader.load(
        e,
        (s) => {
          const a = this.processModel(s);
          this.cache.set(e, a), n(a);
        },
        void 0,
        (s) => {
          console.error(`[ModelLoader] Failed to load ${e}:`, s), i(s);
        }
      );
    });
  }
  /**
   * Process loaded GLTF and extract metadata
   */
  processModel(e) {
    const t = e.scene;
    console.log("[ModelLoader] Processing model, userData:", t.userData);
    const n = new vt().setFromObject(t), i = new R();
    n.getSize(i);
    const s = Math.max(i.x, i.y, i.z);
    s > 10 && (console.warn(`[ModelLoader] Model is huge (${s} units). Assuming mm and scaling by 0.001.`), t.scale.setScalar(1e-3));
    let o = (t.userData || {}).model_type || this.inferModelType(t);
    console.log("[ModelLoader] Inferred model type:", o);
    let c = null;
    return o === "pegboard" ? c = this.extractPegboardMetadata(t) : o === "accessory" && (c = this.extractAccessoryMetadata(t)), {
      scene: t,
      metadata: c,
      modelType: o
    };
  }
  /**
   * Infer model type if not explicitly set
   */
  inferModelType(e) {
    return this.findPegEmptyObjects(e).length > 0 ? "accessory" : (e.userData.panel_width_cm || e.userData.panel_height_cm || console.warn('[ModelLoader] Could not infer model type from metadata, defaulting to "pegboard"'), "pegboard");
  }
  /**
   * Extract pegboard metadata from userData
   */
  extractPegboardMetadata(e) {
    const t = e.userData || {}, n = {
      panel_width_cm: t.panel_width_cm || 36,
      panel_height_cm: t.panel_height_cm || 56,
      grid_spacing_mm: t.grid_spacing_mm || ki.grid_spacing_mm,
      grid_offset_mm: t.grid_offset_mm || ki.grid_offset_mm,
      border_margin_mm: t.border_margin_mm || ki.border_margin_mm,
      slot_width_mm: t.slot_width_mm || ki.slot_width_mm,
      slot_height_mm: t.slot_height_mm || ki.slot_height_mm
    };
    return t.panel_width_cm || console.warn("[ModelLoader] Missing panel_width_cm, using default"), t.panel_height_cm || console.warn("[ModelLoader] Missing panel_height_cm, using default"), n;
  }
  /**
   * Extract accessory metadata from userData and Empty objects
   */
  extractAccessoryMetadata(e) {
    const t = e.userData || {}, i = this.findPegEmptyObjects(e).map((a) => a.position.clone()), s = {
      peg_positions: i,
      peg_count: i.length || t.peg_count || 1,
      snap_mode: t.snap_mode || "single_slot",
      orientation: t.orientation || "front",
      load_capacity_g: t.load_capacity_g || 500
    };
    return i.length === 0 && console.warn("[ModelLoader] No peg Empty objects found in accessory model"), s;
  }
  /**
   * Find all Empty objects with names starting with "peg_"
   */
  findPegEmptyObjects(e) {
    const t = [];
    return e.traverse((n) => {
      n.name.startsWith("peg_") && n.type === "Object3D" && (n.geometry || t.push(n));
    }), t;
  }
  /**
   * Get cached model if available
   */
  getCachedModel(e) {
    return this.cache.get(e) || null;
  }
  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
  }
}
class o_ {
  /**
   * Calculate the nearest snap point for a cursor position
   * 
   * @param cursorPosition Position in 3D space (in meters)
   * @param pegboard Pegboard metadata
   * @param accessory Optional accessory metadata for snap_mode consideration
   * @returns SnapResult with the nearest valid position
   */
  calculateSnapPoint(e, t, n) {
    const i = e.x * 1e3, s = e.y * 1e3, a = t.grid_spacing_mm, o = t.grid_offset_mm, c = Math.round(i / a) * a, l = Math.round(s / a) * a, h = Math.sqrt((i - c) ** 2 + (s - l) ** 2), u = Math.round((i - o) / a) * a + o, d = Math.round((s - o) / a) * a + o, p = Math.sqrt((i - u) ** 2 + (s - d) ** 2);
    let g, _, m;
    h <= p ? (g = c, _ = l, m = "A") : (g = u, _ = d, m = "B");
    const f = t.panel_width_cm * 10, M = t.panel_height_cm * 10, x = t.border_margin_mm, A = g >= x && g <= f - x && _ >= x && _ <= M - x, L = new R(
      g / 1e3,
      _ / 1e3,
      e.z
    );
    return {
      isValid: A,
      snappedPosition: L,
      gridPositions: [{
        x: g,
        y: _,
        grid: m
      }]
    };
  }
  /**
   * Validate if all peg positions align with valid grid points
   * 
   * @param pegPositions Array of peg positions (relative to accessory)
   * @param accessoryWorldPos World position of accessory origin
   * @param pegboard Pegboard metadata
   * @returns true if all pegs align with valid grid positions
   */
  validatePlacement(e, t, n) {
    const i = n.grid_spacing_mm, s = n.grid_offset_mm, a = n.panel_width_cm * 10, o = n.panel_height_cm * 10, c = n.border_margin_mm;
    for (const l of e) {
      const h = (t.x + l.x) * 1e3, u = (t.y + l.y) * 1e3, d = Math.abs(h % i) < 0.5 && Math.abs(u % i) < 0.5, p = Math.abs((h - s) % i) < 0.5 && Math.abs((u - s) % i) < 0.5, g = h >= c && h <= a - c && u >= c && u <= o - c;
      if (!(d || p) || !g)
        return !1;
    }
    return !0;
  }
  /**
   * Get all valid grid positions on the pegboard
   * 
   * @param pegboard Pegboard metadata
   * @returns Array of all valid grid positions
   */
  getGridPositions(e) {
    const t = [], n = e.grid_spacing_mm, i = e.grid_offset_mm, s = e.panel_width_cm * 10, a = e.panel_height_cm * 10, o = e.border_margin_mm;
    for (let c = o; c <= s - o; c += n)
      for (let l = o; l <= a - o; l += n)
        t.push({ x: c, y: l, grid: "A" });
    for (let c = o + i; c <= s - o; c += n)
      for (let l = o + i; l <= a - o; l += n)
        t.push({ x: c, y: l, grid: "B" });
    return t;
  }
}
class f_ {
  constructor() {
    Ge(this, "snappingSystem");
    this.snappingSystem = new o_();
  }
  /**
   * Compute world positions of all peg points based on cursor position
   * 
   * @param accessoryMetadata Metadata of the accessory being placed
   * @param cursorPosition Current cursor position in 3D space
   * @returns Array of world positions for each peg point
   */
  computePegWorldPositions(e, t) {
    return e.peg_positions.map((n) => new R(
      t.x + n.x,
      t.y + n.y,
      t.z + n.z
    ));
  }
  /**
   * Find the nearest valid position for an accessory
   * Tries to snap all peg points to valid grid positions
   * 
   * @param accessoryMetadata Metadata of the accessory
   * @param cursorPosition Initial cursor position
   * @param pegboard Pegboard metadata
   * @returns Valid snapped position or null if no valid position found
   */
  findNearestValidPosition(e, t, n) {
    if (e.peg_count === 1) {
      const l = this.snappingSystem.calculateSnapPoint(
        t,
        n,
        e
      );
      return l.isValid ? l.snappedPosition : null;
    }
    const i = e.peg_positions[0], s = new R(
      t.x + i.x,
      t.y + i.y,
      t.z + i.z
    ), a = this.snappingSystem.calculateSnapPoint(
      s,
      n,
      e
    );
    if (!a.isValid)
      return null;
    const o = new R(
      a.snappedPosition.x - i.x,
      a.snappedPosition.y - i.y,
      t.z
    );
    return this.snappingSystem.validatePlacement(
      e.peg_positions,
      o,
      n
    ) ? o : null;
  }
  /**
   * Check if an accessory would collide with existing accessories
   * Uses bounding box overlap on XY plane
   * 
   * @param newAccessory The accessory being placed
   * @param newPosition Position where it would be placed
   * @param existingAccessories Array of already placed accessories with their objects
   * @returns true if collision detected
   */
  checkCollision(e, t, n) {
    const i = e.clone();
    i.position.copy(t), i.updateMatrixWorld(!0);
    const s = new vt().setFromObject(i), a = {
      minX: s.min.x,
      maxX: s.max.x,
      minY: s.min.y,
      maxY: s.max.y
    };
    for (const o of n) {
      const c = new vt().setFromObject(o), l = {
        minX: c.min.x,
        maxX: c.max.x,
        minY: c.min.y,
        maxY: c.max.y
      }, h = a.minX < l.maxX && a.maxX > l.minX, u = a.minY < l.maxY && a.maxY > l.minY;
      if (h && u)
        return !0;
    }
    return !1;
  }
  /**
   * Check if a position is outside pegboard bounds
   * 
   * @param position Position to check
   * @param pegboard Pegboard metadata
   * @returns true if outside bounds
   */
  isOutsideBounds(e, t) {
    const n = e.x * 1e3, i = e.y * 1e3, s = t.panel_width_cm * 10, a = t.panel_height_cm * 10;
    return n < 0 || n > s || i < 0 || i > a;
  }
}
class c_ {
  constructor() {
    Ge(this, "panels");
    Ge(this, "nextPanelId", 1);
    this.panels = /* @__PURE__ */ new Map();
  }
  /**
   * Add a new panel to the scene
   */
  addPanel(e, t, n) {
    const i = `panel_${this.nextPanelId++}`, s = n ? n.clone() : this.getAdjacentPosition();
    e.position.copy(s);
    const a = {
      id: i,
      object: e,
      metadata: t,
      position: s,
      gridOffset: new me(0, 0),
      // Will be calculated
      attachedAccessories: []
    };
    return this.panels.set(i, a), this.recalculateGlobalGrid(), a;
  }
  /**
   * Check if a potential position is valid (no overlaps)
   * Panel extends RIGHT (positive X) and DOWN (negative Y) from position
   */
  isValidPosition(e, t) {
    const n = t.panel_width_cm * 10 / 1e3, i = t.panel_height_cm * 10 / 1e3, s = 1e-3, a = e.x + s, o = e.x + n - s, c = e.y - i + s, l = e.y - s;
    for (const h of this.panels.values()) {
      const u = h.metadata.panel_width_cm * 10 / 1e3, d = h.metadata.panel_height_cm * 10 / 1e3, p = h.position.x, g = h.position.x + u, _ = h.position.y - d, m = h.position.y;
      if (a < g && o > p && c < m && l > _)
        return !1;
    }
    return !0;
  }
  /**
   * Get list of valid snap positions for a new panel around existing panels
   * Panel extends RIGHT (positive X) and DOWN (negative Y) from position
   */
  getSnapPositions(e) {
    if (this.panels.size === 0)
      return [new R(0, 0, 0)];
    const t = [], n = e.panel_width_cm * 10 / 1e3, i = e.panel_height_cm * 10 / 1e3;
    return this.panels.forEach((s) => {
      const a = s.metadata.panel_width_cm * 10 / 1e3, o = s.metadata.panel_height_cm * 10 / 1e3, c = s.position.x, l = s.position.y;
      t.push(new R(c + a, l, 0)), t.push(new R(c - n, l, 0)), t.push(new R(c, l + i, 0)), t.push(new R(c, l - o, 0));
    }), t.filter((s) => this.isValidPosition(s, e));
  }
  /**
   * Remove a panel and all its accessories
   */
  removePanel(e) {
    const t = this.panels.get(e);
    if (!t)
      return [];
    const n = [...t.attachedAccessories];
    return this.panels.delete(e), this.recalculateGlobalGrid(), n;
  }
  /**
   * Calculate position for next panel (adjacent to existing)
   */
  getAdjacentPosition() {
    if (this.panels.size === 0)
      return new R(0, 0, 0);
    let e = 0, t = 0;
    return this.panels.forEach((n) => {
      const i = n.metadata.panel_width_cm * 10 / 1e3, s = n.position.x + i;
      s > e && (e = s, t = n.position.y);
    }), new R(e, t, 0);
  }
  /**
   * Recalculate the global grid after panel changes
   */
  recalculateGlobalGrid() {
  }
  /**
   * Get the global grid combining all panels
   * Uses IKEA SKÅDIS pattern: 40mm spacing with 20mm offset staggered grid
   * 
   * IMPORTANT: Panels are rotated -90° on X axis, so:
   * - Panel origin is at TOP-LEFT corner
   * - Panel extends RIGHT (positive X) and DOWN (negative Y)
   */
  calculateGlobalGrid() {
    const e = Array.from(this.panels.values());
    if (e.length === 0)
      return {
        panels: [],
        totalWidth: 0,
        totalHeight: 0,
        gridPositions: []
      };
    let t = 1 / 0, n = -1 / 0, i = 1 / 0, s = -1 / 0;
    e.forEach((o) => {
      const c = o.metadata.panel_width_cm * 10 / 1e3, l = o.metadata.panel_height_cm * 10 / 1e3;
      t = Math.min(t, o.position.x), n = Math.max(n, o.position.x + c), i = Math.min(i, o.position.y - l), s = Math.max(s, o.position.y);
    });
    const a = [];
    if (e.forEach((o) => {
      const c = o.metadata.grid_spacing_mm, l = o.metadata.grid_offset_mm, h = o.metadata.border_margin_mm, u = o.metadata.panel_width_cm * 10, d = o.metadata.panel_height_cm * 10, p = o.position.x * 1e3, g = o.position.y * 1e3;
      console.log(`[calculateGlobalGrid] Panel ${o.id}: origin=(${p}mm, ${g}mm), size=${u}x${d}mm, margin=${h}mm, spacing=${c}mm`);
      for (let _ = h; _ <= u - h; _ += c)
        for (let m = h; m <= d - h; m += c) {
          const f = p + _, M = g - m;
          a.push({
            x: f,
            y: M,
            grid: "A"
          });
        }
      for (let _ = h + l; _ <= u - h; _ += c)
        for (let m = h + l; m <= d - h; m += c) {
          const f = p + _, M = g - m;
          a.push({
            x: f,
            y: M,
            grid: "B"
          });
        }
    }), console.log(`[MultiPanelManager] Generated ${a.length} grid positions for ${e.length} panels`), a.length > 0) {
      const o = a.map((l) => l.x), c = a.map((l) => l.y);
      console.log(`[MultiPanelManager] Grid bounds: X=[${Math.min(...o)}mm, ${Math.max(...o)}mm], Y=[${Math.min(...c)}mm, ${Math.max(...c)}mm]`);
    }
    return {
      panels: e,
      totalWidth: (n - t) * 1e3,
      // in mm
      totalHeight: (s - i) * 1e3,
      // in mm
      gridPositions: a
    };
  }
  /**
   * Get the panel at a specific position
   * Panel extends RIGHT (positive X) and DOWN (negative Y) from its origin
   */
  getPanelAtPosition(e) {
    for (const t of this.panels.values()) {
      const n = t.metadata.panel_width_cm * 10 / 1e3, i = t.metadata.panel_height_cm * 10 / 1e3, s = t.position.x, a = t.position.x + n, o = t.position.y - i, c = t.position.y;
      if (e.x >= s && e.x <= a && e.y >= o && e.y <= c)
        return t;
    }
    return null;
  }
  /**
   * Attach an accessory to a panel
   */
  attachAccessoryToPanel(e, t) {
    const n = this.panels.get(e);
    n && !n.attachedAccessories.includes(t) && n.attachedAccessories.push(t);
  }
  /**
   * Detach an accessory from a panel
   */
  detachAccessoryFromPanel(e, t) {
    const n = this.panels.get(e);
    n && (n.attachedAccessories = n.attachedAccessories.filter(
      (i) => i !== t
    ));
  }
  /**
   * Get all panels
   */
  getAllPanels() {
    return Array.from(this.panels.values());
  }
  /**
   * Get panel by ID
   */
  getPanel(e) {
    return this.panels.get(e);
  }
  /**
   * Update a panel's position
   */
  updatePanelPosition(e, t) {
    const n = this.panels.get(e);
    n && (n.position.copy(t), n.object.position.copy(t), this.recalculateGlobalGrid());
  }
  /**
   * Get list of valid snap positions for a panel, excluding a specific panel (for dragging)
   * Panel extends RIGHT (positive X) and DOWN (negative Y) from position
   */
  getSnapPositionsExcluding(e, t) {
    const n = Array.from(this.panels.values()).filter((o) => o.id !== t);
    if (n.length === 0)
      return [new R(0, 0, 0)];
    const i = [], s = e.panel_width_cm * 10 / 1e3, a = e.panel_height_cm * 10 / 1e3;
    return n.forEach((o) => {
      const c = o.metadata.panel_width_cm * 10 / 1e3, l = o.metadata.panel_height_cm * 10 / 1e3, h = o.position.x, u = o.position.y;
      i.push(new R(h + c, u, 0)), i.push(new R(h - s, u, 0)), i.push(new R(h, u + a, 0)), i.push(new R(h, u - l, 0));
    }), i.filter((o) => this.isValidPositionExcluding(o, e, t));
  }
  /**
   * Check if a position is valid, excluding a specific panel (for dragging)
   * Panel extends RIGHT (positive X) and DOWN (negative Y) from position
   */
  isValidPositionExcluding(e, t, n) {
    const i = t.panel_width_cm * 10 / 1e3, s = t.panel_height_cm * 10 / 1e3, a = 1e-3, o = e.x + a, c = e.x + i - a, l = e.y - s + a, h = e.y - a;
    for (const u of this.panels.values()) {
      if (u.id === n) continue;
      const d = u.metadata.panel_width_cm * 10 / 1e3, p = u.metadata.panel_height_cm * 10 / 1e3, g = u.position.x, _ = u.position.x + d, m = u.position.y - p, f = u.position.y;
      if (o < _ && c > g && l < f && h > m)
        return !1;
    }
    return !0;
  }
  /**
   * Get the closest grid hole to a world position
   * @param worldPos Position in world coordinates (meters)
   * @param maxDistM Maximum distance to snap (meters)
   * 
   * COORDINATE SYSTEM after -90° X rotation:
   * - Panel origin (panel.position) is at the TOP-LEFT corner of the visible panel
   * - Panel extends RIGHT (positive X) and DOWN (negative Y) from origin
   * - worldPos.x = horizontal position (left to right)
   * - worldPos.y = vertical position (panel extends downward from origin)
   * - worldPos.z = depth (0 = panel surface, positive = in front)
   */
  getClosestHole(e, t = 0.05) {
    let n = null, i = t * t, s = null;
    const a = Array.from(this.panels.values());
    console.log(`[getClosestHole] Looking for hole near worldPos: (${e.x.toFixed(4)}m, ${e.y.toFixed(4)}m, ${e.z.toFixed(4)}m)`), console.log(`[getClosestHole] Total panels: ${a.length}`), console.log(`[getClosestHole] Max snap distance: ${t}m (${t * 1e3}mm)`);
    for (const o of a) {
      const c = o.metadata.panel_width_cm * 10 / 1e3, l = o.metadata.panel_height_cm * 10 / 1e3, h = o.position.y - l, u = o.position.y;
      console.log(`[getClosestHole] Panel ${o.id}: pos=(${o.position.x.toFixed(4)}m, ${o.position.y.toFixed(4)}m), size=${c.toFixed(3)}x${l.toFixed(3)}m, bounds Y=[${h.toFixed(4)}, ${u.toFixed(4)}]`);
      const d = e.x - o.position.x, p = o.position.y - e.y;
      console.log(`[getClosestHole] Panel ${o.id}: localPos=(${(d * 1e3).toFixed(1)}mm, ${(p * 1e3).toFixed(1)}mm)`);
      const g = t;
      if (d < -g || d > c + g || p < -g || p > l + g) {
        console.log(`[getClosestHole] Panel ${o.id}: point outside panel bounds, skipping`);
        continue;
      }
      const _ = o.metadata.grid_spacing_mm / 1e3, m = o.metadata.grid_offset_mm / 1e3, f = o.metadata.border_margin_mm / 1e3;
      for (let M = f; M <= c - f; M += _)
        for (let x = f; x <= l - f; x += _) {
          const A = d - M, L = p - x, P = A * A + L * L;
          if (P < i) {
            i = P;
            const w = this.calculatePanelSurfaceZ(o);
            n = new R(
              o.position.x + M,
              o.position.y - x,
              w + 3e-3
              // 3mm above surface (reduced from 15mm)
            ), s = o;
          }
        }
      for (let M = f + m; M <= c - f; M += _)
        for (let x = f + m; x <= l - f; x += _) {
          const A = d - M, L = p - x, P = A * A + L * L;
          if (P < i) {
            i = P;
            const w = this.calculatePanelSurfaceZ(o);
            n = new R(
              o.position.x + M,
              o.position.y - x,
              w + 3e-3
              // 3mm above surface
            ), s = o;
          }
        }
    }
    if (n && s) {
      const o = Math.sqrt(i);
      console.log(`[getClosestHole] ✓ Found closest hole on panel ${s.id} at (${n.x.toFixed(4)}m, ${n.y.toFixed(4)}m) - distance: ${(o * 1e3).toFixed(2)}mm`);
    } else
      console.log(`[getClosestHole] ✗ No hole found within ${t * 1e3}mm`);
    return n;
  }
  /**
   * Calculate the actual surface Z position of a panel considering its rotation and thickness
   */
  calculatePanelSurfaceZ(e) {
    const n = new vt().setFromObject(e.object).getSize(new R());
    return e.position.z + n.z / 2;
  }
}
class l_ {
  constructor() {
    Ge(this, "items");
    Ge(this, "productPrices");
    Ge(this, "productNames");
    Ge(this, "debounceTimer", null);
    this.items = /* @__PURE__ */ new Map(), this.productPrices = /* @__PURE__ */ new Map(), this.productNames = /* @__PURE__ */ new Map();
  }
  /**
   * Set product data (prices and names)
   */
  setProductData(e) {
    e.forEach((t) => {
      this.productPrices.set(t.id, t.price || 0), this.productNames.set(t.id, t.name);
    });
  }
  /**
   * Add an item
   */
  addItem(e, t) {
    const n = e, i = this.items.get(n);
    i ? i.quantity += 1 : this.items.set(n, {
      productId: e,
      quantity: 1,
      variationId: t
    });
  }
  /**
   * Remove an item
   */
  removeItem(e) {
    const t = e, n = this.items.get(t);
    return n ? (n.quantity > 1 ? n.quantity -= 1 : this.items.delete(t), !0) : !1;
  }
  /**
   * Get total price
   */
  getTotal() {
    let e = 0;
    return this.items.forEach((t) => {
      const n = this.productPrices.get(t.productId) || 0;
      e += n * t.quantity;
    }), e;
  }
  /**
   * Get itemized list
   */
  getItemizedList() {
    const e = [];
    return this.items.forEach((t) => {
      const n = this.productPrices.get(t.productId) || 0, i = this.productNames.get(t.productId) || `Product ${t.productId}`;
      e.push({
        productId: t.productId,
        name: i,
        unitPrice: n,
        quantity: t.quantity,
        subtotal: n * t.quantity
      });
    }), e;
  }
  /**
   * Update price with debounce
   */
  updatePrice(e, t = 100) {
    this.debounceTimer !== null && clearTimeout(this.debounceTimer), this.debounceTimer = window.setTimeout(() => {
      e(), this.debounceTimer = null;
    }, t);
  }
  /**
   * Get all scene items
   */
  getSceneItems() {
    return Array.from(this.items.values());
  }
  /**
   * Clear all items
   */
  clear() {
    this.items.clear();
  }
  /**
   * Get item count
   */
  getItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      e += t.quantity;
    }), e;
  }
}
class h_ {
  constructor(e = "/wp-json/wc/store/v1/cart/add-item") {
    Ge(this, "apiUrl");
    Ge(this, "isLoading", !1);
    this.apiUrl = e;
  }
  /**
   * Add all items to cart
   */
  async addToCart(e) {
    if (this.isLoading)
      return {
        success: !1,
        message: "Une opération est déjà en cours"
      };
    this.showLoadingState();
    try {
      for (const t of e)
        await this.addSingleItem(t);
      return this.hideLoadingState(), this.handleSuccess();
    } catch (t) {
      return this.hideLoadingState(), this.handleError(t);
    }
  }
  /**
   * Add a single item to cart
   */
  async addSingleItem(e) {
    const t = {
      id: e.productId,
      quantity: e.quantity
    };
    e.variationId && (t.variation = [{
      attribute: "",
      value: e.variationId
    }]);
    const n = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    });
    if (!n.ok)
      throw new Error(`HTTP error! status: ${n.status}`);
  }
  /**
   * Show loading state
   */
  showLoadingState() {
    this.isLoading = !0;
    const e = document.querySelector("#pegboard-add-to-cart");
    e && (e.disabled = !0, e.textContent = "Ajout en cours...");
    const t = document.querySelector("#pegboard-cart-spinner");
    t && t.classList.remove("hidden");
  }
  /**
   * Hide loading state
   */
  hideLoadingState() {
    this.isLoading = !1;
    const e = document.querySelector("#pegboard-add-to-cart");
    e && (e.disabled = !1, e.textContent = "Ajouter au panier");
    const t = document.querySelector("#pegboard-cart-spinner");
    t && t.classList.add("hidden");
  }
  /**
   * Handle success response
   */
  handleSuccess() {
    return typeof window.wc_fragments < "u" && document.body.dispatchEvent(new Event("wc_fragment_refresh")), this.showMessage("Configuration ajoutée au panier !", "success"), {
      success: !0,
      message: "Articles ajoutés au panier avec succès",
      cartUrl: "/panier"
      // Can be configured
    };
  }
  /**
   * Handle error
   */
  handleError(e) {
    return console.error("Cart error:", e), this.showMessage(
      "Erreur lors de l'ajout au panier. Veuillez réessayer.",
      "error"
    ), {
      success: !1,
      message: e.message
    };
  }
  /**
   * Show message to user
   */
  showMessage(e, t) {
    const n = document.querySelector("#pegboard-messages");
    if (!n) return;
    const i = document.createElement("div");
    i.className = `pegboard-message pegboard-message-${t}`, i.textContent = e, n.appendChild(i), setTimeout(() => {
      i.remove();
    }, 5e3);
  }
  /**
   * Check if currently loading
   */
  isProcessing() {
    return this.isLoading;
  }
}
class u_ {
  constructor(e, t) {
    Ge(this, "sceneManager");
    Ge(this, "modelLoader");
    Ge(this, "priceCalculator");
    Ge(this, "cartIntegration");
    Ge(this, "multiPanelManager");
    Ge(this, "products", []);
    // Placed accessories tracking
    Ge(this, "placedAccessories", /* @__PURE__ */ new Map());
    Ge(this, "nextAccessoryId", 1);
    // Placement State
    Ge(this, "isPlacingPanel", !1);
    Ge(this, "ghostPanel", null);
    Ge(this, "pendingProduct", null);
    Ge(this, "pendingMetadata", null);
    Ge(this, "placementType", "board");
    Ge(this, "selectedObject", null);
    Ge(this, "selectedType", null);
    Ge(this, "selectedId", null);
    Ge(this, "isValidPlacement", !0);
    // Dragging State
    Ge(this, "isDragging", !1);
    Ge(this, "dragStartPosition", null);
    Ge(this, "dragOriginalPosition", null);
    const n = document.getElementById(e);
    if (!n)
      throw new Error(`Container ${e} not found`);
    if (this.sceneManager = new Eg(n), this.modelLoader = new a_(), this.priceCalculator = new l_(), this.cartIntegration = new h_(t.cartApiUrl), this.multiPanelManager = new c_(), this.products = t.products || [], this.priceCalculator.setProductData(this.products), this.renderProductLibrary(), this.setupEventListeners(), this.sceneManager.render(), t.defaultPanel)
      this.loadDefaultPanel(t.defaultPanel);
    else {
      const i = this.products.find((s) => s.type === "pegboard");
      i && this.loadDefaultPanel(i.id.toString());
    }
  }
  /**
   * Render product library in sidebar
   */
  renderProductLibrary() {
    const e = document.getElementById("pegboard-product-library");
    if (!e) return;
    const t = this.products.filter((c) => c.type === "pegboard"), n = this.products.filter((c) => c.type === "accessory");
    let i = "";
    i += `<div style="margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
                    <div class="pegboard-camera-controls">
                        <button class="small-btn" data-preset="front" title="Vue de Face">Front</button>
                        <button class="small-btn" data-preset="side" title="Vue de Côté">Side</button>
                        <button class="small-btn" data-preset="top" title="Vue de Haut">Top</button>
                    </div>
                    <button id="pegboard-reset" class="button small-btn danger">Reset</button>
                 </div>`, t.length > 0 && (i += '<div class="pegboard-section-title">Panneaux</div>', i += '<div class="pegboard-grid">', i += t.map((c) => `
                <button class="pegboard-product-btn" data-id="${c.id}" data-type="pegboard">
                    <span class="product-name">${c.name}</span>
                    <span class="product-price">${c.price} €</span>
                </button>
            `).join(""), i += "</div>"), n.length > 0 && (i += '<div class="pegboard-section-title">Accessoires</div>', i += '<div class="pegboard-grid">', i += n.map((c) => `
                <button class="pegboard-product-btn" data-id="${c.id}" data-type="accessory">
                    <span class="product-name">${c.name}</span>
                    <span class="product-price">${c.price} €</span>
                </button>
            `).join(""), i += "</div>"), e.innerHTML = i, e.querySelectorAll(".pegboard-product-btn").forEach((c) => {
      c.addEventListener("click", (l) => {
        const h = l.currentTarget, u = parseInt(h.dataset.id || "0"), d = h.dataset.type;
        u && d && this.handleProductSelect(u, d);
      });
    }), e.querySelectorAll(".pegboard-camera-controls button").forEach((c) => {
      c.addEventListener("click", (l) => {
        const u = l.currentTarget.dataset.preset;
        u && this.sceneManager.setCameraPreset(u);
      });
    });
    const o = document.getElementById("pegboard-reset");
    o && o.addEventListener("click", () => this.resetConfiguration());
  }
  /**
   * Handle product selection
   */
  async handleProductSelect(e, t) {
    try {
      const n = this.products.find((i) => i.id === e);
      if (!n) return;
      t === "pegboard" ? await this.startPlacement(n) : t === "accessory" && await this.startAccessoryPlacement(n);
    } catch (n) {
      console.error("Failed to select product:", n);
    }
  }
  /**
   * Start the placement mode for a pegboard
   */
  /**
   * Start the placement mode for an accessory
   */
  async startAccessoryPlacement(e) {
    this.isPlacingPanel && this.cancelPlacement();
    const t = await this.modelLoader.loadModel(e.glb_url), n = this.sceneManager.createGhost(t.scene);
    n.position.set(0, 0, 0.015), n.visible = !0, this.sceneManager.addObject(n), this.isPlacingPanel = !0, this.placementType = "accessory", this.ghostPanel = n, this.pendingProduct = e, this.pendingMetadata = t.metadata, this.sceneManager.setGhostValid(n, !1);
    const i = document.getElementById("pegboard-3d-container");
    i && i.classList.add("placing");
  }
  /**
   * Start the placement mode for a pegboard
   */
  async startPlacement(e) {
    this.isPlacingPanel && this.cancelPlacement();
    const t = await this.modelLoader.loadModel(e.glb_url), n = this.sceneManager.createGhost(t.scene);
    n.rotation.x = -Math.PI / 2, n.position.set(0, 0, 0), n.visible = !0, this.sceneManager.addObject(n), this.isPlacingPanel = !0, this.placementType = "board", this.ghostPanel = n, this.pendingProduct = e, this.pendingMetadata = t.metadata, this.sceneManager.setGhostValid(n, !0);
    const i = document.getElementById("pegboard-3d-container");
    i && i.classList.add("placing");
  }
  // Position ghost initially at mouse or center
  // (Will be updated by mousemove immediately if mouse is over canvas)
  /**
   * Cancel placement mode
   */
  cancelPlacement() {
    this.ghostPanel && (this.sceneManager.removeObject(this.ghostPanel), this.ghostPanel = null), this.isPlacingPanel = !1, this.pendingProduct = null, this.pendingMetadata = null;
    const e = document.getElementById("pegboard-3d-container");
    e && e.classList.remove("placing");
  }
  /**
   * Check if placing an accessory at a position would collide with existing accessories
   * Uses 2D footprint collision detection to avoid false positives from 3D depth
   * @param position The position to check
   * @param ghostObject The ghost object to get footprint from
   * @param excludeId Optional accessory ID to exclude (for dragging)
   * @returns true if there's a collision, false if position is clear
   */
  checkAccessoryCollision(e, t, n) {
    const s = this.calculate2DFootprint(t, e);
    if (!s)
      return console.log("[checkAccessoryCollision] Could not calculate ghost 2D footprint"), !1;
    const a = s.getSize(new me());
    console.log(`[checkAccessoryCollision] Ghost 2D footprint: min=(${(s.min.x * 1e3).toFixed(1)}, ${(s.min.y * 1e3).toFixed(1)}), max=(${(s.max.x * 1e3).toFixed(1)}, ${(s.max.y * 1e3).toFixed(1)}), size: ${(a.x * 1e3).toFixed(1)}x${(a.y * 1e3).toFixed(1)}mm at pos (${e.x.toFixed(4)}, ${e.y.toFixed(4)})`);
    for (const [o, c] of this.placedAccessories) {
      if (n && o === n) continue;
      const l = this.calculate2DFootprint(c.object);
      if (!l) continue;
      const h = l.getSize(new me()), u = s.min.x + 3e-3, d = s.max.x - 3e-3, p = s.min.y + 3e-3, g = s.max.y - 3e-3, _ = l.min.x + 3e-3, m = l.max.x - 3e-3, f = l.min.y + 3e-3, M = l.max.y - 3e-3, x = u < m && d > _, A = p < M && g > f;
      if (x && A)
        return console.log(`[checkAccessoryCollision] 2D Collision with ${o}: acc footprint min=(${(l.min.x * 1e3).toFixed(1)}, ${(l.min.y * 1e3).toFixed(1)}), max=(${(l.max.x * 1e3).toFixed(1)}, ${(l.max.y * 1e3).toFixed(1)}), size: ${(h.x * 1e3).toFixed(1)}x${(h.y * 1e3).toFixed(1)}mm`), !0;
    }
    return !1;
  }
  /**
   * Calculate 2D footprint of an object on the panel surface (XY plane projection)
   * This avoids false collisions from 3D depth by only considering the surface footprint
   */
  calculate2DFootprint(e, t) {
    const n = new Mg();
    let i = !1;
    const s = e.position.clone();
    return t && e.position.copy(t), e.updateMatrixWorld(!0), e.traverse((a) => {
      if (a instanceof xt && a.geometry) {
        const o = a.geometry.attributes.position;
        if (o) {
          const c = new R(), l = new R();
          for (let h = 0; h < o.count; h++)
            c.fromBufferAttribute(o, h), l.copy(c).applyMatrix4(a.matrixWorld), i ? n.expandByPoint(new me(l.x, l.y)) : (n.set(
              new me(l.x, l.y),
              new me(l.x, l.y)
            ), i = !0);
        }
      }
    }), t && (e.position.copy(s), e.updateMatrixWorld(!0)), i ? n : null;
  }
  /**
   * Calculate the actual surface Z position of a panel considering its rotation and thickness
   */
  calculatePanelSurfaceZ(e) {
    const n = new vt().setFromObject(e.object).getSize(new R());
    return e.position.z + n.z / 2;
  }
  /**
   * Confirm placement at current ghost position
   */
  confirmPlacement() {
    if (!this.ghostPanel || !this.ghostPanel.visible || !this.pendingProduct || !this.pendingMetadata) return;
    const e = this.ghostPanel.position.clone(), t = this.ghostPanel.rotation.clone();
    this.modelLoader.loadModel(this.pendingProduct.glb_url).then((n) => {
      const i = this.sceneManager.cloneWithUniqueMaterials(n.scene);
      if (i.rotation.copy(t), this.placementType === "board") {
        const s = this.multiPanelManager.addPanel(i, this.pendingMetadata, e);
        this.sceneManager.addObject(s.object), this.priceCalculator.addItem(this.pendingProduct.id, 1);
        const a = this.multiPanelManager.getAllPanels().map((o) => o.object);
        this.sceneManager.fitCameraToSelection(a);
      } else if (this.placementType === "accessory") {
        i.position.copy(e), this.sceneManager.addObject(i);
        const s = `acc_${this.nextAccessoryId++}`, a = this.multiPanelManager.getPanelAtPosition(e), o = new vt().setFromObject(i), c = {
          id: s,
          object: i,
          productId: this.pendingProduct.id,
          panelId: a ? a.id : null,
          boundingBox: o
        };
        this.placedAccessories.set(s, c), a && this.multiPanelManager.attachAccessoryToPanel(a.id, s), this.priceCalculator.addItem(this.pendingProduct.id, 1);
      }
      this.updatePriceDisplay(), this.cancelPlacement();
    });
  }
  /**
   * Setup event listeners
   */
  setupEventListeners() {
    const e = this.sceneManager.getCanvasElement();
    e.addEventListener("mousemove", (n) => this.handleMouseMove(n)), e.addEventListener("click", (n) => this.handleClick(n)), e.addEventListener("mousedown", (n) => this.handleMouseDown(n)), e.addEventListener("mouseup", (n) => this.handleMouseUp(n)), e.addEventListener("mouseleave", () => this.handleMouseLeave());
    const t = document.getElementById("pegboard-add-to-cart");
    t && t.addEventListener("click", () => this.handleAddToCart()), this.updatePriceDisplay(), window.addEventListener("keydown", (n) => {
      n.key === "Escape" && (this.isPlacingPanel ? this.cancelPlacement() : this.isDragging && this.cancelDrag()), n.key === "Delete" && this.selectedObject && !this.isDragging && this.deleteSelectedObject();
    });
  }
  /**
   * Handle mouse move for ghost positioning and dragging
   */
  handleMouseMove(e) {
    if (this.isDragging && this.selectedObject) {
      this.handleDragMove(e);
      return;
    }
    if (!(!this.isPlacingPanel || !this.ghostPanel || !this.pendingMetadata)) {
      if (this.ghostPanel.visible = !0, this.placementType === "board") {
        const t = this.sceneManager.getIntersectionWithPlane(e);
        if (!t) {
          this.ghostPanel.visible = !1;
          return;
        }
        const n = this.multiPanelManager.getSnapPositions(this.pendingMetadata);
        let i = t.clone(), s = 1 / 0, a = !1;
        if (n.length > 0)
          for (const c of n) {
            const l = t.distanceTo(c);
            l < 0.5 && l < s && (s = l, i = c, a = !0);
          }
        const o = this.multiPanelManager.getAllPanels().length > 0;
        this.isValidPlacement = !o || a, this.ghostPanel.position.copy(i), this.sceneManager.setGhostValid(this.ghostPanel, this.isValidPlacement);
      } else if (this.placementType === "accessory") {
        const t = this.multiPanelManager.getAllPanels().map((i) => i.object);
        if (t.length === 0) {
          this.ghostPanel.visible = !1, this.isValidPlacement = !1, console.log("[handleMouseMove] Accessory - no panels exist, hiding ghost");
          return;
        }
        const n = this.sceneManager.getIntersectionWithObjects(e, t);
        if (n) {
          console.log(`[handleMouseMove] Accessory - intersection point: (${n.point.x.toFixed(4)}m, ${n.point.y.toFixed(4)}m, ${n.point.z.toFixed(4)}m)`);
          const i = this.multiPanelManager.getClosestHole(n.point);
          if (i) {
            const s = this.checkAccessoryCollision(i, this.ghostPanel);
            this.ghostPanel.position.copy(i), this.isValidPlacement = !s, this.sceneManager.setGhostValid(this.ghostPanel, !s), console.log(s ? `[handleMouseMove] Accessory - ✗ collision detected at: (${i.x.toFixed(4)}m, ${i.y.toFixed(4)}m), isValidPlacement: false` : `[handleMouseMove] Accessory - ✓ snapped to: (${i.x.toFixed(4)}m, ${i.y.toFixed(4)}m), isValidPlacement: true`);
          } else {
            this.ghostPanel.position.copy(n.point);
            const s = this.multiPanelManager.getAllPanels();
            if (s.length > 0) {
              const a = s.find((o) => new vt().setFromObject(o.object).containsPoint(n.point));
              if (a) {
                const o = this.calculatePanelSurfaceZ(a);
                this.ghostPanel.position.z = o + 3e-3;
              } else
                this.ghostPanel.position.z = 3e-3;
            } else
              this.ghostPanel.position.z = 3e-3;
            this.isValidPlacement = !1, this.sceneManager.setGhostValid(this.ghostPanel, !1), console.log("[handleMouseMove] Accessory - ✗ no snap found, isValidPlacement: false");
          }
        } else {
          const i = this.sceneManager.getIntersectionWithPlane(e);
          i ? (this.ghostPanel.position.copy(i), this.isValidPlacement = !1, this.sceneManager.setGhostValid(this.ghostPanel, !1), console.log("[handleMouseMove] Accessory - not over panel, isValidPlacement: false")) : (this.ghostPanel.visible = !1, this.isValidPlacement = !1);
        }
      }
    }
  }
  /**
   * Handle click interactions
   */
  handleClick(e) {
    var t, n;
    if (!this.isDragging)
      if (this.isPlacingPanel) {
        let i = this.isValidPlacement;
        if (this.placementType === "accessory" && this.ghostPanel) {
          const s = this.multiPanelManager.getAllPanels().map((o) => o.object), a = this.sceneManager.getIntersectionWithObjects(e, s);
          if (a) {
            const o = this.multiPanelManager.getClosestHole(a.point);
            if (o) {
              const c = this.checkAccessoryCollision(o, this.ghostPanel);
              i = !c, this.ghostPanel.position.copy(o), this.sceneManager.setGhostValid(this.ghostPanel, !c);
            } else
              i = !1, this.sceneManager.setGhostValid(this.ghostPanel, !1);
          } else
            i = !1;
        }
        console.log(`[handleClick] Placement attempt - ghostVisible: ${(t = this.ghostPanel) == null ? void 0 : t.visible}, isValidPlacement: ${this.isValidPlacement}, clickIsValid: ${i}, placementType: ${this.placementType}`), this.ghostPanel && this.ghostPanel.visible && i ? (console.log("[handleClick] ✓ Placing object - valid placement"), this.confirmPlacement()) : (console.log(`[handleClick] ✗ Cannot place - visible: ${(n = this.ghostPanel) == null ? void 0 : n.visible}, valid: ${i}`), this.ghostPanel && this.sceneManager.setGhostValid(this.ghostPanel, !1));
      } else {
        const i = this.sceneManager.getIntersectedObject(e);
        if (i) {
          let s = !1;
          for (const [a, o] of this.placedAccessories) {
            let c = i === o.object;
            if (c || i.traverseAncestors((l) => {
              l === o.object && (c = !0);
            }), c) {
              this.selectObject(o.object, a, "accessory"), s = !0;
              break;
            }
          }
          if (!s) {
            const a = this.multiPanelManager.getAllPanels();
            let o = !1;
            for (const c of a) {
              let l = i === c.object;
              if (l || i.traverseAncestors((h) => {
                h === c.object && (l = !0);
              }), l) {
                this.selectObject(c.object, c.id, "panel"), o = !0;
                break;
              }
            }
            o || this.deselectObject();
          }
        } else
          this.deselectObject();
      }
  }
  /**
   * Handle mouse down - start dragging if on selected object
   */
  handleMouseDown(e) {
    if (!this.isPlacingPanel && this.selectedObject && this.selectedId) {
      const t = this.sceneManager.getIntersectedObject(e);
      if (t) {
        let n = t === this.selectedObject;
        if (n || t.traverseAncestors((i) => {
          i === this.selectedObject && (n = !0);
        }), n) {
          this.isDragging = !0, this.dragOriginalPosition = this.selectedObject.position.clone();
          const i = this.sceneManager.getIntersectionWithPlane(e);
          i && (this.dragStartPosition = i.clone());
          const s = document.getElementById("pegboard-3d-container");
          s && s.classList.add("dragging"), this.sceneManager.setControlsEnabled(!1);
        }
      }
    }
  }
  /**
   * Handle mouse up - finish dragging
   */
  handleMouseUp(e) {
    this.isDragging && this.finishDrag();
  }
  /**
   * Handle mouse leave - cancel drag if active
   */
  handleMouseLeave() {
    this.isDragging && this.cancelDrag();
  }
  /**
   * Handle drag movement
   */
  handleDragMove(e) {
    if (!this.selectedObject || !this.dragStartPosition || !this.dragOriginalPosition) return;
    const t = this.sceneManager.getIntersectionWithPlane(e);
    if (!t) return;
    const n = t.clone().sub(this.dragStartPosition);
    if (this.selectedType === "panel" && this.selectedId) {
      const i = this.multiPanelManager.getPanel(this.selectedId);
      if (!i) return;
      const s = this.dragOriginalPosition.clone().add(n), a = this.multiPanelManager.getSnapPositionsExcluding(i.metadata, this.selectedId);
      let o = s.clone(), c = 1 / 0, l = !1;
      for (const u of a) {
        const d = s.distanceTo(u);
        d < 0.3 && d < c && (c = d, o = u.clone(), l = !0);
      }
      this.multiPanelManager.getAllPanels().filter((u) => u.id !== this.selectedId).length === 0 && (o = s, l = !0), this.selectedObject.position.copy(o), this.sceneManager.setDragValid(this.selectedObject, l);
    } else if (this.selectedType === "accessory" && this.selectedId) {
      const i = this.multiPanelManager.getAllPanels().map((a) => a.object), s = this.sceneManager.getIntersectionWithObjects(e, i);
      if (s) {
        const a = this.multiPanelManager.getClosestHole(s.point);
        if (a) {
          const o = this.checkAccessoryCollision(a, this.selectedObject, this.selectedId);
          this.selectedObject.position.copy(a), this.sceneManager.setDragValid(this.selectedObject, !o);
        } else
          this.selectedObject.position.copy(s.point), this.selectedObject.position.z = 0.015, this.sceneManager.setDragValid(this.selectedObject, !1);
      } else {
        const a = this.dragOriginalPosition.clone().add(n);
        this.selectedObject.position.copy(a), this.sceneManager.setDragValid(this.selectedObject, !1);
      }
    }
  }
  /**
   * Finish dragging and confirm new position
   */
  finishDrag() {
    if (!this.selectedObject || !this.selectedId) {
      this.isDragging = !1;
      return;
    }
    const e = this.selectedObject.position.clone();
    if (this.selectedType === "panel")
      this.multiPanelManager.updatePanelPosition(this.selectedId, e), this.centerCameraOnPanels();
    else if (this.selectedType === "accessory") {
      let n = !1, i = e.clone();
      const s = this.multiPanelManager.getClosestHole(e);
      if (s && (this.checkAccessoryCollision(s, this.selectedObject, this.selectedId) || (n = !0, i = s)), !n) {
        console.log("[finishDrag] Invalid placement (not on panel or collision), canceling drag"), this.cancelDrag();
        return;
      }
      this.selectedObject.position.copy(i);
      const a = this.placedAccessories.get(this.selectedId);
      if (a) {
        a.panelId && this.multiPanelManager.detachAccessoryFromPanel(a.panelId, this.selectedId);
        const o = this.multiPanelManager.getPanelAtPosition(i);
        o && (a.panelId = o.id, this.multiPanelManager.attachAccessoryToPanel(o.id, this.selectedId)), a.boundingBox = new vt().setFromObject(a.object);
      }
    }
    this.isDragging = !1, this.dragStartPosition = null, this.dragOriginalPosition = null;
    const t = document.getElementById("pegboard-3d-container");
    t && t.classList.remove("dragging"), this.sceneManager.setControlsEnabled(!0), this.sceneManager.highlightObject(this.selectedObject, !0);
  }
  /**
   * Cancel dragging and restore original position
   */
  cancelDrag() {
    this.selectedObject && this.dragOriginalPosition && (this.selectedObject.position.copy(this.dragOriginalPosition), this.sceneManager.highlightObject(this.selectedObject, !0)), this.isDragging = !1, this.dragStartPosition = null, this.dragOriginalPosition = null;
    const e = document.getElementById("pegboard-3d-container");
    e && e.classList.remove("dragging"), this.sceneManager.setControlsEnabled(!0);
  }
  /**
   * Select an object in the scene
   */
  selectObject(e, t, n) {
    this.deselectObject(), this.selectedObject = e, this.selectedType = n, this.selectedId = t, this.sceneManager.highlightObject(e, !0);
    const i = n === "panel" ? `[data-panel-id="${t}"]` : `[data-accessory-id="${t}"]`, s = document.querySelector(i);
    s && s.classList.add("selected");
  }
  /**
   * Deselect current object
   */
  deselectObject() {
    this.selectedObject && (this.sceneManager.highlightObject(this.selectedObject, !1), this.selectedObject = null, this.selectedType = null, this.selectedId = null), document.querySelectorAll(".pegboard-item.selected").forEach((e) => {
      e.classList.remove("selected");
    });
  }
  /**
   * Delete the currently selected object
   */
  deleteSelectedObject() {
    !this.selectedObject || !this.selectedId || !this.selectedType || (this.selectedType === "panel" ? this.deletePanelById(this.selectedId) : this.selectedType === "accessory" && this.deleteAccessoryById(this.selectedId), this.selectedObject = null, this.selectedType = null, this.selectedId = null);
  }
  // Note: pickupPanel is disabled for now - we use selection-based workflow instead.
  // This method can be re-enabled for drag-to-move functionality in the future.
  /*
      private async pickupPanel(panelId: string): Promise<void> {
          const panel = this.multiPanelManager.getPanel(panelId);
          if (!panel) return;
  
          const product = this.products.find(p => p.type === 'pegboard');
          if (!product) return;
  
          this.multiPanelManager.removePanel(panelId);
          this.sceneManager.removeObject(panel.object);
  
          this.priceCalculator.removeItem(product.id);
          this.updatePriceDisplay();
  
          await this.startPlacement(product);
      }
      */
  // Updated loadPegboard replacement (keeping old method name but redirecting or removing)
  // Actually, I should remove loadPegboard from being called directly if I use startPlacement.
  // I can make loadPegboard just call startPlacement? 
  // Wait, loadPegboard was for direct add. startPlacement is interactive.
  // I used 'loadPegboard' in 'loadDefaultPanel'. 
  // loadDefaultPanel should probably instant-place (non-interactive) or start placement?
  // "Add First Board: Should snap to center (0,0,0) or start placement mode."
  // Let's make loadPegboard behave as instant add (for defaults) but handleProductSelect use startPlacement.
  /**
   * Reset configuration
   */
  resetConfiguration() {
    this.multiPanelManager.getAllPanels().forEach((t) => {
      this.sceneManager.removeObject(t.object);
    }), this.placedAccessories.forEach((t) => {
      this.sceneManager.removeObject(t.object);
    }), confirm("Tout réinitialiser?") && window.location.reload();
  }
  /**
   * Load a pegboard immediately (internal/default use)
   */
  async loadPegboard(e) {
    const t = await this.modelLoader.loadModel(e.glb_url), n = this.sceneManager.cloneWithUniqueMaterials(t.scene);
    n.rotation.x = -Math.PI / 2;
    const i = this.multiPanelManager.addPanel(n, t.metadata);
    this.sceneManager.addObject(i.object), this.priceCalculator.addItem(e.id, 1), this.updatePriceDisplay();
    const s = this.multiPanelManager.getAllPanels().map((a) => a.object);
    this.sceneManager.fitCameraToSelection(s);
  }
  /**
   * Load default panel
   */
  async loadDefaultPanel(e) {
    const t = this.products.find((n) => n.id === parseInt(e));
    t && await this.loadPegboard(t);
  }
  /**
   * Update price display in UI
   */
  updatePriceDisplay() {
    const e = document.querySelector("#pegboard-price-display .amount");
    if (e) {
      const n = this.priceCalculator.getTotal();
      e.textContent = `${n.toFixed(2)} €`;
    }
    const t = document.getElementById("pegboard-item-list");
    if (t) {
      const n = this.multiPanelManager.getAllPanels();
      let i = "";
      (n.length > 0 || this.placedAccessories.size > 0) && (i += '<div class="pegboard-help-hint">💡 Cliquez sur un élément pour le sélectionner, puis glissez-le pour le déplacer</div>'), n.length > 0 && (i += '<div class="pegboard-section-title">Panneaux</div>', n.forEach((a) => {
        const o = this.selectedObject === a.object, c = this.products.find((u) => u.type === "pegboard"), l = c ? c.name : "Panneau", h = (c == null ? void 0 : c.price) ?? 0;
        i += `
                        <div class="pegboard-item ${o ? "selected" : ""}" data-panel-id="${a.id}">
                            <span class="item-info">
                                <span class="item-name">${l}</span>
                                <span class="item-price">${h.toFixed(2)} €</span>
                            </span>
                            <div class="pegboard-item-actions">
                                <button class="select-btn" data-action="select" data-panel-id="${a.id}" title="Sélectionner">⊙</button>
                                <button class="delete-btn" data-action="delete" data-panel-id="${a.id}" title="Supprimer">×</button>
                            </div>
                        </div>
                    `;
      })), this.placedAccessories.size > 0 && (i += '<div class="pegboard-section-title">Accessoires</div>', this.placedAccessories.forEach((a, o) => {
        const c = this.selectedObject === a.object, l = this.products.find((d) => d.id === a.productId), h = l ? l.name : "Accessoire", u = (l == null ? void 0 : l.price) ?? 0;
        i += `
                        <div class="pegboard-item ${c ? "selected" : ""}" data-accessory-id="${o}">
                            <span class="item-info">
                                <span class="item-name">${h}</span>
                                <span class="item-price">${u.toFixed(2)} €</span>
                            </span>
                            <div class="pegboard-item-actions">
                                <button class="select-btn" data-action="select" data-accessory-id="${o}" title="Sélectionner">⊙</button>
                                <button class="delete-btn" data-action="delete" data-accessory-id="${o}" title="Supprimer">×</button>
                            </div>
                        </div>
                    `;
      }));
      const s = this.priceCalculator.getItemizedList();
      s.length > 0 && (i += '<div class="pegboard-section-title" style="margin-top:10px;">Résumé</div>', s.forEach((a) => {
        i += `
                        <div class="pegboard-item summary-item">
                            <span>${a.name}</span>
                            <span>×${a.quantity}</span>
                            <span>${a.subtotal.toFixed(2)} €</span>
                        </div>
                    `;
      })), t.innerHTML = i, this.setupItemListListeners(t);
    }
  }
  /**
   * Setup event listeners for item list buttons
   */
  setupItemListListeners(e) {
    e.querySelectorAll('[data-action="select"][data-panel-id]').forEach((t) => {
      t.addEventListener("click", (n) => {
        n.stopPropagation();
        const i = t.dataset.panelId;
        if (i) {
          const s = this.multiPanelManager.getPanel(i);
          s && this.selectObject(s.object, s.id, "panel");
        }
      });
    }), e.querySelectorAll('[data-action="delete"][data-panel-id]').forEach((t) => {
      t.addEventListener("click", (n) => {
        n.stopPropagation();
        const i = t.dataset.panelId;
        i && this.deletePanelById(i);
      });
    }), e.querySelectorAll('[data-action="select"][data-accessory-id]').forEach((t) => {
      t.addEventListener("click", (n) => {
        n.stopPropagation();
        const i = t.dataset.accessoryId;
        if (i) {
          const s = this.placedAccessories.get(i);
          s && this.selectObject(s.object, i, "accessory");
        }
      });
    }), e.querySelectorAll('[data-action="delete"][data-accessory-id]').forEach((t) => {
      t.addEventListener("click", (n) => {
        n.stopPropagation();
        const i = t.dataset.accessoryId;
        i && this.deleteAccessoryById(i);
      });
    }), e.querySelectorAll(".pegboard-item[data-panel-id]").forEach((t) => {
      t.addEventListener("click", () => {
        const n = t.dataset.panelId;
        if (n) {
          const i = this.multiPanelManager.getPanel(n);
          i && this.selectObject(i.object, i.id, "panel");
        }
      });
    }), e.querySelectorAll(".pegboard-item[data-accessory-id]").forEach((t) => {
      t.addEventListener("click", () => {
        const n = t.dataset.accessoryId;
        if (n) {
          const i = this.placedAccessories.get(n);
          i && this.selectObject(i.object, n, "accessory");
        }
      });
    });
  }
  /**
   * Delete a panel by its ID
   */
  deletePanelById(e) {
    const t = this.multiPanelManager.getPanel(e);
    if (!t) return;
    this.selectedObject === t.object && this.deselectObject(), this.sceneManager.removeObject(t.object), this.multiPanelManager.removePanel(e).forEach((s) => {
      const a = this.placedAccessories.get(s);
      a && (this.sceneManager.removeObject(a.object), this.priceCalculator.removeItem(a.productId), this.placedAccessories.delete(s));
    });
    const i = this.products.find((s) => s.type === "pegboard");
    i && this.priceCalculator.removeItem(i.id), this.updatePriceDisplay(), this.centerCameraOnPanels();
  }
  /**
   * Delete an accessory by its ID
   */
  deleteAccessoryById(e) {
    const t = this.placedAccessories.get(e);
    t && (this.selectedObject === t.object && this.deselectObject(), this.sceneManager.removeObject(t.object), t.panelId && this.multiPanelManager.detachAccessoryFromPanel(t.panelId, e), this.priceCalculator.removeItem(t.productId), this.placedAccessories.delete(e), this.updatePriceDisplay());
  }
  /**
   * Center camera on all panels
   */
  centerCameraOnPanels() {
    const e = this.multiPanelManager.getAllPanels().map((t) => t.object);
    e.length > 0 && this.sceneManager.fitCameraToSelection(e);
  }
  /**
   * Handle add to cart
   */
  async handleAddToCart() {
    const e = this.priceCalculator.getSceneItems();
    if (e.length === 0) {
      alert("Veuillez ajouter des éléments à votre configuration");
      return;
    }
    await this.cartIntegration.addToCart(e);
  }
  /**
   * Dispose and cleanup
   */
  dispose() {
    this.sceneManager.dispose(), this.modelLoader.clearCache(), this.priceCalculator.clear();
  }
}
console.log("3D Pegboard Composer loaded");
const mc = () => {
  const r = window.Pegboard3DConfig;
  if (r && document.getElementById("pegboard-3d-container")) {
    console.log("Initializing 3D Configurator with config:", r);
    try {
      const e = new u_("pegboard-3d-container", r);
      window.PegboardController = e, console.log("3D Configurator initialized successfully");
    } catch (e) {
      console.error("Failed to initialize 3D Configurator:", e);
    }
  } else
    console.log("No configurator container found on this page");
};
typeof window < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", mc) : mc());
export {
  h_ as CartIntegration,
  a_ as ModelLoader,
  c_ as MultiPanelManager,
  f_ as PlacementCalculator,
  l_ as PriceCalculator,
  Eg as SceneManager,
  o_ as SnappingSystem,
  u_ as UIController
};
