export interface DirectionData {
    light: string,
    unitGrowth: number,
    unitReduce: number,
    stranded: number,
}

export interface SummaryState {
    eastStraight: DirectionData,
    eastLeft: DirectionData,
    westStraight: DirectionData,
    westLeft: DirectionData,
    southStraight: DirectionData,
    southLeft: DirectionData,
    northStraight: DirectionData,
    northLeft: DirectionData
}

export interface DataSetProps {
    dataChange: (value:number,direction:string,changeDataType:string) => void
}

export interface TabPaneContentProps {
    dataChange: (value:number,direction:string,changeDataType:string) => void,
    direction: string
}

export interface IntegerStepProps {
    dataChange: (value:number,direction:string,changeDataType:string) => void,
    direction: string,
    changeDataType: string
}

export interface DataTableProps {
    data: SummaryState
}

export interface DataTableProps {
    data: SummaryState
}
