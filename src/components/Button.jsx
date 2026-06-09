
const Button = ({text, id, className}) => {
  return (
    <a onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter')

        if(target && id){
            const offset = window.innerHeight * 0.15;

            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top,
                behavior:'smooth'
            });
        }
    }}
    className={`${className ?? ''} cta-wrapper`}>
        {/* <div className='cta-button group'>
            <div className='bg-circle'>
                <p className='text'> {text}</p>
            </div>
        </div> */}
        <div className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-zinc-900 px-4 py-4">
        <div className="absolute -right-10 top-1/2 h-[120%] w-[120%] origin-center -translate-y-1/2 rounded-full bg-slate-50 transition-all duration-500 group-hover:right-10 group-hover:size-10" />
            <p className="-translate-x-5 uppercase text-black transition-all duration-500 group-hover:-translate-x-5 group-hover:text-white md:text-lg xl:translate-x-0">
                {text}
            </p>
        </div>
    </a>
  )
}

export default Button