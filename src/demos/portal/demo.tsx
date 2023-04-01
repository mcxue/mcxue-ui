import { Button, Icon, Portal, Space } from 'mcxue-ui';
import { useState } from 'react';

export default function Demo() {
  const [place, setPlace] = useState<1 | 2>(1);
  const handleButtonClick = () => {setPlace(place === 1 ? 2 : 1);};
  const getContainer = () => document.querySelector(`.portal-demo-place-${place}`) as HTMLElement;

  return (
    <div>
      <Space style={{ alignItems: 'normal' }}>
        <div className="portal-demo-place-1" style={{ width: '35%', background: 'var(--mcxueColorSmoothGreen)' }}>
          "地点1"
          <Portal getContainer={getContainer}>
            <div style={{ textAlign: 'center', paddingBottom: '16px', fontSize: '96px' }}>
              <Icon />
            </div>
          </Portal>
        </div>
        <div className="portal-demo-place-2" style={{ width: '35%', background: 'var(--mcxueColorSmoothYellow)' }}>
          "地点2"
        </div>
      </Space>
      <Button onClick={handleButtonClick} style={{ marginTop: '16px' }}>{`传送到"地点${place === 1 ? 2 : 1}"`}</Button>
    </div>
  );
};
