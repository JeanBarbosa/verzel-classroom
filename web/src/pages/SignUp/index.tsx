import React from 'react';
import { Steps, Step } from "react-step-builder";
import UserForm from './UserForm';
import BankForm from './BankForm';

const SignUp: React.FC = () => {

  const config: any = {
    navigation: {
      location: "after" // or before
    }
  };

  const onHandleChange: any = (order: any) => {

  }

  return (
    <>
      <Steps config={config}>
        <Step component={UserForm} />
        <Step component={BankForm} beforeStepChange={onHandleChange(1)} />
      </Steps>
    </>
  );
};

export default SignUp;

