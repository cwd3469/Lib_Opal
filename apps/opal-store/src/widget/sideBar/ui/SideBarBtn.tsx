import styled from "@emotion/styled";
import { Menu } from "../config/getMenu";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type Props = Menu;

const SideBarLinkBtn = ({ path, name, icon: IconComponent }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => {
    if (path) navigate(path);
  };

  const hasActive = location.pathname === path;

  return (
    <SideBtn
      onClick={handleOnClick}
      className={hasActive ? `active` : undefined}
    >
      {IconComponent ? <IconComponent size={15} /> : null}
      {name}
    </SideBtn>
  );
};

const SideBarToggle = ({ name, icon: IconComponent, submenu }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleToggleSubMenu = () => setOpen((prev) => !prev);
  const submenuList = submenu?.map((el) => el.path);

  const subActive = submenuList?.includes(location.pathname);

  const hasActive = subActive ? subActive : open;

  useEffect(() => {
    if (!subActive) {
      setOpen(false);
    }
  }, [subActive]);

  return (
    <ToggleMenu className={hasActive ? `active` : undefined}>
      <SideBtn
        onClick={handleToggleSubMenu}
        className={open ? `active` : undefined}
      >
        {IconComponent ? <IconComponent size={15} /> : null}
        {name}
      </SideBtn>
      {hasActive && (
        <SubMenu>
          {submenu?.map((el) => <SideBarBtn {...el} key={el.path} />)}
        </SubMenu>
      )}
    </ToggleMenu>
  );
};

const SideBarBtn = (props: Props) => {
  if (props.path) {
    return <SideBarLinkBtn {...props} />;
  }
  return <SideBarToggle {...props} />;
};

export default SideBarBtn;

const SideBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) => props.theme.typography.B8_Body_14_R}
  color: ${(props) => props.theme.palette.gray[700]};

  padding: ${(props) => props.theme.padding.md};
  background-color: transparent;
  cursor: pointer;
  border: 0px;
  border-radius: ${(props) => props.theme.radius.xl};

  :hover {
    background-color: ${(props) => props.theme.palette.gray["200"]};
    ${(props) => props.theme.typography.B7_Body_14_M}
    color: ${(props) => props.theme.palette.black["900"]};
  }
  &.active {
    background-color: ${(props) => props.theme.palette.gray["200"]};
    ${(props) => props.theme.typography.B7_Body_14_M}
    color: ${(props) => props.theme.palette.black["900"]};
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

const ToggleMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  &.active {
    background-color: ${(props) => props.theme.palette.gray["200"]};
    ${(props) => props.theme.typography.B7_Body_14_M}
    color: ${(props) => props.theme.palette.black["900"]};
    border-radius: ${(props) => props.theme.radius.xl};
  }
`;
