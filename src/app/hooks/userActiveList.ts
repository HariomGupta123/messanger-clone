import {create} from 'zustand'
interface useActiveListProps{
    members:string[];
    add:(id:string)=>void;
    remove:(id:string)=>void;
    set:(ids:string[])=>void
}
const useActiveList=create<useActiveListProps>((set)=>({
    members:[],
    add:(id)=>set((state)=>({members:[...state.members,id]})),
    remove:(id)=>set((state)=>({members:state.members.filter((memberId)=>memberId.id !==id)})),
    set:(ids)=>set({members:ids})
}))
export default useActiveList;