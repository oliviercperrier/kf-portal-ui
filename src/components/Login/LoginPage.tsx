import React from 'react';
import { RightOutlined } from '@ant-design/icons';

import ROUTES from 'common/routes';
import SplashPage from 'components/SplashPage';
import ButtonWithRouter from 'ui/Buttons/ButtonWithRouter';

import Login from './Login';

import './index.css';

type OwnProps = {
  stealth: boolean;
};

type Props = OwnProps;

const LoginPage = ({ stealth = false }: Props) => (
  <SplashPage
    stealth={stealth}
    mainTitle={'Kids First Data Resource Portal'}
    content={<Login />}
    footerContent={
      stealth ? null : (
        <div className={'text-align-center'}>
          {'New to Kids First Data Resource Portal? '}
          <ButtonWithRouter type={'link'} getLink={async () => ROUTES.join}>
            Join now
            <RightOutlined />
          </ButtonWithRouter>
        </div>
      )
    }
  />
);

export default LoginPage;
