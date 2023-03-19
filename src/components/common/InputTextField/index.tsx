import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types/form';
import React from 'react';

interface propsOfInputTextField {
  name: string;
  control: Control<any>;
  defaultValue?: any;
  [key: string]: any; // Thêm union types để cho phép truyền các props không phải của Ant Design
}

export default function InputTextField(props: propsOfInputTextField) {
  const { name, control, defaultValue, ...rest } = props;
  const defaultValueInput = defaultValue !== undefined ? defaultValue : '';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValueInput}
      render={({ field }) => (
        <Input {...rest} {...field} />
      )}
    />
  );
}
