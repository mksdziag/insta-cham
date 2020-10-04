import React, { ReactChild } from 'react';
import Loader from './Loader';

interface IProps {
  tabLinks: { name: string; id: string }[];
  currentTabLink: string;
  isLoading: boolean;
  children: ReactChild;
  onTablinkClick(id: string): void;
}

export default function TabsTable(props: IProps) {
  const {
    isLoading,
    tabLinks,
    children,
    currentTabLink,
    onTablinkClick,
  } = props;

  return (
    <div className="custom-tabs">
      <div className="custom-tabs__tab-links">
        {tabLinks.map((tabLink) => {
          return (
            <button
              key={tabLink.id}
              className={`custom-tabs__tab-link ${
                tabLink.id === currentTabLink
                  ? 'custom-tabs__tab-link--active'
                  : ''
              }`}
              onClick={() => onTablinkClick(tabLink.id)}
            >
              {tabLink.name}
            </button>
          );
        })}
      </div>
      <div className="custom-tabs__tab-content">
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  );
}
