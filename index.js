function App() {
    return (
      <div>
      <Quotabox />   
      </div>
    );
  }



  function Quotabox() {
    // const currentYear = new Date().getFullYear();
  
  const [quota, setquota]=React.useState({
  text:"",
  author:""
  });
  const [dataq, setdataq]=React.useState("true");
  const [theme,settheme]=React.useState("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
  document.body.style.backgroundColor = theme;
  
  React.useEffect(()=>{
  
  async function func() {
    const response=await fetch("https://type.fit/api/quotes");
    const data= await response.json();
    const rand=Math.floor(Math.random()*data.length);
    setquota(prev=>{
      return{
      text:data[rand].text,
      author:data[rand].author
      }
    }); 
  }
  func();
  }, [dataq]);
  
  function newQuota() {
  if(dataq==='true'){
    setdataq('false');
  }
  else{
    setdataq('true');
  }
  // theme.color=Math.floor(Math.random()*16777215).toString(16);

  settheme("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
  document.body.style.backgroundColor = theme;
  
  }
    return (
      <div>
      <div className="tweetbox" id="quote-box" style={{backgroundColor:'white', marginTop: '16rem', marginLeft:'22rem', width:'50%',height: '12rem'}}>
      <h1 style={{color:theme, paddingLeft:'0.5rem'}} > <i className="fa-solid fa-quote-left"></i> </h1>
      <p id="text" style={{ paddingLeft:'0.5rem'}}>{quota.text}</p>
      <p id="author" style={{ paddingLeft:'0.5rem'}}>-{quota.author}</p>
      <a href="twitter.com/intent/tweet" id="tweet-quote"  style={{color:theme, padding:'1rem', fontSize: '2rem'}}><i className="fa-brands fa-square-twitter"></i></a>
      <a href="https://www.tumblr.com/login" style={{color:theme, fontSize: '1.6rem'}}>  <i className="fa-brands fa-tumblr"></i></a>
      <button onClick={newQuota} id="new-quote" style={{position: "relative", left: "50%"}} >New quote</button>
      </div>  
      </div>
    );
  }
  



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div> 
       <App />
</div>
);

