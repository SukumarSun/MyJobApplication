const Notification = (props) => {
  const { className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="notifications-app-container">
    <h1 className="title">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

// const Notification = props => {
//   //  Write your code here.
//   const {Name,text,source}=props
//   const containerClassName = `notification-container ${Name}`

//   return (
//       <div className={Name}>
//           <img src={source}/>

//         <p>
//             {text}
//         </p>
//       </div>
//   )
// }

// const element = (
//     <div className="outside">
//         <div className="inside">
//         <h1 className="head">Notaisfication</h1>
//         <Notification Name="yes",text="information message" source="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>>
//         <Notification Name="yes",text="information message" source="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>>
//             <Notification Name="yes",text="information message" source="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>>
//             <Notification Name="yes",text="information message" source="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>>
//         </div>
//     </div>

//   //  Write your code here.
// )

// ReactDOM.render(element, document.getElementById('root'))
