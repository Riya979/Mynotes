import img1 from '../../static/img/1.jpg'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'

export const Hook3:React.FC=()=>{
    let array=[img1,img2,img3]
    return<>Props:<br></br>
    <img height={'200px'} src={img1}/>
    <img height={'200px'} src={img2}/>
    <img height={'200px'} src={img3}/>

    <h1>Another way:</h1>
    <Img/>

    <h1>loop:</h1>
    {Img()}
    {
        array.map((ume)=>{
            return<Img/>
        })
    }

    <h1>Diiferent:</h1>
    {
        array.map((sh)=>{
            return<Img1 gift={sh}/>
        })
    }

    </>
}
let Img=()=>{
    return <img height={'200px'} src={img1}/>
  }
  let Img1:React.FC<{gift:any}>=(props)=>{
    return<img height={'200px'} src={props.gift}/>
  }
