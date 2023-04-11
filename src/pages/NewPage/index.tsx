import React from 'react';

import {PageContainer, ProColumns, ProTable,Popconfirm } from "@ant-design/pro-components";




type DataType={
  id:number;
  username:string,
  sex:string,
  age:number;
  phone:string,
  address:string
}
const columns:ProColumns<DataType>[]=[
  {
    title:'id',
    dataIndex:'id',
  },
  {
    title:'用户名',
    dataIndex:'username'
  },
  {
    title:'性别',
    dataIndex:'sex',
    filters:true,
    onFilter:true,
    valueType:'select',
    valueEnum:{
     all:{text:'全部',status:'Default'},
      male:{text:'男',status:'Success'},
      female:{text:'女',status:'Error'}
    }
  },
  {
    title:'年龄',
    dataIndex:'age'
  },
  {
    title:'电话',
    dataIndex:'phone'
  },
  {
    title:'住址',
    dataIndex:'address'
  },{
    title:'操作',
    valueType:'option',
    key:'option',
    render:(text,record,_,action)=>[
      <a href={''}  target={'_blank'} rel="noopener noreferrer" key="view">查看</a>,

      <a key={'editable'}
         onClick={ ()=>{
         action?.saveEditable?.(record.id)}
         }>编辑</a>,
      <a key={'delete'}
         onClick={ ()=>{
           action?.saveEditable?.(record.id)}
         }>删除</a>
    ]
  }
]

const dataSource=[   {
  "id": 1,
  "username": "Alice",
  "sex": "female",
  "age": 25,
  "phone": "1234567890",
  "address": "123 Main St."
},
  {
    "id": 2,
    "username": "Bob",
    "sex": "male",
    "age": 30,
    "phone": "2345678901",
    "address": "456 Elm St."
  },
  {
    "id": 3,
    "username": "Charlie",
    "sex": "male",
    "age": 40,
    "phone": "3456789012",
    "address": "789 Oak St."
  },
  {
    "id": 4,
    "username": "David",
    "sex": "male",
    "age": 35,
    "phone": "4567890123",
    "address": "12 Pine St."
  },
  {
    "id": 5,
    "username": "Emily",
    "sex": "female",
    "age": 28,
    "phone": "5678901234",
    "address": "34 Maple St."
  },
  {
    "id": 6,
    "username": "Frank",
    "sex": "male",
    "age": 45,
    "phone": "6789012345",
    "address": "56 Cedar St."
  },
  {
    "id": 7,
    "username": "Gina",
    "sex": "female",
    "age": 22,
    "phone": "7890123456",
    "address": "78 Birch St."
  },
  {
    "id": 8,
    "username": "Henry",
    "sex": "male",
    "age": 29,
    "phone": "8901234567",
    "address": "90 Walnut St."
  },
  {
    "id": 9,
    "username": "Isabel",
    "sex": "female",
    "age": 31,
    "phone": "9012345678",
    "address": "23 Chestnut St."
  },
  {
    "id": 10,
    "username": "Jacob",
    "sex": "male",
    "age": 27,
    "phone": "0123456789",
    "address": "45 Oakwood Dr."
  },
  {
    "id": 11,
    "username": "Katie",
    "sex": "female",
    "age": 26,
    "phone": "4567890123",
    "address": "67 Cherry Ln."
  },
  {
    "id": 12,
    "username": "Liam",
    "sex": "male",
    "age": 38,
    "phone": "7890123456",
    "address": "89 Sycamore Ave."
  },
  {
    "id": 13,
    "username": "Molly",
    "sex": "female",
    "age": 24,
    "phone": "1234567890",
    "address": "12 Willow St."
  },
  {
    "id": 14,
    "username": "Nate",
    "sex": "male",
    "age": 33,
    "phone": "2345678901",
    "address": "34 Pinecone Ln."
  },
  {
    "id": 15,
    "username": "Olivia",
    "sex": "female",
    "age": 29,
    "phone": "3456789012",
    "address": "56 Birch Ave."
  },
  {
    "id": 16,
    "username": "Peter",
    "sex": "male",
    "age": 36,
    "phone": "4567890123",
    "address": "78 Oak St."
  },
  {
    "id": 17,
    "username": "Quinn",
    "sex": "female",
    "age": 27,
    "phone": "5678901234",
    "address": "90 Maple Dr."
  },
  {
    "id": 18,
    "username": "Ryan",
    "sex": "male",
    "age": 32,
    "phone": "6789012345",
    "address": "12 Cedar Rd."
  },
  {
    "id": 19,
    "username": "Sarah",
    "sex": "female",
    "age": 23,
    "phone": "7890123456",
    "address": "34 Pine St."
  }]

const confirm = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success('Click on Yes');
};

const cancel = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error('Click on No');
};

const popConfirm=()=>{
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
 />
}
const Index:React.FC = () => {

  return(
    <div>
      <PageContainer title={false}>
        <ProTable  columns={columns} dataSource={dataSource}  pagination={{showSizeChanger:true}}/>
      </PageContainer>
    </div>
  )
}

export default Index;
