import ScaledCanvas from './ScaledCanvas'
import { TechnicianFoundCard, UrgentRequestCard } from './FloatingCards'
import phone from '../assets/emergency/phone.png'
import arrowLeft from '../assets/emergency/arrow-left.svg'
import arrowRight from '../assets/emergency/arrow-right.svg'

/**
 * Figma 1:326 on its 751 × 662 canvas; both modals float (1:328, 1:350).
 * Offsets are each node's absolute x/y in that canvas — except Vector 4
 * (1:363), which is rotated 180°, so Figma reports its origin at the opposite
 * corner and its top-left is 541,155 rather than the 621,330 metadata shows.
 */
export default function EmergencyArt({ className = '' }) {
  return (
    <ScaledCanvas width={751} height={662} className={className}>
      <div className="absolute top-[51px] left-[247px] h-[560px] w-[257.741px] overflow-hidden rounded-[28px] border-[5.6px] border-blue-bg">
        <img
          src={phone}
          alt="Describing an urgent job in the JobHopper app"
          className="size-full max-w-none object-cover"
        />
      </div>

      <div className="absolute top-[330px] left-[123px] h-[176px] w-[85px]">
        <div className="absolute inset-[-0.57%_0_-0.57%_-8.66%]"><img src={arrowLeft} alt="" className="block size-full max-w-none" /></div>
      </div>
      <div className="absolute top-[155px] left-[541px] h-[175px] w-[80px] rotate-180">
        <div className="absolute inset-[-0.57%_0_-0.57%_-9.2%]"><img src={arrowRight} alt="" className="block size-full max-w-none" /></div>
      </div>

      <UrgentRequestCard style={{ left: 37, top: 131 }} />
      <TechnicianFoundCard style={{ left: 535, top: 376 }} />
    </ScaledCanvas>
  )
}
