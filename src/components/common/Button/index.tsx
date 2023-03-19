import React from 'react';
import {Button} from 'antd';

export default function ButtonCommon ({children, ...props} : any) {
    return (
        <Button {...props}>{children}</Button>
    )
}