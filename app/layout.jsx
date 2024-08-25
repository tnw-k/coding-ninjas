import '@styles/globals.css'

export const metadata={
    title:'Coding Ninjas: KIIT Chapter',
    description:'',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='background'/>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
