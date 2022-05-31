import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Card = (props: IProps) => {
  return (
    <div className="cursor-pointer rounded-lg bg-gray-700 bg-gradient-to-r p-4 transition duration-300 ease-in-out hover:scale-105 hover:from-transparent hover:to-purple-900">
      {props.children}
    </div>
  );
};

export default Card;
