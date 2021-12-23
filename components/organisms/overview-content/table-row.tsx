import NumberFormat from 'react-number-format';

interface Props {
  image: string;
  game: string;
  category: string;
  item: string;
  price: number;
  status: 'success' | 'pending' | 'failed';
}

const TableRow = (props: Props) => {
  const {image, game, category, item, price, status} = props;

  const URL_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`${URL_IMG}/${image}`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {game}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <NumberFormat
          displayType={'text'}
          prefix={'Rp '}
          thousandSeparator={'.'}
          decimalSeparator={','}
          value={price}
          className={'fw-medium text-start color-palette-1 m-0'}
        />
      </td>
      <td>
        {status === 'success' && (
          <div>
            <span className="float-start icon-status success"></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              Success
            </p>
          </div>
        )}

        {status === 'pending' && (
          <div>
            <span className="float-start icon-status pending"></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              Pending
            </p>
          </div>
        )}

        {status === 'failed' && (
          <div>
            <span className="float-start icon-status failed"></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              Failed
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
