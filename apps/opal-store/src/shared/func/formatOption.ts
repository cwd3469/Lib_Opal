import { OptionInterface } from "@/shared/ui/dropDownBox/interface";

type Props<T> = {
  list?: T[];
  name: keyof T;
  value: keyof T;
};

const formatOption = <T>(props: Props<T>): OptionInterface[] => {
  const { list, name, value } = props;

  if (!list) return [];
  const defaultOption = { name: "선택", value: "" };

  const format = list.map((el) => {
    return {
      name: el[name],
      value: el[value],
    };
  });

  return [defaultOption, ...format] as OptionInterface[];
};

export default formatOption;
