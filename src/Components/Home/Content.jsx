// import React, { Component } from "react";
// import bank from "../SamplePlan+ModuleBank/ModuleBankFunction";
// import SamplePlan from "../SamplePlan+ModuleBank/SamplePlan";
// import styled from "styled-components";
// import "./Components.css";

// const ContentWrapper = styled.div`
//   width: 1500px;
//   display: inline;
//   border-style: solid;
//   border-color: red;
//   align: center;
//   position: relative;
// //   overflow: hidden;
// //   ::-webkit-scrollbar {
// //     display: none;
// //   }
// `;

// class Content extends Component(){
//     constructor(props){
//         super(props);
//         this.state = {
//             bank: props.data.filter(bank.FilterAlgo),
//             sem1: props.data.filter(SamplePlan.AlgoS1),
//             sem2: props.data.filter(SamplePlan.AlgoS2),
//             sem3: props.data.filter(SamplePlan.AlgoS3),
//             sem4: props.data.filter(SamplePlan.AlgoS4),
//             sem5: props.data.filter(SamplePlan.AlgoS5),
//             sem6: props.data.filter(SamplePlan.AlgoS6),
//             sem7: props.data.filter(SamplePlan.AlgoS7),
//             sem8: props.data.filter(SamplePlan.AlgoS8),
//             selectedField: "Algo",
//             focusArea: "Algo",
//         }
//     }

//     render(){

//         return();
//     }
// }

// function Content(props) {

//     const handleField = (event) => {
//         switch (event.target.value) {
//             case "Algo":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterAlgo)
//                 })
//                 break;
//             case "AI":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterAI)
//                 })
//                 break;
//             case "Graphics":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterGraphics)
//                 })
//                 break;
//             case "Security":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterSecurity)
//                 })
//                 break;
//             case "DB":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterDB)
//                 })
//                 break;
//             case "Media":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterMedia)
//                 })
//                 break;
//             case "Network":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterNetwork)
//                 })
//                 break;
//             case "Parallel":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterParallel)
//                 })
//                 break;
//             case "Languages":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterLanguages)
//                 })
//                 break;
//             case "SE":
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties.filter(bank.FilterSE)
//                 })
//                 break;
//             default:
//                 setItems({
//                     ...items,
//                     selectedField: event.target.value,
//                     sem0: properties,
//                 })
//                 break;
//         }
//     };

//     const handlePlan = (event) => {
//         switch (event.target.value) {
//             case "Algo":
//                 return setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.AlgoS1),
//                     sem2: properties.filter(SamplePlan.AlgoS2),
//                     sem3: properties.filter(SamplePlan.AlgoS3),
//                     sem4: properties.filter(SamplePlan.AlgoS4),
//                     sem5: properties.filter(SamplePlan.AlgoS5),
//                     sem6: properties.filter(SamplePlan.AlgoS6),
//                     sem7: properties.filter(SamplePlan.AlgoS7),
//                     sem8: properties.filter(SamplePlan.AlgoS8),

//                 });
//                 break;
//             case "AI":
//                 return setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.AIS1),
//                     sem2: properties.filter(SamplePlan.AIS2),
//                     sem3: properties.filter(SamplePlan.AIS3),
//                     sem4: properties.filter(SamplePlan.AIS4),
//                     sem5: properties.filter(SamplePlan.AIS5),
//                     sem6: properties.filter(SamplePlan.AIS6),
//                     sem7: properties.filter(SamplePlan.AIS7),
//                     sem8: properties.filter(SamplePlan.AIS8),

//                 });
//                 break;
//             case "Graphics":
//                 setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.GraphicsS1),
//                     sem2: properties.filter(SamplePlan.GraphicsS2),
//                     sem3: properties.filter(SamplePlan.GraphicsS3),
//                     sem4: properties.filter(SamplePlan.GraphicsS4),
//                     sem5: properties.filter(SamplePlan.GraphicsS5),
//                     sem6: properties.filter(SamplePlan.GraphicsS6),
//                     sem7: properties.filter(SamplePlan.GraphicsS7),
//                     sem8: properties.filter(SamplePlan.GraphicsS8),

//                 });
//                 break;
//             case "Security":
//                 setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.SecurityS1),
//                     sem2: properties.filter(SamplePlan.SecurityS2),
//                     sem3: properties.filter(SamplePlan.SecurityS3),
//                     sem4: properties.filter(SamplePlan.SecurityS4),
//                     sem5: properties.filter(SamplePlan.SecurityS5),
//                     sem6: properties.filter(SamplePlan.SecurityS6),
//                     sem7: properties.filter(SamplePlan.SecurityS7),
//                     sem8: properties.filter(SamplePlan.SecurityS8),

//                 });
//                 break;
//             case "DB":
//                 setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.DBS1),
//                     sem2: properties.filter(SamplePlan.DBS2),
//                     sem3: properties.filter(SamplePlan.DBS3),
//                     sem4: properties.filter(SamplePlan.DBS4),
//                     sem5: properties.filter(SamplePlan.DBS5),
//                     sem6: properties.filter(SamplePlan.DBS6),
//                     sem7: properties.filter(SamplePlan.DBS7),
//                     sem8: properties.filter(SamplePlan.DBS8),

//                 });
//                 break;
//             case "Media":
//                 setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.MediaS1),
//                     sem2: properties.filter(SamplePlan.MediaS2),
//                     sem3: properties.filter(SamplePlan.MediaS3),
//                     sem4: properties.filter(SamplePlan.MediaS4),
//                     sem5: properties.filter(SamplePlan.MediaS5),
//                     sem6: properties.filter(SamplePlan.MediaS6),
//                     sem7: properties.filter(SamplePlan.MediaS7),
//                     sem8: properties.filter(SamplePlan.MediaS8),

//                 });
//                 break;
//             case "Network":
//                 setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.NetworkS1),
//                     sem2: properties.filter(SamplePlan.NetworkS2),
//                     sem3: properties.filter(SamplePlan.NetworkS3),
//                     sem4: properties.filter(SamplePlan.NetworkS4),
//                     sem5: properties.filter(SamplePlan.NetworkS5),
//                     sem6: properties.filter(SamplePlan.NetworkS6),
//                     sem7: properties.filter(SamplePlan.NetworkS7),
//                     sem8: properties.filter(SamplePlan.NetworkS8),

//                 });
//                 break;
//             case "Parallel":
//                 setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.ParallelS1),
//                     sem2: properties.filter(SamplePlan.ParallelS2),
//                     sem3: properties.filter(SamplePlan.ParallelS3),
//                     sem4: properties.filter(SamplePlan.ParallelS4),
//                     sem5: properties.filter(SamplePlan.ParallelS5),
//                     sem6: properties.filter(SamplePlan.ParallelS6),
//                     sem7: properties.filter(SamplePlan.ParallelS7),
//                     sem8: properties.filter(SamplePlan.ParallelS8),

//                 });
//                 break;
//             case "Languages":
//                 setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.LanguagesS1),
//                     sem2: properties.filter(SamplePlan.LanguagesS2),
//                     sem3: properties.filter(SamplePlan.LanguagesS3),
//                     sem4: properties.filter(SamplePlan.LanguagesS4),
//                     sem5: properties.filter(SamplePlan.LanguagesS5),
//                     sem6: properties.filter(SamplePlan.LanguagesS6),
//                     sem7: properties.filter(SamplePlan.LanguagesS7),
//                     sem8: properties.filter(SamplePlan.LanguagesS8),
//                 });
//                 break;
//             case "SE":
//                 setItems({
//                     ...items,
//                     focusArea: event.target.value,
//                     sem1: properties.filter(SamplePlan.SES1),
//                     sem2: properties.filter(SamplePlan.SES2),
//                     sem3: properties.filter(SamplePlan.SES3),
//                     sem4: properties.filter(SamplePlan.SES4),
//                     sem5: properties.filter(SamplePlan.SES5),
//                     sem6: properties.filter(SamplePlan.SES6),
//                     sem7: properties.filter(SamplePlan.SES7),
//                     sem8: properties.filter(SamplePlan.SES8),

//                 });
//                 break;
//         }
//     };

//     return (
//         <ContentWrapper>

//             <select
//                 className="custom-select"
//                 value={items.focusArea}
//                 onChange={handlePlan}
//             >
//                 <option value="Algo"> Algorithms and Theory</option>
//                 <option value="AI">Artificial Intelligence</option>
//                 <option value="Graphics">Computer Graphics and Games</option>
//                 <option value="Security">Computer Security</option>
//                 <option value="DB">Database Systems</option>
//                 <option value="Media">Multimedia Information Retrieval</option>
//                 <option value="Network">Networking and Distributed Systems</option>
//                 <option value="Parallel">Parallel Computing</option>
//                 <option value="Languages">Programming Languages</option>
//                 <option value="SE">Software Engineering</option>
//             </select>
//             <GridContextProvider onChange={onChange}>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem0"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem0.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem1"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem1.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem2"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem2.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem3"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem3.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem4"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem4.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem5"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem5.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem6"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem6.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem7"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem7.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//                 <GridDropZone
//                     className="dropzone"
//                     id="sem8"
//                     boxesPerRow={1}
//                     rowHeight={70}
//                 >
//                     {items.sem8.map((item) => (
//                         <GridItem key={item.moduleCode}>
//                             <div className="grid-item">
//                                 <div className="grid-item-content">{item.moduleCode}</div>
//                             </div>
//                         </GridItem>
//                     ))}
//                 </GridDropZone>
//             </GridContextProvider>
//         </ContentWrapper>
//     );
// }

// export default Content;
