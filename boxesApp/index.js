// const Box = (props) => {
//   const { text, className } = props;

//   return (
//     <div className={`box ${className}`}>
//       <p className="box-title">{text}</p>
//     </div>
//   );
// };

// const element = (
//   <div className="boxes-app-container">
//     <h1 className="heading">Boxes</h1>
//     <div className="boxes-container">
//       <Box text="Small" className="small-box" />
//       <Box text="Medium" className="medium-box" />
//       <Box text="Large" className="large-box" />
//     </div>
//   </div>
// );

// ReactDOM.render(element, document.getElementById("root"));

const Box = (props) => {
    {name,text}=props
    // const classactual = `common ${name}`;
    return (
        <div className={`common ${name}`}>
            <p className="para">{text}</p>
        </div>
    )
  //  Write your code here.
};

const element = (
  <div className="outside">
    <h1 className="head">Boxes</h1>
    <div className="inside">
      <Box name="first" text="small"/>
      <Box name="second" text="medium"/>
      <Box name="third" text="large"/>
    </div>
  </div>

  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
