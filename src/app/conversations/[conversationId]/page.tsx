interface IParams{
    conversationId:string;
}
const conversationId=async({params}:{params:IParams}){
    return(
        <div>
        Conversation Id!
        </div>
    )
}
export default conversationId;