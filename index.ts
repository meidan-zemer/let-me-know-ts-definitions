export type contactPoint = {
    cpId : Readonly<string>;
    userId: Readonly<string>;
    name: string;
    description: string;
    createDate: Readonly<number>;
    modifyDate: number;
};


export type message = Readonly<{
    createDate: number;
    from: string;
    content: string;
}>;


export type discussion = Readonly<{
    discussionId: string;
    creatorAlias: string;
    createdDate: number;
    title: string | undefined;
    nextPageToken: string | undefined
}>;