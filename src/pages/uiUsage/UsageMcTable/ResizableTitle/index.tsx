import React from 'react';
import { Resizable } from 'react-resizable';

const ResizableTitle = (props: { [x: string]: any; width?: any; fixed?: any }) => {
  const { width, fixed, ...restProps } = props;
  console.log('ResizableTitle 组件执行了');
  console.log(width);
  console.log(fixed);

  if (!width || fixed) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      height={0}
      width={width}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default ResizableTitle;
