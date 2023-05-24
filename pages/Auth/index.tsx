import React, { useState } from 'react';
import { LockOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useUser } from './../../providers/user/index';
import { ILogin, IUser } from '../../interfaces'
import styles from './AuthPage.module.css'
import Link from 'next/link';

const AuthPage = () => {
  const { createUser,loginUser } = useUser();
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const onFinishRegister = (values: IUser) => {
    console.log('Received values of register form: ', values);
    createUser(values);
  };

  const onFinishLogin = (values: ILogin) => {
    console.log('Received values of login form: ', values);
    loginUser( values);
  };

  const handleFormSwitch = () => {
    setIsRegisterForm(prevState => !prevState);
  };

  return (
    <div className={styles.authPage}>
      {isRegisterForm ? (
        <>
          <h1 className={styles.titleRegister}>REGISTER</h1>
          <Form name="register-form" className={styles.form} onFinish={onFinishRegister}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Username" />
          </Form.Item>

          <Form.Item name="name" rules={[{ required: true, message: 'Please input your FirstName!' }]}>
            <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Firstname" />
          </Form.Item>

          <Form.Item name="surname" rules={[{ required: true, message: 'Please input your LastName!' }]}>
            <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Lastname" />
          </Form.Item>

          <Form.Item name="phone" rules={[{ required: true, message: 'Please input your Phone number!' }]}>
            <Input prefix={<PhoneOutlined className={styles.siteFormItemIcon} />} placeholder="Phone number" />
          </Form.Item>

          <Form.Item name="idNumber" rules={[{ required: true, message: 'Please input your Id Number!' }]}>
            <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Id Number" />
          </Form.Item>

          <Form.Item name="address" rules={[{ required: true, message: 'Please input your Home Address!' }]}>
            <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Home Address" />
          </Form.Item>

          <Form.Item name="emailAddress" rules={[{ required: true, message: 'Please input your Email Address!' }]}>
            <Input prefix={<MailOutlined className={styles.siteFormItemIcon} />} placeholder="Email Address" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input prefix={<LockOutlined className={styles.siteFormItemIcon} />} type="password" placeholder="Password" />
          </Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submitButton}>
              Register
            </Button>
          </Form>
          <p className={styles.switchText}>
            Already have an account?{' '}
            <Link href="">
                <Button type="link" onClick={handleFormSwitch}>
                Login here
                </Button>
            </Link>
            
          </p>
        </>
      ) : (
        <>
        <h1 className={styles.title} id="LoginTitle">WELCOME TO ZMOVIES</h1>
         
          <Form name="login-form" className={styles.form} onFinish={onFinishLogin} id="loginform">
          <Form.Item
          name="userNameOrEmailAddress"
          rules={[{ required: true, message: 'Please input your username!' }]}
          className={styles.inputLogin}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          className={styles.inputLogin}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
        </Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submitButton}>
              Login
            </Button>
          </Form>
          <p className={styles.switchText}>
            Don't have an account?{' '}
            <Link href="/">
                <Button type="link" onClick={handleFormSwitch}>
                Register here
                </Button>
            </Link>
            
          </p>
        </>
      )}
    </div>
  );
};

export default AuthPage;
