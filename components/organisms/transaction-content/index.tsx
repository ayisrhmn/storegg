import React from 'react';
import NumberFormat from 'react-number-format';
import {getHistory} from '../../../services/member';
import ButtonTab from './button-tab';
import TableRow from './table-row';
import {toast} from 'react-toastify';

const TransactionContent = () => {
  const [total, setTotal] = React.useState(0) as any;
  const [data, setData] = React.useState([]) as any;
  const [tab, setTab] = React.useState('all');

  React.useEffect(() => {
    getData('all');

    return () => {};
  }, []);

  const getData = async (val: any) => {
    await getHistory(val).then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        setTotal(res.data.total);
        setData(res.data.data);
      }
    });
  };
  
  const onTabClick = (val: any) => {
    setTab(val);
    getData(val);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <NumberFormat
            displayType={'text'}
            prefix={'Rp '}
            thousandSeparator={'.'}
            decimalSeparator={','}
            value={total}
            className={'text-5xl fw-medium color-palette-1'}
          />
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                title={'All Trx'}
                active={tab === 'all'}
                onClick={() => onTabClick('all')}
              />
              <ButtonTab
                title={'Success'}
                active={tab === 'success'}
                onClick={() => onTabClick('success')}
              />
              <ButtonTab
                title={'Pending'}
                active={tab === 'pending'}
                onClick={() => onTabClick('pending')}
              />
              <ButtonTab
                title={'Failed'}
                active={tab === 'failed'}
                onClick={() => onTabClick('failed')}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {data.map((item: any, i: number) => (
                  <TableRow
                    key={i}
                    image={item.historyVoucherTopUp?.thumbnail}
                    game={item.historyVoucherTopUp?.gameName}
                    category={item.historyVoucherTopUp?.category}
                    item={`${item.historyVoucherTopUp?.coinQty} ${item.historyVoucherTopUp?.coinName}`}
                    price={item.value}
                    status={item.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionContent;
