"use client";

import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import ProSidebarLink from "./ProSidebarLink";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./style.css";
import { useRouter } from 'next/navigation'
import Home from "@/app/Pages/home/page";
import Settings from "@/app/Pages/settings/page";


const Dashboard = () => {
  return (
    <div  className="container-tela">
  
      <h1 > DASHBOARD PAGE</h1>
      <h3>Welcome User</h3>
      <p>Lorem ipsum dolor sit amet...</p>
     
    </div>
  );
};
function App() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [show, setShow] = useState('home');
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const router = useRouter()
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar collapsed={menuCollapse} className="app">
        <Menu>
          <MenuItem
            onClick={menuIconClick}
            className="menu1"
            icon={<MenuRoundedIcon />}
          >
            <h2> QUICKPAY</h2>
          </MenuItem>

          <MenuItem
          onClick={() => setShow('home')}
          // onClick={() => router.push('/home')}
            // component={<Link href="/home" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            Home
            
          </MenuItem>
          <MenuItem  icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem  icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem onClick={() => setShow('settings')} icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      {show === 'home' && <Home />}
      {show === 'settings' && <Settings />}
    </div>
  );
}

export default App;
