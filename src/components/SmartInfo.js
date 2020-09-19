import React, { Component } from 'react'
import back from "./img/back4.jpg"
import back1 from "./img/back.jpg"
import loader from "./img/loadicon1.gif"

const FOUNDATION_ADDRESS = 'TYDWj2DBbKMdnzmUgZZrujSxkwuy522fCZ';

let contracturl = "https://tronscan.org/#/contract/" + FOUNDATION_ADDRESS;

export class SmartInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,

        }

        this.button100 = this.button100.bind(this);
        this.button1000 = this.button1000.bind(this);
        this.button10k = this.button10k.bind(this);
        this.button50k = this.button50k.bind(this);
        this.button100k = this.button100k.bind(this);
        this.button500k = this.button500k.bind(this);
        this.reset = this.reset.bind(this);

    }

    button100(event) {
        this.setState({ count: this.state.count + 10 });
    }

    button1000(event) {
        this.setState({ count: this.state.count + 1000 });
    }

    button10k(event) {
        this.setState({ count: this.state.count + 10000 });
    }

    button50k(event) {
        this.setState({ count: this.state.count + 50000 });
    }

    button100k(event) {
        this.setState({ count: this.state.count + 100000 });
    }

    button500k(event) {
        this.setState({ count: this.state.count + 500000 });
    }

    reset(event) {
        this.setState({ count: 0 });
    }

    render() {
        const colStyle = {
            backgroundColor: "black", marginTop: "20px", borderRadius: "20px", border: "3px solid green", marginLeft: "20px", marginRight: "20px",
        };
        const h2Style = {
            fontSize: "24px", color: "orange", textAlign: "center", fontFamily: "MyFont", margin: "20px", paddingTop: "10px", paddingBottom: "10px", fontWeight: "bold"
        }
        return (
            <div>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>
                        <h2 style={h2Style}>Smart Contract Info.</h2>
                        <div className="col-xl-12" style={{ textAlign: "center" }}>
                            <p style={{ color: "white", float: "left" }}>Contract Address </p><p style={{ color: "white", float: "right" }}>
                                {this.props.smartLoading ? <img src={loader} alt="loading..." width="30px" style={{ paddingLeft: "10px" }} /> :
                                    <a href={contracturl} style={{ textDecoration: "underline", color: "white" }}>TYDWj2DBb....</a>}
                            </p><br /><br />

                            <p style={{ color: "white", float: "left" }}>Total Deposits </p>
                            <p style={{ color: "white", float: "right" }}> {this.props.totalInvested} TRX</p>

                            <br /><br />
                            <p style={{ color: "white", float: "left" }}> Contract Balance </p><p style={{ color: "white", float: "right" }}> {this.props.contractBalance} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Total Paid  </p><p style={{ color: "white", float: "right" }}> {this.props.totalPayout} TRX</p><br /><br />

                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default SmartInfo
