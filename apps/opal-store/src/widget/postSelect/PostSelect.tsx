import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import Button from "../../shared/styles/ui/Button";
import styled from "@emotion/styled";
import { DefaultTextField } from "../textField/ui/DefaultTextField";
import TextFieldFieldset, {
  TextFieldFieldsetProps,
} from "../textField/ui/TextFieldFieldset";

type Props = TextFieldFieldsetProps & {
  placeholderText?: string;
  onSelect: (value: string) => void;
  value: string;
};

const PostSelect = ({
  onSelect,
  value,
  label,
  isRequire,
  message,
  state,
  placeholderText,
}: Props) => {
  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    onSelect(fullAddress);
  };
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <TextFieldFieldset
      label={label}
      isRequire={isRequire}
      message={message}
      state={state}
    >
      <Wrapper>
        <DefaultTextField
          inputWidth={"calc(100% - 74px)"}
          inputSize="sm"
          defaultValue={value}
          placeholder={placeholderText}
          readOnly
        />
        <Button
          onClick={handleClick}
          type="button"
          variant="outlined"
          size="sm"
          palette="gray"
          btnWidth="70px"
        >
          주소찾기
        </Button>
      </Wrapper>
    </TextFieldFieldset>
  );
};

export default PostSelect;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;
