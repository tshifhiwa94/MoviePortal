// import React from 'react';
// import { LockOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
// import { Button, Form, Input } from 'antd';
// import { useUser } from './../../providers/user/index';
// import { IUser } from '../../interfaces';
// import styles from './Register.module.css';
// import Link from 'next/link';

// const RegisterPage = () => {
//   const { createUser } = useUser();

//   const onFinish = (values: IUser) => {
//     console.log('Received values of form: ', values);
//     createUser(values);
//   };

//   return (
//     <>
//       <div className={styles.registerPage}>
//         <Form name="register-form" className={styles.registerForm} onFinish={onFinish}>
//           <h1 className={styles.titleRegister}>REGISTER</h1>
//           <hr />
//           <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
//             <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Username" />
//           </Form.Item>

//           <Form.Item name="name" rules={[{ required: true, message: 'Please input your FirstName!' }]}>
//             <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Firstname" />
//           </Form.Item>

//           <Form.Item name="surname" rules={[{ required: true, message: 'Please input your LastName!' }]}>
//             <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Lastname" />
//           </Form.Item>

//           <Form.Item name="phone" rules={[{ required: true, message: 'Please input your Phone number!' }]}>
//             <Input prefix={<PhoneOutlined className={styles.siteFormItemIcon} />} placeholder="Phone number" />
//           </Form.Item>

//           <Form.Item name="idNumber" rules={[{ required: true, message: 'Please input your Id Number!' }]}>
//             <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Id Number" />
//           </Form.Item>

//           <Form.Item name="address" rules={[{ required: true, message: 'Please input your Home Address!' }]}>
//             <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="Home Address" />
//           </Form.Item>

//           <Form.Item name="emailAddress" rules={[{ required: true, message: 'Please input your Email Address!' }]}>
//             <Input prefix={<MailOutlined className={styles.siteFormItemIcon} />} placeholder="Email Address" />
//           </Form.Item>

//           <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
//             <Input prefix={<LockOutlined className={styles.siteFormItemIcon} />} type="password" placeholder="Password" />
//           </Form.Item>
//           <hr />
//           <Form.Item>
//             <div className={styles.register}>
//               <Button type="primary" htmlType="submit" className={styles.registerFormButton}>
//                 Register
//               </Button>

//             </div>
//           </Form.Item>
//           <Form.Item>
//             <div className={styles.register}>
//               <Link href='/Login'>   
//                 <Button type="primary" className={styles.registerFormButton}>
//                   Go to Login page
//                 </Button>
//               </Link>

//             </div>
//           </Form.Item>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default RegisterPage;
