import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextFieldFieldset, {
  TextFieldFieldsetProps,
} from "../../textField/ui/TextFieldFieldset";
import { css } from "@emotion/css";

type Props = TextFieldFieldsetProps & {
  placeholderText?: string;
  selected: Date;
  setStartDate: (date: Date | null) => void;
};

const customCatePicker = css`
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
`;

const DatePickerFieldLabel = ({
  label,
  state,
  message,
  isRequire,
  selected,
  placeholderText,
  setStartDate,
}: Props) => {
  return (
    <TextFieldFieldset
      label={label}
      state={state}
      message={message}
      isRequire={isRequire}
    >
      <DatePicker
        showIcon
        selected={selected}
        onChange={(date) => setStartDate(date)}
        className={customCatePicker}
        placeholderText={placeholderText}
      />
    </TextFieldFieldset>
  );
};

export default DatePickerFieldLabel;
