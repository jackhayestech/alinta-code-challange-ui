import React, { useState } from 'react';
import { Customer } from '../../../../assets/interfaces';
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

interface AddCustomer {
  toggle: Function;
  addCustomer: Function;
}

const AddCustomer: React.FC<AddCustomer> = ({ toggle, addCustomer }) => {
  const [fn, setFn] = useState('');
  const [ln, setLn] = useState('');
  const [dob, setDob] = useState(new Date());

  return (
    <Wrapper>
      <Header>Add Customer</Header>
      <form>
        <InputContainer>
          <Label>First name:&nbsp;</Label>
          <input
            type="text"
            value={fn}
            required
            onChange={e => {
              setFn(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <Label>Last name:&nbsp;</Label>
          <input
            type="text"
            value={ln}
            required
            onChange={e => {
              setLn(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <Label>Date of birth:&nbsp;</Label>
          <DatePicker
            selected={dob}
            dateFormat="dd-mm-yyyy"
            onChange={(date: any) => {
              setDob(date);
            }}
          />
        </InputContainer>
        <ButtonContainer>
          <Button
            onSubmit={(e) => {
              e.preventDefault();
              const customer: Customer = {
                dob: dob,
                firstName: fn,
                lastName: ln,
              };
              addCustomer(customer);
              toggle();
            }}
          >
            Add Customer
          </Button>
        </ButtonContainer>
      </form>
    </Wrapper>
  );
};

export default AddCustomer;
