import type { ReactNode } from 'react';

export const BaseTemplate = (props: {
  children: ReactNode;
}) => {

  return (
    <div>
      {props.children}
    </div>
  );
};
