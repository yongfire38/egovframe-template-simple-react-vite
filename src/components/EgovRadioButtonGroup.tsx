import EgovRadioButton from "@/components/EgovRadioButton";

interface RadioOption {
  label: string;
  value: string;
}

interface EgovRadioButtonGroupProps {
  name: string;
  radioGroup: RadioOption[];
  setValue: string;
  setter: (value: string) => void;
}

function EgovRadioButtonGroup({
  name,
  radioGroup,
  setValue,
  setter,
}: EgovRadioButtonGroupProps) {
  return (
    <>
      {radioGroup.map((radioOption, i) => {
        return (
          <EgovRadioButton
            key={i}
            name={name}
            label={radioOption.label}
            value={radioOption.value}
            checkedValue={setValue}
            setter={setter}
          />
        );
      })}
    </>
  );
}

export default EgovRadioButtonGroup;
