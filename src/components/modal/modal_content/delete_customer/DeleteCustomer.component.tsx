import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
`;

const Header = styled.h2`
  text-align: center;
  padding: 0px 10px;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 7px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 7px;
  margin: 7px;
`;

interface DeleteCustomer {
  toggle: Function;
  deleteCustomer: Function;
  custIndex: number;
}

const DeleteCustomer: React.FC<DeleteCustomer> = ({
  toggle,
  deleteCustomer,
  custIndex,
}) => {
  return (
    <Wrapper>
      <Header>Delete Customer</Header>
      <InputContainer>
        <div>Are you sure?</div>
      </InputContainer>
      <InputContainer>
        <Button
          onClick={() => {
            deleteCustomer(custIndex);
            toggle();
          }}
        >
          Yes
        </Button>
        <Button
          onClick={() => {
            toggle();
          }}
        >
          No
        </Button>
      </InputContainer>
    </Wrapper>
  );
};

export default DeleteCustomer;
