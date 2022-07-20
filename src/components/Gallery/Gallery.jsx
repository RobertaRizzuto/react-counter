import imglinks from '../../assets/imglinks'
import './index.css';

const Gallery = () => {const x=0
  return (
    <div className="Gallery">
     
        {
          imglinks.map(imglink => (
           
              <img key={imglink.id} src={imglink.url + '?' + imglink.id} alt="image"/>
          
          ))
        }
     
    </div>
  )
}

export default Gallery;