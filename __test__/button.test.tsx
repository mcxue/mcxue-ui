import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Button } from '../index';
import { addSuffix } from '../src/utils';

describe('测试按钮的单击事件', () => {
  test('点击按钮后可以正确执行回调', () => {
    const handleCallback = vi.fn();
    render(<Button onClick={handleCallback}>普通的按钮</Button>);
    const button = screen.getByText('普通的按钮');
    fireEvent.click(button);
    expect(handleCallback).toHaveBeenCalled();
  });

  test('禁用状态下的按钮不可点击', () => {
    const handleCallback = vi.fn();
    render(<Button disabled onClick={handleCallback}>被禁用的按钮</Button>);
    const button = screen.getByText('被禁用的按钮');
    fireEvent.click(button);
    expect(handleCallback).not.toHaveBeenCalled();
  });

  test('加载中的按钮不可点击', () => {
    const handleCallback = vi.fn();
    render(<Button disabled onClick={handleCallback}>加载中的按钮</Button>);
    const button = screen.getByText('加载中的按钮');
    fireEvent.click(button);
    expect(handleCallback).not.toHaveBeenCalled();
  });

});

describe('测试 8 种不同按钮的类型', () => {
  const types = ['default', 'plain', 'success', 'warning', 'error', 'info', 'link', 'text'] as const;
  for (let i = 0; i < types.length; i++) {
    test(`${types[i]} 类型`, () => {
      const { container } = render(<Button type={types[i]}>{types[i]}</Button>);
      const node = container.querySelector('.' + addSuffix(types[i]));
      if (!node) throw new Error(`未找到 ${'.' + addSuffix(types[i])} 元素`);
      expect(node.classList.contains(addSuffix(types[i]))).toBeTruthy();
    });
  }
});
