export type contactPoint = Readonly<{
    cpId : string;
    userId: string;
    ownerAlias: string;
    name: string;
    description: string;
    createdDate: number;
    modifiedDate: number;
}>;


export type message = Readonly<{
    createDate: number;
    from: string;
    content: string;
}>;


export type discussion = Readonly<{
    connectorId: string;
    connectorAlias:string;
    createdDate: number;
    modifiedDate: number;
    title: string;
}>;