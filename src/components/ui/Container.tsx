import type { ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
}

const Container = (props: IProps) => {
  const containerClass = classNames({
    container: true,
    'mx-auto': true,
  });

  return <section className={containerClass}>{props.children}</section>;
};

export default Container;
