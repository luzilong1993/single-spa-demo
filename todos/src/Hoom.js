import React, { useEffect, useState } from "react";

function useToolsModule() {
    const [toolsModule,setToolsModule] = useState();
    useEffect(() => {
        System.import('@study/tools').then(setToolsModule)
    },[])
    return toolsModule
}

const Home = () => {
    const toolsModule = useToolsModule();

    useEffect(() => {
        let subjection = null;
        if(toolsModule) {
            toolsModule.sayHello('@study/todos')
            subjection = toolsModule.sharedSubject.subscribe(console.log)
        }
        return () => subjection.unsubscribe()
    },[])


    return <div>Home Works <button onClick={() => toolsModule.sharedSubject.next('hello hello hello')}>button</button></div>
}

export default Home;