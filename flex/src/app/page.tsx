import Navbar from "./(group)/component/navbar";



export default function Flex() {
  return (
    // cols means equal column (by default baraber ki jaga parents ki trf sa dana)
    //custome size cols [auto,150px,1fr] this is for balancing from parents elements. (baraber ki jga dana)
    // call span and row span koi div image ya text ek sa zada column ko gher la or merge hojai to osa call spean khta hain.ya child elements ma use hota ha
    // col-gape and row-gap means = and gap x--2and y-9 jub use hoga jub ki c ek site ka gape bara ya chota rkhna ho y-k zrea rows ma fasla hota ha or x-k zrea sa column ma fasla hota ha.
    // rows means baraber ki line and min-h-screen means minimum height screen and custome size rows-[auto,150px,1fr]means balacing rows from parents
    <div className="grid grid-row-4 gap-4">
      <div className="bg-yellow-100">Header</div>
      <div className="grid grid-cols-[200px,1fr] min-h-[400px] gap-4">
      <div className="bg-yellow-300">SideBar</div>
      <div className="bg-yellow-500">Main</div>
      </div>
      <div className="bg-yellow-700">Footer</div>
    <Navbar/>
    </div>
  );
}
