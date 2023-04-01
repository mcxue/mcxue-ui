import { ReactNode, useState } from 'react';
import './index.scss';
import classNames from 'classnames';
import Icon from '../icon';

export interface SwitchProps {
  disabled?: boolean;
  checked?: boolean;
  loading?: boolean;
  checkedTextNode?: ReactNode;
  uncheckedTextNode?: ReactNode;
  onClick?: (checked: boolean) => void;
  onChange?: (checked: boolean) => void;
}

export default function Switch(props: SwitchProps) {
  const {
    disabled = false,
    checked: propsChecked = false,
    checkedTextNode,
    uncheckedTextNode,
    loading,
    onClick,
    onChange,
  } = props;
  const [checked, setChecked] = useState<boolean>(propsChecked);
  const handleButtonClick = () => {
    if (disabled || loading) {
      onClick?.(checked);
    } else {
      onChange?.(!checked);
      onClick?.(!checked);
      setChecked(!checked);
    }
  };
  return (
    <button className={classNames('mcxueSwitch', {
      mcxueChecked: checked,
      mcxueDisabled: disabled,
      mcxueLoading: loading,
    })} onClick={handleButtonClick}>
      <div className="mcxueSwitchHandle">
        {loading ? <Icon className="mcxueSwitchLoadingIcon" name="loading" /> : null}
      </div>
      <div className="mcxueSwitchCheckedChildren">{checkedTextNode}</div>
      <div className="mcxueSwitchUnCheckedChildren">{uncheckedTextNode}</div>
    </button>
  );
}
