/* eslint-disable react/no-array-index-key */

import { Tab } from '@headlessui/react';
import { Children } from 'react';

export interface EventType {
  name: string;
  id: string;
}

interface MyTabsProps {
  value: string;
  onChange: (value: string) => void;
  tabList: Array<EventType>;
  tabPanel?: React.ReactNode | React.ReactNode[];
  // stateFunction?: Dispatch<SetStateAction<string>>;
  // selectedIndex?: number;
  // setSelectedIndex?: Dispatch<SetStateAction<number>>;
  activeClass?: string;
  notActiveClass?: string;
}

function SpecialMyTabs({
  value,
  onChange,
  tabList,
  tabPanel,
  // selectedIndex,
  // setSelectedIndex,
  // stateFunction,
  activeClass,
  notActiveClass,
}: MyTabsProps) {
  const childrenNode = Children.toArray(tabPanel);
  return (
    // @ts-ignore
    <Tab.Group>
      <Tab.List className="space-x-5 space-y-4 text-center ">
        {tabList.map((item) => (
          <Tab
            key={item?.id}
            onClick={() => onChange(item?.name)}
            className={value === item.name ? activeClass : notActiveClass}
          >
            {item?.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {childrenNode.map((item, index) => (
          <Tab.Panel key={index}>{item}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default SpecialMyTabs;
