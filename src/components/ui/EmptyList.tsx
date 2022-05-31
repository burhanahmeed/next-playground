import type { ReactNode } from 'react';

interface IProps {
  icon: ReactNode;
  text: string;
}

const EmptyList = (props: IProps) => {
  return (
    <div className="h-80 w-full rounded-lg border border-dashed border-white bg-stone-700 p-8">
      <div className="flex h-full flex-col items-center justify-center text-2xl text-white">
        <p>{props.icon}</p>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default EmptyList;
