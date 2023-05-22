// import React, { useState, useEffect } from 'react';
// import { Button, Form, Input } from 'antd';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { useUser } from './../../providers/user/index'
// import { ILogin } from '../../interfaces';
// import styles from './Login.module.css';
// import Link from 'next/link';

// function Login() {
//   const [registerMode, setRegisterMode] = useState<boolean>(false);
//   const { loginUser } = useUser();

//   const onFinish = (values: ILogin) => {
//     console.log('Success:', values);
//     if (loginUser) {
//       loginUser(values);
//     }
//   };

//   return (
//     <div className={styles.loginPage}>
//       <Form name="basic" onFinish={onFinish} className={styles.loginForm}>
//         <h1 className={styles.titleLogin}>WELCOME TO ZMOVIES</h1>
//         <hr />
//         <Form.Item
//           name="userNameOrEmailAddress"
//           rules={[{ required: true, message: 'Please input your username!' }]}
//           className={styles.inputLogin}
//         >
//           <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//         </Form.Item>

//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//           className={styles.inputLogin}
//         >
//           <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
//         </Form.Item>
//         <hr />
//         <span>
//           <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//             <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: 10 }}>
//               Login
//             </Button>
//           </Form.Item>
//           <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//             <Link href="/Register"><Button type="primary" className="login-form-button" style={{ marginRight: 10 }}>
//               Register
//             </Button></Link>
            
//           </Form.Item>
//         </span>
//       </Form>
//     </div>
//   );
// }

// export default Login;
