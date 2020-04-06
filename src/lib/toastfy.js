import { toast } from 'react-toastify'

class Toast {
  style = {
    position: toast.POSITION.TOP_RIGHT,
  }

  idsTypes = {
    success: 10,
    error: 20,
    show: 30,
  }

  isReady = (id) => {
    if (toast.isActive(id)) return false
    toast.configure()
    return true
  }

  /**
   * Notify a success message
   *
   * @param {String} msg - message to be printed
   */
  success = (msg) => {
    toast.configure()
    if (this.isReady(this.idsTypes.success)) {
      return toast.success(msg, { toastId: this.idsTypes.success, ...this.style })
    }
    return null
  }

  /**
   * Notify an error message
   *
   * @param {String} msg - message to be printed
   */
  error = (msg) => {
    toast.configure()
    if (this.isReady(this.idsTypes.error)) {
      return toast.error(msg, { ...this.style })
    }
    return null
  }

  /**
   * Notify an array of error messages
   *
   * @param {Array} errors - errors messages to be printed
   * @param {int} timeout - time between each notification
   */
  errorList = (errors, timeout = 1000) => (
    errors.map((error, i) => setTimeout(() => {
      this.error(error, { ...this.style })
    }, timeout * i))
  )

  /**
   * Notify a general message
   *
   * @param {String} msg - message to be printed
   */
  show = (msg) => {
    toast.configure()
    if (this.isReady(this.idsTypes.show)) {
      return toast(msg, { toastId: this.idsTypes.show, ...this.style })
    }
    return null
  }
}

export default new Toast()
