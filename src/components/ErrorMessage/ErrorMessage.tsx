import { FC } from 'react';
interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <p>{message}</p>;
};