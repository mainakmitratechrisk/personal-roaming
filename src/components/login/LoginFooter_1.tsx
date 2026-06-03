// import Image from "next/image";
// import React from "react";
// import { LoginFooterImage_1 } from "./data";

// const LoginFooter_1 = () => {
//   /* 4 copies → 3200px total; -50% translate = 1600px.
//      Viewport right edge at reset = 1600 + viewport_w ≤ 3040px < 3200px — no gap ever. */
//   const items = [
//     ...LoginFooterImage_1,
//   ];

//   return (
//     <div className="w-full pb-4 px-2">
//       <div className="px-4 flex items-center gap-x-10">
//         {/* LEFT: label */}
//         <div className="text-center lg:text-left flex items-center flex-col shrink-0">
//           <p className="text-login-footer font-semibold text-xs md:text-[12px] uppercase">
//             Our Airplane partners
//           </p>
//         </div>

//         {/* RIGHT: seamless marquee */}
//         <div className="overflow-hidden w-full">
//           <div className="flex w-max animate-scroll">
//             {items.map((partner, index) => (
//               <div key={index} className="flex items-center justify-center pr-10">
//                 <div className="relative w-[120px] h-10 xl:h-12">
//                   <Image
//                     src={partner.image}
//                     alt={partner.alt}
//                     fill
//                     sizes="20vw"
//                     className="object-contain"
//                     priority
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginFooter_1;


import Marquee from "react-fast-marquee";
import Image from "next/image";
import { LoginFooterImage_1 } from "./data";

const LoginFooter_1 = () => {
  return (
    <div className="w-full pb-4 px-2">
      <div className="px-4 flex items-center gap-x-10">
        {/* Label */}
        <div className="shrink-0">
          <p className="text-login-footer font-semibold text-xs md:text-[12px] uppercase">
            Our Airplane partners
          </p>
        </div>

        {/* Marquee */}
        <Marquee speed={50} gradient={false} loop={0} autoFill={true}>
          {LoginFooterImage_1.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center pl-10">
              <div className="relative w-[120px] h-10 xl:h-12">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  fill
                  sizes="20vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LoginFooter_1;