import { Form } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from 'libs/schemas';
import InputTextField from '@components/common/InputTextField';
import InputPasswordField from '@components/common/InputPasswordField';
import { useForm } from 'react-hook-form';
import { formDataSignUp } from 'types/formData';
import ButtonCommon from '@components/common/Button';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import router from 'next/router';
import { ROUTE } from 'constants/router';
// import { signUp } from '@services/api-clients/auth';

const styleOfButton = {
    background: "red",
    borderColor: "yellow"
}

const SignUp: React.FC = () => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<formDataSignUp>({resolver: yupResolver(signUpSchema)})
    const handleLogin = async (value : any) => {
        // await signUp(value);
        router.push(ROUTE.SIGN_UP_SUCCESS);
        reset();
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
                    {!!errors.email?.message && <p className='text-[red]'>{errors.email?.message}</p>}
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
                    {!!errors.password?.message && <p className='text-[red]'>{errors.password?.message}</p>}
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
                    <InputPasswordField 
                        name='confirmPassword'
                        control={control}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                        className = "h-10"
                    />
                    {!!errors.confirmPassword?.message && <p className='text-[red]'>{errors.confirmPassword?.message}</p>}
                </Form.Item>
    
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <ButtonCommon type="primary" htmlType="submit" style={styleOfButton}>
                    Submit
                </ButtonCommon>
                </Form.Item>
            </Form>
        </div>
    );
}

export default SignUp;