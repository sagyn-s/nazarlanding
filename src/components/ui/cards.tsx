"use client";
import React, { useRef } from "react";

export const Cards = () => {
    return (
      <div className="h-[30rem] md:h-[50rem] w-full flex items-center justify-center relative">
        <div className="h-[20rem] md:h-[30rem] relative w-full flex items-center justify-center">
        {/* <img
              src="./img4.png"
              className="rounded-md text-sm h-full w-full"
              alt="thumbnail"
            /> */}
        </div>
      </div>
    );
  };

// export const Card = ({
//   rotate,
//   scale,
//   translate,
//   users,
// }: {
//   rotate: any;
//   scale: any;
//   translate: any;
//   users: {
//     name: string;
//     designation: string;
//     image: string;
//     badge?: string;
//   }[];
// }) => {
//   return (
//     <motion.div
//       style={{
//         rotateX: rotate, // rotate in X-axis
//         scale,
//         boxShadow:
//           "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
//       }}
//       className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
//     >
//       <div className="bg-black h-full w-full rounded-2xl overflow-hidden">
//         {users.map((user, idx: number) => (
//           <motion.div
//             key={`user-${idx}`}
//             className="bg-white rounded-md cursor-pointer relative"
//             style={{ translateY: translate }}

//             whileHover={{
//               boxShadow:
//                 "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
//             }}
//           >
//             <img
//               src={user.image}
//               className="rounded-md text-sm h-full w-full"
//               alt="thumbnail"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };
