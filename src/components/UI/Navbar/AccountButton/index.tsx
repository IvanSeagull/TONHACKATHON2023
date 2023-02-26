import { Menu, Button, Text } from '@mantine/core';
import { useTonConnectUI } from '@tonconnect/ui-react';
// import {
//   IconSettings,
//   IconSearch,
//   IconPhoto,
//   IconMessageCircle,
//   IconTrash,
//   IconArrowsLeftRight,
// } from '@tabler/icons';

import WebApp from '@twa-dev/sdk';
import { Link } from 'react-router-dom';
import { useTonClient } from '../../../../hooks/useTonClient';
import { useTonConnect } from '../../../../hooks/useTonConnect';

function AccountButton() {
  const network = useTonClient();
  console.log(network);
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>EQDv...9WQ</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to="/jobs">
          <Menu.Item>job search</Menu.Item>
        </Link>

        <Link to="/profile">
          <Menu.Item>profile</Menu.Item>
        </Link>

        <Menu.Item>archive</Menu.Item>

        <Menu.Divider />
        <Menu.Item color="red">Sign out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default AccountButton;
