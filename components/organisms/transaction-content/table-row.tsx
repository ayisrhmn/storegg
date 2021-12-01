import Link from 'next/link';

interface Props {
  image: string;
  game: string;
  category: string;
  item: number;
  price: number;
  status: 'success' | 'pending' | 'failed';
}

const TableRow = (props: Props) => {
  const {image, game, category, item, price, status} = props;

  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
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
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">Rp {price}</p>
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
      <td>
        <Link href={'/member/transactions/detail'}>
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
