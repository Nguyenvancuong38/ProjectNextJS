import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

interface typeItems {
    items: {
        key: string;
        label: string;
        children: React.ReactElement;
    }[];
    defaultActiveKey: string;
}

function Tab (props: typeItems) {
    return <Tabs defaultActiveKey={props.defaultActiveKey} items={props.items} />;
} 

export default Tab;