import { useState, useEffect } from "react";
export function Products({ productos }) {
  return (
    <ul>
      <div className="row">
        {productos?.map((item) => (
          <div className="col-sm-5 mb-3" key={item.id}>
            <div className="card shadow" id="tarjeta">
              <div></div>

              <div class="card-body">
                <div className="row">
                  <div className="col">
                    <img
                      src={item.image}
                      class="card-img-top"
                      alt={item.title}
                    />
                  </div>
                  <div className="col">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                  </div>
                </div>
                <center>
                  <a href="#" class="btn btn-success mt-2" type="button">
                    <i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;
                    <b>$&nbsp;{item.price}&nbsp;&nbsp;Comprar Ahora!</b>
                  </a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}

