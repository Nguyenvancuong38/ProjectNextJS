import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types/form';

interface propsOfInputPasswordField {
    name: string,
    control: Control<any>,
    defaultValue?: any,
    [key: string]: any,
}

export default function InputPasswordField (props: propsOfInputPasswordField) {
    const {name, control, defaultValue, ...propsOfInput} = props;
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({field}) => (
                <Input.Password {...propsOfInput} {...field} />
            )}
        />
    )
}