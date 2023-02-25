import { TonConnectButton } from '@tonconnect/ui-react';
import React from 'react';
import { AppContainer, StyledApp } from '../../App';
import { Button, FlexBoxCol, FlexBoxRow } from '../../components/styled/styled';

import { useTonClient } from '../../hooks/useTonClient';

const JobLists = () => {
  const { client } = useTonClient();
  alert(client);
  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <h1>123</h1>
          <h1>123</h1>
          <FlexBoxRow>
            <TonConnectButton />
            <h1>123</h1>
            <h1>123</h1>
            <h1>123</h1>
          </FlexBoxRow>
        </FlexBoxCol>
        {/* <Button>123</Button> */}
      </AppContainer>
    </StyledApp>
  );
};

export default JobLists;
