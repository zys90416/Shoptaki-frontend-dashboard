//To add a new menu items just add title , as well as the path
import { message } from 'antd';
import 'antd/dist/antd.css';
function clickfuc(){
  localStorage.clear()
}
export const MenuItems = [
    {
      title: 'User Profile',
      path: '/userProfile',
      cName: 'dropdown-link'
    },
    {
      title: 'Apps Home',
      path: '/Home',
      cName: 'dropdown-link'
    },
    {title: 'Administrator apps',
      path: '/home/administrator_apps',
      cName: 'dropdown-link'
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      cName: 'dropdown-link'
    },
    {
      title: 'Add new company',
      path: '/administor/add_new_company',
      cName: 'dropdown-link'
    },
    {title: 'PlaceHolder2',
      path: '/home',
      cName: 'dropdown-link'
    },
    {title: 'Logout',
      path: '/login',
      cName: 'dropdown-link',
      clickFuc: clickfuc
    }
  ];