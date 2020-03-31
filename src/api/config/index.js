
export const ERR_OK = 0

export const DEV = process.env.NODE_ENV !== 'production'

// 9003端口
export const HOST = DEV ? '/dev-url' : window.HOST_URL

export const KEY_USER_INFO = 'userInfo'

export const KEY_SESSION_INFO = 'userSessionInfo'

export const InterFaceUrl = (url) => (HOST + url)
