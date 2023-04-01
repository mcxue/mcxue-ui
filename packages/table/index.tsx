import React, { ReactNode } from 'react';
import './index.scss';

export interface TableColumnType<RecordType> {
  title: ReactNode;
  dataIndex: keyof RecordType;
  width?: number;
  minWidth?: string;
  maxWidth?: string;
  render?: (item: RecordType[keyof RecordType], dataItem: RecordType) => ReactNode;
}

export interface TableProps<RecordType> {
  columns: TableColumnType<RecordType>[];
  dataSource: RecordType[];
}

export default function Table<RecordType extends object = any>(props: TableProps<RecordType>) {
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
                columns.map((column, index) => {
                  return (
                    <td
                      key={index}>{column.render ? column.render(dataItem[column.dataIndex], dataItem) : dataItem[column.dataIndex] as ReactNode}</td>
                  );
                })
              }
            </tr>
          );
        })
      }
      </tbody>
    </table>
  );
}
