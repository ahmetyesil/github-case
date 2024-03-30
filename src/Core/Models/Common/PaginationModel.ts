export interface IPaginationModel {
    count: number;
    page: number;
    limit: number;
    totalPages: number;
    docs: any[] | any;
}

export class PaginationModel implements IPaginationModel {
    public count: number = 0;
    public page: number = 0;
    public limit: number = 12;
    public totalPages: number = 0;
    public docs: any[] | any = [];

    constructor(args: IPaginationModel) {
        Object.assign(this, args);
    }
}
