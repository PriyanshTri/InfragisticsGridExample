
import { useState, useRef, useEffect } from 'react';
import { DataGridSelectionMode, EditModeClickAction, EditModeType, HeaderClickAction, IgrDataGrid, IgrDataGridModule, IgrGridCellPosition, IgrNumericColumn, IgrTextColumn } from 'igniteui-react-grids';
IgrDataGridModule.register();
 const ParentComponent = () => {
  const [activeCell, setActiveCell] = useState<IgrGridCellPosition>();
  const [grid1Data, setGrid1Data] = useState<any[]>(
    [
      {
        Id: '101',
        Name: 'Abc',
        Street: 'Street1',
        City: 'City1',
        Birthday: '2021-09-01T08:44:06',
        Salary: '10000',
      },
      {
        Id: '102',
        Name: 'Abc',
        Street: 'Street2',
        City: 'City2',
        Birthday: '2021-09-01T08:44:06',
        Salary: '50000'
      },
      {
        Id: '103',
        Name: 'Abc',
        Street: 'Street3',
        City: 'City3',
        Birthday: '2021-09-01T08:44:06',
        Salary: '15000'
      },
      {
        Id: '104',
        Name: 'Abc',
        Street: 'Street4',
        City: 'City4',
        Birthday: '2021-09-01T08:44:06',
        Salary: '17000',
      },
      {
        Id: '105',
        Name: 'Abc',
        Street: 'Street5',
        City: 'City5',
        Birthday: '2021-09-01T08:44:06',
        Salary: '10000',
      },
    ]
  );
  const grid1Ref = useRef<any>();

  const onGrid1Ref = (grid: any) => {
    if (!grid) {
      return;
    }
  
    grid1Ref.current = grid;
    console.log(grid1Ref.current.actualDataSource);
  };

  const onClick = () => {
    setGrid1Data(
      [...grid1Data,
        ...[{
          Street: 'Street5',
          City: 'City5',
          Name: 'Abc',
          Birthday: '2021-09-01T08:44:06',
          Salary: 10000,
          Id: grid1Data.length+2,
        }]
      ]
    )
  }
  useEffect(()=>{
    setTimeout(()=>{
      if(grid1Ref.current){
        const cellPosition = new IgrGridCellPosition();
        cellPosition.rowIndex = 2;
        cellPosition.columnUniqueKey = 'Name';
        setActiveCell(cellPosition)
      }
      
    },2000)
  },[grid1Ref.current])
 console.log(activeCell,"jjghgf")
  return (
    <>
      <IgrDataGrid
        key={'12221'}
        ref={onGrid1Ref}
        dataSource={grid1Data}
        height="calc(100% - 40px)"
        width="100%"
        defaultColumnMinWidth={120}
        autoGenerateColumns="false"
        editMode={EditModeType.Cell}
        headerClickAction={HeaderClickAction.None}
        editModeClickAction={EditModeClickAction.SingleClick}
        useAccessibility={'true'}
        activeCell={activeCell ? activeCell : undefined}
      >
        <IgrTextColumn field="Id" headerText="ID" width="*>150" isEditable key={"Id"} isColumnOptionsEnabled={false}/>
        <IgrTextColumn field="City" headerText="City" width="*>150" isEditable key={"City"} isColumnOptionsEnabled={false}/>
        <IgrTextColumn field="Name" headerText="Name" width="*>150" isEditable={false} key={"Bame"} isColumnOptionsEnabled={false}/>
        <IgrNumericColumn field="Salary" headerText="Salary" width="*>120" isEditable={false} key={"QQId"} isColumnOptionsEnabled={false}/>
      </IgrDataGrid>

      <button onClick={onClick}>Add New Row</button>
      </>
  );
};
export default ParentComponent;
