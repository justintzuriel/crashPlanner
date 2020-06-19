//  <GridDropZone
//           className="dropzone sem1"
//           // id="sem1"
//           boxesPerRow={1}
//           rowHeight={70}
//         >
//           {items.modules[0].map((item) => (
//             <GridItem key={item.moduleCode}>
//               <div className="grid-item">
//                 <div className="grid-item-content">{item.moduleCode}</div>
//               </div>
//             </GridItem>
//           ))}
//         </GridDropZone>
//         <GridDropZone
//           className="dropzone sem2"
//           // id="sem2"
//           boxesPerRow={1}
//           rowHeight={70}
//         >

//         </GridDropZone>
//         <GridDropZone
//           className="dropzone sem3"
//           // id="sem3"
//           boxesPerRow={1}
//           rowHeight={70}
//         >
//           {items.modules[2].map((item) => (
//             <GridItem key={item.moduleCode}>
//               <div className="grid-item">
//                 <div className="grid-item-content">{item.moduleCode}</div>
//               </div>
//             </GridItem>
//           ))}
//         </GridDropZone>
//         <GridDropZone
//           className="dropzone sem4"
//           // id="sem4"
//           boxesPerRow={1}
//           rowHeight={70}
//         >
//           {items.modules[3].map((item) => (
//             <GridItem key={item.moduleCode}>
//               <div className="grid-item">
//                 <div className="grid-item-content">{item.moduleCode}</div>
//               </div>
//             </GridItem>
//           ))}
//         </GridDropZone>
//         <GridDropZone
//           className="dropzone sem5"
//           // id="sem5"
//           boxesPerRow={1}
//           rowHeight={70}
//         >
//           {items.modules[4].map((item) => (
//             <GridItem key={item.moduleCode}>
//               <div className="grid-item">
//                 <div className="grid-item-content">{item.moduleCode}</div>
//               </div>
//             </GridItem>
//           ))}
//         </GridDropZone>
//         <GridDropZone
//           className="dropzone sem6"
//           // id="sem6"
//           boxesPerRow={1}
//           rowHeight={70}
//         >
//           {items.modules[5].map((item) => (
//             <GridItem key={item.moduleCode}>
//               <div className="grid-item">
//                 <div className="grid-item-content">{item.moduleCode}</div>
//               </div>
//             </GridItem>
//           ))}
//         </GridDropZone>
//         <GridDropZone
//           className="dropzone sem7"
//           // id="sem7"
//           boxesPerRow={1}
//           rowHeight={70}
//         >
//           {items.modules[6].map((item) => (
//             <GridItem key={item.moduleCode}>
//               <div className="grid-item">
//                 <div className="grid-item-content">{item.moduleCode}</div>
//               </div>
//             </GridItem>
//           ))}
//         </GridDropZone>
//         <GridDropZone
//           className="dropzone sem8"
//           // id="sem8"
//           boxesPerRow={1}
//           rowHeight={70}
//         >
//           {items.modules[7].map((item) => (
//             <GridItem key={item.moduleCode}>
//               <div className="grid-item">
//                 <div className="grid-item-content">{item.moduleCode}</div>
//               </div>
//             </GridItem>
//           ))}
//         </GridDropZone>

////////////////////////////////////////////////////////////
{
  items.modules.map((item, index) => (
    <GridDropZone
      className="dropzone"
      key={index}
      id={item.moduleCode}
      boxesPerRow={1}
      rowHeight={70}
    >
      {items.modules.map((item) => (
        <GridItem key={item.moduleCode}>
          <div className="grid-item">
            <div className="grid-item-content">{item.moduleCode}</div>
          </div>
        </GridItem>
      ))}
    </GridDropZone>
  ));
}
