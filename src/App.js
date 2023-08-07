import img1 from './Logo.png'
import img2 from './social-communication-3654546-3049735.png'
import ic1 from './icon/Icon.png'
import ic2 from './icon/Icon (1).png'
import ic3 from './icon/Icon happy client.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} /> <ul><li>Home</li><li>Service</li><li>Portfolio</li><li>Blog</li></ul>  <button>Contact us</button>
      </header>
    </div>
  );
}
export function Cont() {
  return (<>
    <div className='cont'>
      <div className='block'>
        <h1>Smart Web
          Design Agency</h1>
        <b>We will provide best web design and business devlopment
          service clients expectation and satisfaction guarantee.</b>
        <div><button>Free consultation</button></div>
      </div>
      <div><img src={img2} /></div>
    </div>

  </>

  )



}



export function Cont2() {
  return (<> <h1>We Provide the Best Web services</h1>
    <div className='block2'>
      <div className='bbl'><img src={ ic1} />
        <div className='txt'>5200+</div>
        <div className='txt2'>Projects completed
</div></div>
<div className='line'></div>
      <div className='bbl'><img src={ic2 } />
        <div className='txt'>500+</div>
        <div className='txt2'>Active clients</div></div>
        <div className='line'></div>

      <div className='bbl'><img src={ic3} />
        <div className='txt'>4500+</div>
        <div className='txt2'>Happy clients</div></div>


    </div>

  </>
  )

}
export default App;

