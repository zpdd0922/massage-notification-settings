
export const ERR_OK = 0

export const DEV = process.env.NODE_ENV !== 'production'

export const HOST = DEV ? '/dev' : window.HOST_URL

export const KEY_USER_INFO = 'userInfo'

export const KEY_SESSION_INFO = 'userSessionInfo'
