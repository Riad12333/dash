'use client';

import React, { FC, ReactNode, useState } from 'react';

interface TabsProps {
  children: ReactNode;
  defaultValue: string;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({ children, defaultValue, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            activeTab,
            setActiveTab,
          });
        }
        return child;
      })}
    </div>
  );
};

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList: FC<TabsListProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex space-x-2 border-b mb-4 ${className}`}>
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  className?: string;
}

export const TabsTrigger: FC<TabsTriggerProps> = ({ 
  value, 
  children, 
  activeTab, 
  setActiveTab,
  className = '' 
}) => {
  return (
    <button
      className={`px-4 py-2 font-medium ${
        activeTab === value 
          ? 'border-b-2 border-blue-500 text-blue-500' 
          : 'text-gray-500 hover:text-gray-700'
      } ${className}`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: ReactNode;
  activeTab?: string;
  className?: string;
}

export const TabsContent: FC<TabsContentProps> = ({ 
  value, 
  children, 
  activeTab,
  className = '' 
}) => {
  if (activeTab !== value) return null;

  return (
    <div className={className}>
      {children}
    </div>
  );
}; 