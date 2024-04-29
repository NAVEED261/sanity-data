

export default function PropsTest({name="ibrahim",cast="aqsa"}:{name?:string,cast?:string}){
    
    return(
      <div>
        <h1>{`hello ${name} ${cast}`}</h1>
        
      </div>
    )
  }