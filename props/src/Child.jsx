function Child({name,name2,name3})
{
    return(
        <>
        <div className="div1">
       <h1>{name}</h1>
       </div>
       <div className="div2">
       <h1 className="tag">{name2}</h1>
       </div>
       <div className="div3">
           <h1 className="tag2">{name3}</h1>
           </div>
        </>
        );
    }
export default Child;