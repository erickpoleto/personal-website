import IRow from "./IRow";

export default interface IColumn{
    colStart?: number;
    colEnd?: number;
    smColStart?: number;
    smColEnd?: number;
    mdColStart?: number;
    mdColEnd?: number;

    rowStart?: number;
    rowEnd?: number;
    smRowStart?: number;
    smRowEnd?: number;
    mdRowStart?: number;
    mdRowEnd?: number;
}