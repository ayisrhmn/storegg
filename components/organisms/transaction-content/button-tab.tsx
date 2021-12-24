import cx from 'classnames';

interface Props {
  title: string;
  active: boolean;
  onClick: () => void;
}

const ButtonTab = (props: Props) => {
  const {title, active, onClick} = props;

  const classActive = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <button onClick={onClick} className={classActive}>
      {title}
    </button>
  );
};

export default ButtonTab;
