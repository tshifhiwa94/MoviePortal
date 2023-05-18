import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';

import { LockOutlined, UserOutlined} from '@ant-design/icons';
import { ILogin } from './../../providers/user/context';
import { useUser } from './../../providers/user/index'

function Login() {
  const [registerMode, setRegisterMode] = useState<boolean>(false);
  const { loginUser} = useUser();



  const onFinish = (values: ILogin) => {
    console.log('Success:', values);
    if(loginUser){
      loginUser(values);
    }
  
  };


  return (
    <div className='login-page'>

        <Form
          name="basic"
          onFinish={onFinish}
          className="login-form"
        >
          <h1 className="titleLogin">WELCOME TO ZMOVIES</h1>
          <hr/>
          
          <Form.Item
            name="userNameOrEmailAddress"
            rules={[{ required: true, message: 'Please input your username!' }]}
            className='inputLogin'
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

          <Form.Item
           
            
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className='inputLogin'
          >
            
            <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>
            <hr/>
          <span>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: 10}}>
              Login
            </Button>
          </Form.Item>
 
            <p className='para'>New to ZMovies? &nbsp;
                <a href="#" onClick={() => setRegisterMode(true)} className='aLogin'>
              Register now!
            </a>
            </p>
            
          </span>
        </Form>
       
    </div>
  );
}

export default Login;