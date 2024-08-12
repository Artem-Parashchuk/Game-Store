import classNames from 'classnames'
import s from './Button.module.css'


export const Button = ({
  onClick,
  type,
  children,
  size = 's'
}) => {

  const btnClass = classNames({
    [s.btn]: true,
    [s['btn--secondary']]: type === 'secondary',
    [s['btn--primary']]: type === 'primary',
    [s['btn--small']]: size === 's',
    [s['btn--medium']]: size === 'm'
  });

  return (
    <button className={btnClass} onClick={onClick}>{children}</button>
  )
}
