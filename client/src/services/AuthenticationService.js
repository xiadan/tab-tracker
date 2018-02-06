// 認證服務
import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'xiadan0519.com',
//   password: '123456'
// })
