import { Form } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from 'libs/schemas';
import InputTextField from '@components/common/InputTextField';
import InputPasswordField from '@components/common/InputPasswordField';
import { useForm } from 'react-hook-form';
import { formDataSignUp } from 'types/formData';
import ButtonCommon from '@components/common/Button';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const styleOfButton = {
    background: "red",
    borderColor: "yellow"
}

const SignUp: React.FC = () => {
    const { handleSubmit, control } = useForm<formDataSignUp>({resolver: yupResolver(signUpSchema)})
    const handleLogin = (value : any) => {
        console.log('value', value);
    }

    return (
        <div className='bg-[white] w-full h-[100vh] flex justify-center items-center'>
            <form className='w-[400px]' onSubmit={handleSubmit(handleLogin)}>
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

                <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
                    <InputPasswordField 
                        name='confirmPassword'
                        control={control}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                        className = "h-10"
                    />
                </Form.Item>
    
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <ButtonCommon type="primary" htmlType="submit" style={styleOfButton}>
                    Submit
                </ButtonCommon>
                </Form.Item>
            </form>
        </div>
    );
}

export default SignUp;