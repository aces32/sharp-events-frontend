/* eslint-disable react/no-array-index-key */

import { Tab } from '@headlessui/react';
import { Children, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

export interface EventType {
  name: string;
  id: string;
}

interface MyTabsProps {
  tabList: Array<EventType>;
  tabPanel?: React.ReactNode | React.ReactNode[];
  stateFunction?: Dispatch<SetStateAction<string>>;
  selectedIndex?: number;
  setSelectedIndex?: Dispatch<SetStateAction<number>>;
}

function MyTabs({
  tabList,
  tabPanel,
  selectedIndex,
  setSelectedIndex,
  stateFunction,
}: MyTabsProps) {
  const childrenNode = Children.toArray(tabPanel);

  const navigate = useNavigate();
  const handleClick = (eventTypeId: string) => {
    navigate(`/search?eventType=${eventTypeId}`);
    stateFunction?.(eventTypeId);
  };
  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="space-x-5 space-y-4 text-center ">
        {tabList.map((item) => (
          <Tab
            key={item?.id}
            onClick={() => {
              handleClick(item?.id);
              // stateFunction && stateFunction(item?.id);
            }}
            className={({ selected }: any) =>
              `rounded-full px-2 py-1 font-Inter text-[1rem] font-bold leading-[29px] hover:brightness-150
              ${
                selected
                  ? '   bg-primary  text-white outline-none'
                  : '  border  border-primary  text-primary '
              }`
            }
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

export default MyTabs;
