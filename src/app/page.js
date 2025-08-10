
"use client";

import { useState } from "react";
import hash from "object-hash";
import { connectContract } from "@/services/Web3Service";

export default function Home() {

  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [fee, setFee] = useState("0");

  function onUrlChange(event) {
    setUrl(event.target.value);
  }

  function onFeeChange(event) {
    setFee(event.target.value);
  }

  function btnCreateClick() {
    const linkId = hash(url).slice(0, 5);
    setMessage("");
    connectContract();
  }

  return (
    <>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-6">
            <img src="/link.jpg" alt="imagem link" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
          </div>
          <div className="col-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Link Protect</h1>
            <p className="lead">Proteja seus links. Lucre com eles.</p>
            <hr />
            <p>Cole a sua URL abaixo, defina a taxa por clique e conecte sua carteira para proteger seu link com a tecnologia blockchain.</p>
            <div className="form-floating mb-3">
              <input type="text" id="url" className="form-control" value={url || ""} onChange={onUrlChange} />
              <label htmlFor="url">Link:</label>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <div className="form-floating">
                  <input type="number" id="fee" className="form-control" value={fee || 0} onChange={onFeeChange} />
                  <label htmlFor="fee">Taxa por clique (wei):</label>
                </div>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-primary w-100 h-100" onClick={btnCreateClick}>
                  <img src="/metamask.svg" width={32} className="me-2" />
                  Conectar e criar Link
                </button>
              </div>
            </div>
            {
              message
                ? <div className="alert alert-success p-3 col-12 mt-3" role="alert">{message}</div>
                : <></>
            }
          </div>
        </div>
      </div>
    </>
  );
}
