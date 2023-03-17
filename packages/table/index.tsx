import React, { ReactNode } from 'react';
import './index.scss';

interface Column {
  title: ReactNode;
  dataIndex: string;
  width?: number;
  minWidth?: string;
  maxWidth?: string;
  render?: (item: any, dataItem: DataItem) => ReactNode;
}

type DataItem = any;

export interface TableProps {
  columns: Column[];
  dataSource: DataItem[];
}

export default function Table(props: TableProps) {
  const { columns, dataSource } = props;
  return (
    <table className="mcxueTable" width="100%">
      <thead className="mcxueThead">
      <tr className="mcxueThreadTr">
        {
          columns.map((column, index) => (
            <td
              style={{
                minWidth: column.minWidth ?? 'auto',
                maxWidth: column.maxWidth ?? 'auto',
              }}
              width={column?.width ?? 'auto'}
              key={index}
            >{column.title}
            </td>
          ))
        }
      </tr>
      </thead>
      <tbody className="mcxueTbody">
      {
        dataSource.map((dataItem, index) => {
          return (
            <tr key={index} className="mcxueTbodyTr">
              {
                columns.map((column, index) => (
                  <td
                    key={index}>{column.render ? column.render(dataItem[column.dataIndex], dataItem) : dataItem[column.dataIndex]}</td>
                ))
              }
            </tr>
          );
        })
      }
      </tbody>
    </table>
  );
}
