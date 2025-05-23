export const ParentComponent=()=>{
    return(
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center item-center bg-gray-900 text-white`}>

            <h1>Component A</h1>
            <Childcomponent data="Reactt JS"/>
        </section>
    );
}
const Childcomponent=(props)=>{
return(
    <>
        <h1>Hello,I am component B</h1>
        <Grandcomponent data={props.data}/>
    </>
);
};

const Grandcomponent=(props)=>{
return(
    <>
        <h1>Hello,I am component c</h1>
        <GrandChildcomponent data={props.data}/>
    </>
);
};
const GrandChildcomponent=(props)=>{
return(
    <>
        <h1>Hello,I love {props.data}</h1>
    </>
);
};