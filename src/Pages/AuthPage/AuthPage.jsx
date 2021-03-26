import React from 'react';
import './AuthPage.scss';

//Components;
import SignInCard from '../../components/SignInCard/SignInCard'
import SignUpCard from '../../components/SignUpCard/SignUpCard'

export default function SignInPage() {
  return (
    <div className='auth' >
      <SignInCard />
      <SignUpCard />
    </div>
  )
}
