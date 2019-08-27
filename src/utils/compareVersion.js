
/**
 * 对比APP版本
 * @param {*} str
 */

// var num_place = ['', '0', '00', '000', '0000']

// export const toNumVersion = function (str) {
//   const a = str.toString()
//   const c = a.split(/\./)
//   const t = JSON.parse(JSON.stringify(num_place))
//   const r = t.reverse()
//   for (let i = 0; i < c.length; i++) {
//     const len = c[i].length
//     c[i] = r[len] + c[i]
//   }
//   const res = c.join('')
//   return res
// }

// export const versionfunegt = function (a, b) {
//   const _a = toNumVersion(a)
//   const _b = toNumVersion(b)
//   if (_a === _b) {
//     return true
//   } else if (_a > _b) {
//     return true
//   } else {
//     return false
//   }
// }

export const compareVersion = function(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}
