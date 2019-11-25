import axios, { AxiosError } from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1'
}).then(res => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.error(e.message)
  console.error(e.code)
})

axios({
  method: 'get',
  url: '/error/get'
}).then(res => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.error(e.message)
  console.error(e.code)
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then(res => {
    console.log(res)
  }).catch((e: AxiosError) => {
    console.error(e.message)
    console.error(e.code)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.error(e.message)
  console.error(e.code)
})
