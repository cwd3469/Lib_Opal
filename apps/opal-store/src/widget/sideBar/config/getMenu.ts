import { IconType } from "react-icons";
import { Permissions } from "../../../pages/main/config/interface";
import { IoMan } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { FaCampground } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";

export interface Menu {
  name: string;
  path?: string;
  icon?: IconType;
  permissions?: Permissions;
  submenu?: Menu[];
}

const getMenu: Menu[] = [
  {
    name: "회원관리",
    path: "/membership",
    icon: IoMan,
  },
  {
    name: "전체 공지",
    path: "/dashboard",
    icon: MdDashboardCustomize,
    permissions: "EDUCATORS",
  },
  {
    name: "셀 관리",
    path: "/shell",
    icon: MdGroup,
    permissions: "EDUCATORS",
  },
  {
    name: "수련회 참석자 관리",
    icon: FaCampground,
    submenu: [
      {
        name: "수련회 참석자 명단",
        path: "/retreat/participants-list",
        icon: FaListUl,
      },
    ],
  },
];

export default getMenu;
