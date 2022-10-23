import React /*, { useState }*/ from "react";
import "./UserStatus.css";


// export function UserStatus2(props) {
//   let [editMode, setEditMode] = useState(false);
//   let [statusText, setStatusText] = useState(props.status);

//   function blurHandler(event) {
//     props.updateStatus(statusText);
//     setEditMode(false);
//   }
//   function changeHandler(event) {
//     setStatusText(event.target.value);
//   }

//   return <>
//     {editMode
//       ? <input className='user-status__input' onBlur={blurHandler} onChange={changeHandler} value={statusText || ''} autoFocus />
//       : <span className='user-status__span' onDoubleClick={() => { setEditMode(true); setStatusText(props.status) }}>{props.status || '------------'}</span>}
//   </>;
// }

export class UserStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = { // имя обязательно должно быть state
      editMode: false,
      statusText: props.status,
    };
  }

  blurHandler = (event) => {
    this.props.updateStatus(this.state.statusText);
    this.setState({ editMode: false }); // метод setState уже есть, он унаследован из родительского класса React.Component
  }

  changeHandler = (event) => {
    this.setState({ statusText: event.target.value });
  }

  dblClickHandler = () => {
    this.setState({
      editMode: true,
    });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.status !== prevProps.status) {
      this.setState({ statusText: this.props.status });
    }
  }

  render() {
    return <>
      {this.state.editMode
        ? <input className='user-status__input' onBlur={this.blurHandler} onChange={this.changeHandler} value={this.state.statusText || ''} autoFocus />
        : <span className='user-status__span' onDoubleClick={this.dblClickHandler}>{this.props.status || '------------'}</span>}
    </>;
  }
};