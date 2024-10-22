import React from "react";

interface Option {
  value: string;
  label: string;
}

interface EgovSelectProps {
  id: string;
  name: string;
  title: string;
  options: Option[];
  setValue: string;
  setter: (value: string) => void;
}

const EgovSelect: React.FC<EgovSelectProps> = ({
  id,
  name,
  title,
  options,
  setValue,
  setter,
}) => {
  console.log("egovSelect", id, name, title, options, setValue, setter);
  return (
    <select
      id={id}
      name={name}
      title={title}
      defaultValue={setValue}
      onChange={(e) => {
        console.log("select Change!! : ", e.target.value);
        setter(e.target.value);
      }}
    >
      {options.map((option, i) => {
        return (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default EgovSelect;
