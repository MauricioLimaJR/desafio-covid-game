import React from 'react'
import Dialog from '@material-ui/core/Dialog'

const Modal = ({
  children,
  content = null,
  forceClose = false,
  open = false,
  trigger = () => {},
  fullScreen = false,
  onOpen = () => {},
  onClose = () => {},
}) => {
  const [isOpen, setIsOpen] = React.useState(open)

  React.useEffect(() => {
    if (isOpen) setIsOpen(!forceClose)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceClose])

  /**
   * It opens the modal.
   * This function is available on 'trigger' prop, so it's possible use this as
   * an effect in others elements.
   */
  const handleOpen = () => {
    onOpen()
    setIsOpen(true)
  }

  /**
   * It closes the modal.
   * Running handleClose, 'onClose' prop function will be execued too.
   * This is also available in the 'content' props, so it can be called from
   * any element inside 'content' component.
   */
  const handleClose = () => {
    onClose()
    setIsOpen(false)
  }

  const modalChildren = content
    ? {
      ...content,
      props: {
        ...content.props,
        handleClose,
      }
    }
    : {
      ...children,
      props: {
        ...children.props,
        handleClose,
      }
    }

  return (
    <>
      {/* Renders element or some function that opens the modal */}
      {trigger(handleOpen)}

      {/* Modal Container */}
      <Dialog
        aria-labelledby="customized-dialog-title"
        fullScreen={fullScreen}
        onClose={handleClose}
        open={isOpen}
        PaperComponent="div"
      >
        {/* Modal Content */}
        {modalChildren}
      </Dialog>
    </>
  )
}

export default Modal
