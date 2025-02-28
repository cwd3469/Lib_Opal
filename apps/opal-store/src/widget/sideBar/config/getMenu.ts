import { IconType } from "react-icons";
import { Permissions } from "../../../pages/main/config/interface";
import Path from "../../../shared/config/path";

import { IoMan } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { FaCampground } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";

export interface Menu {
  name: string;
  path?: string;
  icon?: IconType;
  permissions?: Permissions;
  submenu?: Menu[];
}

const getMenu: Menu[] = [
  {
    name: "전체 공지",
    path: Path.DASHBOARD,
    icon: MdDashboardCustomize,
    permissions: "EDUCATORS",
  },
  {
    name: "회원",
    icon: IoMan,
    submenu: [
      {
        name: "회원관리",
        path: Path.MEMBERSHIP,
        icon: CiViewList,
      },
      {
        name: "셀 관리",
        path: Path.SHELLll,
        icon: MdGroup,
        permissions: "EDUCATORS",
      },
    ],
  },
  {
    name: "수련회",
    icon: FaCampground,
    path: Path.RETREAT,
  },
];

export default getMenu;
