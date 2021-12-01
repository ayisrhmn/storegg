import cx from 'classnames';

interface Props {
  title: string;
  active: boolean;
}

const ButtonTab = (props: Props) => {
  const {title, active} = props;

  const classActive = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <a data-filter="*" href="#" className={classActive}>
      {title}
    </a>
  );
};

export default ButtonTab;
