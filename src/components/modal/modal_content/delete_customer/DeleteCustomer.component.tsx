import React from 'react';
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
  text-align: center;
`;

interface DeleteCustomer {
  toggle: Function;
  deleteCustomer: Function
}

const DeleteCustomer: React.FC<DeleteCustomer> = ({ toggle, deleteCustomer }) => {
  return (
    <Wrapper>
      <Header>
        Delete Customer
      </Header>
      <InputContainer>
        <Label>
          Are you sure?
        </Label>
      </InputContainer>
      <InputContainer>
        <button onClick={() => {
          deleteCustomer();
          toggle();
        }}>
          Yes
        </button>
        <button onClick={() => {
          toggle();
        }}>
          No
        </button>
      </InputContainer>
    </Wrapper>
  );
};

export default DeleteCustomer;
