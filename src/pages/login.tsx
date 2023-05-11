import React, { useState } from 'react';
import { Form } from 'antd';
import route from 'next/router';
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from 'libs/validation/schemas';
import InputTextField from '@components/common/InputTextField';
import InputPasswordField from '@components/common/InputPasswordField';
import { useForm } from 'react-hook-form';
import { formDataLogin } from 'types/formData';
import ButtonCommon from '@components/common/Button';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { login } from '@services/api-clients/auth';
import { ROUTE } from 'constants/router';

const styleOfButton = {
    background: "red",
    borderColor: "yellow"
}

const Login: React.FC = () => {
    const { handleSubmit, control } = useForm<formDataLogin>({resolver: yupResolver(signInSchema)})
    const [errMsg, setErrMsg] = useState<any>(null);
    const handleLogin = async (value : any) => {
        try {
            const formData = {
                email: value.email,
                password: value.password 
            }
            await login(formData);
            route.push(ROUTE.INDEX);
        } catch (error: any) {
            const message = error.response?.data?.message || error.message;
            setErrMsg(message);            
        }
    }

    return (
        <div className='bg-[white] w-full h-[100vh] flex justify-center items-center'>
            <Form className='w-[400px]' onFinish={handleSubmit(handleLogin)}>
                <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
                    <InputTextField 
                        name="email"
                        control={control}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        type="email"
                        className='h-10'
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
                    <InputPasswordField 
                        name='password'
                        control={control}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        className = "h-10"
                    />
                </Form.Item>
    
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <ButtonCommon type="primary" htmlType="submit" style={styleOfButton}>
                    Submit
                </ButtonCommon>
                
                </Form.Item>

                <Form.Item>
                {!!errMsg && <p className='text-[red]'>{errMsg}</p>}
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;