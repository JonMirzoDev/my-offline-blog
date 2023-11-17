import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

const httpRequest = axios.create({
  baseURL: 'https://cloud.appwrite.io/v1',
  timeout: 100000
})

const errorHandler = (error: AxiosError) => {
  if (error.response) {
    toast.error(
      `Error: ${error.response.status} - ${error.response.statusText}`
    )
  } else if (error.request) {
    toast.error('Error: The request was made but no response was received')
  } else {
    toast.error('Error: Something went wrong')
  }

  return Promise.reject(error)
}

httpRequest.interceptors.request.use((config: any) => {
  return config
})

httpRequest.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  errorHandler
)

export default httpRequest
