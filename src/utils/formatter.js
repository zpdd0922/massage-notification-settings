/***************************
 * 处理数据格式化 信息
 ***************************/

/**
 * 银行卡 - 4位数字分割
 */
export function formateBankCard(val) {
  if (!val) return ''
  return val.replace(/(.{4})/g, '$1 ').replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 把输入的字符串转换为半角
 * input： Str 任意字符串
 * output：DBCStr 半角字符串
 * 说明：1、全角空格为12288，半角空格为32
        2、其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
*/
export function toDBC(Str) {
  if (!Str || (typeof Str === 'object')) return Str
  let DBCStr = ''
  for (let i = 0; i < Str.length; i++) {
    const c = Str.charCodeAt(i)
    if (c === 12288) {
      DBCStr += String.fromCharCode(32)
      continue
    }

    if (c > 65280 && c < 65375) {
      DBCStr += String.fromCharCode(c - 65248)
      continue
    }

    DBCStr += String.fromCharCode(c)
  }
  return DBCStr
}

// 手机号码中间四位加密
export function formatPhone(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

// 犇犇号中间四位加密
export function formatUserId(userId) {
  const s = String(userId)
  return s.replace(/(\d{1})\d{4}(\d{2})/, '$1****$2')
}

// 犇犇号中间2位加密
export function formatUserCode(userId) {
  const s = String(userId)
  return s.replace(/(\d{2})\d{2}(\d{2})/, '$1**$2')
}

// 小数转化为百分数
export function toPercent(point) {
  var str = Number(point * 100).toFixed(1)
  str += '%'
  return str
}

export function slicePhoneRegion(val) {
  const phoneHead = val.slice(0, 2)
  const result = phoneHead === '86'
  if (result) {
    return val.slice(2)
  } else {
    return val
  } 
}

// 删除数组特定值
export function removeArrayVal(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1)
      return arr
    }
  }
}