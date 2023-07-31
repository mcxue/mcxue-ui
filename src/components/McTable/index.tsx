import { Table, TableProps, Tooltip } from 'antd';
import { useMemo } from 'react';
import { TableComponents } from 'rc-table/lib/interface';
import ResizableTitle from '../../pages/uiUsage/UsageMcTable/ResizableTitle';

const CELL_PADDING_WIDTH = 16 * 2;

interface McTableProps<RecordType> extends TableProps<RecordType> {
  showOrderCol?: boolean;
  getActionsCol?: (record: RecordType, index: number) => JSX.Element,
  maxActionCount?: number;
  enableResizableCol?: boolean;
}

const McTable = <RecordType extends object = any>(props: McTableProps<RecordType>) => {
  const {
    showOrderCol,
    getActionsCol,
    maxActionCount,
    columns,
    enableResizableCol,
    ...restProps
  } = props;
  const newColumns = useMemo(() => {
    if (!columns) return [];
    // 调整 columns：
    // 1. 列宽超出文字省略表示，悬浮查看全部
    const ans = columns.map(column => {
      const render = (text: string) => {
        let cellWidth = 100;
        console.log(column.fixed);
        if (column.width) {
          cellWidth = parseInt(String(column.width));
        }
        return (
          <div style={{
            maxWidth: cellWidth - CELL_PADDING_WIDTH,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}>
            <Tooltip title={text}>{text}</Tooltip>
          </div>
        );
      };
      if (column?.render) {
        return {
          ...column,
          render: (text: any, record: RecordType, index: number) => {
            // @ts-ignore
            const result = column.render(text, record, index);
            if (typeof result === 'string') {
              return render(result);
            }
            return result;
          },

        };
      } else {
        return {
          ...column,
          render,
        };
      }
    });

    // 展示序号列
    if (showOrderCol) {
      ans.unshift({
        title: '序号',
        render: (text: any, record, index) => index + 1,
        align: 'center',
        key: 'order',
        width: 65,
        fixed: true,
      });
    }

    // 展示操作列
    if (getActionsCol && typeof getActionsCol === 'function') {
      ans.push({
        title: '操作',
        render: (text: any, record, index) => getActionsCol(record, index),
      });
    }
    return ans;
  }, [
    columns,
    showOrderCol,
    getActionsCol,
  ]);

  const tableComponents = useMemo<TableComponents<RecordType>>(() => {
    if (enableResizableCol) {
      console.log('这里执行了');
      return {
        header: {
          cell: ResizableTitle,
        },
      };
    }
    return {};
  }, [enableResizableCol]);


  return (
    <Table
      columns={newColumns}
      {...restProps}
      scroll={{
        x: 'max-content',
      }}
      components={tableComponents}
    />
  );
};

export default McTable;
