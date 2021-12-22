export interface Props {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const Input = (props: Props) => {
  const {label, type, name, placeholder} = props;

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
      />
    </>
  );
};

export default Input;
