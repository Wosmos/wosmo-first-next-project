import Feed from "@components/Feed"

const Home = () => (
    // 
    //   
    //     Discover & Share
    //     <br className="max-md:hidden" />
        
    //   </h1>
    
  
  <section className="w-full flex-center flex-col">
    
   <h1 className="head_text text-center">
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts </span>
    </h1>

    <p className="desc text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam corrupti nostrum debitis placeat molestias fuga optio, maxime corporis nesciunt maiores.</p>
    
    < feed/>
    </section>

  )


export default Home



// const Home = () => (
//   <section className='w-full flex-center flex-col'>
//     <h1 className='head_text text-center'>
//       Discover & Share
//       <br className='max-md:hidden' />
//       <span className='orange_gradient text-center'> AI-Powered Prompts</span>
//     </h1>
//     <p className='desc text-center'>
//       Promptopia is an open-source AI prompting tool for modern world to
//       discover, create and share creative prompts
//     </p>

//     <Feed />
//   </section>
// );

