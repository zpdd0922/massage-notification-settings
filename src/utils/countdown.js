import { timeTotimestamp, compareDate } from './date'
import { toPercent } from './formatter'

export const getCountdownTime = (systemTime,validityDate) => {
  let isOutDate =compareDate(systemTime,validityDate) // 红包是否过期
  if(isOutDate) {
    return 0
  }
  let day, hour, time
  const valid = timeTotimestamp(validityDate)/1000
  const current = timeTotimestamp(systemTime)/1000
  let timetamp = valid - current // 差值时间=有效时间-服务器当前时间
  day = Math.floor(timetamp / (24 * 3600))
  hour = Math.floor((timetamp - day * 24 * 3600) / 3600)
  time = {
    DD: day,
    hh: hour,
  }
  let formatTime = 'DD天hh小时'.replace(/(DD?|hh?)/g, f => time[f]) // 时间格式化处理
  return formatTime

  // const timer = setInterval(() => {
  //   timetamp--
  //   // console.log('倒计时时间timetamp:' + timetamp)
  //   if (time === 0) {
  //     clearInterval(timer)
  //   } else {
  //     day = Math.floor(timetamp / (24 * 3600))
  //     hour = Math.floor((timetamp - day * 24 * 3600) / 3600)
  //     minute = Math.floor((timetamp - day * 24 * 3600 - hour * 3600) / 60)
  //     second = Math.floor(timetamp - day * 24 * 3600 - hour * 3600 - minute * 60)
  //   }
  //   time = {
  //     DD: padTime(day),
  //     hh: padTime(hour),
  //     mm: padTime(minute),
  //     ss: padTime(second)
  //   }
  //   let formatTime = 'DD:hh:mm:ss'.replace(/(DD?|hh?|mm?|ss?)/g, f => time[f]) // 时间格式化处理
  //   return formatTime
  // }, 1000)
}

export const getLeftPercent = (systemTime,validityDate) => {
  let isOutDate =compareDate(systemTime,validityDate)
  if (isOutDate) {
    return 0
  }
  const valid = timeTotimestamp(validityDate)/1000
  const current = timeTotimestamp(systemTime)/1000
  let timetamp = valid - current // 差值时间=有效时间-服务器当前时间
  const totalTime = 3*24*60*60   // 3天有效期
  let leftPercent = toPercent(timetamp/totalTime)
  return leftPercent
}