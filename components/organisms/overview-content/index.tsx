import React from 'react';
import {toast} from 'react-toastify';
import {getMemberOverview} from '../../../services/member';
import Category from './category';
import TableRow from './table-row';

const OverviewContent = () => {
  const [data, setData] = React.useState([]) as any;
  const [count, setCount] = React.useState([]) as any;

  React.useEffect(() => {
    getData();

    return () => {};
  }, []);

  const getData = async () => {
    await getMemberOverview().then((res) => {
      if (res.error) {
        toast.error(res.message);
      } else {
        setData(res.data.data);
        setCount(res.data.count);
      }
    });
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item: any, i: number) => (
                <Category
                  key={i}
                  icon={
                    item.name === 'Mobile'
                      ? '/icon/ic-mobile.svg'
                      : '/icon/ic-desktop.svg'
                  }
                  total={item.value}>
                  Game
                  <br />
                  {item.name}
                </Category>
              ))}
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, i: number) => (
                  <TableRow
                    key={i}
                    image={item.historyVoucherTopUp?.thumbnail}
                    game={item.historyVoucherTopUp?.gameName}
                    category={item.historyVoucherTopUp?.Category}
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

export default OverviewContent;
