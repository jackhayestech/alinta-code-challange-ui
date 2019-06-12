import React, { useState } from 'react';
import { Customer } from '../../../../assets/interfaces'
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
`;

const Header = styled.h2`
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 7px;
`;

const Label = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;

interface EditCustomer {
  selectedCustomer: number;
  customerData: Customer;
  toggle: Function;
  editCustomer: Function
}

const EditCustomer: React.FC<EditCustomer> = ({ selectedCustomer, customerData, toggle, editCustomer }) => {
  const [fn, setFn] = useState(customerData.firstName);
  const [ln, setLn] = useState(customerData.lastName);
  const [dob, setDob] = useState(new Date(customerData.dob));

  return (
    <Wrapper>
      <Header>
        Edit Customer
      </Header>
      <InputContainer>
        <Label>
          First name:&nbsp;
        </Label>
        <input
          type="text"
          value={fn}
          onChange={e => {
            setFn(e.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Label>
          Last name:&nbsp;
        </Label>
        <input
          type="text"
          value={ln}
          onChange={e => {
            setLn(e.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Label>
          Date of birth:&nbsp;
        </Label>
        <DatePicker
          selected={dob}
          dateFormat="yyyy-mm-dd"
          onChange={(date: any) => {
            setDob(date);
          }}
        />
      </InputContainer>
      <InputContainer>
        <button onClick={() => {
          const customer: Customer = {
            dob: dob,
            firstName: fn,
            lastName: ln,
          };
          editCustomer(selectedCustomer, customer);
          toggle();
        }}>
          Add Customer
        </button>
      </InputContainer>
    </Wrapper>
  );
};

export default EditCustomer;
