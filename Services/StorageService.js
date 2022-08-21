
export const getItemFromLocal=(key)=>{
    if(typeof window !== "undefined"){
        let item=localStorage.getItem(key);
        if(item){
            return item;
        }
        return null;
    }

    return null;
}