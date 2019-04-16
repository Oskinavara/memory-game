import React, { Component } from "react";

class Board extends Component {
  state = {};
  render() {
    return (
      <div className="board">
        <div className="container ">
          <div className="row h-50 ">
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
          </div>
          <div className="row h-50">
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
          </div>
          <div className="row h-50">
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
            <div className="col">
               <button className="tile">
                <i className="fas fa-arrows-alt" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
