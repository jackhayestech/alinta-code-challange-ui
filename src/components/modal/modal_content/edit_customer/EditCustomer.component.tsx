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

const ButtonContainer = styled.div`
  display: flex;
  padding: 7px;
  justify-content: right;
`;

const Label = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 7px;
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
          onChange={(date: any) => {
            setDob(date);
          }}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={() => {
          const customer: Customer = {
            dob: dob,
            firstName: fn,
            lastName: ln,
          };
          editCustomer(selectedCustomer, customer);
          toggle();
        }}>
          Edit Customer
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default EditCustomer;
