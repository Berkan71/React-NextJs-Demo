import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <div className="flex items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif"> <span className="underline decoration-black decoration-4">Medium</span> is a place to write, read, and connect</h1>
          <h2 className="">It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
        
        <img className="hidden md:inline-flex h-32 lg:h-full" src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
      </div>
    

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
      <Link href="deneme">
      <div className="border rounded-lg overflow-hidden group cursor-pointer">
      <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src="/static/images/img_5terre.jpg" alt="" />
      <div className="flex justify-between p-5 bg-white">
        <div>
          <p className="text-lg font-bold">Başlık</p>
          <p className="text-xs">Açıklama by Yapan</p>
        </div>
        <img className="w-12 h-12 rounded-full" src="/static/images/1.jpg" alt="" />
      </div>
    </div>  
      </Link>
    
    <div className="border rounded-lg overflow-hidden group cursor-pointer">
      <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src="/static/images/img_5terre.jpg" alt="" />
      <div className="flex justify-between p-5 bg-white">
        <div>
          <p className="text-lg font-bold">Başlık</p>
          <p className="text-xs">Açıklama by Yapan</p>
        </div>
        <img className="w-12 h-12 rounded-full" src="/static/images/1.jpg" alt="" />
      </div>
    </div>  
    <div className="border rounded-lg overflow-hidden group cursor-pointer">
      <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src="/static/images/img_5terre.jpg" alt="" />
      <div className="flex justify-between p-5 bg-white">
        <div>
          <p className="text-lg font-bold">Başlık</p>
          <p className="text-xs">Açıklama by Yapan</p>
        </div>
        <img className="w-12 h-12 rounded-full" src="/static/images/1.jpg" alt="" />
      </div>
    </div>  
    </div>
    

    </div>
  )
}
