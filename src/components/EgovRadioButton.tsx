import React from "react";

interface EgovRadioButtonProps {
  name: string;
  label: string;
  value: string;
  checkedValue: string;
  setter: (value: string) => void;
}

const EgovRadioButton: React.FC<EgovRadioButtonProps> = ({
  name,
  label,
  value,
  checkedValue,
  setter,
}) => {
  const checked = value === checkedValue;
  const toggledClassName = checked ? "f_rdo on" : "f_rdo";
  return (
    <label className={toggledClassName}>
      <input
        type="radio"
        name={name}
        value={value}
        title={label}
        checked={checked}
        onChange={() => setter(value)}
      />
      <em>{label}</em>
    </label>
  );
};

export default EgovRadioButton;
