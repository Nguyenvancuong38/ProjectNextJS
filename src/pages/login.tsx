import React, { useState } from 'react';
import { Form } from 'antd';
import route from 'next/router';
import { signIn } from 'next-auth/react';
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from 'libs/validation/schemas';
import InputTextField from '@components/common/InputTextField';
import InputPasswordField from '@components/common/InputPasswordField';
import { useForm } from 'react-hook-form';
import { formDataLogin } from 'types/formData';
import ButtonCommon from '@components/common/Button';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
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
            const res = await signIn("credentials", {
                redirect: false,
                email: value.email,
                password: value.password 
            });

            if(res?.error) {
                setErrMsg(res.error);
            } else {
                route.push(ROUTE.INDEX);
            }
        } catch (error: any) {
            const message = error.response?.data?.error || error.message;
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
                        prefix={<UserOutlined className="site-form-item-icon" rev={undefined} />}
                        placeholder="Email"
                        type="email"
                        className='h-10'
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
                    <InputPasswordField 
                        name='password'
                        control={control}
                        prefix={<LockOutlined className="site-form-item-icon" rev={undefined} />}
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