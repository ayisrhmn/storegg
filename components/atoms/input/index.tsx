export interface Props {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  readOnly?: boolean;
  value?: string;
  onChange?: (val: any) => void;
}

const Input = (props: Props) => {
  const {label, type, name, placeholder, readOnly, value, onChange} = props;

  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={name}
        name={name}
        aria-describedby={name}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
