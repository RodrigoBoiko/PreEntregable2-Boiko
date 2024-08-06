import fondo from "../assets/fondo.jpg"

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <img 
                src={fondo} className="h-full w-full object-cover"/>
        </div>
        <div className="absolute inset-0 -x-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20"></div>
    </section>
  )
}

export default HeroSection