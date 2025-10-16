import EntretiensTable from "../EntretiensTable";

const EntretienPages = () => {
  return (
    <main className="w-full">
      <div className="flex flex-col gap-2 px-4 sm:px-2 lg:px-4 pt-4 w-full mb-2">
        <section className="w-full">
          <EntretiensTable />
        </section>
      </div>
    </main>
  );
};

export default EntretienPages;

// export function DefaultSkeleton() {
//   return (
//     <div className="max-w-full animate-pulse">
//       <Typography variant="h1" className="mb-4 h-3 ">
//         &nbsp;
//       </Typography>
//       <Typography
//         as="div"
//         variant="paragraph"
//         className="mb-2 h-2 w-72 rounded-full bg-gray-300"
//       >
//         &nbsp;
//       </Typography>
//       <Typography
//         as="div"
//         variant="paragraph"
//         className="mb-2 h-2 w-72 rounded-full bg-gray-300"
//       >
//         &nbsp;
//       </Typography>
//       <Typography
//         as="div"
//         variant="paragraph"
//         className="mb-2 h-2 w-72 rounded-full bg-gray-300"
//       >
//         &nbsp;
//       </Typography>
//       <Typography
//         as="div"
//         variant="paragraph"
//         className="mb-2 h-2 w-72 rounded-full bg-gray-300"
//       >
//         &nbsp;
//       </Typography>
//     </div>
//   );
// }
