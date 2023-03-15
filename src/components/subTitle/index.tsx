import { ReactNode } from 'react';

export interface Props {
  subTitle: string;
  tip?: string;
  description?: ReactNode;
}

export default function SubTitle({ subTitle, tip = '', description = '' }: Props) {
  return (
    <div>
      <h2>
        <span>{subTitle}</span>
        <span>{tip}</span>
      </h2>
      <p>{description}</p>
    </div>
  );
}
