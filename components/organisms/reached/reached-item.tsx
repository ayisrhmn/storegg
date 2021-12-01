import cx from 'classnames';

interface Props {
  index: number;
  dataLength: number;
  value: string;
  title: string;
  setMargin?: boolean;
}

const ReachedItem = (props: Props) => {
  const {index, dataLength, value, title, setMargin} = props;

  const classDiv = cx({
    'me-lg-35': true,
    'ms-lg-35': setMargin,
  });

  return (
    <>
      <div className={classDiv}>
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
          {value}
        </p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">
          {title}
        </p>
      </div>
      {index !== dataLength && (
        <>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
        </>
      )}
    </>
  );
};

export default ReachedItem;
