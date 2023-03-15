const COMPONENT_BASE_URL = '/start/components';

interface BaseNav {
  label: string;
  link: string;
  name?: string;
}

interface NavGroup {
  groupName: string;
  children: BaseNav[];
}

const generateLinkFn = (baseURL: string) => {
  return function (name: string) {
    return `${baseURL}/${name}`;
  };
};

const getQuickStartLink = generateLinkFn('/start');
const getComponentLink = generateLinkFn(COMPONENT_BASE_URL);

const QUICK_START_NAV_DICT = [
  {
    name: 'install',
    label: '安装',
  },
  {
    name: 'changeLog',
    label: '更新日志',
  },
];
const COMPONENT_COMMON_DICT = [
  {
    name: 'button',
    label: 'Button 按钮',
  },
  {
    name: 'switch',
    label: 'Switch 开关',
  },
];

const COMPONENT_INTERACTION_DICT = [
  {
    name: 'alert',
    label: 'Alert 警告提示',
  },
  {
    name: 'backTop',
    label: 'BackTop 回到顶部',
  },
];

export const NAV_DATA = [
  {
    groupName: '快速上手',
    children: QUICK_START_NAV_DICT.map(({ name, label }) => {
      return {
        label,
        link: getQuickStartLink(name),
      };
    }),
  },
  {
    groupName: '通用',
    children: COMPONENT_COMMON_DICT.map(({ name, label }) => {
      return {
        label,
        link: getComponentLink(name),
      };
    }),
  },
  // INTERACTION,
];
