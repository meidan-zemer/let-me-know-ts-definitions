export type contactPoint = {
    cpId : Readonly<string>;
    userId: Readonly<string>;
    name: string;
    description: string;
    createdDate: Readonly<number>;
    modifiedDate: number;
};


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