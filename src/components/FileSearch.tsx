import { keyboardState } from "@testing-library/user-event/dist/keyboard/types";
import { useEffect, useState } from "react"


interface FileSearchProps {
    title:string,
    onFileSearch?:{}
}
const FileSearch = (props: FileSearchProps)=> {

    const [inputActive, setInputActive] = useState(false)

    const [value, setValue] = useState('');
    useEffect(()=> {

        const handleInputEvent = (event: KeyboardEvent)=> {

            const {keyCode} = event;

            // if(keyCode=== 13 && inputActive) {
            //     onFile
            // }

        }

    }
    )

    return(
        <div className="alert alert-primary">
            {!inputActive && 
            <div className="d-flex justify-content-between align-self-center">
                <span>{props.title}</span>
                <button type="button" className="btn btn-primary" onClick={()=> {
                    setInputActive(true)
                }}>
                    搜索
                </button>
            </div>
            }
            {inputActive && 
            <div className="d-flex justify-content-between align-self-center">
                <input value={value} className="form-control" onChange={((e)=>{setValue(e.target.value)})}/>
                <button type="button" className="btn btn-primary" onClick={()=> {
                    setInputActive(false)
                }}>
                    关闭
                </button>
            </div>
            }
        </div>
    )

}

export default FileSearch;