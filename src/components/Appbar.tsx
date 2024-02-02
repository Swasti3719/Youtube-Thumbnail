import { SearchBar } from "./SearchBar"

export const Appbar = ()=>{
    return <div className = "flex justify-between">
        <div className = "p-3">Youtube</div>
        <div>
            <SearchBar/>
        </div>
        <div>Sign in</div>
    </div>
}