import { createContext, ReactNode, useCallback, useState } from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import { MdOutlineError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import DoubleBtnModal from "../../modal/ui/DoubleBtnModal";

interface Alert {
  type: "success" | "warning" | "error";
  title: string;
  content?: string;
  rightBtnOnClick?: () => void;
}

interface AlertContextProps {
  showAlert: (params: Alert) => void;
}

interface Props {
  children: ReactNode;
}

export const AlertContext = createContext<AlertContextProps | undefined>(
  undefined
);

export const AlertProvider = ({ children }: Props) => {
  const { palette } = useTheme();

  const [alert, setAlert] = useState<Alert | null>(null);

  const showAlert = useCallback((params: Alert) => setAlert(params), []);

  const handleCloseAlert = useCallback(() => setAlert(null), []);

  const handleRightBtnOnClick = async () => {
    if (alert && alert.rightBtnOnClick) await alert.rightBtnOnClick();
    handleCloseAlert();
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <DoubleBtnModal
          header={
            <AlertHeader>
              {alert.type === "error" ? (
                <MdOutlineError size="80" color={palette.error["300"]} />
              ) : alert.type === "success" ? (
                <PiCheckCircleFill size="80" color={palette.success["400"]} />
              ) : (
                <IoIosWarning size="80" color={palette.warning["300"]} />
              )}
            </AlertHeader>
          }
          body={
            <AlertContent>
              <AlertTitle>{alert.title}</AlertTitle>
              {alert.content && <AlertSubTitle>{alert.content}</AlertSubTitle>}
            </AlertContent>
          }
          palette={alert.type}
          onClose={handleCloseAlert}
          rightBtnOnClick={handleRightBtnOnClick}
        />
      )}
    </AlertContext.Provider>
  );
};

const AlertHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 0;
`;

const AlertTitle = styled.div`
  display: flex;
  justify-content: center;
  ${(props) => props.theme.typography.T2_Title_20_B}
`;

const AlertSubTitle = styled.div`
  display: flex;
  justify-content: center;
  ${(props) => props.theme.typography.B8_Body_14_R}
  color: ${(props) => props.theme.palette.gray[600]};
`;
