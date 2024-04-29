
import PropsTest from "../../../component/propsTest"
export default function Home(){
  return(
    <div>
      <h1>Props</h1>
      <PropsTest name="fatima zehra" cast="and Umaima gul"/>
      <br/>
      <PropsTest name="aqsa naveed" cast="and Umaima gul"/>
      <PropsTest name="hafiz naveed" cast="and aqsa naveed"/>
      <br/>
      <PropsTest name="fatima zehra" cast="hafiz naveed "/>
    </div>
  )
}