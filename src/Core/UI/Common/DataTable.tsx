import * as React from "react";
import {Checkbox, Pagination, PaginationProps} from "antd";
import {useEffect, useState} from "react";
interface IProps {
  data:any[];
  columns:any[];
  selectRowOpen?: boolean;
}
const DataTable = ({data,columns, selectRowOpen = false}:IProps) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);
  const isFieldExists = (array:any[],field:string) => {
    return array.some(item => item.hasOwnProperty(field))
  }

  const onRowSelect = (index:number,value:boolean) => {
     const d = list.map((dataItem:any,dataItemIndex:number)=> {
        if (index === dataItemIndex) {
          dataItem.checked = value;
        }
        return dataItem;
     });
      const selectedCount = d.filter((item)=>item.checked);
      if (selectedCount.length === d.length) {
          setSelectAll(true)
      } else {
          setSelectAll(false)
      }
     setList(d);
  }
    const onRowSelectAll = (value:boolean) => {
      setSelectAll(value);
        const d = list.map((dataItem:any,dataItemIndex:number)=> {
            dataItem.checked = value;
            return dataItem;
        });
        setList(d);
    }

    const onPaginationChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

  useEffect(() => {
      console.log('data', data);
      setList(data.map((item)=> {
        item.checked = false;
        return item;
      }))
  }, [data]);

  return (
    <>
        {
            list && list.length > 10 && <div className="mt-6 mb-6">
                <Pagination showQuickJumper defaultCurrent={2} total={500} size="small" onChange={onPaginationChange}/>
            </div>
        }
      <table className="w-full text-left">
        <thead>
        <tr className="border border-gray-200">
          {
            selectRowOpen &&  <th className="p-2 border-l border-l-gray-200 font-semibold text-xs.5 w-[80px]">
                    Select All
              </th>
          }
          {columns && columns.map((item:any)=> {
             return ( <>
               <th className="p-2 border-l border-l-gray-200 font-semibold text-xs.5" style={{width:item.width}}>{item.title}</th>
             </>)
          })}
        </tr>
        {
          isFieldExists(columns,'filter') && <tr className="border border-gray-200">
              {
                  selectRowOpen &&  <th className="p-2 border-l border-l-gray-200 font-semibold text-xs.5 text-center">
                     <Checkbox checked={selectAll} onChange={(e)=>onRowSelectAll(e.target.checked)}/>
                  </th>
              }
              {columns && columns.map((item:any)=> {
                return ( <>
                  <th className={`p-2 border-l border-l-gray-200 font-normal text-xs.5`}>
                    {item.filter}
                  </th>
                </>)
              })}
            </tr>
        }
        </thead>
        <tbody>
        {
          list && list.map((dataItem:any,index:number)=> {
            return (<tr className="border border-gray-200">
              {
                  selectRowOpen &&  <td className="p-1 border-l border-l-gray-200 font-semibold text-xs.5 text-center">
                    <Checkbox checked={dataItem.checked} onChange={(e)=> onRowSelect(index,e.target.checked)}/>
                  </td>
              }
              {columns && columns.map((colItem:any)=> {
                return ( <>
                  <td className="p-2 border-l border-l-gray-200 font-normal text-xs.5">
                      {
                          colItem.render ? colItem.render(dataItem) : dataItem[colItem.field]
                      }
                  </td>
                </>)
              })}
            </tr>)
            })
        }
        </tbody>
      </table>
        {

            list && list.length > 10 && <div className="mt-6 mb-6">
                <Pagination showQuickJumper defaultCurrent={2} total={500} size="small" onChange={onPaginationChange}/>
            </div>
        }
    </>
  );
};

export default DataTable;
