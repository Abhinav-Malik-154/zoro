/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Modal, ModalProps } from '@/components';
import { PropsWithChildren } from 'react';

export interface TosPPModalProps {
  title: string;
  open: boolean;
  handleClose: ModalProps['handleClose'];
}

const TosPPModal = ({
  title,
  handleClose,
  children,
  open,
  ...otherProps
}: PropsWithChildren<
  TosPPModalProps & {
    css: any;
    disableEscapeKeyDown?: boolean;
  }
>) => {
  return (
    <Modal
      isOpen={open}
      handleClose={handleClose}
      title={title}
      {...otherProps}
    >
      <>{children}</>
    </Modal>
  );
};

export default TosPPModal;
