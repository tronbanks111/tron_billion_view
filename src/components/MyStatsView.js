import React, { Component } from 'react'
import back from "./img/back4.jpg"
import loader from "./img/loadicon1.gif"
let tronAddressurl = "https://tronscan.org/#/address/";

export class Invest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,

        }
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
                        <h2 style={h2Style}>User Statistics (View Mode)</h2>
                        <div className="col-xl-12" style={{ textAlign: "center" }}>

                            <p style={{ color: "white", float: "left" }}>Status</p><p style={{ color: "white", float: "right" }}> {this.props.userStatus}</p><br /><br />

                            <p style={{ color: "white", float: "left" }}>My Address </p>
                            {this.state.walletLoad ?
                                <img src={loader} alt="loading..." width="30px" style={{ paddingLeft: "20px" }} />
                                : <a href={tronAddressurl + this.props.my_address1} style={{ color: "white", float: "right", textDecoration: "underline" }}>

                                    {this.props.my_address}...</a>}
                            <br /><br />
                            <p style={{ color: "white", float: "left" }}>Personal Deposits </p><p style={{ color: "white", float: "right" }}> {this.props.total_deposits} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Referred By</p>
                            <a href={tronAddressurl + this.props.upline1} style={{ color: "white", float: "right", textDecoration: "underline" }}> {this.props.upline}...</a><br /><br />

                            <p style={{ color: "white", float: "left" }}>350% Limit Remaining </p><p style={{ color: "white", float: "right" }}> {Number(this.props.limit_remaining).toFixed(4)} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>1.4% ROI Received</p>
                            <p style={{ color: "white", float: "right" }}> {Number(this.props.roiClaimed).toFixed(4)} TRX</p><br /><br />

                            <p style={{ color: "white", float: "left" }}>Direct Commissions </p><p style={{ color: "white", float: "right" }}> {this.props.direct_bonus} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Generation Commissions </p><p style={{ color: "white", float: "right" }}> {this.props.gen_bonus} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Total TRX Received </p><p style={{ color: "white", float: "right" }}> {Number(this.props.payouts).toFixed(4)} TRX</p><br /><br />
                            <p style={{ color: "white", float: "left" }}>Withdrawable </p><p style={{ color: "white", float: "right" }}>

                                {this.props.roiLoading ? <span>calculating...  </span> :
                                    Number(this.props.roiUnclaimed).toFixed(4)}
                                <span style={{ paddingLeft: "5px" }}>TRX</span></p><br /><br />
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div>
        )
    }
}

export default Invest
