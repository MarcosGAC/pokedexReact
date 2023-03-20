import bgLoader from '../../assets/bgloader.png'

export default function Loading(){
    return(
<div className='w-full h-full opacity-40 '>
    <img className='w-full h-full' src={bgLoader} alt="background loader" />
</div>
    )
}